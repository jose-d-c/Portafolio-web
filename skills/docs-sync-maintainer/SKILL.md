---
name: docs-sync-maintainer
description: Mantiene sincronizada la documentacion local con la arquitectura activa del repositorio. Usar cuando haya que corregir drift entre `docs/` y el codigo real, o cuando un cambio de frontend, datos o rutas de contenido deba quedar reflejado en la documentacion operativa del proyecto.
---

# Docs Sync Maintainer

Usa esta skill cuando el cambio incluya codigo y documentacion.

## Objetivo
Evitar que `docs/` vuelva a describir la arquitectura legacy en vez de la app activa.

## Archivos de enfoque
- `docs/00_vision.md`
- `docs/01_arquitectura.md`
- `docs/02_estilos_tema.md`
- `docs/03_componentes.md`
- `AGENTS.md`

## Flujo
1. Confirmar la arquitectura activa en `src/pages/index.astro`, `src/layouts/BaseLayout.astro`, `src/data/content.ts`, `src/styles/*` y `src/scripts/main.ts`.
2. Detectar afirmaciones viejas en `docs/`.
3. Reescribir las secciones minimas necesarias para que la documentacion vuelva a ser operativa.
4. Evitar inventariar archivos legacy como si fueran la base actual del proyecto.

## Reglas
- Documentar el estado vigente, no la intencion historica.
- Ser concreto: archivo activo, responsabilidad y ruta.
- Si algo sigue legacy pero existe, marcarlo como legacy en vez de ocultarlo.
