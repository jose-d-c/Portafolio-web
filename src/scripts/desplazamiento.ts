/**
 * Archivo: src/scripts/desplazamiento.ts
 * Responsabilidad:
 * - Cambiar entre vistas en una cuadricula horizontal
 * - Sobre mi como vista inicial
 * - Animacion izquierda/derecha al seleccionar en la barra
 */

type IdVista = "sobre-mi" | "proyectos" | "habilidades";

const ID_POR_DEFECTO: IdVista = "sobre-mi";
const ORDEN_VISTAS: IdVista[] = ["sobre-mi", "proyectos", "habilidades"];

function esIdVista(id: string | null): id is IdVista {
  return id !== null && ORDEN_VISTAS.includes(id as IdVista);
}

function marcarNav(idActiva: IdVista) {
  const nav = document.querySelector('nav[aria-label="Navegacion"]');
  const items = Array.from(nav?.querySelectorAll<HTMLElement>(".item[data-vista]") ?? []);

  for (const it of items) {
    const activa = it.getAttribute("data-vista") === idActiva;
    it.classList.toggle("activa", activa);
    if (activa) it.setAttribute("aria-current", "page");
    else it.removeAttribute("aria-current");
  }
}

function mostrarVista(idActiva: IdVista) {
  const contenedor = document.getElementById("contenedor-vistas");
  if (!contenedor) return;

  const indice = ORDEN_VISTAS.indexOf(idActiva);
  contenedor.style.setProperty("--indice-vista", String(indice));

  for (const id of ORDEN_VISTAS) {
    const vista = document.getElementById(id);
    if (!vista) continue;
    const activa = id === idActiva;
    vista.classList.toggle("activa", activa);
    vista.setAttribute("aria-hidden", activa ? "false" : "true");
  }

  marcarNav(idActiva);
}

function bindNav() {
  const nav = document.querySelector('nav[aria-label="Navegacion"]');
  const items = Array.from(nav?.querySelectorAll<HTMLButtonElement>(".item[data-vista]") ?? []);

  for (const btn of items) {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-vista");
      if (!esIdVista(id)) return;
      mostrarVista(id);
    });
  }
}

function init() {
  bindNav();
  mostrarVista(ID_POR_DEFECTO);
}

init();
