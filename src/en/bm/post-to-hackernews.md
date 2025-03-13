---
title: Post to Hackernews
description: 'Share any webpage instantly to Hacker News with a single click'
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is a time-saving tool for Hacker News community members.

**With one click, this bookmarklet opens the Hacker News submission form with the current webpage's URL and title pre-filled, ready to share.**

Perfect for quickly sharing interesting articles, discussions, or resources with the Hacker News community. Streamlines the submission process by automatically capturing the page details.

Sharing features:
{:.mb-2}

-   Auto-fills page URL
-   Pre-populates title field
-   Quick access to HN submit form
-   Works on any webpage
-   Preserves original source
    {: .list-inside .list-disc .mb-6 }

{% set js %}
{% include "src/bm/post-to-hackernews.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

## Why Use the Post to Hackernews Bookmarklet? {:.text-3xl .font-bold}

This efficient tool makes sharing content on Hacker News effortless. Perfect for tech enthusiasts, developers, and anyone who regularly contributes to HN discussions. Simply click while browsing any interesting page to instantly prepare it for submission to Hacker News.

:::info
You'll need to be logged into your Hacker News account to complete the submission.
:::
