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
  title: "Onfit Get Fit — Gym Boutique Premium en Buenos Aires",
  description:
    "Entrenamiento de élite en Buenos Aires. CrossFit, Boxing, HIIT, Yoga y más. +50 clases semanales con coaches certificados.",
  openGraph: {
    title: "Onfit Get Fit — Gym Boutique Premium en Buenos Aires",
    description:
      "Entrenamiento de élite en Buenos Aires. CrossFit, Boxing, HIIT, Yoga y más. +50 clases semanales con coaches certificados.",
    locale: "es_AR",
    type: "website",
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
