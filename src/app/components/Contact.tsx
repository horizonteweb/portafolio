export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 p-6 rounded-xl my-6">
      <h2 className="text-xl font-semibold mb-2">Contacto</h2>
      <p className="text-gray-600">
        ¿Querés trabajar juntos? Completá el formulario y te responderé lo antes posible.
      </p>
      <form
        className="flex flex-col gap-3 mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href =
            "mailto:horizonteweb26@gmail.com?subject=Contacto desde portfolio";
        }}
      >
        <input className="p-2 border rounded-md" placeholder="Tu nombre" required />
        <input className="p-2 border rounded-md" type="email" placeholder="Tu email" required />
        <select className="p-2 border rounded-md" required>
          <option value="">Seleccioná un servicio</option>
          <option value="landing">Landing Pages</option>
          <option value="portfolio">Portafolios Web</option>
          <option value="comercial">Sitios Web Comerciales</option>
          <option value="apps">Personalizables</option>
        </select>
        <textarea className="p-2 border rounded-md min-h-[100px]" placeholder="Mensaje" required />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </section>
  );
}
