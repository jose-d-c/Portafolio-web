import { access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const failures = [];
const checked = [];

async function ensureExists(relativePath, label) {
  const absolutePath = path.join(root, relativePath);
  checked.push(relativePath);

  try {
    await access(absolutePath, constants.F_OK);
  } catch {
    failures.push(`${label}: falta ${relativePath}`);
  }
}

async function validateBaseAssets() {
  await ensureExists("public/imagenes/yo.jpg", "foto principal");
  await ensureExists("public/cv.pdf", "cv");

  const icons = [
    "bolt.svg",
    "briefcase.svg",
    "certificate.svg",
    "flask.svg",
    "folder.svg",
    "linux.svg",
    "mail.svg",
    "network.svg",
    "rocket.svg",
    "server.svg",
    "shield.svg",
    "study.svg",
    "theme.svg",
    "user.svg",
    "whatsapp.svg",
  ];

  for (const icon of icons) {
    await ensureExists(`public/icons/${icon}`, "icono");
  }
}

async function validateProgramasTemporales() {
  await ensureExists("public/programas-temporales/uis-logo.svg", "logo UIS");

  for (let index = 1; index <= 30; index += 1) {
    const suffix = String(index).padStart(2, "0");
    await ensureExists(`public/programas-temporales/codigos/programa-${suffix}.txt`, "codigo de programa temporal");
    await ensureExists(`public/proyectos-temporales/imagenes/programa-${suffix}.svg`, "imagen de programa temporal");
  }
}

async function validateParciales() {
  for (let index = 1; index <= 7; index += 1) {
    const suffix = String(index).padStart(2, "0");
    await ensureExists(`public/parciales/parcial-01/codigos/punto-${suffix}.txt`, "codigo de parcial");
    await ensureExists(`public/parciales/parcial-01/imagenes/punto-${suffix}.svg`, "imagen de parcial");
  }
}

async function main() {
  await validateBaseAssets();
  await validateProgramasTemporales();
  await validateParciales();

  if (failures.length > 0) {
    console.error("Validacion fallida:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Validacion OK. Archivos verificados: ${checked.length}`);
}

await main();
