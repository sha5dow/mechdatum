---
title: "Símbolos acabado superficial planos"
sidebar:
  label: "Símbolos acabado superficial planos"
description: "Ficha tecnica: Símbolos acabado superficial planos"
keywords: ["surface finish symbols Ra drawing interpretation", "symbols"]
category: "symbols"
topic: "drawing-symbols"
subcategory: "surface-finish"
skill: "standards-guide"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
La rugosidad superficial Ra se especifica en el 80 % de los planos de fabricación mecánica como parámetro de control, con valores que van desde 0,012 µm / 0,5 µin (espejos ópticos) hasta 50 µm / 2000 µin (fundición en bruto). Los símbolos de acabado superficial normalizados permiten comunicar requisitos de textura sin ambigüedades entre diseño, manufactura y control de calidad. A continuación se presenta la interpretación completa de esta simbología según las normas ISO y ASME vigentes.

## Símbolos normalizados de acabado superficial
La representación gráfica básica se construye a partir de un trazo inclinado de 60° con una línea horizontal de apoyo. Los símbolos fundamentales se muestran en la siguiente tabla, junto con su significado y la norma de referencia.

| Símbolo (representación textual) | Significado | Norma de referencia | Ejemplo de aplicación |
| --- | --- | --- | --- |
| `√` | Superficie sin indicación de proceso de fabricación (símbolo básico). | ISO 1302, ASME Y14.36 | Plano de conjunto donde solo se necesita identificar la superficie de referencia. |
| `√̅` (línea superior añadida) | Superficie obtenida por arranque de viruta (mecanizado obligatorio). | ISO 1302, ASME Y14.36 | Eje de acero torneado, donde se exige remoción de material. |
| `√̊` (círculo en el vértice) | Superficie sin arranque de viruta (prohibido mecanizar). | ISO 1302, ASME Y14.36 | Plancha de aluminio estampada que debe mantener su capa superficial original. |
| `(√)` (círculo en todo el contorno) | Acabado superficial en todas las superficies del contorno de la pieza. | ASME Y14.36 | Empaquetadura metálica donde todas las caras requieren la misma textura. |
| `√` + número sobre la horizontal | Rugosidad Ra en µm o microinch (µin). | ISO 1302, ASME B46.1 | Superficie de apoyo con Ra 3,2 µm / 126 µin. |
| `√` + dos números separados por barra | Ra/Rz o Ra/Rmax. | ISO 1302 | Cojinete de fricción con Ra 0,8 µm / 32 µin y Rz 4 µm / 160 µin. |

## Parámetros de rugosidad superficial
Los parámetros de rugosidad perfilométrica más comunes se recogen bajo la norma ISO 4287 y ASME B46.1. La tabla siguiente resume sus valores de uso frecuente en aplicaciones industriales.

| Parámetro | Símbolo | Unidad (métrica / imperial) | Descripción |
| --- | --- | --- | --- |
| Rugosidad media aritmética | Ra | µm / µin | Promedio aritmético de las desviaciones absolutas del perfil respecto a la línea media. |
| Altura máxima del perfil | Rz (ISO 4287) | µm / µin | Distancia media entre los cinco picos más altos y los cinco valles más profundos en la longitud de evaluación. |
| Profundidad total del perfil | Rt (o Rmax) | µm / µin | Diferencia entre el pico más alto y el valle más profundo en toda la longitud de evaluación. |
| Raíz cuadrada media de la rugosidad | Rq | µm / µin | Desviación estándar de la distribución de alturas del perfil, más sensible a picos aislados que Ra. |
| Factor de asimetría | Rsk | adimensional | Indica si la superficie está dominada por picos (Rsk > 0) o por valles (Rsk < 0). |

## Interpretación en planos
El símbolo de acabado superficial se sitúa sobre la superficie a controlar, apoyando su línea horizontal sobre la arista visible de la pieza o sobre una línea de extensión. La flecha de cota puede estar en contacto con la superficie o con una línea de referencia.

Alrededor del símbolo básico se pueden colocar hasta cuatro indicaciones complementarias:
- Sobre la línea horizontal: valor de Ra (ej. 1,6) o combinación Ra/Rz, en micrómetros si no se indica unidad.
- Debajo de la línea horizontal, a la izquierda: parámetro de ondulación (generalmente precedido de “W”).
- Debajo de la línea horizontal, a la derecha: dirección de las estrías de mecanizado (p. ej. “=”, “⊥”, “M” para multidireccional).
- A la derecha del símbolo, sobre la misma altura: método de fabricación o proceso prohibido (ej. “FRESADO”, “NO ESMERILAR”).

Cuando se especifica un solo valor numérico (p. ej. 3,2), éste representa el límite superior de rugosidad Ra admisible. Si se requiere un intervalo, se escriben dos valores separados por un guion (0,8 – 1,6 µm).

## Ejemplos de aplicación en planos reales
En la práctica industrial, los símbolos de acabado superficial se combinan con cotas y tolerancias geométricas para garantizar el correcto funcionamiento de las piezas. A continuación se presentan casos típicos de aplicación.

| Componente | Símbolo empleado | Requisito de rugosidad | Interpretación práctica |
| --- | --- | --- | --- |
| Asiento de rodamiento en eje | `√̅` 0,8 | Ra ≤ 0,8 µm / 32 µin | Mecanizado obligatorio; rectificado de precisión. |
| Superficie de estanqueidad para junta tórica | `√` 1,6 | Ra ≤ 1,6 µm / 63 µin | Sin arranque de viruta; superficie obtenida por forja de precisión. |
| Brida de tubería, todas las caras de contacto | `(√)` 3,2 | Ra ≤ 3,2 µm / 126 µin en todo el contorno | Acabado superficial en el perfil completo de la brida. |
| Madera cepillada, dos caras y un canto | S2S1E | — | Abreviatura de carpintería: S2S (Smooth two sides), 1E (one edge). |
| Madera machihembrada para tarima | D & M, T & G | — | Dressed and Matched, Tongue and Grooved: cepillada y machihembrada. |

## Preguntas frecuentes (FAQ)
### ¿Qué significa el símbolo √ en un plano de ingeniería?
### ¿Cuál es la diferencia entre Ra y Rz en la especificación de rugosidad?
### ¿Cómo se indica que una superficie debe ser mecanizada sin especificar la rugosidad?
### ¿Qué norma regula los símbolos de textura superficial en planos, ISO o ASME?
### ¿Cómo se interpreta un símbolo de acabado superficial con un círculo en el vértice?
### ¿Qué significan las abreviaturas S2S o S4S en planos de carpintería?

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/lumber-surface-finish-abbreviations-d_1720.html
- **iso.org**: https://www.iso.org/sectors/engineering/drawings-symbols
- **asme.org**: https://www.asme.org/codes-standards/find-codes-standards/y14-36-surface-texture-symbols
