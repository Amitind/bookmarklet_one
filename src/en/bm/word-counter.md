---
title: Word Counter
description: "Quickly count words and characters in any selected text on a webpage"
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The Word Counter bookmarklet is an essential tool for content writers and editors who need to quickly analyze text length and structure on any webpage.

**This efficient bookmarklet instantly provides detailed word and character counts for any selected text, eliminating the need for external tools or copy-pasting.**

Perfect for content analysis and editing, this tool provides immediate feedback about text length and structure.

{% set js %}
{% include "src/bm/word-counter.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

    * Counts words and characters in selected text
    * Shows characters with and without spaces
    * Calculates average word length
    * Works on any webpage
    * Provides results in a clean modal window
{: .list-inside .list-disc .mb-6}

### Why Use Word Counter? {: .text-3xl .font-bold .mt-10}

This bookmarklet is essential for:
- Quick content length analysis
- Meeting word count requirements
- Analyzing text structure and complexity
- Content editing and revision
- SEO content optimization 