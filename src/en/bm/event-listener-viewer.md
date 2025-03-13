---
title: Event Listener Viewer
description: "Lists all JavaScript event listeners attached to elements on the page in a popup."
tags: ['Web Dev', 'Debugging']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Event Listener Viewer** bookmarklet is a powerful tool for inspecting JavaScript event listeners on any webpage, helping you understand and debug event handling.

**Complete Event Listener Analysis**

This bookmarklet provides a detailed view of all event listeners attached to elements on the page, including their types, functions, and configuration options.

{% set js %}
{% include "src/bm/event-listener-viewer.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

- Detects all event listeners on the page
- Shows element paths and selectors
- Displays event types and functions
- Lists capture and passive options
- Helps debug event handling
{: .list-inside .list-disc .mb-6 }

### Why Use Event Listener Viewer? {:.text-3xl .font-bold}

The Event Listener Viewer bookmarklet is essential for web developers who need to understand and debug event handling on their pages. It helps identify event listeners, their configurations, and potential issues with event handling, making debugging easier and more efficient. 