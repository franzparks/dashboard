'use strict';

/**
 * @ngdoc overview
 * @name corporateDashBoardApp
 * @description
 * # corporateDashBoardApp
 *
 * Main module of the application.
 */
angular
  .module('corporateDashBoardApp', ['ui.router','ng-fusioncharts', 'ngTable','papa-promise'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  	$urlRouterProvider.otherwise('/');

  	$stateProvider

  	.state('keyMetrics', {
  		url : '/',
  		templateUrl: 'components/key_metrics/keyMetrics.html',
  		controller : 'KeyMetricsCtrl as keyMetrics'
  	})

  	.state('geo', {
  		url : '/geo',
  		templateUrl: 'components/geo_metrics/geoMetrics.html',
  		controller : 'GeoCtrl as geo'

  	})

  	.state('dataView', {
  		url : '/data-view',
  		templateUrl: 'components/data_metrics/dataMetrics.html',
  		controller : 'DataViewCtrl as dataView'
  	});

}]);
