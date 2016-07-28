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

    getDataService.getSalesData().then(function(response) {
        // this callback will be called asynchronously
        // when the response is available
        var chartObject = {
            "chart":{
                "caption":"Daily Revenue",
                "subcaption":"Last 3 weeks",
                "xaxisname":"Date",
                "yaxisname":"Revenue (In USD)",
                "numberprefix":"$",
                "showvalues":"0",
                "theme":"fint"
            }
        };

        chartObject["data"] = response.data;
     
        $scope.salesData = chartObject;
        
    });


    getDataService.getTransChartData().then(function(response) {
       
        var chartObject = {
            "chart":{
                "caption":"Daily Revenue",
                "subcaption":"Last 3 weeks",
                "xaxisname":"Date",
                "yaxisname":"Revenue (In USD)",
                "numberprefix":"$",
                "showvalues":"0",
                "theme":"fint"
            }
        };

        chartObject["data"] = response.data;
     
        $scope.transChartData = chartObject;
        
    });

    getDataService.getDailyFootfallChart().then(function(response) {
       
        var chartObject = {

            "chart": {
                "caption":"Daily Footfalls",
                "subcaption":"Last 3 weeks",
                "xaxisname":"Date",
                "yaxisname":"No. of Footfalls",
                "showvalues":"0",
                "theme":"fint"
            }
        };

        chartObject["data"] = response.data;
     
        $scope.dailyFootfallChart = chartObject;
        
    });

    getDataService.getDailyCSatChartData().then(function(response) {
       
        var chartObject = {

            "chart": {
                "caption":"Daily Customer Satisfaction Trend for Last 3 weeks",
                "subcaption":"On a scale of 0 to 5",
                "xaxisname":"Date",
                "yaxisname":"Customer Satisfaction Index",
                "yaxismaxvalue":"5",
                "showvalues":"0",
                "theme":"fint"
            }
        };

        chartObject["data"] = response.data;
     
        $scope.dailyCSatChart = chartObject;
        
    });

  }]);
