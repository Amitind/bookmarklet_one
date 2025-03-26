---
title: Cookie Inspector
description: "Lists all cookies associated with the current page, displaying their name, value, domain, and expiration."
tags: ['Web Dev', 'Debugging']
featured_image: /img/open-graph.png
custom_class: 'prose'
---

The **Cookie Inspector** bookmarklet is a powerful tool for web developers to inspect and analyze cookies on any webpage. This tool provides detailed information about all cookies associated with the current domain, helping developers understand and debug cookie-related issues.

{% set js %}
{% include "src/bm/cookie-inspector.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

- Lists all cookies for the current domain
- Shows cookie name, value, domain, and expiration
- Provides search functionality for cookies
- Displays total cookie count
- Simple to use with a single click
{: .list-inside .list-disc .mb-6}

### Why Use Cookie Inspector? {: .text-3xl .font-bold .mt-10}

The Cookie Inspector bookmarklet is essential for developers who need to:
- Debug cookie-related issues
- Verify cookie settings and values
- Monitor cookie expiration dates
- Understand cookie usage patterns
- Ensure proper cookie implementation

### Features {: .text-3xl .font-bold .mt-10}

1. **Comprehensive Cookie Information**
   - Cookie name and value
   - Domain and path details
   - Expiration date/time
   - Total cookie count

2. **Search Functionality**
   - Real-time cookie search
   - Filter by name or value
   - Easy to find specific cookies
   - Case-insensitive search

3. **User-Friendly Interface**
   - Clean, modern design
   - Scrollable cookie list
   - Truncated long values
   - Easy to close popup

4. **Detailed Cookie Properties**
   - Full cookie details
   - Formatted expiration dates
   - Domain information
   - Path information

### How to Use {: .text-3xl .font-bold .mt-10}

1. Click the bookmarklet to activate the tool
2. View the list of all cookies for the current domain
3. Use the search box to filter cookies
4. Review cookie details including:
   - Name and value
   - Domain and path
   - Expiration date
5. Close the popup when done

### Best Practices {: .text-3xl .font-bold .mt-10}

- Use this tool to verify cookie settings
- Check cookie expiration dates
- Monitor cookie usage patterns
- Debug cookie-related issues
- Ensure proper cookie implementation 