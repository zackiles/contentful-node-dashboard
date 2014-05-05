'use strict';

describe('Service: Entrymanager', function () {

  // load the service's module
  beforeEach(module('contentfulNodeDashboardApp'));

  // instantiate service
  var Entrymanager;
  beforeEach(inject(function (_Entrymanager_) {
    Entrymanager = _Entrymanager_;
  }));

  it('should do something', function () {
    expect(!!Entrymanager).toBe(true);
  });

});
