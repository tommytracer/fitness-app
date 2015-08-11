'use strict';
/* jshint devel: true */
angular.module('myApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.showTryButton = true;
    $scope.hideClock = false;

    var params = $location.search();
    if(params.confirm) {

      $location.path('confirm/' + params.confirm);
    } else if(params.unsubscribe) {
      $location.path('unsubscribe/' + params.unsubscribe);
    }
  });
