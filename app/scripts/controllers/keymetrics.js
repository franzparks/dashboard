'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:KeymetricsctrlCtrl
 * @description
 * # KeymetricsctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('KeyMetricsCtrl',['$scope','$interval','getDataService', function ($scope,$interval,getDataService) {

   $scope.myDataSource = {
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            numberPrefix: "$"
        },
        data: [{
            label: "Bakersfield Central",
            value: "880000"
        }, {
            label: "Garden Groove harbour",
            value: "730000"
        }, {
            label: "Los Angeles Topanga",
            value: "590000"
        }, {
            label: "Compton-Rancho Dom",
            value: "520000"
        }, {
            label: "Daly City Serramonte",
            value: "330000"
        }]
    };

	/*$scope.reportedIssuesData = {};
    $scope.openIssuesData = {};
    $scope.payingCustomersData = {};

    $scope.chartoptions = {
        "containerBackgroundColor": "#FF0000",
        "containerBackgroundOpacity": "0"
    };

    var refreshData = function(){

        getDataService.getReportedIssuesChartData().then(function(response) {
            // this callback will be called asynchronously
            // when the response is available
            var chartObject = {
                chart:{
                    caption:'Number Of Reported Issues',
                    subcaption:'In The Last 3 weeks',
                    xaxisname:'Date',
                    yaxisname:'Reported Issues',
                    showvalues:'0',
                    theme:'fint'
                }
            };

            chartObject.data = response.data;
         
            $scope.reportedIssuesData = chartObject;
            
        });


        getDataService.getOpenIssuesChartData().then(function(response) {
           
            var chartObject = {

                chart: {
                    caption:'Number Of Open Issues',
                    subcaption:'Last 3 weeks',
                    xaxisname:'Date',
                    yaxisname:'No. Of Open Issues',
                    showvalues:'0',
                    theme:'fint'
                }
            };

            chartObject.data = response.data;
         
            $scope.openIssuesData = chartObject;
            
        });

        getDataService.getPayingCustomersChartData().then(function(response) {
           
            var chartObject = {

                chart: {
                    caption:'Number of Paying Customers',
                    subcaption:'Last 3 weeks',
                    xaxisname:'Date',
                    yaxisname:'Paying Customer Index',
                    yaxismaxvalue:'15000',
                    showvalues:'0',
                    theme:'fint'
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
    }); */    

  }]);
