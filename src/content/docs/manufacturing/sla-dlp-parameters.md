---
title: "SLA DLP parámetros y resinas"
sidebar:
  label: "SLA DLP parámetros y resinas"
description: "Ficha tecnica: SLA DLP parámetros y resinas"
keywords: ["SLA DLP resin 3D printing parameters resolution", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "sla"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-25"
verified: true
---
La fotopolimerización en cuba, que engloba las tecnologías SLA (estereolitografía) y DLP (procesamiento digital de luz), es un proceso de fabricación aditiva que solidifica resina líquida fotosensible capa por capa mediante luz ultravioleta. La principal diferencia radica en la fuente de luz: SLA utiliza un láser UV puntual para trazar cada capa, mientras que DLP proyecta el flash de una capa completa mediante un proyector digital, lo que acelera la construcción. Ambos procesos requieren un post-curado para alcanzar las propiedades mecánicas finales y la eliminación de estructuras de soporte generadas durante la impresión.

## Espesor de capa y resolución por tecnología

El espesor de capa típico en SLA es de 0,1 mm / 0.004 in, definiendo la resolución en el eje Z. La resolución en el plano XY depende del diámetro del punto láser, generalmente cercano a 0,25 mm / 0.01 in. En DLP, la resolución XY viene determinada por el tamaño de píxel del proyector, pudiendo alcanzar resoluciones más finas de hasta 0,035 mm / 0.0014 in en equipos de alta gama, con espesores de capa que oscilan entre 0,025–0,1 mm / 0.001–0.004 in.

| Tecnología | Fuente de luz | Espesor de capa típico | Resolución XY típica | Velocidad de impresión |
| --- | --- | --- | --- | --- |
| SLA | Láser UV puntual (355 nm) | 0,025–0,1 mm / 0.001–0.004 in | 0,1–0,25 mm / 0.004–0.01 in | Depende del área transversal; más lenta en piezas grandes |
| DLP | Proyector UV (385–405 nm) | 0,025–0,1 mm / 0.001–0.004 in | 0,035–0,1 mm / 0.0014–0.004 in | Constante por capa; más rápida para múltiples piezas |

## Parámetros de impresión por tipo de resina

Los parámetros óptimos de impresión varían significativamente según la formulación química de la resina fotosensible. El tiempo de exposición por capa, la intensidad lumínica y la velocidad de elevación deben ajustarse para garantizar una correcta polimerización y adhesión entre capas sin generar sobrecurado.

| Tipo de Resina | Tiempo de exposición por capa (Normal) | Intensidad lumínica recomendada | Velocidad de elevación (Elevación/Retracción) | Temperatura de operación |
| --- | --- | --- | --- | --- |
| Estándar (gris/blanca) | 2–4 s a 50 µm | 15–20 mW/cm² | 60–100 mm/min / 100–150 mm/min (2.4–3.9 in/min / 3.9–5.9 in/min) | 25–30 °C / 77–86 °F |
| Alta resistencia (ABS-like) | 6–10 s a 50 µm | 15–25 mW/cm² | 40–65 mm/min / 80–100 mm/min (1.6–2.6 in/min / 3.1–3.9 in/min) | 25–35 °C / 77–95 °F |
| Alta temperatura | 8–12 s a 50 µm | 20–30 mW/cm² | 30–50 mm/min / 60–80 mm/min (1.2–2.0 in/min / 2.4–3.1 in/min) | 30–35 °C / 86–95 °F |
| Flexible/Elastomérica | 5–8 s a 75 µm | 12–20 mW/cm² | 20–40 mm/min / 50–70 mm/min (0.8–1.6 in/min / 2.0–2.8 in/min) | 25–30 °C / 77–86 °F |
| Biocompatible (grado médico) | 3–6 s a 50 µm | 18–25 mW/cm² | 50–70 mm/min / 80–100 mm/min (2.0–2.8 in/min / 3.1–3.9 in/min) | 25–30 °C / 77–86 °F |

## Tolerancias típicas alcanzables

La precisión dimensional en procesos de fotopolimerización está típicamente en el rango de ±0,1 a ±0,2 % de la dimensión nominal, con un mínimo práctico de ±0,1 mm / 0.004 in para piezas de tamaño reducido. Factores como la orientación de la pieza, la contracción volumétrica durante el post-curado y la densidad de los soportes influyen críticamente en la tolerancia final. La contracción puede generar alabeos, por lo que se recomienda un post-curado controlado para minimizarlo.

## Ventajas y limitaciones del proceso

El proceso SLA/DLP es el más utilizado para prototipado rápido debido a su capacidad para generar geometrías complejas con excelente acabado superficial, en comparación con otras técnicas aditivas.

**Ventajas:**
- Excelente resolución y calidad superficial, minimizando el efecto escalón.
- Capacidad para producir piezas totalmente estancas e isótropas en resinas específicas.
- Proceso simple sin pasos de fresado o enmascaramiento.
- Amplia variedad de resinas funcionales (rígidas, flexibles, alta temperatura).
- El material no solidificado puede ser reciclado para nuevas impresiones.

**Limitaciones:**
- Las piezas tienden a ser frágiles y con superficie pegajosa ("tacky") si no se post-curan adecuadamente.
- Los tiempos de post-curado prolongados pueden inducir alabeos.
- Se requieren estructuras de soporte para voladizos, cuya remoción demanda post-procesado manual.
- Los materiales no curados son típicamente tóxicos e irritantes; la ventilación es imprescindible.
- Coste de materiales y mantenimiento de la cubeta más elevado que en tecnologías de deposición como FDM.

## Guía de selección de materiales y proceso

La selección entre SLA y DLP, y el tipo de resina, depende del balance requerido entre precisión, velocidad y propiedades mecánicas. La orientación de la pieza durante la construcción es determinante: una orientación vertical maximiza la resolución superficial a costa del tiempo, mientras que una horizontal acelera el proceso pero magnifica el efecto escalón.

| Requisito de la pieza | Tecnología recomendada | Tipo de resina sugerida | Razón de selección |
| --- | --- | --- | --- |
| Máxima precisión y detalle fino | SLA | Estándar | El fino punto láser garantiza la máxima resolución nominal. |
| Prototipado rápido de múltiples piezas | DLP | Estándar | Velocidad de impresión por capa constante, idónea para lotes. |
| Resistencia funcional similar a ABS | SLA o DLP | Alta resistencia (ABS-like) | Alta tenacidad y resistencia al impacto moderado. |
| Piezas flexibles tipo junta o fuelle | DLP | Flexible/Elastomérica | El DLP maneja mejor viscosidades más elevadas de estas resinas. |
| Aplicaciones en contacto con alimentos o piel | SLA | Biocompatible | Certificación para contacto humano, baja toxicidad post-curado. |

## Post-procesado requerido

Tras la impresión, la pieza se extrae de la cubeta y el exceso de resina no curada se elimina mediante lavado con alcohol isopropílico (IPA) al 90 % o superior. A continuación, se retiran manual o mecánicamente las estructuras de soporte generadas durante la fabricación para voladizos y extremidades débiles. Finalmente, la pieza lavada se introduce en una unidad de post-curado UV a una potencia típica de 60–120 W durante 10 a 40 minutos. Este paso es crítico para completar la polimerización, ya que el láser o proyector original no tiene la potencia suficiente para curar completamente la resina. Para acabados estéticos, el lijado permite eliminar cualquier resto de escalón.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia fundamental entre SLA y DLP?
SLA utiliza un rayo láser ultravioleta puntual que recorre el área de cada capa para solidificarla, mientras que DLP emplea un proyector digital que expone toda la capa de una sola vez mediante una pantalla de píxeles, lo que generalmente lo hace más rápido.

### ¿Por qué es imprescindible el post-curado en SLA/DLP?
La energía lumínica aplicada durante la impresión está calibrada para solidificar la resina lo justo y garantizar la adhesión entre capas, pero es insuficiente para completar las reacciones de polimerización. El post-curado en un horno UV completa los enlaces cruzados para alcanzar las propiedades mecánicas y térmicas finales.

### ¿Qué toxicidad presenta la resina no curada?
La resina líquida es un compuesto químico típicamente tóxico e irritante para la piel y las vías respiratorias. Es imperativo manipularla con guantes de nitrilo y trabajar en un entorno con ventilación forzada o extracción de gases.

### ¿Cómo se evita el alabeo de las piezas durante el post-curado?
El alabeo se minimiza optimizando la orientación de la pieza en la plataforma de impresión, asegurando un lavado exhaustivo para eliminar residuos sin curar, y utilizando ciclos de post-curado intermitentes o de baja intensidad en lugar de largas exposiciones continuas.

### ¿Se requiere siempre el uso de soportes en estas tecnologías?
Sí, las estructuras de soporte son normalmente necesarias. Se generan automáticamente para anclar la pieza a la plataforma y para sostener geométricamente cualquier voladizo o isla que de otro modo colapsaría al no estar soportado por la capa anterior.

### ¿Qué orientación de impresión es la más adecuada?
No hay una orientación óptima universal. Orientar el eje longitudinal de la pieza en vertical maximiza la calidad superficial al minimizar los escalones visibles, pero incrementa el tiempo de impresión. La orientación horizontal reduce el tiempo pero magnifica el efecto escalonado.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/slurry-transport-velocity-d_236.html
- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sla.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/digital-light-processing-dlp
