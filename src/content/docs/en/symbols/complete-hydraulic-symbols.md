---
title: "Complete hydraulic symbols"
sidebar:
  label: "Complete hydraulic symbols"
description: "Technical reference: Complete hydraulic symbols"
keywords: ["complete hydraulic symbols reference chart", "symbols"]
category: "symbols"
topic: "hydraulic-pneumatic"
subcategory: "hydraulic-symbols-complete"
skill: "standards-guide"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
Standardized hydraulic symbology, according to the ISO 1219 series and complementary standards, compiles more than 900 graphical symbols to represent fluid power components in circuit diagrams. These pictograms allow unambiguous interpretation of the function of pumps, valves, actuators and accessories in engineering drawings, eliminating language barriers and facilitating the design, assembly and maintenance of oil-hydraulic systems.

## Standardized hydraulic symbol table

| Symbol | Meaning | Reference standard | Application example |
|---------|-------------|---------------------|------------------------|
| ○▶ | Fixed displacement hydraulic pump, unidirectional | ISO 1219-1, ASME Y32.10 | Main power supply for a hydraulic press. |
| ○◀ | Fixed displacement hydraulic motor, unidirectional | ISO 1219-1, ASME Y32.10 | Drive of a winch with a gear motor. |
| ○▶╱ | Variable displacement pump, unidirectional (manual control) | ISO 1219-1 | Flow regulation in a power steering system. |
| ○↔ | Bidirectional fixed displacement pump/motor | ISO 1219-1 | Hydrostatic transmission circuit of a skid-steer loader. |
| □ | Single-acting cylinder, return by external force | ISO 1219-1 | Manual hydraulic lifting jack. |
| □├┤ | Double-acting cylinder, single rod | ISO 1219-1, ASME Y32.10 | Forward and return motion of the carriage in a grinding machine. |
| □├┤⫶ | Double-acting cylinder with adjustable cushioning at both ends | ISO 1219-1 | Smooth movement of a transfer platform. |
| ▶❘ | Check valve (non-return) without spring | ISO 1219-1 | Blocking reverse flow in filter return line. |
| ▶❘◁ | Check valve with spring | ISO 1219-1 | Pump protection against flow reversal. |
| □→ | 2/2 directional control valve, normally closed, manual actuation | ISO 1219-1 | Simple on-off control in a lubrication line. |
| □→┬□←□ | 3/2 directional control valve, push-button actuation, spring return | ISO 1219-1 | Piloting of a single-acting cylinder with quick exhaust. |
| □→┬□←┬□→ | 4/3 directional control valve, tandem center, lever actuation | ISO 1219-1, ASME Y32.10 | Directional control of a double-acting cylinder in an excavator. |
| □→┬□← (with solenoid) | 4/2 valve, electrohydraulic pilot, spring return | ISO 1219-1 | Automation of a clamping cycle in a machine tool. |
| □→❘ (pilot operated) | Direct acting pressure relief valve | ISO 1219-1 | Overpressure protection at pump outlet. |
| □→❘⫷ | Pilot operated pressure regulating valve, with external drain | ISO 1219-1 | Pressure control in a high-precision press circuit. |
| □→⫻ | Pressure reducing valve, two-way | ISO 1219-1 | Supplying a secondary branch at 70 bar (approx. 1015 psi) from a main line of 210 bar (approx. 3046 psi). |
| □→╲ | Adjustable, one-way flow control valve | ISO 1219-1 | Speed regulation of a clamping cylinder advance. |
| □→╱ (with check) | Flow control valve with check (flow regulator) | ISO 1219-1 | Free return speed control in a hydraulic tipper. |
| ▷ –| Shut-off valve (gate valve) | ISO 1219-1 | Isolation of the accumulator during maintenance tasks. |
| ⊞ | Bladder hydraulic accumulator, with safety block | ISO 1219-1 | Energy storage for emergency in a hydraulic power unit. |
| ⊟ | Hydraulic reservoir (tank), open to atmosphere | ISO 1219-1 | General fluid return to power unit. |
| ––⊖–– | Hydraulic filter with clogging indicator | ISO 1219-1 | Filtration in pressure line after pump. |
| ––⊘–– | Heat exchanger (cooler) | ISO 1219-1 | Cooling of fluid in an injection molding machine circuit. |
| ◉→ (with p) | Pressure gauge (local indicator) | ISO 1219-1 | Monitoring of working pressure in the control manifold. |
| ◉→ (with T) | Thermometer (temperature indicator) | ISO 1219-1 | Control of oil temperature at heat exchanger inlet. |

*Note: Symbols have been represented with Unicode characters as a visual approximation. The exact standardized representation can be found in ISO 1219-1 and ASME Y32.10. The "Symbol" cells show only the main configuration; actuators and pilot lines are omitted for brevity.*

## Reference standards

Hydraulic symbols are internationally standardized to ensure interoperability of drawings. The fundamental standards are:

- **ISO 1219-1:2012** – *Fluid power systems and components — Graphical symbols and circuit diagrams — Part 1: Graphical symbols*. Defines more than 800 basic and functional symbols for pumps, motors, cylinders, valves and accessories.
- **ISO 1219-2:2012** – *Part 2: Circuit diagrams*. Establishes rules for the preparation and interpretation of circuit diagrams using the symbols from part 1.
- **ISO 1219-3:2016** – *Part 3: Symbol modules and connected symbols*. Deals with symbol modules and their interconnection in complex diagrams.
- **ISO 14617** – *Graphical symbols for diagrams*. Series covering symbols for general engineering applications; parts 5 through 10 contain specific symbols for pumps, valves, actuators and fluid power converters.
- **ASME Y32.10** – *Graphic Symbols for Fluid Power Diagrams*. ASME historical standard (1967, reaffirmed in 1999) providing a complete system of graphical symbols for fluid power diagrams, widely referenced in American industry.
- **DIN ISO 1219-1** – German adoption identical to ISO 1219-1, commonly used in Europe.

## Application in real diagrams

In a drawing of a typical hydraulic circuit (P&ID or schematic diagram), the symbols are combined following connection rules:

- A **pump** (○▶) feeds a **pressure relief valve** (□→❘) that protects the system. Next, a **4/3 directional control valve** (□→┬□←┬□→) controls the direction of fluid to a **double-acting cylinder** (□├┤). A **filter** (––⊖––) in the return line and a **pressure gauge** (◉→p) complete the schematic.
- In more complex systems, **accumulators** (⊞) are added to stabilize pressure, **flow control valves** (□→╱) with check valves to regulate speed, and **heat exchangers** (––⊘––) to keep fluid temperature within 40–60 °C / 104–140 °F.
- Reading a drawing requires identifying the normal position of valves (squares adjacent to the spring) and following the flow direction indicated by the arrows. Symbols are complemented with tags referencing equipment codes (according to ISA or project standards) and line numbers, allowing full system tracing.

## Frequently Asked Questions (FAQ)
### What is the difference in the symbol between a fixed displacement pump and a variable displacement pump?
The fixed displacement pump is drawn with a circle and an outlet arrow (○▶), while the variable displacement pump adds a diagonal arrow through the circle (○▶╱), indicating the possibility of adjusting displacement.

### Which standard should I use for diagrams in America versus Europe?
In America it is common to follow ASME Y32.10, although ISO 1219-1 is increasingly adopted. In Europe and internationally, the ISO 1219 series predominates. Both are conceptually equivalent and share most basic symbols.

### How is a double-acting cylinder with cushioning represented?
Small rectangles with a throttled passage are added at the cylinder ends, represented as parallel lines with a restriction symbol. In the table it is shown approximately as □├┤⫶.

### Do the symbols include information about size or flow?
No. Graphical symbols indicate function and type of component, but not dimensions, flow rates or pressures. Those data are reflected in the technical specification and bill of materials of the drawing.

### Why is a directional control valve represented with several squares?
Each square corresponds to a valve position (normal and actuated). Thus, a 4/3 has three squares, showing the ports connected in each state. Arrows inside the squares indicate flow direction.

### What is the symbol for a pilot operated relief valve?
It is similar to the direct acting one (□→❘) but includes an additional trace representing the pilot line, usually drawn with a dashed line and a small orifice towards the spring (□→❘⫷). This indicates that opening is controlled by pressure at another point in the circuit.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/p-id-piping-instrumentation-diagram-d_466.html
- **iso.org**: https://www.iso.org/ics/23.100.01.html
- **asme.org**: https://www.asme.org/codes-standards/find-codes-standards/y32-10-graphic-symbols-fluid-power-diagrams
