---
title: Sticky Header Killer
description: "Remove annoying fixed and sticky headers that block content while scrolling"
tags: ['productivity']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Sticky Header Killer** Bookmarklet removes fixed and sticky navigation bars that overlap content while you scroll.

**With one click, this bookmarklet finds all fixed/sticky elements — typically headers and nav bars — and resets them to static positioning.**

Perfect for reading articles, filling out forms, or viewing content that gets obscured by persistent navigation bars. Works on any webpage.

{% set js %}
{% include "src/bm/sticky-header-killer.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

### Features {: .text-3xl .font-bold}

- ✨ One-click operation
- 🔒 Works locally in your browser
- 📱 Compatible with all modern browsers
- 🚀 Instantly removes sticky headers
- 🛡️ No data collection or tracking
{: .list-inside .list-disc .mb-6}

### Why Use Sticky Header Killer? {: .text-3xl .font-bold .mt-10}

- Reclaim screen space taken by persistent headers
- Read articles without navigation bars blocking content
- Fill out forms without sticky headers overlapping inputs
- Works universally on any website
- Smart detection targets only headers and small fixed elements

### How to Use {: .text-3xl .font-bold .mt-10}

1. Drag the button above to your bookmarks bar
2. Navigate to any webpage with a sticky header
3. Click the bookmarklet to remove all fixed/sticky headers
4. Refresh the page to restore original behavior
