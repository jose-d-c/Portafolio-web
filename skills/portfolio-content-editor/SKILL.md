---
name: portfolio-content-editor
description: Edita contenido profesional del portafolio sin romper la arquitectura. Usar cuando se actualicen perfil, experiencia, habilidades, proyectos, textos de portada, enlaces de contacto o assets publicos asociados al contenido personal.
---

# Portfolio Content Editor

Usa esta skill cuando el trabajo principal sea actualizar informacion del portafolio.

## Fuentes principales
- `src/data/content.ts` para perfil, sobre mi, proyectos, habilidades y listados derivados
- `public/imagenes/yo.jpg` para la foto principal
- `public/icons/*` para iconografia reutilizada
- `public/cv.pdf` si el cambio incluye hoja de vida descargable

## Flujo
1. Ubicar el bloque de datos correcto en `src/data/content.ts`.
2. Actualizar primero la fuente de datos y solo despues el markup si hace falta un campo nuevo.
3. Si agregas links o assets, confirmar que existan bajo `public/`.
4. Mantener textos claros, profesionales y listos para produccion; eliminar placeholders cuando el pedido sea de contenido real.
5. Ejecutar `npm run build`.

## Reglas
- No duplicar texto en `index.astro` si ya puede vivir en `src/data/content.ts`.
- Mantener consistencia de nombre, rol, enfoque, experiencia, certificaciones y etiquetas.
- Si agregas una habilidad o proyecto, conserva la semantica actual de estados y badges.

## Cuando leer referencias
- Lee `references/content-schema.md` si vas a agregar o cambiar estructura de datos.
- Lee `references/content-quality.md` si necesitas criterios de tono y completitud.
