module.exports = function (grunt, options) {
  return {
    build:  {
      src: ['<%= buildRoot %>', '<%= zipname %><%= zipTimeStamp %>.zip']
    },
    public: '<%= webRoot %>'
  };
};