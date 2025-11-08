"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Landing Page",
    description: "Para promocion de la fabrica La Conquista.",
    link: "",
    images: ["/img-proyectos/landingpageLC1.png", "/img-proyectos/landingpageLC2.png","/img-proyectos/landingpageLC3.png"],
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Sitio web utilizando HTML y CSS.",
    link: "https://github.com/julio23b/Portafolio",
    images: ["/img-proyectos/PortafolioJ.jpeg", "/img-proyectos/PortafolioJ1.jpeg","/img-proyectos/PortafolioJ2.jpeg"],
  },
  {
    id: 3,
    title: "Pagina de ventas",
    description: "E-commerce.",
    link: "https://github.com/julio23b/La-Conquista-Web",
    images: [
      "/img-proyectos/la-conquista1.webp",
      "/img-proyectos/laconquistareact2.jpeg",
      "/img-proyectos/laconquistareact4.jpeg",
      "/img-proyectos/laconquistareact3.jpeg",
      "/img-proyectos/laconquistareact5.jpeg",
    ],
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));
  };

  const nextImage = () => {
    setIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition flex flex-col">
      <div className="relative w-full h-50 mb-4">
        <Image
          src={project.images[index]}
          alt={project.title}
          fill
          className="rounded-md object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        className="text-blue-600 hover:underline mt-auto"
      >
        Ver más →
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="p-6 rounded-xl my-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Proyectos</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
