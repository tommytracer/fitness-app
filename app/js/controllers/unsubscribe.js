'use strict';

angular.module('myApp')
  .config(function ($routeProvider) {
    $routeProvider.when('/unsubscribe/:id', {
      templateUrl: 'partials/unsubscribe.html',
      controller: 'UnsubscribeCtrl'
    });
  })
  .controller('UnsubscribeCtrl', function ($scope, $timeout, EarlyAccessItem, $routeParams, ParseService) {

    $scope.confirmed = 'loading';

    $scope.showTryButton = false;
    $scope.hideClock = true;

    if($routeParams.id) {
      Parse.Cloud.run('unsubscribe', {
          id: $routeParams.id
        }, {
        success: function (object) {
          $scope.confirmed = 'success';
          $scope.$apply();
        },
        error: function (object, error) {
          $scope.confirmed = 'fail';
          $scope.$apply();
        }
      });
    }
  });