'use strict';

/**
 * @ngdoc service
 * @name corporateDashBoardApp.getDataService
 * @description
 * # getDataService
 * Service in the corporateDashBoardApp.
 */
angular.module('corporateDashBoardApp')
  .service('getDataService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getSalesData = function(){

    	return {

        "chart":{
            "caption":"Daily Revenue",
            "subcaption":"Last 3 weeks",
            "xaxisname":"Date",
            "yaxisname":"Revenue (In USD)",
            "numberprefix":"$",
            "showvalues":"0",
            "theme":"fint"
        },
        "data":[
            {
                "label":"14 May",
                "value":"267111"
            },
            {
                "label":"15 May",
                "value":"217207"
            },
            {
                "label":"16 May",
                "value":"185836"
            },
            {
                "label":"17 May",
                "value":"251074"
            },
            {
                "label":"18 May",
                "value":"273374"
            },
            {
                "label":"19 May",
                "value":"215724"
            },
            {
                "label":"20 May",
                "value":"227219"
            },
            {
                "label":"21 May",
                "value":"268160"
            },
            {
                "label":"22 May",
                "value":"239446"
            },
            {
                "label":"23 May",
                "value":"297084"
            },
            {
                "label":"24 May",
                "value":'204399'
            },
            {
                "label":"25 May",
                "value":"236195"
            },
            {
                "label":"26 May",
                "value":"302120"
            },
            {
                "label":"27 May",
                "value":"282909"
            },
            {
                "label":"28 May",
                "value":"272096"
            },
            {
                "label":"29 May",
                "value":"241639"
            },
            {
                "label":"30 May",
                "value":"189526"
            },
            {
                "label":"31 May",
                "value":"248034"
            },
            {
                "label":"1 Jun",
                "value":"266247"
            },
            {
                "label":"2 Jun",
                "value":"212719"
            },
            {
                "label":"Yesterday",
                "value":"264416"
            }
        ]      

	};

};



  });
