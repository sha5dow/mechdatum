---
title: "Complete ISO welding symbols"
sidebar:
  label: "Complete ISO welding symbols"
description: "Technical reference: Complete ISO welding symbols"
keywords: ["complete ISO welding symbol reference", "symbols"]
category: "symbols"
topic: "welding-symbols"
subcategory: "iso-symbols-complete"
skill: "standards-guide"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
Welding symbols governed by the ISO 2553 and ISO 4063 standards constitute a universal graphic language to unambiguously specify welded joints in manufacturing drawings. Each symbol is built on a reference line that includes an arrow pointing to the joint and an optional tail for supplementary annotations. This guide presents the exhaustive list of basic, supplementary and finishing symbols according to the ISO system, along with real application examples.

## Elements of the welding symbol according to ISO 2553
The complete symbol is composed of 5 fundamental elements, all standardized:
1.  **Reference line:** Continuous horizontal line.
2.  **Arrow:** Inclined line that starts from the reference line and points directly to the joint to be welded.
3.  **Basic symbol:** Indicates the geometry of the weld cross-section and is placed above the reference line (side opposite the arrow) or below it (arrow side).
4.  **Fork/Tail:** Optional V-shaped element at the end of the reference line to include the welding process, filler metal or other instructions.
5.  **Dimensions and supplementary symbols:** Figures and marks that define the size, length, pitch, contour and surface finishes.

## Basic welding symbols
These symbols describe the cross section of the joint and are placed in the corresponding position of the reference line. The following table presents the 8 most common standardized symbols.

| Symbol | Meaning (Designation) | Reference standard | Example of application in drawing |
| --- | --- | --- | --- |
| ▼ (Simple symmetrical V-stroke) | V-groove weld | ISO 2553-2:202X | Butt joint in 5 mm / 0.197 in plate; symbol ▼ below line, dimension "s5" above line. |
| ┘ (45° stroke on one side) | Single-bevel weld (1/2 V) | ISO 2553-2:202X | Single-angle preparation; symbol ┘ above line for bevel on the opposite side of the arrow, dimension "a3". |
| └─ (Hollow right triangle) | Fillet weld | ISO 2553-2:202X | T-joint between beam and column; symbol └─ below line, dimension "a4" (throat 4 mm / 0.157 in). |
| ⌵ (Semicircle) | U-groove weld | ISO 2553-2:202X | Full penetration joint in carbon steel; symbol ⌵ on both sides of the line, with dimension "s12". |
| J (J-shaped symbol) | J-groove weld (single-sided groove) | ISO 2553-2:202X | Curved bevel in deposition; symbol J below line, dimension "a5". |
| ◎ (Filled or empty circle) | Plug or slot weld | ISO 2553-2:202X | Lap joint of body panels; symbol ◎ below line accompanied by "d10" (diameter 10 mm / 0.394 in). |
| ● (Thick dot) | Spot weld (resistance or arc) | ISO 2553-2:202X | Joint of reinforcements in appliances; symbol ● below line, dimension "e3" (pitch 3 mm / 0.118 in). |
| ∏ (Two vertical lines) | Surfacing weld | ISO 2553-2:202X | Thickness recovery on worn shaft; symbol ∏ below line, notation of layer thickness. |

## Supplementary symbols
These symbols modify the shape of the weld bead and the execution of the weld, placed at the intersection between the reference line and the arrow.

| Symbol | Meaning | Reference standard | Example of application in drawing |
| --- | --- | --- | --- |
| ○ (Circle at intersection) | All-around weld (around entire workpiece) | ISO 2553-2 | Flanged pipe; symbol ○ at the corner next to a fillet └─, indicating continuous weld over 360°. |
| ⌒ (Flag or straight arc) | Field weld (field assembly) | ISO 2553-2 | IPE beam connection in steel construction; symbol ○ crossed out with a vertical line for field weld. |
| — (Horizontal line above the symbol) | Surface contour: flat or flush | ISO 2553-2 | Pressure vessel; the bevel symbol is accompanied by a top line, requiring subsequent grinding. |
| ⌢ (Concave curve) | Surface contour: concave | ISO 2553-2 | Fillet weld with deep penetration; fillet symbol with concave line above it. |
| ⌣ (Convex curve) | Surface contour: convex | ISO 2553-2 | Nozzle reinforcement; the fillet symbol has an upper arc indicating controlled bulge. |

## Surface finish symbols
These symbols, added on the weld symbol in the drawing, specify the machining or finishing method required to remove weld reinforcement or smooth the surface.

| Symbol | Meaning | Reference standard | Example of application in drawing |
| --- | --- | --- | --- |
| G | Grinding | ISO 1302 | The letter G is placed on the V-groove butt weld symbol to indicate grinding the reinforcement flush. |
| M | Machining (milling, turning) | ISO 1302 | On a fillet joint on a raceway, M is added to ensure a flat and smooth surface. |
| C | Chiseling or manual roughing | ISO 1302 | Used in the field on a groove weld when the specification requires removing slag from the root pass. |

## Standard dimensions and tolerances
Each cell of an ISO weld dimensional table must reflect the magnitude in the International System and its imperial equivalent. The main dimensions that accompany the basic symbol are the effective length and the throat or nominal thickness.

| Designation | Weld length (l) | Pitch between welds (e) | Effective throat (a) |
| --- | --- | --- | --- |
| 1.5a/b | 30 mm / 1.181 in | 150 mm / 5.906 in | 4 mm / 0.157 in |
| z8 | 85 mm / 3.346 in | ---- | (0.7 × 8) = 5,6 mm / 0.220 in (leg z value) |
| s10 | (continuous) | ---- | 10 mm / 0.394 in (full penetration) |
| d12 | 40 mm / 1.575 in (intermittent) | 100 mm / 3.937 in | ---- |

To calculate the nominal throat *a* in a non-symmetric fillet joint with unequal legs, the fundamental trigonometric relationship can be used.  
> **a = (z1 × z2) / √(z1² + z2²)**  
Where: *a* = throat, *z1* = length of the first leg (mm), *z2* = length of the second leg (mm).

## Examples of complete symbols in real drawings
The following practical cases show the integration of all normative elements in a single symbol arranged on the reference line.

1.  **All-around fillet weld on site:**
    Reference line with └─ (fillet symbol) on the arrow side, a circle ○ (all-around) at the intersection, and a flag ⌒ (field weld) above. The dimension "a4" is placed to the left and in the tail "ISO 4063 – 135" is written, indicating MAG welding. Meaning: fillet weld with throat 4 mm / 0.157 in around the entire contour, executed in the field with the MAG process.

2.  **V-groove butt weld with bevel and subsequent grinding:**
    Above the reference line, ▼ (V-groove symbol) is placed. To the right, a straight line "—" (flush contour) and the letter "G" (finish by grinding). Below the line, the dimension "s6" (penetration of 6 mm / 0.236 in) and the number "85/150" which defines welds 85 mm / 3.346 in long with a pitch of 150 mm / 5.906 in. Meaning: groove weld with penetration of 6 mm / 0.236 in, bevel on the arrow side, flush finish by grinding, with intermittent welds.

3.  **Spot weld for lap joint of thin sheets:**
    The symbol ● (spot) occupies the arrow side of the reference line. To its left is noted "d8" (spot diameter 8 mm / 0.315 in) and to the right "(5)" indicating the number of spots or a specific pitch sequence. Meaning: resistance spot weld with electrodes of 8 mm / 0.315 in contact diameter, executed in a workshop.

## Frequently Asked Questions (FAQ)
### What is the main difference between the ISO symbol system and the US AWS system?
### Where exactly is the welding symbol placed relative to the reference line?
### What does a filled black circle in the welding symbol indicate?
### How is a flag in the welding symbol interpreted?
### Is it mandatory to always fill the tail or fork of the symbol?
### Which ISO standard lists the abbreviations of welding processes?

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/isa-intrumentation-codes-d_415.html
