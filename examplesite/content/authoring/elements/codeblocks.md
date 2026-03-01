---
title: Codeblocks
slug: "codeblocks"
date: 2026-02-26
tags: ["basics"]
coverLight: "covers/elements/codeblock_light.png"
coverDark: "covers/elements/codeblock_dark.png"
---

A code element rendered using standard markdown codeblock syntax.

<!--more-->

## Features
- Supports standard Markdown codeblock syntax with triple backticks (```) and alternative shortcode `{{</* codeblock */>}}`.
- Syntax highlighting for various programming languages.
- Optional line numbers for code readability.
- Copy-to-clipboard functionality for easy code sharing.
- Supports highlighting specific lines or ranges.
- Allows custom CSS classes via `class` attribute for advanced styling.
- Provides optional captions with alignment control using `caption` and `captionalign`.
- Supports rendering of diagrams (e.g. Mermaid, Goat) using codeblocks with appropriate language specifier.

## Syntax

Basic codeblock syntax (no syntax highlighting):
{{< tabs group="markdown-shortcode" >}}

{{% tab title="Markdown Syntax" %}}
````
```
code here...
```
````

{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock */>}}
code here...
{{</* /codeblock */>}}
````

{{% /tab %}}
{{< /tabs >}}


Syntax highlighted codeblock :
{{< tabs group="markdown-shortcode" >}}

{{% tab title="Markdown Syntax" %}}
````
```language {linenos=table hl_lines=["2", "4-5"] showtitle=false showcopy=false title="Example Code" caption="This is a caption" captionalign="center"}
code here...
```
````

{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock 
        lang="language" 
        showtitle=false 
        showcopy=false 
        title="Example Code" 
        caption="This is a caption"
        captionalign="center"
        options=(dict linenos="table" hl_lines=["2", "4-5"])
*/>}}
code here...
{{</* /codeblock */>}}
````

{{% /tab %}}
{{< /tabs >}}


## Parameters
You can specify a variety of options inside curly braces on the opening fence. Common attributes include:

Language
: (optional) Specifies the programming language for syntax highlighting (e.g. `python`, `javascript`, `html`). If you don't specify a language, it will render as a plain code block without syntax highlighting.

Code (that needs to be highlighted)
: The actual code content goes between the opening and closing triple backticks ` ``` `.

Extras
: Below optional attributes that can be added in curly braces after language,

  linenos
  : set to `table` or `inline` to enable line numbers.
  
  hl_lines
  : list of lines or ranges to highlight (e.g. `["2", "4-5"]`).
  
  showtitle
  : `true`/`false` toggle the header/title bar.
  
  showcopy
  : `true`/`false` toggle the copy‑to‑clipboard button.
  
  title
  : custom title text displayed in the header bar.
  
  caption
  : optional caption text rendered below the code block.
  
  captionalign
  : alignment for the caption (`left`, `center`, `right`).
  
  class
  : add custom CSS classes to the wrapping `<figure>` element.

## Theming
Codeblocks are themed using chroma highlighting, this theme uses following chroma themes for light and dark mode respectively:

- Light mode: `solarized-light`
- Dark mode: `solarized-dark256`

If you have not created it already then create this folder `assets/css/chroma` in your Hugo site and generate custom chroma themes using below command:
```bash
hugo gen chromastyles --style=solarized-light > assets/css/chroma/light.css
hugo gen chromastyles --style=solarized-dark256 > assets/css/chroma/dark.css
```

Replace `solarized-light` and `solarized-dark256` with any other chroma themes of your choice, you can find the full list of available chroma themes here: https://xyproto.github.io/splash/docs/all.html.


## Examples

### Example 1: Simple Codeblock (no syntax highlighting)

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```
console.log('Hello, World!');
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock */>}}
console.log('Hello, World!');
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```
console.log('Hello, World!');
```

### Example 2: Codeblock with Syntax Highlighting

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Hugo');
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock lang="javascript" */>}}
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Hugo');
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Hugo');
```

### Example 3: Codeblock with Line Numbers

#### Table Style Line Numbers (Default)

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```python {linenos=table}
def add(a, b):
  return a + b
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock lang="python" options=(dict linenos="table") */>}}
def add(a, b):
  return a + b
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```python {linenos=table}
def add(a, b):
  return a + b
```

#### Inline Line Numbers

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```python {linenos=inline}
def add(a, b):
  return a + b
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock lang="python" options=(dict linenos="inline") */>}}
def add(a, b):
  return a + b
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```python {linenos=inline}
def add(a, b):
  return a + b
``` 

### Example 4: Codeblock with Highlighted Lines

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```python {hl_lines=["2", "4-5"]}
def factorial(n):
  if n == 0:
    return 1
  else:
    return n * factorial(n-1)
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock lang="python" options=(dict hl_lines=["2", "4-5"]) */>}}
def factorial(n):
  if n == 0:
    return 1
  else:
    return n * factorial(n-1)
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```python {hl_lines=["2", "4-5"]}
def factorial(n):
  if n == 0:
    return 1
  else:
    return n * factorial(n-1)
``` 

### Example 5: Code block with Hidden Elements

#### Hidden Title

Hide the codeblock header/title:

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```python {showtitle=false}
def add(a, b):
  return a + b
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock lang="python" showtitle=false */>}}
def add(a, b):
  return a + b
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```python {showtitle=false}
def add(a, b):
  return a + b
```

#### Hidden Copy Button

Hide the copy-to-clipboard button:

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```python {showcopy=false}
def add(a, b):
  return a + b
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock lang="python" showcopy=false */>}}
def add(a, b):
  return a + b
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```python {showcopy=false}
def add(a, b):
  return a + b
```

#### Hidden Title and Copy Button

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```python {showtitle=false showcopy=false}
def add(a, b):
  return a + b
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock lang="python" showtitle=false showcopy=false */>}}
def add(a, b):
  return a + b
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```python {showtitle=false showcopy=false}
def add(a, b):
  return a + b
```



### Example 6: Codeblock with Custom Title

Set a custom codeblock title:

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```python {title="main.py"}
def add(a, b):
  return a + b
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock lang="python" title="main.py" */>}}
def add(a, b):
  return a + b
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```python {title="main.py"}
def add(a, b):
  return a + b
```

### Example 7: Codeblock with caption

{{< tabs group="markdown-shortcode" >}}
{{% tab title="Markdown Syntax" %}}
````
```python {title="main.py" caption="Example of a simple addition function in Python"}
def add(a, b):
  return a + b
```
````
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
````
{{</* codeblock lang="python" title="main.py" caption="Example of a simple addition function in Python" */>}}
def add(a, b):
  return a + b
{{</* /codeblock */>}}
````
{{% /tab %}}
{{< /tabs >}}

```python {title="main.py" caption="Example of a simple addition function in Python"}
def add(a, b):
  return a + b
```


### Example 8: Multi-Language codeblocks

Use shortcodes `{{</* tabs */>}}` and `{{</* tab */>}}` to create multi-language codeblocks, for example below codeblock has 3 tabs for Python, JavaScript and Go code respectively:


````
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


Also supports sync between tab-groups, so if you have multiple tab groups on the same page you can link them together using the `group` attribute, for example below code example has same group `multi-lang-example` as the previous one, so when you switch to a different language in one tab group the other tab group will also switch to the same language:


{{< tabs group="multi-lang-example" >}}

{{% tab title="Python" %}}
```python {showtitle=false}
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
```
{{% /tab %}}

{{% tab title="JavaScript" %}}
```javascript {showtitle=false}
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```
{{% /tab %}}

{{% tab title="Go" %}}
```go {showtitle=false}
package main
import "fmt"
func factorial(n int) int {
    if n == 0 {
        return 1
    } else {
        return n * factorial(n-1)
    }
}
```
{{% /tab %}}

{{< /tabs >}}