---
title: "Calor específico de materiales"
sidebar:
  label: "Calor específico de materiales"
description: "Ficha tecnica: Calor específico de materiales"
keywords: ["specific heat capacity metals fluids", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "specific-heat"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-25"
verified: true
---
El calor específico es una propiedad termofísica fundamental que cuantifica la cantidad de energía térmica necesaria para elevar en un grado la temperatura de una unidad de masa de un material. En ingeniería, su conocimiento preciso permite dimensionar intercambiadores de calor, seleccionar fluidos caloportadores, predecir el comportamiento térmico de estructuras metálicas y optimizar procesos de calentamiento o enfriamiento. Los valores de calor específico varían significativamente entre metales, líquidos y gases, y dependen de condiciones como la temperatura, la presión y la fase en la que se encuentre la sustancia.

El calor específico de un material, representado habitualmente como *c*, es la cantidad de calor por unidad de masa requerida para elevar su temperatura en un Kelvin (o un grado Celsius) sin cambio de fase. Formalmente, se define mediante el límite c = (1/m) · límite_{ΔT→0} (ΔQ/ΔT). Para una misma sustancia pueden distinguirse dos variantes principales: calor específico a presión constante (c_p) y calor específico a volumen constante (c_v). En sólidos y líquidos la diferencia entre ambos suele ser pequeña, mientras que en gases puede ser significativa debido al trabajo de expansión.

## Fórmulas y ecuaciones principales

La ecuación fundamental para determinar la energía térmica necesaria para variar la temperatura de una masa conocida es:

> **q = m · c_p · ΔT**

Donde:

| Variable | Significado | Unidades típicas |
| --- | --- | --- |
| *q* | Calor transferido | kJ / Btu |
| *m* | Masa del material | kg / lb |
| *c_p* | Calor específico a presión constante | kJ/(kg·K) / Btu/(lb·°F) |
| *ΔT* | Incremento de temperatura | K o °C / °F |

En el caso de gases ideales, la relación entre los calores específicos a presión y volumen constante viene dada por la ecuación de Mayer:

> **c_p − c_v = R**

Donde *R* es la constante particular del gas (R = R_universal / M). Para un proceso termodinámico general, la relación entre ambos calores específicos se expresa como:

> **c_p − c_v = T · (∂p/∂T)_v · (∂v/∂T)_p**

Esta última ecuación, aunque de naturaleza más fundamental, se simplifica a la expresión de Mayer en el límite de gas ideal.

## Tabla de calores específicos de materiales comunes

Los valores de la siguiente tabla corresponden a mediciones realizadas a temperatura ambiente (aproximadamente 20 °C / 68 °F) y presión atmosférica estándar, salvo indicación en contrario. La primera columna de datos numéricos presenta el calor específico másico a presión constante (c_p) en unidades del Sistema Internacional, mientras que la segunda lo hace en unidades inglesas.

| Material | c_p (kJ/(kg·K)) / (Btu/(lb·°F)) | Estado/fase |
| --- | --- | --- |
| Aluminio | 0,91 / 0,217 | Sólido |
| Antimonio | 0,21 / 0,050 | Sólido |
| Berilio | 1,83 / 0,437 | Sólido |
| Bismuto | 0,13 / 0,031 | Sólido |
| Cadmio | 0,23 / 0,055 | Sólido |
| Calcio | 0,63 / 0,151 | Sólido |
| Carbono (acero al carbono) | 0,49 / 0,117 | Sólido |
| Cinc | 0,39 / 0,093 | Sólido |
| Cobalto | 0,42 / 0,100 | Sólido |
| Cobre | 0,39 / 0,093 | Sólido |
| Cromo | 0,46 / 0,110 | Sólido |
| Estaño | 0,21 / 0,050 | Sólido |
| Hierro (puro) | 0,45 / 0,108 | Sólido |
| Hierro fundido (fundición gris) | 0,46 / 0,110 | Sólido |
| Hierro forjado | 0,50 / 0,119 | Sólido |
| Litio | 3,57 / 0,853 | Sólido |
| Magnesio | 1,05 / 0,251 | Sólido |
| Manganeso | 0,48 / 0,115 | Sólido |
| Mercurio | 0,14 / 0,033 | Líquido |
| Molibdeno | 0,25 / 0,060 | Sólido |
| Níquel | 0,44 / 0,105 | Sólido |
| Niobio (Columbio) | 0,27 / 0,065 | Sólido |
| Oro | 0,13 / 0,031 | Sólido |
| Paladio | 0,24 / 0,057 | Sólido |
| Plata | 0,23 / 0,055 | Sólido |
| Platino | 0,13 / 0,031 | Sólido |
| Plomo | 0,13 / 0,031 | Sólido |
| Potasio | 0,75 / 0,179 | Sólido |
| Silicio | 0,71 / 0,170 | Sólido |
| Sodio | 1,21 / 0,289 | Sólido |
| Tántalo | 0,14 / 0,033 | Sólido |
| Titanio | 0,54 / 0,129 | Sólido |
| Tungsteno | 0,13 / 0,031 | Sólido |
| Uranio | 0,12 / 0,029 | Sólido |
| Vanadio | 0,39 / 0,093 | Sólido |
| Volframio | 0,13 / 0,031 | Sólido |
| Circonio | 0,27 / 0,065 | Sólido |
| Agua (líquida, 20 °C) | 4,18 / 0,998 | Líquido |
| Agua (vapor saturado, 100 °C) | 2,08 / 0,497 | Gas |
| Aire seco (0 °C, 1 atm) | 1,005 / 0,240 | Gas |
| Aceite mineral típico | 1,67 – 2,09 / 0,40 – 0,50 | Líquido |
| Hormigón / Concreto | 0,88 / 0,210 | Sólido |
| Ladrillo común | 0,84 / 0,201 | Sólido |
| Vidrio (borosilicato) | 0,75 / 0,179 | Sólido |
| Madera (pino, seca) | 1,70 / 0,406 | Sólido |

## Factores que influyen en el calor específico

El valor del calor específico de un material no es una constante absoluta, sino que varía con las condiciones termodinámicas y la estructura del material. Los principales factores incluyen:

- **Temperatura:** en metales, el calor específico tiende a aumentar ligeramente con la temperatura, especialmente a bajas temperaturas donde se aparta del límite de Dulong-Petit. En fluidos como el agua, el c_p presenta un mínimo cerca de los 35 °C / 95 °F.
- **Presión:** en líquidos y sólidos el efecto es pequeño y a menudo despreciable en cálculos de ingeniería; en gases, la presión modifica significativamente la densidad y por tanto el comportamiento del c_p, particularmente cerca del punto crítico.
- **Fase termodinámica:** la misma sustancia presenta valores distintos según esté en fase sólida, líquida o gaseosa. El vapor de agua a 100 °C tiene aproximadamente la mitad del calor específico del agua líquida a 20 °C.
- **Composición y microestructura:** en aleaciones, el calor específico puede estimarse con buena precisión mediante una media ponderada de los valores de los elementos constituyentes (regla de Neumann-Kopp), siempre que no existan transformaciones de fase.
- **Enlace atómico y peso molecular:** materiales con átomos ligeros y enlaces fuertes (como el berilio o el litio) muestran valores elevados; elementos pesados con enlaces metálicos débiles (como el plomo, el oro o el platino) presentan calores específicos bajos, del orden de 0,13 kJ/(kg·K) / 0,031 Btu/(lb·°F).

## Criterios de selección en aplicaciones de ingeniería

La elección del material o fluido adecuado en función de su calor específico depende del objetivo térmico del sistema:

- **Almacenamiento de energía térmica:** se prefieren materiales con calor específico elevado, como el agua (≈ 4,18 kJ/(kg·K) / 0,998 Btu/(lb·°F)) o el litio (3,57 kJ/(kg·K) / 0,853 Btu/(lb·°F)), porque acumulan más energía por unidad de masa para una misma elevación de temperatura.
- **Fluidos caloportadores:** el agua es el fluido de referencia por su alto c_p, bajo coste y baja toxicidad. En aplicaciones criogénicas o de alta temperatura se recurre a aceites térmicos o sales fundidas con valores típicos entre 1,5 y 2,5 kJ/(kg·K) / 0,36–0,60 Btu/(lb·°F).
- **Intercambiadores de calor y disipadores:** metales como el aluminio (0,91 kJ/(kg·K) / 0,217 Btu/(lb·°F)) equilibran una buena conductividad térmica con un calor específico suficiente para absorber picos de carga.
- **Componentes sometidos a ciclos térmicos rápidos:** materiales con bajo calor específico (ej. tungsteno o wolframio, 0,13 kJ/(kg·K) / 0,031 Btu/(lb·°F)) se calientan y enfrían con poca energía, reduciendo la inercia térmica.
- **Estructuras de edificación:** hormigón (0,88 kJ/(kg·K) / 0,210 Btu/(lb·°F)) y ladrillo (0,84 kJ/(kg·K) / 0,201 Btu/(lb·°F)) actúan como masa térmica pasiva, atenuando las fluctuaciones diarias de temperatura.

## Ejemplo de cálculo de energía térmica

Se desea calentar 5 kg (11,02 lb) de una pieza de acero al carbono desde 20 °C (68 °F) hasta 150 °C (302 °F) para un tratamiento térmico. El calor específico del acero al carbono se toma de la tabla como c_p = 0,49 kJ/(kg·°C) / 0,117 Btu/(lb·°F), considerando que 1 °C de incremento equivale a 1 K a efectos de diferencia de temperatura.

La energía requerida se calcula mediante q = m · c_p · ΔT.

ΔT = 150 °C − 20 °C = 130 °C (equivalente a 234 °F).

q = 5 kg × 0,49 kJ/(kg·°C) × 130 °C = 318,5 kJ

En unidades inglesas:

q = 11,02 lb × 0,117 Btu/(lb·°F) × 234 °F = 301,8 Btu

Por tanto, se deben suministrar aproximadamente 319 kJ (302 Btu) a la pieza para alcanzar la temperatura objetivo, sin considerar pérdidas al ambiente.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/specific-heat-metals-d_152.html
- **efunda.com**: https://www.efunda.com/materials/water/steamtable_sat.cfm?search_string=e%20properties
- **thermopedia.com**: https://www.thermopedia.com/content/1140/?tid=110
