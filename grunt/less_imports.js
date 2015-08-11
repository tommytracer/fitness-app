module.exports = function (grunt, options) {
  return {
    options: {
      inlineCSS: false
    },
    all: {
      src: [
        'app/vendor/bower/bootstrap/less/bootstrap.less',
        'app/less/**/*.less',
        '!app/less/imports.less'
      ],
      dest: 'app/less/imports.less'
    }
  };
};
