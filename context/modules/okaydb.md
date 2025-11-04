# OkayDB

## What is OkayDB?

OkayDB is EMAS eKYC's **Database** module. It stores all information captured during the eKYC journey and accepts data from 3rd party API connections.

## Core Functions

### Data Storage
- Stores all eKYC journey information
- Maintains customer identity data
- Archives verification results
- Tracks journey history

### API Integration
Connects with third-party services for:
- License expiry status checks
- Credit score collection
- Digital footprint analysis
- Sanctions list screening
- PEP (Politically Exposed Persons) list checks
- Watchlist verification
- Financial risk assessment

## How it Works

1. **Data Collection** - Receives data from all Okay modules during eKYC journey
2. **Storage** - Securely stores customer information and verification results
3. **API Integration** - Connects to third-party databases for additional checks
4. **Data Retrieval** - Provides access to stored data for business operations
5. **Ongoing Verification** - Enables continuous customer due diligence

## Access & Administration

OkayDB can be accessed through the Portal Access Layer, allowing businesses to:
- Review customer verification records
- Search and retrieve customer data
- Monitor API usage and connections
- Generate reports and analytics
- Manage customer lifecycle data

## Features & Benefits

### Deployment Options
- **On-premise solution** - For maximum data control and security
- **Cloud solution** - For scalability and ease of management

### Search Capabilities
Search users by multiple criteria:
- Face data (facial recognition search)
- Full name
- Company name
- ID number
- Journey ID
- Custom fields

### Customizable Integrations
- **Flexible API connections** - Tailored to business needs
- **Partner network** - Local and international providers
- **Scalable architecture** - Grows with business requirements

### Data Security
- Secure storage of sensitive identity data
- Compliance with data protection regulations
- Encrypted data transmission
- Access control and audit logs

## Third-Party Integrations

Innov8tif has partnered with local and international providers to offer comprehensive API data integration options:

- **Financial Services** - Credit bureaus, bank verification
- **Government Databases** - Identity verification, sanctions lists
- **Risk Assessment** - Fraud detection, digital footprint analysis
- **Telecommunications** - SIM card registration verification
- **Healthcare** - Patient identity verification
- **Custom Integrations** - Business-specific requirements

Contact sales@innov8tif.com for more information about available integrations.

## Use Cases

### Customer Onboarding
- Store new customer identity data
- Verify against sanctions and PEP lists
- Check credit scores for financial services
- Archive verification results for compliance

### Ongoing Due Diligence
- Periodic re-verification of customer data
- Continuous monitoring of watchlists
- Updated risk assessments
- Compliance reporting

### Transaction Verification
- Real-time identity checks for high-value transactions
- Cross-reference with stored biometric data
- Fraud prevention through historical analysis

### Compliance & Auditing
- Maintain audit trails of all verifications
- Generate compliance reports
- Demonstrate regulatory adherence
- Support investigation and review processes

## Integration with Other Modules

OkayDB is the foundation of the eKYC ecosystem:
1. [OkayID](./okayid.md) - Sends captured document data to OkayDB
2. [OkayDoc](./okaydoc.md) - Stores authentication results in OkayDB
3. [OkayLive](./okaylive.md) - Saves liveness verification data to OkayDB
4. [OkayFace](./okayface.md) - Archives face matching scores in OkayDB
5. **OkayDB** - Central repository for all eKYC data and third-party checks

## Data Layer in EMAS CIDA

OkayDB forms part of the Data Layer in the [EMAS CIDA](../products/emas-cida.md) framework, where customer information is securely stored for use throughout the customer lifecycle.

---

**Related Documentation:**
- [EMAS eKYC Product](../products/emas-ekyc.md)
- [EMAS CIDA Framework](../products/emas-cida.md)
- [All Modules](../README.md#ekyc-modules-okay-prefix)

[← Back to Navigation](../README.md)
