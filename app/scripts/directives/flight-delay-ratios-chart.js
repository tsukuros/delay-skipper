'use strict';

/**
 * @ngdoc directive
 * @name delaySkipperApp.directive:flightDelayRatiosChart
 * @description
 * # flightDelayRatiosChart
 */
angular.module('delaySkipperApp')
  .directive('flightDelayRatiosChart', function (histogram) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function postLink(scope, element, attrs) {
        var chart = {};

        scope.$watch('data', function(newValue, oldValue) {
          if (newValue) updateChart(newValue);
        }, true);

        function updateChart(data) {
          chart.series[0].setData(histogram(data, 'delay_ratio', 10), true);
        }

        chart = Highcharts.chart(element[0], {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Flight Delays Ratios'
          },
          xAxis: {
            gridLineWidth: 1,
            max: 150
          },
          yAxis: [{
            title: {
              text: 'Frequency'
            }
          }],
          series: [{
            name: 'Arrival Delay Ratios',
            type: 'column',
            data: scope.data,
            pointPadding: 0,
            groupPadding: 0,
            pointPlacement: 'between'
          }]
        });
      }
    };
  });
