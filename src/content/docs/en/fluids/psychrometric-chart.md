---
title: "Psychrometric chart interpretation"
sidebar:
  label: "Psychrometric chart interpretation"
description: "Technical reference: Psychrometric chart interpretation"
keywords: ["psychrometric chart humidity enthalpy temperature", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "psychrometric-chart"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-25"
verified: true
---
The psychrometric chart is a diagram that graphically represents the thermodynamic properties of moist air at a constant barometric pressure, typically 101.325 kPa / 29.921 inHg. It allows rapid visual determination of 7 interrelated properties: dry-bulb temperature, wet-bulb temperature, relative humidity, specific humidity, enthalpy, specific volume, and dew-point temperature, knowing only two of them. Its main application covers the design and analysis of HVAC systems, industrial drying, and meteorology, facilitating the interpretation of heating, cooling, humidification, and dehumidification processes without solving complex equations.

## Psychrometric Properties Represented

The lines and curves of the psychrometric chart encode six fundamental magnitudes of moist air. The following table summarizes their definition, units, and characteristic shape on the standard diagram at 101.325 kPa.

| Property | Definition | Symbol | Units (SI / Imperial) | Shape on the chart |
|---|---|---|---|---|
| Dry-bulb temperature | Air temperature measured with an ordinary thermometer exposed to the airflow, shielded from direct radiation. | T_db | °C / °F | Vertical parallel lines on the lower horizontal axis. |
| Specific humidity | Mass of water vapor per unit mass of dry air. | W, ω | g/kg / gr/lb | Horizontal parallel lines on the right vertical axis. |
| Relative humidity | Percentage ratio of the partial pressure of water vapor to the saturation pressure at the same dry-bulb temperature. | RH, φ | % | Upward concave curves; the top curve (100 %) is the saturation line. |
| Wet-bulb temperature | Temperature reached by a mass of air when water evaporates into it until adiabatic saturation. | T_wb | °C / °F | Oblique descending lines from left to right, nearly parallel to constant enthalpy lines. |
| Dew-point temperature | Temperature at which water vapor begins to condense if the air is cooled at constant pressure and humidity. | T_dp | °C / °F | Read on the saturation line, following horizontally from the state point. |
| Specific enthalpy | Total energy content of moist air per unit mass of dry air (sensible heat + latent heat). | h | kJ/kg / Btu/lb | Oblique lines nearly parallel to wet-bulb lines; usually read on a left marginal scale. |
| Specific volume | Volume occupied by the dry air–water vapor mixture per unit mass of dry air. | v | m³/kg / ft³/lb | Oblique lines with a steeper slope than wet-bulb lines; drawn at regular intervals. |

## Fundamental Calculation Equations

The properties of moist air are governed by psychrometric relations that link partial vapor pressure, temperature, and humidity. All partial pressures are expressed in kPa, and temperatures in °C, unless otherwise stated.

**Specific humidity (W) as a function of partial vapor pressure**

> **W = 0.622 × P_v / (P_atm − P_v)** _[kg vapor / kg dry air]_

where P_atm is the total barometric pressure and P_v the partial pressure of water vapor. In imperial units the same constant 0.622 is used, obtaining W in lb_vapor / lb_dry_air.

**Relative humidity (RH)**

> **RH = (P_v / P_vs) × 100** _[%]_

where P_vs is the saturation pressure of water vapor at the dry-bulb temperature of the air, calculable using correlations such as Antoine or Magnus.

**Enthalpy of the mixture (h)**

> **h = 1.006 × T + W × (2501 + 1.86 × T)** _[kJ/kg]_  
> **h = 0.24 × T + W × (1061 + 0.444 × T)** _[Btu/lb]_

The first term represents the sensible heat of dry air and the second the latent heat of water vapor, where T is the dry-bulb temperature in °C for the SI formula and in °F for the imperial formula.

**Saturation pressure (Magnus-Tetens correlation)**

> **P_vs = 0.61078 × exp[ (17.269 × T) / (T + 237.3) ]** _[kPa, with T in °C]_

This expression has an accuracy of ±0.1 % between 0 °C and 60 °C and forms the basis of many psychrometric charts.

## Reference Table of Moist Air Properties

The following values correspond to a standard barometric pressure of 101.325 kPa / 29.921 inHg and have been verified using psychrometric calculations based on the Magnus equations and ASHRAE correlations. Three representative points are presented to facilitate direct reading on the chart.

| Dry-bulb temperature (°C / °F) | Relative humidity (%) | Wet-bulb temperature (°C / °F) | Specific humidity (g/kg / gr/lb) | Enthalpy (kJ/kg / Btu/lb) | Specific volume (m³/kg / ft³/lb) | Dew-point temperature (°C / °F) |
|---|---|---|---|---|---|---|
| 21.1 °C / 70 °F | 60 % | 16.1 °C / 61 °F | 9.4 g/kg / 66 gr/lb | 42.0 kJ/kg / 18.1 Btu/lb | 0.857 m³/kg / 13.7 ft³/lb | 13.9 °C / 57 °F |
| 23.9 °C / 75 °F | 50 % | 17.2 °C / 63 °F | 9.4 g/kg / 66 gr/lb | 44.1 kJ/kg / 19.0 Btu/lb | 0.868 m³/kg / 13.9 ft³/lb | 13.3 °C / 56 °F |
| 30.0 °C / 86 °F | 70 % | 25.8 °C / 78.4 °F | 18.5 g/kg / 130 gr/lb | 72.5 kJ/kg / 31.2 Btu/lb | 0.893 m³/kg / 14.3 ft³/lb | 24.1 °C / 75.4 °F |

## Chart Interpretation Criteria

Correctly interpreting a psychrometric chart requires first locating a state point by knowing at least two independent properties. The standard procedure follows these steps:

1. **Locating the state point:** with a given dry-bulb temperature and relative humidity, ascend vertically from the lower horizontal axis to the corresponding RH curve.
2. **Reading specific humidity:** from the state point, draw a horizontal line to the right until it intersects the specific humidity scale (right vertical axis or auxiliary line).
3. **Determining wet-bulb temperature:** follow the oblique wet-bulb line passing through the point until it intersects the saturation line (RH = 100 %); the dry-bulb temperature read at that intersection is the wet-bulb temperature.
4. **Determining dew-point temperature:** from the state point, draw a horizontal line to the saturation line; the dry-bulb temperature at that intersection is the dew-point temperature.
5. **Reading enthalpy:** extend the wet-bulb line to the marginal enthalpy scale, or interpolate between the constant enthalpy lines drawn on the diagram.
6. **Specific volume:** evaluate the distance from the point to the constant specific volume lines and interpolate linearly.

The saturation line (RH = 100 %) represents the physical limit of the mixture: above it, vapor condenses and fog forms. This property is critical in the design of cooling coils and condensation control.

## Air Processes Representable on the Chart

The psychrometric chart allows visualization of air evolution paths when subjected to elementary thermodynamic transformations. The following table summarizes the five classic processes and the movement of the state point.

| Process | Description | Trajectory on the chart | Changing parameters |
|---|---|---|---|
| Sensible heating | Heat is added without modifying specific humidity. | Horizontal line to the right. | T_db increases, RH decreases; W and T_dp constant. |
| Sensible cooling | Heat is removed without modifying specific humidity. | Horizontal line to the left. | T_db decreases, RH increases; if saturation is reached, condensation occurs. |
| Adiabatic humidification | Liquid water is injected at wet-bulb temperature; the air cools and gains humidity. | Oblique line of constant wet-bulb upward–left. | W and RH increase; T_db decreases; enthalpy practically constant. |
| Cooling with dehumidification | Air is cooled below the dew point, condensing water. | Diagonal descending from left to right and downward, below the saturation line. | W and T_db decrease; RH ≈ 100 % in the active zone. |
| Adiabatic mixing of two streams | Two air masses with different conditions are combined without heat exchange with the surroundings. | The resulting point falls on the straight line joining the two state points, positioned according to the mass ratio. | Intermediate weighted properties. |

## Frequently Asked Questions (FAQ)

### How is specific humidity determined without a direct scale on the chart?
Specific humidity is read by translating the state point horizontally to the right vertical axis. If the chart lacks this axis, the inclined auxiliary line that scales humidity in grains per pound or grams per kilogram is used.

### Why is the wet-bulb temperature always less than or equal to the dry-bulb temperature?
Evaporation of water from the wick covering the wet bulb consumes latent heat, cooling the thermometer. The drier the air, the greater the psychrometric difference (T_db − T_wb). Both temperatures coincide only when the air is saturated (RH = 100 %).

### What effect does altitude have on the psychrometric chart?
As barometric pressure decreases with altitude, air can hold more water vapor per unit mass of dry air at the same temperature. The chart expands vertically, shifting the relative humidity curves and the saturation line upward. Therefore, specific charts for different pressures are required.

### Is it valid to use the same chart for heating and cooling processes?
Yes, the psychrometric chart is applicable to any moist air process within the represented temperature range, whether heating, cooling, humidification, or dehumidification. Each process is drawn as a straight or curved line on the same diagram.

### How is enthalpy read if the state point does not exactly coincide with a drawn line?
Visually interpolate between the two enthalpy lines closest to the point, keeping an orientation parallel to the wet-bulb lines. Many charts include a marginal scale that allows reading the value directly by extending that parallel.

### What does the fog region represent?
It is the region above the saturation line, where the air cannot hold all the vapor in the gaseous state and visible condensation (fog or dew) occurs. In HVAC design, entering this zone is avoided to prevent corrosion and drip in ducts.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/psychrometric-chart-d_816.html
- **efunda.com**: https://www.efunda.com/
- **thermopedia.com**: https://www.thermopedia.com/content/1150/
