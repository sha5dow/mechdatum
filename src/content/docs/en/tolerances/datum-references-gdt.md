---
title: "Datum references GDT drawings"
sidebar:
  label: "Datum references GDT drawings"
description: "Technical reference: Datum references GDT drawings"
keywords: ["GDT datum reference frame primary secondary", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "datum-references"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-25"
verified: true
---
A datum reference in GDT drawings establishes a three-dimensional coordinate system that restricts up to 6 degrees of freedom of the part, defining the origin from which geometric tolerances such as position, orientation, or profile are controlled. The correct selection of the datum reference frame (DRF) is essential to ensure functionality, assembly, and repeatability in manufacturing and inspection.

## Fundamental principles of datum in GDT
A datum is an actual geometric feature of a part (surface, axis, mid-plane, point) that acts as a reference to define the nominal geometry and measure deviations. The typical datum reference frame consists of three mutually perpendicular planes, identified as primary datum (A), secondary datum (B), and tertiary datum (C), capable of eliminating the 6 degrees of freedom.

The functional selection of datums should reflect how the part mounts or contacts others in the assembly. Manufacturing datums may differ from functional ones for cost and repeatability reasons, requiring a tolerance analysis for conversion.

## Standardized symbols for datums
Datums are indicated by a filled equilateral triangle (ASME) or unfilled (ISO) resting on the reference surface or on an extension line, accompanied by a capital letter inside a square frame. When the reference is not a complete surface, datum targets are used with a point, line, or area.

| Symbol | Meaning | Typical use |
| --- | --- | --- |
| ▸ A | Primary datum A | Flat surface restricting 3 degrees of freedom |
| ▸ B | Secondary datum B | Surface perpendicular to A restricting 2 additional degrees |
| ▸ C | Tertiary datum C | Surface perpendicular to A and B restricting the last degree |
| ◇ A1 | Datum target (point) | Reference on inaccessible or rough surfaces |
| ⊂ ⊃ | Datum zone frame (area) | Specification of contact area for inspection |

## Datum reference frame (DRF): primary, secondary and tertiary
The DRF orders the datum references A, B, C in the sequence that appears within the feature control frame, separated by hyphens. The primary datum always appears first and eliminates the greatest number of degrees of freedom (minimum 3), while the tertiary eliminates the fewest (usually 1). The sequence directly influences the orientation of the part during measurement.

| Datum type | Degrees of freedom restricted | Detail |
| --- | --- | --- |
| Primary plane A | 3 (1 translation, 2 rotations) | Translation normal to the plane, rotation about the two axes contained in the plane |
| Secondary plane B | 2 (1 translation, 1 rotation) | Translation along the longest axis, rotation about the axis perpendicular to plane A |
| Tertiary plane C | 1 (1 translation) | Translation along the remaining axis |
| Primary cylinder (axis) | 4 (2 translations, 2 rotations) | Translations perpendicular to the axis, rotations about axes perpendicular to the axis |
| Secondary cylinder | 2 (1 translation, 1 rotation) | Axial translation, rotation about the cylinder axis |

## Material requirements (MMR and LMR) in datum references
Material modifiers adjust the tolerance zone based on the actual state of the datum feature, optimizing assembly capability without sacrificing functionality. The symbol Ⓜ (M inside a circle) indicates maximum material requirement (MMR), while Ⓛ (L inside a circle) indicates least material requirement (LMR).

When MMR is applied to a datum, the reference is formed by the virtual condition of the datum element, allowing additional shift (datum shift) if the datum element departs from its maximum material. This results in an increase of the geometric tolerance of the controlled feature without violating the assembly condition.

- **MMR on datum**: the datum is simulated at its maximum material virtual condition (MMVC). If the datum element has more clearance, the part can shift up to the virtual limit, expanding the location tolerance of the feature.
- **LMR on datum**: used to protect minimum wall thicknesses. The datum is established at the least material condition, ensuring that critical sections are not reduced.

## Examples of industrial application
In an automobile wheel hub, the bolt hole pattern defines a bolt circle that acts as the primary datum. From it, the concentricity of the rim and tire is controlled, ensuring the assembly rotates without vibration. The primary datum restricts 4 degrees of freedom; a flat support surface acts as secondary (1 translation) and a guide hole as tertiary (1 final rotation).

Another typical case is a base plate with two pin holes. The bottom face is designated datum A (primary), which supports the plate on the horizontal plane. A pin in one hole is established as datum B (secondary) restricting two translations, while the second aligned hole becomes datum C (tertiary) restricting the remaining rotation. The assembly ensures a unique position and orientation for machining position tolerances with the sequence A|B|C.

## Comparison between systems: ISO (5459) vs ASME (Y14.5)
Although both systems define datum reference frames with a similar philosophy, there are differences in interpretation and notation detail.

| Aspect | ISO 5459 | ASME Y14.5 |
| --- | --- | --- |
| Datum symbol | Unfilled triangle and letter | Filled triangle and letter |
| DRF ordering | Sequence indicated by a hyphen inside the feature control frame (e.g. A-B-C) | Sequence written separated by commas or vertical bars (e.g. A, B, C or A\|B\|C) |
| Datum targets | Require specifying the target shape (point, line, area) with full dimensioning | Same indication, but allows a generic symbol when shape is not critical |
| Material modifiers | MMR (Ⓜ), LMR (Ⓛ), both on datum if applicable | Only MMC (Ⓜ) on datum; LMC is limited to the controlled feature, rarely on datum |
| Virtual datum interpretation | Virtual condition recalculated with the same principle, but part simulation in inspection may differ depending on associated verification standard | Explicitly defines datum shift based on actual size of datum element, without ambiguity |
| Degrees of freedom | Sequence A-B-C always restricts 6 degrees, but the standard allows explicitly declaring unused degrees of freedom | Similar, but default sequence assumes full restriction unless "6 partial degrees" is indicated with modifiers |

## Frequently Asked Questions (FAQ)
### What is the difference between a datum and a datum feature?
A datum is the ideal reference plane, axis, or point established from the datum feature, which is the real physical surface or element of the part. The datum feature must be accessible, functional, and suitable to support measurement.

### How is the primary datum selected for a part?
The surface with the largest contact area in the assembly that restricts at least one translation and two rotations is chosen. Generally it is the face that first contacts in the assembly.

### Why is the sequence of datums in the feature control frame critical?
The sequence defines the order of restriction of degrees of freedom. A part with DRF A|B|C is oriented differently than B|A|C; changing the order modifies the measurement and may incorrectly validate or reject parts.

### When is the maximum material requirement (MMR) applied in the datum reference?
When it is desired to take advantage of the clearance of the datum element (for example, a hole) to allow additional shift that increases the position tolerance of a feature, provided that assembly is not compromised.

### Is a datum in ASME Y14.5 the same as in ISO 5459?
Essentially the concept is equivalent, but they differ in graphical symbols, DRF notation, and the application of material modifiers on the datum. See the comparison table in the guide for details.

### How are datums simulated during measurement with a coordinate measuring machine?
Probes or physical support surfaces (verification granite, expanding cylinders) are used that represent the virtual condition of the datum. The software aligns the machine's coordinate system with the planes or axes defined by those probes, establishing the measurement origin.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/beams-fixed-both-ends-support-loads-deflection-d_809.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
