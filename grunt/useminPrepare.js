module.exports = function (grunt, options) {
  return {
    html: '<%= appRoot %>/index.html',
    options: {
      dest: '<%= buildRoot %>'
    }
  };
};
