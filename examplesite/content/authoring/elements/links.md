---
title: Links
slug: "links"
date: 2026-03-01
tags: ["basics"]
---

A link element rendered using standard markdown link syntax and alternative shortcode `{{</* link */>}}`.

<!--more-->

## Features
- Supports standard Markdown link syntax `[text](url)` and alternative shortcode `{{</* link */>}}`.
- Automatically detects external links (absolute URLs) and opens them in a new tab with `rel="external"` and `target="_blank"`.
- Adds a visual external-link indicator icon next to external URLs.
- Supports tooltip text via the optional title attribute.
- Allows adding custom CSS classes via the `class` attribute (shortcode only).

## Syntax

{{< tabs group="markdown-shortcode" >}}

{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
[link text](url "optional tooltip title")
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* link
        url="url"
        text="link text"
        title="optional tooltip title"
        class="custom-class"
*/>}}
```
{{% /tab %}}

{{< /tabs >}}

## Parameters

Link Text / `text`
: (required) The visible, clickable text of the link.

URL / `url`
: (required) The destination URL. Can be one of:
  - **Internal path**: a relative or root-relative path within the site (e.g., `/guide/markdown-syntax/`)
  - **External URL**: an absolute `http://` or `https://` URL (e.g., `https://gohugo.io`) — automatically opens in a new tab
  - **Page anchor**: a fragment pointing to a heading on the same page (e.g., `#features`)

Title / `title`
: (optional) Tooltip text displayed on hover.

`class` *(shortcode only)*
: (optional) One or more CSS classes to apply to the `<a>` element (default: `fr-link`).
: > **Note:** The `class` attribute is not available in markdown syntax due to a goldmark limitation — inline elements do not support attribute blocks `{...}`. use shortcode if you need custom classes.

## Theming

The link component uses the CSS custom property,
- `--color-link` for its normal color, 
- `--color-accent` for on hover and active states.

```scss {title="assets/css/theme.scss"}
{
  :root {
    // ...
    --color-link: #0000ee;
    --color-accent: #01827c;
    
    // ...
  }

  @media (prefers-color-scheme: dark) {
    :root {
      // ...
      --color-link: #66aaff;
      --color-accent: #00fff2;
      // ...
    }
  }
}

```
Refer to the [Theme Customization](/guide/theme-customization/)
guide, for guidance on how to customize these properties for your site.

## Examples

### Example 1: Basic Internal Link

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
[Theme Customization](/guide/theme-customization/)
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* link url="/guide/theme-customization/" text="Theme Customization" */>}}
```
{{% /tab %}}
{{< /tabs >}}

[Theme Customization](/guide/theme-customization/)

### Example 2: External Link

External links are detected automatically when the URL is an absolute `http(s)://` address. They open in a new tab and display a small external-link icon.

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
[Hugo Documentation](https://gohugo.io/documentation/)
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* link url="https://gohugo.io/documentation/" text="Hugo Documentation" */>}}
```
{{% /tab %}}
{{< /tabs >}}

[Hugo Documentation](https://gohugo.io/documentation/)

### Example 3: Link with Tooltip Title

Pass an optional title to show a tooltip on hover.

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
[Hugo Documentation](https://gohugo.io/documentation/ "Official Hugo Docs")
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* link url="https://gohugo.io/documentation/" text="Hugo Documentation" title="Official Hugo Docs" */>}}
```
{{% /tab %}}
{{< /tabs >}}

[Hugo Documentation](https://gohugo.io/documentation/ "Official Hugo Docs")

### Example 4: Page Anchor Link

Link to a specific heading on the same page using a `#fragment`.

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
[Back to Features](#features)
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* link url="#features" text="Back to Features" */>}}
```
{{% /tab %}}
{{< /tabs >}}

[Back to Features](#features)

### Example 5: Link with Custom Class *(shortcode only)*

Use the `class` parameter to apply custom CSS classes. This is only possible via the shortcode — markdown inline links do not support attribute blocks.

```markdown
{{</* link url="https://gohugo.io/documentation/" text="Hugo Documentation" class="my-custom-link" */>}}
```

{{< link url="https://gohugo.io/documentation/" text="Hugo Documentation" class="my-custom-link" >}}

> The default class `fr-link` is replaced entirely when `class` is provided. Include `fr-link` in your value to preserve the default styling (e.g. `class="fr-link my-custom-link"`).

