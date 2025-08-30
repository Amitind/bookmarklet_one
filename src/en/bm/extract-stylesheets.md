---
title: Extract Stylesheets
description: ""
tags: ["Web Dev"]
featured_image: /img/open-graph.png
custom_class: "prose space-y-4"
---

The {{title}} Bookmarklet is a handy Bookmarklet.

**With one click, this bookmarklet will extract all stylesheet CSS and open them in a new tab.**

{% set js %}
{% include "src/bm/extract-stylesheets.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

### What this bookmarklet does

- Lists every inline `<style>` block and shows its CSS in a scrollable `<pre>` box.
- Finds every `<link rel="stylesheet">` and shows its resolved URL.
- Previews each linked stylesheet in an iframe so you can quickly scan the file.
- Sets a `<base>` tag in the report window so relative URLs resolve correctly to the source page.

{% image "./src/img/bm/extract-stylesheets.png", widths=['600','1000'], imgclass="rounded-md border w-full object-contain max-h-64" %}

Right click on image to open in new tab
{:.text-xs}

### Why it’s useful

- **Audit styles**: See all inline and external styles in one place.
- **Debug quickly**: Spot duplicated rules, large files, or unexpected inline CSS.
- **Shareable view**: The report opens in a new tab—easy to screenshot or share.

### Notes and limitations

- Some sites may block embedding styles via `iframe` because of CSP rules; in such cases, the external CSS preview may not render.
- Linked styles without a valid `href` or those built dynamically after load may not appear.
- Very large inline styles are shown inside a scrollable area for readability.

::::info
Tip: Run it on pages with heavy frameworks to quickly understand how much CSS is inline vs external.
::::

