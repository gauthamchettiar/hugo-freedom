---
title: Tables
slug: "tables"
date: 2026-03-05
tags: ["basics"]
---

A table element rendered using standard markdown table syntax and nested shortcode structure for complex tables with multi-line cells.

<!--more-->

## Features
- Supports standard Markdown table syntax with GFM (GitHub Flavored Markdown) extensions
- Supports nested shortcode structure `{{</* table */>}}`, `{{</* table-row */>}}`, `{{</* table-cell */>}}` for complex tables
- Column alignment (left, center, right)
- Optional captions with alignment control
- Custom CSS classes and HTML attributes
- Multi-line cell content with full Markdown support in shortcode syntax
- Semantic HTML structure wrapped in `<figure>` element

## Syntax

### Markdown Syntax

```markdown {showtitle=false}
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
{caption="Table caption" captionalign="center"}
```

### Shortcode Syntax

```markdown {showtitle=false}
{{</* table caption="Table caption" captionalign="center" */>}}
  {{</* table-row header=true */>}}
    {{</* table-cell */>}}Header 1{{</* /table-cell */>}}
    {{</* table-cell */>}}Header 2{{</* /table-cell */>}}
    {{</* table-cell */>}}Header 3{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Cell 1{{</* /table-cell */>}}
    {{</* table-cell */>}}Cell 2{{</* /table-cell */>}}
    {{</* table-cell */>}}Cell 3{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Cell 4{{</* /table-cell */>}}
    {{</* table-cell */>}}Cell 5{{</* /table-cell */>}}
    {{</* table-cell */>}}Cell 6{{</* /table-cell */>}}
  {{</* /table-row */>}}
{{</* /table */>}}
```

## Parameters

### `table` Shortcode

`class`
: (optional) CSS classes to apply to the wrapping `<figure>` element (default: `fr-table`)

`caption`
: (optional) Caption text displayed below the table

`captionalign`
: (optional) Caption alignment: `left`, `center`, `right` (default: `left`)

`variation`
: (optional) Applies a preset color theme to the table. Available values: `accent`, `info`, `note`, `tip`, `warning`, `important`, `caution`, `inverted`

`minwidth` *(markdown only)*
: (optional) Space-separated list of column numbers and widths (e.g., `"1 150px 2 200px 3 100px"`). Format: `"columnNumber width columnNumber width ..."`

`colheaders` *(markdown only)*
: (optional) Space-separated list of column numbers to render as headers (e.g., `"1 2 3"`). Cells in these columns will use `<th>` instead of `<td>`. Set to `"-1"` to disable column headers

`rowheaders` *(markdown only)*
: (optional) Space-separated list of row numbers to mark as header rows (e.g., `"1 2 3"`). These rows are styled as headers. Row 1 refers to the first row from the markdown table header. Set to `"-1"` to disable all row header styling (including the default header row)

### `table-row` Shortcode

`header`
: (optional) Set to `true` to render cells in this row as `<th>` elements (default: `false`)

### `table-cell` Shortcode

`align`
: (optional) Text alignment for the cell: `left`, `center`, `right`

`minwidth`
: (optional) Minimum width for the column (e.g., `150px`, `10rem`, `20%`). Applied to both header and body cells

`header`
: (optional) Set to `true` to render this specific cell as a header (`<th>`). If not specified, inherits from parent `table-row`'s `header` parameter

## Column Alignment

**In Markdown:** Use colons in the separator row
- Left-aligned: `|:---------|` or `|----------|`
- Center-aligned: `|:--------:|`
- Right-aligned: `|---------:|`

**In Shortcode:** Use `align` parameter on `table-cell`
```markdown {showtitle=false}
{{</* table-cell align="center" */>}}Centered content{{</* /table-cell */>}}
```

## Column Minimum Width

**In Markdown:** Use `minwidth` attribute with column numbers and widths
```markdown {showtitle=false}
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
{minwidth="1 150px 2 200px 3 100px"}
```

**In Shortcode:** Use `minwidth` parameter on `table-cell`
```markdown {showtitle=false}
{{</* table-cell minwidth="150px" */>}}Column content{{</* /table-cell */>}}
```

## Examples

### Example 1: Basic Table

{{< tabs group="table-basic" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
| Name    | Age | City          |
|---------|-----|---------------|
| Alice   | 28  | New York      |
| Bob     | 34  | San Francisco |
| Charlie | 22  | Seattle       |
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* table */>}}
  {{</* table-row header=true */>}}
    {{</* table-cell */>}}Name{{</* /table-cell */>}}
    {{</* table-cell */>}}Age{{</* /table-cell */>}}
    {{</* table-cell */>}}City{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Alice{{</* /table-cell */>}}
    {{</* table-cell */>}}28{{</* /table-cell */>}}
    {{</* table-cell */>}}New York{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Bob{{</* /table-cell */>}}
    {{</* table-cell */>}}34{{</* /table-cell */>}}
    {{</* table-cell */>}}San Francisco{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Charlie{{</* /table-cell */>}}
    {{</* table-cell */>}}22{{</* /table-cell */>}}
    {{</* table-cell */>}}Seattle{{</* /table-cell */>}}
  {{</* /table-row */>}}
{{</* /table */>}}
```
{{% /tab %}}
{{< /tabs >}}

| Name    | Age | City          |
|---------|-----|---------------|
| Alice   | 28  | New York      |
| Bob     | 34  | San Francisco |
| Charlie | 22  | Seattle       |

---

### Example 2: Table with Caption

{{< tabs group="table-caption" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
| Product  | Price | Stock |
|----------|-------|-------|
| Laptop   | $999  | 15    |
| Mouse    | $29   | 150   |
| Keyboard | $79   | 85    |
{caption="Product Inventory" captionalign="center"}
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* table caption="Product Inventory" captionalign="center" */>}}
  {{</* table-row header=true */>}}
    {{</* table-cell */>}}Product{{</* /table-cell */>}}
    {{</* table-cell */>}}Price{{</* /table-cell */>}}
    {{</* table-cell */>}}Stock{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Laptop{{</* /table-cell */>}}
    {{</* table-cell */>}}$999{{</* /table-cell */>}}
    {{</* table-cell */>}}15{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Mouse{{</* /table-cell */>}}
    {{</* table-cell */>}}$29{{</* /table-cell */>}}
    {{</* table-cell */>}}150{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Keyboard{{</* /table-cell */>}}
    {{</* table-cell */>}}$79{{</* /table-cell */>}}
    {{</* table-cell */>}}85{{</* /table-cell */>}}
  {{</* /table-row */>}}
{{</* /table */>}}
```
{{% /tab %}}
{{< /tabs >}}

| Product  | Price | Stock |
|----------|-------|-------|
| Laptop   | $999  | 15    |
| Mouse    | $29   | 150   |
| Keyboard | $79   | 85    |
{caption="Product Inventory" captionalign="center"}

---

### Example 3: Table with Column Alignment

{{< tabs group="table-alignment" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
| Item (Left) | Quantity (Center) | Price (Right) |
|:------------|:-----------------:|--------------:|
| Apple       | 10                | $1.50         |
| Banana      | 25                | $0.75         |
| Orange      | 18                | $1.25         |
{caption="Fruit Prices with Column Alignment"}
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* table caption="Fruit Prices with Column Alignment" */>}}
  {{</* table-row header=true */>}}
    {{</* table-cell align="left" */>}}Item (Left){{</* /table-cell */>}}
    {{</* table-cell align="center" */>}}Quantity (Center){{</* /table-cell */>}}
    {{</* table-cell align="right" */>}}Price (Right){{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell align="left" */>}}Apple{{</* /table-cell */>}}
    {{</* table-cell align="center" */>}}10{{</* /table-cell */>}}
    {{</* table-cell align="right" */>}}$1.50{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell align="left" */>}}Banana{{</* /table-cell */>}}
    {{</* table-cell align="center" */>}}25{{</* /table-cell */>}}
    {{</* table-cell align="right" */>}}$0.75{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell align="left" */>}}Orange{{</* /table-cell */>}}
    {{</* table-cell align="center" */>}}18{{</* /table-cell */>}}
    {{</* table-cell align="right" */>}}$1.25{{</* /table-cell */>}}
  {{</* /table-row */>}}
{{</* /table */>}}
```
{{% /tab %}}
{{< /tabs >}}

| Item (Left) | Quantity (Center) | Price (Right) |
|:------------|:-----------------:|--------------:|
| Apple       | 10                | $1.50         |
| Banana      | 25                | $0.75         |
| Orange      | 18                | $1.25         |
{caption="Fruit Prices with Column Alignment"}

---

### Example 4: Wide Table with Automatic Scroll and Column Width

Tables with many columns automatically become horizontally scrollable on smaller screens. You can set minimum column widths using the `minwidth` parameter.

{{< tabs group="table-wide" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
| ID  | Name          | Email                  | Department | Position       | Location   | Salary  | Start Date | Phone        | Status |
|-----|---------------|------------------------|------------|----------------|------------|---------|------------|--------------|--------|
| 001 | John Doe      | john.doe@company.com   | Engineering| Senior Dev     | New York   | $120,000| 2020-01-15 | 555-0101     | Active |
| 002 | Jane Smith    | jane.smith@company.com | Marketing  | Manager        | London     | $95,000 | 2019-06-01 | 555-0102     | Active |
| 003 | Bob Johnson   | bob.johnson@company.com| Sales      | Representative | Tokyo      | $75,000 | 2021-03-10 | 555-0103     | Active |
| 004 | Alice Chen    | alice.chen@company.com | Engineering| Team Lead      | Singapore  | $130,000| 2018-09-20 | 555-0104     | Active |
{caption="Employee Directory" minwidth="1 60px 2 150px 3 200px 4 120px 5 150px 6 120px 7 100px 8 110px 9 120px 10 80px"}
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* table caption="Employee Directory with minimum column widths" */>}}
  {{</* table-row header=true */>}}
    {{</* table-cell minwidth="60px" */>}}ID{{</* /table-cell */>}}
    {{</* table-cell minwidth="150px" */>}}Name{{</* /table-cell */>}}
    {{</* table-cell minwidth="200px" */>}}Email{{</* /table-cell */>}}
    {{</* table-cell minwidth="120px" */>}}Department{{</* /table-cell */>}}
    {{</* table-cell minwidth="150px" */>}}Position{{</* /table-cell */>}}
    {{</* table-cell minwidth="120px" */>}}Location{{</* /table-cell */>}}
    {{</* table-cell minwidth="100px" */>}}Salary{{</* /table-cell */>}}
    {{</* table-cell minwidth="110px" */>}}Start Date{{</* /table-cell */>}}
    {{</* table-cell minwidth="120px" */>}}Phone{{</* /table-cell */>}}
    {{</* table-cell minwidth="80px" */>}}Status{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}001{{</* /table-cell */>}}
    {{</* table-cell */>}}John Doe{{</* /table-cell */>}}
    {{</* table-cell */>}}john.doe@company.com{{</* /table-cell */>}}
    {{</* table-cell */>}}Engineering{{</* /table-cell */>}}
    {{</* table-cell */>}}Senior Dev{{</* /table-cell */>}}
    {{</* table-cell */>}}New York{{</* /table-cell */>}}
    {{</* table-cell */>}}$120,000{{</* /table-cell */>}}
    {{</* table-cell */>}}2020-01-15{{</* /table-cell */>}}
    {{</* table-cell */>}}555-0101{{</* /table-cell */>}}
    {{</* table-cell */>}}Active{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}002{{</* /table-cell */>}}
    {{</* table-cell */>}}Jane Smith{{</* /table-cell */>}}
    {{</* table-cell */>}}jane.smith@company.com{{</* /table-cell */>}}
    {{</* table-cell */>}}Marketing{{</* /table-cell */>}}
    {{</* table-cell */>}}Manager{{</* /table-cell */>}}
    {{</* table-cell */>}}London{{</* /table-cell */>}}
    {{</* table-cell */>}}$95,000{{</* /table-cell */>}}
    {{</* table-cell */>}}2019-06-01{{</* /table-cell */>}}
    {{</* table-cell */>}}555-0102{{</* /table-cell */>}}
    {{</* table-cell */>}}Active{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}003{{</* /table-cell */>}}
    {{</* table-cell */>}}Bob Johnson{{</* /table-cell */>}}
    {{</* table-cell */>}}bob.johnson@company.com{{</* /table-cell */>}}
    {{</* table-cell */>}}Sales{{</* /table-cell */>}}
    {{</* table-cell */>}}Representative{{</* /table-cell */>}}
    {{</* table-cell */>}}Tokyo{{</* /table-cell */>}}
    {{</* table-cell */>}}$75,000{{</* /table-cell */>}}
    {{</* table-cell */>}}2021-03-10{{</* /table-cell */>}}
    {{</* table-cell */>}}555-0103{{</* /table-cell */>}}
    {{</* table-cell */>}}Active{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}004{{</* /table-cell */>}}
    {{</* table-cell */>}}Alice Chen{{</* /table-cell */>}}
    {{</* table-cell */>}}alice.chen@company.com{{</* /table-cell */>}}
    {{</* table-cell */>}}Engineering{{</* /table-cell */>}}
    {{</* table-cell */>}}Team Lead{{</* /table-cell */>}}
    {{</* table-cell */>}}Singapore{{</* /table-cell */>}}
    {{</* table-cell */>}}$130,000{{</* /table-cell */>}}
    {{</* table-cell */>}}2018-09-20{{</* /table-cell */>}}
    {{</* table-cell */>}}555-0104{{</* /table-cell */>}}
    {{</* table-cell */>}}Active{{</* /table-cell */>}}
  {{</* /table-row */>}}
{{</* /table */>}}
```
{{% /tab %}}
{{< /tabs >}}


| ID  | Name          | Email                  | Department | Position       | Location   | Salary  | Start Date | Phone        | Status |
|-----|---------------|------------------------|------------|----------------|------------|---------|------------|--------------|--------|
| 001 | John Doe      | john.doe@company.com   | Engineering| Senior Dev     | New York   | $120,000| 2020-01-15 | 555-0101     | Active |
| 002 | Jane Smith    | jane.smith@company.com | Marketing  | Manager        | London     | $95,000 | 2019-06-01 | 555-0102     | Active |
| 003 | Bob Johnson   | bob.johnson@company.com| Sales      | Representative | Tokyo      | $75,000 | 2021-03-10 | 555-0103     | Active |
| 004 | Alice Chen    | alice.chen@company.com | Engineering| Team Lead      | Singapore  | $130,000| 2018-09-20 | 555-0104     | Active |
{caption="Employee Directory" minwidth="1 60px 2 150px 3 200px 4 120px 5 150px 6 120px 7 100px 8 110px 9 120px 10 80px"}

---

### Example 5: Table with Complex Cell Formatting (Shortcode Only)

The shortcode syntax supports complex content including lists, code blocks, nested tables, links, and more.

````markdown {showtitle=false}
{{</* table caption="API Endpoint Documentation" */>}}
  {{</* table-row header=true */>}}
    {{</* table-cell minwidth="100px" */>}}Endpoint{{</* /table-cell */>}}
    {{</* table-cell minwidth="250px"*/>}}Details{{</* /table-cell */>}}
    {{</* table-cell */>}}Example{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}
`GET /api/users`

**Authentication:** Required  
**Rate Limit:** 100/hour
    {{</* /table-cell */>}}
    {{</* table-cell */>}}
Retrieves a list of users with the following filters:

- `status` - Filter by user status
- `role` - Filter by user role
- `limit` - Number of results (max 100)

[View full documentation →](#)
    {{</* /table-cell */>}}
    {{</* table-cell */>}}
```bash
curl -X GET \
  'https://api.example.com/users?limit=10' \
  -H 'Authorization: Bearer TOKEN'
```

Response:
```json
{
  "users": [...],
  "total": 150
}
```
    {{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}
`POST /api/users`

**Authentication:** Required  
**Rate Limit:** 50/hour
    {{</* /table-cell */>}}
    {{</* table-cell */>}}
Creates a new user account.

**Required fields:**

| Field    | Type   |
|----------|--------|
| email    | string |
| name     | string |
| role     | enum   |

**Validation rules:**
- Email must be unique
- Name: 2-50 characters
- Role: `admin`, `user`, `guest`
    {{</* /table-cell */>}}
    {{</* table-cell */>}}
```bash
curl -X POST \
  'https://api.example.com/users' \
  -H 'Authorization: Bearer TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "user@example.com",
    "name": "John Doe",
    "role": "user"
  }'
```
    {{</* /table-cell */>}}
  {{</* /table-row */>}}
{{</* /table */>}}
````

{{< table caption="API Endpoint Documentation" >}}
  {{< table-row header=true >}}
    {{< table-cell minwidth="100px">}}Endpoint{{< /table-cell >}}
    {{< table-cell minwidth="250px">}}Details{{< /table-cell >}}
    {{< table-cell>}}Example{{< /table-cell >}}
  {{< /table-row >}}
  {{< table-row >}}
    {{< table-cell >}}
`GET /api/users`

**Authentication:** Required  
**Rate Limit:** 100/hour
    {{< /table-cell >}}
    {{< table-cell >}}
Retrieves a list of users with the following filters:

- `status` - Filter by user status
- `role` - Filter by user role
- `limit` - Number of results (max 100)

[View full documentation →](#)
    {{< /table-cell >}}
    {{< table-cell >}}
```bash
curl -X GET \
  'https://api.example.com/users?limit=10' \
  -H 'Authorization: Bearer TOKEN'
```

Response:
```json
{
  "users": [...],
  "total": 150
}
```
    {{< /table-cell >}}
  {{< /table-row >}}
  {{< table-row >}}
    {{< table-cell >}}
`POST /api/users`

**Authentication:** Required  
**Rate Limit:** 50/hour
    {{< /table-cell >}}
    {{< table-cell >}}
Creates a new user account.

**Required fields:**

| Field    | Type   |
|----------|--------|
| email    | string |
| name     | string |
| role     | enum   |

**Validation rules:**
- Email must be unique
- Name: 2-50 characters
- Role: `admin`, `user`, `guest`
    {{< /table-cell >}}
    {{< table-cell >}}
```bash
curl -X POST \
  'https://api.example.com/users' \
  -H 'Authorization: Bearer TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "user@example.com",
    "name": "John Doe",
    "role": "user"
  }'
```
    {{< /table-cell >}}
  {{< /table-row >}}
{{< /table >}}

---

### Example 6: Table with Variation Styling

Tables can be styled with variation themes for visual emphasis.

{{< tabs group="table-variation" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
| Feature | Status |
|---------|--------|
| Authentication | ✅ Complete |
| API Rate Limiting | ✅ Complete |
| Caching | 🔄 In Progress |
{caption="Feature Status" variation="info"}
```
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* table caption="Feature Status" variation="info" */>}}
  {{</* table-row header=true */>}}
    {{</* table-cell */>}}Feature{{</* /table-cell */>}}
    {{</* table-cell */>}}Status{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Authentication{{</* /table-cell */>}}
    {{</* table-cell */>}}✅ Complete{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}API Rate Limiting{{</* /table-cell */>}}
    {{</* table-cell */>}}✅ Complete{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell */>}}Caching{{</* /table-cell */>}}
    {{</* table-cell */>}}🔄 In Progress{{</* /table-cell */>}}
  {{</* /table-row */>}}
{{</* /table */>}}
```
{{% /tab %}}
{{< /tabs >}}

| Feature | Status |
|---------|--------|
| Authentication | ✅ Complete |
| API Rate Limiting | ✅ Complete |
| Caching | 🔄 In Progress |
{caption="Feature Status - Info variation" variation="info"}

| Feature | Status |
|---------|--------|
| Security Audit | ⚠️ Needs Review |
| SSL Certificate | 🔄 Renewing |
{caption="Feature Status - Warning variation" variation="warning"}

| Feature | Status |
|---------|--------|
| Backup System | ✅ Active |
| Monitoring | ✅ Active |
{caption="Feature Status - Tip variation" variation="tip"}

---

### Example 7: Table with Custom Headers

You can specify custom column and row headers for complex data tables. This example shows the first 2 columns and first 2 rows as headers.

{{< tabs group="table-custom-headers" >}}
{{% tab title="Markdown Syntax" %}}
```markdown {showtitle=false}
| Region | Category | Q1 Sales | Q2 Sales | Q3 Sales | Q4 Sales |
|--------|----------|----------|----------|----------|----------|
| North  | Target   | $50K     | $55K     | $60K     | $65K     |
| North  | Actual   | $48K     | $58K     | $62K     | $67K     |
| South  | Target   | $40K     | $42K     | $45K     | $48K     |
| South  | Actual   | $41K     | $43K     | $46K     | $49K     |
| East   | Target   | $60K     | $65K     | $70K     | $75K     |
| East   | Actual   | $62K     | $66K     | $72K     | $78K     |
{caption="Sales Performance by Region and Quarter" colheaders="1 2" rowheaders="1 2 3"}
```

- `colheaders="1 2"` makes the first two columns (Region, Category) into headers (`<th>`)
- `rowheaders="1 2 3"` marks rows 1 (header row), 2 (North Target), and 3 (North Actual) as header rows with special styling
- Row numbers include the header row from markdown (so row 1 = header, row 2 = first data row, etc.)
- Use `rowheaders="-1"` to disable row header styling entirely (see example below)
{{% /tab %}}

{{% tab title="Shortcode Syntax" %}}
```markdown {showtitle=false}
{{</* table caption="Sales Performance by Region and Quarter" */>}}
  {{</* table-row header=true */>}}
    {{</* table-cell */>}}Region{{</* /table-cell */>}}
    {{</* table-cell */>}}Category{{</* /table-cell */>}}
    {{</* table-cell */>}}Q1 Sales{{</* /table-cell */>}}
    {{</* table-cell */>}}Q2 Sales{{</* /table-cell */>}}
    {{</* table-cell */>}}Q3 Sales{{</* /table-cell */>}}
    {{</* table-cell */>}}Q4 Sales{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell header=true */>}}North{{</* /table-cell */>}}
    {{</* table-cell header=true */>}}Target{{</* /table-cell */>}}
    {{</* table-cell */>}}$50K{{</* /table-cell */>}}
    {{</* table-cell */>}}$55K{{</* /table-cell */>}}
    {{</* table-cell */>}}$60K{{</* /table-cell */>}}
    {{</* table-cell */>}}$65K{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell header=true */>}}North{{</* /table-cell */>}}
    {{</* table-cell header=true */>}}Actual{{</* /table-cell */>}}
    {{</* table-cell */>}}$48K{{</* /table-cell */>}}
    {{</* table-cell */>}}$58K{{</* /table-cell */>}}
    {{</* table-cell */>}}$62K{{</* /table-cell */>}}
    {{</* table-cell */>}}$67K{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell header=true */>}}South{{</* /table-cell */>}}
    {{</* table-cell header=true */>}}Target{{</* /table-cell */>}}
    {{</* table-cell */>}}$40K{{</* /table-cell */>}}
    {{</* table-cell */>}}$42K{{</* /table-cell */>}}
    {{</* table-cell */>}}$45K{{</* /table-cell */>}}
    {{</* table-cell */>}}$48K{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell header=true */>}}South{{</* /table-cell */>}}
    {{</* table-cell header=true */>}}Actual{{</* /table-cell */>}}
    {{</* table-cell */>}}$41K{{</* /table-cell */>}}
    {{</* table-cell */>}}$43K{{</* /table-cell */>}}
    {{</* table-cell */>}}$46K{{</* /table-cell */>}}
    {{</* table-cell */>}}$49K{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell header=true */>}}East{{</* /table-cell */>}}
    {{</* table-cell header=true */>}}Target{{</* /table-cell */>}}
    {{</* table-cell */>}}$60K{{</* /table-cell */>}}
    {{</* table-cell */>}}$65K{{</* /table-cell */>}}
    {{</* table-cell */>}}$70K{{</* /table-cell */>}}
    {{</* table-cell */>}}$75K{{</* /table-cell */>}}
  {{</* /table-row */>}}
  {{</* table-row */>}}
    {{</* table-cell header=true */>}}East{{</* /table-cell */>}}
    {{</* table-cell header=true */>}}Actual{{</* /table-cell */>}}
    {{</* table-cell */>}}$62K{{</* /table-cell */>}}
    {{</* table-cell */>}}$66K{{</* /table-cell */>}}
    {{</* table-cell */>}}$72K{{</* /table-cell */>}}
    {{</* table-cell */>}}$78K{{</* /table-cell */>}}
  {{</* /table-row */>}}
{{</* /table */>}}
```

Use `header=true` on individual `table-cell` shortcodes to make specific cells headers.
{{% /tab %}}
{{< /tabs >}}

| Region | Category | Q1 Sales | Q2 Sales | Q3 Sales | Q4 Sales |
|--------|----------|----------|----------|----------|----------|
| North  | Target   | $50K     | $55K     | $60K     | $65K     |
| North  | Actual   | $48K     | $58K     | $62K     | $67K     |
| South  | Target   | $40K     | $42K     | $45K     | $48K     |
| South  | Actual   | $41K     | $43K     | $46K     | $49K     |
| East   | Target   | $60K     | $65K     | $70K     | $75K     |
| East   | Actual   | $62K     | $66K     | $72K     | $78K     |
{caption="Sales Performance by Region and Quarter" colheaders="1 2" rowheaders="1 2 3"}

| Region | Category | Q1 Sales | Q2 Sales | Q3 Sales | Q4 Sales |
|--------|----------|----------|----------|----------|----------|
| North  | Target   | $50K     | $55K     | $60K     | $65K     |
| North  | Actual   | $48K     | $58K     | $62K     | $67K     |
| South  | Target   | $40K     | $42K     | $45K     | $48K     |
| South  | Actual   | $41K     | $43K     | $46K     | $49K     |
| East   | Target   | $60K     | $65K     | $70K     | $75K     |
| East   | Actual   | $62K     | $66K     | $72K     | $78K     |
{caption="Sales Performance by Region and Quarter (now row header)" colheaders="1 2" rowheaders="-1"}
