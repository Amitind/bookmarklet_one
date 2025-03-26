---
title: How to Create Bookmarklets
description: "A comprehensive guide to creating bookmarklets - learn how to write JavaScript code that can be saved as browser bookmarks to automate tasks and enhance web browsing"
date: 2023-01-25
tags:
  - How To
featured_image: /img/open-graph.png
custom_class: "prose"
---

[Bookmarklets](/what-are-bookmarklets/) are very usefull and timesaving piece of javascript code and that you can use.

first let's see how a bookmarklets look like.

## Create Bookmarklet{:.font-bold .text-2xl}

Before starting to create bookmarklets few things you should keep mind,

* All bookmarkelts must start with **javascript:** keyword,
* Do not use comments inside bookarklets, there is big chance your bookmarklet will fail to run,

{:.list-decimal .list-inside}

==One Liner Bookmarklets==

if JavaScript code is simple then you can write that in one line and your custom bookmarklet is ready.

```js
javascript:alert(location.href)
```

This type of bookmarklet is good if you want to extract some basic information from page where you don't need to keep track of any value.

**Example:**

* Quickly check all indexed page of current website,
* Enable right-click,
* Show hidden fields,
* Remove any element from page,

{:.list-disc .list-inside}

==Bookmarklets that require more than one line==

If your code is a bit complex and needs more space then use the wrap your function like following IIF IEF **JavaScript immediately invoked function** {% ref "https://developer.mozilla.org/en-US/docs/Glossary/IIFE"%}

:::group {:.grid .md:grid-cols-3 .gap-2}

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

**Example:**

* Generate QR code,
* Make it Snow on page,
* Extract or remove any element from page

{:.list-disc .list-inside}

---

Now you can easily convert JavaScript code to Bookmarklets,

If you find it little bit difficult to make bookmarklet then you can take help of [bookmarklet maker tools](/bookmarklet-maker/).

By doing so not extra script always loads on everypage, script will run only when you run it.
