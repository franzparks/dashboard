'use strict';

describe('Controller: DataviewctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('corporateDashBoardApp'));

  var DataviewctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DataviewctrlCtrl = $controller('DataviewctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DataviewctrlCtrl.awesomeThings.length).toBe(3);
  });
});
