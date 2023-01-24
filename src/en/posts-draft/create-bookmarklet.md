---
title: How to Create Bookmarklets
description: ""
status: draft
tags:
  - How To
featured_image: /img/open-graph.png
custom_class: "prose"
---

Bookmarklets are very usefull and timesaving piece of javascript code and that you can use.

first let's see how a bookmarklets look like.

## Create Bookmarklet{:.font-bold .text-2xl}

if js code is simple then you can write that in one line

```js
javascript:alert(location.href)
```

If your code is a bit complex and needs more space then use the wrap your function like following IIF IEF

https://developer.mozilla.org/en-US/docs/Glossary/IIFE

**JavaScript immediately invoked function** {% ref "https://developer.mozilla.org/en-US/docs/Glossary/IIFE"%}

:::alert {:.grid .grid-cols-3 .gap-2 .text-red-500}

```js
/* variation 1 */
(function(){
 /* function logic here */
})();
```

```js
/* variation 2 */
(()=>{
 /* function logic here */
})();
```

```js
/* variation 3 */
(async ()=>{
 /* function logic here */
})();
```

:::

```js
javascript:(()=>{
  alert(location.href)
})();
```
