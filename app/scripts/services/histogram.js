'use strict';

/**
 * @ngdoc service
 * @name delaySkipperApp.histogram
 * @description
 * # histogram
 * Service in the delaySkipperApp.
 */
angular.module('delaySkipperApp')
  .service('histogram', function () {
    /**
     * Get histogram data out of xy data
     * @param   {Array} data  Array of tuples [x, y]
     * @param   {String} Object property to group by
     * @param   {Number} step Resolution for the histogram
     * @returns {Array}       Histogram data
     */
    return function histogram(data, prop, step) {
      var histo = {}, o = {},
          x,
          i,
          arr = [];

      // Group up
      data.forEach(function(item){
        var p = item[prop];

        if (o[p]) {
          o[p].push(item);
        } else {
          o[p] = [item];
        }
      });

      // Group down
      for (var key in o) {
        if (o.hasOwnProperty(key)){
          x = Math.floor(key / step) * step;
          if (!histo[x]) {
            histo[x] = 0;
          }
          histo[x] = histo[x] + o[key].length;
        }
      }

      // Make the histo group into an array
      for (x in histo) {
        if (histo.hasOwnProperty((x))) {
          arr.push([parseFloat(x), histo[x]]);
        }
      }
      // Finally, sort the array
      arr.sort(function(a, b) {
        return a[0] - b[0];
      });

      if (arr.length && arr.length < 3) {
        arr.unshift([ arr[0][0] - 10, 0 ]);
        arr.push([ arr[arr.length - 1][0] + 10, 0 ]);
      }
      return arr;
    }

  });
