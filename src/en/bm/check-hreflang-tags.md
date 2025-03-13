---
title: Check Hreflang Tags
description: "A bookmarklet that checks for hreflang tags on the current page"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is an essential tool for international SEO and multilingual content verification.

**With one click, this bookmarklet checks for hreflang tags and displays their URLs.**

Perfect for quick international SEO audits and multilingual content verification. No more manual inspection - just click and check!

{% set js %}
{% include "src/bm/check-hreflang-tags.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your international SEO by:

-   Automatically detecting hreflang tags
-   Displaying all language/region variations
-   Showing current page URL for reference
-   Highlighting presence/absence of hreflang tags
-   Working on any webpage instantly
    {: .list-inside .list-disc .mb-6 }

## Why Use the Hreflang Tags Checker? {:.text-3xl .font-bold}

This essential tool makes international SEO verification effortless. Perfect for SEO professionals, content managers, and anyone who needs to ensure proper multilingual content handling. Simply click the bookmarklet to instantly check if a page has hreflang tags and verify all language/region variations. Helps you quickly identify pages that need international SEO improvements and ensure better content targeting across different regions and languages. 