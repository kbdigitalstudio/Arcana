import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ARCANA — Tarot, Astrología y Lecturas",
    short_name: "ARCANA",
    description:
      "Tarot, astrología y lecturas íntimas con Luna Álvarez. Misterio sin cliché.",
    start_url: "/es",
    display: "standalone",
    background_color: "#090909",
    theme_color: "#090909",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
