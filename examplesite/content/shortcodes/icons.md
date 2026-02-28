---
title: Icons
slug: "icons"
date: 2025-10-29
tags: ["shortcodes"]
---
Add inline SVG icons using `{{</* icon */>}}` shortcode. 

<!--more-->

## Features
- Adds Inline Font Awesome SVGs.
- Adds accessible attributes (`role="img"` and `aria-label`) for screen readers.

## Parameters
name 
: (required) Font Awesome icon filename (e.g. `github`, `lightbulb`, `circle-info`).

style
: (optional) `solid` | `regular` | `brands` (default: `solid`).

class 
: (optional) Additional CSS classes to append to the SVG.

ariaLabel 
: (optional) Accessible label for screen readers (defaults to the icon `name`).

> Icons are fetched from [Font Awesome](https://fontawesome.com/icons) free catalog. Check below links for supported icons in each style:
>   - [Regular](https://fontawesome.com/search?ip=classic&s=regular&ic=free-collection)
>   - [Solid](https://fontawesome.com/search?ip=classic&s=solid&ic=free-collection)
>   - [Brands](https://fontawesome.com/search?ip=brands&ic=free-collection)
>

## Syntax
**Shortcode** (to be used in markdown content):

```markdown
{{</* icon 
    name="github" 
    style="brands" 
    class="my-icon" 
    ariaLabel="GitHub profile" 
*/>}}
```

**Partial** (to be used in html templates):

```go-html-template
{{ 
    partial "widgets/icon.html" (dict 
        "name" "github" 
        "style" "brands" 
        "class" "my-icon" 
        "ariaLabel" "GitHub profile"
    )
}}
```


## Examples
Below is a quick reference table showing common `icon` shortcodes and their rendered output.

| code | icon |
| --- |:---:|
| `{{</* icon name="lightbulb" */>}}` | {{< icon name="lightbulb" >}} |
| `{{</* icon name="heart" class="text-danger" */>}}` | {{< icon name="heart" class="text-danger" >}} |
| `{{</* icon name="envelope" style="regular" ariaLabel="Email" */>}}` | {{< icon name="envelope" style="regular" ariaLabel="Email" >}} |
| `{{</* icon name="github" style="brands" ariaLabel="GitHub" */>}}` | {{< icon name="github" style="brands" ariaLabel="GitHub" >}} |
| `{{</* icon name="twitter" style="brands" ariaLabel="Twitter" */>}}` | {{< icon name="twitter" style="brands" ariaLabel="Twitter" >}} |


