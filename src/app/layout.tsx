import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcana.studio"),
  title: {
    default: "ARCANA — Tarot, Astrología y Lecturas",
    template: "%s · ARCANA",
  },
  description:
    "Tarot, astrología y lecturas íntimas con Luna Álvarez. Misterio sin cliché.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${manrope.variable} h-full`}>
      <body className="font-sans flex min-h-full flex-col bg-obsidian text-ivory antialiased">
        {children}
      </body>
    </html>
  );
}
