'use strict';

/**
 * @ngdoc function
 * @name delaySkipperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the delaySkipperApp
 */
angular.module('delaySkipperApp')
  .controller('MainCtrl', ['flightData', 'flightFilter', function (flightData, flightFilter) {
    var m = this, DATA_URL = 'https://raw.githubusercontent.com/tsukuros/delay-skipper/master/app/data/flight-delays.csv', flightsGroupedByWeekDay = [];

    m.loading = true;
    m.overallDelayRatio = 0;
    m.filteredFlights = [];
    m.hours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    m.arrivalDelaysByDate = {};
    m.placeholder = {origin: '', destination: ''};

    m.filter = {
      weekDay: 0,
      origin: '',
      destination: '',
      arrivalHour: 1
    };

    m.weekDayChanged = onFilterUpdate;
    m.arrivalHourChanged = onFilterUpdate;

    m.onOriginSelect = function($item, $model, $label, $event){
      m.filter.origin = $item;
      onFilterUpdate();
    };

    m.onOriginInput = function(value){
      if (!value) {
        m.placeholder.origin = m.filter.origin = '';
        onFilterUpdate();
      }
    };

    m.onDestinationInput = function(value){
      if (!value) {
        m.placeholder.destination = m.filter.destination = '';
        onFilterUpdate();
      }
    };

    m.onDestinationSelect = function($item, $model, $label, $event){
      m.filter.destination = $item;
      onFilterUpdate();
    };


    function onFilterUpdate(){
      m.filteredFlights = flightFilter.apply(m.filter, flightsGroupedByWeekDay[m.filter.weekDay]);
      m.overallDelayRatio = getOverallDelayRatio(m.filteredFlights);
    }

    function getOverallDelayRatio(data){
      var total = data.reduce(function(prev, curr){
        return prev + curr.delay_ratio;
      }, 0);
      return (Math.round((total / data.length) * 100) / 100);
    }

    flightData.get(DATA_URL).then(function(res){
      flightsGroupedByWeekDay = res.flightsByWeekDay;
      m.origins = res.origins;
      m.destinations = res.destinations;
      m.weekDayChanged(m.filter.weekDay);
      m.loading = false;
    });
  }]);
