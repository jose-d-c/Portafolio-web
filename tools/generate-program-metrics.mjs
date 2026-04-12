import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { programasConfig } from "./programas-config.mjs";

const root = process.cwd();

const escenarios = ["desordenado", "parcial", "intercalado", "invertido"];
const tamanos = [10, 100, 1000];

const scenarioLabels = {
  desordenado: "TOTALMENTE DESORDENADOS",
  parcial: "PARCIALMENTE ORDENADOS",
  intercalado: "ORDEN INTERCALADO",
  invertido: "ORDEN INVERTIDO",
};

const scenarioModifiers = {
  desordenado: { tiempo: 1, comparaciones: 1, intercambios: 1, iteraciones: 1, memoria: 1 },
  parcial: { tiempo: 0.75, comparaciones: 0.7, intercambios: 0.5, iteraciones: 0.6, memoria: 0.9 },
  intercalado: { tiempo: 1.1, comparaciones: 1.05, intercambios: 1.1, iteraciones: 1.05, memoria: 1.05 },
  invertido: { tiempo: 1.35, comparaciones: 1.4, intercambios: 1.6, iteraciones: 1.35, memoria: 1.15 },
};

const dataTypeLabels = {
  int: "enteros",
  string: "cadenas",
  mixto: "datos mixtos",
  binario: "enteros ordenados",
};

const algorithmConfigs = {
  bubble_simple: { complexity: "quadratic", baseTime: 0.018, memPerItem: 0.04, swapFactor: 0.8 },
  bubble_mejorado: { complexity: "quadratic", baseTime: 0.015, memPerItem: 0.04, swapFactor: 0.6 },
  selection: { complexity: "quadratic", baseTime: 0.016, memPerItem: 0.035, swapFactor: 0.45 },
  insertion: { complexity: "quadratic", baseTime: 0.014, memPerItem: 0.04, swapFactor: 0.4 },
  quick: { complexity: "nlogn", baseTime: 0.01, memPerItem: 0.03, swapFactor: 0.35 },
  shell: { complexity: "nlogn", baseTime: 0.011, memPerItem: 0.035, swapFactor: 0.4 },
  shaker: { complexity: "quadratic", baseTime: 0.017, memPerItem: 0.04, swapFactor: 0.7 },
  radix: { complexity: "linear", baseTime: 0.007, memPerItem: 0.05, swapFactor: 0.2 },
  merge: { complexity: "nlogn", baseTime: 0.012, memPerItem: 0.08, swapFactor: 0.3 },
  heap: { complexity: "nlogn", baseTime: 0.013, memPerItem: 0.05, swapFactor: 0.45 },
  bucket: { complexity: "nlogn", baseTime: 0.012, memPerItem: 0.09, swapFactor: 0.35 },
  multi_tiempo: { complexity: "nlogn", baseTime: 0.022, memPerItem: 0.07, swapFactor: 0.9, multiplicador: 6 },
  multi_memoria: { complexity: "nlogn", baseTime: 0.02, memPerItem: 0.09, swapFactor: 0.9, multiplicador: 6 },
  multi_metricas: { complexity: "nlogn", baseTime: 0.024, memPerItem: 0.1, swapFactor: 1, multiplicador: 6 },
  comparativa: { complexity: "nlogn", baseTime: 0.016, memPerItem: 0.06, swapFactor: 0.6, multiplicador: 2 },
  binary_search: { complexity: "log", baseTime: 0.003, memPerItem: 0.015, swapFactor: 0 },
  counting_sort: { complexity: "linear", baseTime: 0.008, memPerItem: 0.07, swapFactor: 0.1 },
};


const complexityFns = {
  quadratic: (size) => size * size,
  nlogn: (size) => size * Math.log2(size),
  linear: (size) => size,
  log: (size) => Math.log2(size),
};

const buildEntrada = (tipoDato, escenario, size) => {
  const tipo = dataTypeLabels[tipoDato] ?? "datos";
  return `Arreglo de ${tipo} ${scenarioLabels[escenario].toLowerCase()} (${size} elementos)`;
};

const buildSalida = (tipoDato, size) => {
  if (tipoDato === "string") {
    return `Cadenas ordenadas alfabeticamente (total ${size})`;
  }
  if (tipoDato === "binario") {
    return `Posicion encontrada o -1 tras evaluar hasta 3 mitades (n=${size})`;
  }
  return `Valores ordenados de menor a mayor (total ${size})`;
};

const round = (value, decimals = 2) => Number(value.toFixed(decimals));

const generarMetricas = (config) => {
  const algoritmo = algorithmConfigs[config.tipo];
  if (!algoritmo) throw new Error(`No hay configuracion para ${config.tipo}`);
  const resultadoEscenarios = {};

  for (const escenario of escenarios) {
    const ajuste = scenarioModifiers[escenario];
    const registrosPorTamano = {};

    for (const size of tamanos) {
      const baseComplejidad = complexityFns[algoritmo.complexity](size);
      const multiplicador = algoritmo.multiplicador ?? 1;
      const comparacionesBase = baseComplejidad * (algoritmo.complexity === "log" ? 10 : 1);
      const comparaciones = Math.max(1, comparacionesBase * ajuste.comparaciones * multiplicador);
      const iteraciones = Math.max(1, baseComplejidad * ajuste.iteraciones * multiplicador);
      const intercambios = Math.max(0, size * algoritmo.swapFactor * ajuste.intercambios * multiplicador);
      const tiempoMs = comparaciones * algoritmo.baseTime * ajuste.tiempo;
      const memoriaKB = Math.max(1, size * algoritmo.memPerItem * ajuste.memoria * multiplicador);

      registrosPorTamano[size] = {
        tiempoMs: round(tiempoMs, 3),
        memoriaKb: round(memoriaKB, 2),
        iteraciones: Math.round(iteraciones),
        comparaciones: Math.round(comparaciones),
        intercambios: Math.round(intercambios),
        entrada: buildEntrada(config.dato, escenario, size),
        salida: buildSalida(config.dato, size),
        escenarioLabel: scenarioLabels[escenario],
      };
    }

    resultadoEscenarios[escenario] = registrosPorTamano;
  }

  return resultadoEscenarios;
};

const metricas = {};

for (const programa of programasConfig) {
  metricas[programa.slug] = {
    titulo: programa.titulo,
    lenguaje: programa.lenguaje,
    tipoDato: programa.dato,
    tipoAlgoritmo: programa.tipo,
    escenarios: generarMetricas(programa),
  };
}

const outputPath = join(root, "src", "programas-temporales", "metricas.generated.json");
writeFileSync(outputPath, JSON.stringify(metricas, null, 2));
console.log(`Metricas generadas en ${outputPath}`);
