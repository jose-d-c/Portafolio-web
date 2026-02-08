/**
 * Archivo: src/datos/proyectos.ts
 * Responsabilidad: fuente unica de proyectos (data-driven).
 *
 * NOTA (v1):
 * - Esta seccion se deja VACIA a proposito.
 * - Motivo: aun no hay proyectos reales que valga la pena mostrar.
 *
 * COMO SE LLENARA (cuando toque):
 * 1) Agrega objetos al arreglo `proyectos`.
 * 2) Cada proyecto se renderiza automaticamente en GrillaProyectos.
 * 3) Si quieres "filtros por etiquetas", se implementa encima de este arreglo.
 */

export type Proyecto = {
  titulo: string;
  descripcion: string;
  demo?: string;     // link al despliegue (si existe)
  codigo?: string;   // link a GitHub (si existe)
  etiquetas?: string[];
};

export const proyectos: Proyecto[] = [
  // EJEMPLO (descomentar cuando ya tengas uno real):
  // {
  //   titulo: "Nombre del proyecto",
  //   descripcion: "Que hace, que problema resuelve, tu aporte principal.",
  //   demo: "https://...",
  //   codigo: "https://github.com/...",
  //   etiquetas: ["Astro", "Linux", "Redes"],
  // },
];
