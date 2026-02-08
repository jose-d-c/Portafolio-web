# Arquitectura (como esta armado)

## Tecnologia
Astro + TypeScript + CSS.

## Flujo general
- `src/pages/index.astro` arma la pagina y monta:
  - Portada
  - Barra de navegacion
  - Contenedor de vistas

## Vistas (solo una a la vez)
Las secciones usan clase `.vista` y la activa recibe `.activa`.
La logica esta en:
- `src/scripts/desplazamiento.ts`

## Tema claro/oscuro
- Variables en `src/estilos/tema.css`
- Script de preferencia en `src/scripts/tema.ts`

## Donde se editan los datos
- Perfil: `src/datos/perfil.ts`
- Sobre mi: `src/datos/sobreMi.ts`
- Habilidades: `src/datos/habilidades.ts`
- Proyectos: `src/datos/proyectos.ts` (vacio en v1)
