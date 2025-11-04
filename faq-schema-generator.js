/**
 * FAQ Schema Generator for Bricks Builder
 * Automatically generates JSON-LD FAQ schema from definition lists
 *
 * @author Innov8tif
 * @version 1.0.0
 *
 * Usage:
 * 1. Upload this file to your WordPress theme/child theme
 * 2. Enqueue in Bricks footer OR add to Bricks Settings > Custom Code > Footer
 * 3. Create FAQ sections using <dl>, <dt>, <dd> with id="faq" on the parent section
 */

(function() {
  'use strict';

  /**
   * Generate FAQ Schema from definition list
   */
  function generateFAQSchema() {
    // Find FAQ section - supports multiple selector patterns
    const faqSection = document.querySelector('#faq dl, [id*="faq"] dl, .faq-section dl, section[id*="faq"] dl');

    // Exit if no FAQ section found
    if (!faqSection) {
      return;
    }

    // Build FAQ entities array
    const faqEntities = [];
    const items = Array.from(faqSection.children);

    let currentQuestion = null;

    // Process each dl child (dt = question, dd = answer)
    items.forEach(function(item) {
      if (item.tagName === 'DT') {
        // Store question text
        currentQuestion = item.textContent.trim();
      } else if (item.tagName === 'DD' && currentQuestion) {
        // Add Q&A pair to entities
        faqEntities.push({
          "@type": "Question",
          "name": currentQuestion,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.textContent.trim()
          }
        });
        // Reset for next question
        currentQuestion = null;
      }
    });

    // Exit if no valid FAQ items found
    if (faqEntities.length === 0) {
      return;
    }

    // Create JSON-LD schema object
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqEntities
    };

    // Remove any existing FAQ schema to prevent duplicates
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-faq-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Create and inject schema script into head
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.setAttribute('data-faq-schema', 'true');
    scriptTag.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(scriptTag);

    // Log success (optional - remove in production if needed)
    if (window.console && console.log) {
      console.log('✅ FAQ Schema generated: ' + faqEntities.length + ' items');
    }
  }

  /**
   * Initialize when DOM is ready
   */
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', generateFAQSchema);
    } else {
      // DOM already loaded
      generateFAQSchema();
    }
  }

  // Start the script
  init();

})();
