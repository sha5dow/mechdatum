---
title: "Símbolos neumáticos completos"
sidebar:
  label: "Símbolos neumáticos completos"
description: "Ficha tecnica: Símbolos neumáticos completos"
keywords: ["complete pneumatic symbols reference chart", "symbols"]
category: "symbols"
topic: "hydraulic-pneumatic"
subcategory: "pneumatic-symbols-complete"
skill: "standards-guide"
launch_phase: 10
last_updated: "2026-07-25"
verified: true
---
La simbología neumática normalizada permite representar cualquier circuito de aire comprimido de forma inequívoca. La norma ISO 1219‑1 recoge más de 120 símbolos para sistemas de potencia fluida, de los cuales al menos 45 corresponden exclusivamente a componentes neumáticos. A continuación se presenta la tabla completa de los símbolos esenciales, su interpretación práctica y las reglas que todo profesional debe conocer para leer y dibujar planos neumáticos sin ambigüedad.

## Símbolos neumáticos según ISO 1219‑1

| Símbolo | Componente | Norma de referencia | Uso en planos |
| --- | --- | --- | --- |
| <pre> ╔══╗<br> ║ █ ╠═►<br> ╚═╤╝<br>   ∿</pre> | Cilindro de simple efecto, retorno por muelle | ISO 1219‑1 | Accionamiento de compuertas, posicionadores que deben regresar a la posición de reposo automáticamente. |
| <pre> ╔══╗<br> ║ █ ╠═►<br> ╚══╝<br> P   A</pre> | Cilindro de doble efecto | ISO 1219‑1 | Movimiento de pinzas, mesas elevadoras y cualquier aplicación que requiera fuerza en ambos sentidos. |
| <pre>  ┌───┐<br>〰〰┤ ╳ ├──A<br>  └─┬─┘<br>   T</pre> | Válvula distribuidora 3/2 vías, retorno por muelle, pilotada por presión | ISO 1219‑1 | Control de cilindros de simple efecto; conexión típica P (presión), A (trabajo), T (escape). |
| <pre>  ┌───┐<br>∿∿┤ ╳ ├──A<br>  │   ├──B<br>  └─┬─┘<br>   R   P</pre> | Válvula distribuidora 5/2 vías, retorno por muelle, pilotaje neumático | ISO 1219‑1 | Gobierno de cilindros de doble efecto; puertos P, A, B, R (escape común). |
| <pre>  ┌──┐<br>──┤ >├──<br>  └──┘</pre> | Válvula de estrangulación (control de caudal) | ISO 1219‑1 | Regulación de velocidad en cilindros, ajuste fino de flujo. |
| <pre>  ┌──┐<br>──┤◄ ├──<br>  └──┘</pre> | Válvula antirretorno | ISO 1219‑1 | Bloqueo del flujo en un sentido; se combina con la estrangulación para formar reguladoras de caudal unidireccional. |
| <pre>────┤▲◄──┤────</pre> | Válvula reguladora de caudal unidireccional | ISO 1219‑1 | Control de velocidad en un solo sentido de avance del cilindro, dejando libre el retorno. |
| <pre>──┬──<br>  ♨</pre> | Válvula limitadora de presión (seguridad) | ISO 1219‑1 | Protección contra sobrepresiones; descarga a la atmósfera cuando se supera el tarado. |
| <pre>──┤▭├──<br>  ∿</pre> | Regulador de presión con muelle | ISO 1219‑1 | Mantiene presión de trabajo constante aguas abajo en la línea de alimentación. |
| <pre>────┤∿├────</pre> | Filtro de aire comprimido | ISO 1219‑1 | Eliminación de partículas y condensado; primer elemento de la unidad FRL. |
| <pre>────┤▽├────</pre> | Lubricador | ISO 1219‑1 | Niebla de aceite para lubricar herramientas neumáticas; se coloca después del regulador. |
| <pre>────┤╱◯├────</pre> | Unidad de mantenimiento FRL (Filtro + Regulador + Lubricador) compacta | ISO 1219‑1 | Tratamiento estándar del aire comprimido antes de la entrada a la máquina. |
| <pre>  ┌───┐<br>──┤ ≈ ├──<br>  └───┘</pre> | Motor neumático | ISO 1219‑1 | Accionamiento rotativo en herramientas portátiles, mezcladores. |
| <pre>────┤▣├────</pre> | Compresor | ISO 1219‑1 | Generación de aire comprimido; símbolo suele acompañarse del caudal y presión nominal. |
| <pre>──┤▢├──</pre> | Depósito de aire comprimido (calderín) | ISO 1219‑1 | Almacenamiento intermedio; amortigua pulsaciones del compresor. |
| <pre>  A<br> ║<br> ╨B<br> C</pre> | Válvula selectora (OR) | ISO 1219‑1 | Conduce la señal de mayor presión de dos entradas hacia la salida. |
| <pre>  A<br> ╫<br> B<br> C</pre> | Válvula de simultaneidad (AND) | ISO 1219‑1 | Sólo hay salida C cuando A y B reciben presión simultáneamente. |
| <pre>──┤◥├──</pre> | Válvula de escape rápido | ISO 1219‑1 | Acelera el vaciado del cilindro, mejorando los tiempos de ciclo. |

## Normas complementarias

Tres normas internacionales rigen la representación de los circuitos neumáticos. La ISO 1219‑1 (primera edición 1991, revisada en 2012) define los símbolos gráficos básicos para bombas, motores, cilindros, válvulas y accesorios, mientras que la ISO 1219‑2 detalla la construcción de diagramas de circuitos e incluye reglas de nomenclatura. En el ámbito europeo todavía se emplea la DIN ISO 1219, que fue precursora de la ISO. Para los planos de instrumentación y tuberías (P&ID) se complementa con la norma ISA‑5.1, que unifica las letras de identificación de lazos de control, y con la ISO 14617‑6, aplicable en procesos industriales continuos. Todos los símbolos mostrados en esta guía respetan las formas y trazos establecidos por la ISO 1219‑1, garantizando interoperabilidad entre departamentos de diseño y mantenimiento.

## Interpretación en diagramas de circuito

Un diagrama neumático típico de una máquina automatizada contiene entre 15 y 40 símbolos dispuestos en capas funcionales. La lectura se realiza de abajo hacia arriba: la línea de alimentación de aire (6 bar a 10 bar / 87 psi a 145 psi) se sitúa en la parte inferior, las válvulas de gobierno en el centro y los actuadores en la zona superior. Cada válvula direccional se etiqueta con un número de vías y posiciones (por ejemplo 3/2, 5/2) que indica cuántos orificios de conexión tiene y cuántas posiciones de conmutación posee. El muelle se dibuja siempre al lado de la posición de reposo de la válvula. En los planos de P&ID los actuadores neumáticos se representan mediante un semicírculo con una línea de señal, combinando la simbología neumática pura con la identificación funcional del lazo (por ejemplo, “PIC” para un controlador indicador de presión). Comprender la secuencia lógica de pilotajes y escapes es clave para la depuración de fallos y la puesta en marcha.

## Buenas prácticas de dibujo

La norma ISO 1219‑1 recomienda una separación mínima de 10 mm / 0.39 in entre dos símbolos contiguos cuando se dibuja en formato A3 o superior, para garantizar legibilidad tras el escaneo. Se deben numerar todos los elementos con un identificador único siguiendo el esquema “tipo‑área‑número” (ej. VLV‑01‑A1) y reflejar esta numeración en una leyenda lateral. Las líneas de presión de trabajo se trazan continuas (0.5 mm / 0.02 in de grosor), las de pilotaje con trazo discontinuo y los escapes hacia la atmósfera con trazo corto quebrado. Es obligatorio indicar los valores de tarado de las válvulas de seguridad y reguladores en las inmediaciones del símbolo, por ejemplo “8.5 bar / 123 psi”. Para planos eléctricos mixtos se emplea la norma IEC 60617, que respeta la misma filosofía de capas pero con simbología eléctrica; la integración se realiza mediante tablas de referencias cruzadas que vinculan cada solenoide neumático con su bobina correspondiente.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre un símbolo neumático y uno eléctrico?

El símbolo neumático representa el flujo de aire y los elementos mecánicos del circuito (cilindros, válvulas), mientras que el eléctrico muestra el mando y la lógica de control (bobinas, relés, sensores). En un plano combinado, el neumático se dibuja con líneas continuas y el eléctrico con líneas de conexión más finas, pero ambos comparten una misma referencia de borneo.

### ¿Qué norma ISO rige los símbolos neumáticos?

La norma de referencia es la ISO 1219‑1, que reúne todos los símbolos gráficos básicos para sistemas de potencia fluida. Su última edición (2012) incluye más de 120 pictogramas armonizados con las normativas americanas y asiáticas.

### ¿Cómo se representa un cilindro de doble efecto con amortiguación?

El símbolo base del cilindro de doble efecto se complementa con dos pequeños rectángulos adosados a los extremos del pistón, indicando las cámaras de amortiguación regulable. Adicionalmente se añaden las líneas de pilotaje secundarias si la amortiguación es ajustable por control de flujo.

### ¿Es obligatorio seguir la norma ISO 1219‑1 en todos los planos?

En la industria europea es requisito contractual en la mayoría de proyectos llave en mano, y suele exigirse en pliegos de compra de maquinaria. En América se complementa con ANSI/ISA‑5.1, pero los símbolos neumáticos básicos coinciden en un 95%.

### ¿Cómo se lee una válvula 5/2 en un esquema?

Se identifica el cuadrado que representa la posición de reposo (junto al muelle) y se sigue el trazo de las flechas internas para saber qué puertos están conectados: en reposo suelen unir P con A y B con escape; al pilotar, las conexiones internas basculan uniendo P con B y A con escape.

### ¿Los símbolos neumáticos son iguales en todo el mundo?

Los símbolos básicos definidos por ISO 1219‑1 tienen aceptación global, aunque algunas compañías japonesas emplean ligeras variantes heredadas de la antigua JIS B 0125. La tendencia en los nuevos proyectos es la unificación completa bajo ISO.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/p-id-piping-instrumentation-diagram-d_466.html
