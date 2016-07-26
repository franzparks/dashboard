'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:KeymetricsctrlCtrl
 * @description
 * # KeymetricsctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('KeyMetricsCtrl', function () {


  	this.chartWidth = '550';
    this.chartHeight = '300';
    this.dataType = 'json';

    this.myDataSource = {
	   chart: {
	       caption: "Harry's SuperMart",
	       subCaption: "Top 5 stores in last month by revenue",
	       numberPrefix: "$",
	       theme: "fint"
	   },
	   data:[{
	       label: "Bakersfield Central",
	       value: "880000"
	   },
	   {
	       label: "Garden Groove harbour",
	       value: "730000"
	   },
	   {
	       label: "Los Angeles Topanga",
	       value: "590000"
	   },
	   {
	       label: "Compton-Rancho Dom",
	       value: "520000"
	   },
	   {
	       label: "Daly City Serramonte",
	       value: "330000"
	   }]
	};

	this.salesData = {

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

	this.transChartData = {
                "chart":{
                    "caption":"Daily Transactions",
                    "subcaption":"Last 3 weeks",
                    "xaxisname":"Date",
                    "yaxisname":"No. of Transactions",
                    "showvalues":"0",
                    "theme":"fint"
                },		
                "data":[
                    {
                        "label":"14 May",
                        "value":"1464"
                    },
                        {
                        "label":"15 May",
                        "value":"1062"
                    },
                        {
                        "label":"16 May",
                        "value":"1014"
                    },
                        {
                        "label":"17 May",
                        "value":"1294"
                    },
                        {
                        "label":"18 May",
                        "value":"1382"
                    },
                        {
                        "label":"19 May",
                        "value":"1085"
                    },
                        {
                        "label":"20 May",
                        "value":"1150"
                    },
                        {
                        "label":"21 May",
                        "value":"1420"
                    },
                        {
                        "label":"22 May",
                        "value":"1228"
                    },
                        {
                        "label":"23 May",
                        "value":"1435"
                    },
                        {
                        "label":"24 May",
                        "value":"1051"
                    },
                        {
                        "label":"25 May",
                        "value":"1231"
                    },
                        {
                        "label":"26 May",
                        "value":"1509"
                    },
                        {
                        "label":"27 May",
                        "value":"1480"
                    },
                        {
                        "label":"28 May",
                        "value":"1461"
                    },
                        {
                        "label":"29 May",
                        "value":"1258"
                    },
                        {
                        "label":"30 May",
                        "value":"991"
                    },
                        {
                        "label":"31 May",
                        "value":"1275"
                    },
                        {
                        "label":"1 Jun",
                        "value":"1336"
                    },
                        {
                        "label":"2 Jun",
                        "value":"1097"
                    },
                    {
                        "label":"Yesterday",
                        "value":"1411"
                    }
                ]
            };

  });
