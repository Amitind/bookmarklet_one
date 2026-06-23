---
title: "Markdown Link Copier Bookmarklet: Copy Any Page Link in Markdown Format Instantly"
description: "Copy the current page title and URL as a Markdown-formatted link with one click. Perfect for documentation, notes, and content creation workflows."
date: 2024-03-17
tags:
  - How To
  - tool
featured_image: /img/open-graph.png
custom_class: "prose"
---

:::alert
**Markdown Link Copier copies the current page's title and URL as a formatted Markdown link `[title](url)` to your clipboard — one click, ready to paste.**
:::

If you work with Markdown daily — writing documentation, taking notes, drafting blog posts, or contributing to GitHub — you know the friction of manually formatting links. You have to copy the URL, find the page title, then type `[Page Title](https://example.com)`.

The **Markdown Link Copier bookmarklet** eliminates this friction entirely. One click, and you have a perfectly formatted Markdown link ready to paste.

## How It Works

When you click the bookmarklet:

1. It reads the page's `<title>` tag
2. It captures the current URL
3. It formats both as `[title](url)`
4. It copies the result to your clipboard
5. A brief notification confirms the copy

That's it. No configuration, no settings, no accounts.

## Where Markdown Links Are Used

Markdown is everywhere in modern workflows:

* **GitHub** — Issues, pull requests, discussions, and README files
* **Documentation** — MDN, GitBook, Docusaurus, and static site generators
* **Note-taking** — Obsidian, Notion, Logseq, and bear
* **Chat apps** — Slack and Discord support Markdown formatting
* **Blogging** — Hugo, Jekyll, Eleventy, and many other platforms

{:.list-disc .list-inside .space-y-2}

In each of these contexts, you frequently need to share links. The Markdown Link Copier makes this seamless.

## Use Cases

### Writing Documentation

When documenting an API or writing technical guides, you constantly reference other pages. Instead of manually formatting each link, just click the bookmarklet and paste.

### Taking Research Notes

Building a research document? Quickly grab formatted links from every source you visit. Your notes stay organized with properly formatted references.

### Contributing to Open Source

When responding to GitHub issues or writing PR descriptions, links are essential. Copy the exact page you're referencing with one click.

### Building Knowledge Bases

Creating a wiki or knowledge base? Every entry needs cross-references. The bookmarklet speeds up link collection dramatically.

## Markdown Link Copier vs Browser Address Bar

The address bar gives you the URL, but not the page title. You'd need to:

1. Copy the URL from the address bar
2. Find and copy the page title
3. Manually format `[title](url)`
4. Remember the exact Markdown syntax

The bookmarklet does all of this in a single click, with zero chance of formatting errors.

## Pro Tips

* **Batch collection** — Visit multiple pages and click the bookmarklet on each to build a list of links quickly
* **Custom titles** — If the page title isn't what you want, you can edit the result before pasting
* **Works everywhere** — The copied Markdown is universal and works in any Markdown-compatible tool

## Get Started

Drag the bookmarklet to your bookmarks bar and try it on the current page. You'll immediately have `[Page Title](https://current-page-url)` in your clipboard, ready to paste wherever you need it.

{% set js %}
{% include "src/bm/markdown-link-copier.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

> 📖 [View full documentation →](/bm/markdown-link-copier/)

Once you start using it, you'll wonder how you ever managed without it.
