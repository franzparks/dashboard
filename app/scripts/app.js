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
  	.state('home', {
  		url : '/',
  		templateUrl: 'views/main.html'
  	});

}]);
