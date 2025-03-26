---
title: Font Inspector
description: "Shows a popup with the font family, size, and weight of text under the cursor."
tags: ['Web Dev', 'Design']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Font Inspector** bookmarklet is a powerful tool for web developers and designers to quickly identify font properties on any webpage. This tool provides detailed information about text styling, helping developers understand and maintain consistent typography.

{% set js %}
{% include "src/bm/font-inspector.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

- Shows font properties on hover
- Displays family, size, and weight
- Includes line height and spacing
- Updates in real-time as you move
- Simple to use with a single click
{: .list-inside .list-disc .mb-6}

### Why Use Font Inspector? {: .text-3xl .font-bold .mt-10}

The Font Inspector bookmarklet is essential for developers and designers who need to:
- Identify exact font properties
- Maintain typography consistency
- Debug font-related issues
- Extract font values for development
- Understand text styling

### Features {: .text-3xl .font-bold .mt-10}

1. **Comprehensive Font Information**
   - Font family
   - Font size
   - Font weight
   - Font style
   - Line height
   - Letter spacing

2. **Text Styling Details**
   - Text transform
   - Text decoration
   - Text color
   - Visual color swatch
   - Complete style information

3. **Real-Time Updates**
   - Instant property updates
   - Live preview as you move
   - Accurate measurements
   - Non-intrusive interface

4. **User-Friendly Interface**
   - Clean, modern design
   - Easy to read values
   - Organized information
   - Clear presentation

### How to Use {: .text-3xl .font-bold .mt-10}

1. Click the bookmarklet to activate the tool
2. Click the "Start Inspecting Fonts" button
3. Move your cursor over any text
4. View the font information in the popup
5. Close the tool when done

### Best Practices {: .text-3xl .font-bold .mt-10}

- Use this tool to maintain typography consistency
- Check font hierarchy
- Verify font implementation
- Document font styles
- Test font variations 