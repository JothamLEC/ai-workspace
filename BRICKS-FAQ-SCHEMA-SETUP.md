# Bricks Builder - FAQ Schema Setup Guide

## Overview

This guide explains how to set up automatic FAQ schema generation in Bricks Builder using the `faq-schema-generator.js` file.

## What It Does

Automatically generates SEO-friendly FAQ schema (JSON-LD) from your FAQ sections, enabling Google Rich Snippets without manual coding.

**Before (Manual):**
- Edit HTML FAQ markup
- Manually update JSON-LD schema
- Risk of HTML/schema mismatch

**After (Automatic):**
- Edit FAQ in Bricks visual editor
- Schema auto-generates from markup
- Always in sync, no duplication

---

## Setup Instructions

### Method 1: Bricks Custom Code (Recommended)

**Step 1:** Copy the JavaScript code
- Open `faq-schema-generator.js`
- Copy all the code (lines 1-96)

**Step 2:** Add to Bricks Settings
1. Go to **WordPress Dashboard → Bricks → Settings**
2. Click the **Custom Code** tab
3. Scroll to **Body (footer)** section
4. Paste the code inside `<script>` tags:

```html
<script>
// Paste the entire faq-schema-generator.js code here
</script>
```

5. Click **Save Settings**

**Done!** The script now runs on every page and automatically generates FAQ schema.

---

### Method 2: Enqueue as External File

**Step 1:** Upload the file
1. Upload `faq-schema-generator.js` to your theme folder:
   - Location: `/wp-content/themes/your-theme/js/faq-schema-generator.js`
   - Or child theme: `/wp-content/themes/your-child-theme/js/faq-schema-generator.js`

**Step 2:** Enqueue in functions.php

Add this to your theme's `functions.php`:

```php
/**
 * Enqueue FAQ Schema Generator
 */
function enqueue_faq_schema_generator() {
    wp_enqueue_script(
        'faq-schema-generator',
        get_stylesheet_directory_uri() . '/js/faq-schema-generator.js',
        array(),
        '1.0.0',
        true // Load in footer
    );
}
add_action('wp_enqueue_scripts', 'enqueue_faq_schema_generator');
```

---

## How to Create FAQ Sections in Bricks

### HTML Structure

The script looks for FAQ sections with this structure:

```html
<section id="faq">
  <h2>Frequently Asked Questions</h2>

  <dl>
    <dt>What is facial matching?</dt>
    <dd>Facial matching is a biometric technology that compares...</dd>

    <dt>How accurate is the system?</dt>
    <dd>The system achieves 99.50% accuracy with...</dd>

    <dt>How long does verification take?</dt>
    <dd>Verification completes in under 1 second...</dd>
  </dl>
</section>
```

### Building in Bricks Visual Editor

**Option A: Using Code Element**

1. Add a **Section** element
   - Set **Element ID** to `faq`

2. Add a **Heading** element
   - Text: "Frequently Asked Questions"

3. Add a **Code** element (or Basic Text set to HTML)
   - Paste your FAQ markup:

```html
<dl>
  <dt>Your question here?</dt>
  <dd>Your answer here.</dd>

  <dt>Another question?</dt>
  <dd>Another answer.</dd>
</dl>
```

**Option B: Using Rich Text Elements**

1. Add a **Section** element
   - Set **Element ID** to `faq`

2. Add a **Heading** element
   - Text: "Frequently Asked Questions"

3. Add a **Rich Text** element
   - Switch to **Text** tab
   - Paste FAQ markup with `<dl>`, `<dt>`, `<dd>` tags

---

## Styling FAQs in Bricks

You can style the FAQ elements using Bricks' style controls:

### Style the Definition List (DL)
- Select the element containing `<dl>`
- **Style tab:**
  - Spacing: Add gap between items
  - Background: Optional background color
  - Border: Optional dividers

### Style Questions (DT)
Add custom CSS in **Bricks → Settings → Custom CSS**:

```css
#faq dt {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
  margin-top: 24px;
}

#faq dt:first-of-type {
  margin-top: 0;
}
```

### Style Answers (DD)
```css
#faq dd {
  font-size: 16px;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 16px;
  margin-left: 0;
}
```

### Add Icons to Questions
```css
#faq dt::before {
  content: "❓ ";
  margin-right: 8px;
}
```

---

## Verification

### Check if Schema is Working

**Method 1: Browser Console**

1. Open your FAQ page
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. Look for: `✅ FAQ Schema generated: X items`

**Method 2: View Page Source**

1. Right-click on page → **View Page Source**
2. Search for `application/ld+json`
3. You should see the FAQ schema in the `<head>` section

**Method 3: Google Rich Results Test**

1. Go to https://search.google.com/test/rich-results
2. Enter your page URL
3. Click **Test URL**
4. Look for "FAQPage" in detected items

---

## Supported Selectors

The script automatically finds FAQ sections using any of these patterns:

- `#faq dl` (recommended)
- `[id*="faq"] dl` (any ID containing "faq")
- `.faq-section dl` (class-based)
- `section[id*="faq"] dl` (section with FAQ in ID)

**Best Practice:** Use `id="faq"` on your FAQ section for consistency.

---

## Troubleshooting

### Schema Not Generating

**Check 1:** Verify HTML structure
- Must use `<dl>`, `<dt>`, `<dd>` tags
- `<dt>` must come before `<dd>`
- Must be inside an element with ID containing "faq"

**Check 2:** Check console for errors
- Open browser console (F12)
- Look for JavaScript errors

**Check 3:** Verify script is loaded
- View page source
- Search for "FAQ Schema Generator"
- Should appear in footer before `</body>`

### Schema Shows But Google Doesn't Recognize

**Issue:** Schema format may be incorrect

**Solution:**
- Test with https://search.google.com/test/rich-results
- Ensure questions and answers have text content
- Check for special characters that might break JSON

### Multiple FAQs on One Page

Currently, the script generates one FAQPage schema per page. If you need multiple FAQ sections:

**Option 1:** Combine all FAQs into one `<dl>`

**Option 2:** Modify the script to use `ItemList` schema instead

---

## Performance

### Script Size
- **Minified:** ~1.5KB
- **Gzipped:** ~600 bytes
- **Impact:** Negligible

### Load Time
- Executes on DOMContentLoaded
- Non-blocking (runs in footer)
- No external dependencies

### Caching
The script is static and can be cached indefinitely. Update version number in functions.php when making changes.

---

## Best Practices

### Writing Good FAQs

1. **Ask Real Questions**
   - Use questions customers actually ask
   - Start with who, what, when, where, why, how

2. **Provide Complete Answers**
   - Answer the question fully
   - Keep answers concise (2-4 sentences)
   - Include relevant details

3. **Use Natural Language**
   - Write like you're talking to a customer
   - Avoid jargon and technical terms
   - Be specific and helpful

4. **Optimal Number**
   - Include 6-10 FAQs per page
   - More than 10 may dilute SEO value
   - Focus on high-value questions

### SEO Optimization

1. **Target Keywords**
   - Include target keywords in questions
   - Answer questions comprehensively
   - Use variations of keywords

2. **Question Format**
   - End with question mark
   - Be specific (not "What is this?" but "What is facial matching?")

3. **Answer Length**
   - Minimum: 40-50 characters
   - Optimal: 200-300 characters
   - Maximum: 500 characters

---

## Maintenance

### Updating FAQs

1. Edit the FAQ in Bricks visual editor
2. Save and publish
3. Schema automatically updates (no additional steps)

### Removing FAQ Schema

To disable FAQ schema generation:

1. Go to **Bricks → Settings → Custom Code**
2. Remove or comment out the script
3. Or delete the enqueued file from functions.php

### Debugging

Enable debug mode by uncommenting the console.log line in the script:

```javascript
// Change this:
if (window.console && console.log) {
  console.log('✅ FAQ Schema generated: ' + faqEntities.length + ' items');
}

// To always log:
console.log('✅ FAQ Schema generated: ' + faqEntities.length + ' items');
```

---

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Test with Google's Rich Results Test
3. Verify HTML structure matches requirements
4. Check browser console for errors

---

## Changelog

### Version 1.0.0
- Initial release
- Automatic FAQ schema generation from DL elements
- Support for multiple selector patterns
- Duplicate prevention
- Console logging for verification

---

**Last Updated:** 2025-11-04
**Compatible With:** Bricks Builder 1.5+, WordPress 5.0+
