/**
 * @ngdoc service
 * @name corporateDashBoardApp.geoMetricsService
 * @description
 * # geoMetricsService
 * Service in the corporateDashBoardApp.
 */
angular.module('corporateDashBoardApp')
  .service('geoMetricsService',['$http','$interval','$location', function ($http, $interval) {
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
            //$timeout(getGeoData, 1000);

	    });
	};
    
	//getGeoData();
	//var promise; //= $interval(getGeoData, 1000);
    
     //var startPolling = function(){
     	//promise = $interval(getGeoData, 1000);
     	//console.log('started polling');
     //};

	return {
		geoData : geoData,
		//promise : promise,
		getGeoData : getGeoData
	};
	

}]);
