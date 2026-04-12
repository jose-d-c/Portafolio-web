# Riesgos conocidos

## Drift arquitectonico
La documentacion del proyecto mezcla una version vieja y la arquitectura activa. No asumir que `docs/` refleja la home actual.

## Generacion estatica
Programas temporales y parciales leen archivos desde `public/` durante build. Si falta un `.txt` o `.svg`, la compilacion puede romper o la pagina quedar incompleta.

## Tema y navegacion
La home actual depende de `src/scripts/main.ts` y `data-theme`, no de los scripts legacy.

## Laboratorio JDC
`JDC_Portfolio_Complete` aporta buenos patrones de frontend, accesibilidad y performance, pero mezcla contenido y arquitectura que no deben copiarse tal cual.
