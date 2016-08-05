/**
 * @ngdoc service
 * @name corporateDashBoardApp.geoMetricsService
 * @description
 * # geoMetricsService
 * Service in the corporateDashBoardApp.
 */
angular.module('corporateDashBoardApp')
  .service('geoMetricsService',['$http','$timeout', function ($http, $timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    'use strict';
    var geoData = {};

	var pollGeoData = function(){

		$http({
			method: 'GET',
			url : '../data/geochart.json'
	    }).then(function(res){
	    	geoData = res.data;
	    	$timeout(pollGeoData, 1000);
	    });
	};

	pollGeoData();

	return {
		data : geoData
	};

}]);
