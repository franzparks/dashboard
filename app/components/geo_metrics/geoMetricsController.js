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

    var promise;
    
    $scope.dataSource = geoMetricsService.geoData;
     console.log("from service data : "+ geoMetricsService.geoData);  

    $scope.start = function(){
        $scope.stop();
        promise = $interval(geoMetricsService.getGeoData, 1000);
    };

    $scope.stop = function(){
        $interval.cancel(promise);
        promise = undefined;
    };

    //start polling when controller scope is created
    $scope.start();

    // Cancel interval on page changes
    $scope.$on('$destroy', function(){
       $scope.stop();
    }); 

   
  }]);
