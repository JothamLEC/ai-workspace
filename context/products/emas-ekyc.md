# EMAS eKYC

## What is EMAS eKYC?

Electronic Know Your Customer (eKYC) is a digital process that helps businesses verify customer identities remotely without human intervention.

**EMAS eKYC** is Innov8tif's proprietary brand of eKYC systems that uses advanced technology to provide comprehensive identity verification.

Customers can complete the verification process online using their computer or mobile device. eKYC is a secure and convenient way for businesses to comply with regulatory requirements while providing a seamless customer experience.

## Applications & Use Cases

- Digital customer onboarding or account opening
- Authenticating high-value online transactions (fund transfers, password changes, etc.)
- Complying with Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations
- Authenticate online account access for secure portals, government services, and sensitive information

## Industries that Benefit from eKYC

- Banking and finance
- Telecommunications
- Healthcare
- Insurance
- E-commerce
- Online gaming
- Any industry that needs to verify customer identities

## eKYC Process Steps

Each eKYC journey is customizable to your business's unique needs. This represents a basic user onboarding process:

1. **Create Journey ID**
   - A unique identifier is created for each eKYC journey
   - Tracks progress of the account application and associated data
   - Same user can have multiple Journey IDs if previous attempts failed

2. **Document Capture** → [OkayID Module](../modules/okayid.md)
   - Customer captures images of ID documents (passport, driving license, etc.)
   - Details automatically extracted using Optical Character Recognition (OCR)
   - Supports full name, ID number, birthday, and more

3. **Liveness Detection** → [OkayLive Module](../modules/okaylive.md)
   - Ensures customer is physically present and not using static images or recordings
   - Innov8tif uses **passive liveness detection** - a simple selfie suffices
   - Prevents screen and print spoofing tactics used by fraudsters
   - No awkward movements required (unlike competitors)

4. **Facial Verification** → [OkayFace Module](../modules/okayface.md)
   - Facial matching algorithms compare customer's facial features with ID photo
   - Ensures the person performing the selfie is the owner of the ID document
   - 99.50%+ accuracy with 0.000001 false match rate

5. **Document Verification** → [OkayDoc Module](../modules/okaydoc.md)
   - Verifies ID document authenticity
   - Checks for tampering, fakes, prints, or spoofs
   - Examines watermarks, holograms, fonts, and security features

6. **Database Checks** → [OkayDB Module](../modules/okaydb.md)
   - Checks customer details against various databases
   - Sanctions lists, PEP lists, credit scores, etc.
   - Identifies high-risk individuals or entities

7. **Generating Scorecard**
   - Scorecard generated based on all authenticity checks and assessments
   - Determines pass/fail/caution status
   - Each company sets requirements based on risk tolerance and regulations

## EMAS eKYC Modules

| Solution | Innov8tif Module | Description |
|----------|------------------|-------------|
| Document Capture | [OkayID](../modules/okayid.md) | Data capture via OCR/NFC |
| Liveness Detection | [OkayLive](../modules/okaylive.md) | Passive liveness verification |
| Document Verification | [OkayDoc](../modules/okaydoc.md) | AI-powered document authentication |
| Facial Verification | [OkayFace](../modules/okayface.md) | Face matching with 99.5%+ accuracy |
| Database Checks | [OkayDB](../modules/okaydb.md) | Third-party API integration |

## Key Differentiators

- **Comprehensive anti-fraud solution** - ~20 security checks in ASEAN
- **Passive liveness detection** - Better user experience than competitors
- **High accuracy** - 99.50%+ facial recognition accuracy
- **Complete automation** - No human touchpoints needed
- **Faster and more secure** - vs. traditional or video KYC
- **Modular approach** - Customize based on specific needs

## Business Benefits

### For Businesses
- Eliminates manual data entry costs
- 24/7 digital services without human staff
- Automated regulatory compliance (KYC/AML)
- Advanced fraud prevention
- Scalable and integration-ready

### For Customers
- Complete verification from anywhere using smartphones
- Real-time processing and instant feedback
- No need to visit physical branches
- Enhanced security through biometrics

---

**Related Documentation:**
- [EMAS CIDA Framework](./emas-cida.md)
- [All eKYC Modules](../README.md#ekyc-modules-okay-prefix)
- [Company Overview](../company-overview.md)

[← Back to Navigation](../README.md)
