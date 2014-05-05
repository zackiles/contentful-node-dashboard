'use strict';

describe('Service: Filereaser', function () {

  // load the service's module
  beforeEach(module('contentfulNodeDashboardApp'));

  // instantiate service
  var Filereaser;
  beforeEach(inject(function (_Filereaser_) {
    Filereaser = _Filereaser_;
  }));

  it('should do something', function () {
    expect(!!Filereaser).toBe(true);
  });

});
