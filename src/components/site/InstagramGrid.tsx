import { Instagram, ArrowUpRight } from "lucide-react";
import khau from "@/assets/brands/khau-galli.jpg";
import khauThali from "@/assets/brands/khau-thali.jpg";
import zaika from "@/assets/brands/zaika.jpg";
import zaika2 from "@/assets/brands/zaika-2.jpg";
import gents from "@/assets/brands/gents.webp";
import ladies from "@/assets/brands/ladies.jpg";
import deco from "@/assets/brands/deco.jpg";
import zaikaInterior from "@/assets/brands/zaika-interior.jpg";

/**
 * Curated Instagram-style grid. Tiles are placeholders pulled from the brand
 * library until the real Instagram handle + Graph API access is provided.
 * Drop-in replacement: swap `tiles` with API data once available.
 */
const tiles = [
  { img: khau, brand: "Khau Galli", caption: "A celebration of street-food culture." },
  { img: zaika, brand: "House of Zaika", caption: "Slow-cooked richness, every evening." },
  { img: gents, brand: "Cutting Edge Gents", caption: "Precision, personalisation, presence." },
  { img: ladies, brand: "Cutting Edge Ladies", caption: "Self-care as a daily ritual." },
  { img: deco, brand: "Deco Vibes", caption: "Interiors with intention." },
  { img: zaikaInterior, brand: "House of Zaika", caption: "Designed for the senses." },
  { img: khauThali, brand: "Khau Galli", caption: "Shared plates, shared moments." },
  { img: zaika2, brand: "House of Zaika", caption: "Hospitality, our way." },
];

interface InstagramGridProps {
  handle?: string;
  href?: string;
  variant?: "light" | "dark";
}

export function InstagramGrid({
  handle = "@aankagroup",
  href = "https://www.instagram.com/aankagroup",
  variant = "light",
}: InstagramGridProps) {
  const dark = variant === "dark";
  return (
    <section className={dark ? "bg-obsidian text-alabaster" : "bg-alabaster text-obsidian"}>
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-36">
        <div className="mb-12 flex items-center gap-6 md:mb-16">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            08 / Instagram
          </span>
          <span className={`h-px flex-1 ${dark ? "bg-alabaster/15" : "bg-platinum/60"}`} />
        </div>

        <div className="reveal mb-14 grid grid-cols-12 gap-x-6 gap-y-6">
          <h2 className={`col-span-12 font-serif text-3xl font-light leading-[1.15] tracking-tight md:col-span-7 md:text-5xl`}>
            Inside the <em className="italic">Aanka</em> World
          </h2>
          <div className="col-span-12 self-end md:col-span-4 md:col-start-9 md:text-right">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-luxury transition-colors ${
                dark ? "text-alabaster hover:text-bronze" : "text-obsidian hover:text-bronze"
              }`}
            >
              <Instagram size={14} strokeWidth={1.25} />
              Follow {handle}
              <ArrowUpRight size={14} strokeWidth={1.25} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-platinum/40 md:grid-cols-4">
          {tiles.map((t, i) => (
            <a
              key={`${t.brand}-${i}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden bg-obsidian"
            >
              <img
                src={t.img}
                alt={`${t.brand} — ${t.caption}`}
                loading="lazy"
                className="img-scale h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/55" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 px-4 pb-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  {t.brand}
                </p>
                <p className="mt-2 font-serif text-sm font-light leading-snug text-alabaster">
                  {t.caption}
                </p>
              </div>
              <span className="absolute right-3 top-3 text-alabaster/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Instagram size={14} strokeWidth={1.25} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
