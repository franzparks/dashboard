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

   //console.log("from service : "+ Object.keys(geoMetricsService.data));
   //console.log("from service data : "+ geoMetricsService.data.data);

    /*geoMetricsService.getGeoData(function(response) {
        $scope.dataSource = response.data;
        console.log("from service data : "+ response.data);
        }, function(error) {
        console.log('Error:', error);
    });*/

    $scope.dataSource = geoMetricsService.geoData;
    console.log("from service data : "+ Object.keys(geoMetricsService.geoData));

    /*var refreshData = function(){

        geoMetricsService.getGeoData().then(function(response) {
           
            var chartObject = {};

            chartObject = response.data;

            //update ui only when data changes
            if($scope.dataSource.data !== chartObject.data){
                $scope.dataSource = chartObject;
            }   
            
        });
    };
    
    var promise = $interval(refreshData, 1000); 

    // Cancel interval on page changes
    $scope.$on('$destroy', function(){
        if (promise) {
            $interval.cancel(promise);
            promise = undefined;
        }
    });  */ 

   
  }]);
