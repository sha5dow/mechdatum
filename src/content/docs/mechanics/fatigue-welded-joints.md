---
title: "Fatiga en uniones soldadas"
sidebar:
  label: "Fatiga en uniones soldadas"
description: "Ficha tecnica: Fatiga en uniones soldadas"
keywords: ["fatigue welded joints IIW classification", "mechanics"]
category: "mechanics"
topic: "fatigue"
subcategory: "fatigue-welded"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-25"
verified: true
---
La resistencia a la fatiga en uniones soldadas no guarda una relación directa con la resistencia a la tracción del material base. Incluso bajo cargas cíclicas moderadas, las imperfecciones geométricas y las tensiones residuales introducidas por el proceso de soldadura pueden iniciar y propagar grietas que conducen al fallo. Las curvas tensión‑vida (S‑N) basadas en el sistema de clasificación FAT del IIW permiten evaluar la vida útil de estos componentes y son la base para el diseño frente a la fatiga de uniones soldadas.

## Factores que afectan la resistencia a la fatiga

### Tensiones residuales de soldadura
Las tensiones residuales generadas durante la solidificación del cordón se suman algebraicamente a las tensiones aplicadas, modificando el valor medio efectivo del ciclo y, con ello, la vida a fatiga. Un aumento del espesor de la pieza incrementa las concentraciones de tensión residual en el pie del cordón, reduciendo la resistencia a la fatiga.

### Geometría y defectos de la unión
Cualquier irregularidad —mordeduras, falta de penetración, inclusiones de escoria o porosidad— actúa como concentrador de tensiones y punto de inicio de grietas. La forma del cordón (ángulo de entrada en el pie, sobreespesor) influye de manera notable en el factor de concentración de tensiones efectivo.

### Influencia del material base
A diferencia de los componentes lisos, en uniones soldadas un aumento de la resistencia estática del material base (límite elástico o resistencia última) no se traduce necesariamente en un incremento proporcional de la resistencia a fatiga, justamente porque las discontinuidades locales dominan el comportamiento a fatiga.

### Medio ambiente
Ambientes corrosivos, especialmente el agua de mar, aceleran la velocidad de crecimiento de grietas y reducen el límite de fatiga. Las temperaturas extremas y la presencia de humedad pueden también afectar adversamente la durabilidad de la unión.

## Curvas S‑N y sistema de clasificación FAT (IIW)

Las curvas S‑N (también conocidas como curvas de Wöhler) representan el rango de tensiones nominales Δσ en función del número de ciclos hasta el fallo N. El IIW (International Institute of Welding) define las clases FAT como el rango de tensión característico (en MPa) que produce una vida de 2 × 10⁶ ciclos con una probabilidad de supervivencia del 95 %.

La curva de diseño adopta la forma de una recta en doble escala logarítmica con pendiente m = 3 para ciclos altos y un cambio de pendiente a m = 5 para ciclos muy altos (por encima de 10⁷ – 10⁸ ciclos). La ecuación fundamental es:

> **Δσ_R = FAT · (2 × 10⁶ / N)^(1/m)**

Donde:
| Variable | Descripción | Unidad (SI / Imperial) |
|---|---|---|
| Δσ_R | Rango de tensión resistente del detalle en N ciclos | MPa / ksi |
| FAT | Clase de fatiga del detalle (resistencia característica a 2 × 10⁶ ciclos) | MPa / ksi |
| N | Número de ciclos hasta el fallo | – |
| m | Pendiente de la curva S‑N (habitualmente m = 3) | – |

A continuación se muestran algunas clases FAT típicas para diferentes geometrías de uniones soldadas en acero estructural:

| Detalle constructivo | FAT (MPa / ksi) |
|---|---|
| Chapa base laminada (sin soldadura) | 160 / 23.2 |
| Soldadura a tope con penetración completa, esmerilada a ras, inspeccionada | 112 / 16.2 |
| Soldadura a tope con penetración completa, sobreespesor conservado | 90 / 13.1 |
| Soldadura en ángulo (filete) con carga transversal, pie libre de defectos | 80 / 11.6 |
| Soldadura en ángulo con carga longitudinal | 71 / 10.3 |
| Unión en T con soldadura en ángulo, carga en el ala | 63 / 9.1 |
| Uniones con acumulación de tensiones (p. ej., rigidizadores transversales) | 50 / 7.3 |

## Cálculo del rango de tensiones en la unión soldada

La evaluación a fatiga comienza determinando el rango de tensión nominal Δσ aplicado, que se compara con el rango resistente Δσ_R de la clase FAT correspondiente. Las fórmulas básicas dependen del tipo de carga y de la geometría del cordón.

| Tipo de carga | Esquema | Fórmula para tensión nominal | Variables |
|---|---|---|---|
| Tracción / compresión axial en soldadura a tope con penetración completa | Junta plana | σ = P / (l · t_p) | P = carga axial, l = longitud del cordón, t_p = espesor de la chapa |
| Tracción en soldadura a tope con penetración parcial | Sección reducida | σ = P / (l · h_n) | h_n = profundidad de penetración |
| Cortante puro en soldadura en ángulo (filete) | Cordón longitudinal | τ = P / (2 · l · a) | a = garganta del cordón (habitualmente 0.7 · cateto) |
| Flexión pura en soldadura a tope | Momento flector M_b | σ = M_b / W = 6 M_b / (l · t_p²) | W = módulo resistente de la sección soldada |
| Torsión sobre eje macizo soldado | Par torsor M_t | τ = M_t / W_p, con W_p = π d³ /16 | d = diámetro del eje |

Los valores de tensiones deben ser expresados en unidades consistentes: fuerza en N o lbf, longitud en mm o in, tensión resultante en MPa o psi.

## Ejemplo de cálculo práctico

Un soporte soldado mediante dos cordones en ángulo longitudinales (cateto z = 8 mm / 0.315 in) debe transmitir una carga cíclica de tracción variable entre 0 y +80 kN (0 – 18 kip). La longitud de cada cordón es l = 120 mm / 4.72 in. El material es acero S355 y el detalle corresponde a FAT 71 (cordón con carga longitudinal, m = 3).

**Cálculo de la garganta efectiva:**
a ≈ 0.7 · z = 0.7 × 8 mm = 5.6 mm / 0.22 in

**Área resistente total (dos cordones):**
A_w = 2 · l · a = 2 × 120 mm × 5.6 mm = 1344 mm² / 2.08 in²

**Rango de tensión nominal aplicado:**
Δσ_nom = ΔP / A_w = 80 000 N / 1344 mm² = 59.5 MPa / 8.6 ksi

**Cálculo de la vida esperada:**
Usando Δσ_R = FAT · (2×10⁶ / N)^(1/3) y despejando N:
N = 2×10⁶ · (FAT / Δσ_nom)^m = 2×10⁶ · (71 / 59.5)^3 ≈ 3.5 × 10⁶ ciclos

El detalle soportaría aproximadamente 3.5 millones de ciclos antes de alcanzar el criterio de fallo. Si el requerimiento fuese de vida infinita (N ≥ 10⁷ ciclos) habría que reducir la carga o modificar la geometría (por ejemplo, aumentando el tamaño del cordón o mejorando el detalle a una clase FAT superior).

## Criterios de diseño y buenas prácticas

- **Evitar defectos de soldadura:** inclusiones, falta de penetración y mordeduras suponen concentradores de tensión que rebajan drásticamente la vida a fatiga.
- **Reducir las tensiones residuales mediante tratamientos postsoldadura:** el martillado por ultrasonidos (UIT), el granallado o el tratamiento térmico de alivio de tensiones pueden elevar la resistencia a fatiga hasta en 30 %.
- **Seleccionar detalles de alta categoría FAT:** siempre que la funcionalidad lo permita, elegir configuraciones con FAT elevada (soldaduras a tope esmeriladas, transiciones suaves del pie del cordón).
- **Dimensionar para el rango de tensiones, no para la tensión máxima:** en fatiga la variable determinante es la variación de tensión (Δσ), no el valor absoluto.
- **Evitar rigidizadores transversales y cambios bruscos de sección:** estos elementos generan picos de tensión locales y pertenecen a clases FAT bajas.
- **Verificar tanto la vida finita como la vida infinita:** si el número de ciclos esperado supera los 5‑10 millones, adoptar un diseño con límite de fatiga (endurance limit) si el material y el detalle lo permiten.
- **Considerar el efecto del espesor:** para espesores mayores de 25 mm / 1 in, aplicar factores correctores que reducen la resistencia a fatiga (el IIW propone un factor (25/t)^n).

## Preguntas frecuentes (FAQ)

### ¿Qué son las clases FAT del IIW y cómo se utilizan en el diseño de uniones soldadas?
Las clases FAT representan el valor del rango de tensión característico (en MPa) que un detalle soldado puede soportar durante 2 millones de ciclos con una probabilidad de supervivencia del 95 %. El diseñador selecciona la clase FAT correspondiente al detalle constructivo y compara el rango de tensión aplicado con la resistencia que proporciona la curva S‑N asociada, asegurando que el número de ciclos admisible supere la vida requerida.

### ¿Por qué un acero de mayor resistencia no garantiza una mejor resistencia a fatiga en uniones soldadas?
Porque la resistencia a fatiga de una unión soldada está gobernada por la presencia de defectos, la geometría del cordón y las tensiones residuales, más que por la resistencia mecánica del metal base. Las discontinuidades locales actúan como entallas que inician la grieta independientemente de la resistencia a la tracción del material.

### ¿Cómo afecta el espesor de la chapa a la fatiga de un cordón soldado?
A mayor espesor, la probabilidad de encontrar imperfecciones y el gradiente de tensiones residuales aumentan, lo que reduce la resistencia a fatiga. Por ello las normas, incluida la IIW, aplican un factor de reducción cuando los espesores superan un valor de referencia (generalmente 25 mm / 1 in).

### ¿Qué beneficios ofrecen los tratamientos postsoldadura como el martillado por ultrasonidos?
Estos tratamientos mejoran la resistencia a fatiga al introducir tensiones residuales de compresión en la superficie del pie del cordón, suavizar la transición geométrica y eliminar microdefectos superficiales. Pueden aumentar la clase FAT efectiva hasta en un escalón, lo que se traduce en una vida útil varias veces mayor para el mismo rango de carga.

### ¿Es posible evaluar la fatiga de una unión soldada únicamente con fórmulas analíticas?
Para geometrías simples y estados nominales de carga se pueden emplear las fórmulas de tensión nominal y las curvas FAT. Sin embargo, cuando la unión presenta geometrías complejas o estados de carga multiaxiales, se recomienda recurrir al análisis por elementos finitos junto con métodos de tensión local (hot‑spot structural stress) o de mecánica de fractura.

### ¿Qué diferencias existen entre fatiga de alto ciclo y de bajo ciclo en uniones soldadas?
La fatiga de alto ciclo (HCF) involucra millones de ciclos con tensiones dentro del rango elástico y es la más habitual en estructuras soldadas. La fatiga de bajo ciclo (LCF) implica deformaciones plásticas cíclicas en zonas localizadas y se da en situaciones con sobrecargas ocasionales o en detonaciones. La clasificación FAT está pensada principalmente para la evaluación HCF, aplicando habitualmente una pendiente m = 3.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/asme-carbon-stainless-steel-flanges-d_301.html
- **engineersedge.com**: https://www.engineersedge.com/weld_design_menu.shtml
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/failure_criteria/failure_criteria.cfm
