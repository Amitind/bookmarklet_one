---
title: "Sticky Header Killer Bookmarklet: Remove Fixed Headers That Block Your Screen"
description: "Use the Sticky Header Killer bookmarklet to instantly remove sticky headers, fixed navigation bars, and floating banners that obstruct your reading experience."
date: 2024-03-16
tags:
  - How To
  - productivity
featured_image: /img/open-graph.png
custom_class: "prose"
---

:::alert
**Sticky Header Killer is a one-click bookmarklet that removes fixed, sticky, and floating headers from any webpage — giving you back your full screen space.**
:::

We've all been there. You're reading an article and a massive sticky header takes up 20% of your screen. Or you're scrolling through search results and a floating banner blocks the content. Sometimes you just want to read without distractions.

The **Sticky Header Killer bookmarklet** removes all fixed-position elements from any webpage with a single click.

## What Are Sticky Headers?

Sticky headers are elements that stay fixed at the top (or bottom) of your screen as you scroll. They're commonly used for:

* Navigation menus
* Cookie consent banners
* Promotional bars
* Chat widgets
* Social sharing buttons

While these can be useful for website owners, they often obstruct content and create a frustrating reading experience.

## How Sticky Header Killer Works

The bookmarklet scans the page for elements using `position: fixed` or `position: sticky` CSS properties. It then removes these elements from the page, giving you the full viewport to read content.

Here's what it targets:

* Fixed navigation bars
* Sticky headers and footers
* Floating action buttons
* Cookie consent banners
* Chat widgets and popups
* Promotional sticky bars

All removed elements are gone for the current page load — refresh the page and everything returns to normal.

## Why Remove Sticky Headers?

Sticky headers cause several problems:

* **Reduced reading space** — Taking up 60-120px of vertical space on every screen
* **Layout jumps** — Content shifts when sticky elements appear or disappear
* **Distraction** — Moving elements pull your attention away from content
* **Mobile frustration** — Especially problematic on smaller screens where every pixel matters

{:.list-disc .list-inside .space-y-2}

## Use Cases

This bookmarklet is particularly useful for:

* **Reading articles** — Get the full screen without navigation bars blocking content
* **Comparing content** — See how layouts look without sticky elements
* **Taking screenshots** — Clean screenshots without floating elements
* **Testing accessibility** — Verify content is still navigable without sticky elements
* **Mobile browsing** — Reclaim valuable screen space on phones and tablets

## Sticky Header Killer vs CSS Overrides

You could manually add CSS overrides through browser dev tools, but that requires:

1. Opening dev tools every time
2. Finding the right selectors
3. Writing and testing CSS rules
4. Repeating the process on every new website

The Sticky Header Killer does all of this automatically in one click — no dev tools needed, no selectors to find, no CSS to write.

## Tips for Best Results

* **Refresh to restore** — Simply refresh the page to bring back all sticky elements
* **Works on most sites** — Handles common patterns like Bootstrap navbars, WordPress sticky headers, and custom implementations
* **Non-destructive** — Only removes elements from the current view, never modifies the source

## Try It Now

Drag the bookmarklet button to your bookmarks bar. Next time a sticky header gets in your way, just click it. The obstruction disappears instantly, and you can enjoy unobstructed reading.

{% set js %}
{% include "src/bm/sticky-header-killer.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

> 📖 [View full documentation →](/bm/sticky-header-killer/)

It's a small tool that makes a big difference in your daily browsing experience.
