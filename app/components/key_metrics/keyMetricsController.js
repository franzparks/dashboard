/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:KeymetricsctrlCtrl
 * @description
 * # KeymetricsctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('KeyMetricsCtrl',['$scope','$interval','keyMetricsService', function ($scope,$interval,keyMetricsService) {

    'use strict';

    var promise;
    
    $scope.reportedIssuesData = keyMetricsService.reportedIssues;
    $scope.openIssuesData = keyMetricsServiceopenIssues;
    $scope.payingCustomersData = keyMetricsService.payingCustomers;
    
    
    $scope.start = function(){
        $scope.stop();
        promise = $interval(keyMetricsService.refreshData, 1000);
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
