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

	    		//update only when data changes
                if(geoData.data !== res.data){
                	geoData.data = res.data;
                }
                //console.log('geo Metrics Data : '+res.data);
           }
           
	    });
	};
    

	return {
		geoData : geoData,
		getGeoData : getGeoData
	};
	

}]);
