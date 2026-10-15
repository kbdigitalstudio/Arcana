export interface Reading {
  id: string;
  key: "amor" | "camino" | "claridad" | "profunda";
  nameEs: string;
  nameEn: string;
  linesEs: string[];
  linesEn: string[];
  descriptionEs: string;
  descriptionEn: string;
  /** Placeholder, clearly editable */
  duration: string;
  formatEs: string;
  formatEn: string;
  price: string;
}

export const readings: Reading[] = [
  {
    id: "amor",
    key: "amor",
    nameEs: "Amor",
    nameEn: "Love",
    linesEs: ["Relaciones", "Sentimientos", "Conexiones"],
    linesEn: ["Relationships", "Feelings", "Connections"],
    descriptionEs:
      "Para mirar un vínculo con honestidad: lo que une, lo que tensa y lo que pide ser nombrado. Sin juicios, sin sentencias.",
    descriptionEn:
      "To look at a bond honestly: what joins, what strains and what asks to be named. No judgments, no sentences.",
    duration: "45 min",
    formatEs: "En línea / Presencial",
    formatEn: "Online / In person",
    price: "€60 · editable",
  },
  {
    id: "camino",
    key: "camino",
    nameEs: "Camino",
    nameEn: "Path",
    linesEs: ["Propósito", "Decisiones", "Dirección"],
    linesEn: ["Purpose", "Decisions", "Direction"],
    descriptionEs:
      "Para momentos de encrucijada. Ordenamos las opciones sobre la mesa y leemos qué camino resuena con quien estás siendo.",
    descriptionEn:
      "For crossroad moments. We lay the options on the table and read which path resonates with who you are becoming.",
    duration: "60 min",
    formatEs: "En línea / Presencial",
    formatEn: "Online / In person",
    price: "€80 · editable",
  },
  {
    id: "claridad",
    key: "claridad",
    nameEs: "Claridad",
    nameEn: "Clarity",
    linesEs: ["Una situación", "Una pregunta", "Una perspectiva"],
    linesEn: ["One situation", "One question", "One perspective"],
    descriptionEs:
      "Una sola pregunta, mirada a fondo. Ideal cuando algo concreto ocupa tu mente y necesitas verlo desde otro ángulo.",
    descriptionEn:
      "A single question, seen in depth. Ideal when something specific occupies your mind and you need another angle.",
    duration: "30 min",
    formatEs: "En línea",
    formatEn: "Online",
    price: "€40 · editable",
  },
  {
    id: "profunda",
    key: "profunda",
    nameEs: "Profunda",
    nameEn: "Deep",
    linesEs: ["Una lectura completa", "y personalizada"],
    linesEn: ["A complete", "personal reading"],
    descriptionEs:
      "La experiencia ARCANA completa: tarot y astrología en diálogo. Un retrato simbólico de tu momento, sin prisa y en profundidad.",
    descriptionEn:
      "The complete ARCANA experience: tarot and astrology in dialogue. A symbolic portrait of your moment, unhurried and in depth.",
    duration: "90 min",
    formatEs: "Presencial / Videollamada",
    formatEn: "In person / Video call",
    price: "€120 · editable",
  },
];
