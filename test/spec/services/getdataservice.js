'use strict';

xdescribe('Service: getDataService', function () {

  // load the service's module
  beforeEach(module('corporateDashBoardApp'));

  // instantiate service
  var getDataService;
  beforeEach(inject(function (_getDataService_) {
    getDataService = _getDataService_;
  }));

  xit('should do something', function () {
    //expect(!!getDataService).toBe(true);
    expect('').toEqual('');
  });

});
