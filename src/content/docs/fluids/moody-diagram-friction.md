---
title: "Diagrama de Moody factor fricción"
sidebar:
  label: "Diagrama de Moody factor fricción"
description: "Ficha tecnica: Diagrama de Moody factor fricción"
keywords: ["Moody diagram Darcy Weisbach friction factor Reynolds", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "moody-diagram"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-25"
verified: true
---
El diagrama de Moody, presentado por Lewis F. Moody en 1944, correlaciona gráficamente el factor de fricción de Darcy (_f<sub>D</sub>_) con el número de Reynolds (_Re_) y la rugosidad relativa (_ε/D_), a partir de más de 10 000 experimentos en tuberías circulares. Constituye la herramienta más utilizada para predecir pérdidas de carga por fricción en flujo incompresible completamente desarrollado.

## Ecuación de Darcy‑Weisbach

La pérdida de carga _h<sub>f</sub>_ en una tubería recta de longitud _L_ y diámetro interno _D_ es proporcional al cuadrado de la velocidad media _V_, y se expresa mediante la ecuación fundamental:

> **h<sub>f</sub> = f<sub>D</sub> · (L / D) · (V² / 2g)**

donde _g_ = 9.81 m/s² (32.174 ft/s²) es la aceleración de la gravedad y _f<sub>D</sub>_ el factor de fricción de Darcy. La caída de presión asociada es:

> **∆p = f<sub>D</sub> · (ρ V² / 2) · (L / D) = ρ g h<sub>f</sub>**

| Símbolo | Magnitud | Unidad SI | Unidad US |
|---------|----------|-----------|-----------|
| _h<sub>f</sub>_ | Pérdida de carga | m | ft |
| _f<sub>D</sub>_ | Factor de fricción de Darcy | adimensional | adimensional |
| _L_ | Longitud de la tubería | m | ft |
| _D_ | Diámetro interno de la tubería | m | ft – in |
| _V_ | Velocidad media del fluido | m/s | ft/s |
| _g_ | Aceleración de la gravedad | 9.81 m/s² | 32.174 ft/s² |
| _ρ_ | Densidad del fluido | kg/m³ | lb/ft³ |
| ∆_p_ | Caída de presión | Pa | psi – lb/in² |

## Factor de fricción de Darcy (f<sub>D</sub>)

Para régimen laminar (_Re_ ≤ 2300) el factor de fricción es independiente de la rugosidad y vale exactamente:

> **f<sub>D</sub> = 64 / Re**

En régimen turbulento (_Re_ ≥ 4000) la dependencia es más compleja y se describe con la ecuación implícita de Colebrook‑White, que cubre tanto tuberías lisas como rugosas:

> **1 / √f<sub>D</sub> = –2.0 log₁₀ [ (ε/D) / 3.7  +  2.51 / (Re √f<sub>D</sub>) ]**

Esta fórmula converge rápidamente por iteración y es el fundamento del diagrama de Moody. Para tuberías lisas y _Re_ entre 3 000 y 100 000 puede emplearse la aproximación de Blasius:

> **f<sub>D</sub> = 0.0791 Re⁻¹/⁴**

A números de Reynolds muy altos (_Re_ > 10⁵) se obtiene mayor exactitud con:

> **f<sub>D</sub> = 0.046 Re⁻¹/⁵**

## Diagrama de Moody

El diagrama de Moody representa el factor de fricción _f<sub>D</sub>_ en función del número de Reynolds _Re_, para rugosidades relativas _ε/D_ comprendidas entre 0.000001 y 0.05. Se organiza en tres zonas principales:

- **Zona laminar** (_Re_ ≤ 2300): línea recta _f<sub>D</sub> = 64/Re_, única e independiente de la rugosidad.
- **Zona crítica o de transición** (2300 < _Re_ < 4000): el flujo oscila entre laminar y turbulento; el factor de fricción no está definido con certeza y se suele interpolar entre el valor laminar en _Re_ = 2300 y el valor turbulento en _Re_ = 4000.
- **Zona turbulenta** (_Re_ ≥ 4000): familia de curvas que, para cada _ε/D_, descienden desde la curva de tubería lisa hasta alcanzar una asíntota horizontal en el régimen completamente rugoso, donde _f<sub>D</sub>_ depende únicamente de la rugosidad relativa.

A continuación se recogen valores típicos del factor de fricción para tubería lisa en régimen turbulento, calculados con la fórmula de Colebrook‑White (ε = 0).

| Número de Reynolds, _Re_ | Factor de fricción, _f<sub>D</sub>_ |
|--------------------------|-------------------------------------|
| 4 000 | 0.0399 |
| 10⁴ | 0.0309 |
| 10⁵ | 0.0180 |
| 10⁶ | 0.0116 |
| 10⁷ | 0.0081 |
| 10⁸ | 0.0059 |

## Rugosidades absolutas de materiales comunes

La rugosidad absoluta del acero comercial es de aproximadamente 0.046 mm (0.0018 in), mientras que la del hierro fundido alcanza los 0.26 mm (0.010 in). La tabla siguiente reúne valores representativos medidos en tuberías nuevas; con el envejecimiento y la corrosión la rugosidad puede aumentar considerablemente.

| Material | Rugosidad absoluta ε |
|----------|-----------------------|
| Tubo estirado (cobre, latón, vidrio) | 0.0015 mm / 0.00006 in |
| Acero comercial o hierro forjado | 0.046 mm / 0.0018 in |
| Hierro fundido asfaltado | 0.12 mm / 0.0047 in |
| Hierro galvanizado | 0.15 mm / 0.0059 in |
| Hierro fundido sin revestir | 0.26 mm / 0.010 in |
| Hormigón | 0.3 – 3 mm / 0.012 – 0.118 in |
| Acero remachado | 0.9 – 9 mm / 0.035 – 0.354 in |

## Criterios de selección del factor de fricción

Para _Re_ ≤ 2300 se emplea directamente _f<sub>D</sub> = 64/Re_. Entre 2300 y 4000 el flujo es transitorio y el factor de fricción es incierto; se recomienda tomar el valor turbulento correspondiente a _Re_ = 4000 para cálculos conservadores. Por encima de 4000 el procedimiento operativo es:

1. Calcular el número de Reynolds: _Re = ρ V D / μ_.
2. Determinar la rugosidad relativa: _ε/D_, usando el valor de ε de la tabla anterior.
3. Con _Re_ y _ε/D_, leer _f<sub>D</sub>_ directamente del diagrama de Moody, o resolver la ecuación de Colebrook‑White mediante iteración (método de Newton‑Raphson, por ejemplo).
4. Sustituir _f<sub>D</sub>_ en la ecuación de Darcy‑Weisbach para obtener la pérdida de carga.

Debe tenerse en cuenta que existe una incertidumbre de al menos ±10 % en los valores de _f<sub>D</sub>_ obtenidos del diagrama, debida a la dispersión experimental y a las variaciones reales de la rugosidad.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre el factor de fricción de Darcy y el de Fanning?

El factor de Fanning _f<sub>F</sub>_ equivale a una cuarta parte del factor de Darcy (_f<sub>D</sub> = 4 f<sub>F</sub>_). El diagrama de Moody utiliza el factor de Darcy, que es el que aparece en la ecuación de Darcy‑Weisbach para el cálculo directo de la pérdida de carga.

### ¿Por qué el diagrama de Moody no cubre números de Reynolds entre 2300 y 4000?

En ese intervalo el flujo puede ser laminar o turbulento de forma intermitente, dependiendo de perturbaciones externas, y no existe una curva única. En la práctica se interpola o se toma el valor turbulento para quedar del lado de la seguridad.

### ¿Cuál es la rugosidad de una tubería de PVC?

El PVC nuevo presenta una rugosidad absoluta típica de 0.0015 mm (0.00006 in), similar a la del vidrio o el tubo estirado. Con el tiempo pueden adherirse depósitos que aumentan este valor.

### ¿Es válido el diagrama para cualquier fluido?

Sí, siempre que el flujo sea monofásico, incompresible y completamente desarrollado. La influencia de las propiedades del fluido se captura a través del número de Reynolds; el diagrama es adimensional y universal.

### ¿Cómo se procede cuando se conoce la caída de presión y se desconoce el caudal?

Al ser _f<sub>D</sub>_ función de _Re_, que a su vez depende del caudal, el problema es iterativo. Se supone un valor inicial de _f<sub>D</sub>_ (por ejemplo 0.02), se calcula la velocidad, se recalcula _Re_ y se corrige _f<sub>D</sub>_ hasta converger.

### ¿Qué precisión tiene la ecuación de Colebrook‑White?

Para tuberías comerciales en el rango _Re_ > 4000 la ecuación de Colebrook‑White reproduce los datos experimentales con un error inferior al 5 %, siempre que la rugosidad esté correctamente caracterizada.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/moody-diagram-d_618.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/calc_pipe_friction.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/789/
