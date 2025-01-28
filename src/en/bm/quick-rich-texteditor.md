---
title: Quick Rich Texteditor
description: 'Instantly open a feature-rich text editor in your browser with formatting tools'
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The {{title}} Bookmarklet is a powerful browser-based rich text editing tool.

**With one click, this bookmarklet opens a full-featured WYSIWYG editor in a new tab, complete with formatting options and text styling tools.**

Perfect for creating formatted content, drafting rich-text documents, or preparing styled text for emails and posts. Includes all essential formatting features in a clean, intuitive interface.

Key features include:
{:.mb-2}

-   Text formatting (bold, italic, underline)
-   Paragraph styling and alignment
-   Bullet and numbered lists
-   Heading styles
-   Color and font options
-   Copy formatted text to clipboard
    {: .list-inside .list-disc }

{% set js %}
{% include "src/bm/quick-rich-texteditor.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

## Why Use the Quick Rich Texteditor Bookmarklet? {:.text-3xl .font-bold}

This versatile tool transforms your browser into a complete rich text editor. Ideal for content creators, writers, and anyone who needs quick access to text formatting tools. No account required, no installation needed - just click and start formatting. Works seamlessly across all major browsers.

:::warning
On Linked page, text is automatically saved. so you can close the tab.
:::
