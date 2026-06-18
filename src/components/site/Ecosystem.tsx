import { brands, type Brand } from "./brand-data";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PulseLine } from "./AankaLogo";

export function Ecosystem() {
  return (
    <section className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 pb-32 md:px-12 md:pb-40">
        <div className="mb-16 flex items-center gap-6 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            03 / The Family
          </span>
          <PulseLine variant="muted" className="h-4 flex-1" />
        </div>

        <div className="reveal mb-20 grid grid-cols-12 gap-6 md:mb-24">
          <h2 className="col-span-12 display-lg md:col-span-8">
            A family of brands. <br />
            Built on <em className="italic">trust.</em>
          </h2>
          <p className="col-span-12 measure-narrow self-end font-serif text-base font-light leading-relaxed text-obsidian/70 md:col-span-3 md:col-start-10 md:text-lg">
            Each brand has its own identity, its own customers, and its own
            daily rhythm — held together by service, care and the trust we earn
            over time.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b, i) => (
            <BrandCard key={b.name} brand={b} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand, delay }: { brand: Brand; delay: number }) {
  return (
    <Link
      // Each brand has its own static route under /businesses/<slug>
      // so we map slug -> typed `to` value.
      to={brandHrefForSlug(brand.slug)}
      className="reveal group relative block overflow-hidden bg-obsidian"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/5] w-full">
        <div className="mask-reveal absolute inset-0">
          <img
            src={brand.img}
            alt={brand.name}
            loading="lazy"
            width={1024}
            height={1280}
            className="img-scale absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-50"
          />
        </div>
        {/* Permanent bottom gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        {/* Hover full overlay */}
        <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/55" />

        {/* Top meta */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-6 py-5">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/70 num-mono">
            {brand.num}
          </span>
          <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-alabaster/70">
            {brand.sector}
            <ArrowUpRight size={12} strokeWidth={1.25} />
          </span>
        </div>

        {/* Bottom title + description */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 md:px-8 md:pb-8">
          <h3 className="font-serif text-2xl font-light leading-tight text-alabaster md:text-3xl">
            {brand.name}
          </h3>
          <div className="mt-3 grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="max-w-md pt-1 font-serif text-[15px] font-light leading-relaxed text-alabaster/85">
                {brand.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-luxury text-bronze">
                Discover the brand
                <span className="block h-px w-6 bg-bronze" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

type BrandHref =
  | "/businesses/khau-galli"
  | "/businesses/house-of-zaika"
  | "/businesses/cutting-edge-gents"
  | "/businesses/cutting-edge-ladies"
  | "/businesses/deco-vibes"
  | "/businesses/aanka-constructions";

function brandHrefForSlug(slug: string): BrandHref {
  switch (slug) {
    case "khau-galli":
      return "/businesses/khau-galli";
    case "house-of-zaika":
      return "/businesses/house-of-zaika";
    case "cutting-edge-gents":
      return "/businesses/cutting-edge-gents";
    case "cutting-edge-ladies":
      return "/businesses/cutting-edge-ladies";
    case "deco-vibes":
      return "/businesses/deco-vibes";
    case "aanka-constructions":
    default:
      return "/businesses/aanka-constructions";
  }
}
