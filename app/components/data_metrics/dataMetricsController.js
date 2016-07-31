/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:DataviewctrlCtrl
 * @description
 * # DataviewctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('DataViewCtrl',['$scope','$interval', 'NgTableParams','dataMetricsService','Papa',
     function ($scope,$interval, NgTableParams,dataMetricsService,Papa) {

    'use strict';

    //var self = this;
	$scope.data = [];

    //dataMetricsService.getDataViewData().then(function(response) {
        // this callback will be called asynchronously
        // when the response is available
    //    $scope.data = response.data;
    //    $scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
        
    //});

    var refreshData = function(){
        Papa.Papa.parse('../data/MOCK_DATA.csv', {
            download: true,
            complete: function(results) {
            //console.log("Finished:", results.data);
            //customer_name,customer_email,employee_name,submission_time,status,close_time,issue_description, date
            $scope.data = results.data.map(function(arr){
                if(arr[0] !== 'customer_name' && arr[1] !== 'customer_email' && 
                    arr[2] !== 'employee_name' && arr[3] !== 'submission_time' &&
                     arr[4] !== 'status' && arr[5] !== 'close_time' && arr[6] !== 'issue_description' ){
                    var user = {};
                    user.customerName = arr[0];
                    user.customerEmail = arr[1];
                    user.employeeName = arr[2];
                    user.submissionTime = arr[3];
                    user.status = arr[4] ? 'open' : 'closed';
                    user.closeTime = arr[5];
                    user.issueDescription = arr[6]; 

                    return user;
                }
            });
            $scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
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
