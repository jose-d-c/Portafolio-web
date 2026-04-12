# Componentes (que hace cada uno)

## Activos (se usan en la pagina)
- `src/pages/index.astro`: home completa con portada, sidebar y vistas internas
- `src/layouts/BaseLayout.astro`: layout base y bootstrap del cliente
- `src/scripts/main.ts`: cambio de vistas, tema e interacciones de la home
- `src/data/content.ts`: contenido profesional y listados renderizados

## Secciones activas
- `Sobre mi`: perfil laboral, estudios, experiencia y certificaciones
- `Proyectos`: proyectos normales, programas temporales y parciales
- `Habilidades`: columnas por nivel de progreso

## Material academico
- Programas temporales: metadata en `src/programas-temporales/programas.ts`
- Parciales: metadata en `src/parciales/parciales.ts`
- Ambos renderizan sus links desde la home y sus detalles desde rutas dinamicas en `src/pages`

## Reservados o legacy
Estos archivos no son la base de la home actual y conviene tratarlos como legacy hasta nueva limpieza:
- `navegacion/BarraSuperior.astro`
- `portada/MarcoFoto.astro`
- `ui/Boton.astro`
- `ui/Icono.astro`
