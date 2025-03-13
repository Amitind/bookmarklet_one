---
title: Check Broken Links
description: "A bookmarklet that analyzes internal and external links on the current page"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is an essential tool for link analysis and site maintenance.

**With one click, this bookmarklet analyzes all links on the page and categorizes them as internal or external.**

Perfect for quick link audits and site maintenance. No more manual inspection - just click and analyze!

{% set js %}
{% include "src/bm/check-broken-links.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your link analysis by:

-   Automatically detecting all links
-   Categorizing internal and external links
-   Displaying link text and URLs
-   Showing link count summary
-   Working on any webpage instantly
    {: .list-inside .list-disc }

## Why Use the Broken Links Checker? {:.text-3xl .font-bold}

This essential tool makes link analysis effortless. Perfect for content managers, SEO professionals, and anyone who needs to maintain site quality. Simply click the bookmarklet to instantly analyze all links on a page. Helps you quickly identify potential broken links and ensure better site maintenance and user experience. 