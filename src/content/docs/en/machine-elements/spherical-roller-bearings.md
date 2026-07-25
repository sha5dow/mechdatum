---
title: "Spherical roller bearings"
sidebar:
  label: "Spherical roller bearings"
description: "Technical reference: Spherical roller bearings"
keywords: ["spherical roller bearing self-aligning", "machine-elements"]
category: "machine-elements"
topic: "bearings"
subcategory: "spherical-roller"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-25"
verified: true
---
Spherical roller bearings are rolling element bearings designed to absorb high radial and axial loads while maintaining self-aligning capability. Their application is critical in shafts subjected to bending, angular misalignments up to 2°, or supports with offset seats. The main configuration uses two rows of rollers with a crowned profile that roll on a common spherical raceway in the outer ring, which gives them the self-aligning property.

## Technical characteristics

Self-alignment is achieved through the spherical geometry of the outer ring and the barrel profile of the rollers. The internal design is not standardized by ISO, so it varies between manufacturers; however, the interface dimensions do comply with ISO 15:1998. The most commonly used dimensional series are 213, 222, 223, 230, 231, 232, 238, 239, 240, 241, 248 and 249.

| Component | Main material | Typical hardness | Alternatives on request |
| --- | --- | --- | --- |
| Rings and rollers | Chromium steel 100Cr6 / AISI 52100 | 58–65 HRC | Carburizing steels, high-temperature steels |
| Cage | Pressed steel sheet | — | Glass-fiber reinforced polyamide, machined brass, machined steel |
| Seals (optional) | NBR / FKM | 70–80 Shore A | PTFE, Viton for high temperature |

Lubrication can be carried out with grease or oil. Many designs incorporate lubrication grooves and holes in the outer or inner ring, as well as a central guide ring that improves lubricant flow and reduces friction between rows.

## Standard dimensions

The main dimensions (bore diameter d, outside diameter D, width B) are selected according to ISO 15:1998. Representative examples of series 222 and 223 with tapered and cylindrical bore are shown below.

| Series | d (mm / in) | D (mm / in) | B (mm / in) | Approx. mass (kg / lb) |
| --- | --- | --- | --- | --- |
| 22208 | 40 / 1.575 | 80 / 3.150 | 23 / 0.906 | 0,53 / 1.17 |
| 22210 | 50 / 1.969 | 90 / 3.543 | 23 / 0.906 | 0,63 / 1.39 |
| 22212 | 60 / 2.362 | 110 / 4.331 | 28 / 1.102 | 1,10 / 2.43 |
| 22215 | 75 / 2.953 | 130 / 5.118 | 31 / 1.220 | 1,65 / 3.64 |
| 22218 | 90 / 3.543 | 160 / 6.299 | 40 / 1.575 | 3,35 / 7.39 |
| 22220 | 100 / 3.937 | 180 / 7.087 | 46 / 1.811 | 4,95 / 10.91 |
| 22308 | 40 / 1.575 | 90 / 3.543 | 33 / 1.299 | 1,00 / 2.20 |
| 22310 | 50 / 1.969 | 110 / 4.331 | 40 / 1.575 | 1,85 / 4.08 |
| 22312 | 60 / 2.362 | 130 / 5.118 | 46 / 1.811 | 2,95 / 6.50 |
| 22315 | 75 / 2.953 | 160 / 6.299 | 55 / 2.165 | 5,35 / 11.80 |

The bores can be cylindrical (suffix without special designation) or tapered with taper 1:12 (suffix K) or 1:30 (series 240, 241, etc.).

## Load ratings

Dynamic load rating C and static load rating C₀ depend on the internal geometry and number of rollers. The basic rating life L₁₀ in millions of revolutions follows the ISO 281 formula:

> **L₁₀ = (C/P)^p**

where p = 10/3 for roller bearings.

| Variable | Meaning | Unit |
| --- | --- | --- |
| L₁₀ | Basic rating life | Millions of revolutions |
| C | Basic dynamic load rating | kN |
| P | Equivalent dynamic bearing load | kN |
| p | Life exponent | — (10/3) |

Indicative load ratings for series 222 bearings:

| Series | C (kN / lbf) | C₀ (kN / lbf) | Limiting speed (rpm) with grease | Limiting speed (rpm) with oil |
| --- | --- | --- | --- | --- |
| 22208 | 96,5 / 21690 | 90,0 / 20230 | 6300 | 7500 |
| 22210 | 104 / 23380 | 100 / 22480 | 5600 | 6700 |
| 22212 | 152 / 34170 | 150 / 33720 | 4800 | 5600 |
| 22215 | 212 / 47660 | 220 / 49460 | 3800 | 4500 |
| 22218 | 315 / 70820 | 335 / 75310 | 3200 | 3800 |
| 22220 | 410 / 92180 | 440 / 98920 | 2800 | 3400 |

The permissible axial load is typically between 20% and 30% of the unused radial load, depending on the ratio of axial to radial load.

## Selection criteria

Selection of the appropriate spherical roller bearing is based on the following steps:

1.  Determine the equivalent radial and axial loads and the rotational speed under operating conditions.
2.  Estimate the required L₁₀h life in hours and convert it to L₁₀ using the speed.
3.  Verify that the dynamic load rating C of the candidate bearing exceeds the value obtained from the formula C = P × (L₁₀)^(1/p).
4.  Check the equivalent static load against C₀, considering shock loads (safety factor s₀ ≥ 2 under normal conditions, s₀ ≥ 3 for impact loads).
5.  Evaluate the expected misalignment: 0,5° is a safe reference value; up to 1,5° requires contact pressure analysis.
6.  Select the bore type (cylindrical or tapered) based on the shaft attachment system.
7.  Choose the cage according to temperature, lubrication regime, and dynamic loads.

## Mounting considerations

Mounting of spherical roller bearings requires controlling the fit between inner ring and shaft, and between outer ring and housing. General recommendations are:

- Shaft with rotating load: interference fit (k5, m5, m6 depending on size).
- Housing with static load: sliding fit (H7, JS7).
- In vibrating applications, eliminate radial clearance in the fit to avoid fretting.
- Hot mounting: heat the bearing to 80–120 °C / 176–248 °F without exceeding 150 °C / 302 °F. For tapered bores, use the radial clearance reduction method or the axial advance method.
- Permissible misalignment in situ depends on the internal radial clearance; values from 0,25° to 3° are possible depending on design and series. Life reduction for misalignments greater than 0,5° must be calculated according to ISO/TS 16281.

Initial lubrication must be compatible with service conditions; bearings with brass or sheet steel cages are generally more tolerant of lubrication failures than polyamide cages.

## Typical applications

These bearings are suitable for rotating machinery where heavy loads, moderate speeds, and possible misalignment are combined. Representative sectors include industrial gearboxes, wind turbines, continuous casting machines, material handling, centrifugal pumps, fans, mining and construction equipment, pulp and paper machinery, marine propulsion, and off-road equipment.

## Selection table by application

| Application | Recommended series | Remarks |
| --- | --- | --- |
| Industrial fans | 222, 223 | High speed, low axial load. Preferable mounting on tapered sleeve. |
| Mining conveyor belts | 222, 223, 230 | High radial load, dusty environment. Integrated seals recommended. |
| Wind turbines (main shaft) | 230, 240 | Very high loads, low speed. Strong interference fit. |
| Centrifugal pumps | 222, 223 | Humid environment. Brass or polyamide cage. |
| Rolling mills / continuous casting | 231, 232, 241 | High temperatures, impact loads. Thermal dimensional stabilization. |
| Off-road mobile equipment | 222, 230 | Dust, vibration, mounting misalignments. Steel sheet cage. |

## Frequently Asked Questions (FAQ)

### What maximum misalignment does a double-row spherical roller bearing allow?
With normal radial clearance, between 0,5° and 1,5° is allowed; with increased clearances up to 3° can be reached, although the service life is significantly reduced.

### How much axial load can it support as a percentage of radial load?
Generally between 20% and 30% of the unused radial load, although the exact relationship depends on the internal geometry and the ratio between axial and radial load.

### When is it convenient to use a tapered bore instead of a cylindrical one?
The tapered bore facilitates direct mounting onto shafts with adapter sleeves or onto seats with machined taper, avoiding the need to heat the bearing.

### What cage material is recommended for high temperatures?
Machined brass or steel sheet cages can withstand temperatures up to 200 °C / 392 °F, while polyamide ones are limited to 120 °C / 248 °F unless special specifications.

### How does misalignment affect bearing life?
Misalignment changes the pressure distribution on the rollers; above 0,5° the effective load capacity must be recalculated according to ISO/TS 16281 to avoid underestimating premature fatigue.

### Can spherical roller bearings be used maintenance-free?
Sealed versions with lifetime lubrication drastically reduce maintenance tasks in medium-speed and light-load applications, but in heavy equipment, scheduled relubrication is recommended.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/american-standard-beams-d_1320.html
- **mcmaster.com**: https://www.mcmaster.com/products/self-aligning-bearings/
