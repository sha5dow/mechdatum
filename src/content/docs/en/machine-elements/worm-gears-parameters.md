---
title: "Worm gears parameters"
sidebar:
  label: "Worm gears"
description: "Technical reference: Worm gears parameters"
keywords: ["worm gear worm wheel parameters ratio", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "worm-gears"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-25"
verified: true
---
The worm gear mechanism is a crossed helical gear formed by a worm and a helical wheel (gear) whose axes, generally perpendicular, do not intersect. It is characterized by offering very high reduction ratios in a single stage — from 5:1 to over 100:1 — with quiet operation and self-locking capability when the lead angle is sufficiently small. It is widely used in speed reducers, lifting systems, conveyors, rotary tables, and precision adjustment mechanisms.

## Nomenclature and Types

| Element | Standard designation | Main function |
| --- | --- | --- |
| Screw or worm | Drive shaft | Transmits rotary motion via its helical threads |
| Crown or helical wheel | Driven shaft | Receives motion and delivers amplified torque at the output |
| Starts (z₁) | Number of threads on the worm | Defines the reduction ratio for a fixed number of teeth on the gear |

**Types by tooth geometry:**
- **Non-throated:** the worm is cylindrical and the gear is a standard helical gear; limited load capacity.
- **Single-throated:** the gear is throated (hourglass shape), increasing contact surface and load capacity.
- **Double-throated (globoidal):** both worm and gear have an hourglass shape; they support the highest loads and are used in high-demand applications.

## Standardized Design Parameters

The main parameters are derived from the module (metric system) or the diametral pitch (DP, imperial system). Typical standardized dimensions for commercial worms and gears are shown below, taken from reference catalogs.

**Metric system (ISO)**

| Module (mm) | Worm pitch diameter (mm / in) | Worm outside diameter (mm / in) | Worm length (mm / in) | Available starts | Pressure angle (°) |
| --- | --- | --- | --- | --- | --- |
| 0.5 | 11 / 0.433 | 12 / 0.472 | 18 / 0.709 | 1, 2 | 20 |
| 0.8 | 14 / 0.551 | 15.6 / 0.614 | 30 / 1.181 | 1, 2 | 20 |
| 1 | 16 / 0.630 | 18 / 0.709 | 32 / 1.260 | 1, 2 | 20 |
| 1.25 | 21 / 0.827 | 23.5 / 0.925 | 37 / 1.457 | 1 | 20 |
| 1.5 | 25 / 0.984 | 28 / 1.102 | 40 / 1.575 | 1, 2 | 20 |
| 2 | 31 / 1.220 | 35 / 1.378 | 46 / 1.811 | 1, 2 | 14.5 / 20 |
| 2.5 | 37 / 1.457 | 42 / 1.654 | 63 / 2.480 | 2 | 20 |

**Imperial system (AGMA)**

| Diametral pitch (DP) | Worm pitch diameter (in / mm) | Worm outside diameter (in / mm) | Worm length (in / mm) | Available starts | Pressure angle (°) |
| --- | --- | --- | --- | --- | --- |
| 12 | 1.00 / 25.40 | 1.17 / 29.72 | 1.125 / 28.58 | 1 | 14.5 |
| 10 | 1.25 / 31.75 | 1.45 / 36.83 | 1.375 / 34.93 | 1 | 14.5 |
| 8 | 1.50 / 38.10 | 1.75 / 44.45 | 1.750 / 44.45 | 1 | 14.5 |
| 6 | 2.00 / 50.80 | 2.33 / 59.18 | 2.500 / 63.50 | 1 | 14.5 |

## Transmission Ratio

The transmission ratio (i) is the quotient between the angular speed of the worm (n₁) and that of the gear (n₂), determined exclusively by the number of starts of the worm (z₁) and the number of teeth of the gear (z₂).

> **i = n₁ / n₂ = z₂ / z₁**

| Variable | Description | Unit |
| --- | --- | --- |
| i | Transmission ratio (–) | dimensionless |
| n₁ | Angular speed of the worm (input) | rpm |
| n₂ | Angular speed of the gear (output) | rpm |
| z₁ | Number of starts (threads) of the worm | – |
| z₂ | Number of teeth of the gear | – |

For a worm with one start (z₁ = 1) and a gear with 40 teeth (z₂ = 40), the transmission ratio is i = 40:1, meaning that for every 40 revolutions of the worm, the gear rotates one full turn. If the worm had 2 starts, the ratio with the same gear would be 20:1.

## Efficiency and Self-Locking

The efficiency (η) of a worm gear depends on the lead angle of the worm (λ) and the friction angle (φ) at the contact between the threads. The friction angle is obtained from the coefficient of friction (μ) by φ = arctan(μ). The efficiency is calculated with the following expression:

> **η = tan(λ) / tan(λ + φ)**

| Variable | Description | Unit |
| --- | --- | --- |
| η | Gear efficiency | – (or %) |
| λ | Lead angle of the worm | ° |
| φ | Friction angle | ° |
| μ | Coefficient of friction between materials | – |

Under adequate lubrication conditions, efficiency varies between 40% (high reductions, one start) and 95% (low reductions, multiple starts, globoidal gears). Self-locking occurs when λ < φ; in that case the mechanism cannot be driven by the gear, a desirable feature in lifting applications requiring an intrinsic brake. With μ ≈ 0.1 (bronze on case-hardened steel, lubricated), φ ≈ 5.7°, self-locking is typically achieved with λ < 5°. Single-start worms are usually self-locking, while multi-start worms rarely are.

## Load Capacity and Power

The fundamental relationships between torque, speed, and power are governed by the reduction formulas. The output power (Pₒ) equals the input power (Pᵢ) multiplied by the efficiency (η). The output torque (Mₒ) and output speed (Sₒ) depend on the transmission ratio (i) and efficiency.

> **Mₒ = Mᵢ × i × η**
> **Sₒ = Sᵢ / i**
> **Pₒ = Pᵢ × η**

| Variable | Description | Metric unit | Imperial unit |
| --- | --- | --- | --- |
| Mₒ | Output torque | N·m | lb·ft |
| Mᵢ | Input torque | N·m | lb·ft |
| Sₒ | Output speed | rpm | rpm |
| Sᵢ | Input speed | rpm | rpm |
| Pₒ | Output power | kW | hp |
| Pᵢ | Input power | kW | hp |
| i | Transmission ratio | – | – |
| η | Efficiency | – | – |

**Calculation example:** with an input torque of 100 N·m (73.8 lb·ft), i = 20 and η = 0.85, the output torque is Mₒ = 100 × 20 × 0.85 = 1700 N·m (1254 lb·ft). If the input speed is 1500 rpm, the output speed is 1500 / 20 = 75 rpm.

The admissible load capacity is limited by the wear resistance and surface fatigue strength of the gear, as well as by the rigidity of the assembly. Below is an indicative table of nominal power for bronze gears working with case-hardened and ground steel worms, oil bath lubrication, ambient temperature up to 40 °C / 104 °F, and continuous service.

| Module (mm) / DP | Typical ratio | Input speed (rpm) | Nominal power (kW / hp) |
| --- | --- | --- | --- |
| 0.8 / 32 | 30:1 | 1400 | 0.06 / 0.08 |
| 1 / 25 | 20:1 | 1400 | 0.12 / 0.16 |
| 1.5 / 16 | 15:1 | 1400 | 0.25 / 0.34 |
| 2 / 12 | 10:1 | 1400 | 0.55 / 0.74 |
| 2.5 / 10 | 20:1 | 1400 | 1.1 / 1.47 |
| 6 (DP 6) | 40:1 | 1750 | 2.2 / 2.95 |

## Materials

| Component | Common materials | Key characteristics |
| --- | --- | --- |
| Worm | Carbon steel 1045, alloy steel 4140, case-hardened steel 20MnCr5 | High surface strength and wear resistance; case-hardened and ground steels offer maximum durability |
| Gear (crown) | Bronze SAE 65 (C93200), aluminum bronze, gray cast iron | Bronze has low coefficient of friction and good heat dissipation; cast iron is economical for moderate loads |
| Stainless steels | AISI 303, 304, 316 | For humid, food or corrosive environments; lower load capacity than treated steels |
| Plastic materials | Nylon 6, POM (Delrin®) | Used in low-load, dry-running and low-noise applications |

## Selection by Application

| Application | Recommended ratio (i) | Typical module / DP | Gear material | Self-locking required | Notes |
| --- | --- | --- | --- | --- | --- |
| Compact reducers | 5:1 to 100:1 | 1 – 2.5 mm / 10 – 16 DP | Bronze | Optional | Perpendicular shafts, enclosed housing, oil lubrication |
| Load elevators | 20:1 to 60:1 | 2 – 4 mm / 6 – 10 DP | Bronze | Yes | Additional safety brake if dynamic back-driving risk exists |
| Conveyors | 10:1 to 30:1 | 1.5 – 3 mm / 8 – 12 DP | Bronze or cast iron | No | Design for continuous operation, monitor operating temperature |
| Rotary tables | 40:1 to 80:1 | 2 – 4 mm / 6 – 10 DP | Bronze | Yes | Requires high positioning accuracy, minimum backlash |
| Linear actuators | 5:1 to 20:1 | 0.8 – 1.5 mm / 16 – 25 DP | Bronze or stainless steel | Depends | Combined with lead screw, short strokes, intermittent cycles |
| Medical equipment | 30:1 to 60:1 | 0.5 – 1 mm / 20 – 32 DP | Stainless steel | Yes | Sterilizable environment, smooth and precise operation |

## Mounting Considerations

- **Alignment:** the worm and gear shafts must be perpendicular with a tolerance of ±0.05 mm (±0.002 in) in the contact plane. The center distance must respect the manufacturer's specification to ensure proper meshing with a circumferential backlash of 0.08–0.15 mm (0.003–0.006 in).
- **Worm axial play:** limit to 0.02–0.05 mm (0.0008–0.002 in) using angular contact ball bearings or deep groove ball bearings with preload. Excessive play causes noise and premature wear.
- **Lubrication:** in closed reducers, an EP (extreme pressure) mineral oil bath with ISO VG 220–460 viscosity depending on peripheral speed is recommended. For open or hard-to-access assemblies, lithium soap greases with EP additives are used. In food applications, NSF H1 lubricants are selected.
- **Heat dissipation:** in continuous duty, the housing temperature must not exceed 80 °C / 176 °F. Above 1.5 kW (2 hp), cooling fins or forced ventilation are recommended.
- **Fastening:** the gear is usually mounted on a hub with a keyway and set screws; the worm is fixed on its shaft with a key or direct clamping. Verify concentricity and perpendicularity after final assembly.

## Frequently Asked Questions (FAQ)

### What is self-locking and how is it achieved?
Self-locking is the ability of the worm gear to prevent the gear from driving the worm when a reverse torque is applied. It is achieved when the lead angle (λ) is smaller than the friction angle (φ). In practice, it occurs with single-start worms and adequate lubrication, but it should never replace a safety brake in critical applications because self-locking can fail under vibrations or shocks.

### What is the typical efficiency of a worm gear?
Efficiency varies between 40% and 95% depending on the transmission ratio, number of starts, and surface finish. High reductions (i > 50) with a single-start worm usually have efficiencies of 40–60%, while multi-start configurations with ground surfaces and forced lubrication can exceed 90%.

### How many starts should I choose for my application?
For ratios i > 40:1, 1 start is commonly used, which usually provides self-locking. Between 10:1 and 40:1, 1 or 2 starts are chosen depending on whether self-locking or better efficiency is needed. For i < 10:1, 3 or more starts are used to maximize efficiency and output speed, sacrificing self-locking.

### What material is most suitable for the gear?
Bronze SAE 65 (C93200) is the industrial standard due to its low friction against steel and good heat dissipation. In corrosive or food environments, stainless steel is used, while gray cast iron is reserved for moderate loads and high-volume production where cost is decisive.

### How is the transmission ratio calculated if I don't know the number of teeth?
If the number of gear teeth (z₂) is unknown, it can be determined experimentally by turning the worm an integer number of revolutions and measuring the resulting rotation of the gear. The ratio i will be the number of worm revolutions divided by the fraction of a gear revolution (or its inverse if measured the other way). Analytically, it always satisfies i = z₂ / z₁.

### What maintenance does a worm gear require?
The main maintenance consists of checking the oil level and condition every 2000 operating hours or as per the manufacturer's recommendation. In enclosed reducers, seals and gaskets should be inspected to prevent leaks. It is also recommended to inspect the worm axial play and tooth backlash every 5000 hours, readjusting if necessary. In high-cycle applications, periodic oil changes are key to service life.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gear-output-torque-speed-horsepower-d_1691.html
- **mcmaster.com**: https://www.mcmaster.com/products/worm-gears/
