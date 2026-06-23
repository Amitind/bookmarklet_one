---
title: Read Aloud (TTS)
description: "Listen to any webpage content using text-to-speech with customizable voice, speed, and pitch controls"
tags: ['accessibility', 'tool', 'productivity']
featured_image: /img/open-graph.png
custom_class: "prose"
---

The **Read Aloud (TTS)** Bookmarklet transforms any webpage into an audio experience.

**With one click, this bookmarklet reads the page content aloud using the browser's built-in speech synthesis — no extensions or APIs required.**

Whether you're multitasking, easing eye strain, or prefer auditory learning, this tool makes web content accessible through natural text-to-speech technology.

{% set js %}
{% include "src/bm/read-aloud-tts.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

### Features {: .text-3xl .font-bold}

- 🔊 Uses browser's native SpeechSynthesis API — no external services
- 🎚️ Adjustable playback speed (0.5x–3x) and pitch controls
- 🎙️ Choose from all installed system voices
- 📄 Smart content detection — reads article text, not navigation or ads
- ⏸️ Full playback controls: play, pause, resume, stop
- 🎨 Clean floating panel with progress indicator
{: .list-inside .list-disc .mb-6}

### Why Use Read Aloud (TTS)? {: .text-3xl .font-bold .mt-10}

This bookmarklet is perfect for:

- Listening to articles while multitasking or commuting
- Reducing eye strain during long reading sessions
- Assisting users with visual impairments or reading difficulties
- Proofreading content by listening for errors
- Learning new languages with slower playback speeds
- Consuming web content hands-free

### How to Use {: .text-3xl .font-bold .mt-10}

1. Drag the button above to your bookmarks bar
2. Navigate to any webpage with text content
3. Click the bookmarklet — the TTS panel appears
4. Select your preferred voice from the dropdown
5. Adjust speed and pitch using the sliders
6. Press **▶ Play** to start reading, or select specific text first to read only that portion
7. Use **⏸ Pause** to pause and **⏹ Stop** to stop playback
8. Click **✕** to close the panel when done

### Tips {: .text-3xl .font-bold .mt-10}

- **Selected text:** Highlight any text before clicking Play to read only that selection
- **Speed control:** Try 1.25x for a comfortable listening pace, or 0.7x for language learning
- **Voice selection:** Chrome on desktop offers the most voice options
- **Works offline:** Uses local browser speech — no internet connection needed after loading
