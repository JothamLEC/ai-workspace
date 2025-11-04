# EMAS eKYC Wiki Pages

**Purpose**: SEO-compliant, accessible HTML content for EMAS eKYC product website
**Last Updated**: 2025-11-04
**Total Pages**: 13 feature pages (matching sitemap)
**Format**: Semantic HTML5 with FAQ Schema (JSON-LD)
**Writing Style**: Concise, business-focused (William Zinsser principles)

---

## Overview

Production-ready SEO-compliant HTML wiki pages for all EMAS eKYC features and components. Each page uses semantic HTML5 markup with structured data for enhanced search visibility. Pages follow the standardized [Feature Page Template](../SOP/feature-page-template.md) with concise content and comprehensive FAQ sections.

### Content Philosophy
- **Concise writing**: Short paragraphs (max 4-5 lines), focused sections (max 5 paragraphs)
- **Business-focused**: Value and outcomes over technical implementation
- **Educational**: Helps stakeholders understand when and why to use each feature
- **Factually accurate**: Verified against `/context/` documentation for product claims
- **FAQ-driven**: Common questions answered comprehensively (6-7 Q&As per page)
- **SEO-optimized**: FAQ schema markup for rich snippets in search results
- **Accessible**: Semantic HTML5 with proper heading hierarchy

### Branding Approach
- **Okay-branded features**: "OkayX is EMAS eKYC's [component]..." (verified from context)
- **Partner services**: "EMAS eKYC offers..." (no Okay branding)
- **Clear distinction**: Product claims vs. industry knowledge

---

## Directory Structure

```
Wiki/
├── README.md                            # This file
├── identity-verification/               # 5 features
│   ├── facial-matching.html            # OkayFace
│   ├── remote-video-verification.html  # Partner service
│   ├── id-data-extraction.html         # OkayID
│   ├── id-verification.html            # OkayDoc
│   └── liveness-detection.html         # OkayLive
├── user-screening/                      # 4 features
│   ├── digital-footprint-analysis.html # Partner service
│   ├── credit-bankruptcy-checks.html   # Partner service
│   ├── aml-cft-screening.html          # Partner service
│   └── face-recognition-search.html    # OkayFace Search
├── additional-verification/             # 4 features
│   ├── income-address-proofing.html    # Partner service
│   ├── device-binding-intelligence.html # Partner service (merged)
│   ├── digital-signatures.html         # Partner service
│   └── deepfake-injection-detection.html # OkayLive+
└── _archived/                           # Not in sitemap
    ├── biometric-alert-list.html
    ├── biometric-authentication.html
    └── okaydb-infrastructure.html
```

---

## IDENTITY VERIFICATION (5 pages)

### 1. Facial Matching (OkayFace)
**File**: `identity-verification/facial-matching.html`
**Brand**: OkayFace is EMAS eKYC's facial matching component

**What it does**: Matches live selfie to ID photo with 99.50% accuracy and 0.000001 false match rate.

**Key capabilities** (verified):
- 99.50%+ accuracy
- 0.000001 false match rate
- Prevents stolen identity fraud
- Real-time verification

**Industries**: Financial Services, Cryptocurrency, Telecom, E-commerce, Gaming

---

### 2. Remote and Video Verification
**File**: `identity-verification/remote-video-verification.html`
**Brand**: Partner service

**What it does**: Agent-assisted video verification for complex cases requiring human judgment.

**Key capabilities**:
- Live video sessions with verification agents
- Fallback for automated verification failures
- Expert document validation
- High-value transaction support

**Industries**: Banking, Insurance, Real Estate, Healthcare, Government

---

### 3. ID Data Extraction (OkayID)
**File**: `identity-verification/id-data-extraction.html`
**Brand**: OkayID is EMAS eKYC's data extraction component

**What it does**: Automatically captures and extracts data from ID documents using OCR, NFC, and chip reading.

**Key capabilities** (verified):
- OCR, NFC, chip reading technology
- Multi-language support (Thai, Khmer, Roman)
- Passport, driver's license, national ID support
- Automated data capture

**Industries**: Banking, Telecom, E-commerce, Insurance, Healthcare

---

### 4. ID Verification (OkayDoc)
**File**: `identity-verification/id-verification.html`
**Brand**: OkayDoc is EMAS eKYC's document authentication component

**What it does**: Verifies ID documents are genuine using ~20 security checks.

**Key capabilities** (verified):
- ~20 security checks
- Patented technology
- Anti-spoofing and anti-tampering
- Detects forgeries and alterations

**Industries**: Banking, Cryptocurrency, E-commerce, Telecom, Healthcare, Gaming

---

### 5. Liveness Detection (OkayLive)
**File**: `identity-verification/liveness-detection.html`
**Brand**: OkayLive is EMAS eKYC's passive liveness detection component

**What it does**: Confirms real person is present without requiring head movements.

**Key capabilities** (verified):
- Passive detection (no awkward movements)
- Detects photos, videos, masks
- Superior user experience
- Higher completion rates

**Industries**: Banking, Cryptocurrency, Telecom, Insurance, Gaming

---

## USER SCREENING (4 pages)

### 6. Digital Footprint Analysis
**File**: `user-screening/digital-footprint-analysis.html`
**Brand**: Partner service

**What it does**: Analyzes online presence to detect synthetic identities and verify legitimacy.

**Key capabilities**:
- Social media verification
- Email/phone validation
- Legitimacy scoring
- Bot/fake account detection

**Industries**: Banking, E-commerce, Fintech/Lending, Gaming

---

### 7. Credit Score and Bankruptcy Checks
**File**: `user-screening/credit-bankruptcy-checks.html`
**Brand**: Partner service

**What it does**: Assesses creditworthiness through credit bureau and bankruptcy records.

**Key capabilities**:
- Multi-bureau credit checks
- Bankruptcy screening
- Default risk assessment
- Lending decision support

**Industries**: Banking, Fintech, Insurance, Telecom, Real Estate

---

### 8. AML/CFT Screening
**File**: `user-screening/aml-cft-screening.html`
**Brand**: Partner service

**What it does**: Checks customers against sanctions lists, PEP databases, and watchlists.

**Key capabilities**:
- Sanctions list screening (OFAC, UN, EU)
- PEP (Politically Exposed Persons) detection
- Adverse media monitoring
- Continuous customer due diligence

**Industries**: Banking, Cryptocurrency, Fintech, Payment Processors

---

### 9. Face Recognition Search (OkayFace Search)
**File**: `user-screening/face-recognition-search.html`
**Brand**: OkayFace Search is EMAS eKYC's facial recognition search tool

**What it does**: Searches customer database by facial biometrics to find duplicates and fraud networks.

**Key capabilities** (verified from context):
- Database facial search
- Duplicate account detection
- Fraud network exposure
- Ban evasion prevention

**Industries**: Banking, E-commerce, Marketplaces, Gaming

---

## ADDITIONAL VERIFICATION (4 pages)

### 10. Income and Address Proofing
**File**: `additional-verification/income-address-proofing.html`
**Brand**: Partner service

**What it does**: Verifies income and address through document analysis.

**Key capabilities**:
- Document OCR (utility bills, pay stubs, tax forms)
- Fraudulent document detection
- Address validation
- Income verification

**Industries**: Banking, Lending, Insurance, Real Estate, Telecom

---

### 11. Device Binding and Intelligence
**File**: `additional-verification/device-binding-intelligence.html`
**Brand**: Partner service (consolidated from 3 pages)

**What it does**: Prevents account takeover through device binding, fingerprinting, and risk screening.

**Key capabilities**:
- **Device Binding**: Trusted device management
- **Device Fingerprinting**: Unique device signatures
- **Risk Screening**: Threat intelligence, blacklisting

**Industries**: Banking, E-commerce, Cryptocurrency, Fintech, Healthcare, Gaming

**Note**: Consolidated from device-binding, device-fingerprinting, and device-risk-screening

---

### 12. Digital Signatures
**File**: `additional-verification/digital-signatures.html`
**Brand**: Partner service

**What it does**: Enables legally binding electronic signatures for remote document signing.

**Key capabilities**:
- E-signature workflows
- Legal compliance (eIDAS, ESIGN Act)
- Audit trails
- Remote document execution

**Industries**: Banking, Insurance, Real Estate, Healthcare

---

### 13. Deepfake and Injection Attack Detection (OkayLive+)
**File**: `additional-verification/deepfake-injection-detection.html`
**Brand**: OkayLive+ is EMAS eKYC's advanced liveness detection component

**What it does**: Detects AI-generated fraud and sophisticated injection attacks.

**Key capabilities** (verified from context):
- Deepfake video detection
- AI-generated image detection
- Injection attack prevention
- Advanced threat intelligence

**Industries**: Banking (high-security), Cryptocurrency, Government

---

## Using These Pages

### WordPress Gutenberg Integration

**Method 1: Direct Copy-Paste**
1. Open HTML file in text editor
2. Copy all content (starting from `<section>`)
3. Add "Custom HTML" block in WordPress
4. Paste content
5. Preview - semantic markup and FAQ schema will render properly

**Method 2: Code Editor**
1. Open Gutenberg Code editor
2. Paste HTML content
3. Switch to Visual editor
4. Content renders with proper structure

### SEO Benefits
- **FAQ Rich Snippets**: JSON-LD schema markup enables FAQ rich results in Google search
- **Semantic HTML**: Proper heading hierarchy and semantic tags improve search visibility
- **Accessibility**: Screen reader friendly with proper ARIA structure
- **No External Dependencies**: No CSS or JavaScript required

### Images
- All images hosted on Unsplash/Pexels CDN
- High-resolution, free for commercial use
- Alt text included for accessibility
- Optional: Replace with your own hosted images

---

## Content Standards

### Writing Style (Zinsser Principles)
- **Cut clutter**: No "cutting-edge", "state-of-the-art", marketing fluff
- **Strong verbs**: Active voice, simple language
- **Short sentences**: One idea per sentence
- **Specific facts**: Verified metrics, not vague claims
- **Journalistic tone**: Professional, factual, valuable

### Branding
- **Okay features**: "OkayX is EMAS eKYC's [component]..."
- **Partner services**: "EMAS eKYC offers..."
- **Product claims**: Verified against `/context/` docs
- **Industry knowledge**: Clearly distinguished from product claims

### Structure
- Semantic HTML5 with proper nesting
- H1: Feature name (e.g., "Facial Matching")
- Intro: Branding statement + brief description
- 5-section template (when applicable):
  1. What is [Feature]?
  2. What Problems Does It Solve?
  3. How Businesses Use It
  4. Key Benefits
  5. Real-World Examples
- FAQ section with JSON-LD schema markup

---

## Accuracy & Verification

### Okay-Branded Features (Must Verify)
All claims about Okay features verified against:
- `/context/modules/okayid.md`
- `/context/modules/okaydoc.md`
- `/context/modules/okayface.md`
- `/context/modules/okaylive.md`
- `/context/modules/okaydb.md`

### Partner Services (Industry Knowledge)
General industry knowledge used for:
- Problem statements
- Industry use cases
- General benefits
- Market trends

---

## Maintenance

### When to Update
- Product capabilities change
- New metrics available
- Customer case studies added
- Messaging strategy shifts

### How to Update
1. Edit HTML files directly in text editor
2. Maintain semantic HTML5 structure and proper heading hierarchy
3. Keep 5-section template structure
4. Apply Zinsser writing style principles
5. Verify Okay claims against `/context/` documentation
6. Update FAQ schema (JSON-LD) when modifying FAQ sections
7. Test in WordPress Gutenberg before deployment

---

## Archive

Pages not in current sitemap moved to `_archived/`:
- `biometric-alert-list.html`
- `biometric-authentication.html`
- `okaydb-infrastructure.html`

These may be reintroduced if sitemap changes.

---

**Created**: 2025-11-04
**Last Updated**: 2025-11-04
**Pages**: 13 active (5 Identity Verification + 4 User Screening + 4 Additional Verification)
**Archived**: 3 pages
**Total Images**: 90+ across all pages

---

[← Back to Main Documentation](../README.md)
