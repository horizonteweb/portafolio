"use client";
import { useState } from "react";
import { services } from "../data/data";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="services" className="p-6 rounded-xl my-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Servicios</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(services).map(([key, s]) => (
          <div
            key={key}
            className="p-4 border rounded-lg hover:shadow-md cursor-pointer transition"
            onClick={() => setSelected(s.id)}
          >
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-500">{s.description}</p>
            <p className="text-sm text-gray-600">{s.benefits}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ServiceModal
          service={services[selected]}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
