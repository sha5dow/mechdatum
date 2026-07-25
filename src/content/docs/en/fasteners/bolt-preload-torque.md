---
title: "Bolt preload and torque calculation"
sidebar:
  label: "Bolt preload and torque calculation"
description: "Technical reference: Bolt preload and torque calculation"
keywords: ["bolt preload torque calculation formula", "fasteners"]
category: "fasteners"
topic: "torque-preload"
subcategory: "preload-calculation"
skill: "fastener-reference-table"
launch_phase: 4
last_updated: "2026-07-25"
verified: true
---
The calculation of tightening torque in bolts is essential to ensure adequate preload or axial clamping force in a bolted joint. The fundamental relationship between applied torque and the resulting preload force is modeled by an empirical equation, where approximately 90% of the applied torque is used to overcome friction under the head and in the threads, and only the remaining 10% generates clamping force. Factors such as lubrication, surface finish, and the bolt strength grade dramatically influence the final result.

## Torque Calculation Formula

The simplified general equation for calculating the tightening torque required to obtain a specified axial force or preload is:

> **T = K · F · d · (1 - l / 100)**

Where:

| Variable | Definition | Units |
|---|---|---|
| T | Applied tightening torque | N·m / lb·ft |
| K | Nut factor (dimensionless friction factor) | — |
| F | Axial clamping force or desired preload | N / lb |
| d | Nominal bolt diameter | mm / in |
| l | Lubrication reduction factor | % |

This formula does not directly consider the thread pitch, making it a practical approximation for general calculations with a typical error of ±25% due to the intrinsic accuracy of common torque wrenches. To obtain force as a function of torque, the equation is rearranged as **F = T / (K · d · (1 - l / 100))**.

## Nut Factor K and Friction Coefficients

The K factor combines the effects of friction in the threads and under the bolt head. Typical values for mild steel bolts with diameters between 1/4" and 1" vary according to surface finish.

| Finish or Condition | Typical K Factor |
|---|---|
| Normal, dry | 0.20 |
| Black finish, uncoated | 0.30 |
| Zinc-plated | 0.20 |
| Lightly lubricated | 0.18 |
| Cadmium plated | 0.16 |

These values are empirical and generic. A zinc-plated bolt and a dry bolt share the same typical K factor, but the actual variation in the field can be significant without lubricant control.

## Influence of Lubrication

Lubrication reduces the torque required to achieve the same preload due to a decrease in the friction coefficient, but it introduces a critical risk of over-torquing if the torque value is not adjusted. The parameter 'l' in the formula represents the percentage reduction.

| Lubricant | Typical Torque Reduction (l) | Effect on Preload with Constant Torque |
|---|---|---|
| SAE 30 oil | ~ 40% | The clamping force may exceed the proof load and cause catastrophic failure if the tightening torque is not reduced. |
| Lubricants with MoS₂ | Up to 50% | Requires a substantial reduction of the design torque. |
| Dry (unlubricated) | 0% | Reference condition for standard tables. |

A documented example: an M30 metric bolt grade 8.8 requires 2022 N·m dry to reach its proof load of 337000 N. If lubricated with SAE 30, the torque must be reduced by 40%, i.e., to 1213 N·m. If the original 2022 N·m are erroneously applied to the lubricated joint, the actual axial force would rise to 561667 N, 67% above the proof load, causing almost certain failure by yield or fracture.

## Reference Tightening Torque Tables

The values below correspond to bolts in dry condition, unlubricated, with a constant K = 0.2. A tightening force equivalent to 70% of the minimum tensile strength for the indicated grade is assumed.

### Torques for Metric Fasteners (Coarse Thread)

| Nominal Diameter | Pitch (mm / in) | Grade 8.8 (N·m / lb·ft) | Grade 10.9 (N·m / lb·ft) | Grade 12.9 (N·m / lb·ft) |
|---|---|---|---|---|
| M4 | 0.7 | 2.3 / 1.7 | 3.3 / 2.4 | 4.0 / 3.0 |
| M5 | 0.8 | 4.5 / 3.3 | 6.4 / 4.7 | 7.7 / 5.7 |
| M6 | 1.0 | 7.8 / 5.8 | 11.1 / 8.2 | 13.3 / 9.8 |
| M8 | 1.25 | 18.9 / 13.9 | 26.9 / 19.8 | 32.3 / 23.8 |
| M10 | 1.5 | 37.4 / 27.6 | 53.1 / 39.2 | 63.7 / 47.0 |
| M12 | 1.75 | 65.2 / 48.1 | 92.6 / 68.3 | 111 / 82 |
| M14 | 2.0 | 104 / 77 | 147 / 108 | 176 / 130 |
| M16 | 2.0 | 160 / 118 | 227 / 167 | 272 / 201 |
| M18 | 2.5 | 220 / 162 | 313 / 231 | 375 / 277 |
| M20 | 2.5 | 312 / 230 | 443 / 327 | 532 / 392 |
| M22 | 2.5 | 425 / 313 | 604 / 445 | 725 / 535 |
| M24 | 3.0 | 540 / 398 | 768 / 566 | 921 / 679 |
| M27 | 3.0 | 787 / 580 | 1119 / 825 | 1342 / 990 |
| M30 | 3.5 | 1067 / 787 | 1516 / 1118 | 1819 / 1342 |

### Torques for Imperial Fasteners (UNC / UNF)

| Nominal Diameter (in / mm) | UNC (lb·ft / N·m) | UNF (lb·ft / N·m) |
|---|---|---|
| 1/4" / 6.35 mm | 4 / 5.4 | 4 / 5.4 |
| 5/16" / 7.94 mm | 8 / 10.8 | 10 / 13.6 |
| 3/8" / 9.53 mm | 15 / 20.3 | 19 / 25.8 |
| 7/16" / 11.11 mm | 24 / 32.5 | 30 / 40.7 |
| 1/2" / 12.70 mm | 37 / 50.2 | 45 / 61.0 |
| 9/16" / 14.29 mm | 53 / 71.9 | 64 / 86.8 |
| 5/8" / 15.88 mm | 74 / 100.3 | 88 / 119.3 |
| 3/4" / 19.05 mm | 125 / 169.5 | 129 / 174.9 |
| 7/8" / 22.23 mm | 130 / 176.3 | 205 / 278.0 |
| 1" / 25.40 mm | 196 / 265.8 | 305 / 413.6 |

All values are reference values and must be validated with actual friction and lubrication conditions. The typical accuracy of a torque wrench in the field is ±25%.

## Preload Control Methods

Torque is the most common indirect method for controlling preload, but other techniques offer greater precision.

| Method | Description | Advantages | Limitations |
|---|---|---|---|
| Torque control | Tightening until a predefined torque value is reached. | Simple, fast, widely available equipment. | Large scatter (±25%) due to friction variations. |
| Angle control (turn-of-nut) | Initial tightening to a base torque, then an additional fixed-angle rotation. | More repeatable preload; compensates for friction variations. | Requires experimentation to determine the angle; threads may fail after multiple reuses. |
| Torque-angle control | Simultaneous monitoring of torque and angle; terminates when both conditions are met. | High reliability; allows traceability via torque-angle signature. | Specialized tool required (torque/angle wrench). |
| Bolt stretching | Use of a hydraulic jack to stretch the bolt; then the nut is turned without load. | Extremely precise and controlled preload. | Slow; requires access to the protruding threaded end. |
| Thermal tightening | Heating the bolt until thermal expansion; nut turned and cooling generates preload. | Suitable for very large bolts. | Slow and costly process; requires temperature calculation. |
| Tension indicators | Special washers, strain gauges, or visual indicators that show the achieved preload. | Direct measurement; eliminates friction uncertainty. | Additional cost per indicator element; not always reusable. |

## Frequently Asked Questions (FAQ)

### Why can the same torque produce very different preloads in two identical bolts?
Because variations in friction, even among bolts from the same batch, can deviate the torque-preload relationship by up to 25%. Surface roughness, contamination, lubricant type, and fit grade generate significant scatter.

### How does an incorrect lubricant affect joint safety?
A lubricant that reduces friction more than anticipated will cause a much higher preload for the same torque, potentially exceeding the yield limit or even the fracture load of the bolt, causing immediate failure or premature fatigue.

### Does the formula T = K·F·d apply to any type of thread?
It is a general approximation for standard threads, but it does not directly consider pitch. For more accurate calculations, equations that include the helix angle and separate friction coefficients (underhead and in the thread), such as the Kellermann and Klein formula, are required.

### How often should a torque wrench be recalibrated?
Manufacturers recommend recalibration every 5,000 cycles or at least once a year, whichever comes first. Heavy use or drops require immediate verification.

### Can a bolt be reused after angle-controlled tightening?
Only if the design explicitly allows it. Bolts tightened into the plastic regime (beyond the yield limit) suffer permanent deformation and loss of ductility; their reuse can drastically reduce residual preload and fatigue life.

### Which international standard defines preload control methods for bolted joints?
Standard ISO 16047 specifies torque/tightening force tests to determine friction coefficients, and VDI 2230 establishes the systematic procedure for calculating high-strength bolted joints, including the selection of the tightening method.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bolt-torque-load-calculator-d_2065.html
- **bossard.com**: https://www.bossard.com/global-en/knowledge-hub/resources/online-calculators-and-converters/torque-and-preload-calculator/
- **mcmaster.com**: https://www.mcmaster.com/products/torque-charts
