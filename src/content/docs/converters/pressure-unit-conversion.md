---
title: "Conversión unidades de presión"
sidebar:
  label: "Conversión unidades de presión"
description: "Ficha tecnica: Conversión unidades de presión"
keywords: ["pressure unit conversion bar psi MPa kPa", "converters"]
category: "converters"
topic: "units"
subcategory: "pressure-units"
skill: "converter-reference-table"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
La presión se define como la fuerza ejercida perpendicularmente por unidad de área. En el Sistema Internacional (SI), la unidad fundamental es el pascal (Pa), equivalente a un newton por metro cuadrado (N/m²). Sin embargo, en la práctica industrial coexisten múltiples unidades métricas e imperiales —bar, atmósfera, psi, milímetro de mercurio, entre otras—, lo que obliga a disponer de conversiones precisas y validadas.

## Tabla de conversión de unidades de presión

| Unidad | Símbolo | Equivalencia (Pa y psi) |
| --- | --- | --- |
| Pascal | Pa | 1 Pa / 0,000145038 psi |
| Kilopascal | kPa | 1 000 Pa / 0,145038 psi |
| Bar | bar | 100 000 Pa / 14,5038 psi |
| Atmósfera estándar | atm | 101 325 Pa / 14,6959 psi |
| Atmósfera técnica | at | 98 066,5 Pa / 14,223 psi |
| Milímetro de mercurio (0 °C) | mmHg | 133,322 Pa / 0,0193368 psi |
| Pulgada de mercurio (32 °F) | inHg | 3 386,38 Pa / 0,491154 psi |
| Kilogramo-fuerza por cm² | kgf/cm² | 98 066,5 Pa / 14,223 psi |
| Psi (libra por pulgada cuadrada) | psi | 6 894,76 Pa / 1 psi |
| Libra por pie cuadrado | psf | 47,8803 Pa / 0,00694444 psi |
| Pulgada de columna de agua (4 °C) | inH₂O | 249,082 Pa / 0,036126 psi |
| Pie de columna de agua (4 °C) | ftH₂O | 2 988,98 Pa / 0,433527 psi |
| Metro de columna de agua (4 °C) | mH₂O | 9 806,38 Pa / 1,42233 psi |
| Torr | Torr | 133,322 Pa / 0,0193368 psi* |

*1 Torr equivale a 1 mmHg.

## Fórmula de conversión

> **p (Pa) = p (unidad) × k**

| Variable | Descripción |
| --- | --- |
| p (Pa) | valor de presión en pascales |
| p (unidad) | valor numérico en la unidad de origen |
| k | factor de conversión de la unidad de origen a Pa |

## Factores de conversión directa

Conversión de las unidades más comunes a pascales.

| Unidad de origen | Factor de conversión a Pa y equivalencia |
| --- | --- |
| bar | ×100 000 (1 bar = 100 kPa / 14,5 psi) |
| atm | ×101 325 (1 atm = 101,325 kPa / 14,696 psi) |
| psi | ×6 894,76 (1 psi ≈ 6,895 kPa / 1 psi) |
| mmHg | ×133,322 (1 mmHg = 0,133 kPa / 0,0193 psi) |
| inHg (32 °F) | ×3 386,38 (1 inHg = 3,386 kPa / 0,491 psi) |
| kgf/cm² | ×98 066,5 (1 kgf/cm² = 98,07 kPa / 14,22 psi) |
| inH₂O (4 °C) | ×249,082 (1 inH₂O = 0,249 kPa / 0,0361 psi) |

## Factores de conversión inversa

Conversión de pascales a las unidades más comunes (k inverso = 1 / k directo).

| Unidad deseada | Factor de conversión desde Pa y equivalencia |
| --- | --- |
| bar | ×0,00001 (1 Pa = 1×10⁻⁵ bar / 1,45×10⁻⁷ psi) |
| atm | ×9,86923×10⁻⁶ (1 Pa = 9,87×10⁻⁶ atm / 1,43×10⁻⁹ psi) |
| psi | ×0,000145038 (1 Pa ≈ 1,45×10⁻⁴ psi) |
| mmHg | ×0,00750062 (1 Pa = 0,0075 mmHg / 1,09×10⁻⁶ psi) |
| inHg (32 °F) | ×0,0002953 (1 Pa = 2,953×10⁻⁴ inHg / 4,28×10⁻⁵ psi) |
| kgf/cm² | ×1,01972×10⁻⁵ (1 Pa = 1,02×10⁻⁵ kgf/cm² / 1,48×10⁻⁶ psi) |
| inH₂O (4 °C) | ×0,0040147 (1 Pa = 4,01×10⁻³ inH₂O / 5,82×10⁻⁴ psi) |

## Notas sobre precisión y casos especiales

Los factores de conversión presentados asumen condiciones estándar de gravedad (gₙ = 9,80665 m/s²) y temperatura de referencia cuando corresponda. En el caso de columnas de líquido (Hg, H₂O), la densidad del fluido y la temperatura afectan el resultado:

- **Mercurio**: la conversión estándar utiliza 0 °C para mmHg (densidad 13 595,1 kg/m³) y 32 °F para inHg. Algunos sectores emplean inHg a 60 °F (1 inHg⁶⁰°F = 3 376,85 Pa), lo que introduce una diferencia de ≈0,3 % respecto al valor a 32 °F.
- **Agua**: se referencia normalmente a 4 °C (máxima densidad). Para aplicaciones HVAC a 60 °F, 1 inH₂O ≈ 248,84 Pa.
- **Atmósfera estándar frente a atmósfera técnica**: la atmósfera estándar (atm) equivale a 101 325 Pa, mientras que la atmósfera técnica (at) se define como 1 kgf/cm² = 98 066,5 Pa, por lo que 1 atm ≈ 1,0332 at.
- **Torr y mmHg**: en la práctica, 1 Torr = 1 mmHg = 133,322 368 Pa, aunque históricamente existieron pequeñas diferencias.
- Las conversiones que implican kilogramo-fuerza (kgf) o libra-fuerza (lbf) presuponen la aceleración gravitatoria estándar, por lo que deben usarse con cautela en condiciones de gravedad local diferente.
- Para cálculos de ingeniería de gran exactitud, se recomienda no redondear factores intermedios; los valores aquí listados mantienen al menos cinco cifras significativas para minimizar errores acumulativos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pressure-units-converter-d_569.html
- **unitconverters.net**: https://www.unitconverters.net/pressure-converter.html
- **convertworld.com**: https://www.convertworld.com/en/pressure/
