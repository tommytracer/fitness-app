'use strict';

angular.module('myApp')
  .config(function ($routeProvider) {
    $routeProvider.when('/thanks', {
      templateUrl: 'partials/thanks.html',
      controller: 'ThanksCtrl'
    });
  })
  .controller('ThanksCtrl', function ($scope, $timeout) {


    $scope.showTryButton = false;
    $scope.hideClock = true;

  });
