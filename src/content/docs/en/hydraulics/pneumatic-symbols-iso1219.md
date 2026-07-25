---
title: "Pneumatic symbols ISO 1219"
sidebar:
  label: "Pneumatic symbols ISO 1219"
description: "Technical reference: Pneumatic symbols ISO 1219"
keywords: ["ISO 1219 pneumatic symbols valves cylinders", "hydraulics"]
category: "hydraulics"
topic: "pneumatic-system"
subcategory: "symbols-pneumatic"
skill: "standards-guide"
launch_phase: 7
last_updated: "2026-07-25"
verified: true
---
ISO 1219-1 establishes a standardized system of graphic symbols to represent components and functions in pneumatic and hydraulic circuits, with the aim of ensuring unambiguous interpretation of technical diagrams internationally. This reference guide provides a comprehensive overview of pneumatic symbols under this standard, including basic structures, detailed symbols for valves, actuators, accessories, calculation formulas, and design recommendations. Diagrams typically operate at a standard working pressure of 6 bar / 87 psi in general industrial applications, and can reach up to 10 bar / 145 psi in more demanding systems.

## Basic structure of ISO 1219 symbols
ISO 1219-1 defines over 200 graphic symbols for pneumatic components, organized according to a functional logic composed of basic elements. Each symbol is constructed by combining squares representing working positions, connection lines indicating flow paths, and piloting or actuation symbols that define the type of control.

| Graphic element | Meaning |
| --- | --- |
| Square with number of positions (two or three adjacent squares) | Each square represents a different switching position of a directional valve; the complete symbol shows as many squares as the valve has positions. |
| Arrow inside a square | Indicates the direction of fluid flow in that position; can be bidirectional or unidirectional. |
| T-line inside a square | Marks a blocked port or closed path in that working position. |
| Solid triangle over a port | Represents an exhaust or discharge to atmosphere, typical in pneumatic circuits. |
| Spring (zigzag broken line) | Symbolizes a spring return that returns the valve to its rest position. |
| Rectangle with diagonal line and label | Indicates a restriction or throttling of air flow. |

## Actuator symbols
Standard ISO 6432 pneumatic cylinders have standardized piston diameters from 8 mm / 0.31 in to 25 mm / 0.98 in for single and double acting cylinders. ISO 1219 symbology clearly distinguishes between both construction types and their cushioning or stroke variants.

| Symbol | Description |
| --- | --- |
| Simple rectangle with a single port and a spring drawn on the opposite end | Single acting cylinder, spring return. A single compressed air inlet port moves the rod; the spring retracts it. |
| Rectangle with two ports, no spring symbol, with two connection lines on each side of the piston | Double acting cylinder. Both movements (extension and retraction) are performed by compressed air through alternate ports. |
| Rectangle with fixed cushioning at one or both ends, indicated by a small segment on the port side | Cylinder with adjustable or fixed pneumatic cushioning; deceleration at end of stroke is symbolized by a trapezoid or restriction. |
| Double superimposed rectangle with through rod | Double rod cylinder, with the piston accessible from both sides; useful in applications requiring coupling at both ends. |
| Rectangle with a single port and no spring, usually accompanied by a pneumatic motor symbol | Rotary pneumatic motor or limited rotation actuator (rack and pinion). It is represented by a circle or semicircle indicating angular motion. |

## Directional valve symbols
Directional valves control the path of compressed air to the actuators and are classified according to the number of ways (ports) and positions. A 5/2 configuration (five ports, two positions) is the most common in industrial pneumatic circuits for controlling double acting cylinders, typically operating at flow rates up to 1200 l/min / 42.4 cfm.

| Designation | Basic ISO symbol | Function |
| --- | --- | --- |
| 2/2 way NC (normally closed) | Two squares; the rest square shows a blocked path (internal T), the working square shows a straight-through arrow. | Simple on/off control for air. Closed at rest; when activated, allows flow. |
| 3/2 way NC | Two squares; rest with block (T) and exhaust, work with arrow from inlet to outlet and blocked exhaust. | Supplies a single acting cylinder: inlet, outlet to cylinder, and exhaust. Closed at rest; when activated, connects P→A and blocks exhaust. |
| 5/2 way monostable (spring return) | Two squares; rest with connection P to B and A to exhaust; work with connection P to A and B to exhaust. Both exhausts with triangles. | Controls double acting cylinder. At rest extends or retracts depending on connection; when activated, reverses direction. |
| 5/2 way bistable (double pilot) | Similar to monostable, but without spring; both squares show flow and exhaust positions. | Maintains the last activated position even if the pilot signal ceases; used with pneumatic controls over short distances. |
| 5/3 way closed center | Three squares; the center shows all ports blocked (T). The ends show flow and exhaust configurations. | Allows intermediate stopping of the cylinder at any point, blocking supply and exhaust. Used in pressing and positioning. |

## Blocking and flow valve symbols
Blocking and flow control elements allow controlling actuator speed and flow direction. A typical check valve opens with a spring pressure of 0.5 bar / 7.3 psi, while a shuttle valve (OR) switches flows on the order of 500 l/min / 17.7 cfm in G 1/8 size.

| Symbol | Component |
| --- | --- |
| Circle with an arrow crossing it and a spherical seat blocking the path (ball resting on a spring) | Check valve: allows flow in one direction only; the preloaded spring overcomes low pressure. |
| Circle with two inlets and one outlet, with a free shuttle inside | Shuttle valve (OR / shuttle): allows the higher pressure between the two inlets to pass to the common outlet. |
| Quick exhaust valve: combination of a T with exhaust triangle and check valve | When supply pressure drops, it opens a large exhaust port directly from the cylinder, discharging quickly. |
| One-way flow control: symbol of adjustable throttle (rectangle with diagonal and arrow) with check valve in parallel | One-way flow control valve: restricts flow in one direction (adjustable) and allows free flow in the opposite. |
| Two-way flow control: only the adjustable throttle symbol, without check valve | Symmetric restriction to air flow; used in pilot ports or as exhaust silencer. |

## Pressure valve symbols
Pressure valves protect the pneumatic system and regulate actuator force. A typical pressure relief valve is factory set to 10 bar / 145 psi, but can be adjusted between 1 bar / 14.5 psi and 16 bar / 232 psi via the adjustment knob.

| Symbol | Name |
| --- | --- |
| Box with an inlet port, an exhaust port, and an internal pressure pilot. The adjustable spring is represented with an arrow crossing the spring. | Pressure relief valve (safety): opens the exhaust when line pressure exceeds the spring set value. |
| Similar box but with external pilot connection (dashed line) and outlet to another working line instead of exhaust. | Sequence valve: allows flow to a secondary circuit once a set pressure is reached in the primary. |
| Symbol composed of a throttle in series with a two-port valve and an external pilot, all in one box. | Pressure regulator (reducer): maintains a constant output pressure regardless of variations in the inlet line. |
| Similar to the reducer, but with an integrated exhaust port to relieve overpressure at the outlet. | Pressure regulator with relief, typical of FRL units (filter-regulator-lubricator). |

## Accessories and line symbols
Accessories and lines complete the pneumatic diagram, from compressed air generation to conditioning. A typical compact FRL unit handles a flow rate up to 1500 l/min / 53 cfm with a maximum inlet pressure of 16 bar / 232 psi and offers particle filtration down to 5 µm / 0.0002 in.

| Symbol | Function |
| --- | --- |
| Circle with a diagonal line and a small purge collector at the bottom | Compressed air filter, usually with manual or automatic drain; retains particles and condensate. |
| Circle with an arrow to the right and a bowl half-full of oil | Lubricator: meters oil as a mist into the working line; installed after the regulator. |
| Triangle with an outlet line and a pressure inlet; the interior shows a spring and a poppet | Pressure regulator (independent symbol); adjusts working pressure via a manual knob. |
| Solid lines for main flow, dashed lines for pilot and control circuits. | Working, command, and pilot lines: solid line represents main conduits; dashed line represents pneumatic pilot lines. |
| Silencer symbol: a triangle with outlet to atmosphere and interior filled with dots | Silencer: reduces valve exhaust noise, placed on threaded discharge ports. |

## Pneumatic calculation formulas
The theoretical force developed by a pneumatic cylinder depends on the working pressure and the effective piston area. For a cylinder with 32 mm / 1.26 in diameter operating at 6 bar / 87 psi, the extension force is approximately 482 N / 108 lbf, while retraction force decreases to 415 N / 93 lbf due to the annular area of the rod. The general formula and rod speeds are calculated with the following expressions, typically for a speed range between 0.1 m/s / 0.33 ft/s and 1.5 m/s / 4.9 ft/s.

> **F_extension = p × (π × D² / 4) — F_spring**  
> **F_retraction = p × (π × (D² – d²) / 4)**

| Variable | Name | Typical units |
| --- | --- | --- |
| F | Cylinder force | N / lbf |
| p | Working gauge pressure | bar / psi (1 bar = 14.5038 psi) |
| D | Piston inner diameter | mm / in |
| d | Rod diameter | mm / in |
| F_spring | Spring return force (if any) | N / lbf |

Average rod speed:

> **v = Q / A**

| Variable | Name | Typical units |
| --- | --- | --- |
| v | Rod speed | m/s / ft/s |
| Q | Supplied volumetric flow rate | l/min / cfm (1 l/min = 0.035315 cfm) |
| A | Effective area (π × D² / 4 for extension) | mm² / in² |

## Component selection tables
The selection of standard pneumatic cylinders is based on piston diameter and required stroke. The standard diameters according to ISO 6431 for maximum pressures of 10 bar / 145 psi allow the following theoretical forces at 6 bar / 87 psi in extension:

| Piston diameter (mm / in) | Extension force at 6 bar (N / lbf) | Retraction force at 6 bar (N / lbf) | Recommended flow rate (l/min / cfm) for 0.5 m/s |
| --- | --- | --- | --- |
| 20 / 0.79 | 188 / 42.3 | 158 / 35.5 | 9.4 / 0.33 |
| 25 / 0.98 | 294 / 66.1 | 247 / 55.5 | 14.7 / 0.52 |
| 32 / 1.26 | 482 / 108.4 | 415 / 93.3 | 24.1 / 0.85 |
| 40 / 1.57 | 754 / 169.5 | 665 / 149.5 | 37.7 / 1.33 |
| 50 / 1.97 | 1178 / 264.8 | 1039 / 233.6 | 58.9 / 2.08 |
| 63 / 2.48 | 1870 / 420.4 | 1662 / 373.6 | 93.5 / 3.30 |
| 80 / 3.15 | 3016 / 678.0 | 2707 / 608.6 | 150.8 / 5.32 |

Standard working pressures for industrial pneumatic components range from 4 bar / 58 psi to 8 bar / 116 psi, with a nominal design pressure of 6 bar / 87 psi. Most pneumatic directional valves are tested at 6 bar with a declared nominal flow rate under standard conditions according to ISO 6358.

## Design notes
The interpretation of ISO 1219 symbols in a pneumatic diagram must consider that valves are drawn in their rest position (normally the position they adopt without pilot energy). The number of squares indicates the positions, and external connections are drawn aligned with the rest position. Piloting is represented to the left or right of the symbols, distinguishing between pneumatic piloting (triangle on dashed line) and electrical piloting (solenoid with slanted line and terminal). Reading a diagram follows the energy flow from the maintenance unit (FRL) to the actuators, which facilitates diagnosis of faults such as leaks or insufficient pressure. For sequential circuits, the step-by-step method with bistable memory valves is used, ensuring each movement is completed before starting the next.

## Frequently Asked Questions (FAQ)
### What is the difference between ISO 1219 symbols and CETOP symbols?
CETOP symbols are practically identical to ISO 1219, since the European committee CETOP adopted ISO standards as a basis. Differences may be found in obsolete representations or in piloting details of some old national standards.

### How is a single acting cylinder with spring return represented?
A rectangle with a single port (represented as a small circle or connection line) and a zigzag spring drawn on the opposite side of the port indicates return by elastic force.

### Why do some 5/3 valves have center exhaust?
The center position with open exhausts and blocked pressure (floating center) is used to allow free movement of the cylinder when stopped, such as in manual positioning systems, while the closed center locks the actuator in place.

### What does a solid triangle on a valve symbolize?
A solid triangle adjacent to the last square of the symbol indicates an exhaust to atmosphere without piping, typical in pneumatic valves after performing work on the actuator.

### Can ISO 1219 symbols be combined with electrical symbols in the same diagram?
Yes, ISO 1219 allows interconnection with electrical control symbols according to IEC 60617. Solenoid coils are drawn as slanted rectangles connected to the valve box, and electrical contacts are governed by their own standards.

### How is a valve symbol with three squares interpreted?
It represents a three-position valve; the center square shows the rest position (deactivated) and the two side squares show the working positions. Each square has its corresponding internal flow and exhaust connections.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/iso-valve-standards-d_375.html
- **engineersedge.com**: https://www.engineersedge.com/hydraulic/symbols/hydraulic_iso_schematic_symbols.htm
- **efunda.com**: https://www.efunda.com/math/hyperbolic/display.cfm?name=arccoth
