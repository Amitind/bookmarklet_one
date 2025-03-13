---
title: Local Storage Explorer
description: "Displays the contents of the page's local storage in a readable popup."
tags: ['Web Dev', 'Debugging']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Local Storage Explorer** bookmarklet is a powerful tool for inspecting and analyzing local storage and session storage data on any webpage.

**Complete Storage Analysis**

This bookmarklet provides a detailed view of all data stored in both localStorage and sessionStorage, helping you understand and debug client-side storage.

{% set js %}
{% include "src/bm/local-storage-explorer.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

- Shows all localStorage items
- Displays all sessionStorage items
- Formats JSON data for readability
- Provides storage summary
- Helps debug storage issues
{: .list-inside .list-disc .mb-6 }

### Why Use Local Storage Explorer? {:.text-3xl .font-bold}

The Local Storage Explorer bookmarklet is essential for web developers who need to inspect and debug client-side storage. It helps understand what data is being stored, verify storage operations, and troubleshoot storage-related issues. 