/**
 * Archivo: src/datos/proyectos.ts
 * Responsabilidad: Fuente unica de proyectos (data-driven).
 */

export type Proyecto = {
  titulo: string;
  descripcion: string;
  demo?: string;
  codigo?: string;
  etiquetas?: string[];
};

export const proyectos: Proyecto[] = [
  {
    titulo: "Portafolio v2",
    descripcion:
      "Diseño cyberpunk limpio, modo claro/oscuro, componentes reutilizables y navegacion flotante.",
    demo: "#",
    codigo: "#",
    etiquetas: ["Astro", "CSS", "UI"],
  },
];
