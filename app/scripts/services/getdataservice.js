'use strict';

/**
 * @ngdoc service
 * @name corporateDashBoardApp.getDataService
 * @description
 * # getDataService
 * Service in the corporateDashBoardApp.
 */
angular.module('corporateDashBoardApp')
  .service('getDataService',['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

	this.getSalesData = function(){

    	return $http({
    		method: "GET",
    		url : "../data/keyMetrics.json"
    	});
	};

	this.getTransChartData = function(){
		return $http({
    		method: "GET",
    		url : "../data/transchartdata.json"
    	});
	};

	this.getDailyFootfallChart = function(){
		return $http({
			method: "GET",
			url : "../data/dailyfootfall.json"
	    });
	};

	this.getDailyCSatChartData = function(){
		return $http({
			method: "GET",
			url : "../data/dailysatchart.json"
	    });
	      
	};

	this.getGeoData = function(){

		return $http({
			method: "GET",
			url : "../data/geochart.json"
	    });
	};

}]);
