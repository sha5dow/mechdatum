---
title: "Local loss coefficients"
sidebar:
  label: "Local loss coefficients"
description: "Technical reference: Local loss coefficients"
keywords: ["local head loss coefficients fittings valves", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "local-losses"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-25"
verified: true
---
Local loss coefficients, represented by the Greek letter ξ (xi), are dimensionless values that quantify the energy loss experienced by a fluid when passing through fittings, valves, elbows, branches, and other components in a piping system. Unlike friction losses in straight sections, these minor losses are concentrated at singular points and fundamentally depend on the component geometry and flow velocity. The local pressure loss is calculated as a fraction of the fluid dynamic pressure, and its correct estimation is essential for sizing pumps, fans, and distribution networks.

## Calculation Formula
The dynamic pressure loss associated with a fitting or valve is expressed by the general equation, which relates the local loss coefficient ξ to the fluid density and the mean flow velocity:

> **Δp<sub>local</sub> = ξ · (ρ · v²) / 2**

| Variable | Description | SI Unit | US Unit |
|---|---|---|---|
| Δp<sub>local</sub> | Local pressure loss | Pa (N/m²) | lb/ft² (psf) |
| ξ | Local loss coefficient (dimensionless) | – | – |
| ρ | Fluid density | kg/m³ | slug/ft³ |
| v | Mean flow velocity | m/s | ft/s |

To express the loss in fluid column height (local head loss h<sub>L</sub>), the variant is used:

> **h<sub>L</sub> = ξ · (v²) / (2g)**

where g is the acceleration due to gravity (9.81 m/s² / 32.174 ft/s²). This form is useful for hydraulic systems working with piezometric heads.

## Typical Local Loss Coefficients
In fully developed turbulent flow, the ξ coefficients for standardized components take practical values as listed in the following table. Installation conditions (threaded, flanged, degree of opening) significantly influence the magnitude of the loss.

| Component or fitting | Local loss coefficient ξ |
|---|---|
| Tee, flanged, line flow | 0.2 |
| Tee, threaded, line flow | 0.9 |
| Tee, flanged, branch flow | 1.0 |
| Tee, threaded, branch flow | 2.0 |
| Union, threaded | 0.08 |
| Elbow 90° regular, flanged | 0.3 |
| Elbow 90° regular, threaded | 1.5 |
| Elbow 45° regular, threaded | 0.4 |
| Elbow 90° long radius, flanged | 0.2 |
| Elbow 90° long radius, threaded | 0.7 |
| Elbow 45° long radius, flanged | 0.2 |
| Return bend 180°, flanged | 0.2 |
| Return bend 180°, threaded | 1.5 |
| Globe valve, fully open | 10 |
| Angle valve, fully open | 2 |
| Gate valve, fully open | 0.15 |
| Gate valve, 1/4 closed | 0.26 |
| Gate valve, 1/2 closed | 2.1 |
| Gate valve, 3/4 closed | 17 |
| Swing check valve, straight flow | 2 |
| Ball valve, fully open | 0.05 |
| Ball valve, 1/3 closed | 5.5 |
| Ball valve, 2/3 closed | 200 |
| Diaphragm valve, open | 2.3 |
| Diaphragm valve, half open | 4.3 |
| Diaphragm valve, 1/4 open | 21 |
| Water meter | 7 |

The coefficients are dimensionless and are considered valid for pipes with nominal diameter greater than 50 mm (2 inches) in turbulent flow with a high Reynolds number. For smaller diameters or laminar flow, the coefficient can vary significantly.

## Factors Influencing the Local Loss Coefficient
The value of ξ is not constant under all operating conditions; it depends on several hydrodynamic and geometric factors:

**Flow regime and Reynolds number.** In laminar flow (Re < 2000), the local loss coefficient tends to be inversely proportional to the Reynolds number. In fully developed turbulent flow (Re > 10⁴), ξ stabilizes and reaches the values tabulated above. In the transition zone, losses can be higher than those of fully turbulent flow due to the interaction between the boundary layer and adverse pressure gradients.  
**Curvature ratio in elbows.** The ratio of the elbow curvature radius to the pipe inner diameter (R/D) is decisive. A long radius elbow (R/D ≈ 1.5) has a lower ξ coefficient than a regular radius one (R/D ≈ 1.0). For example, a threaded 90° elbow reduces ξ from 1.5 to 0.7 when changing from regular to long radius.  
**Deflection angle.** The coefficient increases with the turning angle. A 45° elbow typically has a ξ between 25% and 50% of the value corresponding to a 90° elbow of the same series.  
**Internal surface roughness.** In cast components or those with high roughness, surface friction losses add to the direction change losses, increasing ξ. In sanitary applications or with polished stainless steel pipes, the values may be lower than those indicated.  
**Interference from nearby fittings.** The proximity of two elbows, valves, or branches modifies the velocity field and can increase the total loss by up to 50% if the separation is less than 10 diameters. The tabulated data assume fully developed flow upstream of the component.  

## Equivalent Length Method
A practical alternative for estimating local losses is to assimilate each fitting to an equivalent length of straight pipe that would produce the same head loss. The equivalence is calculated by equating the local loss formula with the Darcy-Weisbach equation for friction losses:

> **L<sub>eq</sub> = (ξ · D) / f**

| Variable | Description |
|---|---|
| L<sub>eq</sub> | Equivalent length of straight pipe (m / ft) |
| ξ | Local loss coefficient (dimensionless) |
| D | Pipe inner diameter (m / ft) |
| f | Darcy friction factor (dimensionless) |

The friction factor f is obtained from the Moody chart or the Colebrook equation as a function of the Reynolds number and relative pipe roughness. This method simplifies the calculation of systems with multiple fittings by adding the equivalent lengths to the physical pipe length and applying the Darcy-Weisbach equation once.

## Calculation Example
Determine the local pressure loss introduced by a ball valve closed to 1/3 of its stroke, through which water flows at a mean velocity of 2 m/s. Water properties are taken at room temperature.

| Parameter | Metric value | Imperial value |
|---|---|---|
| Fluid velocity, v | 2 m/s | 6.56 ft/s |
| Water density, ρ | 1000 kg/m³ | 1.94 slug/ft³ |
| Loss coefficient, ξ | 5.5 | 5.5 |
| Pressure loss, Δp | 11 000 Pa (11 kPa) | 1.60 psi |

Applying the formula Δp = ξ · (ρ · v²) / 2:
- In SI units: 5.5 × (1000 kg/m³ × (2 m/s)²) / 2 = 5.5 × 2000 Pa = **11 000 Pa = 11 kPa**.
- In US units: 5.5 × (1.94 slug/ft³ × (6.56 ft/s)²) / 2 ≈ 5.5 × 41.8 lb/ft² = 230 lb/ft²; converted to psi: 230 ÷ 144 ≈ **1.60 psi**.

This local loss represents approximately 1.12 meters of water column (m w.c.) or 3.67 ft of water column, and is added to the friction losses in the straight section to obtain the total system loss.

## Frequently Asked Questions (FAQ)

### What is the difference between major losses and local losses?
Major losses are those caused by fluid friction with the walls in straight pipe sections and are calculated with the Darcy-Weisbach equation. Local losses, on the other hand, are due to changes in direction, contractions, expansions, or the presence of valves and fittings. Both are summed to obtain the total head loss.

### Why are the coefficients in the table only valid for turbulent flow?
In laminar flow, boundary layer separation and recirculation patterns are very different, and ξ depends strongly on the Reynolds number. The tabulated values were obtained experimentally in fully developed turbulent flow (Re > 10⁴). For installations with low Re, specific correlations should be consulted.

### Can I directly add the ξ coefficients of several consecutive fittings?
Only when the distance between fittings is greater than 20 diameters and the flow re-stabilizes. If they are installed very close together, the velocity field distorted by the first fitting alters the ξ of the second, and direct summation may underestimate the actual loss by up to 40%.

### How does pipe diameter affect the local loss coefficient value?
The standard data refer to typical commercial diameters (≥ 50 mm). For very small diameters, the ratio of boundary layer thickness to diameter is larger, which modifies the coefficient. In microfluidic tubing or laboratory installations, it is necessary to obtain one's own experimental data.

### What standard collects loss coefficient values for fittings?
The ξ coefficients are not universally standardized, but widely accepted references exist such as Idelchik's *Handbook of Hydraulic Resistance* or the Crane Company manuals. The values presented come from tests compiled in the technical literature and represent conservative averages.

### Does local loss depend on flow direction in a tee branch?
Yes, significantly. In a tee with divided flow, the coefficient for the branch that continues in a straight line is much smaller (ξ ≈ 0.2–0.9) than for the branch to the side (ξ ≈ 1.0–2.0), due to the greater flow distortion when changing direction abruptly.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/minor-loss-coefficients-pipes-d_626.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/calc_pipe_friction.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/577/
