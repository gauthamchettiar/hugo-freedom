---
title: "Codeblocks"
slug: codeblocks
date: 2026-03-02
tags: ["advanced"]
draft: false
---

Render a stylable, syntax‑highlighted code element using the
`widgets/alt/codeblock.html` partial.

<!--more-->

## Features
- Supports both language‑specific and plain code modes.
- Optional header with language/title and copy‑to‑clipboard button.
- Line‑numbering (table or inline) and highlighted lines via Hugo’s `highlight`.
- Captions with alignment control.
- Custom classes can be applied to the `<figure>` wrapper.
- Falls back to a simple `<pre><code>` when no language is specified.

## Parameters

lang
: (optional) Programming language for syntax highlighting. If omitted the
  output is rendered as plain text (no header, no highlighting).

inner
: (required) The raw code string to be highlighted.

options
: (optional) A dict of parameters passed through to Hugo’s `highlight`
  function (useful for `linenos`, `hl_lines`, etc.).

caption
: (optional) Text rendered inside a `<figcaption>` below the code block.

captionalign
: (optional) Alignment for the caption (`left`, `center`, or `right`).

showtitle
: (optional) Boolean. When `false` the header title is hidden (default
  `true`).

showcopy
: (optional) Boolean. When `false` the copy‑to‑clipboard button is
  suppressed (default `true`).

title
: (optional) Header text shown when `lang` is set; defaults to the language
  name if not supplied.

class
: (optional) Additional CSS classes appended to the outer `<figure>` or
  `<pre>` element (default `fr-codeblock`).

## Syntax

```go-html-template
{{ partial "widgets/alt/codeblock.html" (dict
    "lang"         "javascript"
    "inner"        "console.log('Hello, world!')"
    "options"      (dict "linenos" "table" "hl_lines" (slice "2"))
    "caption"      "This is an example"
    "captionalign" "center"
    "showtitle"    true
    "showcopy"     true
    "title"        "example.js"
    "class"        "my-codeblock"
) }}
```

Omit `lang` if you only need a plain `<pre><code>` block:

```go-html-template
{{ partial "widgets/alt/codeblock.html" (dict
    "inner" "some plain text or shell output"
) }}
```

## Examples

### Example 1: Simple syntax‑highlighted block

```go-html-template
{{ partial "widgets/alt/codeblock.html" (dict
    "lang"  "python"
    "inner" "def add(a, b):\n    return a + b"
) }}
```

### Example 2: With line numbers and highlighted lines

```go-html-template
{{ partial "widgets/alt/codeblock.html" (dict
    "lang"    "go"
    "inner"   "package main\nfunc main() {\n    println(\"hi\")\n}\n"
    "options" (dict "linenos" "inline" "hl_lines" "3")
) }}
```

### Example 3: Custom title and caption

```go-html-template
{{ partial "widgets/alt/codeblock.html" (dict
    "lang"         "bash"
    "inner"        "echo 'Hello'"
    "title"        "script.sh"
    "caption"      "Basic shell command"
    "captionalign" "right"
) }}
```

### Example 4: Plain (language‑less) code

```go-html-template
{{ partial "widgets/alt/codeblock.html" (dict
    "inner" "This text is rendered verbatim without highlighting."
) }}
```
