---
title: "Heading Hierarchy Map Bookmarklet"
description: "Visualize any page's heading structure as a color-coded interactive tree. Great for SEO audits."
date: 2024-03-20
tags:
  - How To
  - seo
featured_image: /img/open-graph.png
custom_class: "prose"
---

Heading structure matters for SEO and accessibility, but it's hard to see in the browser. The **Heading Hierarchy Map** bookmarklet shows it as a visual tree.

One click generates a diagram of every heading on the page, color-coded by level from H1 (red) to H6 (purple). Click any heading in the tree to jump to it on the page.

## What It Shows

* Color-coded heading levels
* Nesting relationships via indentation
* Child and leaf node badges
* Total heading count
* Click-to-navigate from the diagram

## Why It Matters

**SEO**: Search engines use headings to understand content hierarchy. One H1 per page, proper nesting, no skipped levels.

**Accessibility**: Screen readers use headings for navigation. Broken structure breaks the experience.

**Content quality**: Good headings reflect organized thinking. They make content scannable.

## When to Use It

* SEO audits of competitor pages
* Accessibility reviews
* Content planning and restructuring
* Verifying CMS-generated heading markup

{% set js %}
{% include "src/bm/heading-hierarchy-map.js" %}
{% endset %}

{% bookmarkletbtn js, text="Heading Map" %}

> 📖 [Full documentation](/bm/heading-hierarchy-map/)
