import type { Locale } from "@/i18n/config";

/**
 * WhatsApp contact — replace with the real number (international format,
 * digits only, e.g. "34600112233").
 */
export const WHATSAPP_NUMBER = "REPLACE_WITH_NUMBER";

const MESSAGES: Record<Locale, string> = {
  es: "Hola Luna, me gustaría consultar sobre una lectura de ARCANA.",
  en: "Hi Luna, I'd like to ask about a reading at ARCANA.",
};

export function whatsappLink(locale: Locale): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGES[locale])}`;
}
