---
title: Unused CSS Detector
description: "Scans the page's CSS and highlights rules that aren't applied to any elements."
tags: ['Web Dev', 'Performance']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Unused CSS Detector** bookmarklet is a powerful tool for identifying unused CSS rules on any webpage, helping you optimize your stylesheets and improve page performance.

**CSS Optimization Made Easy**

This bookmarklet analyzes all CSS rules and identifies those that aren't being used by any elements on the page, helping you clean up your stylesheets.

{% set js %}
{% include "src/bm/unused-css-detector.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

- Scans all stylesheets (internal and external)
- Identifies unused CSS rules
- Shows rule selectors and properties
- Displays source of unused rules
- Helps optimize page performance
{: .list-inside .list-disc .mb-6 }

### Why Use Unused CSS Detector? {:.text-3xl .font-bold}

The Unused CSS Detector bookmarklet is essential for web developers who want to optimize their pages by removing unused CSS. It helps reduce file sizes, improve load times, and maintain cleaner stylesheets by identifying and removing dead code. 