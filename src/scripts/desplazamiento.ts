/**
 * Archivo: src/scripts/desplazamiento.ts
 * Responsabilidad:
 * - Mostrar solo una vista a la vez (Sobre mi / Proyectos / Habilidades)
 * - Animacion fluida SIN solape (sale -> entra)
 * - SIN SCROLL AUTOMATICO (el usuario baja/sube manual)
 * - URL con hash (#sobre-mi, #proyectos, #habilidades) sin salto por click
 * - Back/Forward funcional (popstate)
 */

type IdVista = "sobre-mi" | "proyectos" | "habilidades";
const ID_POR_DEFECTO: IdVista = "sobre-mi";

const DUR_SALIDA = 220;
const DUR_ENTRADA = 260;
const EASE = "cubic-bezier(0.2, 0.9, 0.2, 1)";

function prefiereReducirAnimacion(): boolean {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function obtenerIdDesdeHash(): string | null {
  const raw = window.location.hash?.replace("#", "").trim();
  return raw ? raw : null;
}

function getVista(id: string) {
  return document.getElementById(id) as HTMLElement | null;
}

function todasLasVistas(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(".vista"));
}

function marcarNav(idFinal: string) {
  const nav = document.querySelector('nav[aria-label="Navegacion"]');
  const items = Array.from(nav?.querySelectorAll<HTMLElement>(".item[data-vista]") ?? []);
  for (const it of items) {
    const activa = it.getAttribute("data-vista") === idFinal;
    it.classList.toggle("activa", activa);
    if (activa) it.setAttribute("aria-current", "page");
    else it.removeAttribute("aria-current");
  }
}

function actualizarA11yVistas(idActiva: string) {
  for (const v of todasLasVistas()) {
    const activa = v.id === idActiva;
    v.toggleAttribute("hidden", !activa);
    v.setAttribute("aria-hidden", activa ? "false" : "true");
  }
}

function bindNav() {
  const nav = document.querySelector('nav[aria-label="Navegacion"]');
  const items = Array.from(nav?.querySelectorAll<HTMLAnchorElement>(".item[data-vista]") ?? []);

  for (const a of items) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("data-vista");
      if (!id) return;

      // Guardar scroll actual y RESTAURARLO luego (por seguridad)
      const scrollY = window.scrollY;

      // Actualizar URL + historial SIN dejar que el navegador haga scroll por hash:
      // pushState NO genera el salto de ancla que haria location.hash
      if (window.location.hash !== `#${id}`) {
        history.pushState(null, "", `#${id}`);
      }

      ejecutarCambioVista(id, scrollY);
    });
  }
}

let actual: string | null = null;
let bloqueado = false;
let pendiente: { id: string; scrollY: number } | null = null;

function cancelarAnimaciones(el: HTMLElement) {
  try {
    for (const a of el.getAnimations()) a.cancel();
  } catch {
    // ok
  }
}

async function animarSalida(el: HTMLElement) {
  if (prefiereReducirAnimacion()) return;

  cancelarAnimaciones(el);
  await el.animate(
    [
      { opacity: 1, transform: "translateY(0px)" },
      { opacity: 0, transform: "translateY(10px)" },
    ],
    { duration: DUR_SALIDA, easing: EASE, fill: "forwards" }
  ).finished;
}

async function animarEntrada(el: HTMLElement) {
  if (prefiereReducirAnimacion()) return;

  cancelarAnimaciones(el);

  el.style.opacity = "0";
  el.style.transform = "translateY(10px)";
  void el.offsetHeight;

  await el.animate(
    [
      { opacity: 0, transform: "translateY(10px)" },
      { opacity: 1, transform: "translateY(0px)" },
    ],
    { duration: DUR_ENTRADA, easing: EASE, fill: "forwards" }
  ).finished;

  el.style.opacity = "";
  el.style.transform = "";
}

function restaurarScroll(scrollY: number) {
  // Restaura luego del cambio de layout para evitar cualquier salto involuntario
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: "auto" });
    });
  });
}

async function mostrarVista(id: string, scrollY: number) {
  if (bloqueado) {
    pendiente = { id, scrollY }; // cola simple: se queda con la ultima
    return;
  }

  const vistas = todasLasVistas();
  const existe = vistas.some((v) => v.id === id);
  const idFinal = (existe ? id : ID_POR_DEFECTO) as IdVista;

  if (actual === idFinal) {
    marcarNav(idFinal);
    actualizarA11yVistas(idFinal);
    restaurarScroll(scrollY);
    return;
  }

  const vistaNueva = getVista(idFinal);
  if (!vistaNueva) return;

  bloqueado = true;

  const vistaActual = actual ? getVista(actual) : null;

  // Preparar nueva para animar
  vistaNueva.removeAttribute("hidden");
  vistaNueva.setAttribute("aria-hidden", "false");

  // Salida de la actual
  if (vistaActual) {
    await animarSalida(vistaActual);
  }

  // Activar nueva y ocultar el resto
  for (const v of vistas) v.classList.remove("activa");
  vistaNueva.classList.add("activa");

  actualizarA11yVistas(idFinal);

  // Entrada
  await animarEntrada(vistaNueva);

  actual = idFinal;
  marcarNav(idFinal);

  // IMPORTANTISIMO: NO hay scroll automatico
  restaurarScroll(scrollY);

  bloqueado = false;

  // Si spamearon clicks, ejecuta la ultima
  if (pendiente && pendiente.id !== actual) {
    const next = pendiente;
    pendiente = null;
    await mostrarVista(next.id, next.scrollY);
  } else {
    pendiente = null;
  }
}

function restaurarFallbackSiFalla() {
  for (const v of todasLasVistas()) {
    v.removeAttribute("hidden");
    v.removeAttribute("aria-hidden");
    v.classList.remove("activa");
  }
}

function manejarErrorNavegacion(error: unknown) {
  console.error("No se pudo inicializar/actualizar la navegacion de vistas:", error);
  restaurarFallbackSiFalla();
}

function ejecutarCambioVista(id: string, scrollY: number) {
  void mostrarVista(id, scrollY).catch(manejarErrorNavegacion);
}

// Init
function init() {
  bindNav();

  // Ocultar todo para evitar flash
  for (const v of todasLasVistas()) {
    v.setAttribute("aria-hidden", "true");
    v.setAttribute("hidden", "");
  }

  // Vista inicial sin mover scroll
  ejecutarCambioVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO, window.scrollY);

  // Back/Forward (popstate se dispara con pushState)
  window.addEventListener("popstate", () => {
    ejecutarCambioVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO, window.scrollY);
  });

  // Si el usuario escribe/pega un hash manualmente:
  window.addEventListener("hashchange", () => {
    ejecutarCambioVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO, window.scrollY);
  });
}

try {
  init();
} catch (error) {
  manejarErrorNavegacion(error);
}
