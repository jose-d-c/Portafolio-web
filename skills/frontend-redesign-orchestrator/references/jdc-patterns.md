# Patrones extraidos de JDC

## Tokens y sistema visual
- Centralizar colores, sombras, radios, spacing y tipografia en tokens semanticos.
- Usar una tipografia de display y otra de lectura para jerarquia clara.
- Mantener escalas consistentes antes de introducir componentes nuevos.

## Componentes
- Cards con elevacion por `transform` y `box-shadow`.
- Badges compactos para estado o contexto.
- Texto con gradiente solo en puntos de enfasis.

## Motion
- Entradas escalonadas al cargar pueden funcionar en portada.
- Reveal en scroll solo si la pagina gana longitud real.
- Animar sobre `transform` y `opacity`, no sobre propiedades caras.

## Responsive
- Pensar tablet y mobile como vistas de primer nivel.
- En mobile, simplificar visualmente y priorizar contenido.
- Si aparece menu colapsable, debe soportar teclado y cierre consistente.

## Accesibilidad
- `:focus-visible`
- skip link a contenido principal
- `aria-expanded`, `aria-current`, `aria-hidden`
- listeners `passive` en scroll cuando aplique

## Regla de adaptacion
Copiar el principio, no la implementacion literal.
