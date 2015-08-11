module.exports = function (grunt, options) {
  return {
    options: {
      dependencies: {
        'angular': 'jquery'
      }
    },
    all: {
      dest: '<%= buildRoot %>/js/vendor.js'
    }
  };
};
