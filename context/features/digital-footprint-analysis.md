# Digital Footprint Analysis

## Overview

Digital Footprint Analysis (DFA) is a feature that cross-checks a user's online presence and activity to help businesses address synthetic identity fraud. DFA uses web APIs and scorecards to verify the presence of online accounts associated with email addresses and phone numbers.

## How It Works

DFA analyzes a user's digital presence across multiple platforms to determine legitimacy:

1. **Data Collection** - Collect user's email address and phone number
2. **Platform Checking** - Query multiple social media and online platforms
3. **Presence Verification** - Confirm existence of accounts linked to provided credentials
4. **Scoring** - Generate legitimacy score based on digital footprint breadth and age
5. **Decision Support** - Provide score as input for onboarding decisions

## Supported Platforms

DFA can vet social media sites and e-commerce platforms including:
- Facebook
- Google
- LinkedIn
- Spotify
- Apple
- And more

For a full list of platforms, contact sales@innov8tif.com.

## The Problem: Validity vs. Legitimacy

### Traditional Methods (OTP and Confirmation Emails)
Confirmation emails and one-time passwords (OTPs) only verify the **validity** of email addresses and phone numbers:
- Whether they exist
- Whether user has access to them

### What They Miss: Legitimacy
Traditional methods do NOT verify **legitimacy**:
- Whether they are actively used by genuine users
- Whether they have established online presence
- Whether they belong to real or synthetic identities

### Synthetic Identity Fraud
This leaves companies vulnerable to synthetic identity theft, where fraudsters create false identities using:
- Combination of real (stolen) data
- Randomly generated information
- Newly created email addresses with no history

## Use Cases

### Strict Onboarding Requirements
User's legitimacy score contributes to account sign-up success criteria. Higher scores indicate more established online presence.

### Marketing Campaign Protection
Prevent reward abuse when running campaigns that offer:
- Free trials
- Promotional gifts
- Sign-up bonuses
- Referral rewards

DFA helps identify bulk fake account creation attempts.

### Account Update Reminders
For industries requiring regular contact information updates (insurance firms, healthcare):
- Send auto-reminders when digital footprint declines
- Target specific users instead of entire user base
- Proactively identify abandoned accounts

## Limitations

Digital footprints are **one of many data points** used to determine user legitimacy, but should not be the sole deciding factor.

### Fragmented Digital Presence
- Users with multiple personal email accounts have fragmented footprints
- Multiple SIM cards split digital presence
- Negatively affects legitimacy score despite being genuine users

### Digital Divide
- Not all consumers are digitally savvy
- Some lack numerous online accounts
- Especially true for underserved communities in rural areas
- Older generations may have limited digital footprint

### Recommendations
- Do NOT penalize genuine users for lacking online presence
- Use DFA as **supporting evidence**, not primary factor
- Consider lack of footprint suspicious only when combined with other red flags
- Evaluate throughout customer lifecycle, not just at onboarding

## Business Benefits

- **Synthetic identity detection** - Identify fake identities before account creation
- **Fraud prevention** - Block mass fake account creation
- **Cost savings** - Prevent reward abuse and promotional fraud
- **Risk assessment** - Additional data point for scoring and decisioning
- **Targeted communication** - Identify accounts needing attention

## Integration with EMAS CIDA

Digital Footprint Analysis is part of the [EMAS CIDA](../products/emas-cida.md) Features Layer, specifically under **ID Proofing** to verify user genuineness and combat synthetic identity fraud.

---

**Related Documentation:**
- [EMAS CIDA Framework](../products/emas-cida.md)
- [Financial Risk Checks](./financial-risk-checks.md)
- [Biometric Alert List](./biometric-alert-list.md)

[← Back to Navigation](../README.md)
