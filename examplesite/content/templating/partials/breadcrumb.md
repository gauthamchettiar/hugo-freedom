---
title: "Breadcrumb"
slug: breadcrumb
date: 2026-03-03
tags: ["advanced"]
draft: false
---

Render a hierarchical breadcrumb trail for the current page using the `widgets/breadcrumb.html` partial.

<!--more-->

## Features
- Automatically walks the `.Page.Ancestors` chain and prints links separated by a `›` character.
- Skips the homepage ancestor by default.
- Optionally shows or hides the current page in the trail.
- Allows custom CSS class names for styling.

## Parameters

page
: **required** The page for which the breadcrumb should be rendered (typically `.` when used in a page template).

class
: (optional) CSS class applied to the `<nav>` element. Defaults to `fr-wdgt-breadcrumb`.

showCurrentPage
: (optional, boolean) When `true` the breadcrumb ends with the current page title; when `false` the trail stops at the parent. Defaults to `true`.

separator
: (optional) Character or string used between items. Defaults to `›`.

## Syntax

```go-html-template
{{ partial "widgets/breadcrumb.html" (dict 
    "class" "my-breadcrumb" 
    "showCurrentPage" false
) }}
```

## Examples

### Default behaviour

```go-html-template
{{ partial "widgets/breadcrumb.html" (dict "page" .) }}
```

### Custom class, hide current page, and custom separator

```go-html-template
{{ partial "widgets/breadcrumb.html" (dict 
    "page" .
    "class" "site-breadcrumb" 
    "showCurrentPage" false
    "separator" "/"  
) }}
```

> The `page` key above is shown for clarity but it is not required: when you pass `.` the partial already has access to the page context.

The rendered output for a page located at `/guide/templating/partials/` might look like:

```
<nav class="site-breadcrumb">
  <ul>
    <li><a href="/">Home</a></li>
    <li class="separator">›</li>
    <li><a href="/guide/">Guide</a></li>
    <li class="separator">›</li>
    <li aria-current="page" class="current">Partials</li>
    <li class="separator">›</li>
  </ul>
</nav>
```

Feel free to include the partial anywhere in your layout (header, sidebar, etc.) to provide navigational context to readers.