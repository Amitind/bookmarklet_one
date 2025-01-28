const fs = require('fs');
const path = require('path');

function createBookmarklet(name, description = '', jsCode = '') {
	if (!name) {
		console.error('Name pnpm run new-bookmarklet "My New Bookmarklet"');
		return;
	}
	// Convert name to kebab case for filename
	const filename = name.toLowerCase().replace(/\s+/g, '-');

	// Create markdown content
	const mdContent = `---
title: ${name}
description: "${description}"
featured_image: /img/open-graph.png
custom_class: "prose"
---

The {{title}} Bookmarklet is a handy Bookmarklet.

**With one click, this bookmarklet will...**

{% set js %}
{% include "src/bm/${filename}.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}
`;

	// Write files
	fs.writeFileSync(
		path.join(__dirname, `../src/en/bm/${filename}.md`),
		mdContent
	);

	fs.writeFileSync(path.join(__dirname, `../src/bm/${filename}.js`), jsCode);
}

// Example usage:
// node scripts/create-bookmarklet.js "Page Word Counter" "counts words on current page" "alert(document.body.innerText.split(/\s+/).length);"
if (require.main === module) {
	const [name, description, code] = process.argv.slice(2);
	createBookmarklet(name, description, code);
}
