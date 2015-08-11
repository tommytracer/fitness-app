module.exports = function (grunt, options) {
  return {
    build: {
      files: [
        {
          expand: true,
          cwd: '<%= buildRoot %>',
          src: [
            '**/*.html',
            '**/*.css',
            '**/*.js',
            '**/*.{png,jpg,gif}',
            '**/*.{webm,mp4}',
            '!js/*.annotated.js'
          ],
          dest: '<%= webRoot %>',
          filter: 'isFile'
        }
      ]
    },
    html: {
      files: [
        {
          expand: true,
          cwd: '<%= appRoot %>',
          src: ['**/*.html'],
          dest: '<%= buildRoot %>',
          filter: 'isFile'
        }
      ]
    },
    images: {
      files: [
        {
          expand: true,
          cwd: '<%= appRoot %>/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= buildRoot %>/img',
          filter: 'isFile'
        }
      ]
    },
    videos: {
      files: [
        {
          expand: true,
          cwd: '<%= appRoot %>/vid',
          src: ['**/*.{webm,mp4}'],
          dest: '<%= buildRoot %>/vid',
          filter: 'isFile'
        }
      ]
    }
  };
};
