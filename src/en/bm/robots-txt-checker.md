---
title: Robots.txt Checker
description: "A bookmarklet that checks if the current page is disallowed in the site's robots.txt file"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is an essential tool for SEO auditing and crawl control verification.

**With one click, this bookmarklet analyzes the site's robots.txt file and checks if the current page is disallowed.**

Perfect for quick SEO audits and crawl control verification. No more manual robots.txt inspection - just click and check!

{% set js %}
{% include "src/bm/robots-txt-checker.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your SEO auditing by:

-   Automatically fetching and analyzing robots.txt
-   Checking current page against disallow rules
-   Displaying full robots.txt content
-   Highlighting crawl control status
-   Working on any webpage instantly
    {: .list-inside .list-disc }

## Why Use the Robots.txt Checker? {:.text-3xl .font-bold}

This essential tool makes robots.txt verification effortless. Perfect for SEO professionals, web developers, and anyone who needs to ensure proper crawl control. Simply click the bookmarklet to instantly check if any page is disallowed in robots.txt. Helps you quickly identify crawl control issues and verify that your content is properly accessible to search engines. 