import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope,FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center gap-8 py-12">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">HORIZONTE WEB</h1>
        <p className="text-blue-600 font-semibold mt-2">
          Desarrollo Web
        </p>
        <p className="text-gray-600 mt-4 max-w-xl">
          Ayudamos a emprendedores y negocios a tener presencia digital con
          soluciones modernas, rápidas y atractivas.
        </p>

        <div className="flex gap-3 mt-6">
          <a href="#projects" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Ver proyectos
          </a>
          <a href="mailto:horizonteweb26@gmail.com" className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50">
            Contactame
          </a>
        </div>

        <div className="flex gap-4 mt-6">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          <a href="mailto:horizonteweb26@gmail.com"><FaEnvelope size={24} /></a>
          <a href="https://www.instagram.com/horizonteweb26/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
        </div>
      </div>

      <div className="flex-shrink-0">
        <Image src="/portadaHW.png" alt="HORIZONTE WEB" width={200} height={200} className="rounded-2xl shadow-lg" />
      </div>
    </section>
  );
}
