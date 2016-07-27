'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:KeymetricsctrlCtrl
 * @description
 * # KeymetricsctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('KeyMetricsCtrl',['getDataService', function (getDataService) {


  	this.chartWidth = '550';
    this.chartHeight = '300';
    this.dataType = 'json';

	this.salesData = getDataService.getSalesData();


	this.transChartData = getDataService.getTransChartData(); 

    this.dailyFootfallChart = getDataService.getDailyFootfallChart();

    this.dailyCSatChart = getDataService.getDailyCSatChartData();

  }]);
