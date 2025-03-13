---
title: CSS Class Inspector
description: "Allows you to hover over elements and see a tooltip displaying all CSS classes applied to that element."
tags: ['Web Dev', 'CSS']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **CSS Class Inspector** bookmarklet is a powerful tool for inspecting CSS classes and their computed styles on any webpage.

**Interactive CSS Analysis**

This bookmarklet provides real-time information about CSS classes as you hover over elements, showing you the applied styles and their computed values.

{% set js %}
{% include "src/bm/css-class-inspector.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

- Shows CSS classes on hover
- Displays computed styles for each class
- Provides element information
- Interactive tooltip interface
- Toggle functionality for easy control
{: .list-inside .list-disc .mb-6 }

### Why Use CSS Class Inspector? {:.text-3xl .font-bold}

The CSS Class Inspector bookmarklet is essential for web developers who need to understand how CSS classes are being applied to elements. It helps identify styles, debug CSS issues, and understand the cascade of styles on your page. 