export type ProgramaTemporal = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  enlaceExterno: string;
  rutaCodigoPlantilla: string;
  rutaImagenPlantilla: string;
};

const configuracionesPersonalizadas: Record<number, Pick<ProgramaTemporal, "titulo" | "descripcion">> = {
  1: {
    titulo: "Ordenamiento Burbuja simple en C++ (String)",
    descripcion:
      "Implementacion de burbuja en C++ usando 10 palabras. Incluye trazabilidad del algoritmo, comparaciones paso a paso y salida final ordenada alfabeticamente.",
  },
  2: {
    titulo: "Ordenamiento Burbuja simple en Python (int)",
    descripcion:
      "Implementacion de burbuja en Python con 10 numeros enteros. Muestra el arreglo inicial, las pasadas y el resultado final en orden ascendente.",
  },
  3: {
    titulo: "Actividad: Ordenamiento Burbuja Simple en Java (int)",
    descripcion:
      "Programa en Java con 10 enteros para practicar el ordenamiento burbuja clasico, con comentarios detallados para explicar cada bloque de codigo.",
  },
  4: {
    titulo: "Actividad: Ordenamiento Burbuja Simple en Java (String)",
    descripcion:
      "Programa en Java con 10 cadenas para reforzar comparacion lexicografica en burbuja, incluyendo explicacion comentada y evidencia de salida.",
  },
};

export const programasTemporales: ProgramaTemporal[] = Array.from({ length: 20 }, (_, index) => {
  const numero = index + 1;
  const id = numero.toString().padStart(2, "0");
  const configuracion = configuracionesPersonalizadas[numero];

  return {
    id: numero,
    slug: `programa-${id}`,
    titulo: configuracion?.titulo ?? `Programa ${id}`,
    descripcion:
      configuracion?.descripcion ??
      "Plantilla temporal para agregar analisis, pseudocodigo, pruebas y evidencia visual del programa.",
    enlaceExterno: `/programas-temporales/programa-${id}`,
    rutaCodigoPlantilla: `/programas-temporales/codigos/programa-${id}.txt`,
    rutaImagenPlantilla: `/proyectos-temporales/imagenes/programa-${id}.svg`,
  };
});
