---
title: "Moody diagram friction factor"
sidebar:
  label: "Moody diagram friction factor"
description: "Technical reference: Moody diagram friction factor"
keywords: ["Moody diagram Darcy Weisbach friction factor Reynolds", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "moody-diagram"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-25"
verified: true
---
The Moody diagram, presented by Lewis F. Moody in 1944, graphically correlates the Darcy friction factor (_f<sub>D</sub>_) with the Reynolds number (_Re_) and relative roughness (_ε/D_), based on more than 10 000 experiments in circular pipes. It is the most widely used tool for predicting frictional head loss in fully developed incompressible flow.

## Darcy‑Weisbach Equation

The head loss _h<sub>f</sub>_ in a straight pipe of length _L_ and internal diameter _D_ is proportional to the square of the mean velocity _V_, and is expressed by the fundamental equation:

> **h<sub>f</sub> = f<sub>D</sub> · (L / D) · (V² / 2g)**

where _g_ = 9.81 m/s² (32.174 ft/s²) is the acceleration due to gravity and _f<sub>D</sub>_ is the Darcy friction factor. The associated pressure drop is:

> **∆p = f<sub>D</sub> · (ρ V² / 2) · (L / D) = ρ g h<sub>f</sub>**

| Symbol | Quantity | SI Unit | US Unit |
|---------|----------|-----------|-----------|
| _h<sub>f</sub>_ | Head loss | m | ft |
| _f<sub>D</sub>_ | Darcy friction factor | dimensionless | dimensionless |
| _L_ | Pipe length | m | ft |
| _D_ | Pipe internal diameter | m | ft – in |
| _V_ | Mean fluid velocity | m/s | ft/s |
| _g_ | Acceleration due to gravity | 9.81 m/s² | 32.174 ft/s² |
| _ρ_ | Fluid density | kg/m³ | lb/ft³ |
| ∆_p_ | Pressure drop | Pa | psi – lb/in² |

## Darcy friction factor (f<sub>D</sub>)

For laminar flow (_Re_ ≤ 2300) the friction factor is independent of roughness and is exactly:

> **f<sub>D</sub> = 64 / Re**

In turbulent flow (_Re_ ≥ 4000) the dependence is more complex and is described by the implicit Colebrook‑White equation, which covers both smooth and rough pipes:

> **1 / √f<sub>D</sub> = –2.0 log₁₀ [ (ε/D) / 3.7  +  2.51 / (Re √f<sub>D</sub>) ]**

This formula converges quickly by iteration and is the foundation of the Moody diagram. For smooth pipes and _Re_ between 3 000 and 100 000, the Blasius approximation can be used:

> **f<sub>D</sub> = 0.0791 Re⁻¹/⁴**

At very high Reynolds numbers (_Re_ > 10⁵) greater accuracy is obtained with:

> **f<sub>D</sub> = 0.046 Re⁻¹/⁵**

## Moody Diagram

The Moody diagram plots the friction factor _f<sub>D</sub>_ as a function of the Reynolds number _Re_, for relative roughness _ε/D_ ranging from 0.000001 to 0.05. It is organized into three main zones:

- **Laminar zone** (_Re_ ≤ 2300): straight line _f<sub>D</sub> = 64/Re_, unique and independent of roughness.
- **Critical or transition zone** (2300 < _Re_ < 4000): the flow oscillates between laminar and turbulent; the friction factor is not defined with certainty and is usually interpolated between the laminar value at _Re_ = 2300 and the turbulent value at _Re_ = 4000.
- **Turbulent zone** (_Re_ ≥ 4000): family of curves that, for each _ε/D_, descend from the smooth pipe curve until reaching a horizontal asymptote in the fully rough regime, where _f<sub>D</sub>_ depends only on relative roughness.

Below are typical friction factor values for smooth pipe in turbulent flow, calculated with the Colebrook‑White formula (ε = 0).

| Reynolds number, _Re_ | Friction factor, _f<sub>D</sub>_ |
|--------------------------|-------------------------------------|
| 4 000 | 0.0399 |
| 10⁴ | 0.0309 |
| 10⁵ | 0.0180 |
| 10⁶ | 0.0116 |
| 10⁷ | 0.0081 |
| 10⁸ | 0.0059 |

## Absolute roughness of common materials

The absolute roughness of commercial steel is approximately 0.046 mm (0.0018 in), while that of cast iron reaches 0.26 mm (0.010 in). The following table compiles representative values measured in new pipes; with aging and corrosion, roughness can increase considerably.

| Material | Absolute roughness ε |
|----------|-----------------------|
| Drawn tubing (copper, brass, glass) | 0.0015 mm / 0.00006 in |
| Commercial steel or wrought iron | 0.046 mm / 0.0018 in |
| Asphalted cast iron | 0.12 mm / 0.0047 in |
| Galvanized iron | 0.15 mm / 0.0059 in |
| Uncoated cast iron | 0.26 mm / 0.010 in |
| Concrete | 0.3 – 3 mm / 0.012 – 0.118 in |
| Riveted steel | 0.9 – 9 mm / 0.035 – 0.354 in |

## Selection criteria for the friction factor

For _Re_ ≤ 2300, use directly _f<sub>D</sub> = 64/Re_. Between 2300 and 4000 the flow is transitional and the friction factor is uncertain; it is recommended to take the turbulent value corresponding to _Re_ = 4000 for conservative calculations. Above 4000 the operating procedure is:

1. Calculate the Reynolds number: _Re = ρ V D / μ_.
2. Determine the relative roughness: _ε/D_, using the ε value from the previous table.
3. With _Re_ and _ε/D_, read _f<sub>D</sub>_ directly from the Moody diagram, or solve the Colebrook‑White equation by iteration (Newton‑Raphson method, for example).
4. Substitute _f<sub>D</sub>_ into the Darcy‑Weisbach equation to obtain the head loss.

It should be noted that there is an uncertainty of at least ±10% in the _f<sub>D</sub>_ values obtained from the diagram, due to experimental scatter and actual variations in roughness.

## Frequently Asked Questions (FAQ)

### What is the difference between the Darcy friction factor and the Fanning friction factor?

The Fanning factor _f<sub>F</sub>_ is equal to one quarter of the Darcy factor (_f<sub>D</sub> = 4 f<sub>F</sub>_). The Moody diagram uses the Darcy factor, which is the one appearing in the Darcy‑Weisbach equation for direct calculation of head loss.

### Why does the Moody diagram not cover Reynolds numbers between 2300 and 4000?

In that range the flow can be intermittently laminar or turbulent, depending on external disturbances, and there is no single curve. In practice, interpolation is used or the turbulent value is taken to err on the side of safety.

### What is the roughness of a PVC pipe?

New PVC has a typical absolute roughness of 0.0015 mm (0.00006 in), similar to glass or drawn tubing. Over time, deposits may adhere and increase this value.

### Is the diagram valid for any fluid?

Yes, as long as the flow is single-phase, incompressible, and fully developed. The influence of fluid properties is captured through the Reynolds number; the diagram is dimensionless and universal.

### How is the procedure when the pressure drop is known and the flow rate is unknown?

Since _f<sub>D</sub>_ is a function of _Re_, which in turn depends on flow rate, the problem is iterative. An initial value of _f<sub>D</sub>_ is assumed (for example 0.02), velocity is calculated, _Re_ is recalculated, and _f<sub>D</sub>_ is corrected until convergence.

### What accuracy does the Colebrook‑White equation have?

For commercial pipes in the range _Re_ > 4000, the Colebrook‑White equation reproduces experimental data with an error less than 5%, provided the roughness is correctly characterized.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/moody-diagram-d_618.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/calc_pipe_friction.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/789/
