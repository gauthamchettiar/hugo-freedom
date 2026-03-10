---
title: "Recents"
slug: recents
date: 2026-03-04
tags: ["advanced"]
draft: false
---

Render a list of the most recent pages from across the entire site using the `widgets/recents.html` partial.

<!--more-->

## Features
- Collects regular pages from every section of the site in a single call.
- Results are sorted newest-first by Hugo's default `site.RegularPages` ordering.
- Configurable number of posts to display.
- Delegates rendering to one of the three built-in list sub-partials: `book`, `card`, or `simple`.
- Falls back to `book` style and emits a build-time warning if an unknown style is passed.

## Parameters

count
: (optional) Maximum number of posts to show. Defaults to `5`.

style
: (optional) List rendering style. One of `"book"`, `"card"`, or `"simple"`. Defaults to `"book"`.

class
: (optional) CSS class forwarded directly to the underlying list partial's root element.

## Syntax

```go-html-template
{{ partial "widgets/recents.html" (dict
    "count" 10
    "style" "book"
    "class" "optional-extra-class"
) }}
```

## Examples

### Default (5 posts, book style)

```go-html-template
{{ partial "widgets/recents.html" . }}
```

### Show 10 most recent posts using the card layout

```go-html-template
{{ partial "widgets/recents.html" (dict
    "count" 10
    "style" "card"
) }}
```

### Show 3 most recent posts using the simple layout with a custom class

```go-html-template
{{ partial "widgets/recents.html" (dict
    "count" 3
    "style" "simple"
    "class" "sidebar-recents"
) }}
```

## List Styles

| Style    | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| `book`   | Full-row anchor with a dotted leader between title and date. Great for indexes. |
| `card`   | Cover image, title, date, and summary displayed as a card grid.             |
| `simple` | Compact inline format: date `›› title`. Ideal for sidebars and footers.     |

## Notes

- The partial queries `site.RegularPages`, which includes every non-section, non-taxonomy page across all content directories. Branch pages (`_index.md`) are intentionally excluded.
- Ordering is determined by Hugo's default page collection sort (date descending). No additional sorting step is needed inside the partial.
- Because the partial accepts only a plain `dict`, it can safely be called from any layout file, shortcode, or another partial without access to a page context.