---
title: "Dark Mode Toggle Bookmarklet"
description: "Force dark mode on any website with one click. No extensions needed."
date: 2024-03-15
tags:
  - How To
  - tool
featured_image: /img/open-graph.png
custom_class: "prose"
---

Not every website offers dark mode. The **Dark Mode Toggle** bookmarklet fixes that with a single click.

It injects a CSS overlay that inverts backgrounds to dark tones and text to light. Click once to activate, click again to turn off. No settings, no accounts.

## Why Dark Mode Matters

Dark mode reduces eye strain in low-light environments and saves battery on OLED screens. But many sites still don't offer it natively. This bookmarklet fills that gap universally.

## How It Works

The bookmarklet scans the page and injects a dark color scheme. It preserves readability while cutting glare. Works on any webpage regardless of the site's own theme support.

## When to Use It

* Late-night browsing sessions
* Sites without native dark mode
* Testing dark mode on your own projects
* Reducing eye strain during long reads

{% set js %}
{% include "src/bm/dark-mode-toggle.js" %}
{% endset %}

{% bookmarkletbtn js, text="Dark Mode" %}

> 📖 [Full documentation](/bm/dark-mode-toggle/)
