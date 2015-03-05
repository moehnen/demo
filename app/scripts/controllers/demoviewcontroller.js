'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:DemoviewcontrollerCtrl
 * @description
 * # DemoviewcontrollerCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('DemoviewcontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
