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

    getDataService.getSalesData().then(function(data) {
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

            chartObject.data = data;
            console.log(chartObject);
            //return chartObject;
            $scope.salesData = chartObject;
        
    });


	this.transChartData = getDataService.getTransChartData(); 

    this.dailyFootfallChart = getDataService.getDailyFootfallChart();

    this.dailyCSatChart = getDataService.getDailyCSatChartData();

  }]);
