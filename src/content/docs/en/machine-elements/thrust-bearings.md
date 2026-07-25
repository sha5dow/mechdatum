---
title: "Thrust bearings types"
sidebar:
  label: "Thrust bearings types"
description: "Technical reference: Thrust bearings types"
keywords: ["thrust bearing types axial load", "machine-elements"]
category: "machine-elements"
topic: "bearings"
subcategory: "thrust-bearings"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-25"
verified: true
---
Thrust bearings are rotating elements designed to support predominantly axial loads, i.e., forces acting along the axis of rotation. Unlike radial bearings, which mainly resist loads perpendicular to the shaft, thrust bearings manage forces of up to several thousand kN in applications such as gearboxes, turbines, or marine propellers.

## Types of thrust bearings

There are more than six standardized construction types, each with a unique trade-off between load capacity, speed, and cost. The correct choice depends on the magnitude of the axial force, the rotational speed, and the presence of combined radial loads.

| Type | Rolling element | Maximum axial load capacity (indicative) | Limiting speed | Allowable radial load | Typical applications |
| --- | --- | --- | --- | --- | --- |
| Ball thrust | Steel balls | Low to medium (~50 kN / 11,240 lbf) | High | No | Household appliances, flywheels |
| Cylindrical roller thrust | Cylindrical rollers | Medium (~500 kN / 112,400 lbf) | Medium | No | Gear pumps, extruders |
| Tapered roller thrust | Tapered rollers | High (~2000 kN / 449,600 lbf) | Medium | Yes (combined) | Automotive transmissions, differentials |
| Spherical roller thrust | Asymmetric spherical rollers | Very high (~5000 kN / 1,124,000 lbf) | Low to medium | Yes (self-aligning) | Hydroelectric turbines, rolling mills |
| Fluid film bearings (Michell/Kingsbury) | Pressurized oil film | Extremely high (>10,000 kN / 2,248,000 lbf) | High | No (axial only) | Large turbogenerators, marine propellers |
| Magnetic | Magnetic field | Variable (per design) | Very high | Limited | Ultracentrifuges, vacuum systems |

## Load capacity

The static load rating \(C_0\) of a standard ball thrust bearing with a bore diameter of 30 mm / 1.18 in can reach 18 kN / 4,046 lbf. For spherical roller thrust bearings, the dynamic rating \(C\) for a 100 mm / 3.94 in diameter exceeds 600 kN / 134,885 lbf. The equivalent dynamic load when only pure axial force acts is calculated by:

> **\(P = F_a\)** (for bearings with \(F_r \approx 0\))

Where:

| Variable | Meaning | Unit |
| --- | --- | --- |
| \(P\) | Equivalent dynamic load | kN |
| \(F_a\) | Applied axial load | kN |

For thrust bearings that can also absorb some radial load, the calculation factor is adjusted per the manufacturer, but in general the axial load remains the dominant term.

## Standard dimensions

Thrust bearings follow international dimensional series (ISO 104, DIN 711/715). Below are typical dimensions for the one-direction ball thrust and cylindrical roller series, with bore diameter \(d\) and outside diameter \(D\) in mm and in, and height \(H\) in mm and in.

| Series | \(d\) (mm / in) | \(D\) (mm / in) | \(H\) (mm / in) |
| --- | --- | --- | --- |
| Ball 51100 | 10 / 0.394 | 24 / 0.945 | 9 / 0.354 |
| Ball 51200 | 15 / 0.591 | 32 / 1.260 | 12 / 0.472 |
| Ball 51300 | 25 / 0.984 | 52 / 2.047 | 18 / 0.709 |
| Cylindrical roller 81100 | 30 / 1.181 | 47 / 1.850 | 11 / 0.433 |
| Cylindrical roller 81200 | 40 / 1.575 | 68 / 2.677 | 19 / 0.748 |
| Spherical roller 29200 | 60 / 2.362 | 85 / 3.346 | 17 / 0.669 |

Metric values are rounded per ISO designation; imperial conversion is given to three decimals as a reference.

## Selection criteria

The selection of a thrust bearing is based on five main criteria:

1. **Load magnitude and nature**: Small pure axial loads allow ball types; high or impact loads require spherical roller bearings or fluid film bearings.
2. **Rotational speed**: Ball and magnetic bearings support very high speeds; spherical roller bearings are limited to low rpm.
3. **Presence of radial load**: If combined radial load exists, tapered roller or spherical roller thrust bearings must be used.
4. **Lubrication and environmental conditions**: Temperatures above 120 °C / 248 °F or contaminated environments require special seals and high-temperature lubricants.
5. **Precision and rigidity requirements**: Ultra-precision applications (machine tools) choose high-precision ball bearings, while marine applications favor the Michell bearing for its reliability and low friction.

## Selection table by application

| Application | Recommended thrust bearing type | Typical axial load | Typical rotational speed | Remarks |
| --- | --- | --- | --- | --- |
| Automotive transmission | Tapered roller | 5–20 kN / 1,124–4,496 lbf per pair | 2,000–5,000 rpm | Mounted in symmetric pairs (O or X) |
| Marine propeller | Fluid film (Michell) | 500–10,000 kN / 112,404–2,248,080 lbf | <1,000 rpm | Continuous oil film, long life |
| Vertical centrifugal pump | Spherical roller thrust | 50–500 kN / 11,240–112,404 lbf | 1,500–3,600 rpm | Handles shaft misalignment |
| Household appliance (washing machine) | One-direction ball thrust | 2–8 kN / 450–1,800 lbf | 800–1,500 rpm | Low cost, no radial load |
| Steam/gas turbine | Fluid film (Kingsbury) | 1,000–20,000 kN / 224,808–4,496,160 lbf | 3,000–6,000 rpm | Very high capacity, oil temperature controlled |
| Screw compressor | Cylindrical roller thrust | 20–200 kN / 4,496–44,962 lbf | 3,000–10,000 rpm | Pure axial load, simple mounting |
| Machine tool spindle | Precision ball thrust | 5–50 kN / 1,124–11,240 lbf | 6,000–15,000 rpm | Micrometric precision, adjustable preload |

## Mounting considerations

Proper mounting of a thrust bearing directly affects its service life. For a one-direction ball bearing with a rated load of 30 kN / 6,744 lbf, an angular misalignment of only 0.1° can reduce life by 40%.

- **Support surfaces**: The housing and shaft must have H7 (housing) and js6 (shaft) tolerances to ensure a precise fit. Recommended surface roughness is Ra ≤ 0.8 µm / 31.5 µin.
- **Preload and axial adjustment**: Ball thrust bearings require a slight axial preload to eliminate internal clearance; achieved by a wave spring or lock nut with controlled tightening torque.
- **Initial lubrication**: Apply good quality lithium grease filling 30% of the free space; for fluid film bearings, ensure pressurized oil supply before start-up.
- **Load direction**: Respect the force direction (one-direction or two-direction); never reverse the orientation of the fixed race in ball bearings without consulting the design.
- **Protection**: Install lip seals or deflectors if there is risk of particle ingress. In marine environments, consider AISI 440C stainless steel with hardness 58–60 HRC to prevent corrosion.

## Frequently Asked Questions (FAQ)

### What is the difference between a radial bearing and a thrust bearing?
A radial bearing supports loads perpendicular to the shaft (radial), while a thrust bearing is designed for loads parallel to the shaft (axial). Many tapered bearings combine both functions.

### What type of thrust bearing supports combined radial and axial loads?
Tapered roller thrust bearings and spherical roller thrust bearings can handle simultaneous radial and axial loads. Their design allows a contact angle that balances both stresses.

### When should a fluid film bearing be chosen over a rolling element bearing?
When the axial load exceeds approximately 5,000 kN / 1,124,000 lbf or the speed is extremely high (>40 m/s / 7,874 fpm at the mean diameter), fluid film bearings offer lower friction, higher capacity, and no metallic wear.

### How is the minimum required load capacity determined for a thrust bearing?
From the shaft force analysis, the static and dynamic axial loads are obtained. The selected dynamic rating \(C\) must satisfy \(C \ge P \cdot (L_{10} / 10^6)^{1/p}\), where \(L_{10}\) is the desired life in revolutions and \(p\) is the exponent (3 for balls, 10/3 for rollers).

### Does a ball thrust bearing require maintenance?
Yes, it requires periodic relubrication every 500–2,000 operating hours depending on speed and temperature. Visual inspection of the raceways every 4,000 hours is also advisable to detect pitting or discoloration.

### What is the maximum operating temperature of a standard thrust bearing?
Chromium steel (AISI 52100) bearings with thermal stabilization can operate continuously up to 150 °C / 302 °F. For higher temperatures (up to 300 °C / 572 °F), special steels such as M50 or ceramic coatings are used.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/forces-pipe-bends-d_968.html
- **mcmaster.com**: https://www.mcmaster.com/products/axial-bearings/
