---
title: "MMC LMC RFS condiciones de material"
sidebar:
  label: "MMC LMC RFS condiciones de material"
description: "Ficha tecnica: MMC LMC RFS condiciones de material"
keywords: ["MMC LMC RFS maximum material condition explained", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "mmc-lmc-rfs"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-25"
verified: true
---
Las condiciones de material máximo (MMC), mínimo (LMC) e independiente del tamaño (RFS) son tres modificadores de tolerancia geométrica definidos en las normas ASME Y14.5 e ISO 2692, que controlan la holgura y el ensamble de piezas al vincular la tolerancia de forma u orientación con el tamaño real del rasgo.

## Símbolos y notación

Tres símbolos normalizados identifican las condiciones de material en el marco de control de operación: el círculo con la letra M (Ⓜ) para MMC, el círculo con la letra L (Ⓛ) para LMC y la ausencia de cualquier modificador para RFS, que es la condición por defecto en ambos sistemas.

| Condición de material | Símbolo ASME Y14.5 | Símbolo ISO 2692 | Significado geométrico |
| --- | --- | --- | --- |
| Máximo material (MMC) | Ⓜ | Ⓜ | El rasgo contiene la máxima cantidad de material (eje en diámetro máximo, agujero en diámetro mínimo) |
| Mínimo material (LMC) | Ⓛ | Ⓛ | El rasgo contiene la mínima cantidad de material (eje en diámetro mínimo, agujero en diámetro máximo) |
| Independiente del tamaño (RFS) | (sin símbolo) | (sin símbolo, principio de independencia ISO 8015) | La tolerancia geométrica se aplica sin relación con el tamaño real del rasgo |

## Condición de material máximo (MMC)

La condición de material máximo se alcanza cuando el rasgo de tamaño posee la mayor cantidad de material permitida por su tolerancia dimensional, lo que para un eje de 20,000 mm / 0.7874 in de diámetro nominal con tolerancia h7 equivale al límite superior de 20,000 mm / 0.7874 in, y para un agujero de 20,000 mm / 0.7874 in corresponde al límite inferior de 19,948 mm / 0.7854 in (calidad H7). La tolerancia geométrica especificada en el marco de control es válida únicamente cuando el rasgo se encuentra en este estado; cualquier desviación hacia el mínimo material permite un incremento de la tolerancia geométrica, conocido como tolerancia adicional (bonus tolerance). El requisito de máximo material establece una frontera virtual que no debe ser violada:

> **Condición virtual (MMVC) = MMC ± tolerancia geométrica especificada**

| Parámetro | Eje (diámetro exterior) | Agujero (diámetro interior) |
| --- | --- | --- |
| MMC (tamaño de máximo material) | 20,000 mm / 0.7874 in | 19,948 mm / 0.7854 in |
| Tolerancia de posición especificada | 0,050 mm / 0.0020 in | 0,050 mm / 0.0020 in |
| MMVC (condición virtual de max. material) | 20,050 mm / 0.7894 in | 19,898 mm / 0.7834 in |
| Tolerancia adicional máxima posible | 0,052 mm / 0.0020 in | 0,052 mm / 0.0020 in |
| Tolerancia de posición total máxima | 0,102 mm / 0.0040 in | 0,102 mm / 0.0040 in |

## Condición de material mínimo (LMC)

La condición de material mínimo se produce cuando el rasgo contiene la menor cantidad de material dentro de sus límites dimensionales; para un eje de 20,000 mm / 0.7874 in con tolerancia h7 esto corresponde al diámetro de 19,979 mm / 0.7866 in, mientras que para un agujero del mismo diámetro nominal se sitúa en 20,052 mm / 0.7894 in. Con LMC, la tolerancia geométrica especificada aplica cuando el rasgo está en su mínimo material, y cualquier variación hacia el máximo material permite aumentar la tolerancia geométrica. El requisito de mínimo material se emplea principalmente para garantizar espesores mínimos de pared y distancias críticas al borde.

> **Condición virtual (LMVC) = LMC ± tolerancia geométrica especificada**

| Parámetro | Eje (diámetro exterior) | Agujero (diámetro interior) |
| --- | --- | --- |
| LMC (tamaño de mínimo material) | 19,979 mm / 0.7866 in | 20,052 mm / 0.7894 in |
| Tolerancia de posición especificada | 0,050 mm / 0.0020 in | 0,050 mm / 0.0020 in |
| LMVC (condición virtual de mín. material) | 19,929 mm / 0.7846 in | 20,102 mm / 0.7914 in |
| Tolerancia adicional máxima posible | 0,021 mm / 0.0008 in | 0,021 mm / 0.0008 in |
| Tolerancia de posición total máxima | 0,071 mm / 0.0028 in | 0,071 mm / 0.0028 in |

## Requisito independiente del tamaño del rasgo (RFS)

Con 0,050 mm / 0.0020 in de tolerancia de posición especificada, el modificador RFS mantiene ese valor constante sin permitir ninguna bonificación adicional, independientemente de si el rasgo se ha fabricado cerca del máximo material, del mínimo material o en cualquier punto intermedio. RFS es la condición por defecto en ASME Y14.5-2018 y también se aplica bajo el principio de independencia de la norma ISO 8015, aunque en el sistema ISO el marco de control puede incluir explícitamente el modificador Ⓡ cuando se desea resaltar la ausencia de requisito de material.

## Bonificación de tolerancia y tabla de aplicación

Cuando se emplea MMC, la tolerancia adicional (bonus tolerance) se calcula restando el tamaño real del rasgo respecto a su MMC; para un agujero de 20,000 mm / 0.7874 in con tolerancia de posición de 0,200 mm / 0.0079 in en MMC, la tolerancia total varía según el diámetro medido.

| Diámetro real del agujero | Desviación desde MMC | Tolerancia adicional | Tolerancia de posición total |
| --- | --- | --- | --- |
| 19,948 mm / 0.7854 in (MMC) | 0,000 mm / 0.0000 in | 0,000 mm / 0.0000 in | 0,200 mm / 0.0079 in |
| 19,974 mm / 0.7864 in | 0,026 mm / 0.0010 in | 0,026 mm / 0.0010 in | 0,226 mm / 0.0089 in |
| 20,000 mm / 0.7874 in | 0,052 mm / 0.0020 in | 0,052 mm / 0.0020 in | 0,252 mm / 0.0099 in |
| 20,026 mm / 0.7884 in | 0,078 mm / 0.0031 in | 0,078 mm / 0.0031 in | 0,278 mm / 0.0109 in |
| 20,052 mm / 0.7894 in (LMC) | 0,104 mm / 0.0041 in | 0,104 mm / 0.0041 in | 0,304 mm / 0.0120 in |

## Comparativa entre sistemas ISO y ASME

Cuatro diferencias fundamentales distinguen la aplicación de las condiciones de material en la norma ASME Y14.5-2018 y el conjunto ISO 8015 / ISO 2692.

| Aspecto | ASME Y14.5 | ISO 8015 / ISO 2692 |
| --- | --- | --- |
| Condición por defecto | RFS si no se indica símbolo | Principio de independencia (RFS); MMR/LMR deben indicarse explícitamente con Ⓜ o Ⓛ |
| Notación de LMC | Ⓛ en el marco de control | Ⓛ en el marco de control, similar a ASME |
| Reciprocidad (RPR) | No se contempla la reciprocidad | ISO 2692 permite un modificador adicional de reciprocidad que autoriza intercambiar tolerancia geométrica por dimensional y viceversa |
| Material en elementos no rígidos | Puede aplicarse el estado libre según ASME Y14.5 | ISO 10579 define condiciones de estado libre con notación Ⓕ |

## Aplicaciones prácticas en ensamble

Un conjunto de placa con dos agujeros separados 100,000 mm / 3.9370 in entre centros y pernos de fijación ilustra la utilidad de MMC. Si los agujeros se especifican con diámetro 10,000 mm / 0.3937 in ±0,100 mm / 0.0039 in y tolerancia de posición de 0,200 mm / 0.0079 in en condición de máximo material, la peor condición de ensamble ocurre cuando ambos agujeros están en MMC (9,900 mm / 0.3898 in) y su posición está desviada al máximo de 0,200 mm / 0.0079 in simultáneamente, exigiendo pernos de diámetro máximo 9,700 mm / 0.3819 in. Si los agujeros se fabrican a 10,000 mm / 0.3937 in, la tolerancia de posición disponible se eleva a 0,300 mm / 0.0118 in, facilitando el montaje sin comprometer la funcionalidad.

## Preguntas frecuentes (FAQ)

### ¿Qué significa MMC en GD&T?
MMC (Maximum Material Condition) es la condición en la que un rasgo de tamaño contiene la mayor cantidad de material posible dentro de los límites dimensionales especificados, como un eje en su diámetro máximo (20,000 mm / 0.7874 in) o un agujero en su diámetro mínimo (19,948 mm / 0.7854 in). Se utiliza para garantizar el ensamble en las condiciones más restrictivas.

### ¿Cómo se calcula la tolerancia adicional (bonus tolerance) bajo MMC?
La tolerancia adicional se obtiene restando el tamaño real del rasgo a su tamaño en MMC. Por ejemplo, si un agujero se mide a 20,026 mm / 0.7884 in y su MMC es 19,948 mm / 0.7854 in, la diferencia de 0,078 mm / 0.0031 in se suma a la tolerancia geométrica, resultando una tolerancia total de 0,278 mm / 0.0109 in respecto a los 0,200 mm / 0.0079 in originales.

### ¿Cuál es la diferencia entre MMC y LMC?
MMC aplica la tolerancia geométrica cuando el rasgo tiene la mayor cantidad de material y permite bonificación al alejarse de ese estado, favoreciendo el ensamble de piezas. LMC aplica la tolerancia cuando el rasgo tiene la menor cantidad de material y permite bonificación al aumentar el material, protegiendo espesores mínimos de pared (por ejemplo, no menos de 1,500 mm / 0.0591 in).

### ¿Qué implica la condición RFS?
RFS (Regardless of Feature Size) implica que la tolerancia geométrica, por ejemplo 0,050 mm / 0.0020 in, se mantiene constante para cualquier tamaño real del rasgo, sin admitir bonificación por desviación dimensional. Es la opción más restrictiva y se emplea cuando el centrado o la simetría son críticos.

### ¿En qué normas se definen MMC, LMC y RFS?
Las condiciones de material se definen en la norma estadounidense ASME Y14.5-2018 (Dimensioning and Tolerancing) y en la serie internacional ISO 2692 (Requisitos de máximo y mínimo material) junto con el principio de independencia de ISO 8015. Ambas utilizan los mismos símbolos Ⓜ y Ⓛ.

### ¿Cómo afecta MMC el ensamble de piezas?
MMC asegura que incluso en el peor escenario (agujero más pequeño a 19,948 mm / 0.7854 in y eje más grande a 20,000 mm / 0.7874 in) la condición virtual no se viola, garantizando siempre una holgura mínima de 0,050 mm / 0.0020 in. Cuando las piezas reales se desvían de MMC, la holgura aumenta y el montaje se facilita sin requerir modificar el diseño.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/material-properties-t_24.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
