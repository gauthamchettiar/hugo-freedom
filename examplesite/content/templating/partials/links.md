---
title: "Partial: Links"
slug: links
date: 2026-03-01
tags: ["advanced"]
draft: false
---

Render accessible hyperlinks using the `widgets/link.html` partial.

<!--more-->

> This is the partial implementation of links. For the markdown/shortcode syntax, check [Links](/authoring/elements/links/) documentation.

## Features
- Renders an `<a>` element with consistent default styling (`fr-link`).
- Automatically detects external links (absolute URLs) and applies `rel="external"` and `target="_blank"`.
- Adds a visual external-link indicator icon next to external links for clear UX signaling.
- Supports an optional tooltip via the `title` parameter.
- Accepts custom CSS classes via the `class` parameter.

## Parameters

url
: (required) The destination URL. External `http(s)://` URLs are opened in a new tab automatically.

text
: (optional) The visible link text rendered inside the `<a>` tag.

title
: (optional) Tooltip text shown on hover.

class
: (optional) CSS class(es) applied to the `<a>` element (default: `fr-link`).

## Syntax
```go-html-template
{{ partial "widgets/link.html" (dict
    "url"   "https://gohugo.io"
    "text"  "Hugo"
    "title" "Official Hugo website"
    "class" "my-link"
) }}
```

## Examples

### Example 1: Basic Internal Link

```go-html-template
{{ partial "widgets/link.html" (dict
    "url"  "/guide/theme-customization/"
    "text" "Theme Customization"
) }}
```

### Example 2: External Link

External links (absolute `http(s)://` URLs) automatically open in a new tab and display an external-link icon.

```go-html-template
{{ partial "widgets/link.html" (dict
    "url"  "https://gohugo.io/documentation/"
    "text" "Hugo Documentation"
) }}
```

### Example 3: Link with Tooltip Title

```go-html-template
{{ partial "widgets/link.html" (dict
    "url"   "https://gohugo.io/documentation/"
    "text"  "Hugo Documentation"
    "title" "Official Hugo Docs"
) }}
```

### Example 4: Link with Custom Class

Providing a `class` replaces the default `fr-link` class. Include `fr-link` explicitly if you want to keep the default styling alongside your own class.

```go-html-template
{{ partial "widgets/link.html" (dict
    "url"   "https://gohugo.io"
    "text"  "Hugo"
    "class" "fr-link my-custom-link"
) }}
```
