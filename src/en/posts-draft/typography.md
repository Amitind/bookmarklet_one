---
title: Typography
# eleventyExcludeFromCollections: true
# eleventyNavigation:
#   parent: meta
#   key: typography
#   title: Typography
#   order: 3
eleventyNavigation:
  parent: primary
  key: Typography
  order: 1
---

## h1 heading{:.text-4xl .font-bold}

## h2 heading{:.text-3xl .font-bold}

### h3 heading{:.text-3xl .font-bold}

#### h4 heading{:.text-2xl .font-bold}

##### h5 heading{:.text-2xl .font-bold}

###### h6 heading{:.text-xl .font-bold}

this is paragraph, to go to new paragraph add one blank link

like this, but if you add
like this it will add br

[link🔗](http://localhost:8000/img/icons/success.svg)

[[image with njk shortcode using 11ty image plugin]]
{% image "./src/img/open-graph.png", sizes="", widths=['400'], imgclass="object-cover" %}

:::alert {:.grid .md:grid-cols-2 .gap-2 .bg-blue-300 .my-5}
 custom alert box using with custom classes

 custom alert box using with custom classes
:::
:::group {:.grid .md:grid-cols-2 .gap-2 .bg-gray-50 .p-5 .my-5}
 custom alert box using with custom classes

 custom alert box using with custom classes
:::

:::success
success alert
:::
:::danger
danger alert
:::
:::info
info alert
:::
:::idea
idea alert
:::
:::warning
warning alert
:::

```md
## code block ```
```

```js
//javascript
function abc(){
  return false
}
```

```css
/* css */
.alert {
  padding:5px
}
```

[[kbd]]+[[kbd]]

==mark text==

text with ref url {% ref "http://localhost:8000/allcomponents/" %}

[normal link](http://localhost:8000/allcomponents/)

* list item 1
* list item 2
* to apply class to ul write attribute in new line
{:.list-decimal .list-inside}

to load js after minifying
{% set js %}
{% include "src/bm/qr_code.js" %}
{% endset %}

```js
//generate QR Code
javascript: {{js | jsmin | safe}}
```

load js directly without any filter

```js
//generate QR Code
javascript: {% include "src/bm/qr_code.js" %}
```

import bookmarklet like this

{% set js %}
{% include "src/bm/qr_code.js" %}
{% endset %}

{% bookmarklet js %}
{% bookmarkletbtn js, text="URL to QR" %}

njk shortcode for highlight code

{% highlight "js" %}

function myFunction() {
  return true;
}

{% endhighlight %}

https://wordpress.com/support/markdown-quick-reference/

> quted text

`simplecode`

{% renderTemplate "md" %}

use renderTemplate
{% endrenderTemplate %}

==njk macros are powerfull to create reusable code==

njk include vs import

