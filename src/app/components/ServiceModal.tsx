"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface ServiceModalProps {
  service: {
    id: string;
    title: string;
    description: string;
    benefits: string;
    imagen?: string;
  };
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        <h2 className="mb-2 text-2xl font-bold">{service.title}</h2>
        <p className="mb-4 text-gray-600">{service.description}</p>

        <h3 className="mb-2 text-lg font-semibold">Beneficios:</h3>
        <ul className="mb-4 list-disc pl-5 text-gray-700">
          {service.benefits.split(",").map((b, i) => (
            <li key={i}>{b.trim()}</li>
          ))}
        </ul>

        {service.imagen && (
          <>
            <h3 className="mb-2 text-lg font-semibold">Boceto:</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="relative h-100 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={service.imagen}
                  alt={`Boceto de ${service.title}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
