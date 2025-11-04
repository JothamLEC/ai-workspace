# OkayID

## What is OkayID?

OkayID is the **Data Capture** module of EMAS eKYC, automating the data-entry process for customer information.

## How it Works

The OkayID module first identifies the document type of the captured ID document, such as a driving license or passport. It then extracts user information from the ID document using:

- **Optical Character Recognition (OCR)** technology
- **Near Field Communication (NFC)** scans
- **Chip Readers**

The collected data is automatically populated into the respective fields, eliminating manual data entry.

## Why it Matters

### Traditional Approach Problems
Traditionally, companies employ:
- On-site employees for manual data entry
- Data-entry specialists for accuracy
- Human verification processes

**Limitations:**
- Expensive labor costs
- Restricted to office hours
- Subject to human error
- Not scalable

### OkayID Solution
OkayID removes the need for manual data entry work, helping businesses:
- Save time, costs, and resources
- Improve accuracy and compliance standards
- Provide 24/7 service availability
- Scale operations efficiently

## Features & Benefits

- **Automatic document type detection** - Identifies passport, driving license, national ID, etc.
- **Multi-language support** - Thai, Khmer, Roman characters, and numbers
- **OCR technology** - Extract text data from documents
- **Passport NFC scan** - Read embedded chip data
- **High accuracy** - Eliminates manual entry errors
- **Real-time processing** - Instant data extraction

## Supported Documents & Fields

- [List of supported fields](https://api2-ekycapis.innov8tif.com/okayid/okayid-all/field-type-reference/field-type-lists)
- [List of supported documents](https://api2-ekycportal.innov8tif.com/emas-ekyc-portal/supported-document-lists-for-okayid-and-okaydoc)

## Integration with Other Modules

OkayID is the first step in the eKYC journey:
1. **OkayID** - Captures document data
2. [OkayDoc](./okaydoc.md) - Authenticates the document
3. [OkayLive](./okaylive.md) - Verifies user liveness
4. [OkayFace](./okayface.md) - Matches face to document
5. [OkayDB](./okaydb.md) - Stores and checks data

---

**Related Documentation:**
- [EMAS eKYC Product](../products/emas-ekyc.md)
- [Next Module: OkayDoc](./okaydoc.md)
- [All Modules](../README.md#ekyc-modules-okay-prefix)

[← Back to Navigation](../README.md)
