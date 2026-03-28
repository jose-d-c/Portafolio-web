# Auditoría de programas temporales (salida de consola y comentarios explicativos)

Fecha de ajuste: 2026-03-28

## Objetivo del ajuste
Corregir y dejar documentado, por **cada programa temporal (01–27)**:
1. El formato de salida de consola que se debe observar.
2. El nivel de detalle de comentarios explicativos esperado para exposición académica.

> Nota de precisión: en programas con métricas de tiempo/memoria, los valores numéricos pueden variar entre ejecuciones y equipos. En esos casos, lo "exacto" es el **formato de impresión y el orden de los bloques**, no el valor puntual del cronómetro.

## Criterio unificado para todos los programas
- Mostrar siempre: **entrada inicial**, **proceso** (pasadas/escenarios) y **resultado final**.
- Mantener comentarios con estructura pedagógica:
  - Qué hace cada bloque.
  - Por qué se hace.
  - Qué se espera como resultado.
- Etiquetas de salida consistentes: `Arreglo original`, `Pasada`, `Arreglo ordenado`, `Escenario`, `Métricas`.

## Matriz corregida por programa

### Programa 01 — Burbuja simple C++ (String)
- **Salida exacta (formato):** `Arreglo original` → `Pasada 1..n` → `Arreglo ordenado alfabeticamente`.
- **Comentario esperado:** comparación lexicográfica, intercambio y corte temprano.

### Programa 02 — Burbuja simple Python (int)
- **Salida exacta (formato):** `Arreglo original` → `Pasada 1..n` → `Arreglo ordenado`.
- **Comentario esperado:** explicación de bucle externo/interno y optimización por bandera.

### Programa 03 — Burbuja simple Java (int)
- **Salida exacta (formato):** impresión del arreglo inicial, trazas por pasada y salida final ascendente.
- **Comentario esperado:** razón de cada comparación e intercambio.

### Programa 04 — Burbuja simple Java (String)
- **Salida exacta (formato):** estado inicial de palabras, pasadas y salida final alfabética.
- **Comentario esperado:** uso de `compareTo` para orden lexicográfico.

### Programa 05 — Burbuja mejorado Java (int)
- **Salida exacta (formato):** arreglo inicial, pasadas con posible salida anticipada, arreglo final.
- **Comentario esperado:** justificación de la mejora por detección de arreglo ya ordenado.

### Programa 06 — Burbuja mejorado Java (String)
- **Salida exacta (formato):** igual estructura del 05 pero para cadenas.
- **Comentario esperado:** comparación de cadenas y efecto de no-intercambio en una pasada.

### Programa 07 — Quick Sort Java (int)
- **Salida exacta (formato):** arreglo inicial y arreglo final ordenado; trazas opcionales de partición.
- **Comentario esperado:** pivote, particionado e invocaciones recursivas.

### Programa 08 — Quick Sort Java (String)
- **Salida exacta (formato):** impresión antes/después de ordenar.
- **Comentario esperado:** partición con `compareTo` y subproblemas recursivos.

### Programa 09 — Shell Sort Java (int)
- **Salida exacta (formato):** arreglo original, bloques por `gap`, arreglo final.
- **Comentario esperado:** reducción progresiva de `gap` y desplazamientos.

### Programa 10 — Shell Sort Java (String)
- **Salida exacta (formato):** arreglo inicial, recorrido por gaps, salida alfabética.
- **Comentario esperado:** inserciones separadas por salto usando comparación lexicográfica.

### Programa 11 — Selección Java (int)
- **Salida exacta (formato):** estado inicial, iteraciones con mínimo encontrado, arreglo ordenado.
- **Comentario esperado:** selección del menor por cada posición destino.

### Programa 12 — Selección Java (String)
- **Salida exacta (formato):** palabras iniciales, iteraciones de selección, orden final.
- **Comentario esperado:** criterio lexicográfico para mínimo.

### Programa 13 — Tiempos de ejecución (todos los algoritmos)
- **Salida exacta (formato):** menú/escenario → tabla o bloque por algoritmo con tiempo.
- **Comentario esperado:** interpretación de escalamiento en datos bajos/medios/altos.

### Programa 14 — Uso de memoria (todos los algoritmos)
- **Salida exacta (formato):** escenario → consumo estimado por algoritmo.
- **Comentario esperado:** diferencia entre memoria auxiliar y variables temporales.

### Programa 15 — Inserción Java (int)
- **Salida exacta (formato):** arreglo inicial, pasos de inserción y salida final.
- **Comentario esperado:** desplazamiento a derecha e inserción de clave.

### Programa 16 — Inserción Java (String)
- **Salida exacta (formato):** palabras iniciales, pasos de inserción, salida alfabética.
- **Comentario esperado:** comparación de cadenas en la zona ordenada.

### Programa 17 — Métricas en 3 escenarios
- **Salida exacta (formato):** por escenario y algoritmo: iteraciones, comparaciones, movimientos/intercambios.
- **Comentario esperado:** cómo leer y comparar carga de trabajo entre algoritmos.

### Programa 18 — Shaker Sort int con métricas
- **Salida exacta (formato):** escenario → tamaño → métricas (tiempo, memoria, comparaciones, intercambios).
- **Comentario esperado:** barrido bidireccional y comportamiento por tipo de entrada.

### Programa 19 — Shaker Sort String con métricas
- **Salida exacta (formato):** mismo formato del 18 aplicado a cadenas.
- **Comentario esperado:** costo de comparación lexicográfica y estabilidad del recorrido.

### Programa 20 — Radix Sort Java comentado
- **Salida exacta (formato):** arreglo inicial, pasadas por dígito, arreglo final.
- **Comentario esperado:** máximo, exponentes y Counting Sort estable por dígito.

### Programa 21 — Merge Sort int con métricas
- **Salida exacta (formato):** encabezado por escenario/tamaño, resumen de métricas y muestra de datos.
- **Comentario esperado:** división, fusión y costo O(n log n).

### Programa 22 — Merge Sort string con métricas
- **Salida exacta (formato):** igual al 21 pero con nombres/cadenas.
- **Comentario esperado:** criterio de comparación en fusión y trazabilidad de movimientos.

### Programa 23 — Comparativa interactiva Merge vs Quick
- **Salida exacta (formato):** tabla comparativa por longitud/tipo/escenario con ganador por métrica.
- **Comentario esperado:** fortalezas/debilidades y recomendación contextual.

### Programa 24 — Heap Sort int con métricas
- **Salida exacta (formato):** escenario + tamaño + métricas completas.
- **Comentario esperado:** construcción de heap, extracción máxima y reajuste.

### Programa 25 — Heap Sort string con métricas
- **Salida exacta (formato):** igual al 24 aplicado a cadenas.
- **Comentario esperado:** comparación lexicográfica en heapify.

### Programa 26 — Bucket Sort int con métricas
- **Salida exacta (formato):** distribución en buckets, orden interno y concatenación final, con métricas.
- **Comentario esperado:** impacto de la distribución y rango de datos.

### Programa 27 — Bucket Sort string con métricas
- **Salida exacta (formato):** agrupación por criterio, orden interno y mezcla final, con métricas.
- **Comentario esperado:** criterio de bucket para texto y complejidad práctica.

## Estado final
- Cobertura de documentación: **01–27 completa**.
- Criterio de salida exacta: **normalizado por formato**.
- Comentarios explicativos: **lineamiento detallado definido para cada programa**.
