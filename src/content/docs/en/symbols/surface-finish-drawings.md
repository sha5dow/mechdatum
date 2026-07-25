---
title: "Surface finish symbols drawings"
sidebar:
  label: "Surface finish symbols drawings"
description: "Technical reference: Surface finish symbols drawings"
keywords: ["surface finish symbols Ra drawing interpretation", "symbols"]
category: "symbols"
topic: "drawing-symbols"
subcategory: "surface-finish"
skill: "standards-guide"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
Surface roughness Ra is specified in 80 % of mechanical manufacturing drawings as a control parameter, with values ranging from 0.012 µm / 0.5 µin (optical mirrors) to 50 µm / 2000 µin (raw casting). Standardized surface finish symbols allow texture requirements to be communicated unambiguously between design, manufacturing, and quality control. Below is the complete interpretation of this symbology according to current ISO and ASME standards.

## Standardized Surface Finish Symbols

The basic graphical representation is built from a 60° inclined stroke with a horizontal support line. The fundamental symbols are shown in the following table, together with their meaning and reference standard.

| Symbol (text representation) | Meaning | Reference standard | Example of application |
| --- | --- | --- | --- |
| `√` | Surface without indication of manufacturing process (basic symbol). | ISO 1302, ASME Y14.36 | Assembly drawing where only the reference surface needs to be identified. |
| `√̅` (added upper line) | Surface obtained by chip removal (machining mandatory). | ISO 1302, ASME Y14.36 | Turned steel shaft where material removal is required. |
| `√̊` (circle at the vertex) | Surface without chip removal (machining prohibited). | ISO 1302, ASME Y14.36 | Stamped aluminum sheet that must retain its original surface layer. |
| `(√)` (circle around the entire contour) | Surface finish on all surfaces of the part contour. | ASME Y14.36 | Metal gasket where all faces require the same texture. |
| `√` + number above the horizontal | Roughness Ra in µm or microinch (µin). | ISO 1302, ASME B46.1 | Bearing surface with Ra 3.2 µm / 126 µin. |
| `√` + two numbers separated by a slash | Ra/Rz or Ra/Rmax. | ISO 1302 | Friction bearing with Ra 0.8 µm / 32 µin and Rz 4 µm / 160 µin. |

## Surface Roughness Parameters

The most common profilometric roughness parameters are collected under ISO 4287 and ASME B46.1. The following table summarizes their frequently used values in industrial applications.

| Parameter | Symbol | Unit (metric / imperial) | Description |
| --- | --- | --- | --- |
| Arithmetic mean roughness | Ra | µm / µin | Arithmetic average of the absolute deviations of the profile from the mean line. |
| Maximum profile height | Rz (ISO 4287) | µm / µin | Average distance between the five highest peaks and the five deepest valleys over the evaluation length. |
| Total profile depth | Rt (or Rmax) | µm / µin | Difference between the highest peak and the deepest valley over the entire evaluation length. |
| Root mean square roughness | Rq | µm / µin | Standard deviation of the profile height distribution, more sensitive to isolated peaks than Ra. |
| Skewness | Rsk | dimensionless | Indicates whether the surface is dominated by peaks (Rsk > 0) or valleys (Rsk < 0). |

## Interpretation on Drawings

The surface finish symbol is placed on the surface to be controlled, resting its horizontal line on the visible edge of the part or on an extension line. The dimension arrow may be in contact with the surface or with a reference line.

Up to four additional indications can be placed around the basic symbol:
- Above the horizontal line: Ra value (e.g., 1.6) or Ra/Rz combination, in micrometers if no unit is indicated.
- Below the horizontal line, on the left: waviness parameter (generally preceded by "W").
- Below the horizontal line, on the right: direction of machining lay (e.g., "=", "⊥", "M" for multidirectional).
- To the right of the symbol, at the same height: manufacturing method or prohibited process (e.g., "MILLING", "DO NOT GRIND").

When a single numerical value is specified (e.g., 3.2), it represents the upper roughness Ra limit allowed. If a range is required, two values separated by a dash are written (0.8 – 1.6 µm).

## Examples of Application on Real Drawings

In industrial practice, surface finish symbols are combined with dimensions and geometric tolerances to ensure correct part function. Typical application cases are presented below.

| Component | Symbol used | Roughness requirement | Practical interpretation |
| --- | --- | --- | --- |
| Bearing seat on shaft | `√̅` 0.8 | Ra ≤ 0.8 µm / 32 µin | Machining mandatory; precision grinding. |
| Sealing surface for O-ring | `√` 1.6 | Ra ≤ 1.6 µm / 63 µin | Without chip removal; surface obtained by precision forging. |
| Pipe flange, all contact faces | `(√)` 3.2 | Ra ≤ 3.2 µm / 126 µin over the entire contour | Surface finish on the complete flange profile. |
| Planed wood, two faces and one edge | S2S1E | — | Carpentry abbreviation: S2S (Smooth two sides), 1E (one edge). |
| Tongue and groove wood for flooring | D & M, T & G | — | Dressed and Matched, Tongue and Grooved: planed and tongue-and-grooved. |

## Frequently Asked Questions (FAQ)

### What does the √ symbol mean on an engineering drawing?
### What is the difference between Ra and Rz in roughness specification?
### How is it indicated that a surface must be machined without specifying the roughness?
### Which standard regulates surface texture symbols on drawings, ISO or ASME?
### How is a surface finish symbol with a circle at the vertex interpreted?
### What do the abbreviations S2S or S4S mean on carpentry drawings?

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/lumber-surface-finish-abbreviations-d_1720.html
- **iso.org**: https://www.iso.org/sectors/engineering/drawings-symbols
- **asme.org**: https://www.asme.org/codes-standards/find-codes-standards/y14-36-surface-texture-symbols
