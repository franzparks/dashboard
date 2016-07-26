'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:KeymetricsctrlCtrl
 * @description
 * # KeymetricsctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('KeyMetricsCtrl', function () {


  	this.chartWidth = '550';
    this.chartHeight = '300';
    this.dataType = 'json';

    this.myDataSource = {
	   chart: {
	       caption: "Harry's SuperMart",
	       subCaption: "Top 5 stores in last month by revenue",
	       numberPrefix: "$",
	       theme: "fint"
	   },
	   data:[{
	       label: "Bakersfield Central",
	       value: "880000"
	   },
	   {
	       label: "Garden Groove harbour",
	       value: "730000"
	   },
	   {
	       label: "Los Angeles Topanga",
	       value: "590000"
	   },
	   {
	       label: "Compton-Rancho Dom",
	       value: "520000"
	   },
	   {
	       label: "Daly City Serramonte",
	       value: "330000"
	   }]
	};

	this.salesData = {

	};




  });
