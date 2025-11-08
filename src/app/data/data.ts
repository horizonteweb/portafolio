export const services: Record<
  string,
  { id: string; title: string; description: string; benefits: string; imagen?: string }
> = {
  landing: {
    id: "landing",
    title: "Landing Pages",
    description:
      "Las landing pages están diseñadas para convertir visitas en clientes.",
    benefits: "Carga rápida, Optimización SEO, Foco en conversiones",
    imagen: "/bocetos-proyectos/landingpagehw.png",
  },
  portfolio: {
    id: "portfolio",
    title: "Portafolios Web",
    description:
      "Un portafolio profesional que muestra tus proyectos y experiencia.",
    benefits: "Galería de proyectos, Diseño responsive, Sección 'Sobre mí'",
    imagen: "/bocetos-proyectos/portafoliohw.png",
  },
  comerciales: {
    id: "comerciales",
    title: "Sitios Web Comerciales",
    description:
      "Páginas pensadas para empresas y negocios, con catálogo y e-commerce.",
    benefits: "Carrito de compras, Gestión de productos, Escalabilidad",
    imagen: "/bocetos-proyectos/sitiowebhw.png",
  },
  personalizables: {
    id: "personalizables",
    title: "Páginas Personalizables",
    description:
      "Sitios diseñados a medida, adaptados a tus necesidades e identidad.",
    benefits: "Diseño único, Integraciones a medida, Escalable y flexible",
  },
};
