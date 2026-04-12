---
name: academic-showcase-maintainer
description: Mantiene las secciones academicas del portafolio: programas temporales y parciales. Usar cuando se agreguen programas, se editen descripciones, se cambien slugs, o se validen las relaciones entre metadata en `src/` y archivos fuente en `public/`.
---

# Academic Showcase Maintainer

Usa esta skill para cambios en material academico publicado dentro del portafolio.

## Fuentes activas
- `src/programas-temporales/programas.ts`
- `src/parciales/parciales.ts`
- `src/pages/programas-temporales/[slug].astro`
- `src/pages/parciales/[slug].astro`
- `src/pages/parciales/[slug]/[punto].astro`
- `public/programas-temporales/codigos/*`
- `public/proyectos-temporales/imagenes/*`
- `public/parciales/*`

## Flujo
1. Editar metadata en `src/programas-temporales/programas.ts` o `src/parciales/parciales.ts`.
2. Verificar que cada entrada tenga archivo de codigo e imagen asociados en `public/`.
3. Mantener consistencia entre `slug`, `enlaceExterno`, `rutaCodigo*` y `rutaImagen*`.
4. Si agregas una vista especial como la comparativa del programa 23, encapsular la logica por condicion explicita.
5. Ejecutar `npm run build`.

## Reglas
- No cambiar slugs sin revisar todos los enlaces internos.
- Mantener titulos y descripciones alineados con el contenido real del archivo `.txt` y la imagen.
- Si el material es academico, conservar tono descriptivo y pedagogico.
- Si hay fecha dinamica en parciales, evaluar si el cambio requiere fecha fija o calculada.

## Cuando leer referencias
- Lee `references/academic-map.md` para relaciones de rutas.
- Lee `references/consistency-checks.md` para validar integridad de programas y parciales.
