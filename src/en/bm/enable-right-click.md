---
title: Enable Right click
description: ""
# date: 2023-03-31
featured_image: /img/open-graph.png
custom_class: "prose"
---

The {{title}} Bookmarklet is a handy Bookmarklet.

**With one click, Bookmarklet will enable right click on websites where website owners disable it.**

{% set js %}
{% include "src/bm/enable_right_click.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}
