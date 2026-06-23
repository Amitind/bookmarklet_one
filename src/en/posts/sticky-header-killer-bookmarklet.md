---
title: "Sticky Header Killer Bookmarklet"
description: "Remove fixed headers, nav bars, and floating banners that block your screen."
date: 2024-03-16
tags:
  - How To
  - productivity
featured_image: /img/open-graph.png
custom_class: "prose"
---

Sticky headers eat up screen space. The **Sticky Header Killer** bookmarklet removes them all with one click.

It finds every element using `position: fixed` or `position: sticky` and resets them. Navigation bars, cookie banners, chat widgets, promotional bars, all gone. Refresh to restore.

## The Problem

Fixed headers take 60-120px of vertical space on every screen. On mobile, that's painful. They cause layout shifts, block content, and pull attention away from what you're reading.

## What It Targets

* Fixed navigation bars
* Sticky headers and footers
* Cookie consent banners
* Chat widgets and popups
* Floating action buttons

{% set js %}
{% include "src/bm/sticky-header-killer.js" %}
{% endset %}

{% bookmarkletbtn js, text="Kill Sticky" %}

> 📖 [Full documentation](/bm/sticky-header-killer/)
