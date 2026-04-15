import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onfit-get-fit.vercel.app"),
  title: "Onfit Get Fit — Gym Boutique Premium en Buenos Aires",
  description:
    "Entrenamiento de élite en Buenos Aires. CrossFit, Boxing, HIIT, Yoga y más. +50 clases semanales con coaches certificados.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png", sizes: "any" }],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Onfit Get Fit — Gym Boutique Premium en Buenos Aires",
    description:
      "Entrenamiento de élite en Buenos Aires. CrossFit, Boxing, HIIT, Yoga y más. +50 clases semanales con coaches certificados.",
    locale: "es_AR",
    type: "website",
    url: "https://onfit-get-fit.vercel.app",
    siteName: "Onfit Get Fit",
    images: [{ url: "/logo.png", alt: "Onfit Get Fit" }],
  },
  twitter: {
    card: "summary",
    title: "Onfit Get Fit — Gym Boutique Premium en Buenos Aires",
    description:
      "Entrenamiento de élite en Buenos Aires. CrossFit, Boxing, HIIT, Yoga y más. +50 clases semanales con coaches certificados.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
