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
- Los textos/datos van en `src/datos/` (no se escriben directo dentro del HTML).
- Los estilos se centralizan en `src/estilos/tema.css` para no repetir colores.
- Los componentes se separan por funcionalidad en `src/componentes/`.

## Estado actual (v1)
- Sobre mi: activo (en columnas)
- Habilidades: activo (3 columnas: Dominado / En proceso / Por aprender)
- Proyectos: vacio a proposito (ver `docs/03_componentes.md` y `src/datos/proyectos.ts`)
