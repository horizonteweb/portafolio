export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 py-4">
      <nav className="flex justify-end gap-6 text-sm text-gray-600">
        <a href="#about">Sobre nosotros</a>
        <a href="#projects">Proyectos</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}
