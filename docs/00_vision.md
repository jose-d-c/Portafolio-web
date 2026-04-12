# Vision del proyecto (Portafolio web)

## Para que existe
Este repositorio es mi portafolio personal. No es una app grande ni un producto comercial.
La meta es que sea:
- claro para el visitante
- facil de mantener para mi (en el futuro)
- escalable sin duplicar codigo

## Idea principal
- Una sola pagina
- Secciones por vistas: "Sobre mi", "Proyectos", "Habilidades"
- Se cambia de vista con una barra de navegacion
- Modo claro / modo oscuro (sin perder el estilo cyberpunk limpio)

## Decisiones importantes
- Los textos y listados activos viven en `src/data/content.ts`.
- Los estilos activos se centralizan en `src/styles/theme.css` y `src/styles/app.css`.
- La home actual se resuelve desde `src/pages/index.astro` con `BaseLayout.astro`.

## Estado actual (v1)
- Sobre mi: activo (en columnas)
- Habilidades: activo (3 columnas: Dominado / En proceso / Por aprender)
- Proyectos: activo con tarjetas y accesos a material academico desde `src/data/content.ts`
- Programas temporales: activos y enlazados desde `src/programas-temporales/programas.ts`
- Parciales: activos y enlazados desde `src/parciales/parciales.ts`
