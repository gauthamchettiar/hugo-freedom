---
title: Markdown Syntax
slug: markdown-syntax
date: 2026-02-25
tags: ["basics"]
weight: 1
draft: false
---

A comprehensive guide to markdown syntax supported by theme. Each element works out-of-the-box for both dark and light mode.


## Headings

Headings are created using `#` prefixes, with the number of hashes corresponding to the heading level (HTML `<h1>` through `<h6>`).


```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

... which is rendered as:

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

> Although using a single-hash heading (`#`) to create an H1 is permitted, it's discouraged because using it would make it difficult to distinguish it from page & site titles.

## Text Formatting

### Inline Styles
| Syntax            | Rendering                         |
| ------------------| ----------------------------------|
| `**bold**`        | line with **bold** element        |
| `*italic*`        | line with *italic* element        |
| `` `code` ``      | line with `code` element          |
| `~~deleted~~`     | line with ~~deleted~~ element     |
| `++added++`       | line with ++added++ element       |
| `==mark==`        | line with ==mark== element        |
| `Sub~script~`     | line with Sub~script~ element     |
| `Super^script^`   | line with Super^script^ element   |

### Line Spacing

#### New Paragraph

Leaving a blank line between two lines, creates a new paragraph, this adds more spacing between those lines.

```
Paragraph 1

Paragraph 2
```

... which is rendered as:

Paragraph 1

Paragraph 2

#### Line Break

A line break (by adding 2 extra spaces at end of line) does not create a new para but just adds a `<br>` element between them, this adds less spacing between those lines. 

```
Paragraph 1  
Still Paragraph 1
```

... which is rendered as:

Paragraph 1  
Still Paragraph 1


## Links

### Automatic Links

Clickable URL
: ++Syntax++ : `https://example.com`
: ++Rendering++ : https://example.com

Non-clickable (using code)
: ++Syntax++ : `` `https://example.com` ``
: ++Rendering++ : `https://example.com`


### Custom Text Links

External link
: ++Syntax++ : `[example](https://example.com)`
: ++Rendering++ : [example](https://example.com)

Internal Link
: ++Syntax++ : `[Markdown Syntax](/usage/markdown_syntax/)`
: ++Rendering++ : [Markdown Syntax](/usage/markdown_syntax/)

Anchor Link
: ++Syntax++ : `[Markdown Syntax | Links](/usage/markdown_syntax#links)`
: ++Rendering++ : [Markdown Syntax | Links](/usage/markdown_syntax#links)

### Footnotes

++Syntax++ : 
- `Text with Footnote [^1]` : Footnote reference in the main text
- `[^1]: Sample footnote message.` : Actual footnote message defined at the end

++Rendering++ : Text with Footnote [^1]

Click on above footnote link ( 1 ) to jump to footnote message:

[^1]: Sample footnote message.


## Lists

### Ordered Lists

```
1. Ordered List Item 1
2. Ordered List Item 2
3. Ordered List Item 3
   1. Ordered Sub-List Item 1
```

... which is rendered as:

1. Ordered List Item 1
2. Ordered List Item 2
3. Ordered List Item 3
   1. Ordered Sub-List Item 1

### Unordered Lists

```
- Unordered List Item 1
- Unordered List Item 2
- Unordered List Item 3
  - Unordered Sub-List Item 1
```

... which is rendered as:

- Unordered List Item 1
- Unordered List Item 2
- Unordered List Item 3
  - Unordered Sub-List Item 1

### Task Lists

```
- [X] Checked Task
- [ ] Unchecked Task
```

... which is rendered as:

- [X] Checked Task
- [ ] Unchecked Task

### Definition Lists

```
Term
: Definition 1
: Definition 2
```

... which is rendered as:

Term
: Definition 1
: Definition 2


## Blockquotes

Blockqouotes can be created using the `>` symbol:

```
> Use this to get attention to a specific block of text.
```

... which is rendered as:

> Use this to get attention to a specific block of text.


## Horizontal Rule

You can use asterisks (`***`), dashes (`---`), or underscores (`___`) to create a horizontal line:

---


## Images

**Example 1**: A Plain Image

```
![alt text](path/to/image.jpg)
```

... which is rendered as:

![alt text](/images/chihiro043.jpg)

**Example 2**: An Image with Caption

```
![alt text](path/to/image.jpg "Image Caption")
```

... which is rendered as:

![alt text](/images/chihiro043.jpg "Image Caption")


## Tables

**Example 1**: A simple Table
```
| Movie              | Year |
| ------------------ | ---- |
| My Neighbor Totoro | 1988 |
| Spirited Away      | 2001 |
```

which is rendered as...
| Movie              | Year |
| ------------------ | ---- |
| My Neighbor Totoro | 1988 |
| Spirited Away      | 2001 |


## Code Blocks

### Plain Multi-line Code Block

Surround code with triple backticks:

````
```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```
````

... which is rendered as :
```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

### Syntax-Highlighted Code Block

Add the language name after the opening backticks:

````
```json
{
    "syntax": "Header",
    "description": "Title"
}
```
````

... which is rendered as:

```json
{
    "syntax": "Header",
    "description": "Title"
}
```