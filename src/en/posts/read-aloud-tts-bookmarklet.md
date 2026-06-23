---
title: "Read Aloud TTS Bookmarklet: Listen to Any Webpage Using Text-to-Speech"
description: "Use the Read Aloud TTS bookmarklet to listen to web content with customizable voice, speed, and pitch. Built-in browser speech synthesis — no extensions needed."
date: 2024-03-18
tags:
  - How To
  - accessibility
featured_image: /img/open-graph.png
custom_class: "prose"
---

:::alert
**Read Aloud TTS is a bookmarklet that transforms any webpage into audio using the browser's built-in speech synthesis. Adjustable voice, speed, and pitch — completely offline.**
:::

Not everyone absorbs information best through reading. Some people prefer listening — whether they're multitasking, dealing with eye strain, or simply have a learning preference for auditory content.

The **Read Aloud TTS bookmarklet** turns any webpage into a listenable audio experience, using nothing but your browser's built-in SpeechSynthesis API.

## How Read Aloud TTS Works

When you click the bookmarklet, a clean floating panel appears with full playback controls:

* **Voice selector** — Choose from all installed system voices
* **Speed control** — Adjust from 0.5x to 3x playback speed
* **Pitch control** — Fine-tune the pitch from 0.5 to 2.0
* **Play / Pause / Stop** — Full playback control

The bookmarklet intelligently detects article content on the page, filtering out navigation, ads, and sidebars to focus on what matters.

## Smart Content Detection

Read Aloud TTS doesn't just read everything on the page. It looks for:

* `<article>` elements
* `<main>` or `[role="main"]` containers
* Common content wrappers (`.content`, `.post-content`, `.entry-content`)
* Fall back to all paragraph text if no article is found

This means it reads the actual content, not the navigation menu or footer links.

## Benefits of Text-to-Speech for Web Content

Using TTS for web content offers several advantages:

* **Multitasking** — Listen to articles while doing other things
* **Accessibility** — Assists users with visual impairments or reading difficulties
* **Eye strain relief** — Give your eyes a break during long reading sessions
* **Proofreading** — Hearing text helps catch errors your eyes might skip
* **Language learning** — Listen at slower speeds to practice pronunciation

{:.list-disc .list-inside .space-y-2}

## Selected Text Reading

One of the most useful features: highlight any text on a page before clicking Play, and Read Aloud will only read your selection. This is perfect for:

* Listening to a specific paragraph
* Pronouncing unfamiliar words
* Testing how a passage sounds before publishing
* Focusing on a particular section of a long article

## Read Aloud vs Screen Readers

Screen readers like NVDA and VoiceOver are powerful accessibility tools, but they're designed for full system integration and can be complex to configure.

Read Aloud TTS is different — it's a quick, lightweight tool for when you just want to hear a page. No configuration, no system settings, no learning curve.

## Browser Compatibility

The SpeechSynthesis API is supported in:

* Google Chrome (most voices available)
* Microsoft Edge
* Safari
* Firefox

Chrome on desktop typically offers the widest selection of voices. On mobile, availability varies by device and OS.

## Tips for Best Results

* **Adjust speed** — Try 1.25x for a natural listening pace, or 0.7x for language learning
* **Try different voices** — Each voice has a unique character; experiment to find your preference
* **Works offline** — Once loaded, speech synthesis runs locally on your device

## Try It Now

Drag the bookmarklet to your bookmarks bar, navigate to any article, and click it. Select a voice, adjust the speed, and press Play. You'll hear the page come alive.

{% set js %}
{% include "src/bm/read-aloud-tts.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

> 📖 [View full documentation →](/bm/read-aloud-tts/)
