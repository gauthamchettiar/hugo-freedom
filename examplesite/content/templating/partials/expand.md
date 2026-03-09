---
title: "Expand"
slug: expand
date: 2026-03-01
tags: ["advanced"]
draft: false
---

Add collapsible content using `widgets/expand.html` partial.

<!--more-->

> This is partial implementation of expand, if you are looking for the shortcode version, check [Expand](/authoring/shortcodes/expand/) documentation.

## Features
- Creates a semantic `<details>` element for accessible collapsible content.
- Visual +/- symbols indicate expanded/collapsed state.
- Control initial expanded/collapsed state.
- Supports custom CSS classes for styling.
- Optional icon support via `widgets/icon.html` partial.
- Style variants: simple or boxed.
- Fully keyboard accessible.

## Parameters

title
: (required) Text displayed in the summary header.

content
: (required) Content to display inside the expandable section (supports markdown via `markdownify`).

class
: (optional) CSS class applied to the details element (default: "fr-wdgt-expand").

initialState
: (optional) Boolean to set initial expanded state (default: false).

iconName
: (optional) Name of the icon to display before the title (uses `widgets/icon.html` partial).

iconStyle
: (optional) Style of the icon (e.g., "solid", "regular", "brands"; default: "solid").

style
: (optional) Style variant: "simple" (default) or "box" for bordered appearance.

## Syntax
```go-html-template
{{ partial "widgets/expand.html" (dict
  "title" "Click to expand"
  "content" "This content is hidden until clicked."
  "class" "fr-wdgt-expand"
  "initialState" false
  "iconName" ""
  "iconStyle" ""
  "style" "simple"
) }}
```

## Examples

### Example 1: Basic Expand
```go-html-template
{{ partial "widgets/expand.html" (dict
  "title" "What is Hugo?"
  "content" "Hugo is a fast and modern static site generator written in Go, designed for speed and flexibility."
) }}
```

### Example 2: Expanded by Default
```go-html-template
{{ partial "widgets/expand.html" (dict
  "title" "Quick Start"
  "content" "1. Install Hugo\n2. Create a new site: `hugo new site mysite`\n3. Add a theme\n4. Run `hugo server` to preview locally"
  "initialState" true
) }}
```

### Example 3: With Icon
```go-html-template
{{ partial "widgets/expand.html" (dict
  "title" "Features"
  "content" "- **Fast**: Built in Go for blazing performance\n- **Flexible**: Extensive template system\n- **Simple**: Easy to learn and use\n- **Powerful**: Full markdown and HTML support\n\nSee more at [hugo.io](https://hugo.io)."
  "iconName" "lightbulb"
  "iconStyle" "solid"
) }}
```

### Example 4: Boxed Style
```go-html-template
{{ partial "widgets/expand.html" (dict
  "title" "Important Notice"
  "content" "This expand widget has a border and padding to make it stand out visually."
  "style" "box"
) }}
```

### Example 5: With Icon and Boxed Style
```go-html-template
{{ partial "widgets/expand.html" (dict
  "title" "Important Notice"
  "content" "This expand widget has an icon, a border, and padding to make it stand out visually."
  "iconName" "exclamation-triangle"
  "iconStyle" "solid"
  "style" "box"
) }}
```
