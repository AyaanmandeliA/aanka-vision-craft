import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { CtaBlock } from "@/components/site/PageShell";
import { brands, type Brand } from "@/components/site/brand-data";
import { ArrowUpRight } from "lucide-react";
import { PulseLine } from "@/components/site/AankaLogo";
import zaikaInterior from "@/assets/brands/zaika-interior.jpg";
import aankaLogo from "@/assets/brand-logos/aanka-group.jpg";
import khauLogo from "@/assets/brand-logos/khau-galli.png";
import zaikaLogo from "@/assets/brand-logos/house-of-zaika.jpg";
import gentsLogo from "@/assets/brand-logos/cutting-edge-gents.png";
import ladiesLogo from "@/assets/brand-logos/cutting-edge-ladies.png";
import decoLogo from "@/assets/brand-logos/deco-vibes.png";

export const Route = createFileRoute("/businesses")({
  component: BusinessesPage,
  head: () => ({
    meta: [
      { title: "Our Businesses — Aanka Group Portfolio" },
      {
        name: "description",
        content:
          "A family-built portfolio of customer-focused brands across hospitality, beauty, wellness, interiors and construction.",
      },
      { property: "og:title", content: "Our Businesses — Aanka Group Portfolio" },
      {
        property: "og:description",
        content:
          "Khau Galli, House of Zaika, Cutting Edge Gents, Cutting Edge Ladies, Deco Vibes, and Aanka Constructions.",
      },
      { property: "og:image", content: zaikaInterior },
      { name: "twitter:image", content: zaikaInterior },
    ],
  }),
});

const verticals = [
  {
    code: "I",
    name: "Hospitality",
    intro:
      "From vibrant street-food concepts to slow-cooked fine dining, our hospitality brands are built around flavour, warmth and the relationships that turn first-time guests into regulars.",
    keys: ["Khau Galli", "House of Zaika"],
  },
  {
    code: "II",
    name: "Wellness & Salons",
    intro:
      "Modern grooming, beauty and wellness brands built around comfort, expertise and care. Two flagships — one for gents, one for ladies — share the same standard of hygiene, warmth and trust.",
    keys: ["Cutting Edge Gents", "Cutting Edge Ladies"],
  },
  {
    code: "III",
    name: "Interiors",
    intro:
      "Interior spaces shaped with practical thinking, atmosphere and attention to detail. From concept to fit-out, our interiors practice creates places people can feel at home in.",
    keys: ["Deco Vibes"],
  },
  {
    code: "IV",
    name: "Construction",
    intro:
      "Reliable execution and structural quality — the quiet backbone behind every space we shape. The team brings care, discipline and accountability to every project.",
    keys: ["Aanka Constructions"],
  },
];

const businessLogos = [
  { name: "Aanka Group", img: aankaLogo },
  { name: "Khau Galli", img: khauLogo },
  { name: "House of Zaika", img: zaikaLogo },
  { name: "Cutting Edge Gents", img: gentsLogo },
  { name: "Cutting Edge Ladies", img: ladiesLogo },
  { name: "Deco Vibes", img: decoLogo },
];

const portfolioStats = [
  { k: "Dubai & Sharjah", v: "Currently operating" },
  { k: "GCC & beyond", v: "Open for franchise" },
  { k: "Family-built", v: "Founder-led, people-focused" },
];

type BrandHref =
  | "/businesses/khau-galli"
  | "/businesses/house-of-zaika"
  | "/businesses/cutting-edge-gents"
  | "/businesses/cutting-edge-ladies"
  | "/businesses/deco-vibes"
  | "/businesses/aanka-constructions";

function brandHrefForSlug(slug: string): BrandHref {
  switch (slug) {
    case "khau-galli": return "/businesses/khau-galli";
    case "house-of-zaika": return "/businesses/house-of-zaika";
    case "cutting-edge-gents": return "/businesses/cutting-edge-gents";
    case "cutting-edge-ladies": return "/businesses/cutting-edge-ladies";
    case "deco-vibes": return "/businesses/deco-vibes";
    case "aanka-constructions":
    default: return "/businesses/aanka-constructions";
  }
}

function BusinessesPage() {
  useReveal();
  return (
    <>
      <BusinessesHero />

      {/* Lead-in: bridging paragraph + stat strip */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-32">
          <div className="mb-14 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono whitespace-nowrap">
              01b / The Portfolio
            </span>
            <PulseLine variant="muted" className="h-4 flex-1" />
          </div>

          <div className="grid grid-cols-12 gap-x-6">
            <p className="reveal col-span-12 font-serif text-2xl font-light leading-[1.35] tracking-tight text-obsidian/85 md:col-span-8 md:text-3xl lg:text-4xl">
              Six brands across four sectors — each built to serve its own
              customers, all held to the same founding standard of hospitality,
              quality and trust.
            </p>
          </div>

          <div className="mt-14 border-t border-obsidian/10 pt-10 md:mt-16 md:pt-12">
            <div className="grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-3">
              {portfolioStats.map((s, i) => (
                <div
                  key={s.v}
                  className="reveal flex items-baseline gap-5 bg-alabaster px-8 py-7"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="font-serif text-3xl italic text-bronze num-mono md:text-4xl">
                    {s.k}
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-luxury text-obsidian/65">
                    {s.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      {verticals.map((v, idx) => {
        const dark = idx % 2 === 1;
        const brandsOfVertical = brands.filter((b) => v.keys.includes(b.name));
        return (
          <section
            key={v.code}
            className={dark ? "bg-obsidian text-alabaster" : "bg-alabaster text-obsidian"}
          >
            <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
              <div className="mb-12 flex items-center gap-6 md:mb-16">
                <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
                  {String(idx + 2).padStart(2, "0")} / {v.name}
                </span>
                <span className={`h-px flex-1 ${dark ? "bg-alabaster/15" : "bg-platinum/60"}`} />
              </div>

              <div className="grid grid-cols-12 gap-x-6 gap-y-12">
                <div className="col-span-12 lg:col-span-10">
                  <h3 className="reveal font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
                    <span className="mr-4 font-serif italic text-bronze num-mono text-2xl md:text-3xl">
                      {v.code}
                    </span>
                    {v.name}
                  </h3>
                  <p
                    className={`reveal mt-8 max-w-2xl font-serif text-lg font-light leading-relaxed md:text-xl ${dark ? "text-alabaster/75" : "text-obsidian/75"}`}
                    style={{ transitionDelay: "100ms" }}
                  >
                    {v.intro}
                  </p>

                  <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {brandsOfVertical.map((b) => (
                      <BrandCard key={b.name} brand={b} dark={dark} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}


      <CtaBlock
        eyebrow="06 / Partner"
        heading={<>Bring an <em className="italic">Aanka brand</em> to your city.</>}
        body="Explore franchise opportunities for our flagship hospitality, beauty and wellness brands across the GCC and beyond."
        buttonLabel="Franchise With Us"
        to="/partner"
      />
    </>
  );
}

function BusinessesHero() {
  const logoLoop = [...businessLogos, ...businessLogos];

  return (
    <section className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-16 md:px-12 md:pt-36 md:pb-24">
        <div className="mb-12 flex items-center gap-6 md:mb-16">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            01 / Portfolio
          </span>
          <PulseLine variant="muted" className="h-4 flex-1" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12">
            <h1 className="reveal display-lg text-obsidian">
              Our <em className="italic">family</em> of brands.
            </h1>
            <p
              className="reveal measure-wide mt-10 body-lead text-obsidian/75"
              style={{ transitionDelay: "120ms" }}
            >
              Aanka Group brings together customer-focused brands across
              hospitality, beauty, wellness, interiors and construction — each
              with its own identity, all held to the same standard of service,
              trust and care.
            </p>
          </div>

          <figure
            className="reveal col-span-12"
            style={{ transitionDelay: "160ms" }}
          >
            <div className="marquee-pause relative h-44 overflow-hidden bg-ivory md:h-56">
              <div className="absolute inset-0 ring-1 ring-inset ring-obsidian/10" />
              <div className="flex h-full items-center overflow-hidden py-6">
                <div
                  className="animate-marquee flex w-max items-center gap-5"
                  style={{ animationDuration: "42s" }}
                >
                  {[...logoLoop, ...businessLogos].map((logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex h-28 w-52 shrink-0 items-center justify-center border border-platinum/40 bg-alabaster px-7 shadow-[0_18px_45px_rgba(20,20,20,0.06)] md:h-32 md:w-64"
                    >
                      <img
                        src={logo.img}
                        alt={`${logo.name} logo`}
                        loading="eager"
                        className="max-h-20 max-w-full object-contain md:max-h-24"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <figcaption className="mt-4 font-sans text-[10px] uppercase tracking-luxury text-obsidian/55">
              A family-built portfolio. One standard of care.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand, dark }: { brand: Brand; dark: boolean }) {
  const dest = brand.href ?? brandHrefForSlug(brand.slug);
  const isExternal = dest.startsWith("http");
  return (
    <a
      href={dest}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`reveal group block overflow-hidden ${dark ? "bg-obsidian" : "bg-alabaster"}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
        <img
          src={brand.img}
          alt={brand.name}
          loading="lazy"
          className="img-scale h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
        />
      </div>

      <div className={`flex items-baseline justify-between border-b pb-4 pt-6 ${dark ? "border-alabaster/15" : "border-platinum/60"}`}>
        <h4 className={`font-serif text-2xl font-light tracking-tight ${dark ? "text-alabaster" : "text-obsidian"}`}>
          {brand.name}
        </h4>
        <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-bronze">
          Discover
          <ArrowUpRight size={14} strokeWidth={1.25} />
        </span>
      </div>

      <p className={`mt-5 max-w-md font-serif text-base font-light leading-relaxed md:text-lg ${dark ? "text-alabaster/75" : "text-obsidian/75"}`}>
        {brand.desc}
      </p>

      {brand.locations && brand.locations.length > 0 && (
        <ul className={`mt-5 space-y-1.5 border-t pt-5 ${dark ? "border-alabaster/10" : "border-platinum/60"}`}>
          {brand.locations.map((loc) => (
            <li
              key={loc}
              className={`flex items-center gap-3 font-sans text-[10px] uppercase tracking-luxury ${dark ? "text-alabaster/45" : "text-obsidian/45"}`}
            >
              <span className="h-px w-4 shrink-0 bg-bronze/60" />
              {loc}
            </li>
          ))}
        </ul>
      )}
    </a>
  );
}
