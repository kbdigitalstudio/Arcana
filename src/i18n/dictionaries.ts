import type { Locale } from "./config";

const es = {
  brand: {
    name: "ARCANA",
    descriptor: "Tarot · Astrología · Lecturas",
    concept: "Misterio sin cliché.",
    philosophy:
      "Las cartas no dictan tu destino. Revelan nuevas formas de interpretarlo.",
  },
  nav: {
    tarot: "Tarot",
    astrology: "Astrología",
    readings: "Lecturas",
    oracle: "El Oráculo",
    about: "Sobre Luna",
    book: "Reservar",
    menu: "Menú",
    close: "Cerrar",
  },
  hero: {
    eyebrow: "ARCANA — Estudio simbólico privado",
    line1: "Todo comienza",
    line2: "con una pregunta.",
    description:
      "Tarot, astrología y lecturas para mirar aquello que quizá todavía no has podido nombrar.",
    cta: "Explorar el Tarot",
    scroll: "Scroll to discover",
    cardCaption: "El arcano que te espera — tira para descubrir",
  },
  manifesto: {
    eyebrow: "Manifiesto",
    titleA: "No buscamos predecir el futuro.",
    titleB: "Buscamos comprender el presente.",
    body: "El Tarot puede convertirse en una herramienta para observar emociones, decisiones, relaciones y caminos desde otra perspectiva.",
  },
  doors: {
    eyebrow: "Tres puertas",
    title: "Elige por dónde entrar.",
    tarotTitle: "Tarot",
    tarotText: "Los símbolos tienen algo que decir.",
    tarotCta: "Explorar Tarot",
    astrologyTitle: "Astrología",
    astrologyText: "El cielo también cuenta historias.",
    astrologyCta: "Explorar Astrología",
    readingsTitle: "Lecturas",
    readingsText: "Hay preguntas que merecen tiempo.",
    readingsCta: "Ver lecturas",
  },
  tarotInteractive: {
    eyebrow: "Lectura simbólica",
    title: "Piensa en aquello que quieres comprender.",
    hint: "Elige una carta. Solo una.",
    choose: "Elegir",
    shuffle: "Barajar de nuevo",
    continueCta: "Continuar la lectura",
    note: "Una lectura simbólica — no una predicción. Una invitación a mirar desde otro ángulo.",
  },
  luna: {
    eyebrow: "La intérprete",
    name: "Luna Álvarez",
    role: "Tarotista · Astróloga · Intérprete simbólica",
    headlineA: "No leo tu futuro.",
    headlineB: "Leo los símbolos que pueden ayudarte a comprender tu presente.",
    body: "Hay preguntas que no necesitan una respuesta inmediata. Necesitan una mirada diferente. Mi trabajo es acompañarte en esa mirada: con calma, con rigor simbólico y sin artificios.",
    cta: "Conocer a Luna",
    portraitAlt:
      "Retrato editorial de Luna Álvarez en luz lateral sobre fondo oscuro",
  },
  readings: {
    eyebrow: "Sesiones privadas",
    title: "Elige tu lectura.",
    subtitle:
      "Cuatro formas de sentarse con las cartas. Todas íntimas, todas sin prisa.",
    duration: "Duración",
    format: "Modalidad",
    price: "Aportación",
    cta: "Reservar esta lectura",
    note: "Precios orientativos, editables. Escríbenos para confirmar disponibilidad.",
  },
  astrology: {
    eyebrow: "Astrología",
    title: "El cielo también habla.",
    body: "Una carta natal es una fotografía simbólica del cielo en el momento de tu nacimiento.",
    options: [
      {
        title: "Carta natal",
        text: "El mapa con el que llegaste. Luces, sombras y talentos en un solo retrato.",
      },
      {
        title: "Compatibilidad",
        text: "Dos cielos en diálogo. Lo que fluye, lo que fricciona, lo que enseña.",
      },
      {
        title: "Tránsitos",
        text: "El clima del momento. Qué ciclo atraviesas y cómo habitarlo.",
      },
    ],
    cta: "Pedir mi carta",
    chartNote:
      "Representación simbólica — la interpretación se realiza en sesión privada.",
  },
  oracle: {
    eyebrow: "El Oráculo",
    title: "EL ORÁCULO",
    bodyA: "Piensa en una pregunta.",
    bodyB: "No tienes que escribirla.",
    reveal: "Revelar",
    again: "Preguntar de nuevo",
    cta: "Solicitar una lectura privada",
    note: "El oráculo sugiere. Tú interpretas.",
  },
  testimonials: {
    eyebrow: "Cartas recibidas",
    title: "Lo que queda después.",
  },
  finalCta: {
    titleA: "¿Qué pregunta",
    titleB: "traes contigo?",
    cta: "Reservar una lectura",
    note: "Sesiones íntimas · Presenciales y en línea",
  },
  footer: {
    tagline: "Misterio sin cliché.",
    explore: "Explorar",
    connect: "Conectar",
    instagram: "Instagram",
    contact: "Contacto",
    rights: "© 2026 ARCANA",
    studio: "Una experiencia de KB Digital Studio",
  },
  pages: {
    tarotTitle: "El Tarot",
    tarotIntro:
      "Setenta y ocho símbolos. Una conversación contigo. El Tarot de ARCANA no sentencia: ilumina ángulos que aún no habías mirado.",
    astrologyTitle: "La Astrología",
    astrologyIntro:
      "El cielo también cuenta historias. Leemos tu carta natal como quien lee una carta personal: con atención y sin prisa.",
    readingsTitle: "Las Lecturas",
    readingsIntro:
      "Sesiones privadas de tarot y astrología. Elige la profundidad que tu pregunta necesita.",
    oracleTitle: "El Oráculo",
    oracleIntro:
      "Una pregunta, una carta, un momento de silencio. Entra cuando estés lista.",
    aboutTitle: "Sobre Luna",
    aboutIntro:
      "Tarotista, astróloga e intérprete simbólica. Una mirada contemporánea sobre un lenguaje antiguo.",
    back: "Volver al inicio",
  },
  whatsapp: {
    label: "Hablar con Luna por WhatsApp",
    hover: "Hablar con Luna",
    tooltip: "Hablar con Luna por WhatsApp",
  },
  misc: {
    close: "Cerrar",
    loading: "Cargando…",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  brand: {
    name: "ARCANA",
    descriptor: "Tarot · Astrology · Readings",
    concept: "Mystery without cliché.",
    philosophy:
      "The cards do not dictate your fate. They reveal new ways of reading it.",
  },
  nav: {
    tarot: "Tarot",
    astrology: "Astrology",
    readings: "Readings",
    oracle: "The Oracle",
    about: "About Luna",
    book: "Book",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    eyebrow: "ARCANA — A private symbolic studio",
    line1: "Everything begins",
    line2: "with a question.",
    description:
      "Tarot, astrology and readings to look at what you may not yet have been able to name.",
    cta: "Explore the Tarot",
    scroll: "Scroll to discover",
    cardCaption: "The arcana awaiting you — draw to discover",
  },
  manifesto: {
    eyebrow: "Manifesto",
    titleA: "We do not seek to predict the future.",
    titleB: "We seek to understand the present.",
    body: "Tarot can become a tool for observing emotions, decisions, relationships and paths from another perspective.",
  },
  doors: {
    eyebrow: "Three doors",
    title: "Choose where to enter.",
    tarotTitle: "Tarot",
    tarotText: "Symbols have something to say.",
    tarotCta: "Explore Tarot",
    astrologyTitle: "Astrology",
    astrologyText: "The sky tells stories too.",
    astrologyCta: "Explore Astrology",
    readingsTitle: "Readings",
    readingsText: "Some questions deserve time.",
    readingsCta: "View readings",
  },
  tarotInteractive: {
    eyebrow: "A symbolic reading",
    title: "Think of what you wish to understand.",
    hint: "Choose one card. Just one.",
    choose: "Choose",
    shuffle: "Shuffle again",
    continueCta: "Continue the reading",
    note: "A symbolic reading — not a prediction. An invitation to look from another angle.",
  },
  luna: {
    eyebrow: "The reader",
    name: "Luna Álvarez",
    role: "Tarot reader · Astrologer · Symbolic interpreter",
    headlineA: "I don't read your future.",
    headlineB: "I read the symbols that can help you understand your present.",
    body: "Some questions don't need an immediate answer. They need a different gaze. My work is to accompany you in that gaze: calmly, with symbolic rigour and without artifice.",
    cta: "Meet Luna",
    portraitAlt:
      "Editorial portrait of Luna Álvarez in side light on a dark background",
  },
  readings: {
    eyebrow: "Private sessions",
    title: "Choose your reading.",
    subtitle:
      "Four ways to sit with the cards. All intimate, none rushed.",
    duration: "Length",
    format: "Format",
    price: "Exchange",
    cta: "Book this reading",
    note: "Indicative pricing, editable. Write to confirm availability.",
  },
  astrology: {
    eyebrow: "Astrology",
    title: "The sky speaks too.",
    body: "A natal chart is a symbolic photograph of the sky at the moment of your birth.",
    options: [
      {
        title: "Natal chart",
        text: "The map you arrived with. Lights, shadows and talents in a single portrait.",
      },
      {
        title: "Compatibility",
        text: "Two skies in dialogue. What flows, what frictions, what teaches.",
      },
      {
        title: "Transits",
        text: "The weather of the moment. Which cycle you cross and how to inhabit it.",
      },
    ],
    cta: "Request my chart",
    chartNote:
      "Symbolic representation — interpretation happens in private session.",
  },
  oracle: {
    eyebrow: "The Oracle",
    title: "THE ORACLE",
    bodyA: "Think of a question.",
    bodyB: "You don't have to write it down.",
    reveal: "Reveal",
    again: "Ask again",
    cta: "Request a private reading",
    note: "The oracle suggests. You interpret.",
  },
  testimonials: {
    eyebrow: "Letters received",
    title: "What remains afterwards.",
  },
  finalCta: {
    titleA: "What question",
    titleB: "do you carry with you?",
    cta: "Book a reading",
    note: "Intimate sessions · In person and online",
  },
  footer: {
    tagline: "Mystery without cliché.",
    explore: "Explore",
    connect: "Connect",
    instagram: "Instagram",
    contact: "Contact",
    rights: "© 2026 ARCANA",
    studio: "An experience by KB Digital Studio",
  },
  pages: {
    tarotTitle: "The Tarot",
    tarotIntro:
      "Seventy-eight symbols. A conversation with yourself. ARCANA's Tarot does not sentence: it lights angles you had not yet seen.",
    astrologyTitle: "Astrology",
    astrologyIntro:
      "The sky tells stories too. We read your natal chart as one reads a personal letter: with attention and without hurry.",
    readingsTitle: "The Readings",
    readingsIntro:
      "Private tarot and astrology sessions. Choose the depth your question needs.",
    oracleTitle: "The Oracle",
    oracleIntro:
      "One question, one card, one moment of silence. Enter when you are ready.",
    aboutTitle: "About Luna",
    aboutIntro:
      "Tarot reader, astrologer and symbolic interpreter. A contemporary gaze upon an ancient language.",
    back: "Back home",
  },
  whatsapp: {
    label: "Talk to Luna on WhatsApp",
    hover: "Talk to Luna",
    tooltip: "Talk to Luna on WhatsApp",
  },
  misc: {
    close: "Close",
    loading: "Loading…",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
