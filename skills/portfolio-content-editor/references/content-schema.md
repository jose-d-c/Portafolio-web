# Esquema de contenido activo

## `perfil`
- `nombre`
- `rol`
- `enfoque`
- `correo`
- `whatsapp`
- `foto`

## `sobreMi`
- `perfilLaboral: string[]`
- `estudios: { titulo, detalle }[]`
- `experienciaLaboral: { titulo, detalle }[]`
- `certificaciones: { titulo, detalle }[]`

## `proyectos`
- `titulo`
- `descripcion`
- `etiquetas: string[]`

## `habilidades`
- `nombre`
- `estado`
- `icono`
- `tono`

## Listados derivados
- `proyectosTemporales` nace de `src/programas-temporales/programas.ts`
- `parcialesAcademicos` nace de `src/parciales/parciales.ts`
