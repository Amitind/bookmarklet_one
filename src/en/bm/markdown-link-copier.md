---
title: Markdown Link Copier
description: "Copy the current page as a Markdown-formatted link [title](url) to your clipboard"
tags: ['tool', 'productivity']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Markdown Link Copier** Bookmarklet instantly copies the current page as a properly formatted Markdown link.

**With one click, this bookmarklet captures the page title and URL, formats it as `[title](url)`, and copies it directly to your clipboard.**

Perfect for writing documentation, taking notes, sharing links in Markdown-enabled platforms like GitHub, Reddit, or Obsidian.

{% set js %}
{% include "src/bm/markdown-link-copier.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

### Features {: .text-3xl .font-bold}

- ✨ One-click copy to clipboard
- 🔒 Works locally in your browser
- 📱 Compatible with all modern browsers
- 🚀 Instant formatting and copy
- 🛡️ No data collection or tracking
{: .list-inside .list-disc .mb-6}

### Why Use Markdown Link Copier? {: .text-3xl .font-bold .mt-10}

- Save time writing Markdown links manually
- Perfect for GitHub issues, PRs, and documentation
- Great for note-taking in Obsidian, Notion, or Logseq
- Works with any website — no installation needed
- Includes clipboard fallback for older browsers

### How to Use {: .text-3xl .font-bold .mt-10}

1. Drag the button above to your bookmarks bar
2. Navigate to any webpage
3. Click the bookmarklet
4. The Markdown link is copied to your clipboard
5. Paste anywhere — GitHub, docs, notes, chat
