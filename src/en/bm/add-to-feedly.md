---
title: Add to Feedly
description: "Instantly add any website's RSS feed to your Feedly account with a single click"
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is a time-saving tool for Feedly users and RSS enthusiasts.

**With one click, this bookmarklet detects and adds the current website's RSS feed to your Feedly account.**

Perfect for quickly subscribing to blogs, news sites, and any other website that offers RSS feeds.

No more hunting for RSS feed links or copying and pasting feed URLs - just click and subscribe!

{% set js %}
{% include "src/bm/add-to-feedly.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your content curation workflow by:

-   Automatically detecting RSS/Atom feeds
-   Opening Feedly's add feed interface
-   Saving you time from manual feed URL copying
-   Making feed subscription seamless
-   Integrating directly with your Feedly account
    {: .list-inside .list-disc }

## Why Use the Add to Feedly Bookmarklet?{:.my-4}

This essential tool makes RSS subscription effortless. Perfect for content curators, news followers, and anyone who uses Feedly to stay updated with their favorite websites. Simply click the bookmarklet on any page with an RSS feed to instantly add it to your Feedly subscriptions. Works seamlessly with all major websites that provide RSS/Atom feeds.
