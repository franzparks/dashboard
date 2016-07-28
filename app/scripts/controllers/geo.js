'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:GeoctrlCtrl
 * @description
 * # GeoctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('GeoCtrl',['getDataService', function (getDataService) {
   
    this.dataSource = {};
    
    getDataService.getGeoData().then(function(response) {
       
        var chartObject = {

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
            }
        };

        chartObject["data"] = response.data;
     
        $scope.salesData = chartObject;
        
    });
   
  }]);
