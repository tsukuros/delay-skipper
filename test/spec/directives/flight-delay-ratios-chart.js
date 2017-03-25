'use strict';

describe('Directive: flightDelayRatiosChart', function () {

  // load the directive's module
  beforeEach(module('delaySkipperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flight-delay-ratios-chart></flight-delay-ratios-chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flightDelayRatiosChart directive');
  }));
});
