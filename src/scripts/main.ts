const views = Array.from(document.querySelectorAll<HTMLElement>(".view"));
const navButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".nav-btn[data-target]"));

function setView(targetId: string) {
  for (const view of views) {
    const active = view.id === targetId;
    view.classList.toggle("active", active);
    view.setAttribute("aria-hidden", active ? "false" : "true");
  }

  for (const button of navButtons) {
    const active = button.dataset.target === targetId;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  }
}

for (const button of navButtons) {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    if (!targetId) return;
    setView(targetId);
  });
}

const toggleThemeButton = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
toggleThemeButton?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Ignored
  }
});
