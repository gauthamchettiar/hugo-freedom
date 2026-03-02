---
title: "Partial: Images"
slug: images
date: 2026-03-02
tags: ["advanced"]
draft: false
---

Render accessible images using the `widgets/alt/image.html` partial.

<!--more-->

## Features
- Wraps a Hugo resource in a `<figure>`/`<img>` combination with sensible defaults (`fr-image`).
- Supports page, site and remote image sources via `utils/fetch-resource.html`.
- Automatically applies `loading="lazy"` for better performance.
- Resizes images using `width`/`height` attributes or a custom `process` string.
- Adds optional caption with alignment control.
- Allows contextual theming through `variation` presets.
- Handles dark/light visibility using `hideindark`/`hideinlight` flags.
- Accepts custom CSS classes via the `class` parameter (append to default).

## Parameters

src
: (required) Path or URL to the image. Can be a page resource (`foo.jpg`), a site asset
  (`/images/foo.jpg`), or a remote `http(s)` URL.

alt
: (optional) Alternative text for accessibility. Also used as `aria-label` and `title` on the `<img>`.

caption
: (optional) Text rendered inside a `<figcaption>` below the image.

width
: (optional) Width in pixels (or any valid CSS unit); used to build a resize `process` if
  `process` is not supplied.

height
: (optional) Height in pixels; together with `width` may trigger an automatic resize.

captionalign
: (optional) `left`, `center` or `right` alignment for the caption (default: `left`).

variation
: (optional) One of the predefined style variations (`info`, `note`, `tip`, `warning`, `important`,
  `caution`, `accent`, or `inverted`). Adds appropriate CSS modifier classes.

hideindark
: (optional) Set to `true` to hide the figure when dark mode is active.

hideinlight
: (optional) Set to `true` to hide the figure when light mode is active.

process
: (optional) Hugo image processing string (e.g. `resize 300x200`). If omitted and `width` or
  `height` are provided, a resize operation is generated automatically.

class
: (optional) Additional CSS classes appended to the outer `<figure>` (default `fr-image`).

## Syntax

```go-html-template
{{ partial "widgets/alt/image.html" (dict
    "src"        "images/example.jpg"
    "alt"        "Descriptive alt text"
    "caption"    "Optional caption below the image"
    "width"      "300"
    "height"     "200"
    "class"      "my-custom-class"
    "variation"  "info"
    "hideindark" true
    "process"    "resize 300x200"
) }}
```

## Examples

### Example 1: Basic internal image

```go-html-template
{{ partial "widgets/alt/image.html" (dict
    "src" "karigurashi002.jpg"
    "alt" "Studio Ghibli: karigurashi002.jpg"
) }}
```

The `src` is resolved relative to the current page, so the image must live alongside the
markdown file that includes this partial.

### Example 2: Remote image

```go-html-template
{{ partial "widgets/alt/image.html" (dict
    "src" "https://www.example.com/remote.jpg"
    "alt" "A remote resource"
) }}
```

Remote URLs beginning with `http://` or `https://` are fetched directly and included.

### Example 3: Caption, sizing and variation

```go-html-template
{{ partial "widgets/alt/image.html" (dict
    "src"        "images/chihiro043.jpg"
    "alt"        "Spirited Away poster"
    "caption"    "Hayao Miyazaki’s Spirited Away"
    "width"      "400"
    "captionalign" "center"
    "variation"  "note"
) }}
```

The width triggers a resize operation; the centered caption and `note` variation add
contextual styling.

### Example 4: Dark‑mode visibility and custom class

```go-html-template
{{ partial "widgets/alt/image.html" (dict
    "src"        "images/darkmode.png"
    "alt"        "Visible only in light mode"
    "hideindark" true
    "class"      "fr-image--featured"
) }}
```

Use the `hideindark`/`hideinlight` flags to control when the image appears, and
append any extra classes needed for layout or theming.