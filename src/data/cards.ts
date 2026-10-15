export interface ArcanaCard {
  id: string;
  number: string;
  nameEs: string;
  nameEn: string;
  /** Path under /cards — replaceable placeholder artwork */
  image: string;
  interpretationEs: string;
  interpretationEn: string;
}

export const cards: ArcanaCard[] = [
  {
    id: "la-estrella",
    number: "XVII",
    nameEs: "La Estrella",
    nameEn: "The Star",
    image: "/cards/estrella.svg",
    interpretationEs:
      "Hay algo que estás intentando reconstruir. No necesitas volver al lugar donde comenzó. Necesitas decidir qué quieres llevar contigo.",
    interpretationEn:
      "There is something you are trying to rebuild. You don't need to return to where it began. You need to decide what you want to carry with you.",
  },
  {
    id: "la-luna",
    number: "XVIII",
    nameEs: "La Luna",
    nameEn: "The Moon",
    image: "/cards/luna.svg",
    interpretationEs:
      "Hay cosas que todavía no necesitan ser resueltas. Primero necesitan ser comprendidas.",
    interpretationEn:
      "Some things don't need to be resolved yet. First they need to be understood.",
  },
  {
    id: "el-ermitano",
    number: "IX",
    nameEs: "El Ermitaño",
    nameEn: "The Hermit",
    image: "/cards/ermitano.svg",
    interpretationEs:
      "La respuesta que buscas fuera lleva tiempo esperándote dentro. Apaga el ruido unos días y escucha lo que queda.",
    interpretationEn:
      "The answer you seek outside has been waiting inside for a while. Turn the noise down for a few days and listen to what remains.",
  },
  {
    id: "la-templanza",
    number: "XIV",
    nameEs: "La Templanza",
    nameEn: "Temperance",
    image: "/cards/templanza.svg",
    interpretationEs:
      "No es el momento de forzar. Es el momento de mezclar con paciencia: lo que eres y lo que estás llegando a ser.",
    interpretationEn:
      "This is not the moment to force. It is the moment to blend with patience: who you are and who you are becoming.",
  },
  {
    id: "la-fuerza",
    number: "XI",
    nameEs: "La Fuerza",
    nameEn: "Strength",
    image: "/cards/fuerza.svg",
    interpretationEs:
      "Tu suavidad no es debilidad. Es la forma más honesta de tu valentía. Sostén, no aprietes.",
    interpretationEn:
      "Your softness is not weakness. It is the most honest form of your courage. Hold, don't grip.",
  },
  {
    id: "el-mundo",
    number: "XXI",
    nameEs: "El Mundo",
    nameEn: "The World",
    image: "/cards/mundo.svg",
    interpretationEs:
      "Un ciclo se está cerrando aunque aún no lo celebres. Reconoce lo recorrido antes de preguntar qué sigue.",
    interpretationEn:
      "A cycle is closing even if you haven't celebrated it yet. Honour how far you've come before asking what's next.",
  },
];

export function getCardById(id: string): ArcanaCard | undefined {
  return cards.find((c) => c.id === id);
}
