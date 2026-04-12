# AGENTS

## Alcance y superficies vivas
- Solo hay tres rutas productivas: landing `src/pages/index.astro`, programas temporales `src/pages/programas-temporales/[slug].astro` y parciales académicos `src/pages/parciales/[slug].astro` + `/[punto].astro`.
- Carpetas como `src/componentes`, `src/datos` o `src/estilos` son legado; léelas solo si confirmas que siguen enlazadas.

## Arquitectura y fuentes de verdad
- `src/layouts/BaseLayout.astro` define tipografías, `data-theme`, CSS global y monta `src/scripts/main.ts`; cualquier cambio transversal pasa aquí.
- La home arma vistas `.view` controladas por `.nav-btn[data-target]` y consume **todo** el texto desde `src/data/content.ts`; evita duplicar copy en el markup.
- `src/scripts/main.ts` maneja foco, estados `active`/`aria-*`, etiquetas `.details-state` y el tema (sincroniza `localStorage`); no rompas estos selectores.
- Datos estructurados viven en `src/programas-temporales/programas.ts` y `src/parciales/parciales.ts`; cada entrada apunta a archivos bajo `public/` que se leen en build via `readFile`, así que cualquier ruta rota quiebra `astro build`.

## Assets y validación
- `npm run check:content` (alias `check:workspace`) ejecuta `tools/validate-content-paths.mjs`, que exige `public/imagenes/yo.jpg`, `public/cv.pdf`, `public/programas-temporales/uis-logo.svg`, los 14 iconos en `public/icons/`, los 30 códigos/SVGs de programas y los 7 códigos/SVGs del `parcial-01`.
- Si agregas nuevos programas, parciales o iconos, crea los archivos en `public/` **y** amplía el validador para que CI no marque falsos positivos.
- Mantén alineados `slug`, `enlaceExterno`, `rutaCodigo*` y los archivos físicos; mover o renombrar assets sin actualizar data y validador deja la build rota.
- `JDC_Portfolio_Complete/` es solo laboratorio visual; no lo uses como fuente de verdad.

## Comandos y entorno
- Node 20+ (ver `.nvmrc`). `npm run dev` levanta Astro Dev.
- Usa `npm run check:content` tras tocar `public/` o los archivos de datos.
- `npm run build` = `npm test` = `astro build`; ejecútalo después de cambios estructurales para detectar fallos de `readFile`/ruta.

- `getStaticPaths` depende del orden en `ordenProgramasTemporales`; respeta el formato `programa-XX` (01–30) para evitar huecos.
- Cada programa necesita: entrada en data, `.txt` en `public/programas-temporales/codigos/` y `.svg` en `public/proyectos-temporales/imagenes/`. El `programa-23` activa una vista comparativa especial, así que no elimines su wiring.
- Cada parcial se define en `src/parciales/parciales.ts`; cada `punto` debe tener carpeta `public/parciales/<slug>/codigos|imagenes/punto-XX.*`. Replica el patrón `parcial-XX` / `punto-YY` cuando crees nuevos.

## UI, tema y accesibilidad
- `main.ts` gestiona teclado (flechas, Home/End) y estados `aria`; conserva listeners y clases al modificar botones o navegación.
- Los `<details>` muestran etiquetas vía `.details-state`; usa la misma clase en cualquier bloque plegable nuevo.
- Nuevas variables de estilo deben declararse en ambos modos dentro de `src/styles/theme.css`; aplica los tokens desde `src/styles/app.css` o vistas específicas.

## Build y deploy
- Vercel espera `npm run build` y artefactos en `dist/` según `vercel.json`; no cambies la carpeta de salida.
- No edites `dist/` ni `docs/` como fuente; los `docs/*.md` son referencia útil pero el código y los data files mandan.

## Skills locales
- Usa las skills bajo `skills/` (por ejemplo `astro-portfolio-maintainer` o `academic-showcase-maintainer`) cuando el trabajo coincida; traen mapas de archivos y checklists hechos para este repo.
