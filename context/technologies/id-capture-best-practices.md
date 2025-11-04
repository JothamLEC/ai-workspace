# ID Capture Best Practices

## The Importance of Proper ID Document Capture

Innov8tif's [OkayDoc](../modules/okaydoc.md) is an ID document authentication module that uses mobile phone cameras to verify the legitimacy of ID documents.

**A bad capture can reduce authentication accuracy, leading to user onboarding failures.**

Proper document capture is critical for:
- High authentication accuracy
- Successful user onboarding
- Positive user experience
- Reduced retry attempts
- Lower abandonment rates

## Best Practices for ID Document Capture

### 1. Good Lighting
**Requirement:** Capture ID document in well-lit area with no glare or reflections.

**Why it matters:**
- Clear visibility of security features
- Accurate OCR text extraction
- Better image quality for AI analysis
- Prevents shadows that obscure details

**Tips:**
- Use natural daylight when possible
- Avoid direct overhead lighting
- Position light source behind you
- Avoid backlit conditions
- No flash directly on document

### 2. Proper Orientation
**Requirement:** Position ID document flat and straight with no excessive tilt or rotation.

**Why it matters:**
- Ensures all document edges are visible
- Proper alignment for template matching
- Accurate dimension verification
- Better OCR accuracy
- Easier for AI to analyze structure

**Tips:**
- Lay document on flat surface
- Hold phone parallel to document
- Keep document edges aligned with guide
- Avoid perspective distortion
- Center document in frame

### 3. No Obstruction
**Requirement:** Ensure nothing is covering or obstructing the ID document.

**Why it matters:**
- All security features must be visible
- Complete data extraction needed
- Hologram verification requires full view
- Watermark detection needs clear image
- Document integrity checks need full surface

**Common obstructions to avoid:**
- Fingers holding document
- Other objects on document
- Protective sleeves or covers
- Partial cropping
- Shadows from hands

### 4. Not Blurry
**Requirement:** Keep camera steady and maintain focus on ID document.

**Why it matters:**
- Sharp image needed for OCR
- Clear details for security feature detection
- Accurate text recognition
- Hologram and watermark visibility
- Microprint detection requires clarity

**Tips:**
- Hold phone steady
- Wait for autofocus to complete
- Don't move document during capture
- Use burst mode if available
- Retake if image appears blurry

### 5. Not Hidden in Shadow
**Requirement:** Avoid capturing ID document in areas with shadows.

**Why it matters:**
- Shadows obscure security features
- Make text difficult to read
- Affect color integrity checks
- Hide important details
- Reduce AI analysis accuracy

**Tips:**
- Even lighting across entire document
- Avoid casting shadows with hands or phone
- Check preview before capturing
- Reposition if shadows present
- Use diffused lighting when possible

## Strategies to Improve Capture Accuracy

### 1. User Priming
**Provide clear instructions and examples at the beginning of the eKYC process.**

**Elements to include:**
- Visual examples of good vs. bad captures
- Step-by-step instructions
- Tips for lighting and positioning
- Common mistakes to avoid
- Expected outcome

**Benefits:**
- Builds user awareness
- Reduces capture errors
- Lowers retry rates
- Improves completion rates
- Better user experience

### 2. Real-Time Feedback
**Innov8tif provides SDK (Software Development Kit) with real-time feedback during live capture.**

**Features:**
- Edge detection - Guide document placement
- Lighting checks - Warn if too dark/bright
- Blur detection - Alert if image not sharp
- Orientation guidance - Show if document tilted
- Shadow warnings - Alert if shadows present
- Glare detection - Warn about reflections

**Benefits:**
- Users correct issues before submission
- Reduces need for manual intervention
- Higher first-time success rates
- Better image quality
- Improved authentication accuracy

### 3. Progressive Capture
**Guide users through multi-step capture process.**

**Recommended flow:**
1. Show example of good capture
2. Activate camera with guides overlaid
3. Provide real-time feedback
4. Allow preview before submission
5. Confirm or retry capture
6. Process and provide feedback

### 4. Adaptive Instructions
**Customize guidance based on detected issues.**

**Examples:**
- "Move to a brighter area" - If lighting insufficient
- "Hold camera steady" - If blur detected
- "Align document with edges" - If cropped or tilted
- "Remove finger from document" - If obstruction detected
- "Avoid shadows" - If shadow detected

## Technical Implementation

### Image Quality Requirements
- **Resolution:** Minimum 1280x720 pixels recommended
- **File format:** JPEG or PNG
- **File size:** Typically 200KB - 5MB
- **DPI:** 300 DPI or higher preferred
- **Color space:** RGB

### Capture Environment
- **Lighting:** 500-1000 lux recommended
- **Background:** Plain, contrasting background
- **Distance:** 15-30cm from document
- **Angle:** Perpendicular to document surface
- **Stability:** Handheld or stable surface

### Document Requirements
- **Condition:** Not damaged or worn
- **Cleanliness:** No dirt or stains
- **Freshness:** Not expired
- **Authenticity:** Original document, not copy

## Common Capture Errors and Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| Text not readable | Blur or low resolution | Hold steady, ensure focus |
| Security features not detected | Poor lighting or shadows | Improve lighting, avoid shadows |
| Document edges cut off | Improper framing | Center document, show all edges |
| Glare on document | Direct light reflection | Change angle, adjust lighting |
| Color distortion | Poor lighting or camera settings | Use natural light, check preview |
| Incomplete capture | Finger obstruction | Remove fingers, use flat surface |

## Integration with EMAS eKYC

Proper ID capture is the foundation of [EMAS eKYC](../products/emas-ekyc.md):

1. **[OkayID](../modules/okayid.md)** - Captures document image with best practices
   - Uses real-time feedback from SDK
   - Ensures quality before submission
   - Extracts data via OCR

2. **[OkayDoc](../modules/okaydoc.md)** - Authenticates captured document
   - Relies on high-quality capture
   - Performs ~20 security checks
   - Benefits from proper lighting and focus

Good capture practices directly impact authentication success rates.

## User Interface Best Practices

### Camera Interface
- Clear document outline guide
- Real-time quality indicators
- Auto-capture when quality threshold met
- Manual capture button as fallback
- Preview screen before submission

### Instruction Screens
- Visual examples (good vs. bad)
- Short, clear text instructions
- Progressive disclosure of information
- Context-sensitive help
- Multi-language support

### Error Handling
- Specific error messages
- Guidance on how to fix
- Option to retry immediately
- Help or support access
- Escalation to video verification if needed

## Metrics to Track

### Capture Quality
- First-time capture success rate
- Average retries per user
- Image quality scores
- Common error types
- Device/camera performance

### User Experience
- Time to successful capture
- Abandonment at capture step
- Help/support requests
- User satisfaction scores
- Completion rates by device type

## Resources

### For Developers
- [OkayID API Documentation](https://api2-ekycapis.innov8tif.com/okayid/okayid-all/field-type-reference/field-type-lists)
- [Supported Documents](https://api2-ekycportal.innov8tif.com/emas-ekyc-portal/supported-document-lists-for-okayid-and-okaydoc)
- SDK with real-time feedback
- Integration guides

### For Users
- In-app capture guidance
- Help documentation
- Support contact information
- Example images

---

**Related Documentation:**
- [OkayID Module](../modules/okayid.md)
- [OkayDoc Module](../modules/okaydoc.md)
- [Document Authentication](./document-authentication.md)
- [EMAS eKYC Product](../products/emas-ekyc.md)

[← Back to Navigation](../README.md)
