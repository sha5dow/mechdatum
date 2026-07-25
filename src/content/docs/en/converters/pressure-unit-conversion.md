---
title: "Pressure unit conversion"
sidebar:
  label: "Pressure unit conversion"
description: "Technical reference: Pressure unit conversion"
keywords: ["pressure unit conversion bar psi MPa kPa", "converters"]
category: "converters"
topic: "units"
subcategory: "pressure-units"
skill: "converter-reference-table"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
Pressure is defined as force exerted perpendicularly per unit area. In the International System (SI), the fundamental unit is the pascal (Pa), equivalent to one newton per square meter (N/m²). However, in industrial practice multiple metric and imperial units coexist—bar, atmosphere, psi, millimeter of mercury, among others—requiring accurate and validated conversions.

## Pressure Unit Conversion Table

| Unit | Symbol | Equivalence (Pa and psi) |
| --- | --- | --- |
| Pascal | Pa | 1 Pa / 0,000145038 psi |
| Kilopascal | kPa | 1 000 Pa / 0,145038 psi |
| Bar | bar | 100 000 Pa / 14,5038 psi |
| Standard atmosphere | atm | 101 325 Pa / 14,6959 psi |
| Technical atmosphere | at | 98 066,5 Pa / 14,223 psi |
| Millimeter of mercury (0 °C) | mmHg | 133,322 Pa / 0,0193368 psi |
| Inch of mercury (32 °F) | inHg | 3 386,38 Pa / 0,491154 psi |
| Kilogram-force per cm² | kgf/cm² | 98 066,5 Pa / 14,223 psi |
| Psi (pound per square inch) | psi | 6 894,76 Pa / 1 psi |
| Pound per square foot | psf | 47,8803 Pa / 0,00694444 psi |
| Inch of water column (4 °C) | inH₂O | 249,082 Pa / 0,036126 psi |
| Foot of water column (4 °C) | ftH₂O | 2 988,98 Pa / 0,433527 psi |
| Meter of water column (4 °C) | mH₂O | 9 806,38 Pa / 1,42233 psi |
| Torr | Torr | 133,322 Pa / 0,0193368 psi* |

*1 Torr equals 1 mmHg.

## Conversion Formula

> **p (Pa) = p (unit) × k**

| Variable | Description |
| --- | --- |
| p (Pa) | pressure value in pascals |
| p (unit) | numerical value in the source unit |
| k | conversion factor from source unit to Pa |

## Direct Conversion Factors

Conversion of the most common units to pascals.

| Source Unit | Conversion Factor to Pa and Equivalence |
| --- | --- |
| bar | ×100 000 (1 bar = 100 kPa / 14,5 psi) |
| atm | ×101 325 (1 atm = 101,325 kPa / 14,696 psi) |
| psi | ×6 894,76 (1 psi ≈ 6,895 kPa / 1 psi) |
| mmHg | ×133,322 (1 mmHg = 0,133 kPa / 0,0193 psi) |
| inHg (32 °F) | ×3 386,38 (1 inHg = 3,386 kPa / 0,491 psi) |
| kgf/cm² | ×98 066,5 (1 kgf/cm² = 98,07 kPa / 14,22 psi) |
| inH₂O (4 °C) | ×249,082 (1 inH₂O = 0,249 kPa / 0,0361 psi) |

## Inverse Conversion Factors

Conversion from pascals to the most common units (inverse k = 1 / direct k).

| Desired Unit | Conversion Factor from Pa and Equivalence |
| --- | --- |
| bar | ×0,00001 (1 Pa = 1×10⁻⁵ bar / 1,45×10⁻⁷ psi) |
| atm | ×9,86923×10⁻⁶ (1 Pa = 9,87×10⁻⁶ atm / 1,43×10⁻⁹ psi) |
| psi | ×0,000145038 (1 Pa ≈ 1,45×10⁻⁴ psi) |
| mmHg | ×0,00750062 (1 Pa = 0,0075 mmHg / 1,09×10⁻⁶ psi) |
| inHg (32 °F) | ×0,0002953 (1 Pa = 2,953×10⁻⁴ inHg / 4,28×10⁻⁵ psi) |
| kgf/cm² | ×1,01972×10⁻⁵ (1 Pa = 1,02×10⁻⁵ kgf/cm² / 1,48×10⁻⁶ psi) |
| inH₂O (4 °C) | ×0,0040147 (1 Pa = 4,01×10⁻³ inH₂O / 5,82×10⁻⁴ psi) |

## Notes on Accuracy and Special Cases

The conversion factors presented assume standard gravity conditions (gₙ = 9,80665 m/s²) and reference temperature where applicable. In the case of liquid columns (Hg, H₂O), fluid density and temperature affect the result:

- **Mercury**: the standard conversion uses 0 °C for mmHg (density 13 595,1 kg/m³) and 32 °F for inHg. Some sectors use inHg at 60 °F (1 inHg⁶⁰°F = 3 376,85 Pa), introducing a difference of ≈0,3 % from the value at 32 °F.
- **Water**: is normally referenced at 4 °C (maximum density). For HVAC applications at 60 °F, 1 inH₂O ≈ 248,84 Pa.
- **Standard atmosphere vs. technical atmosphere**: the standard atmosphere (atm) equals 101 325 Pa, while the technical atmosphere (at) is defined as 1 kgf/cm² = 98 066,5 Pa, therefore 1 atm ≈ 1,0332 at.
- **Torr and mmHg**: in practice, 1 Torr = 1 mmHg = 133,322 368 Pa, although historically small differences existed.
- Conversions involving kilogram-force (kgf) or pound-force (lbf) assume standard gravitational acceleration, so they must be used with caution under different local gravity conditions.
- For high-accuracy engineering calculations, it is recommended not to round intermediate factors; the values listed here maintain at least five significant figures to minimize cumulative errors.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pressure-units-converter-d_569.html
- **unitconverters.net**: https://www.unitconverters.net/pressure-converter.html
- **convertworld.com**: https://www.convertworld.com/en/pressure/
