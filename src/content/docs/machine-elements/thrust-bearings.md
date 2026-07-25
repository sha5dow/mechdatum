---
title: "Rodamientos de empuje tipos"
sidebar:
  label: "Rodamientos de empuje tipos"
description: "Ficha tecnica: Rodamientos de empuje tipos"
keywords: ["thrust bearing types axial load", "machine-elements"]
category: "machine-elements"
topic: "bearings"
subcategory: "thrust-bearings"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-25"
verified: true
---
Los rodamientos de empuje son elementos rotativos diseñados para soportar cargas predominantemente axiales, es decir, fuerzas que actúan a lo largo del eje de rotación. A diferencia de los rodamientos radiales, que resisten principalmente cargas perpendiculares al eje, los de empuje gestionan fuerzas de hasta varios miles de kN en aplicaciones como cajas de cambios, turbinas o hélices marinas.

## Tipos de rodamientos de empuje

Existen más de seis tipos constructivos normalizados, cada uno con un compromiso único entre capacidad de carga, velocidad y costo. La elección correcta depende de la magnitud de la fuerza axial, la velocidad de giro y la presencia de cargas radiales combinadas.

| Tipo | Elemento rodante | Capacidad de carga axial máxima (indicativa) | Velocidad límite | Carga radial admisible | Aplicaciones típicas |
| --- | --- | --- | --- | --- | --- |
| Bolas de empuje | Bolas de acero | Baja a media (~50 kN / 11 240 lbf) | Alta | No | Electrodomésticos, volantes |
| Rodillos cilíndricos de empuje | Rodillos cilíndricos | Media (~500 kN / 112 400 lbf) | Media | No | Bombas de engranajes, extrusoras |
| Rodillos cónicos de empuje | Rodillos troncocónicos | Alta (~2000 kN / 449 600 lbf) | Media | Sí (combinada) | Transmisiones automotrices, diferenciales |
| Rodillos esféricos de empuje | Rodillos asimétricos esféricos | Muy alta (~5000 kN / 1 124 000 lbf) | Baja a media | Sí (autocompensador) | Turbinas hidroeléctricas, laminadores |
| Cojinetes de fluido (Michell/Kingsbury) | Película de aceite presurizada | Extremadamente alta (>10 000 kN / 2 248 000 lbf) | Alta | No (solo axial) | Grandes turbogeneradores, hélices marinas |
| Magnéticos | Campo magnético | Variable (según diseño) | Muy alta | Limitada | Ultracentrifugadoras, sistemas de vacío |

## Capacidad de carga

La capacidad de carga estática \(C_0\) de un rodamiento de empuje estándar de bolas con diámetro interior de 30 mm / 1.18 in puede alcanzar 18 kN / 4 046 lbf. En el caso de los rodamientos de rodillos esféricos, la capacidad dinámica \(C\) para un diámetro de 100 mm / 3.94 in supera los 600 kN / 134 885 lbf. La carga equivalente dinámica cuando actúa únicamente fuerza axial pura se calcula con:

> **\(P = F_a\)** (para rodamientos con \(F_r \approx 0\))

Donde:

| Variable | Significado | Unidad |
| --- | --- | --- |
| \(P\) | Carga dinámica equivalente | kN |
| \(F_a\) | Carga axial aplicada | kN |

Para rodamientos de empuje que también puedan absorber algo de radial, el factor de cálculo se ajusta según el fabricante, pero en general la carga axial permanece como el término dominante.

## Dimensiones normalizadas

Los rodamientos de empuje siguen series dimensionales internacionales (ISO 104, DIN 711/715). A continuación se muestran dimensiones típicas para la serie de bolas de empuje unidireccional y rodillos cilíndricos, con diámetro interior \(d\) y exterior \(D\) en mm e in, y altura \(H\) en mm e in.

| Serie | \(d\) (mm / in) | \(D\) (mm / in) | \(H\) (mm / in) |
| --- | --- | --- | --- |
| Bolas 51100 | 10 / 0.394 | 24 / 0.945 | 9 / 0.354 |
| Bolas 51200 | 15 / 0.591 | 32 / 1.260 | 12 / 0.472 |
| Bolas 51300 | 25 / 0.984 | 52 / 2.047 | 18 / 0.709 |
| Rodillos cilíndricos 81100 | 30 / 1.181 | 47 / 1.850 | 11 / 0.433 |
| Rodillos cilíndricos 81200 | 40 / 1.575 | 68 / 2.677 | 19 / 0.748 |
| Rodillos esféricos 29200 | 60 / 2.362 | 85 / 3.346 | 17 / 0.669 |

Los valores métricos están redondeados según la designación ISO; la conversión imperial se ofrece con tres decimales como referencia.

## Criterios de selección

La selección de un rodamiento de empuje se apoya en cinco criterios principales:

1. **Magnitud y naturaleza de la carga**: cargas puramente axiales pequeñas admiten bolas; cargas elevadas o de impacto requieren rodillos esféricos o cojinetes de fluido.
2. **Velocidad de giro**: las bolas y los cojinetes magnéticos soportan velocidades muy altas; los rodillos esféricos quedan limitados a bajas rpm.
3. **Presencia de carga radial**: si existe carga radial combinada, deben emplearse rodamientos cónicos o esféricos de empuje.
4. **Condiciones de lubricación y ambiente**: temperaturas superiores a 120 °C / 248 °F o ambientes contaminados exigen sellos especiales y lubricantes de alta temperatura.
5. **Requisitos de precisión y rigidez**: aplicaciones de ultra precisión (máquinas-herramienta) optan por rodamientos de bolas de alta precisión, mientras que aplicaciones navales se decantan por el cojinete Michell por su fiabilidad y baja fricción.

## Tabla de selección por aplicación

| Aplicación | Tipo de rodamiento de empuje recomendado | Carga axial típica | Velocidad de rotación habitual | Observaciones |
| --- | --- | --- | --- | --- |
| Transmisión automotriz | Rodillos cónicos | 5–20 kN / 1 124–4 496 lbf por par | 2 000–5 000 rpm | Montaje en pares simétricos (O o X) |
| Hélice marina | Cojinete de fluido (Michell) | 500–10 000 kN / 112 404–2 248 080 lbf | <1 000 rpm | Película de aceite continua, larga vida |
| Bomba centrífuga vertical | Rodillos esféricos de empuje | 50–500 kN / 11 240–112 404 lbf | 1 500–3 600 rpm | Soporta desalineación del eje |
| Electrodoméstico (lavadora) | Bolas de empuje unidireccional | 2–8 kN / 450–1 800 lbf | 800–1 500 rpm | Costo reducido, sin carga radial |
| Turbina de vapor/gas | Cojinete de fluido (Kingsbury) | 1 000–20 000 kN / 224 808–4 496 160 lbf | 3 000–6 000 rpm | Capacidad muy alta, temperatura controlada por aceite |
| Compresor de tornillo | Rodillos cilíndricos de empuje | 20–200 kN / 4 496–44 962 lbf | 3 000–10 000 rpm | Carga pura axial, montaje sencillo |
| Husillo de máquina-herramienta | Bolas de empuje de precisión | 5–50 kN / 1 124–11 240 lbf | 6 000–15 000 rpm | Precisión micrométrica, precarga ajustable |

## Consideraciones de montaje

El montaje correcto de un rodamiento de empuje influye directamente en su vida útil. Para un rodamiento de bolas unidireccional con una carga nominal de 30 kN / 6 744 lbf, un desalineamiento angular de tan solo 0.1° puede reducir la duración en un 40%.

- **Superficie de apoyo**: el alojamiento y el eje deben tener tolerancias H7 (alojamiento) y js6 (eje) para asegurar un ajuste preciso. La rugosidad superficial recomendada es Ra ≤ 0.8 µm / 31.5 µin.
- **Precarga y ajuste axial**: los rodamientos de bolas de empuje requieren una ligera precarga axial para eliminar el juego interno; se logra mediante muelle ondulado o tuerca de fijación con par de apriete controlado.
- **Lubricación inicial**: aplicar grasa de litio de buena calidad rellenando un 30 % del espacio libre; en cojinetes de fluido, asegurar el suministro de aceite a presión antes del arranque.
- **Sentido de la carga**: respetar la dirección de la fuerza (unidireccional o bidireccional); nunca invertir la orientación de la pista fija en rodamientos de bolas sin consultar el diseño.
- **Protección**: instalar sellos labiales o deflectores si existe riesgo de ingreso de partículas. En ambientes marítimos, considerar acero inoxidable AISI 440C con dureza 58–60 HRC para evitar corrosión.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre un rodamiento radial y uno de empuje?
Un rodamiento radial soporta cargas perpendiculares al eje (radiales), mientras que uno de empuje está diseñado para cargas paralelas al eje (axiales). Muchos rodamientos cónicos combinan ambas funciones.

### ¿Qué tipo de rodamiento de empuje soporta carga radial y axial combinadas?
Los rodamientos de rodillos cónicos de empuje y los de rodillos esféricos de empuje pueden manejar simultáneamente carga radial y axial. Su diseño permite un ángulo de contacto que equilibra ambos esfuerzos.

### ¿Cuándo se debe elegir un cojinete de fluido en lugar de un rodamiento de elementos rodantes?
Cuando la carga axial supera aproximadamente 5 000 kN / 1 124 000 lbf o la velocidad es extremadamente elevada (>40 m/s / 7 874 fpm en el diámetro medio), los cojinetes de fluido ofrecen menor fricción, mayor capacidad y ausencia de desgaste metálico.

### ¿Cómo se determina la capacidad de carga mínima requerida para un rodamiento de empuje?
A partir del análisis de fuerzas del eje, se obtiene la carga axial estática y dinámica. La capacidad dinámica \(C\) seleccionada debe cumplir \(C \ge P \cdot (L_{10} / 10^6)^{1/p}\), donde \(L_{10}\) es la duración deseada en revoluciones y \(p\) el exponente (3 para bolas, 10/3 para rodillos).

### ¿Requiere mantenimiento un rodamiento de empuje de bolas?
Sí, requiere relubricación periódica cada 500–2 000 horas de funcionamiento según la velocidad y temperatura. También conviene inspeccionar visualmente las pistas cada 4 000 horas para detectar picaduras o decoloración.

### ¿Cuál es la temperatura máxima de trabajo de un rodamiento de empuje estándar?
Los rodamientos de acero al cromo (AISI 52100) estabilizados térmicamente pueden operar hasta 150 °C / 302 °F de forma continua. Para temperaturas superiores (hasta 300 °C / 572 °F), se emplean aceros especiales como el M50 o recubrimientos cerámicos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/forces-pipe-bends-d_968.html
- **mcmaster.com**: https://www.mcmaster.com/products/axial-bearings/
