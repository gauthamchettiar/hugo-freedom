---
title: Images
slug: "images"
date: 2026-02-25
tags: ["elements"]
---

A Simple Image element that is rendered using the HTML `<img>` tag.

<!--more-->

## Features
- Supports standard Markdown image syntax `![]()`.
- Supports aria-label and tooltip text using alt text.
- Supports adding caption using the title attribute.
- Supports image resizing using custom `width` and `height` attributes.
- Supports loading images from page resource, site resource or remote URLs.
- Allows adding custom CSS classes with the `class` attribute.
- Offers preset variations (`variation`) for contextual theming.
- Handles dark/light mode visibility via `hideindark`/`hideinlight`.
- Loads all images with `loading="lazy"` attribute for better performance.

## Syntax

The basic syntax for images in Markdown follows this pattern:

```
![alt text](image-path "optional caption")
```


Provide additional attributes to images using curly braces under the image syntax:

```
![alt text](image-path "optional caption") 
{width="600" height="400"}
```

### Parameters
Alt Text
: (optional) Provides alternative text for screen readers and displays when image fails to load
: Also used as tooltip text on hover.

Image Path
: (required) An image can be rendered from below three sources:
   - **Page Resource**: Image in the same directory as the markdown file (e.g., `karigurashi002.jpg`)
   - **Site/Global Resource**: Image in the `assets/` directory (e.g., `/images/chihiro043.jpg`)
   - **Remote URL**: Full HTTP/HTTPS URL (e.g., `https://example.com/image.jpg`)
    ```
    .
    ├── assets
    │   └── images
    │       └── chihiro043.jpg              <-- Site/Global Resource
    └── content
        ├── _index.md
        └── advanced
            ├── _index.md
            ├── elements
            │   ├── _index.md
            │   ├── image
            │   │   ├── index.md            <-- This File
            │   │   └── karigurashi002.jpg  <-- Page Resource 
            │   └── image.md
            └── shortcodes
                └── _index.md
    ```

Title/Caption
: (optional) Displays as a caption below the image 

Extras
: Below optional attributes can be added in curly braces under image syntax. 

  width
  : (optional) Set the width of the image (e.g., `width="300"`).
  
  height
  : (optional) Set the height of the image (e.g., `height="200"`).

  process
  : (optional) Apply Hugo image processing operations (e.g., `process="resize 300x200"`).
  
  hideindark
  : (optional) Set to `true` to hide the image in dark mode.
  
  hideinlight
  : (optional) Set to `true` to hide the image in light mode.
  
  class
  : (optional) Add custom CSS classes to the `<figure>` wrapper.
  
  variation
  : (optional) Apply one of the predefined style variations (`info`, `note`, `tip`, `warning`, `important`, `caution`, `accent`, or `inverted`).
  
  captionalign
  : (optional) Control caption alignment (`left`, `center`, `right`).


> Refer Hugo's excellent resource on [image processing](https://gohugo.io/content-management/image-processing/) for more details.

## Examples

### Example 1: Image from Page Resource

```markdown
![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg)
```

![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg)

### Example 2: Image from Site Resource

Instead of providing a relative path to an image in the same directory as the markdown file, you can also provide an absolute path to an image from the `assets/` directory (e.g., `images/chihiro043.jpg` refers to `assets/images/chihiro043.jpg` in the project).

```markdown
![Studio Ghibli: chihiro043.jpg](images/chihiro043.jpg)
```

![Studio Ghibli: Spirited Away](images/chihiro043.jpg)


### Example 3: Image from remote URL
You can also load images from remote URLs ( remote url should start with either `http://` or `https://` ).
```markdown
![Studio Ghibli: ged003.jpg](https://www.ghibli.jp/gallery/ged003.jpg)
```

![Studio Ghibli: ged003.jpg](https://www.ghibli.jp/gallery/ged003.jpg)

### Example 4: Image With Optional Caption

```markdown
![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg)
```

![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg)

#### Caption Alignment

##### Left Aligned Caption (Default)

```markdown
![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{captionalign="left"}
```

![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{captionalign="left"}

##### Center Aligned Caption

```markdown
![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{captionalign="center"}
```

![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{captionalign="center"}

##### Right Aligned Caption

```markdown
![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{captionalign="right"}
```

![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{captionalign="right"}

### Example 5: Image with Width and Height

```markdown
![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{width="300" height="200"}
```

![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{width="300" height="160"}

### Example 6: Dark Mode / Light Mode Specific Images
Add `hideindark="true"` and `hideinlight="true"` attributes to hide images in dark mode and light mode respectively.

```markdown
![Studio Ghibli: chihiro043.jpg](images/chihiro043.jpg "Studio Ghibli: Spirited Away (2001)")
{hideindark=true}
![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{hideinlight=true}
```

![Studio Ghibli: Spirited Away](images/chihiro043.jpg "Studio Ghibli: Spirited Away (2001)")
{hideindark=true}
![Studio Ghibli: karigurashi002.jpg](karigurashi002.jpg "Studio Ghibli: Arrietty (2010)")
{hideinlight=true}

> Try switching between light and dark mode to see a different image above each time!

### Example 7: Style Variations
Add `variation` attribute to apply different style variations to images.

```markdown
![Studio Ghibli: chihiro043.jpg](images/chihiro043.jpg "Studio Ghibli: Spirited Away (2001)")
{variation="accent"}
```

![Studio Ghibli: Spirited Away](images/chihiro043.jpg "Studio Ghibli: Spirited Away (2001)")
{variation="accent"}

> Other supported `variation` values are `info`, `note`, `tip`, `warning`, `important`, `caution`, `accent`, or `inverted`. 