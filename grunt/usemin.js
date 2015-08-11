module.exports = function (grunt, options) {
  return {
    options: {
      assetsDirs: [
        '<%= buildRoot %>',
        '<%= buildRoot %>/css',
        '<%= buildRoot %>/img',
        '<%= buildRoot %>/js',
        '<%= buildRoot %>/vid',
        '<%= buildRoot %>/partials'
      ],
      patterns: {
        partials: [
          [/(partials\/.*?\.html)/gm, 'Update the reference to our revved template file']
        ],
        images: [
          [/(img\/.*?\.(?:gif|jpeg|jpg|png|webp))/gm, 'Update the reference to our revved image file']
        ],
        videos: [
          [/(vid\/.*?\.(?:mp4|webm))/gm, 'Update the reference to our revved videos file']
        ]
      }
    },
    html: [
      '<%= buildRoot %>/**/*.html'
    ],
    css: [
      '<%= buildRoot %>/**/*.css'
    ],
    partials: [
      '<%= buildRoot %>/**/*.html',
      '<%= buildRoot %>/**/*.js'
    ],
    images: [
      '<%= buildRoot %>/**/*.js'
    ],
    videos: [
      '<%= buildRoot %>/**/*.html'
    ]
  };
};
