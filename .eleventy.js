const fs = require("fs");
const path = require("path");

const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const pluginNavigation = require("@11ty/eleventy-navigation");

  // https://www.npmjs.com/package/eleventy-plugin-gen-favicons
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const Image = require("@11ty/eleventy-img");

const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");

/* Image Optimize and multiple format generator,
alt = is file name
size = is alread passed
widths = pass [null] if do not want to generate 600 varient
formats = by default webp and orginal file format is generated,
imgclass = pass tailwind css classes want to opply on images
src = is only required field

use shortcode like this
{% image "./src/img/open-graph.png", imgclass="object-cover w-full h-64" %}

*/
async function imageShortcode(
  src, {
  sizes = "(min-width: 30em) 50vw, 100vw",
    alt = path.basename(src, path.extname(src)),
    widths = [600, null],
    formats=["webp", null],
    imgclass = "" }) {
  console.log(src);
  if (src.startsWith("/img/")) {

    src = `./src${src}`
    console.log(src)
   }

  let metadata = await Image(src, {
    widths,
    formats,
    outputDir: "./_site/img/",
    urlPath: "/img/",
    sharpOptions: {
      animated: false
    }
  });

  let imageAttributes = {
    class:imgclass,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {

  /* Files to watch and reload the build */

  // watch files to reload
  eleventyConfig.addWatchTarget('./tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/scss/tailwind.scss')

  /* Passthrough files and folders */

  // Copy the `img` and `css` folders to the output https://www.11ty.dev/docs/copy/
  eleventyConfig.addPassthroughCopy("src/img/open-graph.png");
  eleventyConfig.addPassthroughCopy("src/img/cave404.gif");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  // copy icons from icons folder to root
  eleventyConfig.addPassthroughCopy({"src/icons":"/"})



  /* Plugins */
  eleventyConfig.addPlugin(pluginRss); // absoluteUrl filter from this plugin
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(faviconsPlugin, {});
  eleventyConfig.setQuietMode(false); // added for below plugin to work without noise
  eleventyConfig.addPlugin(directoryOutputPlugin, {
    // Customize columns
    columns: {
      filesize: true, // Use `false` to disable
      benchmark: true, // Use `false` to disable
    },

    // Will show in yellow if greater than this number of bytes
    warningFileSize: 400 * 1000,
  });


  /* Register Shortcodes */
  // using nunjucks shortcode because of async function
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  /* Apply Filters */
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts","pages","page"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    linkify: true,
    breaks:false
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#"
    }),
    level: [1,2,3,4],
    slugify: eleventyConfig.getFilter("slugify")
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",
    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",


    pathPrefix: "/",
    // -----------------------------------------------------------------

    // These are all optional
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
