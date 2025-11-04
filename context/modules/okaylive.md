# OkayLive

## What is OkayLive?

OkayLive is EMAS eKYC's **Liveness Detection** module. It verifies if the user performing the selfie is a genuine human being, not a photo, video, or mask.

## How it Works

1. User captures a selfie using their mobile phone
2. OkayLive uses AI algorithms to scan the image
3. Algorithms authenticate the user's validity
4. Returns success or detailed error message

### Passive Liveness Detection

OkayLive uses **passive liveness detection**, which means:
- Users do NOT need to tilt or shake their heads
- No awkward movements required
- Just a simple selfie is sufficient
- Increases user journey completion rates

This is a significant advantage over competitors who require active liveness detection (head movements, blinking, etc.).

## Why it Matters

### The Spoofing Threat
Fraudsters commonly use spoofing techniques to bypass anti-fraud systems:
- Color-printed photos
- Tablet or phone screens
- Pre-recorded videos
- High-quality masks
- Deepfake videos

### OkayLive Solution
OkayLive prevents such spoofing attempts from occurring by:
- Detecting print artifacts
- Identifying screen moiré patterns
- Analyzing depth and 3D structure
- Checking for real human characteristics
- Validating genuine facial movements

## Features & Benefits

- **Passive liveness detection** - No user actions required
- **Improved user experience** - Higher completion rates
- **Real-time processing** - Instant verification
- **Comprehensive feedback** - Detailed error messages for debugging
- **High accuracy** - Advanced AI algorithms
- **Spoofing prevention** - Detects photo, video, and mask attacks

## Common Liveness Detection Errors

OkayLive provides detailed feedback when verification fails:
- Face not detected
- Multiple faces detected
- Face too small or too large
- Poor image quality
- Spoofing detected
- Insufficient lighting

[View complete error list](https://api2-ekycapis.innov8tif.com/okaylive/okaylive-all/error-lists)

## Passive vs. Active Liveness Detection

| Passive Liveness (OkayLive) | Active Liveness (Competitors) |
|------------------------------|-------------------------------|
| Simple selfie | Head tilting required |
| No user actions | Blinking required |
| Higher completion rates | Lower completion rates |
| Better user experience | Awkward user experience |
| Faster process | Slower process |
| Accessible for all users | Difficult for elderly/disabled |

## Integration with Other Modules

OkayLive is part of the eKYC verification sequence:
1. [OkayID](./okayid.md) - Captures document data
2. [OkayDoc](./okaydoc.md) - Authenticates the document
3. **OkayLive** - Verifies user liveness
4. [OkayFace](./okayface.md) - Matches face to document
5. [OkayDB](./okaydb.md) - Stores and checks data

## Resources

- [Common Spoofing Techniques](https://innov8tif.com/warning-dangers-of-spoofing-to-businesses-and-consumers/)
- [Liveness Detection Error Lists](https://api2-ekycapis.innov8tif.com/okaylive/okaylive-all/error-lists)
- [Liveness Detection Technology](../technologies/liveness-detection.md)

---

**Related Documentation:**
- [EMAS eKYC Product](../products/emas-ekyc.md)
- [Liveness Detection Technology](../technologies/liveness-detection.md)
- [Next Module: OkayFace](./okayface.md)

[← Back to Navigation](../README.md)
