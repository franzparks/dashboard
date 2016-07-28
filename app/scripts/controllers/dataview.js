'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:DataviewctrlCtrl
 * @description
 * # DataviewctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('DataViewCtrl',['$scope','$filter', 'NgTableParams', function ($scope,$filter, NgTableParams) {

    var self = this;
	var data = [{name: "Moroni", age: 50} /*,*/];
	self.tableParams = new NgTableParams({}, { dataset: data});



  }]);
