---
title: URL to QR Code
description: ""
date: 2024-05-29
featured_image: /img/open-graph.png
custom_class: "prose"
---

The {{title}} Bookmarklet is a handy tool that can make sharing links with others much easier.

**With one click, Bookmarklet will turn URL of the current webpage into a QR code.**
:::group {:.space-y-6 .py-6}

{% set js %}
{% include "src/bm/qr_code.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}
:::

This means that you can easily share the link with friends, family, or colleagues by simply showing them the QR code or scanning it with your mobile phone.

The QR code can be quickly and easily shared in a variety of ways, including through email, social media platforms, or even by printing it out and handing it to someone in person.

Overall, the URL to QR Code Bookmarklet is a simple yet powerful tool that can streamline the process of sharing links and information with others.

Whether you are looking to share a news article, a recipe, or a webpage from your favorite online store, this tool can help you do it quickly and easily.
