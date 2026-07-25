---
title: "MMC LMC RFS material conditions"
sidebar:
  label: "MMC LMC RFS material conditions"
description: "Technical reference: MMC LMC RFS material conditions"
keywords: ["MMC LMC RFS maximum material condition explained", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "mmc-lmc-rfs"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-25"
verified: true
---
Maximum Material Condition (MMC), Least Material Condition (LMC), and Regardless of Feature Size (RFS) are three geometric tolerance modifiers defined in ASME Y14.5 and ISO 2692 standards. They control clearance and assembly of parts by linking the form or orientation tolerance to the actual size of the feature.

## Symbols and Notation

Three standardized symbols identify material conditions in the feature control frame: the circle with the letter M (Ⓜ) for MMC, the circle with the letter L (Ⓛ) for LMC, and the absence of any modifier for RFS, which is the default condition in both systems.

| Material Condition | ASME Y14.5 Symbol | ISO 2692 Symbol | Geometric Meaning |
| --- | --- | --- | --- |
| Maximum Material (MMC) | Ⓜ | Ⓜ | The feature contains the maximum amount of material (shaft at maximum diameter, hole at minimum diameter) |
| Least Material (LMC) | Ⓛ | Ⓛ | The feature contains the minimum amount of material (shaft at minimum diameter, hole at maximum diameter) |
| Regardless of Feature Size (RFS) | (no symbol) | (no symbol, ISO 8015 independence principle) | The geometric tolerance applies without relation to the actual size of the feature |

## Maximum Material Condition (MMC)

The maximum material condition is reached when the feature of size contains the greatest amount of material allowed by its dimensional tolerance. For a shaft of 20,000 mm / 0.7874 in nominal diameter with tolerance h7, this corresponds to the upper limit of 20,000 mm / 0.7874 in; for a hole of the same nominal diameter it corresponds to the lower limit of 19,948 mm / 0.7854 in (grade H7). The geometric tolerance specified in the feature control frame is valid only when the feature is in this state; any deviation toward least material allows an increase in the geometric tolerance, known as bonus tolerance. The maximum material requirement establishes a virtual boundary that must not be violated:

> **Virtual Condition (MMVC) = MMC ± Specified Geometric Tolerance**

| Parameter | Shaft (External Diameter) | Hole (Internal Diameter) |
| --- | --- | --- |
| MMC (Maximum Material Size) | 20,000 mm / 0.7874 in | 19,948 mm / 0.7854 in |
| Specified Position Tolerance | 0,050 mm / 0.0020 in | 0,050 mm / 0.0020 in |
| MMVC (Maximum Material Virtual Condition) | 20,050 mm / 0.7894 in | 19,898 mm / 0.7834 in |
| Maximum Possible Bonus Tolerance | 0,052 mm / 0.0020 in | 0,052 mm / 0.0020 in |
| Maximum Total Position Tolerance | 0,102 mm / 0.0040 in | 0,102 mm / 0.0040 in |

## Least Material Condition (LMC)

The least material condition occurs when the feature contains the least amount of material within its dimensional limits; for a shaft of 20,000 mm / 0.7874 in with tolerance h7 this corresponds to a diameter of 19,979 mm / 0.7866 in, while for a hole of the same nominal diameter it is 20,052 mm / 0.7894 in. With LMC, the specified geometric tolerance applies when the feature is at its least material, and any variation toward maximum material allows the geometric tolerance to increase. The least material requirement is used mainly to guarantee minimum wall thicknesses and critical edge distances.

> **Virtual Condition (LMVC) = LMC ± Specified Geometric Tolerance**

| Parameter | Shaft (External Diameter) | Hole (Internal Diameter) |
| --- | --- | --- |
| LMC (Least Material Size) | 19,979 mm / 0.7866 in | 20,052 mm / 0.7894 in |
| Specified Position Tolerance | 0,050 mm / 0.0020 in | 0,050 mm / 0.0020 in |
| LMVC (Least Material Virtual Condition) | 19,929 mm / 0.7846 in | 20,102 mm / 0.7914 in |
| Maximum Possible Bonus Tolerance | 0,021 mm / 0.0008 in | 0,021 mm / 0.0008 in |
| Maximum Total Position Tolerance | 0,071 mm / 0.0028 in | 0,071 mm / 0.0028 in |

## Regardless of Feature Size Requirement (RFS)

With a specified position tolerance of 0,050 mm / 0.0020 in, the RFS modifier keeps that value constant without allowing any additional bonus, regardless of whether the feature has been manufactured near maximum material, least material, or any intermediate point. RFS is the default condition in ASME Y14.5-2018 and also applies under the independence principle of ISO 8015, although in the ISO system the feature control frame may explicitly include the Ⓡ modifier when it is desired to highlight the absence of a material requirement.

## Bonus Tolerance and Application Table

When MMC is used, the bonus tolerance is calculated by subtracting the actual size of the feature from its MMC; for a hole of 20,000 mm / 0.7874 in with a position tolerance of 0,200 mm / 0.0079 in at MMC, the total tolerance varies according to the measured diameter.

| Actual Hole Diameter | Deviation from MMC | Bonus Tolerance | Total Position Tolerance |
| --- | --- | --- | --- |
| 19,948 mm / 0.7854 in (MMC) | 0,000 mm / 0.0000 in | 0,000 mm / 0.0000 in | 0,200 mm / 0.0079 in |
| 19,974 mm / 0.7864 in | 0,026 mm / 0.0010 in | 0,026 mm / 0.0010 in | 0,226 mm / 0.0089 in |
| 20,000 mm / 0.7874 in | 0,052 mm / 0.0020 in | 0,052 mm / 0.0020 in | 0,252 mm / 0.0099 in |
| 20,026 mm / 0.7884 in | 0,078 mm / 0.0031 in | 0,078 mm / 0.0031 in | 0,278 mm / 0.0109 in |
| 20,052 mm / 0.7894 in (LMC) | 0,104 mm / 0.0041 in | 0,104 mm / 0.0041 in | 0,304 mm / 0.0120 in |

## Comparison Between ISO and ASME Systems

Four fundamental differences distinguish the application of material conditions in the ASME Y14.5-2018 standard and the ISO 8015 / ISO 2692 set.

| Aspect | ASME Y14.5 | ISO 8015 / ISO 2692 |
| --- | --- | --- |
| Default Condition | RFS if no symbol is indicated | Independence principle (RFS); MMR/LMR must be explicitly indicated with Ⓜ or Ⓛ |
| LMC Notation | Ⓛ in the feature control frame | Ⓛ in the feature control frame, similar to ASME |
| Reciprocity (RPR) | Reciprocity is not considered | ISO 2692 allows an additional reciprocity modifier that permits exchanging geometric tolerance for dimensional and vice versa |
| Material in Non-Rigid Parts | Free state may be applied per ASME Y14.5 | ISO 10579 defines free state conditions with notation Ⓕ |

## Practical Assembly Applications

A plate assembly with two holes spaced 100,000 mm / 3.9370 in center-to-center and fastening bolts illustrates the usefulness of MMC. If the holes are specified with diameter 10,000 mm / 0.3937 in ±0,100 mm / 0.0039 in and a position tolerance of 0,200 mm / 0.0079 in at maximum material condition, the worst assembly condition occurs when both holes are at MMC (9,900 mm / 0.3898 in) and their position is simultaneously deviated to the maximum of 0,200 mm / 0.0079 in, requiring bolts with a maximum diameter of 9,700 mm / 0.3819 in. If the holes are manufactured at 10,000 mm / 0.3937 in, the available position tolerance increases to 0,300 mm / 0.0118 in, facilitating assembly without compromising functionality.

## Frequently Asked Questions (FAQ)

### What does MMC mean in GD&T?
MMC (Maximum Material Condition) is the condition in which a feature of size contains the greatest possible amount of material within the specified dimensional limits, such as a shaft at its maximum diameter (20,000 mm / 0.7874 in) or a hole at its minimum diameter (19,948 mm / 0.7854 in). It is used to guarantee assembly under the most restrictive conditions.

### How is the bonus tolerance under MMC calculated?
The bonus tolerance is obtained by subtracting the actual size of the feature from its size at MMC. For example, if a hole measures 20,026 mm / 0.7884 in and its MMC is 19,948 mm / 0.7854 in, the difference of 0,078 mm / 0.0031 in is added to the geometric tolerance, resulting in a total tolerance of 0,278 mm / 0.0109 in compared to the original 0,200 mm / 0.0079 in.

### What is the difference between MMC and LMC?
MMC applies the geometric tolerance when the feature has the greatest amount of material and allows bonus as it moves away from that state, favoring part assembly. LMC applies the tolerance when the feature has the least amount of material and allows bonus as material increases, protecting minimum wall thicknesses (e.g., not less than 1,500 mm / 0.0591 in).

### What does the RFS condition imply?
RFS (Regardless of Feature Size) implies that the geometric tolerance, for example 0,050 mm / 0.0020 in, remains constant for any actual size of the feature, without admitting a bonus for dimensional deviation. It is the most restrictive option and is used when centering or symmetry is critical.

### In which standards are MMC, LMC, and RFS defined?
The material conditions are defined in the American standard ASME Y14.5-2018 (Dimensioning and Tolerancing) and in the international series ISO 2692 (Maximum and Least Material Requirements) together with the independence principle of ISO 8015. Both use the same symbols Ⓜ and Ⓛ.

### How does MMC affect part assembly?
MMC ensures that even in the worst-case scenario (smallest hole at 19,948 mm / 0.7854 in and largest shaft at 20,000 mm / 0.7874 in) the virtual condition is not violated, always guaranteeing a minimum clearance of 0,050 mm / 0.0020 in. When actual parts deviate from MMC, clearance increases and assembly is facilitated without requiring design modifications.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/material-properties-t_24.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
