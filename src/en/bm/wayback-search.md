---
title: Wayback Machine Search
description: ""
# date: 2023-03-31
featured_image: /img/open-graph.png
custom_class: "prose"
---

The {{title}} Bookmarklet is a handy Bookmarklet.

**With one click, Bookmarklet will help you quickly search current page in Wayback Machine.**

It's a great way for finding old versions of a website, or to see how a website has changed over time.

{% set js %}
{% include "src/bm/search/wayback.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}
