---
title: "Pandeo de columnas Euler"
sidebar:
  label: "Pandeo de columnas Euler"
description: "Ficha tecnica: Pandeo de columnas Euler"
keywords: ["Euler column buckling critical load length factor", "mechanics"]
category: "mechanics"
topic: "columns"
subcategory: "euler-buckling"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-25"
verified: true
---
El pandeo de columnas es un fenómeno de inestabilidad elástica que limita la capacidad de carga de elementos esbeltos sometidos a compresión axial. La carga crítica de pandeo de Euler, deducida por Leonhard Euler en 1744, predice el valor de la fuerza compresiva para el cual una columna ideal recta pierde súbitamente su forma recta y se desvía lateralmente. Esta teoría constituye la base del dimensionamiento de columnas largas en ingeniería estructural y mecánica.

## Fórmula de Euler para la carga crítica de pandeo

La expresión generalizada de la carga crítica de pandeo, que incorpora el factor de longitud efectiva K para contemplar distintas condiciones de apoyo, es:

> **Pcr = π² E I / (K L)²**

donde cada variable se describe en la tabla siguiente.

| Variable | Significado | Unidades |
| --- | --- | --- |
| Pcr | Carga axial crítica de pandeo | N / lbf |
| E | Módulo de elasticidad del material (módulo de Young) | Pa (N/m²) / psi |
| I | Momento de inercia mínimo de la sección transversal | m⁴ / in⁴ |
| K | Factor de longitud efectiva, adimensional según las condiciones de vínculo en los extremos | — |
| L | Longitud real no soportada de la columna | m / in |

La fórmula también se expresa frecuentemente en función de la longitud efectiva Leff = K L, resultando **Pcr = π² E I / Leff²**. Para columnas perfectamente articuladas en ambos extremos, K = 1 y la expresión se reduce a la forma clásica de Euler.

## Coeficiente de longitud efectiva según condiciones de apoyo

El factor K refleja la restricción que imponen los apoyos a la rotación y al desplazamiento lateral de los extremos de la columna. En diseño se recomienda adoptar valores incrementados entre un 10 % y un 20 % respecto al valor teórico, para tener en cuenta imperfecciones inevitables.

| Condición de apoyo | Factor K teórico | Factor K recomendado en diseño |
| --- | --- | --- |
| Articulada – Articulada (biarticulada) | 1,0 | 1,0 |
| Empotrada – Libre (voladizo) | 2,0 | 2,1 |
| Empotrada – Articulada | 0,7 | 0,8 |
| Empotrada – Empotrada | 0,5 | 0,65 |
| Empotrada – Guiada | 1,0 | 1,2 |
| Articulada – Guiada | 2,0 | 2,0 |

Para condiciones inusuales (como libre–libre o guiada–guiada) deben consultarse fuentes especializadas. En todos los casos, el valor de K se debe seleccionar de forma conservadora y coincidiendo con las condiciones de vínculo reales de la estructura.

## Relación de esbeltez y clasificación de columnas

La relación de esbeltez adimensional λ se define como el cociente entre la longitud efectiva de pandeo y el radio de giro mínimo r de la sección transversal.

> **λ = (K L) / r**  
> **r = √(I / A)**

donde A es el área de la sección transversal (m² / in²).

La relación de esbeltez gobierna el modo de fallo y la validez de la fórmula de Euler. A efectos prácticos se establecen tres rangos:

- λ < 40: **columnas cortas** – la falla se produce por fluencia (aplastamiento) del material.
- 40 ≤ λ ≤ 120: **columnas intermedias** – existe interacción entre pandeo inelástico y fluencia; la fórmula de Euler no es directamente aplicable y se recurre a modelos como el de Johnson o fórmulas tangentes.
- λ > 120: **columnas largas** – domina el pandeo elástico y la ecuación de Euler describe correctamente el comportamiento hasta que la tensión crítica alcanza el límite de proporcionalidad del material.

La tensión crítica de Euler correspondiente es:

> **σcr = Pcr / A = π² E / λ²**

Esta tensión debe ser menor que el límite elástico del material para que la hipótesis de comportamiento lineal elástico se cumpla.

## Suposiciones del modelo de Euler

La fórmula de Euler está sujeta a las siguientes hipótesis simplificadoras, que deben ser razonablemente satisfechas para que los resultados sean confiables:

1. El material es homogéneo, isótropo y obedece la ley de Hooke en el rango de cargas considerado.
2. La carga compresiva se aplica axialmente, sin excentricidades.
3. La columna es perfectamente recta y está libre de tensiones iniciales.
4. Se desprecia el peso propio de la columna.
5. La sección transversal es prismática y constante a lo largo de toda la longitud.
6. Las condiciones de apoyo son ideales: articulaciones sin fricción, empotramientos perfectamente rígidos y guías sin holguras.
7. Los desplazamientos laterales son pequeños y el análisis de segundo orden es válido.
8. La falla ocurre exclusivamente por pandeo, sin que se alcance el límite de fluencia en ningún punto antes de la inestabilidad.

Cuando alguna de estas condiciones no se cumple, deben utilizarse métodos de análisis más refinados.

## Ejemplo de cálculo

**Datos:** Columna de acero estructural (E = 200 GPa / 29 000 ksi) con longitud L = 3,0 m / 118,1 in, extremos articulados (K = 1,0). Perfil tubular rectangular de 100 mm × 50 mm × 5 mm (3,94 in × 1,97 in × 0,197 in). Momento de inercia mínimo Iy = 6,97 × 10⁻⁷ m⁴ / 1,67 in⁴ (calculado alrededor del eje débil). Área A = 1,44 × 10⁻³ m² / 2,23 in².

**Cálculo de la carga crítica de Euler:**

Leff = K L = 1,0 × 3,0 m = 3,0 m

> **Pcr = π² × (200 × 10⁹ Pa) × (6,97 × 10⁻⁷ m⁴) / (3,0 m)²**

Pcr = (9,8696 × 200 × 10⁹ × 6,97 × 10⁻⁷) / 9

Pcr ≈ 152 500 N = 152,5 kN / 34 300 lbf (34,3 kip)

Para la misma columna con extremos empotrados (K = 0,5) la carga crítica se multiplica por 4, resultando aproximadamente 610 kN / 137 kip, lo que ilustra la fuerte influencia de las condiciones de apoyo.

La tensión crítica es:

σcr = Pcr / A = 152 500 N / 1,44 × 10⁻³ m² ≈ 106 MPa / 15,4 ksi

Dado que este valor es inferior al límite elástico del acero habitual (~250 MPa / 36 ksi), se confirma que la columna pandea en régimen elástico y la fórmula de Euler es aplicable.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre la carga crítica de Euler y la carga última de una columna real?

La fórmula de Euler predice la carga a la que se inicia la inestabilidad elástica ideal. En columnas reales, la carga última puede ser menor debido a excentricidades, tensiones residuales o imperfecciones geométricas. Además, en columnas cortas la falla ocurre por fluencia antes de alcanzar la carga de Euler, por lo que la resistencia última está limitada por la resistencia del material.

### ¿Cómo se determina el factor de longitud efectiva K en uniones que no son ideales?

En estructuras reales las conexiones nunca son perfectamente rígidas ni perfectamente articuladas. Se utilizan valores de K basados en nomogramas (por ejemplo los del AISC) o análisis de estabilidad elástica. Como criterio conservador, se aplica un incremento del 10 % al 20 % sobre el K teórico sugerido en la tabla de condiciones de apoyo ideal.

### ¿Por qué la fórmula de Euler no es válida para columnas cortas?

Porque en columnas con baja relación de esbeltez la tensión crítica de Euler supera el límite de proporcionalidad del material, y la columna falla por plastificación antes de que se desarrolle el pandeo elástico. Para λ inferior a un valor crítico (típicamente alrededor de 100 para acero) se deben emplear fórmulas que contemplen el comportamiento inelástico, como la fórmula de Johnson o el método del módulo tangente.

### ¿Qué significado físico tiene la relación de esbeltez y cómo se utiliza en el diseño?

La relación de esbeltez λ mide la propensión de una columna al pandeo: valores altos indican gran esbeltez y fallo por pandeo elástico (Euler), mientras que valores bajos indican fallo por compresión pura. En el diseño se emplea para clasificar la columna (corta, intermedia o larga) y seleccionar la fórmula de cálculo de resistencia adecuada, así como para limitar la esbeltez máxima según las normativas.

### ¿El módulo de elasticidad E es el mismo para todos los materiales y en todas las direcciones?

No. Cada material posee su propio módulo de elasticidad (200 GPa / 29 000 ksi en acero; 70 GPa / 10 000 ksi en aluminio; 3 GPa / 0,4 × 10⁶ psi en polímeros típicos). La fórmula de Euler asume material isótropo, donde E es igual en todas direcciones. Para materiales anisótropos (madera, compuestos) el análisis debe considerar la rigidez en la dirección de pandeo; a menudo se requiere un enfoque más complejo.

### ¿Cómo se puede aumentar la resistencia al pandeo de una columna sin modificar su longitud?

Las vías más efectivas son: 1) aumentar el momento de inercia I, por ejemplo mediante una sección transversal de mayor canto o utilizando formas abiertas que alejen el material del centroide; 2) mejorar las condiciones de apoyo, reduciendo el factor K (por ejemplo soldando rigidizadores que se aproximan más a un empotramiento); 3) añadir arriostramientos laterales intermedios que reduzcan la longitud efectiva de pandeo.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/euler-column-formula-d_1813.html
- **engineersedge.com**: https://www.engineersedge.com/column_buckling/column_ideal.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/columns/columns.cfm
