---
title: Color Picker
description: "Lets users click any element on the page to see its background or text color in hex, RGB, or HSL format."
tags: ['Web Dev', 'Design']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Color Picker** bookmarklet is a powerful tool for web developers and designers to quickly identify colors on any webpage. This tool provides real-time color information for both background and text colors in multiple formats.

{% set js %}
{% include "src/bm/color-picker.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

- Shows background and text colors on hover
- Displays colors in HEX, RGB, and HSL formats
- Provides visual color swatches
- Updates in real-time as you move
- Simple to use with a single click
{: .list-inside .list-disc .mb-6}

### Why Use Color Picker? {:.text-3xl .font-bold .mt-10}

The Color Picker bookmarklet is essential for developers and designers who need to:
- Identify exact colors used on a webpage
- Match colors for design consistency
- Debug color-related issues
- Extract color values for development
- Understand color relationships

### Features {:.text-3xl .font-bold .mt-10}

1. **Multiple Color Formats**
   - HEX color codes
   - RGB color values
   - HSL color values
   - Visual color swatches

2. **Real-Time Updates**
   - Instant color information
   - Live preview as you move
   - Both background and text colors
   - Accurate color detection

3. **User-Friendly Interface**
   - Clean, modern design
   - Easy to read values
   - Visual color swatches
   - Non-intrusive overlay

4. **Comprehensive Information**
   - Background colors
   - Text colors
   - Multiple format options
   - Precise color values

### How to Use {:.text-3xl .font-bold .mt-10}

1. Click the bookmarklet to activate the tool
2. Click the "Start Picking Colors" button
3. Move your cursor over any element
4. View the color information in the popup
5. Close the tool when done

### Best Practices {:.text-3xl .font-bold .mt-10}

- Use this tool to maintain color consistency
- Check color contrast for accessibility
- Verify color implementation
- Document color schemes
- Test color variations 