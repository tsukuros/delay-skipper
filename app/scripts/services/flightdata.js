'use strict';

/**
 * @ngdoc service
 * @name delaySkipperApp.flightData
 * @description
 * # flightData
 * Service in the delaySkipperApp.
 */
angular.module('delaySkipperApp')
  .service('flightData', ['$http', 'AIRPORTS', function ($http, AIRPORTS) {
    function groupByWeekDay(array){
      var o = {};
      array.forEach(function(item){
        var day = item.weekday.arrival.actual;

        if (o[day]) {
          o[day].push(item);
        } else {
          o[day] = [item];
        }
      });
      return o;
    }

    function getDelayRatio(delay, duration){
      return (Math.round((delay / duration) * 10000) / 100);
    }

    function getFlightsData(url, start_index, end_index){
      var slice_args = [], origins_array = [], destinations_array = [];
      slice_args[0] = start_index ? start_index : 1;
      if (end_index) { slice_args.push(end_index); }

      return $http.get(url)
        .then(function(res){
          var lines = res.data.split('\n');
          if (!end_index) { lines.pop(); }
          var chunk = [].slice.apply(lines, slice_args);
          var flights = chunk.map(function(item){
            var values = item.split(','),
            fl_date = values[0],
            origin = values[1].replace(/"/g, ''),
            dest = values[2].replace(/"/g, ''),
            dep = values[3].replace(/"/g, ''),
            delay = Number(values[4]),
            duration = Number(values[5]),
            distance = values[6],
            timezone = {
              origin: AIRPORTS[origin].timezone,
              destination: AIRPORTS[dest].timezone
            },
            departure_moment = moment.tz(fl_date + ' ' + dep[0]+dep[1] + ':' + dep[2]+dep[3], timezone.origin).format(),
            arrival_moment = moment.tz(departure_moment, timezone.destination).add(duration, 'm').format();
            
            if (origins_array.indexOf(origin) === -1) { origins_array.push(origin) };
            if (destinations_array.indexOf(dest) === -1) { destinations_array.push(dest) };

            return {
              fl_date: fl_date,
              origin: origin,
              destination: dest,
              crs_dep_time: dep,
              arr_delay: delay,
              crs_elapsed_time: duration,
              distance: distance,
              departure_moment: departure_moment,
              arrival_moment: arrival_moment,
              arrival_time_expected: moment(arrival_moment).add(delay, 'm').format('kk:mm'),
              arrival_time_actual: moment(arrival_moment).format('kk:mm'),
              weekday: {
                departure: moment.tz(departure_moment, timezone.origin).day(),
                arrival: {
                  expected: moment.tz(arrival_moment, timezone.destination).day(),
                  actual: moment.tz(arrival_moment, timezone.destination).add(delay, 'm').day()
                }
              },
              timezone: {
                origin: timezone.origin,
                destination: timezone.destination
              },
              delay_ratio: getDelayRatio(delay, duration)
            };
          });

          return {
            origins: origins_array,
            destinations: destinations_array,
            flightsByWeekDay: groupByWeekDay(flights)
          }
        });
    }

    return {
      get: getFlightsData
    };
  }]);
