'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:DataviewctrlCtrl
 * @description
 * # DataviewctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('DataViewCtrl',['$scope','$filter', 'NgTableParams','getDataService',
     function ($scope,$filter, NgTableParams,getDataService) {

    //var self = this;
	$scope.data = [];

    getDataService.getDataViewData().then(function(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.data = response.data;
        $scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
        
    });


  }]);
