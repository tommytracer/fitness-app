'use strict';

angular.module('myApp')
  .constant('parseConfig', {
    applicationId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    javascriptKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  })
  .service('ParseService', function (parseConfig) {
    Parse.initialize(parseConfig.applicationId, parseConfig.javascriptKey);
  });
