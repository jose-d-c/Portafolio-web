/**
 * Archivo: src/datos/sobreMi.ts
 * Responsabilidad: Datos del apartado "Sobre mi" en columnas.
 */

export type ItemSobreMi = {
  titulo: string;
  detalle: string;
};

export const sobreMi = {
  estudios: [
    {
      titulo: "Ingenieria de Sistemas (en curso)",
      detalle: "Universidad Industrial de Santander (UIS).",
    },
  ],

  experiencia: [
    {
      titulo: "Sin experiencia laboral formal aun",
      detalle:
        "Perfil laboral orientado a soporte tecnico, redes y ciberseguridad con experiencia en proyectos academicos y personales.",
    },
    {
      titulo: "Experiencia laboral en formacion",
      detalle:
        "Participacion en practicas y entregas de Estructura de Datos, documentando analisis, pseudocodigo y resultados de ejecucion.",
    },
  ],

  certificaciones: [
    {
      titulo: "Certificaciones por definir",
      detalle: "Aqui se agregan cursos, certificaciones y logros verificables.",
    },
  ],
};
