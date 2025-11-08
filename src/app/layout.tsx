import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julio Bachmann | Desarrollo Web & Apps",
  description: "Portafolio profesional de servicios: landing pages, portafolios, sitios web y apps móviles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
