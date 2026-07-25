---
title: "Views and sections in drawings"
sidebar:
  label: "Views and sections in drawings"
description: "Technical reference: Views and sections in drawings"
keywords: ["mechanical drawing views sections cuts", "symbols"]
category: "symbols"
topic: "drawing-symbols"
subcategory: "drawing-views"
skill: "standards-guide"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
In mechanical technical drawing, views and sections are communicated through more than 20 standardized graphic symbols that indicate the direction of observation, the cutting plane, and the arrangement of projections. These symbols, standardized in ISO 128-3:2022 and ASME Y14.3-2012, guarantee the unambiguous interpretation of part geometry and are mandatory in technical product documentation.

## Symbol Table

| Symbol | Meaning | Standard | Application Example |
|---|---|---|---|
| `A →` (arrow with letter) | Direction of view | ISO 128-3 | View A taken from the left of the drawing |
| `A ━━━━━━━▶ ◀━━━━━━━ A` (long dash line of 20 mm / 0.79 in and short dash of 5 mm / 0.20 in, with arrows and letters) | Straight cutting plane | ISO 128-2, ASME Y14.3 §8.2 | Section A-A along the hole axis |
| `A ━━━━━━━▶ ┃ ◀━━━━━━━ A` (cutting plane with step) | Offset cutting plane | ISO 128-3:2022 §6.2 | Section A-A through several non-aligned holes |
| `\\\\\\\\` (parallel lines inclined at 45°) | Cut surface in section | ISO 128-50, ASME Y14.3 §8.5 | Hatching in section of a steel part |
| `◁ A` or `A ▷` (triangle with letter) | Auxiliary view identification | ISO 128-3:2022 §5.6 | Auxiliary view A rotated to show the inclined surface |
| `──────` (thin line with zigzag) | Break line in partial view | ISO 128-24:2014 | Partial view of one end of a long shaft |
| `A (1:2)` (scale annotation) | Scale of the drawing; 1:2 indicates that 1 mm / 0.04 in on the drawing equals 2 mm / 0.08 in actual | ISO 5455 | Detail drawing of a gear at reduced scale |
| `|← →|` (dimension lines with arrows) | Reference lines to identify the path of the cutting plane in thin sections | ASME Y14.3 §8.3.1 | Cross section of an extruded profile |
| `VISTA C` (underlined text) | Designation of a view not orthogonally projected | ASME Y14.3 §7.2 | View C placed on another sheet of the assembly drawing |

## Meaning of the Symbols

Each symbol communicates a precise instruction to the drawing reader. The arrow with capital letter `A →` establishes the direction from which the part is observed; the letter associates the view with its identification in the drawing. The cutting plane is represented by a long dash line (20 mm / 0.79 in) and short dash (5 mm / 0.20 in) with a space of 1.5 mm / 0.06 in between them, terminated with arrows that indicate toward which side the section is viewed. Identical capital letters at both ends (e.g., A and A) label the cut, generating the designation «Section A-A». The hatching `\\\\\\\\`, inclined at 45° with a spacing of 2 mm / 0.08 in between lines, indicates the surfaces that have been materially cut; a different hatching or the absence of hatching identifies non-sectioned parts. The break line with zigzag delimits the contour of a partial view, indicating that the part continues beyond the boundary shown. Scale annotations such as `1:2` express that the drawing measures half the actual size of the part.

## Reference Standards

The symbols for views and sections are regulated by the following international standards:

- **ISO 128-3:2022** — Technical product documentation — General principles of representation — Part 3: Views, sections and cuts. Defines projection methods, view designation, and representation of cuts and sections.
- **ISO 128-2:2020** — Basic conventions for lines. Specifies line types, their dimensions (cutting plane stroke: 20 mm / 0.79 in long, 5 mm / 0.20 in short, space 1.5 mm / 0.06 in) and their applications.
- **ISO 128-50:2001** — Conventions for representing areas on cuts and sections. Regulates hatching of cut surfaces.
- **ASME Y14.3-2012** — Orthographic and Pictorial Views. Establishes practices for orthographic views, sections, auxiliary views, and conventional representations in mechanical engineering drawings.

## Application Examples in Real Drawings

In an exploded view drawing of a cast bracket, the straight cutting plane A-A passes through the center of the main hole. The cutting plane line is drawn with long dashes (20 mm / 0.79 in) and short dashes (5 mm / 0.20 in) in the top view, with arrows pointing to the right and letters A at both ends. The resulting section is placed to the right of the top view, identified as «SECTION A-A», and the cut surfaces are filled with hatching at 45° with a spacing of 2 mm / 0.08 in. On the same drawing, an auxiliary view is indicated by an arrow `B →` perpendicular to an inclined face; view B is rotated and placed aligned with the arrow. A partial view of the long arm of the bracket is bounded by a zigzag break line, showing only the first 150 mm / 5.91 in of the arm and omitting the rest, which is identical and without relevant details. The drawing scale, 1:2, is noted in the title block and also next to the detail views.

## Frequently Asked Questions (FAQ)

### What is the difference between a cut and a section in a mechanical drawing?

### How are views that are not in direct orthogonal projection identified?

### Which standard should I follow for mechanical drawing symbols, ISO 128 or ASME Y14.3?

### What types of lines are used to represent a cutting plane and what are their dimensions?

### When should a partial view be used instead of a full view?

### Do all countries use the same symbols for views and sections?

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/scaling-blueprint-drawings-d_1704.html
- **asme.org**: https://www.asme.org/getmedia/a3d30363-6c69-4129-afcf-21555326cb43/35141.pdf
