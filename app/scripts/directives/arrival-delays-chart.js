'use strict';

/**
 * @ngdoc directive
 * @name delaySkipperApp.directive:arrivalDelaysChart
 * @description
 * # arrivalDelaysChart
 */
angular.module('delaySkipperApp')
  .directive('arrivalDelaysChart', ['histogram', function(histogram) {
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
          chart.series[0].setData(histogram(data, 'arr_delay', 20), true);
        }

        chart = Highcharts.chart(element[0], {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Arrival Delays'
          },
          xAxis: {
            gridLineWidth: 1
          },
          yAxis: [{
            title: {
              text: 'Frequency'
            }
          }],
          series: [{
            name: 'Arrival Delays',
            type: 'column',
            data: scope.data,
            pointPadding: 0,
            groupPadding: 0,
            pointPlacement: 'between'
          }]
        });
      }
    };
  }]);
