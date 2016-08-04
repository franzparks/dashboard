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
    
    $scope.reportedIssuesData = {};
    $scope.openIssuesData = {};
    $scope.payingCustomersData = {};

    var refreshData = function(){

        keyMetricsService.getReportedIssuesChartData().then(function(response) {
            // this callback will be called asynchronously
            // when the response is available
            var chartObject = {};

            chartObject = response.data;

            //update ui only when data changes
            if($scope.reportedIssuesData !== chartObject){
                $scope.reportedIssuesData = chartObject;
            }
            
        });


        keyMetricsService.getOpenIssuesChartData().then(function(response) {
           
            var chartObject = {};

             chartObject = response.data;

            //update ui only when data changes
            if($scope.openIssuesData !== chartObject){
                $scope.openIssuesData = chartObject;
            }
            
        });

        keyMetricsService.getPayingCustomersChartData().then(function(response) {
           
            var chartObject = {};

            chartObject = response.data;
         
            //update ui only when data changes
            if($scope.payingCustomersData !== chartObject){
                $scope.payingCustomersData = chartObject;  
            }
           
            
        });

    };
    
    var promise = $interval(refreshData, 1000); 

    // Cancel interval on page changes
    $scope.$on('$destroy', function(){
        if (promise) {
            $interval.cancel(promise);
            promise = undefined;
        }
    });  

  }]);
