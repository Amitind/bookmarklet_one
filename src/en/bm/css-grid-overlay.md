---
title: CSS Grid Overlay
description: "Adds a visual overlay showing the CSS grid layout on the page."
tags: ['Web Dev']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

:::danger
Broken In progress
:::

The **CSS Grid Overlay** bookmarklet is a powerful tool for web developers to visually inspect the grid layout on any webpage.

**Visualize CSS Grid Layouts Instantly**

This bookmarklet provides a quick and easy way to see the grid structure of elements styled with CSS Grid, helping developers debug and optimize their layouts.

{% set js %}
{% include "src/bm/css-grid-overlay.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

- Highlights all elements using CSS Grid
- Adds a semi-transparent overlay for easy visualization
- Works on any webpage with grid layouts
- Helps in debugging and optimizing grid designs
- Simple to use with a single click
{: .list-inside .list-disc .mb-6 }

### Why Use CSS Grid Overlay? {:.text-3xl .font-bold}

The CSS Grid Overlay bookmarklet is essential for developers who want to ensure their grid layouts are functioning as intended. It saves time by providing immediate visual feedback, allowing for quick adjustments and improvements. 