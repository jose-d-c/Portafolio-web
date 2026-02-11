/**
 * Archivo: src/scripts/tema.ts
 * Responsabilidad: manejar tema claro/oscuro y guardar preferencia.
 * - Usa atributo data-tema en <html> (document.documentElement)
 * - Guarda preferencia en localStorage
 * - Permite alternar por:
 *    1) window.alternarTema() (compat)
 *    2) botones con data-accion="alternar-tema" (recomendado)
 */

type Tema = "oscuro" | "claro";
const KEY = "tema";

function aplicarTema(tema: Tema) {
  // Deja el atributo SIEMPRE presente para evitar inconsistencias
  document.documentElement.setAttribute("data-tema", tema);

  // Ayuda a inputs/scrollbar del navegador
  document.documentElement.style.colorScheme = tema === "claro" ? "light" : "dark";
}

function leerTemaGuardado(): Tema {
  try {
    const guardado = localStorage.getItem(KEY);
    return guardado === "claro" ? "claro" : "oscuro";
  } catch {
    return "oscuro";
  }
}

function guardarTema(tema: Tema) {
  try {
    localStorage.setItem(KEY, tema);
  } catch {
    // ok
  }
}

/**
 * Inicia el tema al cargar la pagina.
 * - Si hay preferencia guardada, se respeta.
 * - Si no, oscuro por defecto (identidad cyberpunk).
 */
function iniciarTema() {
  const tema = leerTemaGuardado();
  aplicarTema(tema);
}

function alternarTema() {
  const actual = (document.documentElement.getAttribute("data-tema") as Tema) || "oscuro";
  const siguiente: Tema = actual === "claro" ? "oscuro" : "claro";
  aplicarTema(siguiente);
  guardarTema(siguiente);
}

// Bind recomendado: cualquier boton con data-accion="alternar-tema"
function bindBotonesTema() {
  document.addEventListener("click", (e) => {
    const el = e.target as HTMLElement | null;
    const btn = el?.closest?.('[data-accion="alternar-tema"]') as HTMLElement | null;
    if (!btn) return;
    alternarTema();
  });
}

iniciarTema();
bindBotonesTema();

// Compat: para usos viejos (onclick="window.alternarTema()")
(window as any).alternarTema = alternarTema;

