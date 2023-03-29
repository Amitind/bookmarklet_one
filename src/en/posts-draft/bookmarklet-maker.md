---
title: Make Bookmarklet
description: ""
date: 2023-01-25
tags:
  - How To
featured_image: /img/open-graph.png
---

Bookmarklet Maker

<script src="/js/alpine.min.js" defer></script>
<script>

function bmdata(){
  return {
    bm_txt: 'alert(location.hostname)',
    bm_label: 'label',
    generated_bm: ' ',
    generate_bm(){
      return "javascript:(()=>{"+this.bm_txt+"})();"
    }
  }
}

</script>

<div class="space-y-4" x-data=bmdata>

<textarea name="code" id="code" cols="30" rows="10" class="w-full border p-4" x-model="bm_txt"></textarea>
<input x-model="bm_label" class="w-full border px-4 py-2">

<div class="text-center">
<button class="px-8 py-2 bg-red-500 text-white rounded-full font-heading tracking-wider"> Generate Bookmarklet </button>
</div>

<pre x-text="generate_bm" class="bg-zinc-900 text-white p-4 language-js"></pre>

```js

```

</div>
