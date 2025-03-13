---
title: Check SSL Certificate
description: "A bookmarklet that checks if the current page is served over HTTPS"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is an essential tool for security and SEO verification.

**With one click, this bookmarklet checks if the page is served over HTTPS with a valid SSL certificate.**

Perfect for quick security audits and SEO verification. No more manual inspection - just click and check!

{% set js %}
{% include "src/bm/check-ssl-certificate.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your security auditing by:

-   Automatically detecting HTTPS protocol
-   Checking SSL certificate status
-   Displaying current URL protocol
-   Showing domain information
-   Working on any webpage instantly
    {: .list-inside .list-disc .mb-6 }

## Why Use the SSL Certificate Checker? {:.text-3xl .font-bold}

This essential tool makes SSL verification effortless. Perfect for web developers, security professionals, and anyone who needs to ensure secure connections. Simply click the bookmarklet to instantly check if a page is served over HTTPS. Helps you quickly identify pages that need SSL implementation and ensure better security and SEO performance. 