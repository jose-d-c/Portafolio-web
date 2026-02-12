export type ProgramaTemporal = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  codigoPlantilla: string;
  enlaceExterno: string;
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
    enlaceExterno: `https://example.com/programas/programa-${id}`,
    codigoPlantilla: [
      `// ${`Programa ${id}`}`,
      "// Agrega aqui el codigo final cuando este disponible.",
      "",
      "function main() {",
      "  console.log('Espacio temporal de codigo');",
      "}",
      "",
      "main();",
    ].join("\n"),
  };
});
