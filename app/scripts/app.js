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
  .module('corporateDashBoardApp', ['ui.router','ng-fusioncharts', 'ngTable'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  	$urlRouterProvider.otherwise('/');

  	$stateProvider

  	.state('keyMetrics', {
  		url : '/',
  		templateUrl: 'views/keyMetrics.html',
  		controller : 'KeyMetricsCtrl as keyMetrics'
  	})

  	.state('geo', {
  		url : '/geo',
  		templateUrl: 'views/geo.html',
  		controller : 'GeoCtrl as geo'

  	})

  	.state('dataView', {
  		url : '/data-view',
  		templateUrl: 'views/dataView.html',
  		controller : 'DataViewCtrl as dataView'
  	});

}]);
