'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap'
])
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise('/');
});
