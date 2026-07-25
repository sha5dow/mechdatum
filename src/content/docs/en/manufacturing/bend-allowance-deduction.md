---
title: "Bend allowance and deduction formulas"
sidebar:
  label: "Bend allowance and deduction formulas"
description: "Technical reference: Bend allowance and deduction formulas"
keywords: ["sheet metal bend allowance deduction formula calculation", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "bend-allowance"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-25"
verified: true
---
Sheet metal bending requires accurately calculating the neutral fiber length to obtain an exact flat pattern. The two main methods for this calculation are **Bend Allowance (BA)** and **Bend Deduction (BD)**. BA is the arc length of the neutral line in the deformed zone, while BD is the value that must be subtracted from the sum of the outside flange lengths to obtain the total flat length. The choice between the two methods depends on how the parts are dimensioned and the bending process used.

During bending, the outer layer of the sheet elongates and the inner layer compresses. Inside the thickness there is a **neutral fiber** that does not experience any change in length. The position of this fiber is defined by the **K-factor** (K), which expresses the ratio of the distance from the inner face to the neutral fiber to the material thickness (t). For ductile materials and air bending processes, K typically ranges between 0.33 and 0.50.

**Bend Allowance (BA)** is the arc length of the neutral fiber as a function of the inside radius (R), thickness (t), bend angle (A in degrees), and the K-factor:

> **BA = (π × (R + K × t) × A) / 180°**

**Bend Deduction (BD)** is based on the *Outside Setback* (OSSB), calculated as:

> **OSSB = tan(A/2) × (R + t)**

BD is obtained from twice the OSSB minus the BA:

> **BD = 2 × OSSB – BA = 2 × tan(A/2) × (R + t) – BA**

For a part with two flanges of lengths L1 and L2 measured from the edge to the outside corner, the flat pattern length (Lₜ) is calculated as:

> **Lₜ = L1 + L2 – BD**

Alternatively, if dimensioned from the inside face, BA can be used by adding it to the straight lengths.

## Operating Parameters

The following table summarizes recommended bending parameters for the most common materials, assuming air bending with a standard radius punch. The V-widths indicated correspond to the common practice of 6 to 12 times the thickness; for thin gauges use the lower values of the range and for thick gauges use the higher values.

| Material | Typical Thickness (mm / in) | Minimum Inner Radius (mm / in) | Recommended V-width (mm / in) | Typical K-factor |
| --- | --- | --- | --- | --- |
| Mild cold-rolled steel (DC01) | 0.5 – 6.0 mm / 0.020 – 0.236 in | 1.0 × t | 6·t – 10·t | 0.33 – 0.38 |
| Stainless steel AISI 304 | 0.5 – 4.0 mm / 0.020 – 0.157 in | 1.5 × t | 8·t – 12·t | 0.40 – 0.45 |
| Aluminum 5052-H32 | 0.5 – 5.0 mm / 0.020 – 0.197 in | 1.0 × t | 6·t – 8·t | 0.33 |
| Soft copper (C11000) | 0.3 – 3.0 mm / 0.012 – 0.118 in | 0.5 × t | 6·t – 8·t | 0.35 |

For high-strength steels (Rₘ > 600 MPa / 87 ksi) the minimum radius should be increased to 2·t and the K-factor is close to 0.40 – 0.45.

## Typical Tolerances

| Parameter | Typical Tolerance |
| --- | --- |
| Bend angle (air bending) | ±0.5° |
| Bend angle (bottoming) | ±0.25° |
| Flat pattern length (Lₜ < 500 mm / 19.7 in) | ±0.2 mm / ±0.008 in |
| Flat pattern length (Lₜ 500 – 1500 mm / 19.7 – 59 in) | ±0.5 mm / ±0.020 in |
| Inside radius (air bending) | ±0.5 mm / ±0.020 in |

Angular tolerances depend on the press accuracy and stroke control. In air bending, variations in material thickness or hardness cause angle scatter, which can be corrected with in-machine angular measurement systems.

## Applicable Materials

Any sheet metal with sufficient ductility can be bent. The most common materials and their tensile properties are shown below.

| Material | Tensile Strength (MPa / ksi) | Elongation A50 (%) | Typical K-factor |
| --- | --- | --- | --- |
| Cold-rolled steel DC01 | 270 – 350 MPa / 39 – 51 ksi | 28 – 32 | 0.33 |
| Deep-drawing steel DC04 | 270 – 350 MPa / 39 – 51 ksi | 34 – 38 | 0.33 |
| Stainless steel AISI 304 | 520 – 720 MPa / 75 – 104 ksi | 40 – 50 | 0.42 |
| Aluminum 5052-H32 | 210 – 250 MPa / 30 – 36 ksi | 12 – 18 | 0.33 |
| Aluminum 1050-H14 | 95 – 125 MPa / 14 – 18 ksi | 25 – 30 | 0.36 |
| Copper C11000 soft | 210 – 260 MPa / 30 – 38 ksi | 35 – 45 | 0.35 |
| Brass CuZn37 half-hard | 320 – 450 MPa / 46 – 65 ksi | 20 – 25 | 0.38 |

Hardened materials (H18, H19 hardness, etc.) and steels with strength > 800 MPa / 116 ksi have a very high minimum bend radius and risk of cracking; in these cases the K-factor may deviate significantly from the tabulated values and experimental validation is recommended.

## Advantages and Limitations

**Advantages**
- Allow fast and reproducible calculation of the flat pattern, reducing cutting errors.
- From a single parameter (K-factor) it is possible to adapt the calculation to multiple thicknesses and radii.
- Bend deduction (BD) is especially useful when the drawing dimensions are referenced to the outside edges, a common case in 3D sheet metal design.
- Compatible with CAD/CAM systems, which integrate BA/BD tables into their material libraries.

**Limitations**
- The actual K-factor can vary with tool type, rolling direction, material batch, and tool wear.
- For very small or very large radii (R/t < 0.5 or R/t > 3) the single neutral fiber assumption loses accuracy.
- In bottoming or coining bending, the stress distribution is different and the K-factor differs from that used in air bending.
- The BA formula assumes a constant bend angle and a perfectly circular transition zone, which may not hold for parts with high springback.

## Selection Guide

The choice between the bend allowance (BA) and bend deduction (BD) method depends primarily on the reference used to dimension the flanges:

- If the dimensions are measured from the **outside edges of the part to the corner** (outside mold method), it is recommended to use **bend deduction (BD)** and the formula Lₜ = L1 + L2 – BD.
- If the dimensions are taken from the **inside face** of each flange, the flat pattern is obtained as Lₜ = total length of inside straight sections + BA.
- In modern CAD environments, it is preferable to create a **BA** table as a function of angle, radius, and material, and let the system calculate the flat pattern automatically from the neutral fiber. In this case, the K-factor is entered into the material library and the software derives the BA internally.
- For parts with multiple radii and angles, it is more practical to keep a single BA table per bend and add all allowances.

To select the appropriate K-factor:
- In carbon steels with air bending and radius 1·t – 2·t, use K = 0.33 – 0.38.
- In austenitic stainless steels, consider K = 0.42.
- In semi-hard aluminums and soft coppers, K = 0.33 – 0.36 provides good correlation.
- If accuracy is critical, perform bend test specimens with the same tooling and measure the resulting flat pattern to adjust the actual K-factor.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pipe-formulas-d_1335.html
- **efunda.com**: https://www.efunda.com/processes/metal_processing/bending_design.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/platbockning
