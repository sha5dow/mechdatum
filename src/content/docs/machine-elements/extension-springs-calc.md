---
title: "Resortes de tensión cálculo"
sidebar:
  label: "Resortes de tensión cálculo"
description: "Ficha tecnica: Resortes de tensión cálculo"
keywords: ["extension spring calculation initial tension", "machine-elements"]
category: "machine-elements"
topic: "springs"
subcategory: "extension-springs"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-25"
verified: true
---
Los resortes de tensión son elementos mecánicos diseñados para absorber y almacenar energía al ser estirados, ejerciendo una fuerza de retorno proporcional a su elongación. Su comportamiento se rige por la ley de Hooke, con la particularidad de que incorporan una tensión inicial que debe vencerse antes de que el resorte comience a extenderse. Esta característica los hace ideales para aplicaciones como puertas, sistemas de retorno, equilibrado de cargas y mecanismos de sujeción donde se requiere una fuerza de tracción controlada y fiable. La constante de rigidez del resorte, su recorrido máximo y la tensión inicial son los parámetros fundamentales que determinan su selección y dimensionado en cualquier diseño mecánico.

La fuerza necesaria para extender un resorte de tensión se compone de dos términos: la fuerza requerida para vencer la tensión inicial entre espiras y la fuerza adicional proporcional a la elongación posterior. La relación fundamental entre fuerza y deformación se expresa mediante una versión modificada de la ley de Hooke para resortes con pretensado interno.

> **F = Fᵢ + k · x**

donde:

| Variable | Descripción | Unidad |
|---|---|---|
| F | Fuerza aplicada | N / lb |
| Fᵢ | Tensión inicial (fuerza mínima para iniciar extensión) | N / lb |
| k | Constante de rigidez del resorte | N/mm / lb/in |
| x | Elongación desde la posición libre | mm / in |

La tensión inicial, Fᵢ, es una propiedad intrínseca del proceso de fabricación del resorte. Durante el enrollado, las espiras se comprimen unas contra otras, generando una precarga que debe ser superior a cero para que el resorte funcione correctamente. Si no existe tensión inicial, el muelle se comporta como un resorte de compresión trabajando a tracción, con F directamente proporcional a x desde el origen. La gráfica fuerza‑extensión es una recta con pendiente k que corta al eje de fuerza en Fᵢ positivo, desplazando el inicio de la extensión real.

La ley de Hooke generalizada establece que la deformación de un material elástico es proporcional a la tensión aplicada, siempre que no se superen los límites elásticos. En resortes de tensión, el alambre trabaja predominantemente a torsión cuando la espira se estira, y la constante k depende de la geometría (diámetro del alambre, diámetro medio de la espira, número de espiras activas) y del módulo de rigidez del material.

## Fórmulas de cálculo

La constante de rigidez para un resorte helicoidal de tensión se obtiene a partir de la teoría de torsión de alambres curvos. La expresión más utilizada para resortes de alambre redondo es:

> **k = (G · d⁴) / (8 · D³ · Nₐ)**

donde cada término se define en la tabla siguiente.

| Variable | Descripción | Unidad |
|---|---|---|
| k | Constante de rigidez | N/mm / lb/in |
| G | Módulo de rigidez transversal (módulo de cizalladura) del material | GPa / psi |
| d | Diámetro del alambre | mm / in |
| D | Diámetro medio de la espira | mm / in |
| Nₐ | Número de espiras activas | adimensional |

El módulo de rigidez G depende del material: para acero de alambre musical se emplean valores típicos de 80 GPa (11,6 × 10⁶ psi), para acero inoxidable AISI 302, aproximadamente 70 GPa (10,2 × 10⁶ psi). El número de espiras activas en resortes de tensión es la cantidad total de espiras menos aquellas destinadas exclusivamente a la formación de ganchos.

La tensión inicial Fᵢ puede estimarse a partir de la geometría y del límite elástico del material mediante la relación:

> **Fᵢ = (π · τ_ini · d³) / (8 · D)**

donde τ_ini es la tensión de torsión residual inducida durante el enrollado, que suele ser un porcentaje del límite elástico a cizalladura del material (típicamente 10‑20 %). Sin embargo, en la práctica los fabricantes proporcionan directamente la tensión inicial como parte de la especificación del resorte.

Alternativamente, si se conoce la fuerza F₁ para una extensión x₁ y la fuerza F₂ para una extensión x₂, la constante k puede calcularse como:

> **k = (F₂ – F₁) / (x₂ – x₁)**

y la tensión inicial se despeja:

> **Fᵢ = F₁ – k · x₁**

Esto es útil para verificar experimentalmente los parámetros de un resorte ya fabricado.

## Materiales

Los resortes de tensión se fabrican predominantemente con alambres de alta resistencia, capaces de soportar cargas cíclicas y mantener la tensión inicial a lo largo de su vida útil. La selección del material depende de las condiciones ambientales, los requerimientos de fatiga y la temperatura de operación.

| Material | Norma de referencia | Módulo de rigidez G (GPa / psi) | Temperatura máx. de trabajo (°C / °F) | Resistencia a la corrosión |
|---|---|---|---|---|
| Acero de alambre musical (Music Wire) | ASTM A228 | 80 / 11,6 × 10⁶ | 120 / 248 | Baja |
| Acero inoxidable AISI 302/304 | ASTM A313 | 70 / 10,2 × 10⁶ | 290 / 554 | Alta |
| Acero al cromo‑silicio (CrSi) | ASTM A401 | 79 / 11,5 × 10⁶ | 250 / 482 | Media |
| Aleación de cobre‑berilio (CuBe) | ASTM B197 | 40–50 / 5,8–7,3 × 10⁶ | 200 / 392 | Excelente |
| Inconel X‑750 (aleación de níquel) | AMS 5699 | 77 / 11,2 × 10⁶ | 400 / 752 | Excelente |

Para la mayoría de aplicaciones industriales a temperatura ambiente y ambientes secos, el alambre musical es la opción más económica y con mejores propiedades de fatiga. En exteriores, entornos húmedos o sanitarios, se prefiere el acero inoxidable. Las aleaciones de cobre‑berilio y los superaleaciones de níquel se reservan para condiciones extremas de corrosión o alta temperatura.

## Dimensiones normalizadas

Los resortes de tensión se identifican mediante un conjunto de dimensiones que definen su geometría y prestaciones mecánicas. Aunque existen estándares como DIN 2097 (resortes helicoidales de tracción), en el ámbito comercial predomina la especificación por parámetros. Las dimensiones fundamentales que se encuentran en catálogos de fabricantes se resumen en la siguiente tabla.

| Parámetro | Símbolo | Unidad típica | Rango habitual (valores orientativos) |
|---|---|---|---|
| Diámetro exterior de la espira | De | mm / in | 3–150 / 0.12–5.91 |
| Diámetro del alambre | d | mm / in | 0.2–15 / 0.008–0.591 |
| Longitud libre (entre centros de gancho) | L₀ | mm / in | 15–500 / 0.59–19.69 |
| Longitud máxima en extensión | Lₘₐₓ | mm / in | L₀ + 80% de L₀ (aproximado) |
| Diámetro interior mínimo de gancho | Dᵢ | mm / in | 0.5–20 / 0.02–0.79 |
| Constante de rigidez | k | N/mm / lb/in | 0.01–500 / 0.06–2855 |
| Tensión inicial | Fᵢ | N / lb | 0.1–1000 / 0.02–224.8 |

Estos rangos son orientativos y dependen del fabricante. Los catálogos especializados ofrecen combinaciones normalizadas de diámetro de alambre, diámetro exterior y longitud libre para facilitar la selección directa sin necesidad de diseño a medida. Las tolerancias dimensionales suelen regirse por normas como DIN 2097 o especificaciones internas del fabricante.

## Capacidades de carga

La capacidad de carga de un resorte de tensión está determinada por la resistencia a la torsión del alambre y por el límite elástico del material. El criterio fundamental es que la tensión de trabajo en el alambre no supere un porcentaje del límite elástico a cizalladura (generalmente 40‑50 % para servicio estático y 30‑35 % para servicio cíclico). La fuerza máxima admisible Fₘₐₓ se calcula con la fórmula:

> **Fₘₐₓ = (π · τₐ · d³) / (8 · D · kₛ)**

donde τₐ es la tensión admisible a torsión y kₛ es el factor de corrección por curvatura (factor de Wahl).

| Material | Diámetro del alambre d (mm / in) | Diámetro medio D (mm / in) | Carga máxima recomendada (N / lb) | Extensión máxima recomendada (mm / in) |
|---|---|---|---|---|
| Música (ASTM A228) | 1.0 / 0.039 | 8 / 0.315 | 25 / 5.62 | 50 / 1.97 |
| Música (ASTM A228) | 2.0 / 0.079 | 16 / 0.630 | 120 / 26.98 | 100 / 3.94 |
| Inoxidable 302 | 1.5 / 0.059 | 12 / 0.472 | 45 / 10.12 | 60 / 2.36 |
| CrSi (ASTM A401) | 3.0 / 0.118 | 24 / 0.945 | 500 / 112.4 | 150 / 5.91 |

Estos valores son representativos para una configuración típica de 10 espiras activas y con un factor de seguridad estático de aproximadamente 2. Para aplicaciones con miles de ciclos, la carga debe reducirse significativamente. Siempre se debe consultar la curva de fatiga del material y los diagramas de endurecimiento por deformación.

## Criterios de selección

Para elegir el resorte de tensión adecuado se deben definir previamente las condiciones de montaje y funcionamiento. A continuación se enumeran los pasos habituales y los factores determinantes.

1. **Carga y extensión requerida:** determinar la fuerza F₁ necesaria para la primera extensión x₁ (punto de trabajo mínimo) y la fuerza F₂ para la extensión máxima x₂ (punto de trabajo máximo). Con estos valores se calcula la constante k = (F₂−F₁)/(x₂−x₁) y la tensión inicial Fᵢ = F₁ − k·x₁.
2. **Espacio disponible:** el diámetro exterior De y la longitud libre L₀ deben ajustarse al alojamiento mecánico. Comprobar que la longitud en extensión máxima Lₘₐₓ = L₀ + x₂ no cause interferencias.
3. **Tipo de gancho:** los resortes de tensión comerciales ofrecen ganchos laterales, centrales, doblados, roscados o con argollas. La elección depende del método de sujeción y del espacio para el anclaje.
4. **Ambiente de trabajo:** si hay humedad, productos químicos o temperaturas elevadas, seleccionar el material adecuado (acero inoxidable, aleaciones de níquel, etc.).
5. **Ciclos de vida:** para servicio dinámico (más de 10³ ciclos), la tensión de trabajo a torsión debe limitarse a un valor de fatiga seguro. En aplicaciones estáticas o con pocos ciclos, se admite un valor más cercano al límite elástico.
6. **Tolerancia y fiabilidad:** resortes de alambre musical ofrecen poca dispersión en k y Fᵢ; los materiales más exóticos pueden requerir lotes de calibración.

Una vez definidos estos parámetros, se puede acudir a tablas de selección de fabricantes que cruzan diámetro de alambre, diámetro medio, constante y tensión inicial, para elegir una referencia estándar o bien solicitar un diseño personalizado.

## Consideraciones de montaje

El montaje de un resorte de tensión debe garantizar que la carga se aplique axialmente a través de los puntos de anclaje, evitando momentos flectores que reduzcan la vida útil. Los ganchos son las zonas más críticas, ya que concentran tensiones y constituyen puntos de fallo comunes. Principales recomendaciones:

- Utilizar pasadores o ejes que permitan el giro libre de los ganchos durante la extensión.
- Evitar que el resorte trabaje a compresión accidental; muchos resortes de tensión no están diseñados para ello.
- Instalar topes mecánicos que limiten la carrera máxima y eviten la sobrextensión.
- Asegurar que el resorte quede guiado lateralmente si existe riesgo de pandeo o fricción con superficies cercanas.
- En aplicaciones con vibraciones, prever elementos amortiguadores o fijaciones secundarias que reduzcan el golpeteo.

Las tablas de selección suelen incluir recomendaciones sobre el diámetro del pasador en función del diámetro interior del gancho; una holgura típica de 0.1–0.5 mm (0.004–0.020 in) es suficiente para permitir el movimiento sin sacrificar centrado.

## Tablas de selección por aplicación

A modo orientativo, se presentan configuraciones típicas de resortes de tensión para algunas aplicaciones comunes. Estos valores son extractos de catálogos comerciales y asumen condiciones de trabajo estándar.

| Aplicación | Material | d (mm / in) | De (mm / in) | L₀ (mm / in) | k (N/mm / lb/in) | Fᵢ (N / lb) | Carga máx. (N / lb) |
|---|---|---|---|---|---|---|---|
| Puertas de garaje residenciales | Acero inoxidable 302 | 2.5 / 0.098 | 20 / 0.787 | 200 / 7.87 | 1.8 / 10.3 | 60 / 13.5 | 250 / 56.2 |
| Mecanismos de retorno de pedal | Música (ASTM A228) | 1.2 / 0.047 | 9 / 0.354 | 60 / 2.36 | 2.5 / 14.3 | 20 / 4.5 | 90 / 20.2 |
| Cierres de trampilla en aeronaves | Cupro‑berilio (CuBe) | 1.0 / 0.039 | 7 / 0.276 | 50 / 1.97 | 1.2 / 6.9 | 10 / 2.25 | 45 / 10.1 |
| Tensor para cable en líneas eléctricas | CrSi (ASTM A401) | 5.0 / 0.197 | 40 / 1.575 | 300 / 11.81 | 4.0 / 22.8 | 200 / 44.9 | 800 / 179.8 |
| Desconexión rápida de acoplamientos hidráulicos | Inconel X‑750 | 0.8 / 0.031 | 6 / 0.236 | 40 / 1.57 | 0.9 / 5.1 | 8 / 1.8 | 35 / 7.9 |

Estas selecciones son puntos de partida; cada diseño debe validarse con la verificación de tensiones y fatiga correspondiente.

## Preguntas frecuentes (FAQ)

### ¿Qué es la tensión inicial en un resorte de tensión y por qué es importante?

La tensión inicial es la fuerza interna que mantiene unidas las espiras del resorte antes de aplicar carga externa. Es importante porque define el punto a partir del cual el resorte comienza a extenderse y contribuye a la fuerza total en todo el recorrido, influyendo directamente en el diseño del mecanismo.

### ¿Cómo se calcula la constante de un resorte de tensión?

La constante k se calcula como k = (F₂ – F₁) / (x₂ – x₁) para dos puntos conocidos de fuerza‑extensión, o mediante la fórmula geométrica k = (G · d⁴) / (8 · D³ · Nₐ). Los fabricantes suelen suministrar el valor de k en sus hojas de datos.

### ¿Cuál es la diferencia entre un resorte de compresión y uno de tensión?

Un resorte de compresión se comprime reduciendo su longitud y empuja hacia afuera; uno de tensión se estira y tira hacia adentro. Los resortes de tensión requieren ganchos o elementos de sujeción, y presentan tensión inicial; los de compresión generalmente no la tienen.

### ¿Qué materiales se utilizan en resortes de tensión?

Los más comunes son acero de alambre musical (ASTM A228), acero inoxidable AISI 302/304, acero al cromo‑silicio (ASTM A401) y aleaciones de cobre‑berilio o níquel para condiciones corrosivas o de alta temperatura.

### ¿Cómo seleccionar un resorte de tensión para una puerta de garaje?

Se deben medir la fuerza necesaria para levantar la puerta en posición cerrada y abierta, la carrera del cable o brazo de elevación, y elegir un resorte con una constante y tensión inicial que equilibren el peso de la puerta en todo el recorrido, preferiblemente de acero inoxidable si se instala en exterior.

### ¿Cuál es la vida útil esperada de un resorte de tensión?

Depende del material, de la tensión de trabajo y del número de ciclos. Para alambre musical trabajando por debajo del 30 % del límite elástico a torsión, se pueden esperar más de 100.000 ciclos. Con cargas cercanas al límite elástico, la vida se reduce a unos pocos miles de ciclos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hookes-law-force-spring-constant-d_1853.html
- **mcmaster.com**: https://www.mcmaster.com/products/extension-springs/
