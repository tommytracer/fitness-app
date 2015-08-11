module.exports = function (grunt) {

  var path = require('path');

  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  require('time-grunt')(grunt);

  // Project configuration
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt'),
    jitGrunt: true,
    data: {
      appRoot: 'app',
      buildRoot: 'build',
      webRoot: 'parse/public',
      zipTimeStamp: '',
      zipname: 'fitness-web-app',
      zipDescription: '',
      awsProdKey: process.env.AWS_PROD_KEY,
      awsProdSecret: process.env.AWS_PROD_SECRET,
      awsProdAppName: process.env.FITNESS_AWS_PROD_APP_NAME,
      awsProdEnvName: process.env.FITNESS_AWS_PROD_ENV_NAME
    }
  });

  // Default task
  grunt.registerTask('default', ['watch']);

  // Build task
  grunt.registerTask('build', [
    'clean:build',
    'bower_concat',
    'concat:scripts',
    'less_imports:all',
    'less:imports',
    'autoprefixer:build',
    'copy:html',
    'copy:images',
    'copy:videos'
  ]);

  // Optimization task (must be ran after the 'build' task)
  grunt.registerTask('optimize', [
    'cssmin:build',
    'ngAnnotate:build',
    'uglify',
    'cssmin',
    'useminPrepare',
    'filerev',
    'usemin'
  ]);

  // Moves the build to the public folder
  grunt.registerTask('publish', [
    'clean:public',
    'copy:build',
  ]);

  // Development build task
  grunt.registerTask('dev', [
    'build',
    'publish',
    'clean:build'
  ]);

  // Distribution build task
  grunt.registerTask('dist', [
    'jshint',
    'build',
    'optimize',
    'publish',
    'clean:build'
  ]);

  // Distribution build task
  grunt.registerTask('aws-dist', [
    'jshint',
    'build',
    'optimize',
    'prepareDist',
    'publish',
    'compress:dist',
    'awsebtdeploy:dist',
    'clean:build'
  ]);

  grunt.registerTask('aws-deploy', function(description) {

    if(description) {
      grunt.log.write("the message is " + description);
      grunt.config.data.zipDescription = description;
    }

    grunt.task.run('aws-dist');

  });

  grunt.registerTask('prepareDist', function() {
    grunt.config.data.zipTimeStamp = grunt.template.today("-yyyymmdd-HHMM");
  });

};
