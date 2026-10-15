import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { canonical, siteDescription, siteTitle } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";
import HtmlLang from "@/components/HtmlLang";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "es";
  const title = siteTitle(locale);
  const description = siteDescription(locale);
  return {
    title: { default: title, template: `%s · ARCANA` },
    description,
    alternates: {
      canonical: canonical(locale),
      languages: {
        es: canonical("es"),
        en: canonical("en"),
        "x-default": canonical("es"),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_ES",
      siteName: "ARCANA",
      title,
      description,
      url: canonical(locale),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ARCANA",
    slogan:
      locale === "es" ? "Misterio sin cliché." : "Mystery without cliché.",
    description: siteDescription(locale),
    url: canonical(locale),
    founder: {
      "@type": "Person",
      name: "Luna Álvarez",
      jobTitle:
        locale === "es"
          ? "Tarotista · Astróloga · Intérprete simbólica"
          : "Tarot reader · Astrologer · Symbolic interpreter",
    },
    inLanguage: [locale],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <>
      <HtmlLang locale={locale} />
      <JsonLd locale={locale} />
      <Preloader descriptor={dict.brand.descriptor} />
      <Navbar locale={locale} dict={dict} />
      <PageTransition>
        <main className="flex-1">{children}</main>
      </PageTransition>
      <Footer locale={locale} dict={dict} />
      <WhatsAppButton locale={locale} dict={dict} />
    </>
  );
}
