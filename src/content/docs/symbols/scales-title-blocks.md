---
title: "Escalas y rotulado normalizado"
sidebar:
  label: "Escalas y rotulado normalizado"
description: "Ficha tecnica: Escalas y rotulado normalizado"
keywords: ["drawing scales title block ISO standard", "symbols"]
category: "symbols"
topic: "drawing-symbols"
subcategory: "scales-title-block"
skill: "standards-guide"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
En dibujo técnico, las escalas normalizadas abarcan desde 1:1 para representación a tamaño real hasta reducciones de 1:2500 para planos de situación, mientras que el rotulado normalizado se organiza en un cajetín cuyas dimensiones mínimas recomendadas son 180 mm de ancho por 55 mm de alto (7,09 in × 2,17 in) en formato A4 vertical.

## Simbología normalizada

La designación de escalas en planos técnicos se realiza mediante una notación numérica que incluye más de quince relaciones estandarizadas, mientras que el cajetín se representa gráficamente como un área rectangular subdividida en campos reglados. La siguiente tabla recoge los símbolos fundamentales y su aplicación.

| Símbolo (representación textual) | Significado | Norma de referencia | Ejemplo de aplicación |
| --- | --- | --- | --- |
| `1 : 1` | Escala natural – el dibujo tiene las mismas dimensiones que la pieza real. | ISO 5455 | Plano de detalle de un soporte mecánico pequeño. |
| `1 : 2` / `1 : 5` / `1 : 10` | Escalas de reducción para piezas de tamaño medio. | ISO 5455 | Dibujo de conjunto de un ensamblaje mecánico. |
| `1 : 20` / `1 : 50` / `1 : 100` | Escalas típicas de planos de planta y distribución general. | ISO 5455, ASME Y14.100 | Plano arquitectónico de una vivienda unifamiliar. |
| `1 : 200` / `1 : 500` / `1 : 1000` | Escalas de reducción para planos de emplazamiento y parcelarios. | ISO 5455 | Plano de localización de una planta industrial. |
| `1 : 1250` / `1 : 2500` | Escalas de planos de bloque y planimetría urbana. | ISO 5455 | Plano catastral de un sector municipal. |
| `2 : 1` / `5 : 1` / `10 : 1` | Escalas de ampliación para detalles minúsculos. | ISO 5455 | Dibujo ampliado de un perfil de rosca micrométrica. |
| `ESC.` en cajetín | Campo obligatorio del cajetín donde se inscribe la escala principal del dibujo. | ISO 7200, ASME Y14.1 | Cualquier plano formal de fabricación o construcción. |
| `┌──────────────────────┐`<br>`│ TÍTULO    │                     │`<br>`│           │        ESCALA │`<br>`│ DIBUJADO │                     │`<br>`│ FECHA     │    N.º PLANO  │`<br>`└──────────────────────┘` | Esquema mínimo del rotulado normalizado (cajetín) con campos de identificación, escala y numeración. | ISO 7200, ASME Y14.2 | Bloque de título de un formato A3 horizontal para conjunto soldado. |

## Principios de diseño

La elección de escala está gobernada por el tamaño del objeto y las dimensiones del formato de dibujo, debiendo garantizarse que después de aplicar el factor de escala la representación ocupe al menos un 70 % del área disponible y deje márgenes mínimos de 20 mm / 0,79 in en los bordes no perforados. El cajetín, por su parte, sigue una retícula normalizada cuyo ancho total es fijo (por ejemplo, 180 mm / 7,09 in para formatos A4) y se sitúa en la esquina inferior derecha de la hoja.

### Escalas recomendadas por tipo de documento

| Tipo de dibujo | Escalas métricas habituales | Escalas imperiales equivalentes |
| --- | --- | --- |
| Detalles, ampliaciones | 1:1, 2:1, 5:1, 10:1 | 1/1, 2/1, 4/1, 8/1 |
| Componentes, subconjuntos | 1:1, 1:2, 1:5, 1:10 | 1/1, 1/2, 1/4, 1/8 |
| Planos de planta, distribución general | 1:20, 1:50, 1:100 | 1/16"=1'-0", 1/8"=1'-0", 1/4"=1'-0" |
| Planos de emplazamiento | 1:200, 1:500, 1:1000 | 1"=20'-0", 1"=50'-0", 1"=100'-0" |
| Planos de urbanización, mapas locales | 1:1250, 1:2500 | 1"=100'-0", 1"=200'-0" |
| Mapas de ordenación (tipo Ordnance Survey) | 1:10 000, 1:25 000, 1:50 000, 1:100 000 | 1"=833'-0", 1"=2083'-0", 1"=4167'-0", 1"=8333'-0" |

### Campos y dimensiones del rotulado normalizado

Los valores siguientes corresponden a la disposición del cajetín según ISO 7200 sobre un formato A4 en orientación vertical con margen de encuadernación de 20 mm / 0,79 in a la izquierda. El ancho del cajetín coincide con la zona de dibujo; la altura se distribuye en módulos de 10 mm / 0,39 in.

| Campo | Ancho | Alto | Contenido típico |
| --- | --- | --- | --- |
| Identificación (propietario) | 20 mm / 0,79 in | 25 mm / 0,98 in | Logotipo, razón social |
| Título del dibujo | 80 mm / 3,15 in | 25 mm / 0,98 in | Denominación del proyecto o pieza |
| Escala | 20 mm / 0,79 in | 25 mm / 0,98 in | `ESC. 1:50` |
| Número de plano | 40 mm / 1,57 in | 25 mm / 0,98 in | `A3-PL-001` |
| Zona de estados (revisión, aprobación) | 180 mm / 7,09 in | 30 mm / 1,18 in | Tabla de revisiones con fechas y firmas |

## Aplicaciones en ingeniería

En la práctica profesional de ingeniería, las escalas y el rotulado normalizado se utilizan de manera conjunta en todos los documentos técnicos que forman parte de un proyecto, desde los planos de concepción hasta los planos conforme a obra. Un plano de taller de una estructura metálica, por ejemplo, se dibuja a escala 1:20 o 1:10 para que los detalles de unión sean legibles; en su cajetín constan el título del elemento, el número de plano, la escala principal, la fecha de emisión y las firmas de diseño, revisión y aprobación. Cuando el mismo plano contiene detalles a diferente escala, cada vista parcial lleva su propia indicación de escala (`ESC. 1:5`), mientras que la escala principal del cajetín corresponde a la vista general. En proyectos de construcción civil, los planos de planta se dibujan a 1:50 o 1:100, los de emplazamiento a 1:200 o 1:500, y los planos de redes de servicios a 1:1000, todos con cajetines que responden a la misma estructura normalizada, facilitando el archivo, la consulta y la trazabilidad de la documentación.

## Preguntas frecuentes (FAQ)

### ¿Qué escala debo elegir para un plano de planta arquitectónico?
Las escalas más utilizadas para planos de planta son 1:50 (donde 1 cm en el dibujo equivale a 50 cm / ≈20 in en la realidad) y 1:100; la elección depende de si se requiere representar detalles de mobiliario o únicamente la distribución general.

### ¿Qué significa exactamente la designación "1:50"?
La designación "1:50" es una escala de reducción que indica que cada unidad de medida en el plano (por ejemplo 1 cm) corresponde a 50 unidades reales (50 cm / 19,69 in); por tanto, las dimensiones reales se obtienen multiplicando la medida del dibujo por 50.

### ¿Es obligatorio indicar la escala en el cajetín?
Sí, la escala principal del dibujo es un campo obligatorio del cajetín según las normas ISO 7200 y ASME Y14.100, y debe inscribirse antecedida de la abreviatura "ESC." incluso si el dibujo está a escala natural (1:1).

### ¿Qué norma regula el diseño del cajetín en el sistema ISO?
El rotulado normalizado está regulado por la norma ISO 7200, que define la disposición de los campos, el tamaño mínimo del bloque de título (180 mm de ancho × 55 mm de alto / 7,09 in × 2,17 in en A4) y el contenido obligatorio y opcional.

### ¿Dónde se coloca el cajetín dentro de la hoja de dibujo?
El cajetín se sitúa siempre en la esquina inferior derecha del formato, adyacente a los márgenes derecho e inferior, ocupando todo el ancho de la zona de dibujo (160 mm / 6,30 in en A4 horizontal con margen de encuadernación de 20 mm / 0,79 in).

### ¿Puedo usar escalas diferentes en el mismo plano?
Sí, cuando un plano contiene vistas o detalles a escalas distintas de la principal, cada detalle debe llevar su propia indicación de escala (por ejemplo "ESC. 1:5") anotada junto a la vista, mientras que en el cajetín se consigna únicamente la escala de la vista general.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/scaling-blueprint-drawings-d_1704.html
- **iso.org**: https://www.iso.org/ics/01.100.html
- **asme.org**: https://www.asme.org/getmedia/c01c0ea7-6496-4776-9fd7-d04c058d41cd/35101.pdf
