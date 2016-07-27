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

    this.dailyCSatChart = {
    	
                "chart":{
                    "caption":"Daily Customer Satisfaction Trend for Last 3 weeks",
                    "subcaption":"On a scale of 0 to 5",
                    "xaxisname":"Date",
                    "yaxisname":"Customer Satisfaction Index",
                    "yaxismaxvalue":"5",
                    "showvalues":"0",
                    "theme":"fint"
                },		
                "data":[
                    {
                        "label":"14 May",
                        "value":"4.90"
                    },		
                    {
                        "label":"15 May",
                        "value":"4.05"
                    },		
                    {
                        "label":"16 May",
                        "value":"4.72"
                    },		
                    {
                        "label":"17 May",
                        "value":"4.56"
                    },		
                    {
                        "label":"18 May",
                        "value":"3.65"
                    },		
                    {
                        "label":"19 May",
                        "value":"3.77"
                    },		
                    {
                        "label":"20 May",
                        "value":"4.52"
                    },		
                    {
                        "label":"21 May",
                        "value":"4.13"
                    },		
                    {
                        "label":"22 May",
                        "value":"3.25"
                    },		
                    {
                        "label":"23 May",
                        "value":"3.38"
                    },		
                    {
                        "label":"24 May",
                        "value":"4.53"
                    },		
                    {
                        "label":"25 May",
                        "value":"4.24"
                    },		
                    {
                        "label":"26 May",
                        "value":"3.31"
                    },		
                    {
                        "label":"27 May",
                        "value":"3.25"
                    },		
                    {
                        "label":"28 May",
                        "value":"4.14"
                    },		
                    {
                        "label":"29 May",
                        "value":"4.82"
                    },		
                    {
                        "label":"30 May",
                        "value":"4.19"
                    },		
                    {
                        "label":"31 May",
                        "value":"4.94"
                    },		
                    {
                        "label":"1 Jun",
                        "value":"4.02"
                    },		
                    {
                        "label":"2 Jun",
                        "value":"4.80"
                    },		
                    {
                        "label":"Yesterday",
                        "value":"3.70"
                    }
                ]
            };       

  }]);
