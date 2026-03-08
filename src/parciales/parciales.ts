const fechaHoy = new Date().toISOString().slice(0, 10);

export type PuntoParcial = {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  rutaCodigo: string;
  rutaImagen: string;
};

export type Parcial = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  enlaceExterno: string;
  puntos: PuntoParcial[];
};

export const parciales: Parcial[] = [
  {
    id: 1,
    slug: "parcial-01",
    titulo: "Parcial 1",
    descripcion: `Fecha: ${fechaHoy}`,
    enlaceExterno: "/parciales/parcial-01",
    puntos: [
      {
        id: "punto-01",
        slug: "punto-01",
        nombre: "Punto 1: Comparacion de 6 algoritmos con arreglo de nombres",
        descripcion:
          "Implementar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion para comparar tiempo y numero de comparaciones en un gran arreglo de nombres.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-01.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-01.svg",
      },

      {
        id: "punto-02",
        slug: "punto-02",
        nombre: "Punto 2: Arreglos casi ordenados (nombres y numeros)",
        descripcion:
          "Ejecutar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion sobre dos arreglos casi ordenados para comparar tiempos en ambas situaciones.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-02.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-02.svg",
      },

      {
        id: "punto-03",
        slug: "punto-03",
        nombre: "Punto 3: Arreglos invertidos (nombres y numeros)",
        descripcion:
          "Comparar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion en arreglos invertidos para analizar rendimiento en este escenario.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-03.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-03.svg",
      },

      {
        id: "punto-04",
        slug: "punto-04",
        nombre: "Punto 4: Ordenamiento con valores repetidos",
        descripcion:
          "Evaluar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion en arreglos con alta repeticion para identificar el metodo mas adecuado.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-04.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-04.svg",
      },

      {
        id: "punto-05",
        slug: "punto-05",
        nombre: "Punto 5: Arreglos parcialmente ordenados",
        descripcion:
          "Comparar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion en arreglos donde una mitad esta ordenada y la otra desordenada.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-05.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-05.svg",
      },

      {
        id: "punto-06",
        slug: "punto-06",
        nombre: "Punto 6: Serie histórica dólar 2022 (Colombia)",
        descripcion:
          "Evaluar los 6 algoritmos con la serie histórica 2022 de la divisa USD/COP para comparar comparaciones, tiempo y memoria, e identificar periodos de valor más alto y más bajo.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-06.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-06.svg",
      },

      {
        id: "punto-07",
        slug: "punto-07",
        nombre: "Punto 7: Repetición de nombres y ordenamientos de salida",
        descripcion:
          "Contar repeticiones de nombres en un arreglo generado y mostrar dos salidas: ordenada por nombre y ordenada por cantidad de repeticiones.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-07.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-07.svg",
      },
    ],
  },
];
