/**
 * @ngdoc service
 * @name corporateDashBoardApp.keyMetricsService
 * @description
 * # keyMetricsService
 * Service in the corporateDashBoardApp.
 */
angular.module('corporateDashBoardApp')
  .service('keyMetricsService',['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    'use strict';

    var reportedIssues = { data : {} };
    var openIssues = { data : {} };
    var payingCustomers = { data : {} };

	var getReportedIssuesChartData = function(){

    	$http({
    		method: 'GET',
    		url : '../data/reportedissues.json'
    	}).then(function(response) {
           
            reportedIssuesData.data = response.data;
            
        });

	};


	var getOpenIssuesChartData = function(){
		$http({
			method: 'GET',
			url : '../data/openissues.json'
	    }).then(function(response) {

            openIssuesData.data = response.data;
            
        });
	};

	var getPayingCustomersChartData = function(){
		$http({
			method: 'GET',
			url : '../data/payingcustomers.json'
	    }).then(function(response) {

            payingCustomersData.data = response.data;
            
        });
	      
	};

	var refreshData = function(){
		getReportedIssuesChartData();
		getOpenIssuesChartData();
		getPayingCustomersChartData();
	};

	return {
		reportedIssues: reportedIssues,
		openIssues : openIssues,
		payingCustomers: payingCustomers,
		refreshData: refreshData
	}

}]);
