'use strict';

angular.module('myApp')
  .directive('fullpage', function ($timeout) {
    return {
      restrict: 'EA',
      scope: {
        options: '=fullpage'
      },
      link: function (scope, element, attrs) {
        $timeout(function () {
          $(element).fullpage(scope.options);
        }, 500);
      }
    };
  });
