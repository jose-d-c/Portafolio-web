export const perfil = {
  nombre: "Jose David Consuegra Medina",
  rol: "Ingeniero de sistemas",
  enfoque:
    "Enfoque en ciberseguridad • gestión de redes • manejo y diseño de servidores y centros de datos",
  correo: "mailto:josedconsuegram@gmail.com",
  whatsapp: "https://wa.me/573012052740",
  foto: "/imagenes/yo.jpg",
};

export const sobreMi = {
  estudios: [
    {
      titulo: "Ingeniería de Sistemas (en curso)",
      detalle: "Universidad Industrial de Santander (UIS).",
    },
  ],
  experiencia: [
    {
      titulo: "Sin experiencia laboral formal aún",
      detalle: "Perfil laboral orientado a soporte técnico, redes y ciberseguridad con experiencia en proyectos académicos y personales.",
    },
  ],
  certificaciones: [
    {
      titulo: "Certificaciones por definir",
      detalle: "Aquí se agregarán cursos, certificaciones y logros verificables.",
    },
  ],
};

export const proyectos = [
  {
    titulo: "Portafolio base",
    descripcion:
      "Proyecto principal para consolidar identidad profesional, arquitectura web y despliegue continuo en Vercel.",
    etiquetas: ["Astro", "UI", "Deploy"],
  },
  {
    titulo: "Laboratorio de redes",
    descripcion:
      "Espacio de pruebas para prácticas de direccionamiento, simulación de topologías y documentación técnica.",
    etiquetas: ["Redes", "Práctica"],
  },
];

export const proyectosTemporales = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  titulo: `Programa temporal ${String(i + 1).padStart(2, "0")}`,
  descripcion:
    "Bloque temporal para ejercicios de algoritmos, evidencias y entregas académicas de corta duración.",
  enlace: `/programas-temporales/programa-${String(i + 1).padStart(2, "0")}`,
}));

export const habilidades = [
  { nombre: "Linux", estado: "Dominado", icono: "/icons/linux.svg", tono: "skill-linux" },
  { nombre: "Redes", estado: "Por aprender", icono: "/icons/network.svg", tono: "skill-redes" },
  { nombre: "Servidores", estado: "Por aprender", icono: "/icons/server.svg", tono: "skill-servidores" },
  { nombre: "Ciberseguridad", estado: "Por aprender", icono: "/icons/shield.svg", tono: "skill-ciber" },
];
