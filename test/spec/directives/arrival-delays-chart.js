'use strict';

describe('Directive: arrivalDelaysChart', function () {

  // load the directive's module
  beforeEach(module('delaySkipperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<arrival-delays-chart></arrival-delays-chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the arrivalDelaysChart directive');
  }));
});
