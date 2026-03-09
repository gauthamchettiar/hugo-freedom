---
title: "Expand"
slug: "expand"
date: 2026-03-01
tags: ["intermediate"]
---
Display collapsible content using the `{{</* expand */>}}` shortcode.

<!--more-->

## Features
- Creates a semantic `<details>` element for accessible collapsible content.
- Visual +/- symbols indicate expanded/collapsed state.
- Control initial expanded/collapsed state.
- Supports custom CSS classes for styling.
- Fully keyboard accessible.

## Parameters

title
: (required) Text displayed in the summary header.

initialState
: (optional) Set to "open" to display expanded by default (default: collapsed).

class
: (optional) CSS class applied to the details element (default: "fr-wdgt-expand").

style
: (optional) Style variant: "simple" (default) or "box" for bordered appearance.

iconName
: (optional) Name of the Font Awesome icon to display before the title (e.g., "lightbulb", "github").

iconStyle
: (optional) Style of the icon: "solid" (default), "regular", or "brands".

## Syntax
```html {title="markdown"}
{{</* expand title="Click to expand" */>}}
This content is hidden until clicked.
{{</* /expand */>}}
```

## Examples

### Example 1 : Basic Expand
The simplest usage: a title and hidden content. A + symbol appears when collapsed, − when expanded.

```html {title="markdown"}
{{</* expand title="What is Hugo?" */>}}
Hugo is a fast and modern static site generator written in Go, designed for speed and flexibility.
{{</* /expand */>}}
```

{{< expand title="What is Hugo?" >}}
Hugo is a fast and modern static site generator written in Go, designed for speed and flexibility.
{{< /expand >}}

### Example 2 : Basic Expand with Icon
Use `iconName` and `iconStyle` to add an icon in the simple style.

```html {title="markdown"}
{{</* expand title="Features" iconName="lightbulb" iconStyle="solid" */>}}
- **Fast**: Built in Go for blazing performance
- **Flexible**: Extensive template system
- **Simple**: Easy to learn and use
- **Powerful**: Full markdown and HTML support

See more at [hugo.io](https://hugo.io).
{{</* /expand */>}}
```

{{< expand title="Features" iconName="lightbulb" iconStyle="solid" >}}
- **Fast**: Built in Go for blazing performance
- **Flexible**: Extensive template system
- **Simple**: Easy to learn and use
- **Powerful**: Full markdown and HTML support

See more at [hugo.io](https://hugo.io).
{{< /expand >}}

### Example 3 : Expanded by Default
Use `initialState="open"` to show the content expanded on page load.

```html {title="markdown"}
{{</* expand title="Quick Start" initialState="open" */>}}
1. Install Hugo
2. Create a new site: `hugo new site mysite`
3. Add a theme
4. Run `hugo server` to preview locally
{{</* /expand */>}}
```

{{< expand title="Quick Start" initialState="open" >}}
1. Install Hugo
2. Create a new site: `hugo new site mysite`
3. Add a theme
4. Run `hugo server` to preview locally
{{< /expand >}}

### Example 4 : FAQ Style
Create multiple expandable sections for frequently asked questions.

```html {title="markdown"}
{{</* expand title="What license is Hugo under?" */>}}
Hugo is released under the Apache License 2.0.
{{</* /expand */>}}

{{</* expand title="Can I use Hugo for commercial projects?" */>}}
Yes, Hugo is free and open source. You can use it for any project, including commercial ones.
{{</* /expand */>}}
```

{{< expand title="Is there a hosted version of Hugo?" >}}
Hugo is a static site generator that runs locally. You can host the generated site on any web server or use services like Netlify, Vercel, or GitHub Pages.
{{< /expand >}}

{{< expand title="What license is Hugo under?" >}}
Hugo is released under the Apache License 2.0.
{{< /expand >}}

{{< expand title="Can I use Hugo for commercial projects?" >}}
Yes, Hugo is free and open source. You can use it for any project, including commercial ones.
{{< /expand >}}

{{< expand title="Is there a hosted version of Hugo?" >}}
Hugo is a static site generator that runs locally. You can host the generated site on any web server or use services like Netlify, Vercel, or GitHub Pages.
{{< /expand >}}

### Example 5: Boxed Style (with optional icon)
Use the `style="box"` parameter to add a border and padding for extra emphasis.

```html {title="markdown"}
{{</* expand title="Important Notice" style="box" iconName="bulb" iconStyle="solid" */>}}
This expand widget has a border and padding to make it stand out visually. This style is useful for highlighting important information, warnings, or notes that need extra visual emphasis.
{{</* /expand */>}}
```

{{< expand title="Important Notice" style="box" iconName="lightbulb" iconStyle="solid" >}}
This expand widget has a border and padding to make it stand out visually. This style is useful for highlighting important information, warnings, or notes that need extra visual emphasis.
{{< /expand >}}
