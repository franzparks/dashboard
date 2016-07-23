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
  .module('corporateDashBoardApp', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  	$urlRouterProvider.otherwise('/');

  	$stateProvider

  	.state('keyMetrics', {
  		url : '/',
  		templateUrl: 'views/keyMetrics.html'
  	})

  	.state('geo', {
  		url : '/geo',
  		templateUrl: 'views/geo.html'
  	})

  	.state('dataView', {
  		url : '/data-view',
  		templateUrl: 'views/dataView.html'
  	});

}]);
