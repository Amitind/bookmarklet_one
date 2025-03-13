---
title: Google Site Search
description: 'Instantly search within any website using Google site: operator with one click'
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is a powerful search tool for exploring website content.

**With one click, this bookmarklet performs a Google site: search for the current website, helping you find specific content within any domain.**

Perfect for searching within large websites, finding specific articles, or discovering content that's hard to locate through regular navigation. Simply click while on any website to see all its pages indexed by Google.

Search capabilities:
{:.mb-2}

-   Instant site-specific search
-   Uses Google's powerful index
-   Find hidden or archived content
-   Search within any domain
-   Add custom search terms
    {: .list-inside .list-disc .mb-6 }

{% set js %}
{% include "src/bm/google-site-search.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

:::info
The above bookmarklet searches all pages on the current website.
:::

{% set js %}
{% include "src/bm/google-site-search-keyword.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text="Google Site Search with Keyword" %}

:::info
This version prompts for a keyword first, then searches for that term within the current website.
:::

## Why Use the Google Site Search Bookmarklet? {:.text-3xl .font-bold}

This efficient tool helps you explore websites more thoroughly using Google's search capabilities. Perfect for researchers, content explorers, and anyone who needs to find specific information within a website. Choose between searching all pages or searching with a specific keyword.

Features comparison:
{:.mb-2}

-   Basic version: Instantly shows all indexed pages
-   Keyword version: Prompts for search term first
-   Both use Google's site: operator
-   Both work on any website
    {: .list-inside .list-disc .mb-6 }
