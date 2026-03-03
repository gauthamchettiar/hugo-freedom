---
title: "Blockquote"
slug: blockquote
date: 2026-03-03
tags: ["advanced"]
draft: false
---

Render styled blockquotes and alert boxes using the `widgets/alt/blockquote.html` partial.

<!--more-->

> This is the partial implementation of blockquote. For the markdown syntax, check [Blockquotes](/authoring/elements/blockquotes/) documentation.

## Features
- Renders a semantic `<figure>` + `<blockquote>` structure with consistent default styling (`fr-blockquote`).
- Supports alert-style rendering with a variation icon and i18n title label.
- Supports author and source attribution rendered in `<figcaption>`.
- Accepts a `cite` URL for the `<blockquote cite="...">` attribute and as the href for the source link.
- Supports preset `variation` classes for contextual theming.
- Accepts custom CSS classes via the `class` parameter.

## Parameters

`page`
: (required) The current Hugo page context (`.Page`).

`text`
: (required) The HTML content rendered inside the `<blockquote>` element.

`type`
: (optional) Set to `"alert"` to render an alert box with a variation icon and a title label.

`variation`
: (optional) Applies a preset color theme. Available values: `accent`, `info`, `note`, `tip`, `warning`, `important`, `caution`.
: Used for the icon selection and CSS color class when `type="alert"`, and for the CSS variation class on regular blockquotes.

`author`
: (optional) Displayed as the attribution author in `<figcaption>`. Only rendered for non-alert blockquotes.

`source`
: (optional) Displayed as a linked `<cite>` element in `<figcaption>`. Requires `cite` to be set for the link href.

`cite`
: (optional) URL used as the `<blockquote cite="...">` attribute and as the href for the `source` link.

`class`
: (optional) CSS class applied to the wrapping `<figure>` element (default: `fr-blockquote`).

## Syntax

```go-html-template
{{ partial "widgets/alt/blockquote.html" (dict
    "page"      .Page
    "text"      "Blockquote content here."
    "type"      ""
    "variation" ""
    "author"    ""
    "cite"      ""
    "source"    ""
    "class"     ""
) }}
```

## Examples

### Example 1: Basic Blockquote

```go-html-template
{{ partial "widgets/alt/blockquote.html" (dict
    "page" .Page
    "text" "The quick brown fox jumps over the lazy dog."
) }}
```
---

### Example 2: Blockquote with Author and Source

```go-html-template
{{ partial "widgets/alt/blockquote.html" (dict
    "page"   .Page
    "text"   "Be yourself; everyone else is already taken."
    "author" "Oscar Wilde"
    "cite"   "https://example.com"
    "source" "Example Source"
) }}
```

---

### Example 3: Styled Blockquote with Variation

```go-html-template
{{ partial "widgets/alt/blockquote.html" (dict
    "page"      .Page
    "text"      "This blockquote uses the accent variation."
    "variation" "important"
) }}
```

---

### Example 4: Alert Blockquote

Set `type` to `"alert"` and `variation` to the desired alert type to render an alert box with an icon and a labelled header.

```go-html-template
{{ partial "widgets/alt/blockquote.html" (dict
    "page"      .Page
    "type"      "alert"
    "variation" "note"
    "text"      "Highlights information that users should take into account."
) }}
```
