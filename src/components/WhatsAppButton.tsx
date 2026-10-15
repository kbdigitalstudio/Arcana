"use client";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { whatsappLink } from "@/lib/whatsapp";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2.003c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.13-1.34a9.94 9.94 0 0 0 4.91 1.33c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 1.8c4.54 0 8.2 3.66 8.2 8.2s-3.66 8.2-8.2 8.2a8.16 8.16 0 0 1-4.2-1.15l-.3-.18-3.06.8.82-2.98-.2-.31a8.16 8.16 0 0 1-1.26-4.38c0-4.54 3.66-8.2 8.2-8.2Zm-3.1 4.1c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.7 4.16 3.7 2.06.84 2.48.68 2.92.64.44-.04 1.44-.6 1.64-1.16.2-.56.2-1.04.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a5.4 5.4 0 0 1-1.6-.98c-.6-.54-1-1.18-1.12-1.38-.12-.2-.02-.32.1-.42.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.74-1.8-.2-.46-.4-.4-.54-.4h-.46Z" />
    </svg>
  );
}

/** Elegant floating WhatsApp contact — circular, expands on hover. */
export default function WhatsAppButton({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <a
      href={whatsappLink(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.whatsapp.label}
      title={dict.whatsapp.tooltip}
      className="group fixed right-4 bottom-4 z-[60] flex items-center gap-0 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_28px_rgba(37,211,102,0.35)] transition-all duration-300 hover:gap-2.5 hover:pr-5 hover:shadow-[0_10px_36px_rgba(37,211,102,0.5)] sm:right-6 sm:bottom-6 sm:p-4"
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
      <span className="max-w-0 overflow-hidden text-[13px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
        {dict.whatsapp.hover}
      </span>
    </a>
  );
}
