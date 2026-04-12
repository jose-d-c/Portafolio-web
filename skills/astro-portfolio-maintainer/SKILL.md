---
name: astro-portfolio-maintainer
description: Mantiene y extiende la arquitectura activa del portafolio Astro de este repositorio. Usar cuando se edite la landing principal, la navegacion por vistas, el layout base, el tema visual, o cuando haya que decidir entre rutas activas y codigo/documentacion legacy.
---

# Astro Portfolio Maintainer

Usa esta skill para cambios estructurales en la app principal.

## Alcance real
- Pagina principal: `src/pages/index.astro`
- Layout activo: `src/layouts/BaseLayout.astro`
- Datos renderizados en home: `src/data/content.ts`
- CSS activo: `src/styles/theme.css`, `src/styles/app.css`
- Comportamiento cliente: `src/scripts/main.ts`

## Flujo
1. Confirmar si el cambio pertenece a la arquitectura activa o a material legacy.
2. Si es UI principal, editar primero `src/pages/index.astro` y luego ajustar `src/data/content.ts`, `src/styles/*` o `src/scripts/main.ts` segun corresponda.
3. Mantener el patron actual de una sola pagina con vistas `.view` y botones `.nav-btn[data-target]`.
4. Si cambias tema o navegacion, valida estados `active`, `aria-current` y `aria-hidden`.
5. Ejecuta `npm run build` al final.

## Reglas
- No usar `src/datos`, `src/estilos` ni `src/componentes` como fuente principal sin verificar si el cambio es historico.
- No introducir frameworks nuevos ni CSS-in-JS.
- Mantener el estilo actual: Astro + TypeScript liviano + CSS plano.
- Preferir cambios en la capa de datos antes que hardcodear texto en el markup.
- Si el cambio busca rediseño visual, usar `JDC_Portfolio_Complete/portafolio-web/` como referencia de patrones, no como plantilla literal.

## Cuando leer referencias
- Lee `references/project-map.md` si necesitas ubicar archivos activos vs legacy.
- Lee `references/ui-checklist.md` si el cambio toca responsive, accesibilidad o tema.
