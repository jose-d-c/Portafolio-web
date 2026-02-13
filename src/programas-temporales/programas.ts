export type ProgramaTemporal = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  enlaceExterno: string;
  rutaCodigoPlantilla: string;
  rutaImagenPlantilla: string;
};

export const programasTemporales: ProgramaTemporal[] = Array.from({ length: 20 }, (_, index) => {
  const numero = index + 1;
  const id = numero.toString().padStart(2, "0");

  return {
    id: numero,
    slug: `programa-${id}`,
    titulo: `Programa ${id}`,
    descripcion:
      "Plantilla temporal para agregar analisis, pseudocodigo, pruebas y evidencia visual del programa.",
    enlaceExterno: `/programas-temporales/programa-${id}`,
    rutaCodigoPlantilla: `/programas-temporales/codigos/programa-${id}.txt`,
    rutaImagenPlantilla: `/proyectos-temporales/imagenes/programa-${id}.svg`,
  };
});
