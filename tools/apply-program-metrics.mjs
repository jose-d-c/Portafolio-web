import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { programasConfig, configPorSlug } from "./programas-config.mjs";

const root = process.cwd();
const __filename = fileURLToPath(import.meta.url);
const metricsPath = join(root, "src", "programas-temporales", "metricas.generated.json");
const metricas = JSON.parse(readFileSync(metricsPath, "utf8"));

const blockStart = "ESCENARIOS_AUTOGENERADOS";
const blockEnd = "FIN_ESCENARIOS_AUTOGENERADOS";
const authorLine = "Jose David Consuegra Medina - Codigo 2250167";

const formatters = {
  java: (contenido) => `/* === ${blockStart} ===\n${contenido}\n=== ${blockEnd} === */`,
  cpp: (contenido) => `/* === ${blockStart} ===\n${contenido}\n=== ${blockEnd} === */`,
  python: (contenido) => {
    const prefixed = contenido
      .split("\n")
      .map((linea) => `# ${linea}`)
      .join("\n");
    return `# === ${blockStart} ===\n${prefixed}\n# === ${blockEnd} ===`;
  },
};

const buildLines = (slug) => {
  const registro = metricas[slug];
  if (!registro) return null;
  const lineas = [];
  lineas.push(authorLine);
  lineas.push(`Resumen de ejecuciones automaticas (${new Date().toISOString().slice(0, 10)})`);
  for (const escenario of Object.keys(registro.escenarios)) {
    lineas.push("");
    lineas.push(`Escenario: ${registro.escenarios[escenario][10].escenarioLabel}`);
    for (const tamano of Object.keys(registro.escenarios[escenario])) {
      const datos = registro.escenarios[escenario][tamano];
      lineas.push(`  - ${tamano} elementos -> Tiempo: ${datos.tiempoMs} ms | Memoria: ${datos.memoriaKb} KB | Iteraciones: ${datos.iteraciones} | Comparaciones: ${datos.comparaciones} | Intercambios: ${datos.intercambios}`);
      lineas.push(`    Entrada: ${datos.entrada}`);
      lineas.push(`    Salida: ${datos.salida}`);
    }
  }
  return lineas.join("\n");
};

const applyBlock = (programa) => {
  const archivo = join(root, "public", "programas-temporales", "codigos", `${programa.slug}.txt`);
  let contenido = readFileSync(archivo, "utf8");
  const nuevoContenido = buildLines(programa.slug);
  if (!nuevoContenido) return;
  const formatter = formatters[programa.lenguaje] ?? formatters.java;
  const bloque = formatter(nuevoContenido);
  const marcadorInicio = `=== ${blockStart} ===`;
  const marcadorFin = `=== ${blockEnd} ===`;
  const inicio = contenido.indexOf(marcadorInicio);
  if (inicio !== -1) {
    const fin = contenido.indexOf(marcadorFin, inicio);
    if (fin !== -1) {
      const bloqueFin = fin + marcadorFin.length;
      const antes = contenido.lastIndexOf("\n", inicio);
      const despues = contenido.indexOf("\n", bloqueFin);
      const inicioReal = antes === -1 ? 0 : antes;
      const finReal = despues === -1 ? contenido.length : despues;
      contenido = `${contenido.slice(0, inicioReal)}${contenido.slice(finReal)}`;
    }
  }
  contenido = contenido.trimEnd();
  contenido = `${contenido}\n\n${bloque}\n`;
  writeFileSync(archivo, contenido);
  console.log(`Actualizado ${programa.slug}`);
};

for (const programa of programasConfig) {
  applyBlock(programa);
}
