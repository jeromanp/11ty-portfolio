const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { data } = require("autoprefixer");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "global.out.css": "global.css",
  });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/_includes/css");
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",    
      data:"_data", 
      output: "_site",
      
    },
  };
};
