'use strict';

describe('Directive: ngFileSelect', function () {

  // load the directive's module
  beforeEach(module('contentfulNodeDashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-file-select></ng-file-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngFileSelect directive');
  }));
});
