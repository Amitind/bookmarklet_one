/*
https://11ty.rocks/
https://github.com/dinhanhthi/dinhanhthi.com/blob/dev/.eleventy.js
*/

const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { DateTime } = require('luxon');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const mdItContainer = require('markdown-it-container');

const pluginRss = require('@11ty/eleventy-plugin-rss');

/* https://www.11ty.dev/docs/plugins/syntaxhighlight/ */
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const pluginNavigation = require('@11ty/eleventy-navigation');

// https://www.11ty.dev/docs/plugins/render/
const { EleventyRenderPlugin } = require('@11ty/eleventy');

/* https://www.npmjs.com/package/eleventy-plugin-gen-favicons */
const faviconsPlugin = require('eleventy-plugin-gen-favicons');
const Image = require('@11ty/eleventy-img');

const directoryOutputPlugin = require('@11ty/eleventy-plugin-directory-output');

const { minify } = require('terser'); //jsmin
const CleanCSS = require('clean-css'); //cssmin
const htmlmin = require('html-minifier'); //htmlmin

/* importy _data file */
const _metadata = require('./src/_data/metadata.json');

module.exports = function (eleventyConfig) {
	// Merge data instead of overriding https://www.11ty.dev/docs/data-deep-merge/
	eleventyConfig.setDataDeepMerge(true);

	/* ignore and add folders */
	switch (process.env.ELEVENTY_ENV) {
		case 'draft':
			/* when draft set then load draft posts and remove normal posts */
			eleventyConfig.ignores.delete('./src/en/posts-draft');
			eleventyConfig.ignores.add('./src/en/posts');
			console.log('draft');
			break;
		case 'local':
			/* when local set then load draft posts and normal posts */
			// eleventyConfig.ignores.add('./src/en/posts-draft');
			// eleventyConfig.ignores.add('./src/en/posts');
			console.log('draft');
			break;
		default:
			/* in default conditon aways ignore posts-draft */
			eleventyConfig.ignores.add('./src/en/posts-draft');
			console.log('netlify');
			break;
	}

	/* Files to watch and reload the build */
	// watch files to reload
	eleventyConfig.addWatchTarget('./src/bm');
	eleventyConfig.addWatchTarget('./tailwind.config.js');
	// eleventyConfig.addWatchTarget("./src/scss/tailwind.scss");
	// eleventyConfig.addWatchTarget("./src/en/css/main.css");

	/* Passthrough files and folders */

	// Copy the `img` and `css` folders to the output https://www.11ty.dev/docs/copy/
	eleventyConfig.addPassthroughCopy('src/img/open-graph.png');
	eleventyConfig.addPassthroughCopy('src/img/*.gif');
	eleventyConfig.addPassthroughCopy({
		'src/public/css': '/css',
		'src/public/icons': '/icons',
		'src/public/img': '/img',
		'src/public/js/*.min.js': '/js',
	});

	/* Plugins */
	eleventyConfig.addPlugin(pluginRss); // absoluteUrl filter from this plugin
	eleventyConfig.addPlugin(pluginSyntaxHighlight); // highlight shortcode
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyRenderPlugin); // render shortcode {% renderTemplate "md" %} {% endrenderTemplate %}

	eleventyConfig.addPlugin(faviconsPlugin, {
		manifestData: _metadata.manifest,
	}); // favicon shortcode
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

	/*
  Register Shortcodes
  */

	/** Image Optimize and multiple format generator,
	 * 	@param {string} src - is only required field
	 * @param {string} [sizes] - is alread passed
	 * @param {string} [alt] - is file name
	 * @param {array} [widths] - pass [null] if do not want to generate 600 varient
	 * @param {array} [formats] - by default webp and orginal file format is generated,
	 * @param {string} [string] - pass tailwind css classes want to opply on images
	 * @returns {element} - html img tag with srcset and sizes
	 * @example {% image "./src/img/open-graph.png", imgclass="object-cover w-full h-64" %}
	 * in markdown  {% image "./src/img/open-graph.png", sizes="", widths=['200'], imgclass="object-cover w-full" %}
	 * using nunjucks shortcode because of async function
	 * */
	async function image(src, options = {}) {
		let {
			sizes = '', //"(min-width: 30em) 50vw, 100vw"
			alt = path.basename(src, path.extname(src)),
			widths = ['auto'],
			formats = ['webp', 'auto'],
			imgclass = '',
		} = options;
		// console.log(alt);
		if (src.startsWith('/img/')) {
			src = `./src${src}`;
			// console.log(src);
		}

		let metadata = await Image(src, {
			widths,
			formats,
			outputDir: './_site/img/',
			urlPath: '/img/',
			sharpOptions: {
				animated: false,
			},
		});

		let imageAttributes = {
			class: imgclass,
			alt,
			sizes,
			loading: 'lazy',
			decoding: 'async',
		};

		// You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	}
	eleventyConfig.addNunjucksAsyncShortcode('image', image);

	/* Apply Filters */

	/* jsmin using terser {{ jscode | jsmin | safe }}*/

	eleventyConfig.addNunjucksAsyncFilter(
		'jsmin',
		async function (code, callback) {
			try {
				const minified = await minify(code);
				callback(null, minified.code);
			} catch (err) {
				console.error('Terser error: ', err);
				// Fail gracefully.
				callback(null, code);
			}
		}
	);
	/* CSS min {{ googlefonts | cssmin | safe }}*/
	eleventyConfig.addFilter('cssmin', function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	eleventyConfig.addFilter('readableDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
			'dd LLL yyyy'
		);
	});

	/* htmlmin */

	eleventyConfig.addTransform('htmlmin', function (content) {
		// Prior to Eleventy 2.0: use this.outputPath instead
		if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				// conservativeCollapse: true,
			});
			return minified;
		}

		return content;
	});

	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
			'yyyy-LL-dd'
		);
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter('head', (array, n) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter('min', (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	/**
	 *  Filter out all tags that are not used for filtering
	 * @param {array} tags - array of tags
	 * @returns {array} - filtered array of tags
	 */

	function filterTagList(tags) {
		return (tags || []).filter(
			(tag) =>
				['all', 'nav', 'post', 'posts', 'pages', 'page'].indexOf(
					tag
				) === -1
		);
	}

	eleventyConfig.addFilter('filterTagList', filterTagList);

	/*
  write excerpt, filters additional parameret can be passed like 2nd example
  {{ post.templateContent | excerpt }}
  {{ post.templateContent | excerpt(200) }}
  */
	eleventyConfig.addFilter('excerpt', (post, limit = 100) => {
		const content = post.replace(/(<([^>]+)>)/gi, '');
		return content.substr(0, content.lastIndexOf(' ', limit)) + '...';
	});

	// Create an array of all tags
	eleventyConfig.addCollection('tagList', function (collection) {
		let tagSet = new Set();
		collection.getAll().forEach((item) => {
			(item.data.tags || []).forEach((tag) => tagSet.add(tag));
		});

		return filterTagList([...tagSet]);
	});

	// Customize Markdown library and settings:
	let markdownLibrary = markdownIt({
		html: true, // html tag inside source
		breaks: true, // use newline '\n' as <br>
		linkify: false, // Autoconvert URL-like text to links
	})
		.use(markdownItAnchor, {
			level: 2, // h2 and above all headings
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: 'after',
				class: 'hidden text-gray-300 font-semibold ml-1',
				symbol: '#',
				// symbol:'<i class="absolute -left-5 text-gray-100 hover:text-gray-300"></i>',
			}),
			slugify: eleventyConfig.getFilter('slugify'),
		})
		.use(require('markdown-it-attrs'), {
			// use {:.classname attr=abc} options
			leftDelimiter: '{:',
			rightDelimiter: '}',
		})
		.use(require('markdown-it-mark')) // ==marked text==
		.use(require('markdown-it-kbd')) // [[Ctrl]]
		.use(mdItContainer, 'success', {
			render: function (tokens, idx) {
				var m = tokens[idx].info.trim().match(/^success\s+(.*)$/);
				if (tokens[idx].nesting === 1) {
					//opening tag
					return `<div class='alert bg-green-200'>
                  <div class='icon'>
                    <img width='22' height='22' class='keep-original' src='/icons/success.svg' alt='Success icon'>
                  </div>`;
				} else {
					return '</div>';
				}
			},
		})
		.use(mdItContainer, 'danger', {
			render: function (tokens, idx) {
				var m = tokens[idx].info.trim().match(/^danger\s+(.*)$/);
				if (tokens[idx].nesting === 1) {
					//opening tag
					return `<div class='alert bg-red-200'>
                  <div class='icon'>
                    <img width='22' height='22' class='keep-original' src='/icons/danger.svg' alt='danger icon'>
                  </div>`;
				} else {
					return '</div>';
				}
			},
		})
		.use(mdItContainer, 'info', {
			render: function (tokens, idx) {
				var m = tokens[idx].info.trim().match(/^info\s+(.*)$/);
				if (tokens[idx].nesting === 1) {
					//opening tag
					return `<div class='alert bg-blue-200'>
                  <div class='icon'>
                    <img width='22' height='22' class='keep-original' src='/icons/info.svg' alt='info icon'>
                  </div>`;
				} else {
					return '</div>';
				}
			},
		})
		.use(mdItContainer, 'idea', {
			render: function (tokens, idx) {
				var m = tokens[idx].info.trim().match(/^idea\s+(.*)$/);

				return tokens[idx].nesting === 1
					? `<div class='alert bg-amber-200'>
              <div class='icon'>
                <img width='22' height='22' class='keep-original' src='/icons/idea.svg' alt='idea icon'>
              </div>`
					: '</div>';
			},
		})
		.use(mdItContainer, 'warning', {
			render: function (tokens, idx) {
				var m = tokens[idx].info.trim().match(/^warning\s+(.*)$/);
				if (tokens[idx].nesting === 1) {
					//opening tag
					return `<div class='alert bg-orange-200'>
                  <div class='icon'>
                    <img width='22' height='22' class='keep-original' src='/icons/warning.svg' alt='warning icon'>
                  </div>`;
				} else {
					return '</div>';
				}
			},
		})
		.use(mdItContainer, 'alert')
		.use(mdItContainer, 'group');
	eleventyConfig.setLibrary('md', markdownLibrary);

	/*

  👉 you can use https://www.11ty.dev/docs/plugins/render/ directly and ignore below shortcode

  Using {% markdown %}{% endmarkdown %} inside .njk */
	eleventyConfig.addPairedShortcode('markdown', (content, inline = null) => {
		return inline
			? markdownLibrary.renderInline(content)
			: markdownLibrary.render(content);
	});
	/*
  Using {% ref "url" %} for thirdparty urls
  Using {% ref "url", "refname" %} refname is optional

  */
	eleventyConfig.addShortcode('ref', function (url, ref = 'ref') {
		// console.log(url, ref);
		return `<sup><a href="${url}" rel="noopener noreferrer" target="_blank">[${ref}]</a></sup>`;
	});

	eleventyConfig.addAsyncShortcode(
		'bookmarklet',
		async function (code, options = {}) {
			const { encode = false } = options;
			const minifiedCode = await minify(code);
			let encodededCode = minifiedCode.code;
			/* Encode value when needed */
			if (encode) {
				encodededCode = encodeURIComponent(encodededCode);
			}
			// return '```js function(){' + encodededCode + '}```';
			return `<pre class="language-js my-6"><code class="language-js">javascript:${encodededCode}</code></pre>`;
		}
	);
	eleventyConfig.addAsyncShortcode(
		'bookmarkletbtn',
		async function (code, { text = 'Bookmarklet' } = {}) {
			const minifiedCode = await minify(code);
			return `<div class="my-6">Drag me to bookmark bar: 👉🏻 <a class="border-gray-700 border-2 shadow-gray-700 shadow-custom hover:shadow-none transition px-3 py-1 text-gray-700 inline-block" role="button" href="javascript:${encodeURIComponent(
				minifiedCode.code
			)}" rel="nofollow noopener noreferrer" title="${text} Bookmarklet">${text}</a></div>`;
		}
	);

	/** Meta data for tags
	 * @param {string} tag - tag name , function will always convert tag to lowercase
	 * @param {[object]} options - options object
	 * @param {[string]} options.key - meta key name , default is class,
	 * @returns {string|integer} returns requested meta key value it can be integer or string
	 * @example {% tagscolor "how to" %} or {% tagscolor tag %} or {% tagscolor tag key="class" %}
	 */

	function tagsMeta(tag, { key = 'class' } = {}) {
		if (!_metadata.tags[tag.toLowerCase()]) {
			console.error(tag, "category doesn't exist in metadata.json");
			return '';
		}
		let keyValue = _metadata?.tags[tag.toLowerCase()][key] ?? '';
		if (key === 'icon') {
			return `<img width='16' height='16' class='keep-original inline-flex justify-center items-center mx-1 h-4 w-auto' src='/icons/${keyValue}' alt='${key} icon'>`;
		}

		return keyValue;
	}

	eleventyConfig.addShortcode('tagsmeta', tagsMeta);

	/* eleventy dev server */

	eleventyConfig.setServerOptions({
		liveReload: true,
		// The starting port number to attempt to use
		port: 8000,
		// number of times to increment the port if in use
		portReassignmentRetryCount: 10,

		// Show local network IP addresses for device testing
		showAllHosts: true,

		showVersion: true,
	});

	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: ['md', 'njk', 'html', 'liquid'],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: 'njk',
		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: 'njk',

		pathPrefix: '/',
		// -----------------------------------------------------------------

		// These are all optional
		dir: {
			input: 'src',
			includes: '_includes',
			data: '_data',
			output: '_site',
		},
	};
};
