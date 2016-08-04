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
    });   

   
  }]);
