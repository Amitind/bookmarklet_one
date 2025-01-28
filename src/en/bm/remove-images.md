---
title: Remove Images
description: 'Instantly remove all images from any webpage for faster loading and distraction-free reading'
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is a practical tool for optimizing your browsing experience.

**With one click, this bookmarklet removes all images from the current webpage, leaving you with clean, text-only content.**

Perfect for users on limited bandwidth, those trying to avoid distractions, or anyone who wants to focus purely on text content. It's particularly useful when browsing news sites, reading articles, or accessing content on slow connections. Also helps reduce data usage on mobile devices.

{% set js %}
{% include "src/bm/remove-images.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

## Why Use the Remove Images Bookmarklet? {:.text-3xl .font-bold}

This practical tool instantly transforms any image-heavy webpage into a lightweight, text-only version. Ideal for users with limited internet connectivity, readers who prefer distraction-free content, and developers testing text-only layouts. It significantly reduces page load times and data usage while maintaining the core content. Works seamlessly across all major browsers and websites.
