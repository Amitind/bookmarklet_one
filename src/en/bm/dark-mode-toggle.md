---
title: Dark Mode Toggle
description: "Force dark mode on any website with a single click — injects CSS to invert backgrounds and text for comfortable reading"
tags: ['Design', 'tool']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Dark Mode Toggle** Bookmarklet is a powerful tool that forces dark mode on any website, even those that don't support it natively.

**With one click, this bookmarklet injects a CSS overlay that inverts backgrounds to dark tones and text to light, creating a comfortable reading experience.**

Perfect for late-night browsing, reducing eye strain, or simply preferring dark interfaces. Works on any webpage regardless of the site's own theme support.

{% set js %}
{% include "src/bm/dark-mode-toggle.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

### Features {: .text-3xl .font-bold}

- ✨ One-click toggle — click again to turn off
- 🔒 Works locally in your browser
- 📱 Compatible with all modern browsers
- 🚀 Instant dark mode injection
- 🛡️ No data collection or tracking
{: .list-inside .list-disc .mb-6}

### Why Use Dark Mode Toggle? {: .text-3xl .font-bold .mt-10}

- Force dark mode on sites that don't offer it
- Reduce eye strain during extended browsing
- Get a consistent dark experience across all websites
- Works universally — no site-specific support needed
- Lightweight CSS injection with no performance impact

### How to Use {: .text-3xl .font-bold .mt-10}

1. Drag the button above to your bookmarks bar
2. Navigate to any webpage
3. Click the bookmarklet to activate dark mode
4. Click again to toggle it off and restore original styles
