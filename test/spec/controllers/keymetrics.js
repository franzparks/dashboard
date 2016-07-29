'use strict';

xdescribe('Controller: KeymetricsctrlCtrl', function () {

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

  xit('should attach a list of awesomeThings to the scope', function () {
    expect('KeymetricsctrlCtrl').toEqual('KeymetricsctrlCtrl');
  });
});
