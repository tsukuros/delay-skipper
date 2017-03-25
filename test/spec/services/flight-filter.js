'use strict';

describe('Service: flightFilter', function () {

  // load the service's module
  beforeEach(module('delaySkipperApp'));

  // instantiate service
  var flightFilter;
  beforeEach(inject(function (_flightFilter_) {
    flightFilter = _flightFilter_;
  }));

  it('should do something', function () {
    expect(!!flightFilter).toBe(true);
  });

});
