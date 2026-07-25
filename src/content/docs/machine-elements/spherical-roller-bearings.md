---
title: "Rodamientos esféricos tipos"
sidebar:
  label: "Rodamientos esféricos tipos"
description: "Ficha tecnica: Rodamientos esféricos tipos"
keywords: ["spherical roller bearing self-aligning", "machine-elements"]
category: "machine-elements"
topic: "bearings"
subcategory: "spherical-roller"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-25"
verified: true
---
Los rodamientos esféricos son rodamientos de elementos rodantes diseñados para absorber cargas radiales y axiales elevadas manteniendo la capacidad de autoalineación. Su aplicación es crítica en ejes sometidos a flexión, desalineaciones angulares de hasta 2° o soportes con asientos descentrados. La configuración principal emplea dos hileras de rodillos con perfil abombado que ruedan sobre una pista esférica común en el aro exterior, lo que les confiere la propiedad autoalineante.

## Características técnicas

La capacidad de autoalineación se consigue mediante la geometría esférica del aro exterior y el perfil de barril de los rodillos. El diseño interno no está normalizado por ISO, por lo que varía entre fabricantes; sin embargo, las dimensiones de interfaz sí responden a la norma ISO 15:1998. Las series dimensionales más utilizadas son 213, 222, 223, 230, 231, 232, 238, 239, 240, 241, 248 y 249.

| Componente | Material principal | Dureza típica | Alternativas bajo pedido |
| --- | --- | --- | --- |
| Aros y rodillos | Acero al cromo 100Cr6 / AISI 52100 | 58–65 HRC | Aceros cementados, aceros para alta temperatura |
| Jaula | Chapa de acero estampada | — | Poliamida reforzada con fibra de vidrio, latón mecanizado, acero mecanizado |
| Sellos (opcional) | NBR / FKM | 70–80 Shore A | PTFE, Viton para alta temperatura |

La lubricación puede realizarse por grasa o aceite. Muchos diseños incorporan ranuras y agujeros de lubricación en el aro exterior o interior, así como un anillo central de guía que mejora el flujo de lubricante y reduce el rozamiento entre hileras.

## Dimensiones normalizadas

Las dimensiones principales (diámetro interior d, diámetro exterior D, ancho B) se seleccionan según ISO 15:1998. A continuación se muestran ejemplos representativos de la serie 222 y 223 con agujero cónico y cilíndrico.

| Serie | d (mm / in) | D (mm / in) | B (mm / in) | Masa aprox. (kg / lb) |
| --- | --- | --- | --- | --- |
| 22208 | 40 / 1.575 | 80 / 3.150 | 23 / 0.906 | 0,53 / 1.17 |
| 22210 | 50 / 1.969 | 90 / 3.543 | 23 / 0.906 | 0,63 / 1.39 |
| 22212 | 60 / 2.362 | 110 / 4.331 | 28 / 1.102 | 1,10 / 2.43 |
| 22215 | 75 / 2.953 | 130 / 5.118 | 31 / 1.220 | 1,65 / 3.64 |
| 22218 | 90 / 3.543 | 160 / 6.299 | 40 / 1.575 | 3,35 / 7.39 |
| 22220 | 100 / 3.937 | 180 / 7.087 | 46 / 1.811 | 4,95 / 10.91 |
| 22308 | 40 / 1.575 | 90 / 3.543 | 33 / 1.299 | 1,00 / 2.20 |
| 22310 | 50 / 1.969 | 110 / 4.331 | 40 / 1.575 | 1,85 / 4.08 |
| 22312 | 60 / 2.362 | 130 / 5.118 | 46 / 1.811 | 2,95 / 6.50 |
| 22315 | 75 / 2.953 | 160 / 6.299 | 55 / 2.165 | 5,35 / 11.80 |

Los agujeros pueden ser cilíndricos (sufijo sin designación especial) o cónicos con conicidad 1:12 (sufijo K) o 1:30 (series 240, 241, etc.).

## Capacidades de carga

La capacidad de carga dinámica C y estática C₀ depende de la geometría interna y del número de rodillos. La ecuación básica de vida nominal L₁₀ en millones de revoluciones sigue la fórmula ISO 281:

> **L₁₀ = (C/P)^p**

donde p = 10/3 para rodamientos de rodillos.

| Variable | Significado | Unidad |
| --- | --- | --- |
| L₁₀ | Vida nominal básica | Millones de revoluciones |
| C | Capacidad de carga dinámica básica | kN |
| P | Carga dinámica equivalente sobre el rodamiento | kN |
| p | Exponente de vida | — (10/3) |

Ejemplos orientativos de capacidades de carga para rodamientos de la serie 222:

| Serie | C (kN / lbf) | C₀ (kN / lbf) | Velocidad límite (rpm) con grasa | Velocidad límite (rpm) con aceite |
| --- | --- | --- | --- | --- |
| 22208 | 96,5 / 21690 | 90,0 / 20230 | 6300 | 7500 |
| 22210 | 104 / 23380 | 100 / 22480 | 5600 | 6700 |
| 22212 | 152 / 34170 | 150 / 33720 | 4800 | 5600 |
| 22215 | 212 / 47660 | 220 / 49460 | 3800 | 4500 |
| 22218 | 315 / 70820 | 335 / 75310 | 3200 | 3800 |
| 22220 | 410 / 92180 | 440 / 98920 | 2800 | 3400 |

La carga axial admisible se sitúa típicamente entre el 20 % y el 30 % de la carga radial no utilizada, dependiendo de la relación entre carga axial y radial.

## Criterios de selección

La selección del rodamiento esférico adecuado se basa en los siguientes pasos:

1.  Determinar las cargas radiales y axiales equivalentes y la velocidad de giro en condiciones de servicio.
2.  Estimar la vida útil requerida L₁₀h en horas y convertirla a L₁₀ mediante la velocidad.
3.  Verificar que la capacidad de carga dinámica C del rodamiento candidato supere el valor obtenido de la fórmula C = P × (L₁₀)^(1/p).
4.  Comprobar la carga estática equivalente frente a C₀, considerando cargas de choque (factor de seguridad s₀ ≥ 2 en condiciones normales, s₀ ≥ 3 para cargas de impacto).
5.  Evaluar la desalineación esperada: 0,5° es un valor de referencia seguro; hasta 1,5° requiere análisis de la presión de contacto.
6.  Seleccionar el tipo de agujero (cilíndrico o cónico) en función del sistema de fijación al eje.
7.  Elegir la jaula según temperatura, régimen de lubricación y solicitaciones dinámicas.

## Consideraciones de montaje

El montaje de rodamientos esféricos exige controlar el ajuste entre aro interior y eje, y entre aro exterior y soporte. Las recomendaciones generales son:

- Eje con carga rotativa: ajuste de interferencia (k5, m5, m6 según tamaño).
- Soporte con carga estática: ajuste deslizante (H7, JS7).
- En aplicaciones vibratorias, eliminar el juego radial del ajuste para evitar el fretting.
- Montaje en caliente: calentar el rodamiento a 80–120 °C / 176–248 °F sin superar 150 °C / 302 °F. Para agujeros cónicos, usar el método de reducción del juego radial o el avance axial.
- La desalineación admisible in situ depende del juego radial interno; valores de 0,25° a 3° son posibles según el diseño y la serie. La reducción de la vida útil por desalineaciones superiores a 0,5° debe calcularse según ISO/TS 16281.

La lubricación inicial debe ser compatible con las condiciones de servicio; los rodamientos con jaula de latón o chapa suelen ser más tolerantes a fallos de lubricación que las jaulas de poliamida.

## Aplicaciones típicas

Estos rodamientos son idóneos para máquinas rotativas donde se combinan cargas pesadas, velocidades moderadas y posibles faltas de coaxialidad. Sectores representativos incluyen cajas de engranajes industriales, aerogeneradores, máquinas de colada continua, transporte de materiales, bombas centrífugas, ventiladores, equipos de minería y construcción, maquinaria de pasta y papel, propulsión marina y equipos todoterreno.

## Tabla de selección por aplicación

| Aplicación | Serie recomendada | Observaciones |
| --- | --- | --- |
| Ventiladores industriales | 222, 223 | Alta velocidad, baja carga axial. Preferible montaje sobre manguito cónico. |
| Cintas transportadoras mineras | 222, 223, 230 | Carga radial elevada, ambiente con polvo. Sellos integrados recomendados. |
| Aerogeneradores (eje principal) | 230, 240 | Cargas muy altas, velocidad baja. Montaje con interferencia fuerte. |
| Bombas centrífugas | 222, 223 | Ambiente húmedo. Jaula de latón o poliamida. |
| Laminadoras / colada continua | 231, 232, 241 | Temperaturas elevadas, cargas de impacto. Estabilización dimensional térmica. |
| Equipos móviles todoterreno | 222, 230 | Polvo, vibración, desalineaciones de montaje. Jaula de chapa de acero. |

## Preguntas frecuentes (FAQ)

### ¿Qué desalineación máxima admite un rodamiento esférico de dos hileras?
Con juego radial normal, se admite entre 0,5° y 1,5°; con juegos incrementados pueden alcanzarse hasta 3°, aunque la vida útil se reduce significativamente.

### ¿Cuánta carga axial puede soportar como porcentaje de la radial?
Generalmente entre el 20 % y el 30 % de la carga radial no utilizada, aunque la relación exacta depende de la geometría interna y del ratio entre carga axial y carga radial.

### ¿Cuándo conviene usar agujero cónico en lugar de cilíndrico?
El agujero cónico facilita el montaje directo sobre ejes con manguito de fijación o sobre asientos con conicidad mecanizada, evitando el calentamiento del rodamiento.

### ¿Qué material de jaula es recomendable para altas temperaturas?
Las jaulas de latón mecanizado o de chapa de acero soportan temperaturas de hasta 200 °C / 392 °F, mientras que las de poliamida se limitan a 120 °C / 248 °F salvo especificaciones especiales.

### ¿Cómo afecta la desalineación a la vida útil del rodamiento?
La desalineación modifica la distribución de presiones en los rodillos; por encima de 0,5° se debe recalcular la capacidad de carga efectiva según ISO/TS 16281 para no subestimar la fatiga prematura.

### ¿Se pueden usar rodamientos esféricos sin mantenimiento?
Las versiones selladas con lubricación de por vida reducen drásticamente las tareas de mantenimiento en aplicaciones de velocidad media y cargas ligeras, pero en equipos pesados se recomienda relubricación programada.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/american-standard-beams-d_1320.html
- **mcmaster.com**: https://www.mcmaster.com/products/self-aligning-bearings/
