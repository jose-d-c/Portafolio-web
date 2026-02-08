# Componentes (que hace cada uno)

## Activos (se usan en la pagina)
- `portada/Portada.astro`: foto circular + nombre + enfoque + boton CV
- `navegacion/BarraFlotante.astro`: barra superior para cambiar vistas
- `ui/Seccion.astro`: contenedor comun para cada vista
- `sobre_mi/ColumnasSobreMi.astro`: estudios/experiencia/cursos en columnas
- `habilidades/GrillaHabilidades.astro`: 3 columnas (Dominado/En proceso/Por aprender)
- `proyectos/GrillaProyectos.astro`: grilla/placeholder (vacio en v1)

## Proyectos (decisión v1)
En v1 la seccion "Proyectos" se deja vacia a proposito.
- No hay contenido real aun.
- El placeholder recuerda donde se carga la data:
  `src/datos/proyectos.ts`

Cuando se agreguen proyectos:
1) llenar `src/datos/proyectos.ts`
2) la grilla se renderiza sola
3) opcional: filtros por etiquetas

## Reservados (no se usan en v1)
Estos archivos existen para futura limpieza/estandarizacion visual.
Si siguen sin usarse en v2, se eliminan:
- `navegacion/BarraSuperior.astro`
- `portada/MarcoFoto.astro`
- `ui/Boton.astro`
- `ui/Icono.astro`
