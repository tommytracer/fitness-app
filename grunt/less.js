module.exports = function (grunt, options) {
  return {
    imports: {
      files: {
        '<%= buildRoot %>/css/styles.css': 'app/less/imports.less'
      }
    }
  };
};
