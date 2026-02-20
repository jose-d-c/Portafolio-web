/**
 * Archivo: src/scripts/desplazamiento.ts
 * Responsabilidad:
 * - Mostrar solo una vista a la vez (Sobre mi / Proyectos / Habilidades)
 * - Animacion tipo slide (si el navegador la soporta)
 * - SIN SCROLL AUTOMATICO (el usuario baja/sube manual)
 * - URL con hash (#sobre-mi, #proyectos, #habilidades) sin salto por click
 * - Back/Forward funcional (popstate)
 */

type IdVista = "sobre-mi" | "proyectos" | "habilidades";
const ID_POR_DEFECTO: IdVista = "sobre-mi";
const ORDEN_VISTAS: IdVista[] = ["sobre-mi", "proyectos", "habilidades"];

const DUR_ENTRADA = 240;
const DISTANCIA_SLIDE = 34;
const EASE = "cubic-bezier(0.2, 0.9, 0.2, 1)";

let actual: IdVista | null = null;
let cambioSerial = 0;

function prefiereReducirAnimacion(): boolean {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function obtenerIdDesdeHash(): string | null {
  const raw = window.location.hash?.replace("#", "").trim();
  return raw || null;
}

function esIdVista(id: string | null): id is IdVista {
  return id !== null && ORDEN_VISTAS.includes(id as IdVista);
}

function todasLasVistas(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(".vista"));
}

function getVista(id: IdVista): HTMLElement | null {
  return document.getElementById(id) as HTMLElement | null;
}

function restaurarScroll(scrollY: number) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: "auto" });
    });
  });
}

function marcarNav(idFinal: IdVista) {
  const nav = document.querySelector('nav[aria-label="Navegacion"]');
  const items = Array.from(nav?.querySelectorAll<HTMLElement>(".item[data-vista]") ?? []);

  for (const it of items) {
    const activa = it.getAttribute("data-vista") === idFinal;
    it.classList.toggle("activa", activa);
    if (activa) it.setAttribute("aria-current", "page");
    else it.removeAttribute("aria-current");
  }
}

function aplicarEstadoVista(idActiva: IdVista) {
  for (const v of todasLasVistas()) {
    const activa = v.id === idActiva;
    v.classList.toggle("activa", activa);
    v.toggleAttribute("hidden", !activa);
    v.setAttribute("aria-hidden", activa ? "false" : "true");
  }
}

function animarEntradaSiAplica(el: HTMLElement, direccion: 1 | -1, serial: number) {
  if (prefiereReducirAnimacion() || typeof el.animate !== "function") return;

  try {
    for (const a of el.getAnimations()) a.cancel();

    el.style.opacity = "0";
    el.style.transform = `translateX(${DISTANCIA_SLIDE * direccion}px)`;
    void el.offsetHeight;

    const animacion = el.animate(
      [
        { opacity: 0, transform: `translateX(${DISTANCIA_SLIDE * direccion}px)` },
        { opacity: 1, transform: "translateX(0px)" },
      ],
      { duration: DUR_ENTRADA, easing: EASE, fill: "forwards" }
    );

    void animacion.finished.finally(() => {
      if (serial !== cambioSerial) return;
      el.style.opacity = "";
      el.style.transform = "";
    });
  } catch {
    el.style.opacity = "";
    el.style.transform = "";
  }
}

function direccionCambio(idDestino: IdVista, idOrigen: IdVista | null): 1 | -1 {
  if (!idOrigen) return 1;
  return ORDEN_VISTAS.indexOf(idDestino) >= ORDEN_VISTAS.indexOf(idOrigen) ? 1 : -1;
}

function mostrarVista(idSolicitada: string, scrollY: number) {
  const idFinal: IdVista = esIdVista(idSolicitada) ? idSolicitada : ID_POR_DEFECTO;
  const vistaNueva = getVista(idFinal);
  if (!vistaNueva) return;

  const idAnterior = actual;
  const direccion = direccionCambio(idFinal, idAnterior);

  cambioSerial += 1;
  const serialLocal = cambioSerial;

  aplicarEstadoVista(idFinal);
  animarEntradaSiAplica(vistaNueva, direccion, serialLocal);

  actual = idFinal;
  marcarNav(idFinal);
  restaurarScroll(scrollY);
}

function bindNav() {
  const nav = document.querySelector('nav[aria-label="Navegacion"]');
  const items = Array.from(nav?.querySelectorAll<HTMLAnchorElement>(".item[data-vista]") ?? []);

  for (const a of items) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("data-vista");
      if (!id) return;

      const scrollY = window.scrollY;
      if (window.location.hash !== `#${id}`) {
        history.pushState(null, "", `#${id}`);
      }

      mostrarVista(id, scrollY);
    });
  }
}

function init() {
  bindNav();

  for (const v of todasLasVistas()) {
    v.setAttribute("aria-hidden", "true");
    v.setAttribute("hidden", "");
  }

  mostrarVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO, window.scrollY);

  window.addEventListener("popstate", () => {
    mostrarVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO, window.scrollY);
  });

  window.addEventListener("hashchange", () => {
    mostrarVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO, window.scrollY);
  });
}

try {
  init();
} catch (error) {
  console.error("No se pudo inicializar navegacion de vistas:", error);
  for (const v of todasLasVistas()) {
    v.removeAttribute("hidden");
    v.removeAttribute("aria-hidden");
  }
}
