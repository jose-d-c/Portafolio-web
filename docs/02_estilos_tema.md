# Estilos y tema (como modificar sin romper)

## Variables base
Archivo activo: `src/styles/theme.css`

Ahi se define:
- fondo, texto, panel, borde
- acentos primario y secundario
- glow, focus ring y sombras
- superficies para tema oscuro y claro

## Fondo cyberpunk limpio
Archivo activo: `src/styles/app.css`
- `body` mete gradientes atmosfericos
- `body::before` mete micro-textura de puntos
- `cover` agrega orbes y grid visual en la portada

Si se quiere menos textura:
- bajar `opacity` en `body::before`
- suavizar `.hero__grid-dots`

## Tipografias activas
- display: `Syne`
- cuerpo: `DM Sans`
- mono: `DM Mono`
