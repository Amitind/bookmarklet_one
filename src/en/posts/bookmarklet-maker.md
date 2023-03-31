---
title: How To Make Bookmarklet
description: 'Bookmarklet Maker is a powerful tool that enables you to create your own custom bookmarklets, allowing you to enhance your productivity and streamline your workflow. '
date: 2023-03-31
tags:
    - How To
    - Tool
featured_image: /img/open-graph.png
---

{% renderTemplate "md" %}
Bookmarklet Maker is a powerful tool that enables you to create your own custom bookmarklets, allowing you to enhance your productivity and streamline your workflow.
{% endrenderTemplate %}

<script src="/js/alpine.min.js" defer></script>
{# <script src="/js/bookmarkletmaker.min.js" defer></script> #}
<script>
  {% include 'src/public/js/bookmarkletmaker.min.js' %}
</script>

<!-- <script>
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
</script> -->

<section class="space-y-4 my-6 p-2" x-data=bmdata>
<div>
<label for="code" class="font-bold">Your JavaScript code</label>

<textarea
name="code"
id="code"
title="Enter JS code"
cols="30"
rows="5"
class="w-full border-2 p-4 border-gray-700"
x-model="bm_txt"
2x-on:input="show_bm=false"></textarea>
</div>

<div class="flex justify-center items-center min-h-[200px]" >
<button
class="px-8 py-2 border-gray-700 border-2 shadow-gray-700 shadow-custom hover:shadow-none transition font-heading tracking-wider text-gray-700"
@click="toggle_bm"
x-show="!show_bm"> Generate Bookmarklet </button>

<div x-show="show_bm" x-transition class="space-y-6 w-full">
<div>
<label for="bm_label" class="font-bold">Bookmarklet Name</label>
<input
x-model="bm_label"
title="Enter Bookmarkelet Name"
class="w-full px-4 py-2 border-2 border-gray-700"
id="bm_label"
maxlength="30"
>
</div>

<pre
class="language-js"
x-text="generate_bm"
title="JS code encodeURIComponent">
</pre>

<p>
Drag me to bookmark bar: 👉🏻
<a
class="border-gray-700 border-2 shadow-gray-700 shadow-custom hover:shadow-none transition px-3 py-1 text-gray-700 " x-text="bm_label"
:href="generate_bm"></a>
</p>

</div>

</div>

</section>

By leveraging the power of basic JavaScript, you can transform your bookmarks from simple shortcuts to powerful and versatile tools that can help you accomplish a wide variety of tasks with ease.

With Bookmarklet Maker, you can avoid cluttering your browser with unnecessary extensions, and instead create lightweight and effective solutions that work seamlessly with your existing workflow.

Whether you're looking to automate repetitive tasks, simplify your browsing experience, or just boost your productivity, Bookmarklet Maker is a must-have tool for anyone looking to get the most out of their browser.

## Benefits of Bookmarklets {:.text-3xl .font-bold}

* **Easy to Use**: Bookmarklets are incredibly easy to use, and can be created in just a few minutes.
* **Versatile**: Bookmarklets can be used to automate a wide variety of tasks, including everything from simple form-filling to complex data analysis.
* **Lightweight**: Bookmarklets are lightweight and don't require any additional software to run, making them ideal for users who want to keep their browser as lean as possible.

{:.list-disc .list-inside .space-y-2}

## Bookmarklet Examples {:.text-3xl .font-bold}

Some examples of bookmarklets that you can create with Bookmarklet Maker:

### QR Code Generator

{% set js %}
{% include "src/bm/qr_code.js" %}
{% endset %}

{% bookmarklet js %}

### Search in Google Site:All

{% set js %}
{% include "src/bm/search/google_site_all.js" %}
{% endset %}
{% bookmarklet js %}

### Enable Right Click

{% set js %}
{% include "src/bm/enable_right_click.js" %}
{% endset %}

{% bookmarklet js %}

### Quick Note

{% set js %}
{% include "src/bm/quick_note.js" %}
{% endset %}

{% bookmarklet js %}

