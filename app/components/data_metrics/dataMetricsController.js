/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:DataviewctrlCtrl
 * @description
 * # DataviewctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('DataViewCtrl',['$scope','$interval', 'NgTableParams','dataMetricsService','Papa',
     function ($scope,$interval, NgTableParams,dataMetricsService,Papa) {

    'use strict';

    var promise;

    //var self = this;
    $scope.issues = [];
	$scope.issues = dataMetricsService.dataView;

    $scope.sortType     = 'customerName'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchTable   = '';     // set the default search/filter term
    
    
    $scope.start = function(){
        $scope.stop();
        promise = $interval(dataMetricsService.getIssuesData, 1000);
    };

    $scope.stop = function(){
        $interval.cancel(promise);
        promise = undefined;
    };

    //start polling when controller scope is created
    $scope.start();

    // Cancel interval on page changes
    $scope.$on('$destroy', function(){
       $scope.stop();
    });      

  }]);
