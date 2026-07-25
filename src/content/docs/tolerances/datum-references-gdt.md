---
title: "Referencias datum en planos GDT"
sidebar:
  label: "Referencias datum en planos GDT"
description: "Ficha tecnica: Referencias datum en planos GDT"
keywords: ["GDT datum reference frame primary secondary", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "datum-references"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-25"
verified: true
---
Una referencia datum en planos GDT establece un sistema de coordenadas tridimensional que restringe hasta 6 grados de libertad de la pieza, definiendo el origen a partir del cual se controlan tolerancias geométricas como posición, orientación o perfil. La correcta selección del marco de referencia datum (DRF) es esencial para garantizar la funcionalidad, el montaje y la repetibilidad en la fabricación e inspección.

## Principios fundamentales del datum en GDT
Un datum es una característica geométrica real de una pieza (superficie, eje, plano medio, punto) que actúa como referencia para definir la geometría nominal y medir desviaciones. El marco de referencia datum típico se compone de tres planos mutuamente perpendiculares, identificados como datum primario (A), secundario (B) y terciario (C), capaces de eliminar los 6 grados de libertad.

La selección funcional de los datums debe reflejar cómo la pieza se monta o contacta con otras en el ensamblaje. Los datums de fabricación pueden diferir de los funcionales por razones de coste y repetibilidad, requiriendo un análisis de tolerancias para la conversión.

## Símbolos normalizados para datums
Los datums se indican mediante un triángulo equilátero relleno (ASME) o sin rellenar (ISO) apoyado sobre la superficie de referencia o sobre una línea de extensión, acompañado de una letra mayúscula dentro de un marco cuadrado. Cuando la referencia no es una superficie completa, se emplean datum targets (blancos de datum) con un punto, línea o área.

| Símbolo | Significado | Uso típico |
| --- | --- | --- |
| ▸ A | Datum primario A | Superficie plana que restringe 3 grados de libertad |
| ▸ B | Datum secundario B | Superficie perpendicular a A que restringe 2 grados adicionales |
| ▸ C | Datum terciario C | Superficie perpendicular a A y B que restringe el último grado |
| ◇ A1 | Blanco de datum (punto) | Referencia sobre zonas inaccesibles o superficies brutas |
| ⊂ ⊃ | Marco de zona de datum (área) | Especificación de área de contacto para inspección |

## Marco de referencia datum (DRF): primario, secundario y terciario
El DRF ordena las referencias datum A, B, C en la secuencia que aparece dentro del feature control frame, separadas por guiones. El datum primario siempre aparece en primer lugar y elimina la mayor cantidad de grados de libertad (mínimo 3), mientras el terciario elimina el menor número (generalmente 1). La secuencia influye directamente en la orientación de la pieza durante la medición.

| Tipo de datum | Grados de libertad restringidos | Detalle |
| --- | --- | --- |
| Plano primario A | 3 (1 traslación, 2 rotaciones) | Traslación normal al plano, rotación alrededor de los dos ejes contenidos en el plano |
| Plano secundario B | 2 (1 traslación, 1 rotación) | Traslación a lo largo del eje más largo, rotación alrededor del eje perpendicular al plano A |
| Plano terciario C | 1 (1 traslación) | Traslación a lo largo del eje restante |
| Cilindro primario (eje) | 4 (2 traslaciones, 2 rotaciones) | Traslaciones perpendiculares al eje, rotaciones alrededor de ejes perpendiculares al eje |
| Cilindro secundario | 2 (1 traslación, 1 rotación) | Traslación axial, rotación alrededor del eje del cilindro |

## Requisitos de material (MMR y LMR) en las referencias datum
Los modificadores de material ajustan la zona de tolerancia en función del estado real de la característica datum, optimizando la capacidad de ensamblaje sin sacrificar funcionalidad. El símbolo Ⓜ (M dentro de un círculo) indica requisito de máximo material (MMR), mientras Ⓛ (L dentro de un círculo) indica requisito de mínimo material (LMR).

Cuando se aplica MMR a un datum, la referencia está formada por la condición virtual del elemento datum, permitiendo un desplazamiento adicional (datum shift) si el elemento datum se aleja de su máximo material. Esto se traduce en un incremento de la tolerancia geométrica de la característica controlada sin incumplir la condición de ensamblaje.

- **MMR sobre datum**: el datum se simula en su máxima condición de material virtual (MMVC). Si el elemento datum tiene más holgura, la pieza puede trasladarse hasta el límite virtual, ampliando la tolerancia de ubicación de la característica.
- **LMR sobre datum**: se utiliza para proteger espesores mínimos de pared. El datum se establece en la condición de mínimo material, garantizando que no se reduzcan secciones críticas.

## Ejemplos de aplicación industrial
En el cubo de una rueda de automóvil, el patrón de agujeros para los pernos define un círculo de pernos que actúa como datum primario. A partir de él se controla la concentricidad del aro y la llanta, asegurando que el conjunto gire sin vibraciones. El datum primario restringe 4 grados de libertad; una superficie plana de apoyo actúa como secundario (1 traslación) y un agujero guía como terciario (1 rotación final).

Otro caso típico es una placa base con dos agujeros para pasadores. La cara inferior se designa datum A (primario), que apoya la placa sobre el plano horizontal. Un pasador en un agujero se establece como datum B (secundario) restringiendo dos traslaciones, mientras el segundo agujero alineado se convierte en datum C (terciario) restringiendo la rotación restante. El conjunto asegura posición y orientación únicas para el mecanizado de tolerancias de posición con la secuencia A|B|C.

## Comparativa entre sistemas: ISO (5459) vs ASME (Y14.5)
Aunque ambos sistemas definen marcos de referencia datum con una filosofía similar, existen diferencias en la interpretación y el detalle de la notación.

| Aspecto | ISO 5459 | ASME Y14.5 |
| --- | --- | --- |
| Símbolo del datum | Triángulo sin rellenar y letra | Triángulo relleno y letra |
| Ordenación del DRF | La secuencia se indica mediante un guión dentro del feature control frame (ej. A-B-C) | La secuencia se escribe separada por comas o barras verticales (ej. A, B, C o A|B|C) |
| Datum targets | Exigen especificar la forma del blanco (punto, línea, área) con acotación completa | Misma indicación, pero admite un símbolo genérico cuando la forma no es crítica |
| Modificadores de material | MMR (Ⓜ), LMR (Ⓛ), ambos sobre el datum si aplica | Únicamente MMC (Ⓜ) sobre el datum; LMC se limita a la característica controlada, raramente sobre el datum |
| Interpretación de datum virtual | La condición virtual se recalcula con el mismo principio, pero la simulación de la pieza en inspección puede diferir según la norma de verificación asociada | Define explícitamente el datum shift según el tamaño real del elemento datum, sin ambigüedad |
| Grados de libertad | La secuencia A-B-C siempre restringe 6 grados, pero la norma permite declarar explícitamente grados de libertad no utilizados | Similar, pero la secuencia por defecto asume restricción completa a menos que se indique "6 grados parciales" con modificadores |

## Preguntas frecuentes (FAQ)
### ¿Qué diferencia un datum de una característica datum?
Un datum es el plano, eje o punto de referencia ideal establecido a partir de la característica datum, que es la superficie o elemento físico real de la pieza. La característica datum debe ser accesible, funcional y adecuada para apoyar la medición.

### ¿Cómo se selecciona el datum primario para una pieza?
Se elige la superficie de mayor área de contacto en el montaje y que restringe al menos una traslación y dos rotaciones. Generalmente es la cara que apoya primero en el ensamblaje.

### ¿Por qué la secuencia de datums en el feature control frame es crítica?
La secuencia define el orden de restricción de grados de libertad. Una pieza con DRF A|B|C se orienta de forma distinta a B|A|C; cambiar el orden modifica la medición y puede validar o rechazar piezas incorrectamente.

### ¿Cuándo se aplica el requisito de máximo material (MMR) en la referencia datum?
Cuando se desea aprovechar la holgura del elemento datum (por ejemplo, un agujero) para permitir un desplazamiento adicional que incremente la tolerancia de posición de una característica, siempre que no se comprometa el ensamblaje.

### ¿Es igual un datum en ASME Y14.5 que en ISO 5459?
En esencia el concepto es equivalente, pero difieren en los símbolos gráficos, la notación del DRF y la aplicación de modificadores de material sobre el datum. Consulte la tabla comparativa de la guía para detalles.

### ¿Cómo se simulan los datums durante la medición con máquina de coordenadas?
Se utilizan palpadores o superficies de apoyo físicas (mármol de verificación, cilindros expansibles) que representan la condición virtual del datum. El software alinea el sistema de coordenadas de la máquina con los planos o ejes definidos por esos palpadores, estableciendo el origen de medida.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/beams-fixed-both-ends-support-loads-deflection-d_809.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
