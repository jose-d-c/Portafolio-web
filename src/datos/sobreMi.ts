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
      detalle: "Este apartado se completara cuando tenga mi primera experiencia.",
    },
  ],

  certificaciones: [
    {
      titulo: "Certificaciones por definir",
      detalle: "Aqui se agregan cursos, certificaciones y logros verificables.",
    },
  ],
};
