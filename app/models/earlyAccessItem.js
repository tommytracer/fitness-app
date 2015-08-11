'use strict'

angular.module('myApp')
  .factory('EarlyAccessItem', function () {
    return Parse.Object.extend('EarlyAccessItem');
  });
