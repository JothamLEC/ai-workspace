# Device Risk Screening

## Overview

Device Risk Assessment (also known as Device Blacklisting) flags devices that are known to be involved in criminal activities. This prevents fraudulent signup attempts and helps identify criminal activities before they occur.

## How It Works

### 1. Database Cross-Reference
- During eKYC process, module captures device's unique ID
- Device ID cross-checked with database of known criminal devices
- Real-time matching against blacklist

### 2. Login Monitoring
- Device blacklisting also runs when user attempts login from new device
- Continuous monitoring throughout user lifecycle
- Detects device changes that may indicate account takeover

### 3. Threat Detection
- If device ID matches blacklist, system flags user
- Module prevents user from accessing platform
- Company notified of potential fraud threat
- Security team alerted for investigation

### 4. Appeal Process
Blacklisted users can appeal the decision through:
- [Video verification](./video-call-verification.md)
- Visiting physical branch
- Providing device ownership documentation
- Proving device is not involved in criminal activities

During appeal, user provides additional information to verify identity and demonstrate device legitimacy.

## Device Identification Methods

### Device Fingerprinting
Unique combination of device characteristics:
- Operating system and version
- Browser type and version
- Screen resolution
- Installed fonts
- Timezone and language settings
- Hardware specifications
- IP address and network info

See [Device Fingerprinting](./device-fingerprinting.md) for more details.

### Device IDs
Persistent device identifiers:
- Mobile device IMEI
- Android Advertising ID (AAID)
- Apple IDFA (Identifier for Advertisers)
- MAC address
- Device serial numbers

## Benefits

### Non-Intrusive User Experience
- Device blacklisting does not affect genuine customers
- Legitimate users proceed normally
- No additional verification steps for clean devices
- Transparent fraud prevention

### Fraud Deterrence
- Easy way to dissuade fraud attempts
- Requires fraudsters to obtain "clean" devices for each attempt
- Increases cost and complexity of fraud operations
- Reduces ROI for fraudsters

### Fully Automated
- Entirely automated process
- Manual intervention only for review and appeals
- Scales efficiently with business growth
- No additional staffing required

### Quick Detection
- Real-time device screening
- Instant fraud attempt identification
- Immediate access prevention
- Reduces fraud exposure window

## Use Cases

### Account Creation
- Screen new account registrations
- Block known fraud devices immediately
- Prevent synthetic identity fraud
- Identify coordinated fraud campaigns

### Login Monitoring
- Detect suspicious login attempts
- Identify account takeover attempts
- Flag device changes on existing accounts
- Continuous authentication throughout session

### Transaction Monitoring
- Screen high-value transactions
- Block transactions from risky devices
- Additional verification for flagged devices
- Prevent payment fraud

### Cross-Platform Protection
- Share blacklists across web and mobile apps
- Consistent fraud prevention across channels
- Unified security approach
- Comprehensive device tracking

## Industry Applications

### Banking & Finance
- Prevent fraudulent account opening
- Detect account takeover attempts
- Monitor transaction devices
- Protect against unauthorized access

### E-commerce
- Block fraudulent purchases
- Prevent payment fraud
- Identify bot networks
- Protect promotional abuse

### Telecommunications
- Prevent SIM card fraud
- Block device theft activities
- Identify stolen device usage
- Protect high-value purchases

### Online Gaming
- Detect banned player return attempts
- Identify cheating networks
- Prevent account farming
- Enforce terms of service

## Technical Features

### Real-Time Screening
- Instant device ID lookup
- Sub-second response times
- High-availability infrastructure
- Scalable to millions of checks

### Database Management
- Continuously updated blacklist
- Automatic threat intelligence integration
- Historical device activity tracking
- Cross-reference with fraud patterns

### API Integration
- Simple REST API integration
- Real-time device scoring
- Batch processing support
- Webhook notifications for new threats

## Integration with EMAS CIDA

Device Risk Screening is part of the [EMAS CIDA](../products/emas-cida.md) Features Layer, specifically under **ID Authentication** to ensure users are authorized to perform transactions.

## Related Features

Works in conjunction with:
- [Device Fingerprinting](./device-fingerprinting.md) - Identify unique device characteristics
- [Device Binding](./device-binding.md) - Link trusted devices to accounts
- [Biometric Alert List](./biometric-alert-list.md) - User-based blacklisting
- [Digital Footprint Analysis](./digital-footprint-analysis.md) - Additional fraud signals

## Privacy & Compliance

- **Data protection** - Secure device ID storage
- **User rights** - Appeal and removal process
- **Transparency** - Clear communication to users
- **Compliance** - GDPR and local privacy laws

---

**Related Documentation:**
- [EMAS CIDA Framework](../products/emas-cida.md)
- [Device Fingerprinting](./device-fingerprinting.md)
- [Device Binding](./device-binding.md)
- [Biometric Alert List](./biometric-alert-list.md)

[← Back to Navigation](../README.md)
