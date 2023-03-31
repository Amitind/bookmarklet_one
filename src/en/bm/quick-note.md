---
title: Quick Note
description: ""
# date: 2023-03-31
featured_image: /img/open-graph.png
custom_class: "prose"
---

The {{title}} Bookmarklet is a handy Bookmarklet.

**With one click, Bookmarklet will new tab into a Quick Note taking space.**

**Just don't forget to save it though.**

{% set js %}
{% include "src/bm/quick_note.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}
