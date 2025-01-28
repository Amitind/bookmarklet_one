---
title: Remove Images
description: ""
featured_image: /img/open-graph.png
custom_class: "prose"
---

The {{title}} Bookmarklet is a handy Bookmarklet.

**With one click, this bookmarklet will...**

{% set js %}
{% include "src/bm/remove-images.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}
