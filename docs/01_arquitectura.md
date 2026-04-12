# Arquitectura (como esta armado)

## Tecnologia
Astro + TypeScript + CSS.

## Flujo general
- `src/pages/index.astro` renderiza la home activa.
- `src/layouts/BaseLayout.astro` monta tipografias, tema inicial y script cliente.
- `src/data/content.ts` centraliza perfil, sobre mi, proyectos, habilidades y listados derivados.

## Vistas (solo una a la vez)
Las secciones usan clase `.view` y la activa recibe `.active`.
La logica esta en:
- `src/scripts/main.ts`

## Tema claro/oscuro
- Variables en `src/styles/theme.css`
- Preferencia e interaccion en `src/scripts/main.ts`

## Donde se editan los datos
- Home y contenido profesional: `src/data/content.ts`
- Programas temporales: `src/programas-temporales/programas.ts`
- Parciales: `src/parciales/parciales.ts`

## Rutas activas
- Home: `src/pages/index.astro`
- Programas temporales: `src/pages/programas-temporales/[slug].astro`
- Parciales: `src/pages/parciales/[slug].astro`
- Puntos de parcial: `src/pages/parciales/[slug]/[punto].astro`

## Nota sobre codigo legacy
Existen rutas antiguas en `src/datos`, `src/estilos`, `src/componentes` y scripts separados para desplazamiento/tema. No son la fuente principal de verdad para la home actual.
