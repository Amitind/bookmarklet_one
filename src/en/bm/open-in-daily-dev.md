---
title: Open in daily.dev
description: 'Open the current article on daily.dev, or submit it as a shared post if daily.dev has not indexed it yet'
tags: ['productivity']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is a fast shortcut for daily.dev readers and contributors.

**With one click, this bookmarklet opens the current page through daily.dev's URL shortcut.**

If the article is already on daily.dev, you land on its daily.dev post. If it is not there yet, daily.dev lets you submit it as a shared post without copying and pasting the link.

Sharing features:
{:.mb-2}

-   Opens the daily.dev version of the current article
-   Starts a shared post submission when the article is not on daily.dev yet
-   Works from any normal webpage
-   Keeps the original source URL intact
-   No browser extension required
    {: .list-inside .list-disc .mb-6 }

{% set js %}
{% include "src/bm/open-in-daily-dev.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

## Why Use the Open in daily.dev Bookmarklet? {:.text-3xl .font-bold}

This lightweight tool removes the extra search step when you want to find or share an article on daily.dev. Click it while reading any article and the bookmarklet sends your browser to `https://daily.dev/` followed by the current page URL, using the same daily.dev shortcut you can type manually in the address bar.
