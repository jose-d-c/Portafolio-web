/**
 * Archivo: src/scripts/desplazamiento.ts
 * Responsabilidad: Mostrar solo una vista a la vez desde el dock lateral,
 * con animacion fluida y SIN solape (sale -> entra).
 */

type IdVista = "sobre-mi" | "proyectos" | "habilidades";
const ID_POR_DEFECTO: IdVista = "sobre-mi";

const DUR_SALIDA = 220;
const DUR_ENTRADA = 260;
const EASE = "cubic-bezier(0.2, 0.9, 0.2, 1)";

function obtenerIdDesdeHash(): string | null {
  const raw = window.location.hash?.replace("#", "").trim();
  return raw ? raw : null;
}

function getVista(id: string) {
  return document.getElementById(id) as HTMLElement | null;
}

function marcarDock(idFinal: string) {
  const nav = document.querySelector('nav[aria-label="Navegacion"]');
  const items = Array.from(nav?.querySelectorAll<HTMLElement>(".item[data-vista]") ?? []);
  for (const it of items) {
    it.classList.toggle("activa", it.getAttribute("data-vista") === idFinal);
  }
}

function scrollAContenedor() {
  const cont = document.getElementById("contenedor-vistas");
  if (cont) cont.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindDock() {
  const nav = document.querySelector('nav[aria-label="Navegacion"]');
  const items = Array.from(nav?.querySelectorAll<HTMLAnchorElement>('.item[data-vista]') ?? []);

  for (const a of items) {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("data-vista");
      if (!id) return;
      history.replaceState(null, "", `#${id}`);
      mostrarVista(id);
    });
  }
}

let actual: string | null = null;
let bloqueado = false;

async function animarSalida(el: HTMLElement) {
  await el.animate(
    [
      { opacity: 1, transform: "translateY(0px)" },
      { opacity: 0, transform: "translateY(10px)" },
    ],
    { duration: DUR_SALIDA, easing: EASE, fill: "forwards" }
  ).finished;
}

async function animarEntrada(el: HTMLElement) {
  el.style.opacity = "0";
  el.style.transform = "translateY(10px)";

  // forzar reflow para que la animacion arranque bien
  void el.offsetHeight;

  await el.animate(
    [
      { opacity: 0, transform: "translateY(10px)" },
      { opacity: 1, transform: "translateY(0px)" },
    ],
    { duration: DUR_ENTRADA, easing: EASE, fill: "forwards" }
  ).finished;

  // limpiar estilos inline
  el.style.opacity = "";
  el.style.transform = "";
}

async function mostrarVista(id: string) {
  if (bloqueado) return;

  const vistas = Array.from(document.querySelectorAll<HTMLElement>(".vista"));
  const existe = vistas.some((v) => v.id === id);
  const idFinal = existe ? id : ID_POR_DEFECTO;

  if (actual === idFinal) {
    marcarDock(idFinal);
    return;
  }

  const vistaNueva = getVista(idFinal);
  if (!vistaNueva) return;

  bloqueado = true;

  const vistaActual = actual ? getVista(actual) : null;

  // Salida de la actual (si existe)
  if (vistaActual) {
    await animarSalida(vistaActual);
    vistaActual.classList.remove("activa");
  }

  // Ocultar todas y mostrar la nueva
  for (const v of vistas) v.classList.remove("activa");
  vistaNueva.classList.add("activa");

  // Entrada de la nueva
  await animarEntrada(vistaNueva);

  actual = idFinal;
  marcarDock(idFinal);
  scrollAContenedor();

  bloqueado = false;
}

// Init
bindDock();
mostrarVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO);

window.addEventListener("hashchange", () => {
  mostrarVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO);
});
