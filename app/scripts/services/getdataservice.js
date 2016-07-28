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
	return {
        "chart":{
            "caption":"Daily Transactions",
            "subcaption":"Last 3 weeks",
            "xaxisname":"Date",
            "yaxisname":"No. of Transactions",
            "showvalues":"0",
            "theme":"fint"
        },		
        "data":[
            {
                "label":"14 May",
                "value":"1464"
            },
                {
                "label":"15 May",
                "value":"1062"
            },
                {
                "label":"16 May",
                "value":"1014"
            },
                {
                "label":"17 May",
                "value":"1294"
            },
                {
                "label":"18 May",
                "value":"1382"
            },
                {
                "label":"19 May",
                "value":"1085"
            },
                {
                "label":"20 May",
                "value":"1150"
            },
                {
                "label":"21 May",
                "value":"1420"
            },
                {
                "label":"22 May",
                "value":"1228"
            },
                {
                "label":"23 May",
                "value":"1435"
            },
                {
                "label":"24 May",
                "value":"1051"
            },
                {
                "label":"25 May",
                "value":"1231"
            },
                {
                "label":"26 May",
                "value":"1509"
            },
                {
                "label":"27 May",
                "value":"1480"
            },
                {
                "label":"28 May",
                "value":"1461"
            },
                {
                "label":"29 May",
                "value":"1258"
            },
                {
                "label":"30 May",
                "value":"991"
            },
                {
                "label":"31 May",
                "value":"1275"
            },
                {
                "label":"1 Jun",
                "value":"1336"
            },
                {
                "label":"2 Jun",
                "value":"1097"
            },
            {
                "label":"Yesterday",
                "value":"1411"
            }
        ]
    };
};

this.getDailyFootfallChart = function(){
	return {
        "chart":{
            "caption":"Daily Footfalls",
            "subcaption":"Last 3 weeks",
            "xaxisname":"Date",
            "yaxisname":"No. of Footfalls",
            "showvalues":"0",
            "theme":"fint"},
            
        "data":[
            {
                "label":"14 May",
                "value":"2154"
            },			
            {
                "label":"15 May",
                "value":"1742"
            },			
            {
                "label":"16 May",
                "value":"1845"
            },			
            {
                "label":"17 May",
                "value":"2490"
            },			
            {
                "label":"18 May",
                "value":"1975"
            },			
            {
                "label":"19 May",
                "value":"1840"
            },		
            {
                "label":"20 May",
                "value":"2054"
            },			
            {
                "label":"21 May",
                "value":"2153"
            },			
            {
                "label":"22 May",
                "value":"1755"
            },			
            {
                "label":"23 May",
                "value":"2080"
            },			
            {
                "label":"24 May",
                "value":"1617"
            },			
            {
                "label":"25 May",
                "value":"2053"
            },			
            {
                "label":"26 May",
                "value":"2435"
            },			
            {
                "label":"27 May",
                "value":"2177"
            },			
            {
                "label":"28 May",
                "value":"2214"
            },			
            {
                "label":"29 May",
                "value":"1998"
            },		
            {
                "label":"30 May",
                "value":"1871"
            },			
            {
                "label":"31 May",
                "value":"1822"
            },			
            {
                "label":"1 Jun",
                "value":"1909"
            },			
            {
                "label":"2 Jun",
                "value":"1689"
            },			
            {
                "label":"Yesterday",
                "value":"2076"
            }
        ]
    };
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
        "data":[
            {
                "label":"14 May",
                "value":"4.90"
            },		
            {
                "label":"15 May",
                "value":"4.05"
            },		
            {
                "label":"16 May",
                "value":"4.72"
            },		
            {
                "label":"17 May",
                "value":"4.56"
            },		
            {
                "label":"18 May",
                "value":"3.65"
            },		
            {
                "label":"19 May",
                "value":"3.77"
            },		
            {
                "label":"20 May",
                "value":"4.52"
            },		
            {
                "label":"21 May",
                "value":"4.13"
            },		
            {
                "label":"22 May",
                "value":"3.25"
            },		
            {
                "label":"23 May",
                "value":"3.38"
            },		
            {
                "label":"24 May",
                "value":"4.53"
            },		
            {
                "label":"25 May",
                "value":"4.24"
            },		
            {
                "label":"26 May",
                "value":"3.31"
            },		
            {
                "label":"27 May",
                "value":"3.25"
            },		
            {
                "label":"28 May",
                "value":"4.14"
            },		
            {
                "label":"29 May",
                "value":"4.82"
            },		
            {
                "label":"30 May",
                "value":"4.19"
            },		
            {
                "label":"31 May",
                "value":"4.94"
            },		
            {
                "label":"1 Jun",
                "value":"4.02"
            },		
            {
                "label":"2 Jun",
                "value":"4.80"
            },		
            {
                "label":"Yesterday",
                "value":"3.70"
            }
        ]
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
            "data": [
                {
                    "id": "HI",
                    "value": "3189"
                },
                {
                    "id": "DC",
                    "value": "2879"
                },
                {
                    "id": "MD",
                    "value": "920"
                },
                {
                    "id": "DE",
                    "value": "4607"
                },
                {
                    "id": "RI",
                    "value": "4890"
                },
                {
                    "id": "WA",
                    "value": "34927"
                },
                {
                    "id": "OR",
                    "value": "65798"
                },
                {
                    "id": "CA",
                    "value": "61861"
                },
                {
                    "id": "AK",
                    "value": "58911"
                },
                {
                    "id": "ID",
                    "value": "42662"
                },
                {
                    "id": "NV",
                    "value": "78041"
                },
                {
                    "id": "AZ",
                    "value": "41558"
                },
                {
                    "id": "MT",
                    "value": "62942"
                },
                {
                    "id": "WY",
                    "value": "78834"
                },
                {
                    "id": "UT",
                    "value": "50512"
                },
                {
                    "id": "CO",
                    "value": "73026"
                },
                {
                    "id": "NM",
                    "value": "78865"
                },
                {
                    "id": "ND",
                    "value": "50554"
                },
                {
                    "id": "SD",
                    "value": "35922"
                },
                {
                    "id": "NE",
                    "value": "43736"
                },
                {
                    "id": "KS",
                    "value": "32681"
                },
                {
                    "id": "OK",
                    "value": "79038"
                },
                {
                    "id": "TX",
                    "value": "75425"
                },
                {
                    "id": "MN",
                    "value": "43485"
                },
                {
                    "id": "IA",
                    "value": "46515"
                },
                {
                    "id": "MO",
                    "value": "63715"
                },
                {
                    "id": "AR",
                    "value": "34497"
                },
                {
                    "id": "LA",
                    "value": "70706"
                },
                {
                    "id": "WI",
                    "value": "42382"
                },
                {
                    "id": "IL",
                    "value": "73202"
                },
                {
                    "id": "KY",
                    "value": "79118"
                },
                {
                    "id": "TN",
                    "value": "44657"
                },
                {
                    "id": "MS",
                    "value": "66205"
                },
                {
                    "id": "AL",
                    "value": "75873"
                },
                {
                    "id": "GA",
                    "value": "76895"
                },
                {
                    "id": "MI",
                    "value": "67695"
                },
                {
                    "id": "IN",
                    "value": "33592"
                },
                {
                    "id": "OH",
                    "value": "32960"
                },
                {
                    "id": "PA",
                    "value": "54346"
                },
                {
                    "id": "NY",
                    "value": "42828"
                },
                {
                    "id": "VT",
                    "value": "77411"
                },
                {
                    "id": "NH",
                    "value": "51403"
                },
                {
                    "id": "ME",
                    "value": "64636"
                },
                {
                    "id": "MA",
                    "value": "51767"
                },
                {
                    "id": "CT",
                    "value": "57353"
                },
                {
                    "id": "NJ",
                    "value": "80788"
                },
                {
                    "id": "WV",
                    "value": "95890"
                },
                {
                    "id": "VA",
                    "value": "83140"
                },
                {
                    "id": "NC",
                    "value": "97344"
                },
                {
                    "id": "SC",
                    "value": "88234"
                },
                {
                    "id": "FL",
                    "value": "88234"
                }
            ]
        }; 
};

}]);
