---
title: "Tabs"
slug: "tabs"
date: 2026-03-01
tags: ["intermediate"]
---
Display content in switchable tabbed panels using `{{</* tabs */>}}` and `{{</* tab */>}}` shortcodes.

<!--more-->

> This is the shortcode implementation of tabs. If you are looking for the partial version, check [Tabs](/templating/partials/tabs/) documentation.

## Features
- Groups multiple content panels into a tabbed interface.
- Only one tab is visible at a time; the first tab is selected by default.
- Tabs within the same group are linked by a shared `group` name.

## Parameters

### `tabs` (outer container)

group
: (optional) Unique identifier for the tab group. Useful when multiple tab sets appear on the same page (default: auto-generated from shortcode ordinal).

class
: (optional) CSS class prefix applied to the wrapper and inner elements (default: `fr-wdgt-tabs`).

### `tab` (individual tab)

title
: (optional) Label displayed on the tab button (default: `Tab`).

class
: (optional) CSS class prefix applied to the tab input, label, and panel elements (default: `fr-wdgt-tab`).

## Syntax
```html {title="markdown"}
{{</* tabs group="my-group" */>}}
{{</* tab title="First Tab" */>}}
Content for the first tab.
{{</* /tab */>}}

{{</* tab title="Second Tab" */>}}
Content for the second tab.
{{</* /tab */>}}
{{</* /tabs */>}}
```

## Examples

### Example 1 — Basic Tabs
This is how basic tabs are created using a combination of `tabs` and `tab` shortcodes.
```html {title="markdown"}
{{</* tabs group="example-basic" */>}}
{{</* tab title="Tab One" */>}}
This is the content of **Tab One**.
{{</* /tab */>}}

{{</* tab title="Tab Two" */>}}
This is the content of **Tab Two**.
{{</* /tab */>}}

{{</* tab title="Tab Three" */>}}
This is the content of **Tab Three**.
{{</* /tab */>}}
{{</* /tabs */>}}
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


````html {title="markdown"}
{{</* tabs group="multi-lang-example" */>}}
{{</* tab title="Python" */>}}
```python {showtitle=false}
def greet(name):
    print(f"Hello, {name}!")
```
{{</* /tab */>}}
{{</* tab title="JavaScript" */>}}
```javascript {showtitle=false}
function greet(name) {
    console.log(`Hello, ${name}!`);
}
```
{{</* /tab */>}}
{{</* tab title="Go" */>}}
```go {showtitle=false}
package main
import "fmt"
func greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}
```
{{</* /tab */>}}
{{</* /tabs */>}}
````


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
When multiple `tabs` shortcodes share the same `group` name, they become synced — selecting a tab in one set will automatically select the corresponding tab in the other set.

```html {title="markdown (set 1)" hl_lines="1"}
{{</* tabs group="example-synced"*/>}}
{{</* tab title="Tab One" */>}}
This is the content of **Tab One** within tabs group=example-synced.
{{</* /tab */>}}

{{</* tab title="Tab Two" */>}}
This is the content of **Tab Two** within tabs group=example-synced.
{{</* /tab */>}}

{{</* tab title="Tab Three" */>}}
This is the content of **Tab Three** within tabs group=example-synced.
{{</* /tab */>}}
{{</* /tabs */>}}
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



```html {title="markdown (set 2)" hl_lines="1"}
{{</* tabs group="example-synced" */>}}
{{</* tab title="Tab One" */>}}
This is the content of ++another++ **Tab One** within tabs group=example-synced.
{{</* /tab */>}}

{{</* tab title="Tab Two" */>}}
This is the content of ++another++ **Tab Two** within tabs group=example-synced.
{{</* /tab */>}}

{{</* /tabs */>}}
```


{{< tabs group="example-synced" >}}
{{% tab title="Tab One" %}}
This is the content of ++another++ **Tab One** within tabs group=example-synced.
{{% /tab %}}

{{% tab title="Tab Two" %}}
This is the content of ++another++ **Tab Two** within tabs group=example-synced.
{{% /tab %}}
{{< /tabs >}}