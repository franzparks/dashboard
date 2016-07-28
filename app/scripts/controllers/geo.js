'use strict';

/**
 * @ngdoc function
 * @name corporateDashBoardApp.controller:GeoctrlCtrl
 * @description
 * # GeoctrlCtrl
 * Controller of the corporateDashBoardApp
 */
angular.module('corporateDashBoardApp')
  .controller('GeoCtrl',['getDataService', function (getDataService) {
   
    this.dataSource =  getDataService.getGeoData();
   
  }]);
