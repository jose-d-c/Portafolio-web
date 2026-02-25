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
  5: {
    titulo: "Actividad: Burbuja mejorado en Java (arreglo de enteros)",
    descripcion:
      "Ordenamiento burbuja mejorado en Java usando arrays de enteros, con bandera de corte temprano y comentarios detallados para cada bloque.",
  },
  6: {
    titulo: "Actividad: Burbuja mejorado en Java (String)",
    descripcion:
      "Version de burbuja mejorado para cadenas en Java, explicando compareTo, intercambio y optimizacion cuando no hay cambios en una pasada.",
  },
  7: {
    titulo: "Actividad: Quicksort en Java (enteros)",
    descripcion:
      "Implementacion de Quicksort con enteros en Java, incluyendo comentarios explicativos sobre particionado, pivote e invocaciones recursivas.",
  },
  8: {
    titulo: "Actividad: Quicksort en Java (String)",
    descripcion:
      "Implementacion de Quicksort para arreglos de String en Java, con comparacion lexicografica y comentarios detallados paso a paso.",
  },
  9: {
    titulo: "Actividad: Shell Sort en Java (int)",
    descripcion:
      "Programa en Java que ordena un arreglo de enteros con Shell Sort, mostrando el vector original, los gaps utilizados y el resultado final ascendente.",
  },
  10: {
    titulo: "Actividad: Shell Sort en Java (String)",
    descripcion:
      "Implementacion de Shell Sort para cadenas en Java usando compareTo, con comentarios sobre el desplazamiento por gap y salida alfabetica.",
  },
  11: {
    titulo: "Actividad: Seleccion en Java (int)",
    descripcion:
      "Ordenamiento por seleccion en Java para enteros, identificando el minimo por iteracion y realizando intercambios controlados hasta ordenar todo el arreglo.",
  },
  12: {
    titulo: "Actividad: Seleccion en Java (String)",
    descripcion:
      "Version de seleccion para arreglos de String en Java, comparando lexicograficamente para elegir el menor elemento de cada pasada.",
  },
  13: {
    titulo: "Actividad interactiva: Tiempo de ejecucion de todos los algoritmos",
    descripcion:
      "Programa Java interactivo que compara tiempos de Burbuja, Burbuja mejorado, Quicksort, Shell Sort y Seleccion en escenarios de datos bajos, medios y altos, mostrando trazas paso a paso.",
  },
  14: {
    titulo: "Actividad interactiva: Uso de memoria de todos los algoritmos",
    descripcion:
      "Programa Java interactivo que estima memoria de Burbuja, Burbuja mejorado, Quicksort, Shell Sort y Seleccion en escenarios bajos, medios y altos, con trazas de consumo por pasos.",
  },
};

export const programasTemporales: ProgramaTemporal[] = Array.from({ length: 27 }, (_, index) => {
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
