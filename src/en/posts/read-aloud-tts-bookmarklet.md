---
title: "Read Aloud TTS Bookmarklet"
description: "Listen to any webpage using built-in browser speech synthesis. Adjustable voice, speed, and pitch."
date: 2024-03-18
tags:
  - How To
  - accessibility
featured_image: /img/open-graph.png
custom_class: "prose"
---

Some people absorb information better by listening. The **Read Aloud TTS** bookmarklet turns any webpage into audio using your browser's built-in speech synthesis.

No extensions, no API keys, no data sent anywhere. Just click and listen.

## What You Get

* Voice selector from all installed system voices
* Speed control from 0.5x to 3x
* Pitch adjustment from 0.5 to 2.0
* Play, pause, and stop controls

## Smart Content Detection

The bookmarklet doesn't read everything on the page. It finds `<article>`, `<main>`, or content containers and focuses on the actual text. Navigation, ads, and sidebars get skipped.

## Selective Reading

Highlight any text before clicking Play, and it reads only your selection. Useful for proofreading, testing how a passage sounds, or learning pronunciation.

## Browser Support

Works in Chrome, Edge, Safari, and Firefox. Chrome on desktop offers the most voices.

{% set js %}
{% include "src/bm/read-aloud-tts.js" %}
{% endset %}

{% bookmarkletbtn js, text="Read Aloud" %}

> 📖 [Full documentation](/bm/read-aloud-tts/)
