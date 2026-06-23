---
title: Delete Cookies
description: 'A powerful bookmarklet to instantly delete all cookies from the current website. Enhance your privacy and troubleshoot website issues with one click.'
tags: ['privacy']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The Delete Cookies Bookmarklet is a handy privacy tool that helps you quickly remove all cookies from the current website you're visiting.

**With one click, this bookmarklet will remove all cookies associated with the current website.**

{% set js %}
{% include "src/bm/delete-cookies.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

## Features {:.text-3xl .font-bold}

-   ✨ One-click operation
-   🔒 Works locally in your browser
-   📱 Compatible with all modern browsers
-   🚀 Instant feedback on deleted cookies
-   🛡️ Helps protect your privacy
    {: .list-decimal .list-inside}

This bookmarklet is perfect for web developers, privacy-conscious users, and anyone who needs to quickly manage their website cookies.
