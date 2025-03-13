---
title: Keyword Density Analyzer
description: "A bookmarklet that analyzes the current webpage and displays the keyword density of the most frequent words"
tags: ['seo']
featured_image: /img/open-graph.png
custom_class: "prose"
---

The {{title}} Bookmarklet is a powerful tool for SEO analysis and content optimization.

**With one click, this bookmarklet analyzes the current webpage and shows you the density of the most frequently used words.**

Perfect for quick SEO analysis and content optimization. No more complex tools or manual counting - just click and analyze!

{% set js %}
{% include "src/bm/keyword-density-analyzer.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text=title %}

This tool streamlines your content analysis by:

-   Analyzing all text content on the page
-   Showing top 10 most frequent words
-   Displaying word count and percentage
-   Ignoring short words (3 letters or less)
-   Providing instant keyword density insights
    {: .list-inside .list-disc }

## Why Use the Keyword Density Analyzer? {:.text-3xl .font-bold}

This essential tool makes keyword density analysis effortless. Perfect for SEO professionals, content writers, and anyone who needs to optimize their content for search engines. Simply click the bookmarklet to instantly see the most frequently used words and their density percentages. Helps you quickly identify overused or underused keywords and optimize your content accordingly.

## Features

- Analyzes all text content on the page
- Shows top 10 most frequent words
- Displays word count and percentage
- Ignores short words (3 letters or less)
- Works on any webpage

## How to Use

1. Click the bookmarklet
2. A popup will show the top 10 keywords with their:
   - Number of occurrences
   - Percentage of total words

## Code

```javascript
javascript:(function(){
    const text = document.body.innerText;
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const wordCount = words.length;
    const wordFreq = {};
    
    words.forEach(word => {
        if (word.length > 3) { // Ignore short words
            wordFreq[word] = (wordFreq[word] || 0) + 1;
        }
    });
    
    const sortedWords = Object.entries(wordFreq)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
    
    const density = sortedWords.map(([word, count]) => ({
        word,
        count,
        percentage: ((count / wordCount) * 100).toFixed(2)
    }));
    
    const result = density.map(({word, count, percentage}) => 
        `${word}: ${count} occurrences (${percentage}%)`
    ).join('\n');
    
    alert('Top 10 Keywords by Density:\n\n' + result);
})();
```

## Use Cases

- SEO optimization
- Content analysis
- Keyword research
- Content quality assessment 