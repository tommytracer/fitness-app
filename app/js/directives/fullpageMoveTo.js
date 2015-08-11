'use strict';

angular.module('myApp')
  .directive('fullpageMoveTo', function () {
    return {
      restrict: 'EA',
      scope: {
        options: '=fullpageMoveTo'
      },
      link: function (scope, element, attrs) {
        var selector = scope.options.selector || 'body';
        var index = scope.options.index || 1;
        element.on('click', function () {
          $(selector).fullpage.moveTo(index);
        });
      }
    };
  });
