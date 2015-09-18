'use strict';

angular.module('myApp')
  .config(function ($routeProvider) {
    $routeProvider.when('/confirm/:id', {
      templateUrl: 'partials/confirm.html',
      controller: 'ConfirmCtrl'
    });
  })
  .controller('ConfirmCtrl', function ($scope, $timeout, EarlyAccessItem, $routeParams, ParseService) {

    $scope.confirmed = 'loading';

    $scope.showTryButton = false;
    $scope.hideClock = true;

    if($routeParams.id) {
      Parse.Cloud.run('verify', {
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