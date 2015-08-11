module.exports = function (grunt, options) {
  return {
    options: {
      browsers: ['last 2 versions']
    },
    build: {
        src: '<%= buildRoot %>/css/**/*.css'
    }
  };
};
