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

    var self = this;
	$scope.data = [];
	self.tableParams = new NgTableParams({}, { dataset: data});



  }]);
