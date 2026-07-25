---
title: "Disc clutches types"
sidebar:
  label: "Disc clutches types"
description: "Technical reference: Disc clutches types"
keywords: ["disc clutch types single multi-plate", "machine-elements"]
category: "machine-elements"
topic: "clutches-brakes"
subcategory: "disc-clutches"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-25"
verified: true
---
A disc clutch transmits up to 500 N·m / 369 ft·lb of torque through friction between flat surfaces, allowing to engage and disengage motion between a driving shaft and a driven shaft. Its principle is based on the axial pressure of one or more friction discs against a flywheel or pressure plate, modulating power transfer in mechanical and automotive systems.

At 3000 rpm a solid steel disc of 200 mm radius experiences a radial centrifugal stress close to 10,3 MPa / 1494 psi. The transmission capacity depends on the contact force, the coefficient of friction, and the effective radius. The stress in a rotating disc is determined by the following expression:

> **σ_z = (ρ · ω² · r²) / 3**

| Variable | Symbol | SI Unit |
| --- | --- | --- |
| Radial stress | σ_z | Pa (N/m²) |
| Material density | ρ | kg/m³ |
| Angular velocity | ω | rad/s |
| Disc radius | r | m |

For a thin annular geometry, the simplified equation is:

> **σ_z = ρ · ω² · r_m²**

where r_m represents the mean radius of the ring in meters.

## Types of Disc Clutches
There are 4 main configurations ranging from light applications of 50 N·m / 37 ft·lb to industrial systems with more than 10 000 N·m / 7376 ft·lb.

| Type | Friction surfaces | Environment | Usual torque range (N·m / ft·lb) | Representative application |
| --- | --- | --- | --- | --- |
| Single-disc dry | 2 | Air | 100 – 800 N·m / 74 – 590 ft·lb | Cars with manual transmission |
| Single-disc wet | 2 | Oil | 80 – 600 N·m / 59 – 443 ft·lb | Motorcycles, compact machinery |
| Multi-disc dry | 4 to 10 | Air | 500 – 3000 N·m / 369 – 2213 ft·lb | Racing vehicles, industrial clutches |
| Multi-disc wet | 6 to 20 | Oil | 200 – 10 000+ N·m / 148 – 7376+ ft·lb | Automatic transmissions, heavy machinery, high-frequency systems |

## Materials and Friction Coefficients
The dynamic friction coefficient of a standard organic lining varies between 0,25 and 0,40 on steel, with an operating temperature limit of 250 °C / 482 °F. The following table lists the most common materials in clutch discs and linings.

| Lining material | Friction coefficient μ (dynamic) | Maximum service temperature (°C / °F) | Density (kg/m³ / lb/ft³) | Remarks |
| --- | --- | --- | --- | --- |
| Organic (cellulose-based) | 0,25 – 0,40 | 250 °C / 482 °F | 1100 – 1300 kg/m³ / 69 – 81 lb/ft³ | Low noise, standard automotive clutches |
| Semi-metallic | 0,30 – 0,45 | 400 °C / 752 °F | 1800 – 2100 kg/m³ / 112 – 131 lb/ft³ | Good heat dissipation, severe duty |
| Ceramic (copper-based) | 0,35 – 0,55 | 600 °C / 1112 °F | 2000 – 2500 kg/m³ / 125 – 156 lb/ft³ | High performance, racing |
| Sintered metallic | 0,30 – 0,50 | 700 °C / 1292 °F | 2500 – 3000 kg/m³ / 156 – 187 lb/ft³ | Heavy machinery, wet clutches |
| Paper composite material | 0,10 – 0,15 | 180 °C / 356 °F | 900 – 1100 kg/m³ / 56 – 69 lb/ft³ | Exclusive for wet clutches with circulating oil |

The density and design stress of the metallic discs influence the maximum permissible speed. Below are indicative values for materials used in carriers and flywheels.

| Disc material | Density (kg/m³ / lb/ft³) | Typical design stress (MPa / ksi) |
| --- | --- | --- |
| Aluminum alloy | 2700 kg/m³ / 169 lb/ft³ | N/D |
| Birch plywood | 700 kg/m³ / 44 lb/ft³ | 30 MPa / 4,4 ksi |
| Carbon-epoxy composite 40% | 1550 kg/m³ / 97 lb/ft³ | 750 MPa / 109 ksi |
| E-glass fiber-epoxy 40% | 1900 kg/m³ / 119 lb/ft³ | 250 MPa / 36 ksi |
| Kevlar fiber-epoxy 40% | 1400 kg/m³ / 87 lb/ft³ | 1000 MPa / 145 ksi |
| Maraging steel | 8000 kg/m³ / 499 lb/ft³ | 900 MPa / 131 ksi |
| Titanium alloy | 4500 kg/m³ / 281 lb/ft³ | 650 MPa / 94 ksi |
| S-glass fiber-epoxy | 1900 kg/m³ / 119 lb/ft³ | 350 MPa / 51 ksi |

## Torque Transmission Capacity
A single-disc clutch of 220 mm diameter and µ = 0,35 can transmit about 450 N·m / 332 ft·lb with an axial force of 5 kN / 1124 lbf. The fundamental design equation is:

> **T = n · μ · F · r_m**

| Variable | Meaning | SI Unit |
| --- | --- | --- |
| T | Transmitted torque | N·m |
| n | Number of friction surfaces (2 per disc) | — |
| μ | Dynamic friction coefficient | — |
| F | Axial contact force | N |
| r_m | Mean radius of lining | m |

The capacity scales linearly with the number of discs in multi-disc configurations, although heat dissipation and pack stiffness impose practical limits.

## Selection Criteria
It must be verified that the nominal torque of the clutch exceeds at least by a factor of 1,5 the maximum torque of the engine or driving load, even at 6000 rpm in automotive applications. The key criteria are:

| Parameter | Recommended criterion | Verification method |
| --- | --- | --- |
| Maximum system torque | Safety factor ≥ 1,5 | T_clutch ≥ 1,5 × T_engine |
| Permissible angular speed | Below disc critical speed | Centrifugal stress calculation (σ_z ≤ σ_adm) |
| Slipping energy | Dissipation without exceeding lining T_max | Thermal calculation for repetitive clutches |
| Duty cycle | Service life ≥ 10⁶ cycles for industrial applications | Accelerated wear test |
| Environment | Dry or wet depending on oil presence and cooling | Chemical compatibility of lining |
| Available space | Multi-disc to reduce outer diameter | Radial sizing |

## Assembly and Tolerances
The permissible eccentricity between the crankshaft and the gearbox input shaft must not exceed 0,15 mm / 0,006 in to avoid vibrations and premature wear.

| Assembly parameter | Typical tolerance | Verification tool |
| --- | --- | --- |
| Axial disc play | 0,5 – 1,0 mm / 0,020 – 0,039 in | Thickness gauge |
| Permissible radial eccentricity | ≤ 0,15 mm / 0,006 in | Dial indicator |
| Pressure plate-flywheel parallelism | ≤ 0,10 mm / 0,004 in | Dial indicator on the plate |
| Tightening torque of fixing screws | 25 – 60 N·m / 18 – 44 ft·lb (according to size and grade) | Calibrated torque wrench |
| Angular alignment of the assembly | ≤ 0,5° | Laser aligner or dial indicator |

Centering must be performed with a specific mandrel before finally tightening the housing. In wet multi-disc clutches, it is recommended to purge the oil circuit to remove air pockets.

## Applications by Sector
Wet multi-disc clutches dominate in heavy machinery where more than 10 kW / 13,4 thermal hp must be dissipated during slipping.

| Sector | Recommended clutch type | Technical justification |
| --- | --- | --- |
| Passenger car | Single-disc dry with damper | Cost, engagement smoothness, simple maintenance |
| Motorcycle | Single-disc wet / multi-disc wet | Compact space, integrated cooling in engine oil |
| Competition vehicle | Multi-disc dry with high ceramic coefficient | Fast shifting, high thermal resistance |
| Agricultural machinery | Multi-disc wet | Severe cycles, long service life, slip control |
| Automatic automotive transmission | Multi-disc wet with electro-hydraulic control | Smooth shifts, high torque density |
| Construction equipment | High-capacity multi-disc wet | Resistance to overloads and extreme vibrations |
| Portable tool (chainsaw) | Centrifugal single-disc | Progressive automatic engagement with rpm |

## Advantages and Limitations
A wet multi-disc clutch can extend service life up to 500,000 cycles under controlled lubrication and temperature conditions.

| Type | Advantages | Limitations |
| --- | --- | --- |
| Single-disc dry | Mechanical simplicity, low cost, high efficiency in engaged state | Lower heat dissipation, larger diameter for high torques |
| Single-disc wet | Smooth engagement, integrated cooling | Drag losses in oil bath |
| Multi-disc dry | High torque capacity in compact diameter, fast response | Limited cooling, more aggressive wear |
| Multi-disc wet | Maximum torque capacity, excellent cooling, long service life | Complexity, higher cost, specialized maintenance |

## Maintenance and Service Life
Lining thickness inspection must be performed every 30,000 km / 18,641 mi in mixed-use automobiles; a 50% reduction relative to the original thickness requires disc replacement.

| Component | Wear indicator | Inspection frequency | Corrective action |
| --- | --- | --- | --- |
| Friction lining | Remaining thickness < 50% | 30 000 – 60 000 km / 18 641 – 37 282 mi | Disc replacement |
| Diaphragm springs | Force loss > 15% | 100 000 km / 62 137 mi or as judged | Pressure plate replacement |
| Drive disc | Deformation > 0,3 mm / 0,012 in | At each lining change | Resurfacing or replacement |
| Actuation system | Free play outside 0,6 – 1,5 mm / 0,024 – 0,059 in | Annual inspection | Adjust to specification |

Wet clutches require periodic oil analysis to detect metal particles and monitor the degradation of anti-wear additives.

## Frequently Asked Questions (FAQ)
### What is the difference between a dry clutch and a wet clutch?
### When is it advisable to choose a multi-disc clutch instead of a single-disc clutch?
### What friction coefficient should I consider for design calculations?
### How does temperature affect the service life of a disc clutch?
### What assembly tolerances are critical in an automotive clutch?
### Can a multi-disc clutch be installed in an original manual transmission?

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/stress-rotation-disc-ring-body-d_1752.html
- **mcmaster.com**: https://www.mcmaster.com/products/clutches/
