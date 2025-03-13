---
title: Check Open Graph Tags
description: "A bookmarklet that checks for essential Open Graph tags on the current page"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is an essential tool for social media optimization and content sharing verification.

**With one click, this bookmarklet checks for all essential Open Graph tags and displays their content.**

Perfect for quick social media audits and content sharing verification. No more manual inspection - just click and check!

{% set js %}
{% include "src/bm/check-og-tags.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your social media optimization by:

-   Automatically detecting Open Graph tags
-   Checking for all essential tags (title, description, image, url, type)
-   Displaying tag content when present
-   Highlighting missing tags
-   Working on any webpage instantly
    {: .list-inside .list-disc }

## Why Use the Open Graph Tags Checker? {:.text-3xl .font-bold}

This essential tool makes social media optimization effortless. Perfect for content managers, social media specialists, and anyone who needs to ensure proper content sharing. Simply click the bookmarklet to instantly check if a page has all the necessary Open Graph tags. Helps you quickly identify pages that need social media optimization and ensure better content sharing across social platforms. 