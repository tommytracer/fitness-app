module.exports = function (grunt, options) {
  return {
    app: {
      files: [
        '<%= appRoot %>/js/**/*.*',
        '<%= appRoot %>/less/**/*.*',
        '<%= appRoot %>/**/*.html',
        'bower_components/**/*.*',
        'grunt/**/*.js',
        'Gruntfile.js'
      ],
      tasks: ['dev'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  };
};
