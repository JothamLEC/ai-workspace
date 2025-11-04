# Tailwind HTML to Bricks Builder JSON Converter

## Purpose
This document provides instructions for Claude to convert Tailwind-infused HTML elements into Bricks Builder clipboard JSON format that can be pasted directly into Bricks Builder.

## Context
Bricks Builder uses a JSON structure to define page elements. When you copy elements in Bricks Builder, it generates a JSON clipboard format. This guide enables conversion from standard HTML with Tailwind CSS classes to that JSON format.

## Conversion Rules

### JSON Structure
The output MUST be a valid JSON object with this root structure:
```json
{
  "content": [ /* array of element objects */ ],
  "source": "bricksCopiedElements",
  "sourceUrl": "https://stagingemasekyc.cothink.ing",
  "version": "2.1.3",
  "components": []
}
```

### Element Object Structure
Each element in the `content` array follows this pattern:
```json
{
  "id": "unique6char",
  "name": "element-type",
  "parent": 0 or "parentId",
  "children": ["childId1", "childId2"],
  "settings": {
    "_cssClasses": "tailwind classes here",
    "tag": "html-tag-name",
    "text": "text content",
    /* other settings */
  },
  "label": "Descriptive Label"
}
```

### ID Generation
- Generate random 6-character alphanumeric IDs (lowercase)
- Examples: "ylmcma", "pbufva", "nbznwa"
- Each element MUST have a unique ID

### Element Type Mapping (name field)

| HTML Element | Bricks name |
|--------------|-------------|
| `<div>` | "div" |
| `<section>` | "div" (with `tag: "custom"`, `customTag: "section"` in settings) |
| `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` | "text-basic" (with `tag: "h1"` etc in settings) or "heading" |
| `<p>` | "text-basic" (with `tag: "p"` in settings) |
| `<span>` | "text-basic" (with `tag: "span"` in settings) |
| `<a>` | "text-basic" (with `tag: "a"`, `link` object in settings) |
| `<button>` | "div" (with `tag: "button"` in settings) |
| `<img>` | "image" |
| `<svg>` | "svg" |
| `<video>` | "video" |
| `<form>` | "form" |
| `<ul>` | "div" (with `tag: "ul"` in settings) |
| `<li>` | "div" (with `tag: "li"` in settings) |

### Parent-Child Relationships
- Root elements have `parent: 0`
- Child elements have `parent: "parentElementId"`
- Parent elements list child IDs in `children: ["childId1", "childId2"]`
- Maintain the correct nesting hierarchy from HTML

### Settings Object Rules

#### CSS Classes (_cssClasses)
- ALL Tailwind classes from the HTML's `class` attribute go into `_cssClasses`
- Keep classes EXACTLY as they appear in the HTML
- Preserve responsive prefixes: `lg:`, `md:`, `sm:`
- Preserve arbitrary values: `size-[0.7rem]`, `max-w-[90dvw]`
- Preserve pseudo-classes: `hover:`, `focus:`, `before:`, `after:`
- Do NOT add "brxe-" prefix - that's added by Bricks during rendering

#### Common Settings

**For semantic HTML tags (section, article, etc):**
```json
"settings": {
  "tag": "custom",
  "customTag": "section",
  "_cssClasses": "tailwind classes"
}
```

**For text elements:**
```json
"settings": {
  "tag": "p",
  "text": "Your text content here",
  "_cssClasses": "text classes"
}
```

**For links:**
```json
"settings": {
  "tag": "a",
  "text": "Link text",
  "link": {
    "type": "external",
    "url": "https://example.com",
    "newTab": false
  },
  "_cssClasses": "link classes"
}
```

**For images:**
```json
"settings": {
  "image": {
    "url": "https://example.com/image.jpg",
    "external": true,
    "filename": "image.jpg"
  },
  "_cssClasses": "image classes",
  "caption": "none"
}
```

**For SVGs:**
```json
"settings": {
  "file": {
    "id": 1500,
    "filename": "icon.svg",
    "url": "https://example.com/icon.svg"
  },
  "_cssClasses": "svg classes"
}
```

**For buttons:**
```json
"settings": {
  "tag": "button",
  "_cssClasses": "btn btn-primary",
  "_attributes": [
    {"id": "windpress123", "name": "type", "value": "button"}
  ]
}
```

#### HTML Attributes (_attributes)
Custom HTML attributes are stored in the `_attributes` array:
```json
"_attributes": [
  {"id": "uniqueId1", "name": "aria-label", "value": "Description"},
  {"id": "uniqueId2", "name": "role", "value": "button"}
]
```

### Special Cases

**Nested text with inline formatting:**
If HTML has inline spans for styling:
```html
<p class="text-lg">This is <span class="font-bold">bold text</span> example</p>
```

Convert to:
```json
{
  "name": "text-basic",
  "settings": {
    "tag": "p",
    "text": "This is <span class=\"font-bold\">bold text</span> example",
    "_cssClasses": "text-lg"
  }
}
```

**Complex SVG paths:**
For SVG elements, include the viewBox and path data:
```json
{
  "name": "svg",
  "settings": {
    "tag": "svg",
    "_cssClasses": "size-6",
    "_attributes": [
      {"id": "abc123", "name": "viewBox", "value": "0 0 512 512"},
      {"id": "def456", "name": "xmlns", "value": "http://www.w3.org/2000/svg"}
    ],
    "source": "code",
    "code": "<svg>...</svg>"
  }
}
```

**Responsive classes:**
Preserve ALL responsive prefixes:
- `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- `max-sm:`, `max-md:`, etc.

**State variants:**
Preserve ALL state variants:
- `hover:`, `focus:`, `active:`, `disabled:`
- `group-hover:`, `peer-focus:`, etc.

**Arbitrary values:**
Keep bracket notation intact:
- `w-[200px]`, `text-[#ff0000]`, `top-[50%]`

## Conversion Process

When given HTML to convert:

1. **Parse the HTML structure** - identify all elements and their nesting
2. **Generate unique IDs** - create 6-character random IDs for each element
3. **Map element types** - convert HTML tags to Bricks element names
4. **Extract classes** - move all Tailwind classes to `_cssClasses`
5. **Build parent-child relationships** - set parent IDs and children arrays
6. **Add settings** - populate tag names, text content, attributes
7. **Create labels** - add descriptive labels for each element
8. **Assemble JSON** - wrap in proper root structure

## Output Format

Return ONLY the JSON object - no markdown code blocks, no explanations.
The JSON should be valid and ready to paste into Bricks Builder's clipboard.

## Example Conversion

**INPUT HTML:**
```html
<section class="px-4 py-16 bg-gray-100">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center">Welcome</h1>
    <p class="mt-4 text-lg text-gray-600">This is a description.</p>
  </div>
</section>
```

**OUTPUT JSON:**
```json
{
  "content": [
    {
      "id": "abc123",
      "name": "div",
      "parent": 0,
      "children": ["def456"],
      "settings": {
        "_cssClasses": "px-4 py-16 bg-gray-100",
        "tag": "custom",
        "customTag": "section"
      },
      "label": "Section Container"
    },
    {
      "id": "def456",
      "name": "div",
      "parent": "abc123",
      "children": ["ghi789", "jkl012"],
      "settings": {
        "_cssClasses": "max-w-4xl mx-auto"
      },
      "label": "Inner Container"
    },
    {
      "id": "ghi789",
      "name": "text-basic",
      "parent": "def456",
      "children": [],
      "settings": {
        "tag": "h1",
        "text": "Welcome",
        "_cssClasses": "text-4xl font-bold text-center"
      },
      "label": "Heading"
    },
    {
      "id": "jkl012",
      "name": "text-basic",
      "parent": "def456",
      "children": [],
      "settings": {
        "tag": "p",
        "text": "This is a description.",
        "_cssClasses": "mt-4 text-lg text-gray-600"
      },
      "label": "Description"
    }
  ],
  "source": "bricksCopiedElements",
  "sourceUrl": "https://stagingemasekyc.cothink.ing",
  "version": "2.1.3",
  "components": []
}
```

## Important Notes

- **Always preserve Tailwind class order** as it may affect specificity
- **Don't add extra spaces** in class strings
- **Keep arbitrary values exact** - don't try to convert them
- **Maintain HTML entity encoding** in text content (e.g., `&nbsp;`, `&#039;`)
- **Generate truly unique IDs** - collisions will cause issues in Bricks
- **Empty children arrays** for leaf elements
- **Root parent is always 0** not "0"

## Usage

To convert HTML, simply provide the HTML snippet and Claude will return the Bricks Builder JSON format following these rules.