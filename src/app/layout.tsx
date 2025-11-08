import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HORIZONTE WEB | Desarrollo Web & Apps",
    template: "%s | HORIZONTE WEB",
  },
  description:
    "Portafolio profesional de servicios: landing pages, portafolios, sitios web y apps móviles. Desarrollo web, diseño UX/UI y apps móviles.",
  metadataBase: new URL("https://horizonteweb.vercel.app/"),
  applicationName: "HORIZONTE WEB",
  authors: [{ name: "HORIZONTE WEB", url: "https://horizonteweb.vercel.app/" }],
  keywords: [
    "desarrollo web",
    "apps móviles",
    "landing pages",
    "portafolio",
    "diseño web",
    "desarrollo frontend",
    "desarrollo backend",
  ],
  openGraph: {
    title: "HORIZONTE WEB | Desarrollo Web & Apps",
    description:
      "Portafolio profesional de servicios: landing pages, portafolios, sitios web y apps móviles.",
    url: "https://horizonteweb.vercel.app/", 
    siteName: "HORIZONTE WEB",
    images: [
      {
        url: "https://horizonteweb.vercel.app/portadaHW.png", 
        width: 1200,
        height: 630,
        alt: "HORIZONTE WEB - Desarrollo Web & Apps",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HORIZONTE WEB | Desarrollo Web & Apps",
    description:
      "Portafolio profesional de servicios: landing pages, portafolios, sitios web y apps móviles.",
    images: ["https://horizonteweb.vercel.app/portadaHW.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  }, 
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://horizonteweb.vercel.app/", 
  },
  verification: {
    google: "gHhB_MWI_eqo1f7g1cXfo_KfVkptyzM0maPIjUqMuDE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HORIZONTE WEB",
    url: "https://horizonteweb.vercel.app/",
    logo: "https://horizonteweb.vercel.app/portadaHW.png",
    sameAs: [
      "https://www.instagram.com/horizonteweb26/",
    ],
  };

  return (
    <html lang="es">
      <body className="bg-white text-gray-900 font-sans">
        <Script id="ld+json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        {children}
      </body>
    </html>
  );
}
