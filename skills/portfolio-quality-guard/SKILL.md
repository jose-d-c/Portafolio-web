---
name: portfolio-quality-guard
description: Protege la calidad tecnica del portafolio Astro. Usar cuando se necesite validar builds, revisar regresiones visuales probables, detectar drift entre codigo activo y documentacion, o aplicar cambios con foco en mantenibilidad, accesibilidad y rutas estaticas sanas.
---

# Portfolio Quality Guard

Usa esta skill para revisar o cerrar cambios con criterio de calidad.

## Flujo
1. Identificar el area afectada: home, programas temporales, parciales o documentacion.
2. Revisar si hay divergencia entre codigo activo y documentos en `docs/`.
3. Verificar rutas a `public/`, estados accesibles y consistencia de datos.
4. Ejecutar `npm run build`.
5. Si el cambio fue documental, dejar claro si la documentacion quedo alineada o sigue legacy.

## Riesgos recurrentes en este repo
- Documentacion basada en `src/datos`/`src/estilos` mientras la app actual usa `src/data`/`src/styles`
- Scripts legacy en espanol que ya no controlan la home
- Rutas declaradas a archivos en `public/` que pueden quedar rotas
- Contenido placeholder que degrada la percepcion del sitio
- Uso indiscriminado del laboratorio `JDC_Portfolio_Complete` sin adaptacion al flujo actual por vistas

## Criterios de cierre
- Build verde
- Sin rutas muertas evidentes
- Sin regresion obvia en responsive base
- Sin contradicciones nuevas entre codigo activo y documentacion cercana

## Cuando leer referencias
- Lee `references/review-checklist.md` para una revision rapida.
- Lee `references/known-risks.md` para los focos habituales del repositorio.
