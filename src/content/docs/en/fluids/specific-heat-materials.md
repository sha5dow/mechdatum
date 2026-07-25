---
title: "Specific heat of materials"
sidebar:
  label: "Specific heat of materials"
description: "Technical reference: Specific heat of materials"
keywords: ["specific heat capacity metals fluids", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "specific-heat"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-25"
verified: true
---
Specific heat is a fundamental thermophysical property that quantifies the amount of thermal energy required to raise the temperature of a unit mass of a material by one degree. In engineering, its precise knowledge allows sizing heat exchangers, selecting heat transfer fluids, predicting the thermal behavior of metal structures, and optimizing heating or cooling processes. Specific heat values vary significantly among metals, liquids, and gases, and depend on conditions such as temperature, pressure, and the phase of the substance.

The specific heat of a material, usually represented as *c*, is the amount of heat per unit mass required to raise its temperature by one Kelvin (or one degree Celsius) without phase change. Formally, it is defined by the limit c = (1/m) · lim_{ΔT→0} (ΔQ/ΔT). For the same substance, two main variants can be distinguished: specific heat at constant pressure (c_p) and specific heat at constant volume (c_v). In solids and liquids, the difference between the two is usually small, while in gases it can be significant due to expansion work.

## Main Formulas and Equations

The fundamental equation for determining the thermal energy required to change the temperature of a known mass is:

> **q = m · c_p · ΔT**

Where:

| Variable | Meaning | Typical units |
| --- | --- | --- |
| *q* | Heat transferred | kJ / Btu |
| *m* | Mass of the material | kg / lb |
| *c_p* | Specific heat at constant pressure | kJ/(kg·K) / Btu/(lb·°F) |
| *ΔT* | Temperature increase | K or °C / °F |

In the case of ideal gases, the relationship between the specific heats at constant pressure and constant volume is given by the Mayer equation:

> **c_p − c_v = R**

Where *R* is the specific gas constant (R = R_universal / M). For a general thermodynamic process, the relationship between both specific heats is expressed as:

> **c_p − c_v = T · (∂p/∂T)_v · (∂v/∂T)_p**

This last equation, although more fundamental in nature, simplifies to the Mayer expression in the ideal gas limit.

## Table of Specific Heats of Common Materials

The values in the following table correspond to measurements taken at room temperature (approximately 20 °C / 68 °F) and standard atmospheric pressure, unless otherwise noted. The first column of numerical data presents the mass specific heat at constant pressure (c_p) in International System units, while the second does so in English units.

| Material | c_p (kJ/(kg·K)) / (Btu/(lb·°F)) | State/phase |
| --- | --- | --- |
| Aluminum | 0.91 / 0.217 | Solid |
| Antimony | 0.21 / 0.050 | Solid |
| Beryllium | 1.83 / 0.437 | Solid |
| Bismuth | 0.13 / 0.031 | Solid |
| Cadmium | 0.23 / 0.055 | Solid |
| Calcium | 0.63 / 0.151 | Solid |
| Carbon (carbon steel) | 0.49 / 0.117 | Solid |
| Zinc | 0.39 / 0.093 | Solid |
| Cobalt | 0.42 / 0.100 | Solid |
| Copper | 0.39 / 0.093 | Solid |
| Chromium | 0.46 / 0.110 | Solid |
| Tin | 0.21 / 0.050 | Solid |
| Iron (pure) | 0.45 / 0.108 | Solid |
| Cast iron (gray iron) | 0.46 / 0.110 | Solid |
| Wrought iron | 0.50 / 0.119 | Solid |
| Lithium | 3.57 / 0.853 | Solid |
| Magnesium | 1.05 / 0.251 | Solid |
| Manganese | 0.48 / 0.115 | Solid |
| Mercury | 0.14 / 0.033 | Liquid |
| Molybdenum | 0.25 / 0.060 | Solid |
| Nickel | 0.44 / 0.105 | Solid |
| Niobium (Columbium) | 0.27 / 0.065 | Solid |
| Gold | 0.13 / 0.031 | Solid |
| Palladium | 0.24 / 0.057 | Solid |
| Silver | 0.23 / 0.055 | Solid |
| Platinum | 0.13 / 0.031 | Solid |
| Lead | 0.13 / 0.031 | Solid |
| Potassium | 0.75 / 0.179 | Solid |
| Silicon | 0.71 / 0.170 | Solid |
| Sodium | 1.21 / 0.289 | Solid |
| Tantalum | 0.14 / 0.033 | Solid |
| Titanium | 0.54 / 0.129 | Solid |
| Tungsten | 0.13 / 0.031 | Solid |
| Uranium | 0.12 / 0.029 | Solid |
| Vanadium | 0.39 / 0.093 | Solid |
| Tungsten | 0.13 / 0.031 | Solid |
| Zirconium | 0.27 / 0.065 | Solid |
| Water (liquid, 20 °C) | 4.18 / 0.998 | Liquid |
| Water (saturated steam, 100 °C) | 2.08 / 0.497 | Gas |
| Dry air (0 °C, 1 atm) | 1.005 / 0.240 | Gas |
| Typical mineral oil | 1.67 – 2.09 / 0.40 – 0.50 | Liquid |
| Concrete | 0.88 / 0.210 | Solid |
| Common brick | 0.84 / 0.201 | Solid |
| Glass (borosilicate) | 0.75 / 0.179 | Solid |
| Wood (pine, dry) | 1.70 / 0.406 | Solid |

## Factors Influencing Specific Heat

The specific heat value of a material is not an absolute constant, but varies with thermodynamic conditions and the structure of the material. The main factors include:

- **Temperature:** in metals, specific heat tends to increase slightly with temperature, especially at low temperatures where it deviates from the Dulong-Petit limit. In fluids such as water, c_p exhibits a minimum near 35 °C / 95 °F.
- **Pressure:** in liquids and solids the effect is small and often negligible in engineering calculations; in gases, pressure significantly modifies density and therefore the behavior of c_p, particularly near the critical point.
- **Thermodynamic phase:** the same substance presents different values depending on whether it is in solid, liquid, or gaseous phase. Water vapor at 100 °C has approximately half the specific heat of liquid water at 20 °C.
- **Composition and microstructure:** in alloys, specific heat can be estimated with good accuracy by a weighted average of the values of the constituent elements (Neumann-Kopp rule), provided no phase transformations occur.
- **Atomic bonding and molecular weight:** materials with light atoms and strong bonds (such as beryllium or lithium) show high values; heavy elements with weak metallic bonds (such as lead, gold, or platinum) exhibit low specific heats, on the order of 0.13 kJ/(kg·K) / 0.031 Btu/(lb·°F).

## Selection Criteria in Engineering Applications

The choice of the appropriate material or fluid based on its specific heat depends on the thermal objective of the system:

- **Thermal energy storage:** materials with high specific heat are preferred, such as water (≈ 4.18 kJ/(kg·K) / 0.998 Btu/(lb·°F)) or lithium (3.57 kJ/(kg·K) / 0.853 Btu/(lb·°F)), because they accumulate more energy per unit mass for the same temperature rise.
- **Heat transfer fluids:** water is the reference fluid due to its high c_p, low cost, and low toxicity. In cryogenic or high-temperature applications, thermal oils or molten salts are used with typical values between 1.5 and 2.5 kJ/(kg·K) / 0.36–0.60 Btu/(lb·°F).
- **Heat exchangers and heat sinks:** metals such as aluminum (0.91 kJ/(kg·K) / 0.217 Btu/(lb·°F)) balance good thermal conductivity with sufficient specific heat to absorb load peaks.
- **Components subjected to rapid thermal cycles:** materials with low specific heat (e.g., tungsten, 0.13 kJ/(kg·K) / 0.031 Btu/(lb·°F)) heat up and cool down with little energy, reducing thermal inertia.
- **Building structures:** concrete (0.88 kJ/(kg·K) / 0.210 Btu/(lb·°F)) and brick (0.84 kJ/(kg·K) / 0.201 Btu/(lb·°F)) act as passive thermal mass, attenuating daily temperature fluctuations.

## Example of Thermal Energy Calculation

It is desired to heat a 5 kg (11.02 lb) carbon steel piece from 20 °C (68 °F) to 150 °C (302 °F) for a heat treatment. The specific heat of carbon steel is taken from the table as c_p = 0.49 kJ/(kg·°C) / 0.117 Btu/(lb·°F), considering that 1 °C increase is equivalent to 1 K for temperature difference purposes.

The required energy is calculated using q = m · c_p · ΔT.

ΔT = 150 °C − 20 °C = 130 °C (equivalent to 234 °F).

q = 5 kg × 0.49 kJ/(kg·°C) × 130 °C = 318.5 kJ

In English units:

q = 11.02 lb × 0.117 Btu/(lb·°F) × 234 °F = 301.8 Btu

Therefore, approximately 319 kJ (302 Btu) must be supplied to the piece to reach the target temperature, without considering losses to the environment.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/specific-heat-metals-d_152.html
- **efunda.com**: https://www.efunda.com/materials/water/steamtable_sat.cfm?search_string=e%20properties
- **thermopedia.com**: https://www.thermopedia.com/content/1140/?tid=110
