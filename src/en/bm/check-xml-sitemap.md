---
title: Check XML Sitemap
description: "A bookmarklet that checks for XML sitemaps on the current website"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is an essential tool for SEO auditing and sitemap discovery.

**With one click, this bookmarklet checks if XML sitemaps exist at common locations on the website.**

Perfect for quick SEO audits and sitemap verification. No more manual URL checking - just click and discover!

{% set js %}
{% include "src/bm/check-xml-sitemap.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your SEO auditing by:

-   Automatically checking sitemap.xml location
-   Verifying sitemap-index.xml existence
-   Displaying sitemap HTTP status codes
-   Providing clickable sitemap URLs
-   Working on any webpage instantly
    {: .list-inside .list-disc .mb-6 }

## Why Use the XML Sitemap Checker? {:.text-3xl .font-bold}

This essential tool makes sitemap discovery effortless. Perfect for SEO professionals, web developers, and anyone who needs to locate XML sitemaps. Simply click the bookmarklet to instantly check common sitemap locations and verify their existence. Helps you quickly identify if a website has properly configured XML sitemaps and ensure search engines can discover your content structure.