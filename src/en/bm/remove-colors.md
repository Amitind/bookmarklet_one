---
title: Remove Colors
description: 'Instantly remove all background and text colors from any webpage for better readability and accessibility testing'
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is a valuable tool for accessibility testing and web development.

**With one click, this bookmarklet removes all background colors and text colors from the current webpage, helping you evaluate contrast and readability.**

This tool is essential for accessibility testing, ensuring content remains readable without relying on colors. It's particularly useful for checking color contrast issues, testing color-blind accessibility, and verifying content hierarchy without color dependencies.

{% set js %}
{% include "src/bm/remove-colors.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

## Why Use the Remove Colors Bookmarklet? {:.text-3xl .font-bold}

This specialized tool helps ensure web content is accessible to all users, including those with color vision deficiencies. Perfect for web developers, UX designers, and accessibility specialists who need to verify their content works without color cues. Simply click the bookmarklet to strip all colors, revealing potential accessibility issues instantly. Works on any webpage across all major browsers.
