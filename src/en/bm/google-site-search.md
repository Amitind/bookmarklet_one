---
title: Google Site Search
description: ""
tags:
    - SEO
# date: 2023-03-31
featured_image: /img/open-graph.png
custom_class: "prose"
---

The {{title}} Bookmarklet is a handy Bookmarklet.

**With one click, Bookmarklet will take current website's location hostname and search on google like `site:bookmarklet.one`.**

That search will list all indexed pages of the current website, You can also add your query to the search to find pages related to that query on current website.

{% set js %}
{% include "src/bm/search/google_site_all.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}
