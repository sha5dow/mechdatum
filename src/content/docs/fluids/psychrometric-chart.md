---
title: "Carta psicrométrica interpretación"
sidebar:
  label: "Carta psicrométrica interpretación"
description: "Ficha tecnica: Carta psicrométrica interpretación"
keywords: ["psychrometric chart humidity enthalpy temperature", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "psychrometric-chart"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-25"
verified: true
---
La carta psicrométrica es un diagrama que representa gráficamente las propiedades termodinámicas del aire húmedo a una presión barométrica constante, típicamente 101,325 kPa / 29,921 inHg. Permite determinar de forma rápida y visual 7 propiedades interrelacionadas: temperatura seca, temperatura húmeda, humedad relativa, humedad específica, entalpía, volumen específico y temperatura de rocío, con solo conocer dos de ellas. Su aplicación principal abarca el diseño y análisis de sistemas de climatización, secado industrial y meteorología, facilitando la interpretación de procesos de calentamiento, enfriamiento, humidificación y deshumidificación sin necesidad de resolver ecuaciones complejas.

## Propiedades psicrométricas representadas

Las líneas y curvas de la carta psicrométrica codifican seis magnitudes fundamentales del aire húmedo. La tabla siguiente resume su definición, unidades y la forma característica que adoptan sobre el diagrama estándar a 101,325 kPa.

| Propiedad | Definición | Símbolo | Unidades (SI / Imperial) | Forma en la carta |
|---|---|---|---|---|
| Temperatura seca | Temperatura del aire medida con un termómetro ordinario expuesto a la corriente, protegido de la radiación directa. | T_bs | °C / °F | Líneas verticales paralelas en el eje horizontal inferior. |
| Humedad específica | Masa de vapor de agua por unidad de masa de aire seco. | W, ω | g/kg / gr/lb | Líneas horizontales paralelas en el eje vertical derecho. |
| Humedad relativa | Relación porcentual entre la presión parcial del vapor de agua y la presión de saturación a la misma temperatura seca. | HR, φ | % | Curvas cóncavas ascendentes; la curva superior (100 %) es la línea de saturación. |
| Temperatura de bulbo húmedo | Temperatura que alcanza una masa de aire al evaporar agua en su seno hasta la saturación adiabática. | T_bh | °C / °F | Líneas oblicuas descendentes de izquierda a derecha, casi paralelas a las de entalpía constante. |
| Temperatura de rocío | Temperatura a la cual el vapor de agua inicia la condensación si se enfría el aire a presión y humedad constantes. | T_rocio | °C / °F | Se lee sobre la línea de saturación, siguiendo horizontalmente desde el punto de estado. |
| Entalpía específica | Contenido energético total del aire húmedo por unidad de masa de aire seco (calor sensible + calor latente). | h | kJ/kg / Btu/lb | Líneas oblicuas casi paralelas a las de bulbo húmedo; suelen leerse en una escala marginal izquierda. |
| Volumen específico | Volumen ocupado por la mezcla aire seco–vapor de agua por unidad de masa de aire seco. | v | m³/kg / ft³/lb | Líneas oblicuas con mayor pendiente que las de bulbo húmedo; trazadas a intervalos regulares. |

## Ecuaciones fundamentales de cálculo

Las propiedades del aire húmedo se rigen por las relaciones psicrométricas que vinculan presión parcial del vapor, temperatura y humedad. Todas las presiones parciales se expresan en kPa, y las temperaturas en °C, salvo que se indique lo contrario.

**Humedad específica (W) en función de la presión parcial del vapor**

> **W = 0,622 × P_v / (P_atm − P_v)** _[kg vapor / kg aire seco]_

donde P_atm es la presión barométrica total y P_v la presión parcial del vapor de agua. En unidades imperiales se usa la misma constante 0,622, obteniendo W en lb_vapor / lb_aire_seco.

**Humedad relativa (HR)**

> **HR = (P_v / P_vs) × 100** _[%]_

donde P_vs es la presión de saturación del vapor de agua a la temperatura seca del aire, calculable mediante correlaciones como la de Antoine o Magnus.

**Entalpía de la mezcla (h)**

> **h = 1,006 × T + W × (2501 + 1,86 × T)** _[kJ/kg]_  
> **h = 0,24 × T + W × (1061 + 0,444 × T)** _[Btu/lb]_

El primer término representa el calor sensible del aire seco y el segundo el calor latente del vapor de agua, donde T es la temperatura seca en °C para la fórmula SI y en °F para la imperial.

**Presión de saturación (correlación de Magnus-Tetens)**

> **P_vs = 0,61078 × exp[ (17,269 × T) / (T + 237,3) ]** _[kPa, con T en °C]_

Esta expresión tiene una precisión de ±0,1 % entre 0 °C y 60 °C y constituye la base de muchas cartas psicrométricas.

## Tabla de referencia de propiedades del aire húmedo

Los valores siguientes corresponden a una presión barométrica estándar de 101,325 kPa / 29,921 inHg y se han verificado mediante cálculos psicrométricos basados en las ecuaciones de Magnus y las correlaciones de la ASHRAE. Se presentan tres puntos representativos para facilitar la lectura directa sobre la carta.

| Temperatura seca (°C / °F) | Humedad relativa (%) | Temperatura húmeda (°C / °F) | Humedad específica (g/kg / gr/lb) | Entalpía (kJ/kg / Btu/lb) | Volumen específico (m³/kg / ft³/lb) | Temperatura de rocío (°C / °F) |
|---|---|---|---|---|---|---|
| 21,1 °C / 70 °F | 60 % | 16,1 °C / 61 °F | 9,4 g/kg / 66 gr/lb | 42,0 kJ/kg / 18,1 Btu/lb | 0,857 m³/kg / 13,7 ft³/lb | 13,9 °C / 57 °F |
| 23,9 °C / 75 °F | 50 % | 17,2 °C / 63 °F | 9,4 g/kg / 66 gr/lb | 44,1 kJ/kg / 19,0 Btu/lb | 0,868 m³/kg / 13,9 ft³/lb | 13,3 °C / 56 °F |
| 30,0 °C / 86 °F | 70 % | 25,8 °C / 78,4 °F | 18,5 g/kg / 130 gr/lb | 72,5 kJ/kg / 31,2 Btu/lb | 0,893 m³/kg / 14,3 ft³/lb | 24,1 °C / 75,4 °F |

## Criterios de interpretación de la carta

Interpretar correctamente una carta psicrométrica exige fijar primero un punto de estado conociendo al menos dos propiedades independientes. El procedimiento estandarizado sigue los pasos siguientes:

1. **Localización del punto de estado:** con temperatura seca y humedad relativa dadas, se asciende verticalmente desde el eje horizontal inferior hasta la curva de HR correspondiente.
2. **Lectura de humedad específica:** desde el punto de estado se traza una horizontal hacia la derecha hasta cortar la escala de humedad específica (eje vertical derecho o línea auxiliar).
3. **Determinación de temperatura de bulbo húmedo:** se sigue la línea oblicua de bulbo húmedo que pasa por el punto hasta intersectar la línea de saturación (HR = 100 %); la temperatura seca leída en ese punto de corte es la temperatura húmeda.
4. **Determinación de temperatura de rocío:** desde el punto de estado se traza una horizontal hasta la línea de saturación; la temperatura seca en esa intersección es la temperatura de rocío.
5. **Lectura de entalpía:** se prolonga la línea de bulbo húmedo hasta la escala marginal de entalpía, o bien se interpola entre las líneas de entalpía constante trazadas en el diagrama.
6. **Volumen específico:** se evalúa la distancia del punto a las líneas de volumen específico constante y se interpola linealmente.

La línea de saturación (HR = 100 %) representa el límite físico de la mezcla: por encima de ella el vapor condensa y se forma niebla. Esta propiedad es crítica en el diseño de serpentines de enfriamiento y en el control de condensaciones.

## Procesos del aire representables en la carta

La carta psicrométrica permite visualizar las trayectorias de evolución del aire al someterlo a transformaciones termodinámicas elementales. La tabla siguiente resume los cinco procesos clásicos y el movimiento del punto de estado.

| Proceso | Descripción | Trayectoria en la carta | Parámetros que cambian |
|---|---|---|---|
| Calentamiento sensible | Se añade calor sin modificar la humedad específica. | Línea horizontal hacia la derecha. | Aumenta T_bs, disminuye HR; W y T_rocio constantes. |
| Enfriamiento sensible | Se retira calor sin modificar la humedad específica. | Línea horizontal hacia la izquierda. | Disminuye T_bs, aumenta HR; si se alcanza la saturación aparece condensación. |
| Humidificación adiabática | Se inyecta agua líquida a temperatura de bulbo húmedo; el aire se enfría y gana humedad. | Línea oblicua de bulbo húmedo constante hacia arriba–izquierda. | Aumenta W y HR; T_bs desciende; entalpía prácticamente constante. |
| Enfriamiento con deshumidificación | El aire se enfría por debajo del punto de rocío, condensando agua. | Diagonal descendente de izquierda a derecha y hacia abajo, por debajo de la línea de saturación. | Disminuye W y T_bs; HR ≈ 100 % en la zona activa. |
| Mezcla adiabática de dos corrientes | Se combinan dos masas de aire de condiciones diferentes sin intercambio de calor con el exterior. | El punto resultante cae sobre la recta que une los dos puntos de estado, en posición determinada por la proporción másica. | Propiedades intermedias ponderadas. |

## Preguntas frecuentes (FAQ)

### ¿Cómo se determina la humedad específica sin escala directa en la carta?
La humedad específica se lee trasladando horizontalmente el punto de estado hasta el eje vertical derecho. Si la carta carece de este eje, se emplea la línea auxiliar inclinada que escala la humedad en granos por libra o gramos por kilogramo.

### ¿Por qué la temperatura de bulbo húmedo es siempre menor o igual que la temperatura seca?
La evaporación de agua desde la mecha que envuelve el bulbo húmedo consume calor latente, enfriando el termómetro. Cuanto más seco esté el aire, mayor es la diferencia psicrométrica (T_bs − T_bh). Ambas temperaturas solo coinciden cuando el aire está saturado (HR = 100 %).

### ¿Qué efecto tiene la altitud sobre la carta psicrométrica?
Al disminuir la presión barométrica con la altitud, el aire puede contener más vapor de agua por unidad de masa de aire seco a igual temperatura. La carta se expande verticalmente, desplazando hacia arriba las curvas de humedad relativa y la línea de saturación. Por ello se requieren cartas específicas para distintas presiones.

### ¿Es válido usar la misma carta para procesos de calefacción y de refrigeración?
Sí, la carta psicrométrica es aplicable a cualquier proceso del aire húmedo dentro del rango de temperaturas representado, ya sea calentamiento, enfriamiento, humidificación o deshumidificación. Cada proceso se traza como una línea recta o curva sobre el mismo diagrama.

### ¿Cómo se lee la entalpía si el punto de estado no coincide exactamente con una línea trazada?
Se interpola visualmente entre las dos líneas de entalpía más próximas al punto, manteniendo una orientación paralela a las líneas de bulbo húmedo. Muchas cartas incluyen una escala marginal que permite leer el valor directamente prolongando dicha paralela.

### ¿Qué representa la zona de niebla (fog region)?
Es la región situada por encima de la línea de saturación, donde el aire no puede retener todo el vapor en estado gaseoso y se produce condensación visible (niebla o rocío). En diseño de climatización se evita entrar en esta zona para impedir corrosiones y goteo en conductos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/psychrometric-chart-d_816.html
- **efunda.com**: https://www.efunda.com/
- **thermopedia.com**: https://www.thermopedia.com/content/1150/
