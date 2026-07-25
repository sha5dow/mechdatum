---
title: "Fatigue in welded joints"
sidebar:
  label: "Fatigue in welded joints"
description: "Technical reference: Fatigue in welded joints"
keywords: ["fatigue welded joints IIW classification", "mechanics"]
category: "mechanics"
topic: "fatigue"
subcategory: "fatigue-welded"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-25"
verified: true
---
The fatigue strength of welded joints does not have a direct relationship with the tensile strength of the base material. Even under moderate cyclic loads, geometric imperfections and residual stresses introduced by the welding process can initiate and propagate cracks leading to failure. Stress-life (S‑N) curves based on the IIW FAT classification system allow evaluating the service life of these components and are the basis for fatigue design of welded joints.

## Factors Affecting Fatigue Strength

### Welding Residual Stresses
Residual stresses generated during weld bead solidification add algebraically to the applied stresses, modifying the effective mean stress of the cycle and, consequently, the fatigue life. An increase in part thickness raises residual stress concentrations at the weld toe, reducing fatigue strength.

### Joint Geometry and Defects
Any irregularity —undercut, lack of penetration, slag inclusions, or porosity— acts as a stress concentrator and crack initiation point. The bead shape (toe entrance angle, reinforcement) significantly influences the effective stress concentration factor.

### Influence of Base Material
Unlike smooth components, in welded joints an increase in the static strength of the base material (yield or ultimate strength) does not necessarily translate into a proportional increase in fatigue strength, precisely because local discontinuities dominate fatigue behavior.

### Environment
Corrosive environments, especially seawater, accelerate crack growth rates and reduce the fatigue limit. Extreme temperatures and the presence of humidity can also adversely affect joint durability.

## S‑N Curves and FAT Classification System (IIW)

S‑N curves (also known as Wöhler curves) represent the nominal stress range Δσ as a function of the number of cycles to failure N. The IIW (International Institute of Welding) defines FAT classes as the characteristic stress range (in MPa) that produces a life of 2 × 10⁶ cycles with a 95 % survival probability.

The design curve takes the form of a straight line on a double logarithmic scale with slope m = 3 for high cycles and a slope change to m = 5 for very high cycles (above 10⁷ – 10⁸ cycles). The fundamental equation is:

> **Δσ_R = FAT · (2 × 10⁶ / N)^(1/m)**

Where:
| Variable | Description | Unit (SI / Imperial) |
|---|---|---|
| Δσ_R | Resistant stress range of the detail at N cycles | MPa / ksi |
| FAT | Fatigue class of the detail (characteristic strength at 2 × 10⁶ cycles) | MPa / ksi |
| N | Number of cycles to failure | – |
| m | Slope of the S‑N curve (usually m = 3) | – |

Some typical FAT classes for different welded joint geometries in structural steel are shown below:

| Construction Detail | FAT (MPa / ksi) |
|---|---|
| Rolled base plate (without welding) | 160 / 23.2 |
| Full penetration butt weld, ground flush, inspected | 112 / 16.2 |
| Full penetration butt weld, reinforcement retained | 90 / 13.1 |
| Fillet weld with transverse load, defect-free toe | 80 / 11.6 |
| Fillet weld with longitudinal load | 71 / 10.3 |
| T-joint with fillet weld, load on flange | 63 / 9.1 |
| Joints with stress concentrations (e.g., transverse stiffeners) | 50 / 7.3 |

## Calculation of Stress Range in the Welded Joint

Fatigue evaluation begins by determining the applied nominal stress range Δσ, which is compared with the resistant stress range Δσ_R of the corresponding FAT class. The basic formulas depend on the load type and weld geometry.

| Load Type | Diagram | Formula for Nominal Stress | Variables |
|---|---|---|---|
| Axial tension / compression in full penetration butt weld | Flat joint | σ = P / (l · t_p) | P = axial load, l = weld length, t_p = plate thickness |
| Tension in partial penetration butt weld | Reduced section | σ = P / (l · h_n) | h_n = penetration depth |
| Pure shear in fillet weld | Longitudinal fillet | τ = P / (2 · l · a) | a = throat thickness (usually 0.7 · leg) |
| Pure bending in butt weld | Bending moment M_b | σ = M_b / W = 6 M_b / (l · t_p²) | W = section modulus of welded section |
| Torsion on solid welded shaft | Torque M_t | τ = M_t / W_p, with W_p = π d³ /16 | d = shaft diameter |

Stress values must be expressed in consistent units: force in N or lbf, length in mm or in, resulting stress in MPa or psi.

## Practical Calculation Example

A bracket welded with two longitudinal fillet welds (leg z = 8 mm / 0.315 in) must transmit a cyclic tensile load varying between 0 and +80 kN (0 – 18 kip). The length of each weld is l = 120 mm / 4.72 in. The material is S355 steel and the detail corresponds to FAT 71 (fillet weld with longitudinal load, m = 3).

**Calculation of effective throat:**
a ≈ 0.7 · z = 0.7 × 8 mm = 5.6 mm / 0.22 in

**Total resistant area (two fillets):**
A_w = 2 · l · a = 2 × 120 mm × 5.6 mm = 1344 mm² / 2.08 in²

**Applied nominal stress range:**
Δσ_nom = ΔP / A_w = 80 000 N / 1344 mm² = 59.5 MPa / 8.6 ksi

**Calculation of expected life:**
Using Δσ_R = FAT · (2×10⁶ / N)^(1/3) and solving for N:
N = 2×10⁶ · (FAT / Δσ_nom)^m = 2×10⁶ · (71 / 59.5)^3 ≈ 3.5 × 10⁶ cycles

The detail would withstand approximately 3.5 million cycles before reaching the failure criterion. If an infinite life requirement (N ≥ 10⁷ cycles) were needed, the load would have to be reduced or the geometry modified (for example, increasing the weld size or improving the detail to a higher FAT class).

## Design Criteria and Best Practices

- **Avoid weld defects:** inclusions, lack of penetration, and undercut act as stress concentrators that drastically reduce fatigue life.
- **Reduce residual stresses through post-weld treatments:** ultrasonic impact treatment (UIT), shot peening, or stress relief heat treatment can increase fatigue strength by up to 30 %.
- **Select high FAT class details:** whenever functionality permits, choose configurations with high FAT (ground butt welds, smooth weld toe transitions).
- **Design for stress range, not maximum stress:** in fatigue, the determining variable is the stress variation (Δσ), not the absolute value.
- **Avoid transverse stiffeners and abrupt section changes:** these elements generate local stress peaks and belong to low FAT classes.
- **Verify both finite and infinite life:** if the expected number of cycles exceeds 5‑10 million, adopt a design with an endurance limit if the material and detail allow it.
- **Consider the thickness effect:** for thicknesses greater than 25 mm / 1 in, apply correction factors that reduce fatigue strength (the IIW proposes a factor (25/t)^n).

## Frequently Asked Questions (FAQ)

### What are IIW FAT classes and how are they used in the design of welded joints?
FAT classes represent the characteristic stress range value (in MPa) that a welded detail can withstand for 2 million cycles with a 95 % survival probability. The designer selects the FAT class corresponding to the construction detail and compares the applied stress range with the strength provided by the associated S‑N curve, ensuring that the allowable number of cycles exceeds the required life.

### Why does a higher-strength steel not guarantee better fatigue strength in welded joints?
Because the fatigue strength of a welded joint is governed by the presence of defects, weld geometry, and residual stresses, rather than by the mechanical strength of the base metal. Local discontinuities act as notches that initiate the crack regardless of the material's tensile strength.

### How does plate thickness affect the fatigue of a weld bead?
With greater thickness, the probability of finding imperfections and the residual stress gradient increase, which reduces fatigue strength. Therefore, standards, including the IIW, apply a reduction factor when thicknesses exceed a reference value (generally 25 mm / 1 in).

### What benefits do post-weld treatments such as ultrasonic impact treatment offer?
These treatments improve fatigue strength by introducing compressive residual stresses on the weld toe surface, smoothing the geometric transition, and eliminating surface microdefects. They can increase the effective FAT class by up to one step, resulting in a service life several times longer for the same load range.

### Is it possible to evaluate the fatigue of a welded joint using only analytical formulas?
For simple geometries and nominal load states, nominal stress formulas and FAT curves can be used. However, when the joint has complex geometries or multiaxial load states, it is recommended to resort to finite element analysis together with local stress methods (hot‑spot structural stress) or fracture mechanics.

### What differences exist between high-cycle fatigue and low-cycle fatigue in welded joints?
High-cycle fatigue (HCF) involves millions of cycles with stresses within the elastic range and is the most common in welded structures. Low-cycle fatigue (LCF) involves cyclic plastic deformations in localized areas and occurs in situations with occasional overloads or detonations. The FAT classification is mainly intended for HCF evaluation, typically using a slope m = 3.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/asme-carbon-stainless-steel-flanges-d_301.html
- **engineersedge.com**: https://www.engineersedge.com/weld_design_menu.shtml
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/failure_criteria/failure_criteria.cfm
