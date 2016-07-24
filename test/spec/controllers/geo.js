'use strict';

describe('Controller: GeoctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('corporateDashBoardApp'));

  var GeoctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeoctrlCtrl = $controller('GeoctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeoctrlCtrl.awesomeThings.length).toBe(3);
  });
});
