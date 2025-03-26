---
title: Clear Local Storage
description: "Clears all local storage data for the current domain."
tags: ['Web Dev', 'Debugging']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Clear Local Storage** bookmarklet is a powerful tool for web developers to quickly clear all local storage data for the current domain. This tool is particularly useful for testing, debugging, and ensuring a clean state for development.

{% set js %}
{% include "src/bm/clear-local-storage.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

- Clears all local storage data for the current domain
- Shows number of items to be cleared
- Displays current domain information
- Provides clear success/error feedback
- Simple to use with a single click
{: .list-inside .list-disc .mb-6}

### Why Use Clear Local Storage? {: .text-3xl .font-bold .mt-10}

The Clear Local Storage bookmarklet is essential for developers who need to:
- Reset application state during testing
- Clear cached data for debugging
- Ensure a clean development environment
- Test application behavior with fresh storage
- Remove outdated or corrupted storage data

### Features {: .text-3xl .font-bold .mt-10}

1. **Domain-Specific Clearing**
   - Only affects the current domain
   - Preserves data for other domains
   - Shows domain information

2. **Safety Measures**
   - Displays warning message
   - Shows number of items to be cleared
   - Requires explicit confirmation

3. **Clear Feedback**
   - Success confirmation message
   - Error handling and display
   - Easy to close popup

4. **User-Friendly Interface**
   - Clean, modern design
   - Clear instructions
   - Intuitive controls

### How to Use {: .text-3xl .font-bold .mt-10}

1. Click the bookmarklet to activate the tool
2. Review the domain and number of items to be cleared
3. Click the "Clear All Local Storage Data" button
4. Confirm the action
5. View the success/error message
6. Close the popup when done

### Best Practices {: .text-3xl .font-bold .mt-10}

- Use this tool only when necessary
- Back up important data before clearing
- Test in development environment first
- Document storage structure before clearing
- Verify application behavior after clearing 