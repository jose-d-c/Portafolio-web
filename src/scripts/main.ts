const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
const navButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".nav-btn[data-target]"));
const detailsElements = Array.from(document.querySelectorAll<HTMLDetailsElement>("details"));
const toggleThemeButton = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
const themeLabel = document.querySelector<HTMLElement>("[data-theme-label]");
const interactiveGlowElements = Array.from(document.querySelectorAll<HTMLElement>(".interactive-glow"));
const navigation = document.querySelector<HTMLElement>(".app-nav");
let currentSectionId = "";

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function updateThemeButton() {
  const theme = getCurrentTheme();
  toggleThemeButton?.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  toggleThemeButton?.setAttribute(
    "aria-label",
    theme === "light" ? "Cambiar al tema oscuro" : "Cambiar al tema claro"
  );

  if (themeLabel) {
    themeLabel.textContent = theme === "light" ? "Claro" : "Oscuro";
  }
}

function updateDetailsLabels() {
  for (const detail of detailsElements) {
    const label = detail.querySelector<HTMLElement>(".details-state");
    if (!label) continue;
    label.textContent = detail.open ? "Ocultar" : "Desplegar";
  }
}

function getNavOffset() {
  return (navigation?.offsetHeight ?? 0) + 24;
}

function setActiveSection(targetId: string, updateHistory = true) {
  if (!targetId) return;
  currentSectionId = targetId;

  for (const button of navButtons) {
    const active = button.dataset.target === targetId;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  }

  if (!updateHistory) return;

  try {
    history.replaceState(null, "", `#${targetId}`);
  } catch {
    // Ignored
  }
}

function scrollToSection(targetId: string, behavior: ScrollBehavior = "smooth") {
  const section = sections.find((item) => item.id === targetId);
  if (!section) return;

  const top = section.getBoundingClientRect().top + window.scrollY - getNavOffset();
  window.scrollTo({ top: Math.max(0, top), behavior });
}

for (const button of navButtons) {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    if (!targetId) return;
    setActiveSection(targetId);
    scrollToSection(targetId);
  });

  button.addEventListener("keydown", (event) => {
    const currentIndex = navButtons.indexOf(button);
    if (currentIndex === -1) return;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      navButtons[(currentIndex + 1) % navButtons.length]?.focus();
    }

    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      navButtons[(currentIndex - 1 + navButtons.length) % navButtons.length]?.focus();
    }

    if (event.key === "Home") {
      event.preventDefault();
      navButtons[0]?.focus();
    }

    if (event.key === "End") {
      event.preventDefault();
      navButtons.at(-1)?.focus();
    }
  });
}

if (sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id && visible.target.id !== currentSectionId) {
        setActiveSection(visible.target.id);
      }
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );

  for (const section of sections) {
    observer.observe(section);
  }
}

toggleThemeButton?.addEventListener("click", () => {
  const current = getCurrentTheme();
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Ignored
  }
  updateThemeButton();
});

for (const detail of detailsElements) {
  detail.addEventListener("toggle", updateDetailsLabels);
}

const initialSectionFromHash = window.location.hash ? window.location.hash.slice(1) : "";
if (initialSectionFromHash && sections.some((section) => section.id === initialSectionFromHash)) {
  setActiveSection(initialSectionFromHash, false);
  scrollToSection(initialSectionFromHash, "auto");
} else if (sections[0]) {
  setActiveSection(sections[0].id, false);
}

updateThemeButton();
updateDetailsLabels();

for (const element of interactiveGlowElements) {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();
    const x = `${event.clientX - rect.left}px`;
    const y = `${event.clientY - rect.top}px`;
    element.style.setProperty("--spot-x", x);
    element.style.setProperty("--spot-y", y);
  });
}

try {
  console.log(
    "%cPortafolio JDC",
    "font-family:monospace;font-size:14px;font-weight:700;color:#00e5ff"
  );
  console.log(
    "%cAstro + CSS tokens + interacciones inspiradas en JDC",
    "font-family:monospace;font-size:11px;color:#9aa3c8"
  );
} catch {
  // Ignored
}
