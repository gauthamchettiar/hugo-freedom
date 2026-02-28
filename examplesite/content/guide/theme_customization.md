---
title: "Theme Customization"
slug: "theme-customization"
date: 2026-02-28
tags: ["basics"]
weight: 4
draft: false
---

Theme can be customized in a bunch of ways, from simpler CSS overrides to more advanced hugo template overrides. Below are some of the most common ways to customize the theme.

## theme.scss override
The simplest way to customize the theme is to override `assets/css/theme.scss` file.

```scss {title="assets/css/theme.scss"}
/* Theme colors */
:root {
   /* Color palette */
    --color-bg: #fcfcfc;
    --color-border: #222222;
    --color-text: #222222;
    --color-text-muted: color-mix(in srgb, var(--color-text) 70%, transparent);;
    --color-link: #0000ee;
    --color-accent: #01827c;
    --color-surface: color-mix(in srgb, var(--color-accent) 20%, transparent);

    /* Typography */
    --font-family-body: 'Verdana', 'Arial';
    --font-family-heading: 'Verdana', 'Arial';
    --font-family-code: 'Menlo', 'Consolas', 'Monospace';

    /* 
       this actually has a lot more variables, 
       it has been truncated for brevity 
    */
}
```

> Note: You need to copy complete `theme.scss` file to your site's `assets/css/theme.scss` to override the default theme variables. You can then modify the variables as needed to customize the theme's colors, fonts, spacing and layout.

### All Supported CSS Variables

The theme defines a comprehensive set of CSS custom properties in `assets/css/theme.scss`.
The table below reflects the variables that are actually declared in the current
version of the file.  (Because the list can grow over time you can always open
`theme.scss` directly if you need to update this documentation.)

| Group      | Variable                     | Purpose                            |
|------------|------------------------------|------------------------------------|
| color      | `--color-bg`                 | Page background color              |
| color      | `--color-border`             | Default border color               |
| color      | `--color-text`               | Primary text color                 |
| color      | `--color-text-muted`         | Muted/secondary text color         |
| color      | `--color-link`               | Hyperlink color                    |
| color      | `--color-accent`             | Accent/highlight color             |
| color      | `--color-surface`            | Surface or card background         |
| font       | `--font-family-body`         | Body font                          |
| font       | `--font-family-heading`      | Headings font                      |
| font       | `--font-family-code`         | Monospace font for code            |
| font-size  | `--font-size-2xs`            | Extra‑extra‑small font size (0.625 rem)    |
| font-size  | `--font-size-xs`             | Extra‑small font size (0.75 rem)          |
| font-size  | `--font-size-sm`             | Small font size (0.875 rem)               |
| font-size  | `--font-size-md`             | Medium font size (1 rem)                 |
| font-size  | `--font-size-lg`             | Large font size (1.125 rem)              |
| font-size  | `--font-size-xl`             | Extra‑large font size (1.25 rem)          |
| font-size  | `--font-size-2xl`            | 2× extra‑large font size (1.5 rem)        |
| font-size  | `--font-size-3xl`            | 3× extra‑large font size (1.875 rem)      |
| font-size  | `--font-size-4xl`            | 4× extra‑large font size (2.25 rem)       |
| border     | `--border-thin`              | Thin border width (1 px)           |
| border     | `--border-thick`             | Thick border width (4 px)          |
| line-height| `--line-height-compact`      | Compact line height (1.2)          |
| line-height| `--line-height-regular`      | Regular line height (1.6)          |
| line-height| `--line-height-relaxed`      | Relaxed line height (2.0)          |
| spacing    | `--spacing-2xs`              | Extra‑extra‑small spacing (0.125 rem) |
| spacing    | `--spacing-xs`               | Extra‑small spacing (0.25 rem)         |
| spacing    | `--spacing-sm`               | Small spacing (0.5 rem)                |
| spacing    | `--spacing-md`               | Medium spacing (1 rem)                 |
| spacing    | `--spacing-lg`               | Large spacing (2 rem)                  |
| spacing    | `--spacing-xl`               | Extra‑large spacing (3 rem)            |
| spacing    | `--spacing-2xl`              | 2× extra‑large spacing (4 rem)         |
| spacing    | `--spacing-3xl`              | 3× extra‑large spacing (6 rem)         |
| spacing    | `--spacing-4xl`              | 4× extra‑large spacing (8 rem)         |
| layout     | `--page-width`               | Maximum content width in px        |

> **Note:** All of above variables can also be provided inside a   
> `@media (prefers-color-scheme: dark)` block; this allows you to specify  
> different values for light and dark mode.


##  Default Chroma Syntax Highlighting Styles
Codeblocks are themed using chroma highlighting, this theme uses following chroma themes for light and dark mode respectively:

- Light mode: `solarized-light`
- Dark mode: `solarized-dark256`

If you have not created it already then create this folder `assets/css/chroma` in your Hugo site and generate custom chroma themes using below command:
```bash
hugo gen chromastyles --style=solarized-light > assets/css/chroma/light.css
hugo gen chromastyles --style=solarized-dark256 > assets/css/chroma/dark.css
```

Replace `solarized-light` and `solarized-dark256` with any other chroma themes of your choice, you can find the full list of available chroma themes here: https://xyproto.github.io/splash/docs/all.html.


## Custom Layouts Supported
This theme supports following custom layouts that you can use by adding `layout: <layout-name>` in front matter of your content files.

| Layout Name | File Location | Description |
| --- | --- | --- |
| home | `layouts/home.html` | Custom layout for [homepage](/), this is applied by default to file at `content/_index.md` |
| section | `layouts/section.html` | Custom layout for [section list](/guide/) pages, this page is used to list all of its subpages. This is applied by default to all nested `_index.md` files except the one at root (i.e: `content/_index.md`) |
| page | `layouts/page.html` | Custom layout for regular pages, this is applied by default to all content files (i.e: any file which is not `_index.md`) |
| taxonomy | `layouts/taxonomy.html` | Custom layout for [taxonomy list](/tags/) pages, this is applied by default to all taxonomy list pages (e.g. `/tags/`). This is autogenerated, you do not need to add any md files for it |
| term | `layouts/term.html` | Custom layout for [taxonomy term](/tags/basics/) pages, this is applied by default to all taxonomy term pages (e.g. `/tags/guides/`). This is autogenerated, you do not need to add any md files for it |



```
└── content
    ├── _index.md                        -- home page
    ├── components
    │   ├── _index.md                    -- section page (for components section)
    │   ├── elements
    │   │   ├── _index.md                -- section page (for elements section)
    │   │   ├── blockquote.md            -- regular page (for blockquote component)
    │   │   ├── image
    │   │   │   ├── index.md             -- regular page (for image component)
    │   │   │   └── karigurashi002.jpg
    │   │   └── table.md                 -- regular page (for table component)
    │   └── shortcodes
    │       ├── _index.md                -- section page (for shortcodes section)
    │       └── icons.md                 -- regular page (for icons shortcode)
    └── guide
        ├── _index.md                    -- section page (for guide section)
        ├── theme_customization.md       -- regular page (for theme customization guide)
        └── widgets.md                   -- regular page (for widgets guide)
```
