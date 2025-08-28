---
title: What are Bookmarklets
description: "Learn about bookmarklets - small JavaScript code snippets stored as browser bookmarks that help automate tasks and access hidden page information without installing extensions"
date: 2023-01-24
tags:
  - How To
layout: layouts/post.njk
featured_image: /img/wbm.png
---

:::alert
**Bookmarklets are small peice of JavaScript code that is stored as bookmarks in browser. Bookmarklets help in automating repetitive task, access hidden information from page.**
:::

Simple bookmarklets look like this

```js
javascript:alert(location.href)
```

Just copy the above code and save it as bookmark,

Once bookmark is saved you can click on it run on any webpage.

:::info
Bookmarklets have **javascript:** prefix,
:::

Wihtout **javascript:** prefix any JavaScript code saved as bookmark will not run in browser.

## Pros of using Bookmarklets{:.text-3xl .font-bold}

* No need to install any Chrome extension for simple things,
* No code is auto inserted into any page unless you decide,
* You can write your own helpfull bookmarklets on your own, (like quickly adding ling to feedly, pocket or sending link through pushbullet)

{:.list-disc .list-inside}

## Cons of using Bookmarklets{:.text-3xl .font-bold}

* Bookmarklets do not run automatically or trigger on schedule,
* List of website that offer Bookmarklets are limited

{:.list-disc .list-inside}

If you want to create your bookmarklet then here is full post about [How to create your own Bookmarklet](/create-bookmarklet/)
