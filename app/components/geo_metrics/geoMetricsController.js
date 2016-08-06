/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:GeoctrlCtrl
 * @description
 * # GeoctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('GeoCtrl',['$scope','$interval','$location','geoMetricsService', function ($scope,$interval, $location,geoMetricsService) {
    
   'use strict';

   //console.log("from service : "+ Object.keys(geoMetricsService.data));
   //console.log("from service data : "+ geoMetricsService.data.data);

    /*geoMetricsService.getGeoData(function(response) {
        $scope.dataSource = response.data;
        console.log("from service data : "+ response.data);
        }, function(error) {
        console.log('Error:', error);
    });*/
    var promise;
    //$scope.getData = function(){
        $scope.dataSource = geoMetricsService.geoData;
        console.log("from service data : "+ geoMetricsService.geoData);
    //};
    

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
    */

    //kick start the polling
    //if($location.path() === '/geo' && geoMetricsService.promise === undefined){
        //console.log("am here!!!!!!!!");
        //geoMetricsService.startPolling();
    //}
    //console.log('path is : '+$location.path());

    //$scope.start = true;

    //if($scope.start){
        //geoMetricsService.startPolling();
    //}
    $scope.start = function(){
        $scope.stop();

        promise = $interval(geoMetricsService.getGeoData, 1000);
    };

    $scope.stop = function(){
        $interval.cancel(promise);
        promise = undefined;
    };

    $scope.start();
    // Cancel interval on page changes
    $scope.$on('$destroy', function(){
        //console.log('been called to destroy');
        //if (geoMetricsService.promise) {
        //    $interval.cancel(geoMetricsService.promise);
        //    geoMetricsService.promise = undefined;
        //    $scope.start = false;
       // }
       $scope.stop();
    }); 

   
  }]);
