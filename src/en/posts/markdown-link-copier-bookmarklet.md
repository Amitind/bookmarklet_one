---
title: "Markdown Link Copier Bookmarklet"
description: "Copy any page as a Markdown link [title](url) to your clipboard instantly."
date: 2024-03-17
tags:
  - How To
  - tool
featured_image: /img/open-graph.png
custom_class: "prose"
---

Writing Markdown links by hand is tedious. The **Markdown Link Copier** bookmarklet does it in one click.

It reads the page title and URL, formats them as `[title](url)`, and copies the result to your clipboard. Ready to paste into GitHub, Obsidian, docs, or anywhere.

## Where It Helps

* **GitHub** issues, PRs, and READMEs
* **Documentation** sites and wikis
* **Note-taking** in Obsidian, Notion, Logseq
* **Chat** in Slack and Discord
* **Blogging** with Hugo, Jekyll, Eleventy

## How It Works

1. Click the bookmarklet
2. It reads `<title>` and the current URL
3. Formats as `[title](url)`
4. Copies to clipboard

One click, no configuration.

{% set js %}
{% include "src/bm/markdown-link-copier.js" %}
{% endset %}

{% bookmarkletbtn js, text="Copy Link" %}

> 📖 [Full documentation](/bm/markdown-link-copier/)
