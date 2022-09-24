const pug = require('pug')
const {
  pluginPrismic,
  definePrismicPluginOptions,
} = require('eleventy-plugin-prismic')

// This is a sugar function that gives you intellisense and
// documentation in your IDE while defining plugin options.
const prismicPluginOptions = definePrismicPluginOptions({
  endpoint: 'your-repo-name',

  // Optional, additional parameters to pass to the client
  clientConfig: {
    accessToken: 'abc',
  },

  /* see configuration references for more */
})

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/styles/')
  eleventyConfig.addWatchTarget('./src/js/')
  eleventyConfig.htmlTemplateEngine = 'pug'
  eleventyConfig.setLibrary('pug', pug)
  eleventyConfig.setTemplateFormats(['pug', 'md'])
  eleventyConfig.addPlugin(pluginPrismic, prismicPluginOptions)
  // TODO: check this is right
  eleventyConfig.prismicPluginOptions = prismicPluginOptions

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
