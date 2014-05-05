'use strict';

describe('Service: Entryservice', function () {

  // load the service's module
  beforeEach(module('contentfulNodeDashboardApp'));

  // instantiate service
  var Entryservice;
  beforeEach(inject(function (_Entryservice_) {
    Entryservice = _Entryservice_;
  }));

  it('should do something', function () {
    expect(!!Entryservice).toBe(true);
  });

});
