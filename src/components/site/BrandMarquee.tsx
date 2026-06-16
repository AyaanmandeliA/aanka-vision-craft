import { brands } from "./brand-data";

/**
 * Slow horizontal marquee of brand names. Pure CSS animation, paused on hover.
 * Acts as a subtle trust strip between sections.
 */
export function BrandMarquee() {
  // Duplicate the list so the loop is seamless when translateX(-50%)
  const items = [...brands, ...brands];

  return (
    <section
      aria-label="Aanka Group brands"
      className="marquee-pause overflow-hidden border-y border-platinum/50 bg-alabaster py-10 text-obsidian"
    >
      <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap px-8 md:gap-24">
        {items.map((b, i) => (
          <div
            key={`${b.slug}-${i}`}
            className="flex items-center gap-16 md:gap-24"
          >
            <span className="font-serif text-2xl font-light italic text-obsidian/85 md:text-3xl">
              {b.name}
            </span>
            <span className="block h-1.5 w-1.5 rotate-45 bg-bronze" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
