---
title: Check Canonical Tags
description: "A bookmarklet that checks for canonical tags on the current page and displays their URLs"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is an essential tool for SEO auditing and duplicate content prevention.

**With one click, this bookmarklet checks for canonical tags and displays their URLs.**

Perfect for quick SEO audits and canonical tag verification. No more manual inspection - just click and check!

{% set js %}
{% include "src/bm/check-canonical-tags.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your SEO auditing by:

-   Automatically detecting canonical tags
-   Displaying all canonical URLs
-   Showing current page URL for comparison
-   Highlighting presence/absence of canonical tags
-   Working on any webpage instantly
    {: .list-inside .list-disc .mb-6 }

## Why Use the Canonical Tags Checker? {:.text-3xl .font-bold}

This essential tool makes canonical tag verification effortless. Perfect for SEO professionals, web developers, and anyone who needs to ensure proper duplicate content handling. Simply click the bookmarklet to instantly check if a page has canonical tags and verify their URLs. Helps you quickly identify potential duplicate content issues and ensure proper canonicalization of your pages. 