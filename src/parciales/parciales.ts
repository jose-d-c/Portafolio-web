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
    ],
  },
];
