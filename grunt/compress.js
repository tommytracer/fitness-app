module.exports = function (grunt, options) {
  return {
    dist : {
      options : {
        mode: 'zip',
        archive : '<%= zipname %><%= zipTimeStamp %>.zip'
      },
      files : [
        {
          expand: true,
          cwd : '<%= buildRoot %>',
          src : ['**']
        }
      ]
    }
  };
};