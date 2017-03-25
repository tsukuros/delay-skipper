'use strict';

describe('Service: histogram', function () {

  // load the service's module
  beforeEach(module('delaySkipperApp'));

  // instantiate service
  var histogram;
  beforeEach(inject(function (_histogram_) {
    histogram = _histogram_;
  }));

  it('should do something', function () {
    expect(!!histogram).toBe(true);
  });

});
