---
title: "Tabs"
slug: tabs
date: 2026-03-01
tags: ["advanced"]
draft: false
---

Display content in switchable tabbed panels using `widgets/tabs.html` and `widgets/tab.html` partials.

<!--more-->

> This is the partial implementation of tabs. If you are looking for the shortcode version, check [Tabs](/authoring/shortcodes/tabs/) documentation.

## Features
- Groups multiple content panels into a tabbed interface.
- Only one tab is visible at a time; the first tab is selected by default.
- Tabs within the same group are linked by a shared `group` name.

## Parameters

### `widgets/tabs.html` (outer container)

group
: (optional) Unique identifier for the tab group. Useful when multiple tab sets appear on the same page (default: auto-generated from partial ordinal).

class
: (optional) CSS class prefix applied to the wrapper and inner elements (default: `fr-wdgt-tabs`).

### `widgets/tab.html` (individual tab)

title
: (optional) Label displayed on the tab button (default: `Tab`).

class
: (optional) CSS class prefix applied to the tab input, label, and panel elements (default: `fr-wdgt-tab`).

## Syntax
```go-html-template
{{ partial "widgets/tabs.html" (dict
    "group" "my-group"
    "Inner" (partial "widgets/tab.html" (dict
        "title" "First Tab"
        "Inner" "Content for the first tab."
    ))
) }}
```

## Examples

### Example 1 — Basic Tabs
This is how basic tabs are created using the `widgets/tabs.html` and `widgets/tab.html` partials.
```go-html-template {title="template"}
{{- $tab1 := partial "widgets/tab.html" (dict "title" "Tab One" "Inner" "This is the content of **Tab One**.") -}}
{{- $tab2 := partial "widgets/tab.html" (dict "title" "Tab Two" "Inner" "This is the content of **Tab Two**.") -}}
{{- $tab3 := partial "widgets/tab.html" (dict "title" "Tab Three" "Inner" "This is the content of **Tab Three**.") -}}
{{ partial "widgets/tabs.html" (dict "group" "example-basic" "Inner" (print $tab1 $tab2 $tab3)) }}
```

{{< tabs group="example-basic" >}}
{{% tab title="Tab One" %}}
This is the content of **Tab One**.
{{% /tab %}}

{{% tab title="Tab Two" %}}
This is the content of **Tab Two**.
{{% /tab %}}

{{% tab title="Tab Three" %}}
This is the content of **Tab Three**.
{{% /tab %}}
{{< /tabs >}}


### Example 2 — Multi-language Codeblock tabs 
When a tab only has codeblock content, padding is collapsed to create a more compact presentation.


```go-html-template {title="template"}
{{- $pyCode := `def greet(name):
    print(f"Hello, {name}!")` -}}
{{- $jsCode := `function greet(name) {
    console.log(` + "`" + `Hello, ${name}!` + "`" + `);
}` -}}
{{- $goCode := `package main
import "fmt"
func greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}` -}}
{{- $tab1 := partial "widgets/tab.html" (dict "title" "Python" "Inner" (highlight $pyCode "python" "")) -}}
{{- $tab2 := partial "widgets/tab.html" (dict "title" "JavaScript" "Inner" (highlight $jsCode "javascript" "")) -}}
{{- $tab3 := partial "widgets/tab.html" (dict "title" "Go" "Inner" (highlight $goCode "go" "")) -}}
{{ partial "widgets/tabs.html" (dict "group" "multi-lang-example" "Inner" (print $tab1 $tab2 $tab3)) }}
```


{{< tabs group="multi-lang-example" >}}

{{% tab title="Python" %}}
```python {showtitle=false}
def greet(name):
    print(f"Hello, {name}!")
```
{{% /tab %}}

{{% tab title="JavaScript" %}}
```javascript {showtitle=false}
function greet(name) {
    console.log(`Hello, ${name}!`);
}
```
{{% /tab %}}

{{% tab title="Go" %}}
```go {showtitle=false}
package main
import "fmt"
func greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}
```
{{% /tab %}}

{{< /tabs >}}


### Example 3 — Synced Tabs
When multiple `widgets/tabs.html` partial calls share the same `group` name, they become synced — selecting a tab in one set will automatically select the corresponding tab in the other set.

```go-html-template {title="template (set 1)" hl_lines="1"}
{{- $tab1 := partial "widgets/tab.html" (dict "title" "Tab One" "Inner" "This is the content of **Tab One** within tabs group=example-synced.") -}}
{{- $tab2 := partial "widgets/tab.html" (dict "title" "Tab Two" "Inner" "This is the content of **Tab Two** within tabs group=example-synced.") -}}
{{- $tab3 := partial "widgets/tab.html" (dict "title" "Tab Three" "Inner" "This is the content of **Tab Three** within tabs group=example-synced.") -}}
{{ partial "widgets/tabs.html" (dict "group" "example-synced" "Inner" (print $tab1 $tab2 $tab3)) }}
```

{{< tabs group="example-synced" >}}
{{% tab title="Tab One" %}}
This is the content of **Tab One** within tabs group=example-synced.
{{% /tab %}}

{{% tab title="Tab Two" %}}
This is the content of **Tab Two** within tabs group=example-synced.
{{% /tab %}}

{{% tab title="Tab Three" %}}
This is the content of **Tab Three** within tabs group=example-synced.
{{% /tab %}}
{{< /tabs >}}



```go-html-template {title="template (set 2)" hl_lines="1"}
{{- $tab1 := partial "widgets/tab.html" (dict "title" "Tab One" "Inner" "This is the content of ++another++ **Tab One** within tabs group=example-synced.") -}}
{{- $tab2 := partial "widgets/tab.html" (dict "title" "Tab Two" "Inner" "This is the content of ++another++ **Tab Two** within tabs group=example-synced.") -}}
{{ partial "widgets/tabs.html" (dict "group" "example-synced" "Inner" (print $tab1 $tab2)) }}
```


{{< tabs group="example-synced" >}}
{{% tab title="Tab One" %}}
This is the content of ++another++ **Tab One** within tabs group=example-synced.
{{% /tab %}}

{{% tab title="Tab Two" %}}
This is the content of ++another++ **Tab Two** within tabs group=example-synced.
{{% /tab %}}
{{< /tabs >}}