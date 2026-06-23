---
title: "Dark Mode Toggle Bookmarklet: Switch Any Website to Dark Mode in One Click"
description: "Learn how to use the Dark Mode Toggle bookmarklet to instantly switch any website to dark mode without extensions. Reduce eye strain and save battery life."
date: 2024-03-15
tags:
  - How To
  - tool
featured_image: /img/open-graph.png
custom_class: "prose"
---

:::alert
**Dark Mode Toggle is a lightweight bookmarklet that instantly switches any website to dark mode using CSS injection — no extensions, no accounts, no tracking.**
:::

Dark mode has become one of the most requested features across the web. Studies show it reduces eye strain in low-light conditions and can save significant battery life on OLED screens. But not every website offers a dark mode option.

That's where the **Dark Mode Toggle bookmarklet** comes in. With a single click, you can inject a dark color scheme into any webpage — instantly.

## How the Dark Mode Toggle Bookmarklet Works

The bookmarklet works by injecting a CSS stylesheet that overrides the page's background and text colors. It uses carefully chosen color values that maintain readability while reducing glare.

Here's what happens when you click it:

1. **First click** — Activates dark mode by injecting a CSS filter
2. **Second click** — Removes the dark mode and restores the original appearance

It's that simple. No settings to configure, no accounts to create.

## Benefits of Using Dark Mode

Using dark mode across websites offers several advantages:

* **Reduced eye strain** — Especially noticeable during long reading sessions or in dark environments
* **Battery savings** — OLED and AMOLED screens consume less power displaying dark pixels
* **Better focus** — Dark backgrounds can reduce visual distractions
* **Sleep quality** — Less blue light exposure in the evening

{:.list-disc .list-inside .space-y-2}

## When to Use Dark Mode Toggle

This bookmarklet is perfect for:

* Reading articles at night
* Browsing websites that don't offer native dark mode
* Working in low-light environments
* Quickly comparing how a site looks in light vs dark mode
* Testing dark mode implementation on your own websites

## Dark Mode Toggle vs Browser Extensions

Browser extensions that add dark mode typically:

* Require installation and permission grants
* Run on every page automatically (even when you don't want them)
* May collect browsing data
* Can slow down page loading

The Dark Mode Toggle bookmarklet:

* Requires zero installation
* Only runs when you click it
* Collects absolutely no data
* Has zero impact on page performance until activated

## Try It Out

You can add the Dark Mode Toggle bookmarklet to your browser right now. Simply drag the button below to your bookmarks bar, and it's ready to use on any website.

{% set js %}
{% include "src/bm/dark-mode-toggle.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

> 📖 [View full documentation →](/bm/dark-mode-toggle/)

The bookmarklet works on all modern browsers including Chrome, Firefox, Safari, and Edge. It handles common edge cases like fixed navigation bars, modals, and overlays gracefully.

## Wrapping Up

Dark mode doesn't have to be a feature that's limited to apps and websites that support it. With the Dark Mode Toggle bookmarklet, you can bring dark mode to any webpage instantly. It's lightweight, privacy-friendly, and takes one click to use.

Give it a try on your favorite websites and see how much more comfortable browsing can be.
