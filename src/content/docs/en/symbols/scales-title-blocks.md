---
title: "Scales and title blocks"
sidebar:
  label: "Scales and title blocks"
description: "Technical reference: Scales and title blocks"
keywords: ["drawing scales title block ISO standard", "symbols"]
category: "symbols"
topic: "drawing-symbols"
subcategory: "scales-title-block"
skill: "standards-guide"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
In technical drawing, standard scales range from 1:1 for full-size representation down to 1:2500 reductions for site plans, while the standard title block is organized in a drawing frame whose recommended minimum dimensions are 180 mm wide by 55 mm high (7.09 in × 2.17 in) on a vertical A4 format.

## Standard symbolism

The designation of scales on technical drawings is made using a numerical notation that includes more than fifteen standardized relationships, while the title block is graphically represented as a rectangular area subdivided into regulated fields. The following table lists the fundamental symbols and their application.

| Symbol (text representation) | Meaning | Reference standard | Application example |
| --- | --- | --- | --- |
| `1 : 1` | Full scale – the drawing has the same dimensions as the actual part. | ISO 5455 | Detail drawing of a small mechanical bracket. |
| `1 : 2` / `1 : 5` / `1 : 10` | Reduction scales for medium-sized parts. | ISO 5455 | Assembly drawing of a mechanical assembly. |
| `1 : 20` / `1 : 50` / `1 : 100` | Typical scales for floor plans and general arrangement drawings. | ISO 5455, ASME Y14.100 | Architectural plan of a single-family house. |
| `1 : 200` / `1 : 500` / `1 : 1000` | Reduction scales for site and parcel plans. | ISO 5455 | Location plan of an industrial plant. |
| `1 : 1250` / `1 : 2500` | Scales for block plans and urban planimetry. | ISO 5455 | Cadastral plan of a municipal sector. |
| `2 : 1` / `5 : 1` / `10 : 1` | Enlargement scales for tiny details. | ISO 5455 | Enlarged drawing of a micrometer thread profile. |
| `SC.` in title block | Mandatory title block field where the main scale of the drawing is inscribed. | ISO 7200, ASME Y14.1 | Any formal manufacturing or construction drawing. |
| `┌──────────────────────┐`<br>`│ TITLE      │                     │`<br>`│            │           SC.   │`<br>`│ DRAWN      │                     │`<br>`│ DATE       │    DWG NO.       │`<br>`└──────────────────────┘` | Minimum scheme of the standard title block (drawing frame) with identification, scale, and numbering fields. | ISO 7200, ASME Y14.2 | Title block of a horizontal A3 format for a welded assembly. |

## Design principles

Scale selection is governed by the size of the object and the dimensions of the drawing format, ensuring that after applying the scale factor the representation occupies at least 70 % of the available area and leaves minimum margins of 20 mm / 0.79 in on the non‑binding edges. The title block, in turn, follows a standardized grid whose total width is fixed (e.g., 180 mm / 7.09 in for A4 formats) and is placed in the lower right corner of the sheet.

### Recommended scales by document type

| Drawing type | Common metric scales | Equivalent imperial scales |
| --- | --- | --- |
| Details, enlargements | 1:1, 2:1, 5:1, 10:1 | 1/1, 2/1, 4/1, 8/1 |
| Components, subassemblies | 1:1, 1:2, 1:5, 1:10 | 1/1, 1/2, 1/4, 1/8 |
| Floor plans, general arrangement | 1:20, 1:50, 1:100 | 1/16"=1'-0", 1/8"=1'-0", 1/4"=1'-0" |
| Site plans | 1:200, 1:500, 1:1000 | 1"=20'-0", 1"=50'-0", 1"=100'-0" |
| Development plans, local maps | 1:1250, 1:2500 | 1"=100'-0", 1"=200'-0" |
| Ordnance Survey‑type maps | 1:10 000, 1:25 000, 1:50 000, 1:100 000 | 1"=833'-0", 1"=2083'-0", 1"=4167'-0", 1"=8333'-0" |

### Title block fields and dimensions

The following values correspond to the title block layout according to ISO 7200 on a vertical A4 format with a binding margin of 20 mm / 0.79 in on the left. The width of the title block coincides with the drawing area; the height is distributed in modules of 10 mm / 0.39 in.

| Field | Width | Height | Typical content |
| --- | --- | --- | --- |
| Identification (owner) | 20 mm / 0.79 in | 25 mm / 0.98 in | Logo, company name |
| Drawing title | 80 mm / 3.15 in | 25 mm / 0.98 in | Project or part name |
| Scale | 20 mm / 0.79 in | 25 mm / 0.98 in | `SC. 1:50` |
| Drawing number | 40 mm / 1.57 in | 25 mm / 0.98 in | `A3-PL-001` |
| Status area (revision, approval) | 180 mm / 7.09 in | 30 mm / 1.18 in | Revision table with dates and signatures |

## Engineering applications

In professional engineering practice, scales and standard title blocks are used together in all technical documents that form part of a project, from concept drawings to as‑built drawings. A workshop drawing of a steel structure, for example, is drawn at a scale of 1:20 or 1:10 so that connection details are legible; its title block contains the element name, drawing number, main scale, issue date, and the signatures of design, review, and approval. When the same drawing contains details at a different scale, each partial view carries its own scale indication (`SC. 1:5`), while the main scale in the title block corresponds to the general view. In civil construction projects, floor plans are drawn at 1:50 or 1:100, site plans at 1:200 or 1:500, and utility network plans at 1:1000, all with title blocks that follow the same standard structure, facilitating filing, consultation, and traceability of the documentation.

## Frequently Asked Questions (FAQ)

### What scale should I choose for an architectural floor plan?
The most common scales for floor plans are 1:50 (where 1 cm on the drawing equals 50 cm / ≈20 in in reality) and 1:100; the choice depends on whether furniture details or only the general layout need to be shown.

### What exactly does the designation "1:50" mean?
The designation "1:50" is a reduction scale indicating that each unit of measurement on the plan (e.g., 1 cm) corresponds to 50 real units (50 cm / 19.69 in); therefore, actual dimensions are obtained by multiplying the drawing measurement by 50.

### Is it mandatory to indicate the scale in the title block?
Yes, the main scale of the drawing is a mandatory field in the title block according to ISO 7200 and ASME Y14.100, and must be preceded by the abbreviation "SC." even if the drawing is at full scale (1:1).

### Which standard governs title block design in the ISO system?
The standard title block is regulated by ISO 7200, which defines the field layout, the minimum title block size (180 mm wide × 55 mm high / 7.09 in × 2.17 in on A4), and mandatory and optional content.

### Where is the title block placed on the drawing sheet?
The title block is always located in the lower right corner of the format, adjacent to the right and lower margins, occupying the full width of the drawing area (160 mm / 6.30 in on a horizontal A4 with a binding margin of 20 mm / 0.79 in).

### Can I use different scales on the same drawing?
Yes, when a drawing contains views or details at scales different from the main scale, each detail must carry its own scale indication (e.g., "SC. 1:5") noted next to the view, while only the scale of the general view is entered in the title block.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/scaling-blueprint-drawings-d_1704.html
- **iso.org**: https://www.iso.org/ics/01.100.html
- **asme.org**: https://www.asme.org/getmedia/c01c0ea7-6496-4776-9fd7-d04c058d41cd/35101.pdf
