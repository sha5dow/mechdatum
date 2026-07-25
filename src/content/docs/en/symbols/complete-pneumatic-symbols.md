---
title: "Complete pneumatic symbols"
sidebar:
  label: "Complete pneumatic symbols"
description: "Technical reference: Complete pneumatic symbols"
keywords: ["complete pneumatic symbols reference chart", "symbols"]
category: "symbols"
topic: "hydraulic-pneumatic"
subcategory: "pneumatic-symbols-complete"
skill: "standards-guide"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
Standardized pneumatic symbology allows any compressed air circuit to be represented unambiguously. ISO 1219‑1 covers more than 120 symbols for fluid power systems, of which at least 45 correspond exclusively to pneumatic components. Below is the complete table of essential symbols, their practical interpretation, and the rules that every professional must know to read and draw pneumatic drawings without ambiguity.

## Pneumatic Symbols According to ISO 1219‑1

| Symbol | Component | Reference Standard | Use in Drawings |
| --- | --- | --- | --- |
| <pre> ╔══╗<br> ║ █ ╠═►<br> ╚═╤╝<br>   ∿</pre> | Single-acting cylinder, spring return | ISO 1219‑1 | Operation of gates, positioners that must automatically return to the rest position. |
| <pre> ╔══╗<br> ║ █ ╠═►<br> ╚══╝<br> P   A</pre> | Double-acting cylinder | ISO 1219‑1 | Movement of grippers, lifting tables, and any application requiring force in both directions. |
| <pre>  ┌───┐<br>〰〰┤ ╳ ├──A<br>  └─┬─┘<br>   T</pre> | 3/2-way directional control valve, spring return, pressure piloted | ISO 1219‑1 | Control of single-acting cylinders; typical connection P (pressure), A (work), T (exhaust). |
| <pre>  ┌───┐<br>∿∿┤ ╳ ├──A<br>  │   ├──B<br>  └─┬─┘<br>   R   P</pre> | 5/2-way directional control valve, spring return, pneumatic pilot | ISO 1219‑1 | Control of double-acting cylinders; ports P, A, B, R (common exhaust). |
| <pre>  ┌──┐<br>──┤ >├──<br>  └──┘</pre> | Throttle valve (flow control) | ISO 1219‑1 | Speed regulation in cylinders, fine flow adjustment. |
| <pre>  ┌──┐<br>──┤◄ ├──<br>  └──┘</pre> | Check valve | ISO 1219‑1 | Blocks flow in one direction; combined with the throttle to form one-way flow control valves. |
| <pre>────┤▲◄──┤────</pre> | One-way flow control valve | ISO 1219‑1 | Speed control in one direction of cylinder advance, leaving return free. |
| <pre>──┬──<br>  ♨</pre> | Pressure relief valve (safety) | ISO 1219‑1 | Overpressure protection; discharges to atmosphere when the set pressure is exceeded. |
| <pre>──┤▭├──<br>  ∿</pre> | Pressure regulator with spring | ISO 1219‑1 | Maintains constant working pressure downstream in the supply line. |
| <pre>────┤∿├────</pre> | Compressed air filter | ISO 1219‑1 | Removal of particles and condensate; first element of the FRL unit. |
| <pre>────┤▽├────</pre> | Lubricator | ISO 1219‑1 | Oil mist for lubricating pneumatic tools; placed after the regulator. |
| <pre>────┤╱◯├────</pre> | Compact FRL maintenance unit (Filter + Regulator + Lubricator) | ISO 1219‑1 | Standard compressed air treatment before machine entry. |
| <pre>  ┌───┐<br>──┤ ≈ ├──<br>  └───┘</pre> | Air motor | ISO 1219‑1 | Rotary drive in portable tools, mixers. |
| <pre>────┤▣├────</pre> | Compressor | ISO 1219‑1 | Generation of compressed air; symbol is usually accompanied by flow rate and nominal pressure. |
| <pre>──┤▢├──</pre> | Compressed air reservoir (receiver) | ISO 1219‑1 | Intermediate storage; dampens compressor pulsations. |
| <pre>  A<br> ║<br> ╨B<br> C</pre> | Selector valve (OR) | ISO 1219‑1 | Directs the higher-pressure signal from two inputs to the output. |
| <pre>  A<br> ╫<br> B<br> C</pre> | Dual-pressure valve (AND) | ISO 1219‑1 | There is output C only when both A and B receive pressure simultaneously. |
| <pre>──┤◥├──</pre> | Quick exhaust valve | ISO 1219‑1 | Accelerates cylinder emptying, improving cycle times. |

## Complementary Standards

Three international standards govern the representation of pneumatic circuits. ISO 1219‑1 (first edition 1991, revised in 2012) defines the basic graphic symbols for pumps, motors, cylinders, valves and accessories, while ISO 1219‑2 details the construction of circuit diagrams and includes naming rules. In Europe, DIN ISO 1219 is still used, which was the precursor of ISO. For instrumentation and piping diagrams (P&ID) it is complemented by ISA‑5.1, which unifies the identification letters of control loops, and by ISO 14617‑6, applicable in continuous industrial processes. All symbols shown in this guide respect the shapes and strokes established by ISO 1219‑1, guaranteeing interoperability between design and maintenance departments.

## Interpretation in Circuit Diagrams

A typical pneumatic diagram of an automated machine contains between 15 and 40 symbols arranged in functional layers. Reading is done from bottom to top: the air supply line (6 bar to 10 bar / 87 psi to 145 psi) is located at the bottom, the control valves in the center, and the actuators in the upper area. Each directional valve is labeled with a number of ports and positions (e.g., 3/2, 5/2) indicating how many connection ports it has and how many switching positions it has. The spring is always drawn next to the rest position of the valve. In P&ID drawings, pneumatic actuators are represented by a semicircle with a signal line, combining pure pneumatic symbology with the functional identification of the loop (e.g., "PIC" for a pressure indicator controller). Understanding the logical sequence of pilot signals and exhausts is key for troubleshooting and commissioning.

## Drawing Best Practices

ISO 1219‑1 recommends a minimum separation of 10 mm / 0.39 in between two adjacent symbols when drawing in A3 format or larger, to ensure readability after scanning. All elements must be numbered with a unique identifier following the "type-area-number" scheme (e.g., VLV‑01‑A1) and this numbering must be reflected in a side legend. Working pressure lines are drawn continuous (0.5 mm / 0.02 in thickness), pilot lines with a dashed stroke, and exhausts to atmosphere with a short broken stroke. It is mandatory to indicate the set values of safety valves and regulators near the symbol, for example "8.5 bar / 123 psi". For mixed electrical drawings, IEC 60617 is used, which respects the same layering philosophy but with electrical symbology; integration is done through cross-reference tables linking each pneumatic solenoid with its corresponding coil.

## Frequently Asked Questions (FAQ)

### What is the difference between a pneumatic symbol and an electrical one?

The pneumatic symbol represents the air flow and the mechanical elements of the circuit (cylinders, valves), while the electrical symbol shows the command and control logic (coils, relays, sensors). In a combined drawing, the pneumatic is drawn with continuous lines and the electrical with finer connection lines, but both share the same terminal reference.

### Which ISO standard governs pneumatic symbols?

The reference standard is ISO 1219‑1, which brings together all basic graphic symbols for fluid power systems. Its latest edition (2012) includes more than 120 pictograms harmonized with American and Asian standards.

### How is a double-acting cylinder with cushioning represented?

The base symbol of the double-acting cylinder is complemented by two small rectangles attached to the ends of the piston, indicating the adjustable cushioning chambers. Additionally, secondary pilot lines are added if the cushioning is adjustable by flow control.

### Is it mandatory to follow ISO 1219‑1 in all drawings?

In European industry it is a contractual requirement in most turnkey projects, and is often required in machinery purchase specifications. In America it is complemented by ANSI/ISA‑5.1, but the basic pneumatic symbols coincide by 95%.

### How is a 5/2 valve read in a diagram?

Identify the square that represents the rest position (next to the spring) and follow the trace of the internal arrows to know which ports are connected: at rest they usually connect P to A and B to exhaust; when piloted, the internal connections shift connecting P to B and A to exhaust.

### Are pneumatic symbols the same all over the world?

The basic symbols defined by ISO 1219‑1 have global acceptance, although some Japanese companies use slight variants inherited from the old JIS B 0125. The trend in new projects is complete unification under ISO.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/p-id-piping-instrumentation-diagram-d_466.html
