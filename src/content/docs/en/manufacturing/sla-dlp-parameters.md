---
title: "SLA DLP parameters and resins"
sidebar:
  label: "SLA DLP parameters and resins"
description: "Technical reference: SLA DLP parameters and resins"
keywords: ["SLA DLP resin 3D printing parameters resolution", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "sla"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-25"
verified: true
---
Vat photopolymerization, which encompasses SLA (stereolithography) and DLP (digital light processing) technologies, is an additive manufacturing process that solidifies photosensitive liquid resin layer by layer using ultraviolet light. The main difference lies in the light source: SLA uses a point UV laser to trace each layer, while DLP projects the flash of a complete layer using a digital projector, which accelerates construction. Both processes require post-curing to achieve final mechanical properties and removal of support structures generated during printing.

## Layer Thickness and Resolution by Technology

The typical layer thickness in SLA is 0.1 mm / 0.004 in, defining the resolution in the Z axis. The XY plane resolution depends on the laser spot diameter, generally close to 0.25 mm / 0.01 in. In DLP, the XY resolution is determined by the pixel size of the projector, potentially achieving finer resolutions up to 0.035 mm / 0.0014 in in high-end equipment, with layer thicknesses ranging from 0.025–0.1 mm / 0.001–0.004 in.

| Technology | Light source | Typical layer thickness | Typical XY resolution | Printing speed |
| --- | --- | --- | --- | --- |
| SLA | UV point laser (355 nm) | 0.025–0.1 mm / 0.001–0.004 in | 0.1–0.25 mm / 0.004–0.01 in | Depends on cross-sectional area; slower for large parts |
| DLP | UV projector (385–405 nm) | 0.025–0.1 mm / 0.001–0.004 in | 0.035–0.1 mm / 0.0014–0.004 in | Constant per layer; faster for multiple parts |

## Printing Parameters by Resin Type

Optimal printing parameters vary significantly according to the chemical formulation of the photosensitive resin. The exposure time per layer, light intensity, and lifting speed must be adjusted to ensure correct polymerization and adhesion between layers without generating overcuring.

| Resin Type | Exposure time per layer (Normal) | Recommended light intensity | Lifting speed (Lift/Retract) | Operating temperature |
| --- | --- | --- | --- | --- |
| Standard (gray/white) | 2–4 s at 50 µm | 15–20 mW/cm² | 60–100 mm/min / 100–150 mm/min (2.4–3.9 in/min / 3.9–5.9 in/min) | 25–30 °C / 77–86 °F |
| High strength (ABS-like) | 6–10 s at 50 µm | 15–25 mW/cm² | 40–65 mm/min / 80–100 mm/min (1.6–2.6 in/min / 3.1–3.9 in/min) | 25–35 °C / 77–95 °F |
| High temperature | 8–12 s at 50 µm | 20–30 mW/cm² | 30–50 mm/min / 60–80 mm/min (1.2–2.0 in/min / 2.4–3.1 in/min) | 30–35 °C / 86–95 °F |
| Flexible/Elastomeric | 5–8 s at 75 µm | 12–20 mW/cm² | 20–40 mm/min / 50–70 mm/min (0.8–1.6 in/min / 2.0–2.8 in/min) | 25–30 °C / 77–86 °F |
| Biocompatible (medical grade) | 3–6 s at 50 µm | 18–25 mW/cm² | 50–70 mm/min / 80–100 mm/min (2.0–2.8 in/min / 3.1–3.9 in/min) | 25–30 °C / 77–86 °F |

## Typical Achievable Tolerances

Dimensional accuracy in photopolymerization processes is typically in the range of ±0.1 to ±0.2% of the nominal dimension, with a practical minimum of ±0.1 mm / 0.004 in for small parts. Factors such as part orientation, volumetric shrinkage during post-curing, and support density critically influence the final tolerance. Shrinkage can cause warping, so controlled post-curing is recommended to minimize it.

## Process Advantages and Limitations

The SLA/DLP process is the most used for rapid prototyping due to its ability to generate complex geometries with excellent surface finish compared to other additive techniques.

**Advantages:**
- Excellent resolution and surface quality, minimizing the stair-step effect.
- Ability to produce fully watertight and isotropic parts in specific resins.
- Simple process without milling or masking steps.
- Wide variety of functional resins (rigid, flexible, high temperature).
- The unsolidified material can be recycled for new prints.

**Limitations:**
- Parts tend to be brittle and have a tacky surface if not properly post-cured.
- Prolonged post-curing times can induce warping.
- Support structures are required for overhangs, whose removal demands manual post-processing.
- Uncured materials are typically toxic and irritating; ventilation is essential.
- Higher material and vat maintenance cost than in deposition technologies such as FDM.

## Material and Process Selection Guide

The selection between SLA and DLP, and the resin type, depends on the required balance between precision, speed, and mechanical properties. The orientation of the part during construction is decisive: a vertical orientation maximizes surface resolution at the cost of time, while a horizontal orientation accelerates the process but magnifies the stair-step effect.

| Part Requirement | Recommended Technology | Suggested Resin Type | Selection Reason |
| --- | --- | --- | --- |
| Maximum precision and fine detail | SLA | Standard | The fine laser point guarantees maximum nominal resolution. |
| Rapid prototyping of multiple parts | DLP | Standard | Constant per-layer printing speed, ideal for batches. |
| Functional strength similar to ABS | SLA or DLP | High strength (ABS-like) | High toughness and moderate impact resistance. |
| Flexible parts such as gaskets or bellows | DLP | Flexible/Elastomeric | DLP handles the higher viscosities of these resins better. |
| Applications in contact with food or skin | SLA | Biocompatible | Certification for human contact, low post-cure toxicity. |

## Required Post-Processing

After printing, the part is removed from the vat and excess uncured resin is removed by washing with 90% or higher isopropyl alcohol (IPA). Next, the support structures generated during manufacturing for overhangs and weak extremities are manually or mechanically removed. Finally, the washed part is placed in a UV post-curing unit at a typical power of 60–120 W for 10 to 40 minutes. This step is critical to complete polymerization, as the original laser or projector does not have enough power to fully cure the resin. For aesthetic finishes, sanding allows removal of any remaining stair-step marks.

## Frequently Asked Questions (FAQ)

### What is the fundamental difference between SLA and DLP?
SLA uses a point ultraviolet laser beam that scans the area of each layer to solidify it, while DLP uses a digital projector that exposes the entire layer at once using a pixel screen, which generally makes it faster.

### Why is post-curing essential in SLA/DLP?
The light energy applied during printing is calibrated to solidify the resin just enough to ensure adhesion between layers, but it is insufficient to complete the polymerization reactions. Post-curing in a UV oven completes the cross-linking to achieve the final mechanical and thermal properties.

### What toxicity does uncured resin present?
Liquid resin is a chemical compound that is typically toxic and irritating to the skin and respiratory tract. It is imperative to handle it with nitrile gloves and work in an environment with forced ventilation or fume extraction.

### How is part warping avoided during post-curing?
Warping is minimized by optimizing the part orientation on the build platform, ensuring thorough washing to remove uncured residues, and using intermittent or low-intensity post-curing cycles instead of long continuous exposures.

### Is the use of supports always required in these technologies?
Yes, support structures are normally necessary. They are automatically generated to anchor the part to the platform and to geometrically support any overhang or island that would otherwise collapse as it is not supported by the previous layer.

### What printing orientation is most suitable?
There is no universal optimal orientation. Orienting the longitudinal axis of the part vertically maximizes surface quality by minimizing visible steps, but increases printing time. Horizontal orientation reduces time but magnifies the stair-step effect.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/slurry-transport-velocity-d_236.html
- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sla.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/digital-light-processing-dlp
