---
title: Quick Note
description: 'Instantly create notes in your browser with this simple Quick Note bookmarklet'
# date: 2023-03-31
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is a handy tool for quick note-taking while browsing.

**With one click, this Bookmarklet opens a new tab with a clean, distraction-free note-taking space.**

Perfect for jotting down ideas, saving important information, or drafting content while browsing. The simple interface lets you focus on your thoughts without switching between apps.

**Remember to copy or save your notes before closing the tab!**

{% set js %}
{% include "src/bm/quick_note.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

## Why Use the Quick Note Bookmarklet? {:.text-3xl .font-bold}

This lightweight tool transforms your browser into an instant notepad. Ideal for students, researchers, writers, and anyone who needs to take quick notes while browsing. No account required, no apps to install - just click and start typing. Works seamlessly across all major browsers and doesn't store any data online, keeping your notes private.
