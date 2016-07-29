'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:KeymetricsctrlCtrl
 * @description
 * # KeymetricsctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('KeyMetricsCtrl',['$scope', 'getDataService', function ($scope, getDataService) {


  	this.chartWidth = '550';
    this.chartHeight = '300';
    this.dataType = 'json';

	$scope.salesData = {};
    $scope.transChartData = {};
    $scope.dailyFootfallChart = {};
    $scope.dailyCSatChart = {};

    getDataService.getReportedIssuesChartData().then(function(response) {
        // this callback will be called asynchronously
        // when the response is available
        var chartObject = {
            "chart":{
                "caption":"Number Of Reported Issues",
                "subcaption":"In The Last 3 weeks",
                "xaxisname":"Date",
                "yaxisname":"Reported Issues",
                "showvalues":"0",
                "theme":"fint"
            }
        };

        chartObject["data"] = response.data;
     
        $scope.salesData = chartObject;
        
    });


    getDataService.getOpenIssuesChartData().then(function(response) {
       
        var chartObject = {

            "chart": {
                "caption":"Number Of Open Issues",
                "subcaption":"Last 3 weeks",
                "xaxisname":"Date",
                "yaxisname":"No. Of Open Issues",
                "showvalues":"0",
                "theme":"fint"
            }
        };

        chartObject["data"] = response.data;
     
        $scope.dailyFootfallChart = chartObject;
        
    });

    getDataService.getPayingCustomersChartData().then(function(response) {
       
        var chartObject = {

            "chart": {
                "caption":"Number of Paying Customers",
                "subcaption":"Last 3 weeks",
                "xaxisname":"Date",
                "yaxisname":"Paying Customer Index",
                "yaxismaxvalue":"15000",
                "showvalues":"0",
                "theme":"fint"
            }
        };

        chartObject["data"] = response.data;
     
        $scope.dailyCSatChart = chartObject;
        
    });

  }]);
