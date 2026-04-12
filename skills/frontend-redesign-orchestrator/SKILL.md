---
name: frontend-redesign-orchestrator
description: Orquesta rediseños frontend del portafolio usando como referencia `JDC_Portfolio_Complete`. Usar cuando se busque mejorar jerarquia visual, design tokens, accesibilidad, responsive, motion o tema sin salir de la arquitectura Astro activa.
---

# Frontend Redesign Orchestrator

Usa esta skill cuando el trabajo principal sea rediseñar o refinar la experiencia visual.

## Referencia local
- `JDC_Portfolio_Complete/portafolio-web/`
- `JDC_Portfolio_Complete/ai-agent-skills/frontend/SKILL_FRONTEND.md`
- `JDC_Portfolio_Complete/ai-agent-skills/testing/SKILL_TESTING_PERFORMANCE.md`

## Aplicacion correcta
Traducir ideas del laboratorio JDC al sistema activo:
- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/theme.css`
- `src/styles/app.css`
- `src/scripts/main.ts`

## Patrones utiles
- design tokens semanticos
- escalas consistentes de espaciado y tipografia
- cards, badges y resaltados con hover sobrio
- `:focus-visible`, skip link y estados `aria-*`
- motion con `transform` y `opacity`
- responsive claro para tablet y mobile
- tema claro/oscuro consistente con `data-theme`

## Patrones a filtrar
- contenido profesional de ejemplo del prototipo JDC
- arquitectura de secciones con scrollspy si no aporta a la home actual por vistas
- modulos JS adicionales si el comportamiento cabe en `src/scripts/main.ts`

## Flujo
1. Definir si el cambio es visual, estructural o de interaccion.
2. Leer `references/jdc-patterns.md` para seleccionar patrones compatibles.
3. Adaptar esos patrones al stack Astro actual.
4. Mantener el diseño compacto y tecnico, sin inflar la interfaz.
5. Validar build cuando el entorno tenga dependencias.

## Cuando leer referencias
- Lee `references/jdc-patterns.md` para patrones ya filtrados del laboratorio.
- Lee `references/redesign-checklist.md` para cerrar cambios de frontend.
