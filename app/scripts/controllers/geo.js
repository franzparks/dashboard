'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:GeoctrlCtrl
 * @description
 * # GeoctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('GeoCtrl',['$scope','$timeout','getDataService', function ($scope,$timeout,getDataService) {
   
    $scope.dataSource = {};

    var poll = function() {
        $timeout(function() {
            $scope.value++;
            poll();
        }, 1000);
    };     
   poll();

    getDataService.getGeoData().then(function(response) {
       
        var chartObject = {

            'chart': {
                'caption': 'Number of Employees by State',
                'subcaption': 'This Year',
                'entityFillHoverColor': '#cccccc',
                'numberScaleValue': '1,1000,1000',

                'showLabels': '1',
                'theme': 'fint'
            },
            'colorrange': {
                'minvalue': '0',
                'startlabel': 'Low',
                'endlabel': 'High',
                'code': '#e44a00',
                'gradient': '1',
                'color': [
                    {
                        'maxvalue': '56580',
                        'displayvalue': 'Average',
                        'code': '#f8bd19'
                    },
                    {
                        'maxvalue': '100000',
                        'code': '#6baa01'
                    }
                ]
            }
        };

        chartObject.data = response.data;
     
        $scope.dataSource = chartObject;
        
    });
   
  }]);
