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

    $scope.chartoptions = {
        'containerBackgroundColor': '#FF0000',
        'containerBackgroundOpacity': '0'
    };

    var refreshData = function(){

        keyMetricsService.getReportedIssuesChartData().then(function(response) {
            // this callback will be called asynchronously
            // when the response is available
            var chartObject = {
                chart:{
                    caption:'Number Of Reported Issues',
                    subcaption:'In The Last 3 weeks',
                    xaxisname:'Date',
                    yaxisname:'Reported Issues',
                    showvalues:'0',
                    theme:'ocean'
                }
            };

            chartObject.data = response.data;

            //update ui only when data changes
            if($scope.reportedIssuesData !== chartObject){
                $scope.reportedIssuesData = chartObject;
            }
            
        });


        keyMetricsService.getOpenIssuesChartData().then(function(response) {
           
            var chartObject = {

                chart: {
                    caption:'Number Of Open Issues',
                    subcaption:'Last 3 weeks',
                    xaxisname:'Date',
                    yaxisname:'No. Of Open Issues',
                    showvalues:'0',
                    theme:'ocean'
                }
            };

            chartObject.data = response.data;
         
            $scope.openIssuesData = chartObject;
            
        });

        keyMetricsService.getPayingCustomersChartData().then(function(response) {
           
            var chartObject = {

                chart: {
                    caption:'Number of Paying Customers',
                    subcaption:'Last 3 weeks',
                    xaxisname:'Date',
                    yaxisname:'Paying Customer Index',
                    yaxismaxvalue:'15000',
                    showvalues:'0',
                    theme:'ocean'
                }
            };

            chartObject.data = response.data;
         
            $scope.payingCustomersData = chartObject;
            
        });

    };
    
    var promise = $interval(refreshData, 1000); 

    // Cancel interval on page changes
    $scope.$on('$destroy', function(){
        if (angular.isDefined(promise)) {
            $interval.cancel(promise);
            promise = undefined;
        }
    });  

  }]);
