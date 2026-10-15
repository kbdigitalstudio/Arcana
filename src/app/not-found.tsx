import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-obsidian px-6 text-center">
      <p className="font-display text-sm tracking-[0.4em] text-gold">404</p>
      <h1 className="font-display mt-4 text-4xl text-ivory sm:text-5xl">
        Esta página aún no ha sido escrita.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/60">
        This page has not been written yet.
      </p>
      <div className="mt-10 flex gap-6 text-[11px] tracking-[0.24em] uppercase">
        <Link
          href="/es"
          className="border border-gold/60 px-6 py-3 text-ivory transition-colors hover:bg-gold hover:text-obsidian"
        >
          ES — Inicio
        </Link>
        <Link
          href="/en"
          className="border border-gold/60 px-6 py-3 text-ivory transition-colors hover:bg-gold hover:text-obsidian"
        >
          EN — Home
        </Link>
      </div>
    </section>
  );
}
