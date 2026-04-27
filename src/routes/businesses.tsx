import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import { brands } from "@/components/site/brand-data";
import { ArrowUpRight } from "lucide-react";

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
    ],
  }),
});

const verticals = [
  {
    code: "I",
    name: "Food & Beverage",
    intro:
      "From vibrant street food concepts to rich dining experiences, Aanka Group's F&B brands are designed to serve different moods, moments, and customer preferences.",
    keys: ["Khau Galli", "House of Zaika"],
  },
  {
    code: "II",
    name: "Wellness & Salons",
    intro:
      "Our salon brands are created around comfort, care, expertise, and confidence — delivering modern grooming and beauty experiences for today's customers.",
    keys: ["Cutting Edge Gents", "Cutting Edge Ladies"],
  },
  {
    code: "III",
    name: "Interiors & Design",
    intro:
      "Through design-led thinking and attention to detail, Aanka Group's interiors arm brings functional and aesthetic spaces to life.",
    keys: ["Deco Vibes"],
  },
  {
    code: "IV",
    name: "Construction",
    intro:
      "Aanka Constructions is a vertical focused on dependable execution, structural quality, and long-term value.",
    keys: ["Aanka Constructions"],
  },
];

function BusinessesPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / Portfolio"
        title={
          <>
            Our <em className="italic">Portfolio</em>
          </>
        }
        intro="Aanka Group brings together brands across food, wellness, beauty, and interior design — each created with a distinct identity, and each contributing to a larger vision of building memorable lifestyle experiences."
      />

      {/* Vertical intro */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 md:pb-32">
          <h2 className="reveal max-w-4xl font-serif text-2xl font-light leading-[1.25] tracking-tight text-obsidian/85 md:text-4xl">
            A portfolio built across food, wellness, beauty, and design.
          </h2>
        </div>
      </section>

      {/* Verticals detailed */}
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

              <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                <h3 className="reveal col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-5 md:text-5xl">
                  <span className={`mr-4 font-serif italic ${dark ? "text-bronze" : "text-bronze"} num-mono text-2xl md:text-3xl`}>{v.code}</span>
                  {v.name}
                </h3>
                <p
                  className={`reveal col-span-12 self-center font-serif text-lg font-light leading-relaxed md:col-span-6 md:col-start-7 md:text-xl ${dark ? "text-alabaster/75" : "text-obsidian/75"}`}
                  style={{ transitionDelay: "100ms" }}
                >
                  {v.intro}
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
                {brandsOfVertical.map((b) => (
                  <BrandRow key={b.name} brand={b} dark={dark} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing line */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-32">
          <p className="reveal mx-auto max-w-4xl font-serif text-2xl font-light leading-[1.3] tracking-tight text-obsidian/85 md:text-4xl">
            Together, these businesses reflect the breadth of Aanka Group's ambition and the consistency of its <em className="italic">customer-first approach</em>.
          </p>
        </div>
      </section>

      <CtaBlock
        eyebrow="06 / Partner"
        heading={<>Partner With a Group <em className="italic">Built for Growth</em></>}
        body="Explore franchise opportunities, strategic collaborations, or brand expansion alongside Aanka Group."
        buttonLabel="Partner With Us"
        to="/partner"
      />
    </>
  );
}

function BrandRow({ brand, dark }: { brand: typeof brands[number]; dark: boolean }) {
  const Wrapper: React.ElementType = brand.href ? "a" : "div";
  const props = brand.href
    ? { href: brand.href, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Wrapper
      {...props}
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
        {brand.href ? (
          <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-bronze">
            Visit
            <ArrowUpRight size={14} strokeWidth={1.25} />
          </span>
        ) : (
          <span className={`font-sans text-[10px] uppercase tracking-luxury ${dark ? "text-alabaster/55" : "text-obsidian/50"}`}>
            {brand.sector}
          </span>
        )}
      </div>
      <p className={`mt-5 max-w-md font-serif text-base font-light leading-relaxed md:text-lg ${dark ? "text-alabaster/75" : "text-obsidian/75"}`}>
        {brand.desc}
      </p>
    </Wrapper>
  );
}
