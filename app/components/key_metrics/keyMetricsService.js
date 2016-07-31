'use strict';

/**
 * @ngdoc service
 * @name corporateDashBoardApp.keyMetricsService
 * @description
 * # keyMetricsService
 * Service in the corporateDashBoardApp.
 */
angular.module('corporateDashBoardApp')
  .service('keyMetricsService',['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

	this.getReportedIssuesChartData = function(){

    	return $http({
    		method: 'GET',
    		url : '../data/reportedissues.json'
    	});
	};

	this.getTransChartData = function(){
		return $http({
    		method: 'GET',
    		url : '../data/transchartdata.json'
    	});
	};

	this.getOpenIssuesChartData = function(){
		return $http({
			method: 'GET',
			url : '../data/openissues.json'
	    });
	};

	this.getPayingCustomersChartData = function(){
		return $http({
			method: 'GET',
			url : '../data/payingcustomers.json'
	    });
	      
	};

}]);
