# Auditoría de comentarios explicativos vs lógica del código (Programas temporales 01–27)

Fecha de auditoría: 2026-03-28

## Alcance
Se auditó **cada archivo fuente** en `public/programas-temporales/codigos/programa-01.txt` a `programa-27.txt` para validar:
1. Si los comentarios explicativos describen correctamente la lógica implementada.
2. Si el encabezado/título del programa coincide con su número real.
3. Si la narrativa pedagógica (entradas, proceso, salidas/métricas) es coherente con el código.

## Resultado global
- Programas revisados: **27/27**.
- Programas con comentarios alineados a la lógica: **26/27**.
- Programas con ajuste aplicado: **1/27** (`programa-14`).

## Hallazgo corregido en código
1. **Encabezado inconsistente en programa 14**
   - Hallazgo: el archivo `programa-14.txt` tenía el rótulo `PROGRAMA 13` en su cabecera.
   - Corrección aplicada: se cambió a `PROGRAMA 14` para que el comentario coincida con la lógica y el identificador del archivo.

## Auditoría detallada por programa

### Bloque 01–04 (Burbuja básico)
- **Programa 01 (C++ String):** comentarios alineados con bucles, comparación lexicográfica e intercambio manual.
- **Programa 02 (Python int):** comentarios alineados con bandera de corte temprano y pasadas de burbuja.
- **Programa 03 (Java int):** comentarios alineados con estructura de pasadas, comparaciones y condición de salida.
- **Programa 04 (Java String):** comentarios alineados con `compareTo` y ordenamiento alfabético.

### Bloque 05–08 (Burbuja mejorado y QuickSort)
- **Programa 05 (Burbuja mejorado int):** comentarios coherentes con optimización por `huboIntercambio`.
- **Programa 06 (Burbuja mejorado String):** comentarios coherentes con corte temprano y comparación de cadenas.
- **Programa 07 (QuickSort int):** comentarios coherentes con pivote final, partición y recursividad.
- **Programa 08 (QuickSort String):** comentarios coherentes con partición lexicográfica y subarreglos.

### Bloque 09–12 (Shell y Selección)
- **Programa 09 (Shell int):** comentarios correctamente explican `gap` decreciente e inserción por saltos.
- **Programa 10 (Shell String):** comentarios correctamente explican `compareTo` + `gap`.
- **Programa 11 (Selección int):** comentarios coherentes con búsqueda de mínimo por iteración.
- **Programa 12 (Selección String):** comentarios coherentes con selección mínima lexicográfica.

### Bloque 13–16 (Comparativas e Inserción)
- **Programa 13 (tiempos):** comentarios alineados con los 9 escenarios y medición de tiempo.
- **Programa 14 (memoria):** comentarios alineados con lógica de medición de memoria; **cabecera corregida** para coincidir con el número del programa.
- **Programa 15 (Inserción int):** comentarios alineados con clave, desplazamiento e inserción.
- **Programa 16 (Inserción String):** comentarios alineados con inserción alfabética usando `compareTo`.

### Bloque 17–20 (Métricas extendidas y Radix)
- **Programa 17 (métricas globales):** comentarios coherentes con iteraciones, comparaciones, intercambios, tiempo y memoria.
- **Programa 18 (Shaker int):** comentarios coherentes con barrido bidireccional y métricas por escenario.
- **Programa 19 (Shaker String):** comentarios coherentes con comparación `compareToIgnoreCase` y doble barrido.
- **Programa 20 (Radix int):** comentarios coherentes con ordenamiento por dígitos y escenarios de prueba.

### Bloque 21–23 (Merge y comparativa UI)
- **Programa 21 (Merge int):** comentarios extensos y consistentes con división/fusión y métricas.
- **Programa 22 (Merge String):** comentarios extensos y consistentes con mezcla alfabética y métricas.
- **Programa 23 (comparativa interactiva):** archivo descriptivo (sin algoritmo ejecutable); comentarios coherentes con la lógica de la vista comparativa.

### Bloque 24–27 (Heap/Bucket con métricas)
- **Programa 24 (Heap int):** comentarios coherentes con heapify, extracción y métricas.
- **Programa 25 (Heap String):** comentarios coherentes con heapify lexicográfico y métricas.
- **Programa 26 (Bucket int):** comentarios coherentes con distribución en cubetas y consolidación final.
- **Programa 27 (Bucket String):** comentarios coherentes con agrupación de cadenas por cubetas y métricas.

## Criterio de conformidad usado en esta auditoría
Un programa se marca "alineado" cuando cumple simultáneamente:
1. El comentario describe la operación que realmente ejecuta el bloque de código.
2. Las estructuras mencionadas (bucle, pivote, `gap`, mezcla, heapify, cubetas) existen y se usan en la implementación.
3. No hay contradicción entre título/cabecera y número real del programa.

## Estado final
- Auditoría completa de comentarios explicativos: **cumplida en 27/27 archivos**.
- Correcciones aplicadas en código fuente: **1 ajuste puntual de cabecera (programa-14)**.
- Recomendación: mantener este formato de auditoría cada vez que se agregue un nuevo programa temporal.
