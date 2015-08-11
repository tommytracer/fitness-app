'use strict';

angular.module('myApp')
  .controller('ClockCtrl', function ($scope, $timeout) {

    $scope.done = false;

    $timeout(function () {
      $scope.done = true;
    }, 1000 * 60); // 1min

  });
