'use strict';

describe('Controller: KeymetricsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('corporateDashBoardApp'));

  var KeymetricsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KeymetricsctrlCtrl = $controller('KeymetricsctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
      
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    var num = 4;
    expect(num).toBe(4);
  });
});
