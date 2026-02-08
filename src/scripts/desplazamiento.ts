/**
 * Archivo: src/scripts/desplazamiento.ts
 * Responsabilidad: marcar item activo del dock segun la seccion visible.
 */

const nav = document.querySelector('nav[aria-label="Navegacion"]');
const links = Array.from(nav?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]') ?? []);

const porId = new Map<string, HTMLAnchorElement>();
for (const a of links) {
  const id = a.getAttribute("href")?.slice(1);
  if (id) porId.set(id, a);
}

function activar(id: string) {
  for (const [, a] of porId) a.classList.remove("activa");
  const actual = porId.get(id);
  if (actual) actual.classList.add("activa");
}

const secciones = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));

const obs = new IntersectionObserver(
  (entradas) => {
    const visible = entradas
      .filter((e) => e.isIntersecting)
      .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

    if (visible?.target?.id) activar(visible.target.id);
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.2, 0.3] }
);

secciones.forEach((s) => obs.observe(s));
