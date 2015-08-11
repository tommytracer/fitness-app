'use strict';

angular.module('myApp')
  .directive('fullpageSectionDown', function () {
    return {
      restrict: 'EA',
      scope: {
        selector: '=fullpageSectionDown'
      },
      link: function (scope, element, attrs) {
        element.on('click', function () {
          $(scope.selector).fullpage.moveSectionDown();
        });
      }
    };
  });
