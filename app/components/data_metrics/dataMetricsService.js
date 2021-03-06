/**
 * @ngdoc service
 * @name corporateDashBoardApp.dataMetricsService
 * @description
 * # dataMetricsService
 * Service in the corporateDashBoardApp.
 */
angular.module('corporateDashBoardApp')
  .service('dataMetricsService',['$http','Papa', function ($http,Papa) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    'use strict';

    var dataView = { data : [] };
    
	var getIssuesData = function(){

        Papa.Papa.parse('../data/MOCK_DATA.csv', {
            download: true,
            complete: function(results) {
            //console.log("Finished:", results.data);
            //customer_name,customer_email,employee_name,submission_time,status,close_time,issue_description, date
            var latestData = [];
            latestData = results.data.map(function(val){
                if(val[0] !== 'customer_name' && val[1] !== 'customer_email' && 
                    val[2] !== 'employee_name' && val[3] !== 'submission_time' &&
                     val[4] !== 'status' && val[5] !== 'close_time' && val[6] !== 'issue_description' &&
                     val[7] !== 'date' && val[3]){

                    var issue = {};
                    var date1 = val[7];
                    issue.customerName = val[0];
                    issue.customerEmail = val[1];
                    issue.employeeName = val[2];
                    issue.submissionTime = date1 +' '+ val[3];
                    issue.status = val[4] ? 'open' : 'closed';
                    issue.closeTime = date1 +' '+  val[5];
                    issue.issueDescription = val[6]; 
                    
                    return issue;
                }
            });
            
            //update only when data changes
            if(dataView.data !== latestData){
            	dataView.data = latestData;
            }
            //console.log('dataView Metrics Data : '+dataView);
        }
       });
    };

    return {
    	dataView: dataView,
    	getIssuesData: getIssuesData

    };

}]);
