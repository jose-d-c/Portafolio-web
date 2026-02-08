# Estilos y tema (como modificar sin romper)

## Variables base
Archivo: `src/estilos/tema.css`

Ahi se define:
- fondo, texto, panel, borde
- acentos: morado / azul / cian
- glow
- fondos reutilizables:
  - `--bg-item` (cards internas / items)
  - `--bg-chip` (chips / etiquetas)
  - `--bg-btn` y `--bg-btnHover`

## Fondo cyberpunk limpio
Archivo: `src/estilos/globales.css`
- `body::before` mete gradientes
- `body::after` mete micro-textura (scanlines + grid) MUY sutil

Si se quiere menos textura:
- bajar `opacity` en `body::after`
