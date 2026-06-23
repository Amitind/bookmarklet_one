const fs = require('fs');
const path = require('path');

function createBookmarklet(name, description = '', jsCode = '', tags = '') {
	if (!name) {
		console.error('Usage: pnpm run new-bookmarklet "My New Bookmarklet" "description" "js code" "tag1,tag2"');
		return;
	}
	// Convert name to kebab case for filename
	const filename = name.toLowerCase().replace(/\s+/g, '-');

	// Parse tags into array format
	const tagsArray = tags
		? tags.split(',').map((t) => `'${t.trim()}'`).join(', ')
		: '';

	const tagsLine = tagsArray ? `tags: [${tagsArray}]` : '';

	// Create markdown content
	const mdContent = `---
title: ${name}
description: "${description}"
${tagsLine ? tagsLine + '\n' : ''}featured_image: /img/open-graph.png
custom_class: "prose"
---

The **{{title}}** Bookmarklet is a handy tool.

**With one click, this bookmarklet will ${description || 'enhance your browsing experience.'}**

{% set js %}
{% include "src/bm/${filename}.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

### Features {: .text-3xl .font-bold}

- ✨ One-click operation
- 🔒 Works locally in your browser
- 📱 Compatible with all modern browsers
- 🚀 Lightweight and fast
- 🛡️ No data collection or tracking
{: .list-inside .list-disc .mb-6}

### Why Use ${name}? {: .text-3xl .font-bold .mt-10}

The ${name} Bookmarklet is perfect for:

- Quick access without installing extensions
- Working across all modern browsers
- Lightweight, zero-dependency functionality
- Privacy-friendly local execution
- Streamlining your daily workflow

### How to Use {: .text-3xl .font-bold .mt-10}

1. Drag the button above to your bookmarks bar
2. Navigate to any webpage
3. Click the bookmarklet in your bookmarks bar
4. The tool activates instantly on the current page
`;

	// Write files
	fs.writeFileSync(
		path.join(__dirname, `../src/en/bm/${filename}.md`),
		mdContent
	);

	fs.writeFileSync(path.join(__dirname, `../src/bm/${filename}.js`), jsCode);

	console.log(`✅ Created bookmarklet: ${filename}`);
	console.log(`   📄 src/bm/${filename}.js`);
	console.log(`   📝 src/en/bm/${filename}.md`);
	if (tagsArray) {
		console.log(`   🏷️  Tags: ${tags}`);
	}
}

// Usage:
// pnpm run new-bookmarklet "Page Word Counter" "counts words on current page" "alert(document.body.innerText.split(/\\s+/).length);" "tool,productivity"
if (require.main === module) {
	const [name, description, code, tags] = process.argv.slice(2);
	createBookmarklet(name, description, code, tags);
}

module.exports = { createBookmarklet };
