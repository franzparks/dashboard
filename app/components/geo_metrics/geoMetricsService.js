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
    
    var geoData = { data: {} };

	var getGeoData = function(){

		$http.get('../data/geochart.json').then(function(res){
	    	if (typeof res.data === 'object') {
                geoData.data = res.data;
                //console.log(data.resp);
            } else {
                error(res.data);
            }
            $timeout(getGeoData, 10000);

	    });
	};
    
	getGeoData();


	return {
		geoData : geoData
	};
	

}]);
