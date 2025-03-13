---
title: Check AMP Version
description: "A bookmarklet that checks if an AMP version of the current page is available"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is an essential tool for mobile optimization and AMP verification.

**With one click, this bookmarklet checks if an AMP version of the current page exists.**

Perfect for quick mobile optimization audits and AMP verification. No more manual inspection - just click and check!

{% set js %}
{% include "src/bm/check-amp-version.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your mobile optimization by:

-   Automatically checking for AMP version
-   Displaying AMP URL if available
-   Showing current page URL for reference
-   Highlighting presence/absence of AMP version
-   Working on any webpage instantly
    {: .list-inside .list-disc }

## Why Use the AMP Version Checker? {:.text-3xl .font-bold}

This essential tool makes AMP verification effortless. Perfect for SEO professionals, web developers, and anyone who needs to ensure proper mobile optimization. Simply click the bookmarklet to instantly check if a page has an AMP version available. Helps you quickly identify pages that need AMP implementation and ensure better mobile performance and visibility. 