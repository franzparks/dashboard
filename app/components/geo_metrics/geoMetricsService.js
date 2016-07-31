/**
 * @ngdoc service
 * @name corporateDashBoardApp.geoMetricsService
 * @description
 * # geoMetricsService
 * Service in the corporateDashBoardApp.
 */
angular.module('corporateDashBoardApp')
  .service('geoMetricsService',['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    'use strict';

	this.getGeoData = function(){

		return $http({
			method: 'GET',
			url : '../data/geochart.json'
	    });
	};

}]);
