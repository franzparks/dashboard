/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:GeoctrlCtrl
 * @description
 * # GeoctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('GeoCtrl',['$scope','$interval','geoMetricsService', function ($scope,$interval,geoMetricsService) {
    
   'use strict';

    $scope.dataSource = {};

    var refreshData = function(){

        geoMetricsService.getGeoData().then(function(response) {
           
            var chartObject = {

                chart: {
                    caption: 'Number of Employees by State',
                    subcaption: 'This Year',
                    entityFillHoverColor: '#cccccc',
                    numberScaleValue: '1,1000,1000',
                    showLabels: '1',
                    theme: 'ocean'
                },
                colorrange: {
                    minvalue: '0',
                    startlabel: 'Low',
                    endlabel: 'High',
                    code: '#e44a00',
                    gradient: '1',
                    color: [
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

            //update ui only when data changes
            if($scope.dataSource.data !== chartObject.data){
                $scope.dataSource = chartObject;
            }   
            
        });
    };
    
    var promise = $interval(refreshData, 1000); 

    // Cancel interval on page changes
    $scope.$on('$destroy', function(){
        if (angular.isDefined(promise)) {
            $interval.cancel(promise);
            promise = undefined;
        }
    });   

   
  }]);
