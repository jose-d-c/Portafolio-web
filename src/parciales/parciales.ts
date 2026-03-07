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
        nombre: "Punto 1: Burbuja con enteros",
        descripcion: "Ordenamiento Burbuja sobre arreglo de enteros con salida de validacion.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-01.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-01.svg",
      },
      {
        id: "punto-02",
        slug: "punto-02",
        nombre: "Punto 2: Seleccion con cadenas",
        descripcion: "Ordenamiento por seleccion sobre cadenas con comparacion lexicografica.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-02.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-02.svg",
      },
      {
        id: "punto-03",
        slug: "punto-03",
        nombre: "Punto 3: Insercion con metricas",
        descripcion: "Insercion con conteo de comparaciones y desplazamientos.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-03.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-03.svg",
      },
    ],
  },
];
