---
title: Blockquotes
slug: "blockquotes"
date: 2026-03-03
tags: ["basics"]
---

A blockquote element rendered using standard markdown blockquote syntax `>` and alternative shortcode `{{</* blockquote */>}}`.

<!--more-->

## Features
- Supports standard Markdown blockquote syntax `>` and alternative shortcode `{{</* blockquote */>}}`.
- Supports GitHub Flavored Markdown (GFM) alert syntax `> [!TYPE]` for styled alert boxes with an icon.
- Supports author and source attribution via `author` and `source` attributes.
- Supports a `cite` URL used both as the `<blockquote cite="...">` attribute and as the href for the source link.
- Supports preset style `variation` for contextual theming of regular blockquotes.
- Allows adding custom CSS classes via the `class` attribute.

## Syntax
Basic blockquote syntax:

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
> Blockquote text here.
{author="Author Name" cite="https://example.com" source="Source Title" variation="accent"}
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{%/* blockquote
        author="Author Name"
        cite="https://example.com"
        source="Source Title"
        variation="accent"
*/%}}
```
{{% /tab %}}
{{< /tabs >}}

Alert blockquote syntax:

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
> [!NOTE]
> This is a note.
```
{{% /tab %}}
{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{%/* blockquote type="alert" variation="note" */%}}
This is a note.
{{%/* /blockquote */%}}
```
{{% /tab %}}
{{< /tabs >}}

## Parameters

`type` *(shortcode only)*
: (optional) Set to `"alert"` to render an alert box with a variation icon and an i18n title label.

`author` *(basic blockquote only)*
: (optional) The name of the person being quoted. Displayed in the `<figcaption>` below the blockquote.

`source` *(basic blockquote only)*
: (optional) The title of the work being cited. Displayed as a linked `<cite>` element if `cite` is also set.

`cite` *(basic blockquote only)*
: (optional) A URL used as the `<blockquote cite="...">` attribute and as the `href` for the source link when `source` is set.

`variation`
: (optional) Applies a preset color theme to the blockquote. Available values:
  - `accent` — styled with the site accent color *(default themed)*
  - `info` — blue
  - `note` — yellow
  - `tip` — cyan
  - `warning` — orange
  - `important` — purple
  - `caution` — red

`class`
: (optional) One or more CSS classes to apply to the wrapping `<figure>` element (default: `fr-blockquote`).

## Theming

Regular blockquotes use:
- `--color-accent` for the left border color
- `--color-surface` for the background fill

```scss {title="assets/css/theme.scss"}
{
  :root {
    // ...
    --color-accent: #01827c;
    --color-surface: color-mix(in srgb, var(--color-accent) 20%, transparent);
    // ...
  }

  @media (prefers-color-scheme: dark) {
    :root {
      // ...
      --color-accent: #00fff2;
      --color-surface: color-mix(in srgb, var(--color-accent) 20%, transparent);
      // ...
    }
  }
}
```

Variation-styled blockquotes (both regular and alert) use per-variation tokens:

- `--color-surface-{variation}` for background
- `--color-text-{variation}` for text color
- `--color-border-{variation}` for border color

Refer to the [Theme Customization](/guide/theme-customization/) guide for guidance on how to customize these properties for your site.

## Examples

### Example 1: Basic Blockquote

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
> The quick brown fox jumps over the lazy dog.
```
{{% /tab %}}
{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{%/* blockquote */%}}
The quick brown fox jumps over the lazy dog.
{{%/* /blockquote */%}}
```
{{% /tab %}}
{{< /tabs >}}

> The quick brown fox jumps over the lazy dog.

---

### Example 2: Blockquote with Author Attribution

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
> Be yourself; everyone else is already taken.
{author="Oscar Wilde"}
```
{{% /tab %}}
{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{%/* blockquote author="Oscar Wilde" */%}}
Be yourself; everyone else is already taken.
{{%/* /blockquote */%}}
```
{{% /tab %}}
{{< /tabs >}}

> Be yourself; everyone else is already taken.
{author="Oscar Wilde"}

---

### Example 3: Blockquote with Author, Source and Cite URL

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
{author="Albert Einstein" source="Quote Investigator" cite="https://quoteinvestigator.com/2010/05/04/universe-einstein/"}
```
{{% /tab %}}
{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{%/* blockquote
        author="Albert Einstein"
        cite="https://quoteinvestigator.com/2010/05/04/universe-einstein/"
        source="Quote Investigator"
*/%}}
Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
{{%/* /blockquote */%}}
```
{{% /tab %}}
{{< /tabs >}}

> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
{author="Albert Einstein" source="Quote Investigator" cite="https://quoteinvestigator.com/2010/05/04/universe-einstein/"}

---

### Example 4: Styled Blockquote with Variation

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
> This blockquote uses the accent variation for contextual emphasis.
{variation="info"}
```
{{% /tab %}}
{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{%/* blockquote variation="info" */%}}
This blockquote uses the accent variation for contextual emphasis.
{{%/* /blockquote */%}}
```
{{% /tab %}}
{{< /tabs >}}

> This blockquote uses the ++info++ variation.
{variation="info"}

> This blockquote uses the ++note++ variation.
{variation="note"}

> This blockquote uses the ++tip++ variation.
{variation="tip"}

> This blockquote uses the ++warning++ variation.
{variation="warning"}

> This blockquote uses the ++important++ variation.
{variation="important"}

> This blockquote uses the ++caution++ variation.
{variation="caution"}

> This blockquote uses the ++accent++ variation. **(default style)**
{variation="accent"}

> This blockquote uses the ++inverted++ variation.
{variation="inverted"}


---

### Example 5: Alert Blockquote with variation

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
> [!NOTE]
> This is an Alert blockquote using the ++note++ variation.
```
{{% /tab %}}
{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{%/* blockquote type="alert" variation="note" */%}}
This is an Alert blockquote using the ++note++ variation.
{{%/* /blockquote */%}}
```
{{% /tab %}}
{{< /tabs >}}

> [!NOTE]
> This is an Alert blockquote using the ++note++ variation. 

> [!INFO]
> This is an Alert blockquote using the ++info++ variation.

> [!TIP]
> This is an Alert blockquote using the ++tip++ variation.

> [!WARNING]
> This is an Alert blockquote using the ++warning++ variation.

> [!IMPORTANT]
> This is an Alert blockquote using the ++important++ variation.

> [!CAUTION]
> This is an Alert blockquote using the ++caution++ variation.

> [!ACCENT]
> This is an Alert blockquote using the ++accent++ variation.

> [!INVERTED]
> This is an Alert blockquote using the ++inverted++ variation.


---

### Example 6: Alert Blockquote with Custom Title

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
> [!NOTE] Custom Alert Title
> Highlights information that users should take into account, even when skimming.
```
{{% /tab %}}
{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{%/* blockquote type="alert" variation="note" title="Custom Alert Title" */%}}
Highlights information that users should take into account, even when skimming.
{{%/* /blockquote */%}}
```
{{% /tab %}}
{{< /tabs >}}

> [!NOTE] Custom Alert Title
> Highlights information that users should take into account, even when skimming.