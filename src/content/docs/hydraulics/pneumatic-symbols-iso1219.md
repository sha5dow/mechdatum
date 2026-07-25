---
title: "Símbolos neumáticos ISO 1219"
sidebar:
  label: "Símbolos neumáticos ISO 1219"
description: "Ficha tecnica: Símbolos neumáticos ISO 1219"
keywords: ["ISO 1219 pneumatic symbols valves cylinders", "hydraulics"]
category: "hydraulics"
topic: "pneumatic-system"
subcategory: "symbols-pneumatic"
skill: "standards-guide"
launch_phase: 7
last_updated: "2026-07-25"
verified: true
---
La norma ISO 1219-1 establece un sistema normalizado de símbolos gráficos para representar componentes y funciones en circuitos neumáticos e hidráulicos, con el objetivo de garantizar una interpretación unívoca de los esquemas técnicos a nivel internacional. Esta guía de referencia proporciona una visión completa de los símbolos neumáticos bajo dicha norma, incluyendo estructuras básicas, símbolos detallados de válvulas, actuadores, accesorios, fórmulas de cálculo y recomendaciones de diseño. Los esquemas suelen operar a una presión de trabajo estándar de 6 bar / 87 psi en aplicaciones industriales generales, pudiendo alcanzar hasta 10 bar / 145 psi en sistemas de mayor exigencia.

## Estructura básica de los símbolos ISO 1219
La norma ISO 1219-1 define más de 200 símbolos gráficos para componentes neumáticos, organizados según una lógica funcional compuesta por elementos básicos. Cada símbolo se construye mediante la combinación de cuadros que representan posiciones de trabajo, líneas de conexión que indican vías de flujo, y símbolos de pilotaje o accionamiento que definen el tipo de mando.

| Elemento gráfico | Significado |
| --- | --- |
| Cuadrado con número de posiciones (dos o tres cuadros adyacentes) | Cada cuadrado representa una posición de conmutación distinta de una válvula direccional; el símbolo completo muestra tantos cuadros como posiciones tenga la válvula. |
| Flecha dentro de un cuadro | Indica el sentido de paso del fluido en esa posición; puede ser bidireccional o unidireccional. |
| Línea en “T” dentro de un cuadro | Marca un puerto bloqueado o vía cerrada en esa posición de trabajo. |
| Triángulo sólido sobre un puerto | Representa un escape o descarga a la atmósfera, típico en circuitos neumáticos. |
| Resorte o muelle (línea quebrada en zigzag) | Simboliza un retorno por muelle que devuelve la válvula a su posición de reposo. |
| Rectángulo con trazo diagonal y etiqueta | Indica un estrangulamiento o restricción al paso del aire. |

## Símbolos de actuadores
Los cilindros neumáticos estándar ISO 6432 presentan diámetros de émbolo normalizados desde 8 mm / 0.31 in hasta 25 mm / 0.98 in para cilindros de simple y doble efecto. La simbología ISO 1219 distingue claramente entre ambos tipos constructivos y sus variantes de amortiguación o carrera.

| Símbolo | Descripción |
| --- | --- |
| Rectángulo simple con un solo puerto y un resorte dibujado en el extremo opuesto | Cilindro de simple efecto, retorno por muelle. Un único puerto de entrada de aire comprimido desplaza el vástago; el muelle lo retrae. |
| Rectángulo con dos puertos, sin símbolo de resorte, con dos líneas de conexión a cada lado del émbolo | Cilindro de doble efecto. Ambos movimientos (avance y retroceso) se realizan mediante aire comprimido a través de los puertos alternos. |
| Rectángulo con amortiguación fija en un extremo o en ambos, indicada mediante un pequeño segmento en el lado del puerto | Cilindro con amortiguación neumática ajustable o fija; la deceleración al final de carrera se simboliza con un trapecio o estrangulamiento. |
| Doble rectángulo superpuesto con vástago pasante | Cilindro de doble vástago, con el émbolo accesible desde ambos lados; útil en aplicaciones donde se requiere acoplamiento en ambos extremos. |
| Rectángulo con un solo puerto y ausencia de muelle, generalmente acompañado de un símbolo de motor neumático | Motor neumático rotativo o actuador de giro limitado (rack and pinion). Se representa con un círculo o semicírculo que indica movimiento angular. |

## Símbolos de válvulas direccionales
Las válvulas direccionales controlan el camino del aire comprimido hacia los actuadores y se clasifican según el número de vías (puertos) y posiciones. Una configuración 5/2 (cinco puertos, dos posiciones) es la más común en circuitos neumáticos industriales para controlar cilindros de doble efecto, operando típicamente a caudales de hasta 1200 l/min / 42.4 cfm.

| Designación | Símbolo básico ISO | Función |
| --- | --- | --- |
| 2/2 vías NC (normalmente cerrada) | Dos cuadrados; el de reposo muestra vía bloqueada (T interior), el de trabajo muestra flecha de paso recto. | Control simple de paso/cierre para aire. Reposo cerrada; al activar, permite flujo. |
| 3/2 vías NC | Dos cuadrados; reposo con bloqueo (T) y escape, trabajo con flecha de entrada a salida y escape tapado. | Alimenta un cilindro de simple efecto: entrada, salida a cilindro y escape. Reposo cerrrado; activada, conecta P→A y bloquea escape. |
| 5/2 vías monoestable (retorno por muelle) | Dos cuadrados; reposo con conexión P a B y A a escape; trabajo con conexión P a A y B a escape. Ambos escapes con triángulos. | Controla cilindro de doble efecto. En reposo avanza o retrocede según conexión; al activar, invierte el sentido. |
| 5/2 vías biestable (doble pilotaje) | Similar al monoestable, pero sin muelle; ambos cuadros muestran posiciones de paso y escape. | Mantiene la última posición activada aunque cese la señal de pilotaje; usada con mandos neumáticos a distancias cortas. |
| 5/3 vías centro cerrado | Tres cuadrados; el central muestra todos los puertos bloqueados (T). Los extremos, configuraciones de paso y escape. | Permite parada intermedia del cilindro en cualquier punto, bloqueando la alimentación y escapes. Usada en prensado y posicionamiento. |

## Símbolos de válvulas de bloqueo y flujo
Los elementos de bloqueo y regulación de caudal permiten controlar la velocidad del actuador y la dirección del flujo. Una válvula antirretorno típica abre con una presión de resorte de 0,5 bar / 7.3 psi, mientras que una válvula selectora (OR) conmuta flujos del orden de 500 l/min / 17.7 cfm en tamaño G 1/8.

| Símbolo | Componente |
| --- | --- |
| Círculo con una flecha que lo cruza y un asiento esférico que bloquea el paso (bola apoyada sobre un resorte) | Válvula antirretorno (check): permite el flujo en un solo sentido; el resorte tarado vence a baja presión. |
| Círculo con dos entradas y una salida, con un obturador libre en el interior | Válvula selectora (OR / shuttle): deja pasar la mayor presión entre las dos entradas hacia la salida común. |
| Válvula de escape rápido (quick exhaust): combinación de una T con triángulo de escape y antirretorno | Cuando la presión de alimentación cae, abre un gran orificio de escape directo desde el cilindro, descargando rápidamente. |
| Estrangulador unidireccional: símbolo de estrangulador ajustable (rectángulo con diagonal y flecha) con antirretorno en paralelo | Válvula reguladora de caudal unidireccional: restringe el flujo en un sentido (ajustable) y deja paso libre en el contrario. |
| Estrangulador bidireccional: sólo el símbolo de estrangulador ajustable, sin antirretorno | Restricción simétrica al paso del aire; empleada en tomas de pilotaje o como silenciador de escape. |

## Símbolos de válvulas de presión
Las válvulas de presión protegen el sistema neumático y regulan la fuerza de los actuadores. Una válvula limitadora de presión típica se tarra en fábrica a un valor de 10 bar / 145 psi, aunque puede ajustarse entre 1 bar / 14.5 psi y 16 bar / 232 psi mediante el volante de regulación.

| Símbolo | Denominación |
| --- | --- |
| Recuadro con un conducto de entrada, una salida de escape y un piloto de presión interna. El muelle ajustable se representa con una flecha cruzando el resorte. | Válvula limitadora de presión (de seguridad): abre el escape cuando la presión en la línea supera el valor tarado del muelle. |
| Recuadro similar pero con conexión de pilotaje externa (línea discontinua) y la salida hacia otra línea de trabajo en lugar de escape. | Válvula de secuencia: permite el paso a un circuito secundario una vez alcanzada una presión determinada en el primario. |
| Símbolo compuesto por un estrangulador en serie con una válvula de dos puertos y un piloto externo, todo en un solo recuadro. | Regulador de presión (reductor): mantiene una presión de salida constante independientemente de las variaciones en la línea de entrada. |
| Similar al reductor, pero con puerto de escape integrado para aliviar sobrepresiones en la salida. | Regulador de presión con escape, típico de unidades FRL (filtro-regulador-lubricador). |

## Símbolos de accesorios y líneas
Los accesorios y las líneas completan el esquema neumático, desde la generación del aire comprimido hasta su acondicionamiento. Una unidad FRL compacta típica maneja un caudal de hasta 1500 l/min / 53 cfm con una presión de entrada máxima de 16 bar / 232 psi y ofrece filtración de partículas hasta 5 µm / 0.0002 in.

| Símbolo | Función |
| --- | --- |
| Círculo con una línea diagonal y un pequeño colector de purga en la parte inferior | Filtro de aire comprimido, normalmente con drenaje manual o automático; retiene partículas y condensados. |
| Círculo con una flecha hacia la derecha y un cuenco semilleno de aceite | Lubricador: dosifica aceite en forma de niebla hacia la línea de trabajo; se instala después del regulador. |
| Triángulo con una línea de salida y una entrada de presión; el interior muestra un muelle y un obturador | Regulador de presión (símbolo independiente); ajusta la presión de trabajo mediante un volante manual. |
| Líneas continuas para flujo principal, discontinuas para pilotajes y circuitos de control. | Tuberías de trabajo, mando y pilotaje: la línea continua representa conducciones principales; la discontinua, líneas de pilotaje neumático. |
| Símbolo de silenciador: un triángulo con salida a la atmósfera y un interior relleno de puntos | Silenciador: reduce el ruido del escape de las válvulas, colocado en los puertos de descarga con rosca. |

## Fórmulas de cálculo neumático
La fuerza teórica desarrollada por un cilindro neumático depende de la presión de trabajo y del área efectiva del émbolo. Para un cilindro de 32 mm / 1.26 in de diámetro operando a 6 bar / 87 psi, la fuerza en avance alcanza aproximadamente 482 N / 108 lbf, mientras que en retroceso disminuye a 415 N / 93 lbf debido al área anular del vástago. La fórmula general y las velocidades de vástago se calculan con las siguientes expresiones, típicamente para un régimen de velocidad entre 0,1 m/s / 0.33 ft/s y 1,5 m/s / 4.9 ft/s.

> **F_avance = p × (π × D² / 4) — F_resorte**  
> **F_retroceso = p × (π × (D² – d²) / 4)**

| Variable | Nombre | Unidades típicas |
| --- | --- | --- |
| F | Fuerza del cilindro | N / lbf |
| p | Presión manométrica de trabajo | bar / psi (1 bar = 14.5038 psi) |
| D | Diámetro interior del émbolo | mm / in |
| d | Diámetro del vástago | mm / in |
| F_resorte | Fuerza del muelle de retorno (si existe) | N / lbf |

Velocidad media del vástago:

> **v = Q / A**

| Variable | Nombre | Unidades típicas |
| --- | --- | --- |
| v | Velocidad del vástago | m/s / ft/s |
| Q | Caudal volumétrico suministrado | l/min / cfm (1 l/min = 0.035315 cfm) |
| A | Área efectiva (π × D² / 4 para avance) | mm² / in² |

## Tablas de selección de componentes
La selección de cilindros neumáticos normalizados se basa en el diámetro del émbolo y la carrera necesaria. Los diámetros estándar según ISO 6431 para presiones máximas de 10 bar / 145 psi permiten las siguientes fuerzas teóricas a 6 bar / 87 psi en avance:

| Diámetro émbolo (mm / in) | Fuerza avance a 6 bar (N / lbf) | Fuerza retroceso a 6 bar (N / lbf) | Caudal recomendado (l/min / cfm) para 0.5 m/s |
| --- | --- | --- | --- |
| 20 / 0.79 | 188 / 42.3 | 158 / 35.5 | 9.4 / 0.33 |
| 25 / 0.98 | 294 / 66.1 | 247 / 55.5 | 14.7 / 0.52 |
| 32 / 1.26 | 482 / 108.4 | 415 / 93.3 | 24.1 / 0.85 |
| 40 / 1.57 | 754 / 169.5 | 665 / 149.5 | 37.7 / 1.33 |
| 50 / 1.97 | 1178 / 264.8 | 1039 / 233.6 | 58.9 / 2.08 |
| 63 / 2.48 | 1870 / 420.4 | 1662 / 373.6 | 93.5 / 3.30 |
| 80 / 3.15 | 3016 / 678.0 | 2707 / 608.6 | 150.8 / 5.32 |

Las presiones estándar de trabajo para componentes neumáticos industriales oscilan entre 4 bar / 58 psi y 8 bar / 116 psi, con una presión nominal de diseño de 6 bar / 87 psi. La mayoría de las válvulas direccionales neumáticas se prueban a 6 bar con un caudal nominal declarado en condiciones estándar según ISO 6358.

## Notas de diseño
La interpretación de los símbolos ISO 1219 en un esquema neumático debe considerar que las válvulas se dibujan en su posición de reposo (normalmente la que adoptan sin energía de pilotaje). El número de cuadrados indica las posiciones, y las conexiones externas se dibujan alineadas con la posición de reposo. Los pilotajes se representan a la izquierda o derecha de los símbolos, distinguiendo entre pilotaje neumático (triángulo sobre trazo discontinuo) y pilotaje eléctrico (solenoide con línea inclinada y borne). La lectura de un esquema sigue el flujo de energía desde la unidad de mantenimiento (FRL) hacia los actuadores, lo que facilita el diagnóstico de fallos como fugas o insuficiencia de presión. Para circuitos secuenciales se emplea el método paso a paso con válvulas de memoria biestables, asegurando que cada movimiento se complete antes de iniciar el siguiente.

## Preguntas frecuentes (FAQ)
### ¿Qué diferencia hay entre los símbolos ISO 1219 y los símbolos CETOP?
Los símbolos CETOP son prácticamente idénticos a los ISO 1219, ya que el comité europeo CETOP adoptó las normas ISO como base. Las diferencias pueden encontrarse en representaciones obsoletas o en detalles de pilotajes de algunas normas nacionales antiguas.

### ¿Cómo se representa un cilindro de simple efecto con retorno por muelle?
Un rectángulo con un solo puerto (representado como un pequeño círculo o línea de conexión) y un muelle en zigzag dibujado en el lado opuesto al puerto indica el retorno por fuerza elástica.

### ¿Por qué algunas válvulas 5/3 llevan el centro a escape?
La posición central con escapes abiertos y presión bloqueada (centro flotante) se usa para permitir el movimiento libre del cilindro en parada, como en sistemas de posicionamiento manual, mientras que el centro cerrado bloquea el actuador en su lugar.

### ¿Qué simboliza un triángulo sólido en una válvula?
Un triángulo sólido adyacente al último cuadrado del símbolo indica un escape a la atmósfera sin conducción, típico en válvulas neumáticas tras realizar trabajo en el actuador.

### ¿Se pueden combinar símbolos ISO 1219 con símbolos eléctricos en un mismo esquema?
Sí, la norma ISO 1219 permite la interconexión con símbolos de control eléctrico según IEC 60617. Las bobinas solenoides se dibujan como rectángulos inclinados conectados al cuadro de la válvula, y los contactos eléctricos se rigen por su propia normativa.

### ¿Cómo se interpreta un símbolo de válvula con tres cuadrados?
Representa una válvula de tres posiciones; el cuadrado central muestra la posición de reposo (desactivada) y los dos cuadros laterales las posiciones de trabajo. Cada cuadro tiene sus conexiones internas de paso y escape correspondientes.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/iso-valve-standards-d_375.html
- **engineersedge.com**: https://www.engineersedge.com/hydraulic/symbols/hydraulic_iso_schematic_symbols.htm
- **efunda.com**: https://www.efunda.com/math/hyperbolic/display.cfm?name=arccoth
