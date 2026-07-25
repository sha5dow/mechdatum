---
title: "Bend allowance y deducción fórmulas"
sidebar:
  label: "Bend allowance y deducción fórmulas"
description: "Ficha tecnica: Bend allowance y deducción fórmulas"
keywords: ["sheet metal bend allowance deduction formula calculation", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "bend-allowance"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-25"
verified: true
---
El plegado de chapa metálica requiere calcular con precisión la longitud de la fibra neutra para obtener un desarrollo plano exacto. Los dos métodos principales para este cálculo son la **tolerancia de curvatura** (*Bend Allowance*, BA) y la **deducción de curvatura** (*Bend Deduction*, BD). La BA es la longitud del arco de la línea neutra en la zona deformada, mientras que la BD es el valor que debe restarse de la suma de las longitudes exteriores de las alas para obtener la longitud total del desarrollo. La elección entre ambos métodos depende de la forma en que se acoten las piezas y del proceso de plegado empleado.

Durante el doblado, la capa exterior de la chapa se alarga y la interior se comprime. En el interior del espesor existe una **fibra neutra** que no experimenta variación de longitud. La posición de esta fibra se define mediante el **factor K** (K), que expresa el cociente entre la distancia desde la cara interior hasta la fibra neutra y el espesor del material (t). Para materiales dúctiles y procesos de plegado por aire, K oscila normalmente entre 0,33 y 0,50.

La **tolerancia de curvatura (BA)** es la longitud del arco de la fibra neutra en función del radio interior (R), el espesor (t), el ángulo de doblado (A en grados) y el factor K:

> **BA = (π × (R + K × t) × A) / 180°**

La **deducción de curvatura (BD)** se basa en la distancia exterior de retroceso (*Outside Setback*, OSSB), calculada como:

> **OSSB = tan(A/2) × (R + t)**

La BD se obtiene a partir de dos veces el OSSB menos la BA:

> **BD = 2 × OSSB – BA = 2 × tan(A/2) × (R + t) – BA**

Para una pieza con dos alas de longitudes L1 y L2 medidas desde el borde hasta el vértice externo, el desarrollo plano (Lₜ) se calcula como:

> **Lₜ = L1 + L2 – BD**

Alternativamente, si se dimensiona desde la cara interior, puede emplearse la BA sumándola a las longitudes rectas.

## Parámetros operativos

La tabla siguiente resume parámetros de plegado recomendados para los materiales más habituales, suponiendo plegado por aire con punzón de radio estándar. Los anchos de V indicados corresponden a la práctica común de 6 a 12 veces el espesor; para espesores finos se usan los valores inferiores del rango y para gruesos los superiores.

| Material | Espesor típico (mm / in) | Radio interior mínimo (mm / in) | Ancho de V recomendado (mm / in) | Factor K típico |
| --- | --- | --- | --- | --- |
| Acero suave laminado en frío (DC01) | 0,5 – 6,0 mm / 0.020 – 0.236 in | 1,0 × t | 6·t – 10·t | 0,33 – 0,38 |
| Acero inoxidable AISI 304 | 0,5 – 4,0 mm / 0.020 – 0.157 in | 1,5 × t | 8·t – 12·t | 0,40 – 0,45 |
| Aluminio 5052-H32 | 0,5 – 5,0 mm / 0.020 – 0.197 in | 1,0 × t | 6·t – 8·t | 0,33 |
| Cobre suave (C11000) | 0,3 – 3,0 mm / 0.012 – 0.118 in | 0,5 × t | 6·t – 8·t | 0,35 |

Para aceros de alta resistencia (Rₘ > 600 MPa / 87 ksi) el radio mínimo debe incrementarse hasta 2·t y el factor K se sitúa próximo a 0,40 – 0,45.

## Tolerancias típicas

| Parámetro | Tolerancia típica |
| --- | --- |
| Ángulo de doblado (plegado por aire) | ±0,5° |
| Ángulo de doblado (acuñado / bottoming) | ±0,25° |
| Longitud de desarrollo plano (Lₜ < 500 mm / 19.7 in) | ±0,2 mm / ±0.008 in |
| Longitud de desarrollo plano (Lₜ 500 – 1500 mm / 19.7 – 59 in) | ±0,5 mm / ±0.020 in |
| Radio interior (plegado por aire) | ±0,5 mm / ±0.020 in |

Las tolerancias angulares dependen de la precisión de la prensa y del control de la carrera. En plegado por aire, las variaciones en el espesor del material o en la dureza provocan dispersión del ángulo, que puede corregirse con sistemas de medición angular en máquina.

## Materiales aplicables

Cualquier chapa metálica con ductilidad suficiente puede plegarse. Los materiales más frecuentes y sus propiedades de tracción se muestran a continuación.

| Material | Resistencia a la tracción (MPa / ksi) | Alargamiento A50 (%) | Factor K típico |
| --- | --- | --- | --- |
| Acero DC01 laminado en frío | 270 – 350 MPa / 39 – 51 ksi | 28 – 32 | 0,33 |
| Acero DC04 embutición profunda | 270 – 350 MPa / 39 – 51 ksi | 34 – 38 | 0,33 |
| Acero inoxidable AISI 304 | 520 – 720 MPa / 75 – 104 ksi | 40 – 50 | 0,42 |
| Aluminio 5052-H32 | 210 – 250 MPa / 30 – 36 ksi | 12 – 18 | 0,33 |
| Aluminio 1050-H14 | 95 – 125 MPa / 14 – 18 ksi | 25 – 30 | 0,36 |
| Cobre C11000 suave | 210 – 260 MPa / 30 – 38 ksi | 35 – 45 | 0,35 |
| Latón CuZn37 semiduro | 320 – 450 MPa / 46 – 65 ksi | 20 – 25 | 0,38 |

Los materiales templados (dureza H18, H19, etc.) y los aceros con resistencia > 800 MPa / 116 ksi presentan un radio de doblado mínimo muy alto y riesgo de agrietamiento; en esos casos el factor K puede desviarse significativamente de los valores tabulados y se recomienda validar experimentalmente.

## Ventajas y limitaciones

**Ventajas**
- Permiten calcular el desarrollo plano de forma rápida y reproducible, reduciendo errores de corte.
- A partir de un parámetro único (factor K) es posible adaptar el cálculo a múltiples espesores y radios.
- La deducción de curvatura (BD) es especialmente útil cuando las cotas del plano se toman respecto a los bordes exteriores, caso frecuente en diseño 3D de chapa.
- Compatible con sistemas CAD/CAM, que integran tablas de BA/BD en sus librerías de materiales.

**Limitaciones**
- El factor K real puede variar con el tipo de utillaje, sentido de laminación, lote de material y grado de desgaste de las herramientas.
- Para radios muy pequeños o muy grandes (R/t < 0,5 o R/t > 3) la hipótesis de fibra neutra única pierde precisión.
- En plegado por acuñado o coining, la distribución de tensiones es distinta y el factor K difiere del empleado en plegado por aire.
- La fórmula de BA supone que el ángulo de doblado es constante y la zona de transición es perfectamente circular, lo que puede no cumplirse en piezas con retorno elástico elevado.

## Guía de selección

La elección entre el método de tolerancia de curvatura (BA) y el de deducción de curvatura (BD) depende fundamentalmente de la referencia utilizada para acotar las alas:

- Si las cotas se miden desde los **bordes exteriores de la pieza hasta el vértice** (método de molde exterior), se recomienda emplear la **deducción de curvatura (BD)** y usar la fórmula Lₜ = L1 + L2 – BD.
- Si las cotas se toman desde la **cara interior** de cada ala, el desarrollo se obtiene como Lₜ = longitud total de tramos rectos interiores + BA.
- En entornos CAD modernos, se prefiere crear una tabla de **BA** en función del ángulo, radio y material, y dejar que el sistema calcule el desarrollo automáticamente a partir de la fibra neutra. En este caso, se introduce el factor K en la biblioteca de materiales y el software deriva la BA internamente.
- Para piezas con múltiples radios y ángulos, es más práctico mantener una tabla unitaria de BA por doblez y sumar todas las tolerancias.

Para seleccionar el factor K adecuado:
- En aceros al carbono con plegado por aire y radio 1·t – 2·t, emplee K = 0,33 – 0,38.
- En aceros inoxidables austeníticos, valore K = 0,42.
- En aluminios semiduros y cobres blandos, un K = 0,33 – 0,36 ofrece buena correlación.
- Si la precisión es crítica, realice probetas de doblado con el mismo utillaje y mida el desarrollo resultante para ajustar el factor K real.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pipe-formulas-d_1335.html
- **efunda.com**: https://www.efunda.com/processes/metal_processing/bending_design.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/platbockning
