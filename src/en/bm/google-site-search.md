---
title: Google Site Search
description: 'Instantly search all indexed pages of any website through Google with a single click'
tags:
    - SEO
# date: 2023-03-31
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is a powerful SEO and research tool that streamlines site-specific Google searches.

**With one click, this bookmarklet performs a Google site: search for the current website, revealing all its indexed pages.** For example, if you're on `example.com`, it automatically searches for `site:example.com`.

This tool is invaluable for:

-   SEO professionals checking website indexing
-   Content creators finding specific articles
-   Researchers exploring site content
-   Users searching within a specific domain
-   Developers auditing site structure

You can enhance your search by adding keywords after the site: operator to find specific content within the website.

{% set js %}
{% include "src/bm/search/google_site_all.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

## Why Use the Google Site Search Bookmarklet? {:.text-3xl .font-bold}

This efficient tool transforms how you explore websites through Google's index. Perfect for SEO specialists, content researchers, and anyone needing to search within a specific domain. Simply click while on any website to instantly see all its indexed pages. Add your own search terms to narrow down results and find exactly what you're looking for.

Keywords: site search, Google search operator, SEO tool, website indexing, domain-specific search
