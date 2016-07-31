'use strict';

/**
 * @ngdoc service
 * @name corporateDashBoardApp.dataMetricsService
 * @description
 * # dataMetricsService
 * Service in the corporateDashBoardApp.
 */
angular.module('corporateDashBoardApp')
  .service('dataMetricsService',['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

	this.getDataViewData = function(){

		return $http({
			method: 'GET',
			url : '../data/dataview.json'
	    });
	};

}]);
