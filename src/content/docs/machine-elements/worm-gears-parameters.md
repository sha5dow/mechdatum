---
title: "Engranajes tornillo sin fin"
sidebar:
  label: "Engranajes tornillo sin fin"
description: "Ficha tecnica: Engranajes tornillo sin fin"
keywords: ["worm gear worm wheel parameters ratio", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "worm-gears"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-25"
verified: true
---
El mecanismo de tornillo sin fin es un engranaje helicoidal cruzado formado por un tornillo (gusano) y una rueda helicoidal (corona) cuyos ejes, generalmente perpendiculares, no se intersecan. Se caracteriza por ofrecer relaciones de reducción muy elevadas en una sola etapa —desde 5:1 hasta más de 100:1— con funcionamiento silencioso y capacidad de autobloqueo cuando el ángulo de avance es suficientemente pequeño. Se emplea masivamente en reductores de velocidad, sistemas de elevación, transportadores, mesas giratorias y mecanismos de ajuste de precisión.

## Nomenclatura y tipos

| Elemento | Denominación estándar | Función principal |
| --- | --- | --- |
| Tornillo o gusano | Eje motriz | Transmite el movimiento giratorio mediante sus filetes helicoidales |
| Corona o rueda helicoidal | Eje conducido | Recibe el movimiento y entrega el par amplificado a la salida |
| Entradas (z₁) | Número de hélices del tornillo | Define la relación de reducción para un número fijo de dientes de la corona |

**Tipos según la geometría del dentado:**
- **Sin garganta:** el tornillo es cilíndrico y la corona es un engranaje helicoidal estándar; capacidad de carga limitada.
- **De simple garganta:** la corona es abrazada (throated), lo que aumenta la superficie de contacto y la capacidad de carga.
- **De doble garganta (globoidal):** tanto el tornillo como la corona tienen forma de reloj de arena; soportan las cargas más elevadas y se usan en aplicaciones de alta exigencia.

## Parámetros de diseño normalizados

Los parámetros principales se derivan del módulo (sistema métrico) o del paso diametral (DP, sistema imperial). A continuación se muestran dimensiones normalizadas típicas para tornillos y coronas comerciales, extraídas de catálogos de referencia.

**Sistema métrico (ISO)**

| Módulo (mm) | Diámetro primitivo tornillo (mm / in) | Diámetro exterior tornillo (mm / in) | Longitud del tornillo (mm / in) | Entradas disponibles | Ángulo de presión (°) |
| --- | --- | --- | --- | --- | --- |
| 0.5 | 11 / 0.433 | 12 / 0.472 | 18 / 0.709 | 1, 2 | 20 |
| 0.8 | 14 / 0.551 | 15.6 / 0.614 | 30 / 1.181 | 1, 2 | 20 |
| 1 | 16 / 0.630 | 18 / 0.709 | 32 / 1.260 | 1, 2 | 20 |
| 1.25 | 21 / 0.827 | 23.5 / 0.925 | 37 / 1.457 | 1 | 20 |
| 1.5 | 25 / 0.984 | 28 / 1.102 | 40 / 1.575 | 1, 2 | 20 |
| 2 | 31 / 1.220 | 35 / 1.378 | 46 / 1.811 | 1, 2 | 14.5 / 20 |
| 2.5 | 37 / 1.457 | 42 / 1.654 | 63 / 2.480 | 2 | 20 |

**Sistema imperial (AGMA)**

| Paso diametral (DP) | Diámetro primitivo tornillo (in / mm) | Diámetro exterior tornillo (in / mm) | Longitud del tornillo (in / mm) | Entradas disponibles | Ángulo de presión (°) |
| --- | --- | --- | --- | --- | --- |
| 12 | 1.00 / 25.40 | 1.17 / 29.72 | 1.125 / 28.58 | 1 | 14.5 |
| 10 | 1.25 / 31.75 | 1.45 / 36.83 | 1.375 / 34.93 | 1 | 14.5 |
| 8 | 1.50 / 38.10 | 1.75 / 44.45 | 1.750 / 44.45 | 1 | 14.5 |
| 6 | 2.00 / 50.80 | 2.33 / 59.18 | 2.500 / 63.50 | 1 | 14.5 |

## Relación de transmisión

La relación de transmisión (i) es el cociente entre la velocidad angular del tornillo (n₁) y la de la corona (n₂), determinado exclusivamente por el número de entradas del tornillo (z₁) y el número de dientes de la corona (z₂).

> **i = n₁ / n₂ = z₂ / z₁**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| i | Relación de transmisión (–) | adimensional |
| n₁ | Velocidad angular del tornillo (entrada) | rpm |
| n₂ | Velocidad angular de la corona (salida) | rpm |
| z₁ | Número de entradas (hélices) del tornillo | – |
| z₂ | Número de dientes de la corona | – |

Para un tornillo de una entrada (z₁ = 1) y una corona de 40 dientes (z₂ = 40), la relación de transmisión es i = 40:1, lo que significa que por cada 40 revoluciones del tornillo la corona gira una vuelta completa. Si el tornillo tuviera 2 entradas, la relación con la misma corona sería 20:1.

## Eficiencia y autobloqueo

La eficiencia (η) de un tornillo sin fin depende del ángulo de avance del tornillo (λ) y del ángulo de fricción (φ) en el contacto entre los filetes. El ángulo de fricción se obtiene a partir del coeficiente de fricción (μ) mediante φ = arctan(μ). La eficiencia se calcula con la siguiente expresión:

> **η = tan(λ) / tan(λ + φ)**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| η | Eficiencia del engranaje | – (o %) |
| λ | Ángulo de avance del tornillo | ° |
| φ | Ángulo de fricción | ° |
| μ | Coeficiente de fricción entre materiales | – |

En condiciones de lubricación adecuada, la eficiencia varía entre 40 % (reducciones altas, una entrada) y 95 % (reducciones bajas, múltiples entradas, engranajes globoidales). El autobloqueo se presenta cuando λ < φ; en ese caso el mecanismo no puede ser arrastrado por la corona, una característica deseable en aplicaciones de elevación que requieren freno intrínseco. Con μ ≈ 0.1 (bronce sobre acero cementado, lubricado), φ ≈ 5.7°, típicamente se alcanza autobloqueo con λ < 5°. Tornillos de una sola entrada suelen ser autoblocantes, mientras que los de múltiples entradas raramente lo son.

## Capacidad de carga y potencia

Las relaciones fundamentales entre el par motor (torque), la velocidad y la potencia se rigen por las fórmulas de reducción. La potencia de salida (Pₒ) es igual a la potencia de entrada (Pₓ) multiplicada por la eficiencia (η). El par de salida (Mₒ) y la velocidad de salida (Sₒ) dependen de la relación de transmisión (i) y de la eficiencia.

> **Mₒ = Mₓ × i × η**
> **Sₒ = Sₓ / i**
> **Pₒ = Pₓ × η**

| Variable | Descripción | Unidad métrica | Unidad imperial |
| --- | --- | --- | --- |
| Mₒ | Par de salida | N·m | lb·ft |
| Mₓ | Par de entrada | N·m | lb·ft |
| Sₒ | Velocidad de salida | rpm | rpm |
| Sₓ | Velocidad de entrada | rpm | rpm |
| Pₒ | Potencia de salida | kW | hp |
| Pₓ | Potencia de entrada | kW | hp |
| i | Relación de transmisión | – | – |
| η | Eficiencia | – | – |

**Ejemplo de cálculo:** con un par de entrada de 100 N·m (73.8 lb·ft), i = 20 y η = 0.85, el par de salida es Mₒ = 100 × 20 × 0.85 = 1700 N·m (1254 lb·ft). Si la velocidad de entrada es 1500 rpm, la velocidad de salida es 1500 / 20 = 75 rpm.

La capacidad de carga admisible está limitada por la resistencia al desgaste y a la fatiga superficial de la corona, así como por la rigidez del conjunto. A continuación se presenta una tabla orientativa de potencia nominal para coronas de bronce trabajando con tornillos de acero cementado y rectificado, lubricación en baño de aceite, temperatura ambiente hasta 40 °C / 104 °F y servicio continuo.

| Módulo (mm) / DP | Relación típica | Velocidad entrada (rpm) | Potencia nominal (kW / hp) |
| --- | --- | --- | --- |
| 0.8 / 32 | 30:1 | 1400 | 0.06 / 0.08 |
| 1 / 25 | 20:1 | 1400 | 0.12 / 0.16 |
| 1.5 / 16 | 15:1 | 1400 | 0.25 / 0.34 |
| 2 / 12 | 10:1 | 1400 | 0.55 / 0.74 |
| 2.5 / 10 | 20:1 | 1400 | 1.1 / 1.47 |
| 6 (DP 6) | 40:1 | 1750 | 2.2 / 2.95 |

## Materiales

| Componente | Materiales comunes | Características destacadas |
| --- | --- | --- |
| Tornillo (gusano) | Acero al carbono 1045, acero aleado 4140, acero cementado 20MnCr5 | Alta resistencia superficial y al desgaste; los aceros cementados y rectificados ofrecen máxima duración |
| Corona (rueda) | Bronce SAE 65 (C93200), bronce al aluminio, fundición gris | El bronce tiene bajo coeficiente de fricción y buena disipación térmica; la fundición es económica para cargas moderadas |
| Aceros inoxidables | AISI 303, 304, 316 | Para ambientes húmedos, alimentación o corrosivos; menor capacidad de carga que los aceros tratados |
| Materiales plásticos | Nylon 6, POM (Delrin®) | Usados en aplicaciones de baja carga, funcionamiento en seco y bajo ruido |

## Selección por aplicación

| Aplicación | Relación recomendada (i) | Módulo / DP típico | Material corona | Autobloqueo requerido | Notas |
| --- | --- | --- | --- | --- | --- |
| Reductores compactos | 5:1 a 100:1 | 1 – 2.5 mm / 10 – 16 DP | Bronce | Opcional | Ejes perpendiculares, carcasa cerrada, lubricación por aceite |
| Elevadores de carga | 20:1 a 60:1 | 2 – 4 mm / 6 – 10 DP | Bronce | Sí | Freno de seguridad adicional si hay riesgo de retroceso dinámico |
| Transportadores | 10:1 a 30:1 | 1.5 – 3 mm / 8 – 12 DP | Bronce o fundición | No | Diseñar para marcha continua, controlar temperatura de operación |
| Mesas giratorias | 40:1 a 80:1 | 2 – 4 mm / 6 – 10 DP | Bronce | Sí | Requiere alta precisión de posicionamiento, juego mínimo |
| Actuadores lineales | 5:1 a 20:1 | 0.8 – 1.5 mm / 16 – 25 DP | Bronce o acero inoxidable | Depende | Combinado con husillo, carreras cortas, ciclos intermitentes |
| Equipos médicos | 30:1 a 60:1 | 0.5 – 1 mm / 20 – 32 DP | Acero inoxidable | Sí | Ambiente esterilizable, funcionamiento suave y preciso |

## Consideraciones de montaje

- **Alineación:** los ejes del tornillo y de la corona deben ser perpendiculares con una tolerancia de ±0.05 mm (±0.002 in) en el plano de contacto. La distancia entre centros debe respetar la especificación del fabricante para asegurar un engrane correcto con holgura circunferencial de 0.08–0.15 mm (0.003–0.006 in).
- **Juego axial del tornillo:** limitar a 0.02–0.05 mm (0.0008–0.002 in) mediante rodamientos de contacto angular o rígidos de bolas con precarga. Un juego excesivo provoca ruido y desgaste prematuro.
- **Lubricación:** en reductores cerrados se recomienda baño de aceite mineral EP (extrema presión) con viscosidad ISO VG 220–460 en función de la velocidad periférica. Para montajes abiertos o de difícil acceso se emplean grasas de jabón de litio con aditivos EP. En aplicaciones alimentarias se seleccionan lubricantes NSF H1.
- **Disipación térmica:** en régimen continuo, la temperatura de la carcasa no debe superar 80 °C / 176 °F. Por encima de 1.5 kW (2 hp) se recomienda prever aletas de refrigeración o ventilación forzada.
- **Fijación:** la corona suele montarse sobre un cubo con chavetero y prisioneros; el tornillo se fija sobre su eje con chaveta o apriete directo. Verificar concentricidad y perpendicularidad tras el montaje final.

## Preguntas frecuentes (FAQ)

### ¿Qué es el autobloqueo y cómo se garantiza?
El autobloqueo es la capacidad del engranaje sin fin para impedir que la corona arrastre al tornillo cuando se aplica un par inverso. Se consigue cuando el ángulo de avance (λ) es menor que el ángulo de fricción (φ). En la práctica, se da con tornillos de una entrada y lubricación adecuada, pero nunca debe sustituir un freno de seguridad en aplicaciones críticas porque el autobloqueo puede fallar bajo vibraciones o choques.

### ¿Cuál es la eficiencia típica de un tornillo sin fin?
La eficiencia varía entre 40 % y 95 % dependiendo de la relación de transmisión, el número de entradas y el acabado superficial. Reducciones altas (i > 50) con tornillo de una entrada suelen tener eficiencias del 40–60 %, mientras que configuraciones de múltiples entradas con superficies rectificadas y lubricación forzada pueden superar el 90 %.

### ¿Qué número de entradas elegir para mi aplicación?
Para relaciones i > 40:1 se utiliza habitualmente 1 entrada, que suele proporcionar autobloqueo. Entre 10:1 y 40:1 se eligen 1 o 2 entradas según se necesite capacidad de autobloqueo o mejor eficiencia. Para i < 10:1 se emplean 3 o más entradas para maximizar la eficiencia y la velocidad de salida, sacrificando el autobloqueo.

### ¿Qué material es el más adecuado para la corona?
El bronce SAE 65 (C93200) es el estándar industrial por su baja fricción contra acero y buena disipación del calor. En ambientes corrosivos o alimenticios se recurre al acero inoxidable, mientras que la fundición gris se reserva para cargas moderadas y producciones de alto volumen donde el costo es determinante.

### ¿Cómo se calcula la relación de transmisión si no conozco el número de dientes?
Si no se dispone del dato de dientes de la corona (z₂), se puede determinar experimentalmente girando el tornillo un número entero de vueltas y midiendo el giro resultante en la corona. La relación i será el número de vueltas del tornillo dividido entre la fracción de vuelta de la corona (o el inverso si se mide al revés). Analíticamente, siempre se cumple i = z₂ / z₁.

### ¿Qué mantenimiento requiere un engranaje de tornillo sin fin?
El mantenimiento principal consiste en controlar el nivel y estado del lubricante cada 2000 horas de operación o según recomendación del fabricante. En reductores cerrados se deben revisar los retenes y juntas para evitar fugas. También se recomienda inspeccionar el juego axial del tornillo y la holgura entre dientes cada 5000 horas, reajustando si es necesario. En aplicaciones de alto ciclo, los cambios de aceite periódicos son clave para la vida útil.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gear-output-torque-speed-horsepower-d_1691.html
- **mcmaster.com**: https://www.mcmaster.com/products/worm-gears/
