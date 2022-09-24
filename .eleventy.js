const pug = require('pug')

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/styles/')
  eleventyConfig.addWatchTarget('./src/js/')
  eleventyConfig.htmlTemplateEngine = 'pug'
  eleventyConfig.setLibrary('pug', pug)
  eleventyConfig.setTemplateFormats(['pug', 'md'])

  return {
    // configuration object for directories
    dir: {
      // Eleventy will look here for files to process
      input: 'src/pages',
      // the built files will be placed here
      output: 'dist',
      // tells Eleventy where to look for layouts/partials
      includes: '../partials',
    },
  }
}
