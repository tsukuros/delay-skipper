'use strict';

/**
 * @ngdoc service
 * @name delaySkipperApp.flightFilter
 * @description
 * # flightFilter
 * Service in the delaySkipperApp.
 */
angular.module('delaySkipperApp')
  .service('flightFilter', function () {
    function apply(filter, array){
      if (array.length) {
        if (filter.arrivalHour !== null) {
          array = filterByHour('arrival_time_expected', filter.arrivalHour, array);
        }
        if (filter.origin) {
          array = filterByKey('origin', filter.origin, array);
        }
        if (filter.destination) {
          array = filterByKey('destination', filter.destination, array);
        }
        return array;
      }
    };

    function filterByHour(key, value, array){
      return array.filter(function(item){
        var hour = +item[key].split(':')[0];
        return hour === value;
      });
    };

    function filterByKey(key, value, array){
      return array.filter(function(item){
        return item[key] == value;
      });
    };
    return {apply: apply};
  });
