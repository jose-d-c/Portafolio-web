/**
 * Archivo: src/datos/habilidades.ts
 * Responsabilidad: Lista de habilidades centralizada y clasificada.
 */

export type EstadoHabilidad = "en_proceso" | "dominado" | "por_aprender";

export type Habilidad = {
  id: "linux" | "redes" | "servidores" | "ciberseguridad";
  nombre: string;
  descripcion: string;
  estado: EstadoHabilidad;
};

export const habilidades: Habilidad[] = [
  {
    id: "linux",
    nombre: "Linux",
    descripcion: "Entorno, terminal, sistemas y configuracion.",
    estado: "en_proceso",
  },
  {
    id: "redes",
    nombre: "Redes",
    descripcion: "Conceptos, configuracion y diagnostico.",
    estado: "por_aprender",
  },
  {
    id: "servidores",
    nombre: "Servidores",
    descripcion: "Administracion, servicios y despliegue.",
    estado: "por_aprender",
  },
  {
    id: "ciberseguridad",
    nombre: "Ciberseguridad",
    descripcion: "Buenas practicas, analisis y proteccion.",
    estado: "por_aprender",
  },
];
