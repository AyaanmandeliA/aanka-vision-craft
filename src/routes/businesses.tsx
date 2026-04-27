import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import { brands, type Brand } from "@/components/site/brand-data";
import { ArrowUpRight } from "lucide-react";
import zaikaInterior from "@/assets/brands/zaika-interior.jpg";
import khauThali from "@/assets/brands/khau-thali.jpg";
import gents from "@/assets/brands/gents.webp";
import deco from "@/assets/brands/deco.jpg";
import construction from "@/assets/brand-construction.jpg";

export const Route = createFileRoute("/businesses")({
  component: BusinessesPage,
  head: () => ({
    meta: [
      { title: "Our Businesses — Aanka Group Portfolio" },
      {
        name: "description",
        content:
          "A portfolio of brands across food, wellness, beauty, interior design, and construction — all under Aanka Group.",
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
    name: "Food & Beverage",
    intro:
      "From vibrant street-food concepts to slow-cooked fine dining, our F&B brands are designed for different moods, moments, and tables. Each one is built around a clear point of view, a distinct kitchen, and a service standard that turns guests into regulars.",
    keys: ["Khau Galli", "House of Zaika"],
    img: khauThali,
    imgAlt: "House of Zaika and Khau Galli — Aanka F&B portfolio",
  },
  {
    code: "II",
    name: "Wellness & Salons",
    intro:
      "Modern grooming and beauty houses built around comfort, expertise, and the small rituals that define how people show up. Two flagships — one for gents, one for ladies — sharing a single standard of craft, hygiene, and warm hospitality.",
    keys: ["Cutting Edge Gents", "Cutting Edge Ladies"],
    img: gents,
    imgAlt: "Cutting Edge — Aanka wellness and salons",
  },
  {
    code: "III",
    name: "Interiors & Design",
    intro:
      "Design-led spaces shaped end-to-end — where function, atmosphere, and detail meet. From concept and material palettes to fit-out and final styling, our interiors practice gives form to the brands we run and the partners we work with.",
    keys: ["Deco Vibes"],
    img: deco,
    imgAlt: "Deco Vibes — Aanka interiors and design",
  },
  {
    code: "IV",
    name: "Construction",
    intro:
      "Reliable execution and structural quality — the quiet backbone behind every space we shape. From core construction to specialised fit-out, the team brings the same standards of finish that define our customer-facing brands.",
    keys: ["Aanka Constructions"],
    img: construction,
    imgAlt: "Aanka Constructions",
  },
];

const portfolioStats = [
  { k: "06", v: "Active brands" },
  { k: "04", v: "Verticals" },
  { k: "UAE", v: "Operating market" },
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

function BusinessesPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / Portfolio"
        title={
          <>
            Our <em className="italic">family</em> of brands.
          </>
        }
        intro="Aanka Group brings together brands across food, wellness, beauty, and interior design — each with a distinct identity, all held to the same shared standard of hospitality, craft, and care."
        media={{
          src: zaikaInterior,
          alt: "House of Zaika interior",
          caption: "Six brands. One philosophy.",
          ratio: "portrait",
        }}
      />

      {/* Lead-in: paragraph + stats */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <h2 className="reveal col-span-12 font-serif text-2xl font-light leading-[1.25] tracking-tight text-obsidian/85 md:col-span-7 md:text-4xl">
              A portfolio built across food, wellness, beauty, and design — and
              shaped by the same operating principles in every category.
            </h2>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="grid grid-cols-1 gap-px bg-platinum/60">
                {portfolioStats.map((s, i) => (
                  <div
                    key={s.v}
                    className="reveal flex items-baseline gap-5 bg-alabaster p-6"
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
        </div>
      </section>

      {/* Verticals detailed — each with image column */}
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
                <figure className="reveal col-span-12 md:col-span-4">
                  <div className="relative aspect-[4/5] overflow-hidden bg-obsidian">
                    <img
                      src={v.img}
                      alt={v.imgAlt}
                      loading="lazy"
                      className="img-scale h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-obsidian/10" />
                  </div>
                </figure>

                <div className="col-span-12 md:col-span-7 md:col-start-6">
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
                      <BrandRow key={b.name} brand={b} dark={dark} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing line — paired with full-bleed band */}
      <section className="bg-alabaster text-obsidian">
        <div className="reveal relative h-[40vh] min-h-[320px] w-full overflow-hidden bg-obsidian md:h-[55vh]">
          <img
            src={zaikaInterior}
            alt="Aanka Group hospitality"
            loading="lazy"
            className="img-scale h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/20" />
          <div className="absolute inset-0 mx-auto flex max-w-[1440px] items-end px-6 pb-12 md:px-12 md:pb-16">
            <p className="max-w-3xl font-serif text-2xl font-light italic leading-[1.3] text-alabaster md:text-4xl lg:text-5xl">
              Together, these businesses reflect the breadth of Aanka Group's
              ambition — and the consistency of our customer-first approach.
            </p>
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="06 / Partner"
        heading={<>Bring an <em className="italic">Aanka brand</em> to your city.</>}
        body="Explore franchise opportunities for our flagship F&B and wellness brands across the GCC and beyond."
        buttonLabel="Franchise With Us"
        to="/partner"
      />
    </>
  );
}

function BrandRow({ brand, dark }: { brand: Brand; dark: boolean }) {
  return (
    <Link
      to={brandHrefForSlug(brand.slug)}
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
      <div className={`mt-4 font-sans text-[10px] uppercase tracking-luxury ${dark ? "text-alabaster/55" : "text-obsidian/50"}`}>
        {brand.sector}
      </div>
    </Link>
  );
}
