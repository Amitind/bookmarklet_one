---
title: All Components
eleventyExcludeFromCollections: true
eleventyNavigation:
  parent: meta
  key: component
  title: Component
  order: 3
---

## h2 heading{:.text-3xl .font-heading .font-bold}

### h3 heading{:.text-3xl .font-heading .font-bold}

#### h4 heading{:.text-2xl .font-heading .font-bold}

##### h5 heading{:.text-2xl .font-heading .font-bold}

###### h6 heading{:.text-xl .font-heading .font-bold}

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

text with ref url {% ref "http://localhost:8000/allcomponents/" %}

[normal link](http://localhost:8000/allcomponents/)
