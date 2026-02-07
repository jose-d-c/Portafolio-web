/**
 * Archivo: src/scripts/tema.ts
 * Responsabilidad: manejar tema claro/oscuro y guardar preferencia.
 * Motivo: Separar logica (JS/TS) de los componentes visuales.
 */

type Tema = "oscuro" | "claro";

function aplicarTema(tema: Tema) {
  if (tema === "claro") {
    document.documentElement.setAttribute("data-tema", "claro");
  } else {
    document.documentElement.removeAttribute("data-tema");
  }
}

function leerTemaGuardado(): Tema {
  const guardado = localStorage.getItem("tema");
  return guardado === "claro" ? "claro" : "oscuro";
}

/**
 * Inicia el tema al cargar la pagina.
 * - Si hay preferencia guardada, se respeta.
 * - Si no, se usa oscuro por defecto (identidad cyberpunk).
 */
function iniciarTema() {
  const tema = leerTemaGuardado();
  aplicarTema(tema);
}

/**
 * Alterna entre claro y oscuro.
 * Exportado a window para poder llamarlo desde botones HTML.
 */
function alternarTema() {
  const actual: Tema = document.documentElement.getAttribute("data-tema") === "claro" ? "claro" : "oscuro";
  const siguiente: Tema = actual === "claro" ? "oscuro" : "claro";
  aplicarTema(siguiente);
  localStorage.setItem("tema", siguiente);
}

iniciarTema();

// Exponer al global para usarlo en componentes sin acoplarlos a un framework
// (ej: onclick="window.alternarTema()").
(window as any).alternarTema = alternarTema;
