/**
 * Archivo: src/scripts/desplazamiento.ts
 * Responsabilidad: mostrar solo una seccion a la vez segun la barra flotante.
 * Motivo: experiencia mas intuitiva (tipo "tabs") sin scroll por secciones.
 */

type IdVista = "sobre-mi" | "proyectos" | "habilidades";

const ID_POR_DEFECTO: IdVista = "sobre-mi";

function obtenerIdDesdeHash(): string | null {
  const raw = window.location.hash?.replace("#", "").trim();
  return raw ? raw : null;
}

function mostrarVista(id: string) {
  const vistas = Array.from(document.querySelectorAll<HTMLElement>(".vista"));
  const existe = vistas.some((v) => v.id === id);
  const idFinal = existe ? id : ID_POR_DEFECTO;

  // Mostrar solo una
  for (const v of vistas) {
    v.classList.toggle("activa", v.id === idFinal);
  }

  // Marcar activo en la barra flotante
  const nav = document.querySelector('nav[aria-label="Navegacion"]');
  const items = Array.from(nav?.querySelectorAll<HTMLElement>(".item[data-vista]") ?? []);
  for (const it of items) {
    it.classList.toggle("activa", it.getAttribute("data-vista") === idFinal);
  }

  // Mantener la vista estable (sin saltos raros)
  const contenedor = document.getElementById("contenedor-vistas");
  if (contenedor) {
    contenedor.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Clicks del dock (sin scroll, solo cambia vista)
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

// Inicial
bindDock();
mostrarVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO);

// Back/forward del navegador
window.addEventListener("hashchange", () => {
  mostrarVista(obtenerIdDesdeHash() ?? ID_POR_DEFECTO);
});
