# Mapa del proyecto

## Activo
- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/data/content.ts`
- `src/styles/theme.css`
- `src/styles/app.css`
- `src/scripts/main.ts`

## Legacy o desalineado con la home actual
- `src/datos/*`
- `src/estilos/*`
- `src/componentes/*`
- `src/scripts/desplazamiento.ts`
- `src/scripts/tema.ts`
- parte de `docs/*` describe esa version anterior

## Decision operativa
Si una instruccion contradice el codigo activo, gana el codigo activo. Solo editar la parte legacy cuando el cambio lo pida explicitamente o cuando se quiera alinear documentacion.
