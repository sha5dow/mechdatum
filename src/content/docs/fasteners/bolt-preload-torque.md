---
title: "Cálculo preload y torque tornillos"
sidebar:
  label: "Cálculo preload y torque tornillos"
description: "Ficha tecnica: Cálculo preload y torque tornillos"
keywords: ["bolt preload torque calculation formula", "fasteners"]
category: "fasteners"
topic: "torque-preload"
subcategory: "preload-calculation"
skill: "fastener-reference-table"
launch_phase: 4
last_updated: "2026-07-25"
verified: true
---
El cálculo del torque de apriete en tornillos es esencial para garantizar una preload o fuerza de sujeción axial adecuada en una unión atornillada. La relación fundamental entre el torque aplicado y la fuerza de preload resultante se modela mediante una ecuación empírica, donde aproximadamente el 90 % del torque aplicado se destina a vencer la fricción bajo la cabeza y en las roscas, y solo el 10 % restante genera fuerza de sujeción. Factores como la lubricación, el acabado superficial y la clase de resistencia del tornillo influyen drásticamente en el resultado final.

## Fórmula de cálculo del torque

La ecuación general simplificada para calcular el torque de apriete necesaria para obtener una fuerza axial o preload determinada es:

> **T = K · F · d · (1 - l / 100)**

Donde:

| Variable | Definición | Unidades |
|---|---|---|
| T | Torque de apriete aplicado | N·m / lb·ft |
| K | Constante de tuerca (factor de fricción adimensional) | — |
| F | Fuerza axial de sujeción o preload deseada | N / lb |
| d | Diámetro nominal del tornillo | mm / in |
| l | Factor de reducción por lubricación | % |

Esta fórmula no considera el paso de rosca directamente, lo que la convierte en una aproximación práctica para cálculos generales con un error típico del ±25 % debido a la precisión intrínseca de las llaves dinamométricas comunes. Para obtener la fuerza en función del torque, la ecuación se reorganiza como **F = T / (K · d · (1 - l / 100))**.

## Factor de tuerca K y coeficientes de fricción

El factor K agrupa los efectos combinados de la fricción en la rosca y bajo la cabeza del tornillo. Sus valores típicos para tornillos de acero dulce con diámetros entre 1/4" y 1" varían según el acabado superficial.

| Acabado o condición | Factor K típico |
|---|---|
| Normal, seco | 0,20 |
| Acabado negro sin recubrimiento | 0,30 |
| Cincado (zinc-plated) | 0,20 |
| Ligeramente lubricado | 0,18 |
| Cadmiado | 0,16 |

Estos valores son empíricos y genéricos. Un tornillo cincado y uno seco comparten el mismo factor K típico, pero la variación real en campo puede ser significativa sin control lubricativo.

## Influencia de la lubricación

La lubricación reduce el torque necesario para alcanzar la misma preload debido a la disminución del coeficiente de fricción, pero introduce un riesgo crítico de sobreapriete si no se ajusta el valor de torque. El parámetro 'l' en la fórmula representa el porcentaje de reducción.

| Lubricante | Reducción típica del torque (l) | Efecto sobre la preload con torque constante |
|---|---|---|
| Aceite SAE 30 | ~ 40% | La fuerza de sujeción puede exceder la carga de prueba y causar falla catastrófica si no se reduce el torque de apriete. |
| Lubricantes con MoS₂ | Hasta 50% | Requiere una reducción sustancial del torque de diseño. |
| Seco (sin lubricar) | 0% | Condición de referencia para las tablas estándar. |

Un ejemplo documentado: un tornillo métrico M30 grado 8.8 requiere 2022 N·m en seco para alcanzar su carga de prueba de 337000 N. Si se lubrica con SAE 30, el torque debe reducirse un 40 %, es decir, a 1213 N·m. Si por error se aplican los 2022 N·m originales a la unión lubricada, la fuerza axial real ascendería a 561667 N, un 67 % por encima de la carga de prueba, provocando una falla por fluencia o rotura casi segura.

## Tabla de torques de apriete orientativos

Los valores a continuación corresponden a tornillos en condición seca, sin lubricar, y una constante K = 0,2. Se asume una fuerza de apriete equivalente al 70 % de la resistencia a la tracción mínima para el grado indicado.

### Torques para tornillería métrica (rosca ordinaria)

| Diámetro nominal | Paso (mm / in) | Grado 8.8 (N·m / lb·ft) | Grado 10.9 (N·m / lb·ft) | Grado 12.9 (N·m / lb·ft) |
|---|---|---|---|---|
| M4 | 0,7 | 2,3 / 1,7 | 3,3 / 2,4 | 4,0 / 3,0 |
| M5 | 0,8 | 4,5 / 3,3 | 6,4 / 4,7 | 7,7 / 5,7 |
| M6 | 1,0 | 7,8 / 5,8 | 11,1 / 8,2 | 13,3 / 9,8 |
| M8 | 1,25 | 18,9 / 13,9 | 26,9 / 19,8 | 32,3 / 23,8 |
| M10 | 1,5 | 37,4 / 27,6 | 53,1 / 39,2 | 63,7 / 47,0 |
| M12 | 1,75 | 65,2 / 48,1 | 92,6 / 68,3 | 111 / 82 |
| M14 | 2,0 | 104 / 77 | 147 / 108 | 176 / 130 |
| M16 | 2,0 | 160 / 118 | 227 / 167 | 272 / 201 |
| M18 | 2,5 | 220 / 162 | 313 / 231 | 375 / 277 |
| M20 | 2,5 | 312 / 230 | 443 / 327 | 532 / 392 |
| M22 | 2,5 | 425 / 313 | 604 / 445 | 725 / 535 |
| M24 | 3,0 | 540 / 398 | 768 / 566 | 921 / 679 |
| M27 | 3,0 | 787 / 580 | 1119 / 825 | 1342 / 990 |
| M30 | 3,5 | 1067 / 787 | 1516 / 1118 | 1819 / 1342 |

### Torques para tornillería imperial (UNC / UNF)

| Diámetro nominal (in / mm) | UNC (lb·ft / N·m) | UNF (lb·ft / N·m) |
|---|---|---|
| 1/4" / 6,35 mm | 4 / 5,4 | 4 / 5,4 |
| 5/16" / 7,94 mm | 8 / 10,8 | 10 / 13,6 |
| 3/8" / 9,53 mm | 15 / 20,3 | 19 / 25,8 |
| 7/16" / 11,11 mm | 24 / 32,5 | 30 / 40,7 |
| 1/2" / 12,70 mm | 37 / 50,2 | 45 / 61,0 |
| 9/16" / 14,29 mm | 53 / 71,9 | 64 / 86,8 |
| 5/8" / 15,88 mm | 74 / 100,3 | 88 / 119,3 |
| 3/4" / 19,05 mm | 125 / 169,5 | 129 / 174,9 |
| 7/8" / 22,23 mm | 130 / 176,3 | 205 / 278,0 |
| 1" / 25,40 mm | 196 / 265,8 | 305 / 413,6 |

Todos los valores son orientativos y deben validarse con condiciones reales de fricción y lubricación. La precisión típica de una llave dinamométrica en campo es de ±25 %.

## Métodos de control de preload

El torque es el método indirecto más común para controlar la preload, pero existen otras técnicas con mayor precisión.

| Método | Descripción | Ventajas | Limitaciones |
|---|---|---|---|
| Control por torque | Apriete hasta alcanzar un valor de torque predefinido. | Simple, rápido, equipos ampliamente disponibles. | Gran dispersión (±25 %) debido a variaciones de fricción. |
| Control por ángulo (giro de tuerca) | Apriete inicial hasta torque base, luego un giro adicional de ángulo fijo. | Preload más repetible; compensa variaciones de fricción. | Requiere experimentación para determinar el ángulo; rosca puede fallar tras reutilizaciones múltiples. |
| Control torque-ángulo | Monitoreo simultáneo de torque y ángulo; finaliza al cumplirse ambas condiciones. | Alta confiabilidad; permite trazabilidad mediante firma de torque-ángulo. | Herramienta especializada necesaria (llave torque/ángulo). |
| Estiramiento del perno | Uso de un gato hidráulico para estirar el perno; luego la tuerca se gira sin carga. | Preload extremadamente preciso y controlado. | Lento; requiere acceso al extremo roscado saliente. |
| Apriete térmico | Calentamiento del perno hasta expansión térmica; tuerca girada y enfriamiento para generar preload. | Adecuado para pernos muy grandes. | Proceso lento y costoso; requiere cálculo de temperatura. |
| Indicadores de tensión | Arandelas especiales, galgas extensométricas o indicadores visuales que muestran la preload alcanzada. | Medición directa; elimina la incertidumbre por fricción. | Costo adicional por elemento indicador; no siempre reutilizable. |

## Preguntas frecuentes (FAQ)

### ¿Por qué el mismo torque puede producir preloads muy diferentes en dos tornillos iguales?
Porque las variaciones en la fricción, incluso entre tornillos del mismo lote, pueden desviar la relación torque-preload en hasta un 25 %. La rugosidad superficial, contaminación, tipo de lubricante y grado de ajuste generan dispersión significativa.

### ¿Cómo afecta un lubricante incorrecto a la seguridad de la unión?
Un lubricante que reduzca más la fricción de lo previsto provocará una preload mucho mayor para el mismo torque, pudiendo superar el límite elástico o incluso la carga de rotura del tornillo, causando falla inmediata o fatiga prematura.

### ¿La fórmula T = K·F·d aplica para cualquier tipo de rosca?
Es una aproximación general para roscas estándar, pero no considera directamente el paso. Para cálculos más exactos se requieren ecuaciones que incluyan el ángulo de hélice y los coeficientes de fricción separados (bajo cabeza y en rosca), como la fórmula de Kellermann y Klein.

### ¿Con qué frecuencia se debe recalibrar una llave dinamométrica?
Los fabricantes recomiendan recalibración cada 5 000 ciclos o al menos una vez al año, lo que ocurra primero. Un uso intensivo o caídas exigen verificación inmediata.

### ¿Se puede reutilizar un tornillo después de un apriete controlado por ángulo?
Solo si el diseño lo permite explícitamente. Los tornillos apretados en régimen plástico (más allá del límite elástico) sufren deformación permanente y pérdida de ductilidad; su reutilización puede reducir drásticamente la preload residual y la vida a fatiga.

### ¿Qué norma internacional define los métodos de control de preload en uniones atornilladas?
La norma ISO 16047 especifica los ensayos de torque/fuerza de apriete para determinar los coeficientes de fricción, y la VDI 2230 establece el procedimiento sistemático para el cálculo de uniones atornilladas de alta resistencia, incluyendo la selección del método de apriete.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bolt-torque-load-calculator-d_2065.html
- **bossard.com**: https://www.bossard.com/global-en/knowledge-hub/resources/online-calculators-and-converters/torque-and-preload-calculator/
- **mcmaster.com**: https://www.mcmaster.com/products/torque-charts
