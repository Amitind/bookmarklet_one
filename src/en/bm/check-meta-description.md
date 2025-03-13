---
title: Check Meta Description
description: "A bookmarklet that checks the meta description length and content on the current page"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is an essential tool for SEO auditing and meta description optimization.

**With one click, this bookmarklet analyzes the meta description length and content.**

Perfect for quick SEO audits and meta description verification. No more manual inspection - just click and check!

{% set js %}
{% include "src/bm/check-meta-description.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your SEO auditing by:

-   Automatically detecting meta description
-   Analyzing description length
-   Checking against optimal length (120-160 characters)
-   Displaying full description content
-   Working on any webpage instantly
    {: .list-inside .list-disc }

## Why Use the Meta Description Checker? {:.text-3xl .font-bold}

This essential tool makes meta description verification effortless. Perfect for SEO professionals, content managers, and anyone who needs to ensure optimal meta descriptions. Simply click the bookmarklet to instantly check if a page's meta description is properly optimized. Helps you quickly identify pages that need meta description improvements and ensure better search engine visibility. 