---
title: "Coeficientes de pérdidas locales"
sidebar:
  label: "Coeficientes de pérdidas locales"
description: "Ficha tecnica: Coeficientes de pérdidas locales"
keywords: ["local head loss coefficients fittings valves", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "local-losses"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-25"
verified: true
---
Los coeficientes de pérdidas locales, representados por la letra griega ξ (xi), son valores adimensionales que cuantifican la pérdida de energía que sufre un fluido al atravesar accesorios, válvulas, codos, derivaciones y otros componentes en un sistema de tuberías. A diferencia de las pérdidas por fricción en tramos rectos, estas pérdidas menores se concentran en puntos singulares y dependen fundamentalmente de la geometría del componente y de la velocidad del flujo. La pérdida de presión local se calcula como una fracción de la presión dinámica del fluido, y su correcta estimación es esencial para dimensionar bombas, ventiladores y redes de distribución.

## Fórmula de cálculo
La pérdida de presión dinámica asociada a un accesorio o válvula se expresa mediante la ecuación general, que relaciona el coeficiente de pérdida local ξ con la densidad del fluido y la velocidad media del flujo:

> **Δp<sub>local</sub> = ξ · (ρ · v²) / 2**

| Variable | Descripción | Unidad (SI) | Unidad (US) |
|---|---|---|---|
| Δp<sub>local</sub> | Pérdida de presión local | Pa (N/m²) | lb/ft² (psf) |
| ξ | Coeficiente de pérdida local (adimensional) | – | – |
| ρ | Densidad del fluido | kg/m³ | slug/ft³ |
| v | Velocidad media del flujo | m/s | ft/s |

Para expresar la pérdida en altura de columna de fluido (pérdida de carga local h<sub>L</sub>), se emplea la variante:

> **h<sub>L</sub> = ξ · (v²) / (2g)**

donde g es la aceleración de la gravedad (9,81 m/s² / 32,174 ft/s²). Esta forma es útil para sistemas hidráulicos donde se trabaja con alturas piezométricas.

## Coeficientes de pérdida local típicos
En régimen turbulento completamente desarrollado, los coeficientes ξ para componentes normalizados toman valores prácticos que se recogen en la siguiente tabla. Las condiciones de instalación (roscado, bridado, grado de apertura) influyen notablemente en la magnitud de la pérdida.

| Componente o accesorio | Coeficiente de pérdida local ξ |
|---|---|
| Te, bridada, división de flujo en línea | 0,2 |
| Te, roscada, división de flujo en línea | 0,9 |
| Te, bridada, división de flujo en rama | 1,0 |
| Te, roscada, división de flujo en rama | 2,0 |
| Unión, roscada | 0,08 |
| Codo 90° normal, bridado | 0,3 |
| Codo 90° normal, roscado | 1,5 |
| Codo 45° normal, roscado | 0,4 |
| Codo 90° radio largo, bridado | 0,2 |
| Codo 90° radio largo, roscado | 0,7 |
| Codo 45° radio largo, bridado | 0,2 |
| Retorno 180°, bridado | 0,2 |
| Retorno 180°, roscado | 1,5 |
| Válvula de globo, completamente abierta | 10 |
| Válvula angular, completamente abierta | 2 |
| Válvula de compuerta, completamente abierta | 0,15 |
| Válvula de compuerta, 1/4 cerrada | 0,26 |
| Válvula de compuerta, 1/2 cerrada | 2,1 |
| Válvula de compuerta, 3/4 cerrada | 17 |
| Válvula de retención de clapeta, flujo directo | 2 |
| Válvula de bola, completamente abierta | 0,05 |
| Válvula de bola, 1/3 cerrada | 5,5 |
| Válvula de bola, 2/3 cerrada | 200 |
| Válvula de diafragma, abierta | 2,3 |
| Válvula de diafragma, semiabierta | 4,3 |
| Válvula de diafragma, 1/4 abierta | 21 |
| Contador de agua | 7 |

Los coeficientes son adimensionales y se consideran válidos para tuberías de diámetro nominal superior a 50 mm (2 pulgadas) en flujo turbulento con número de Reynolds elevado. Para diámetros menores o flujo laminar, el coeficiente puede variar significativamente.

## Factores que influyen en el coeficiente de pérdida local
El valor de ξ no es constante en todas las condiciones de operación; depende de varios factores hidrodinámicos y geométricos:

**Régimen de flujo y número de Reynolds.** En flujo laminar (Re < 2000), el coeficiente de pérdida local tiende a ser inversamente proporcional al número de Reynolds. En régimen turbulento completamente desarrollado (Re > 10⁴), ξ se estabiliza y alcanza los valores tabulados anteriormente. En la zona de transición, las pérdidas pueden ser superiores a las de flujo completamente turbulento debido a la interacción entre la capa límite y los gradientes de presión adversos.  
**Relación de curvatura en codos.** La relación entre el radio de curvatura del codo y el diámetro interior de la tubería (R/D) es determinante. Un codo de radio largo (R/D ≈ 1,5) presenta un coeficiente ξ menor que uno de radio normal (R/D ≈ 1,0). Por ejemplo, un codo roscado de 90° reduce ξ de 1,5 a 0,7 al pasar de radio normal a largo.  
**Ángulo de deflexión.** El coeficiente crece con el ángulo de giro. Un codo de 45° tiene típicamente un ξ entre un 25 % y un 50 % del valor correspondiente a un codo de 90° de la misma serie.  
**Rugosidad superficial interna.** En componentes fundidos o con alta rugosidad, las pérdidas por fricción superficial se suman a las pérdidas por cambio de dirección, aumentando ξ. En aplicaciones sanitarias o con tuberías de acero inoxidable pulido, los valores pueden ser inferiores a los indicados.  
**Interferencia con accesorios próximos.** La proximidad de dos codos, válvulas o derivaciones modifica el campo de velocidades y puede incrementar la pérdida total hasta un 50 % si la separación es inferior a 10 diámetros. Los datos tabulados suponen flujo completamente desarrollado aguas arriba del componente.  

## Método de la longitud equivalente
Una alternativa práctica para estimar las pérdidas locales consiste en asimilar cada accesorio a una longitud equivalente de tubería recta que produciría la misma pérdida de carga. La equivalencia se calcula igualando la fórmula de pérdida local con la ecuación de Darcy-Weisbach para pérdidas por fricción:

> **L<sub>eq</sub> = (ξ · D) / f**

| Variable | Descripción |
|---|---|
| L<sub>eq</sub> | Longitud equivalente de tubería recta (m / ft) |
| ξ | Coeficiente de pérdida local (adimensional) |
| D | Diámetro interior de la tubería (m / ft) |
| f | Factor de fricción de Darcy (adimensional) |

El factor de fricción f se obtiene del diagrama de Moody o de la ecuación de Colebrook en función del número de Reynolds y la rugosidad relativa de la tubería. Este método simplifica el cálculo de sistemas con múltiples accesorios al sumar las longitudes equivalentes a la longitud física de la tubería y aplicar la ecuación de Darcy-Weisbach una sola vez.

## Ejemplo de cálculo
Determinar la pérdida de presión local que introduce una válvula de bola cerrada en 1/3 de su carrera, por la que circula agua a una velocidad media de 2 m/s. Las propiedades del agua se toman a temperatura ambiente.

| Parámetro | Valor métrico | Valor imperial |
|---|---|---|
| Velocidad del fluido, v | 2 m/s | 6,56 ft/s |
| Densidad del agua, ρ | 1000 kg/m³ | 1,94 slug/ft³ |
| Coeficiente de pérdida, ξ | 5,5 | 5,5 |
| Pérdida de presión, Δp | 11 000 Pa (11 kPa) | 1,60 psi |

Aplicando la fórmula Δp = ξ · (ρ · v²) / 2:
- En unidades SI: 5,5 × (1000 kg/m³ × (2 m/s)²) / 2 = 5,5 × 2000 Pa = **11 000 Pa = 11 kPa**.
- En unidades US: 5,5 × (1,94 slug/ft³ × (6,56 ft/s)²) / 2 ≈ 5,5 × 41,8 lb/ft² = 230 lb/ft²; convertido a psi: 230 ÷ 144 ≈ **1,60 psi**.

Esta pérdida local representa aproximadamente 1,12 metros de columna de agua (m.c.a.) o 3,67 ft de columna de agua, y se suma a las pérdidas por fricción en el tramo recto para obtener la pérdida total del sistema.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre pérdidas mayores y pérdidas locales?
Las pérdidas mayores son las provocadas por la fricción del fluido con las paredes en tramos rectos de tubería y se calculan con la ecuación de Darcy-Weisbach. Las pérdidas locales, en cambio, se deben a cambios de dirección, estrechamientos, ensanchamientos o presencia de válvulas y accesorios. Ambas se suman para obtener la pérdida de carga total.

### ¿Por qué los coeficientes de la tabla son válidos solo para flujo turbulento?
En flujo laminar, la separación de la capa límite y los patrones de recirculación son muy diferentes, y ξ depende fuertemente del número de Reynolds. Los valores tabulados se obtuvieron experimentalmente en régimen turbulento completamente desarrollado (Re > 10⁴). Para instalaciones con Re bajo deben consultarse correlaciones específicas.

### ¿Puedo sumar directamente los coeficientes ξ de varios accesorios seguidos?
Solo cuando la distancia entre accesorios es superior a 20 diámetros y el flujo se reestabiliza. Si se instalan muy próximos, el campo de velocidades distorsionado por el primer accesorio altera el ξ del segundo, y la suma directa puede subestimar la pérdida real hasta en un 40 %.

### ¿Cómo afecta el diámetro de la tubería al valor del coeficiente de pérdida local?
Los datos estándar se refieren a diámetros comerciales típicos (≥ 50 mm). Para diámetros muy pequeños, la relación entre el espesor de la capa límite y el diámetro es mayor, lo que modifica el coeficiente. En tuberías de microfluídica o instalaciones de laboratorio es necesario obtener datos experimentales propios.

### ¿Qué norma recoge los valores de coeficientes de pérdida para accesorios?
Los coeficientes ξ no están normalizados universalmente, pero existen referencias ampliamente aceptadas como el *Handbook of Hydraulic Resistance* de Idelchik o los manuales de la Crane Company. Los valores presentados proceden de ensayos recopilados en la literatura técnica y representan promedios conservadores.

### ¿La pérdida local depende de la dirección del flujo en una derivación en T?
Sí, notablemente. En una T con flujo dividido, el coeficiente para la rama que continúa en línea recta es mucho menor (ξ ≈ 0,2–0,9) que para la derivación a la rama lateral (ξ ≈ 1,0–2,0), debido a la mayor distorsión del flujo al cambiar de dirección bruscamente.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/minor-loss-coefficients-pipes-d_626.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/calc_pipe_friction.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/577/
