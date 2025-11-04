# Income & Address Proofing

## Overview

Proof of Income (POI) and Proof of Address (POA) allow businesses to verify the user's income status and residential address by scanning relevant documents using their mobile phones.

## Use Cases

### Financial Sector
Loan applicants can submit income details to prove creditworthiness:
- Salary verification for mortgage applications
- Income assessment for personal loans
- Credit limit determination
- Lending risk evaluation

### Real Estate Industry
Landlords can evaluate potential tenants' attractiveness:
- Verify monthly income statements (pay stubs)
- Alternative to credit scores
- Assess ability to pay rent
- Reduce tenant default risk

### Internet Service Providers
POA minimizes errors in user-submitted addresses:
- Reduce missed appointments
- Minimize rescheduling costs
- Ensure accurate service delivery
- Improve installation success rates

### Digital Enterprise Services
POA serves as a layer of protection:
- Dissuade customers from breaching terms of service
- Verify business address for B2B services
- Ensure service delivery accuracy
- Prevent fraud in enterprise accounts

## Steps Involved

### 1. Collection
User takes a photo of the supporting document using their mobile phone:
- Utility bills
- Tax forms
- Pay stubs
- Bank statements
- Government correspondence

**Quality checks in place:**
- Image size requirements
- Lighting detection
- Font legibility verification
- Document orientation
- Edge detection

### 2. Verification
Captured media runs through automated processes to determine authenticity:
- Advanced algorithms ensure document is not spoofed
- Detect photoshopped documents
- Identify photocopied documents
- Check for screen displays
- Verify document security features

### 3. Extraction
Using Optical Character Recognition (OCR) technology:
- Extract relevant information (address, income details)
- Validate data format
- Check data consistency
- Compare against expected patterns

Data is then channeled to the [OkayDB](../modules/okaydb.md) component, which may:
- Store data in predetermined database
- Compare against other databases
- Cross-reference with government sources
- Validate address with postal services

## Currently Supported Documents

### Malaysian Documents (Expandable)
- **KWSP Statements** - Employee Provident Fund statements
- **LHDN Receipts** - Inland Revenue Board receipts (tax documents)
- **TNB Bill** - Tenaga Nasional Berhad (utility bills)

Support can be expanded depending on unique business needs and requirements.

## Benefits

### For Businesses
- **Automated verification** - Reduce manual document checking
- **Fraud prevention** - Detect fake or altered documents
- **Cost reduction** - Eliminate need for physical document verification
- **Faster processing** - Real-time OCR extraction
- **Compliance** - Meet regulatory documentation requirements
- **Scalability** - Handle high volumes efficiently

### For Users
- **Convenience** - Submit documents from anywhere using mobile phone
- **Speed** - Instant document submission and verification
- **No physical mail** - Eliminate need to send documents by post
- **Accessibility** - 24/7 document submission capability

## Technical Features

- **OCR Technology** - Accurate text extraction from documents
- **Image Quality Checks** - Ensure readable documents
- **Anti-Spoofing** - Detect fake or altered documents
- **Multi-Format Support** - Various document types accepted
- **Mobile-First** - Optimized for smartphone cameras
- **Real-Time Processing** - Instant verification results

## Integration with EMAS CIDA

Income & Address Proofing is part of the [EMAS CIDA](../products/emas-cida.md) Features Layer, specifically under **Customer Due Diligence** to determine if users are qualified for business services.

## Security & Privacy

- Encrypted document transmission
- Secure storage in [OkayDB](../modules/okaydb.md)
- Compliance with data protection regulations
- Access control and audit logs
- Document retention policies

---

**Related Documentation:**
- [EMAS CIDA Framework](../products/emas-cida.md)
- [Financial Risk Checks](./financial-risk-checks.md)
- [OkayDB Module](../modules/okaydb.md)
- [OkayID Module](../modules/okayid.md)

[← Back to Navigation](../README.md)
