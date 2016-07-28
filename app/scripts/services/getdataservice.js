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

	return {

        "chart":{
            "caption":"Daily Customer Satisfaction Trend for Last 3 weeks",
            "subcaption":"On a scale of 0 to 5",
            "xaxisname":"Date",
            "yaxisname":"Customer Satisfaction Index",
            "yaxismaxvalue":"5",
            "showvalues":"0",
            "theme":"fint"
        },		
        "data":
    };       
};

this.getGeoData = function(){

	return {
            "chart": {
                "caption": "Annual Sales by State",
                "subcaption": "Last year",
                "entityFillHoverColor": "#cccccc",
                "numberScaleValue": "1,1000,1000",
                "numberScaleUnit": "K,M,B",
                "numberPrefix": "$",
                "showLabels": "1",
                "theme": "fint"
            },
            "colorrange": {
                "minvalue": "0",
                "startlabel": "Low",
                "endlabel": "High",
                "code": "#e44a00",
                "gradient": "1",
                "color": [
                    {
                        "maxvalue": "56580",
                        "displayvalue": "Average",
                        "code": "#f8bd19"
                    },
                    {
                        "maxvalue": "100000",
                        "code": "#6baa01"
                    }
                ]
            },
            "data": 
        }; 
};

}]);
