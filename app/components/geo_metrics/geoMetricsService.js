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
    
    var geoData = { data: {} };

	var getGeoData = function(){

		$http.get('../data/geochart.json').then(function(res){
	    	if (typeof res.data === 'object') {
                geoData.data = res.data;
                console.log(res.data);
            } else {
                error(res.data);
            }
           
	    });
	};
    

	return {
		geoData : geoData,
		getGeoData : getGeoData
	};
	

}]);
