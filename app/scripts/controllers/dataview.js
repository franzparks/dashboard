'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:DataviewctrlCtrl
 * @description
 * # DataviewctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('DataViewCtrl',['$scope','$filter', 'NgTableParams','getDataService','Papa',
     function ($scope,$filter, NgTableParams,getDataService,Papa) {

    //var self = this;
	$scope.data = [];

    //getDataService.getDataViewData().then(function(response) {
        // this callback will be called asynchronously
        // when the response is available
    //    $scope.data = response.data;
    //    $scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
        
    //});


    Papa.parse('../data/dataview.csv', {
        download: true,
        complete: function(results) {
        //console.log("Finished:", results.data);

        $scope.data = results.data.map((arr) =>{
            if(arr[0] !== 'name' && arr[1] !== 'priority' && arr[2] !== 'severity' && arr[3] !== 'status' ){
                var user = {};
                user.name = arr[0];
                user.priority = arr[1];
                user.severity = arr[2];
                user.status = arr[3];

                return user;
            }
        });
        $scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
    }
   });


  }]);
