import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader } from "@/components/site/PageShell";
import { brands } from "@/components/site/brand-data";
import { FranchiseForm } from "@/components/site/FranchiseForm";
import { ArrowUpRight, Check } from "lucide-react";
import zaikaInterior from "@/assets/brands/zaika-interior.jpg";
import khauThali from "@/assets/brands/khau-thali.jpg";
import gents from "@/assets/brands/gents.webp";
import ladies from "@/assets/brands/ladies.jpg";
import deco from "@/assets/brands/deco.jpg";
import hero from "@/assets/hero.jpg";

const pillarImages = [zaikaInterior, gents, ladies, deco];

export const Route = createFileRoute("/partner")({
  component: PartnerPage,
  head: () => ({
    meta: [
      { title: "Franchise With Aanka Group — Partnership Opportunities" },
      {
        name: "description",
        content:
          "Bring Khau Galli, House of Zaika, or Cutting Edge to your city. Explore franchise opportunities with Aanka Group across the GCC and beyond.",
      },
      { property: "og:title", content: "Franchise With Aanka Group" },
      {
        property: "og:description",
        content:
          "Proven concepts. Operational playbooks. UAE pedigree. Franchise opportunities across hospitality, wellness, and beauty.",
      },
      { property: "og:image", content: khauThali },
      { name: "twitter:image", content: khauThali },
    ],
  }),
});

const franchisableBrands = brands.filter((b) => b.franchisable);

const pillars = [
  {
    h: "Proven Concepts",
    p: "Brands that have been built, tested, and refined in one of the world's most demanding hospitality markets.",
  },
  {
    h: "Operational Playbooks",
    p: "Documented systems for kitchen, service, supply chain, and customer experience — designed to travel.",
  },
  {
    h: "Brand & Marketing Support",
    p: "Identity guidelines, launch playbooks, and ongoing creative support to keep the brand consistent in every market.",
  },
  {
    h: "UAE Pedigree",
    p: "A group built in the UAE — with the standards, standards-of-finish, and standards-of-service that come with that.",
  },
];

const territories = [
  { region: "United Arab Emirates", note: "Selective additional units" },
  { region: "Saudi Arabia", note: "Open across major cities" },
  { region: "Qatar · Kuwait · Bahrain · Oman", note: "Open" },
  { region: "India", note: "Master franchise discussions invited" },
  { region: "United Kingdom", note: "Open for House of Zaika & Cutting Edge" },
  { region: "Other markets", note: "Reviewed case-by-case" },
];

const process = [
  { num: "01", h: "Inquiry", p: "Submit your details and brand of interest through the form." },
  { num: "02", h: "Discovery Call", p: "A 30-minute conversation to align on market, vision, and fit." },
  { num: "03", h: "Proposal", p: "Receive a full franchise proposal with terms and timelines." },
  { num: "04", h: "Onboarding", p: "Site selection, training, fit-out, and launch — supported end-to-end." },
];

type BrandHref =
  | "/businesses/khau-galli"
  | "/businesses/house-of-zaika"
  | "/businesses/cutting-edge-gents"
  | "/businesses/cutting-edge-ladies";

function brandHrefForSlug(slug: string): BrandHref {
  switch (slug) {
    case "khau-galli":
      return "/businesses/khau-galli";
    case "house-of-zaika":
      return "/businesses/house-of-zaika";
    case "cutting-edge-gents":
      return "/businesses/cutting-edge-gents";
    case "cutting-edge-ladies":
    default:
      return "/businesses/cutting-edge-ladies";
  }
}

function PartnerPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / Franchise"
        title={
          <>
            Bring an <em className="italic">Aanka</em> brand <br />
            to your city.
          </>
        }
        intro="Aanka Group is opening selective franchise opportunities for its hospitality and wellness brands. If you bring local insight, capital, and a serious commitment to the customer — we'd like to hear from you."
        media={{
          src: khauThali,
          alt: "Khau Galli — a flagship Aanka franchise concept",
          caption: "Proven in the UAE. Designed to travel.",
          ratio: "portrait",
        }}
      />

      {/* Available brands */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 md:pb-32">
          <div className="mb-16 flex items-center gap-6 md:mb-20">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Available For Franchise
            </span>
            <span className="h-px flex-1 bg-platinum/60" />
          </div>

          <div className="grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-2">
            {franchisableBrands.map((b, i) => (
              <Link
                key={b.slug}
                to={brandHrefForSlug(b.slug)}
                className="reveal group relative block overflow-hidden bg-alabaster"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
                  <img
                    src={b.img}
                    alt={b.name}
                    loading="lazy"
                    className="img-scale h-full w-full object-cover opacity-95"
                  />
                </div>
                <div className="px-8 py-8 md:px-10 md:py-10">
                  <div className="flex items-baseline justify-between border-b border-platinum/60 pb-4">
                    <h3 className="font-serif text-2xl font-light tracking-tight md:text-3xl">
                      {b.name}
                    </h3>
                    <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
                      {b.investmentRange}
                    </span>
                  </div>
                  <p className="mt-5 font-serif text-base font-light leading-relaxed text-obsidian/75 md:text-lg">
                    {b.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-obsidian transition-colors group-hover:text-bronze">
                    Brand details
                    <ArrowUpRight size={14} strokeWidth={1.25} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              03 / Why Aanka
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>

          <h2 className="reveal mb-16 font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            What you get when you <em className="italic">franchise with us.</em>
          </h2>

          <div className="grid grid-cols-1 gap-px bg-alabaster/15 md:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.h}
                className="reveal flex flex-col bg-obsidian"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-obsidian">
                  <img
                    src={pillarImages[i % pillarImages.length]}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="img-scale h-full w-full object-cover opacity-50 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-10 md:p-12">
                  <span className="font-serif text-2xl italic text-bronze num-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-light leading-tight md:text-3xl">
                    {p.h}
                  </h3>
                  <p className="mt-5 max-w-md font-serif text-base font-light leading-relaxed text-alabaster/70 md:text-lg">
                    {p.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territory availability */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              04 / Territories
            </span>
            <span className="h-px flex-1 bg-platinum/60" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <figure className="reveal col-span-12 md:col-span-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-obsidian">
                <img
                  src={hero}
                  alt="Aanka Group regional ambition"
                  loading="lazy"
                  className="img-scale h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-obsidian/20" />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
                  <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/80">
                    UAE · GCC · Beyond
                  </span>
                </div>
              </div>
            </figure>

            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <h2 className="reveal font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
                Available <em className="italic">territories.</em>
              </h2>
              <p
                className="reveal mt-8 max-w-md font-serif text-base font-light leading-relaxed text-obsidian/70 md:text-lg"
                style={{ transitionDelay: "100ms" }}
              >
                We work with a small number of partners per market. Below is an
                indicative view — final allocation is reviewed brand-by-brand.
              </p>

              <ul className="mt-12 divide-y divide-platinum/60 border-y border-platinum/60">
                {territories.map((t, i) => (
                  <li
                    key={t.region}
                    className="reveal grid grid-cols-12 items-baseline gap-4 py-5"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="col-span-2 font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 font-serif text-lg font-light text-obsidian md:col-span-6 md:text-xl">
                      {t.region}
                    </span>
                    <span className="col-span-12 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-warm text-obsidian/65 md:col-span-4">
                      <Check size={12} strokeWidth={1.5} className="text-bronze" />
                      {t.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Band image divider before Process */}
      <div className="reveal relative h-[28vh] min-h-[220px] w-full overflow-hidden bg-obsidian md:h-[35vh]">
        <img
          src={zaikaInterior}
          alt="Aanka Group hospitality"
          loading="lazy"
          className="img-scale h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-obsidian/40" />
        <div className="absolute inset-0 mx-auto flex max-w-[1440px] items-end px-6 pb-8 md:px-12 md:pb-10">
          <p className="font-serif text-xl font-light italic text-alabaster md:text-3xl">
            From inquiry to opening day — supported end-to-end.
          </p>
        </div>
      </div>

      {/* Process */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-16 flex items-center gap-6 md:mb-24">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              05 / Process
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>

          <h2 className="reveal mb-16 font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
            From inquiry to <em className="italic">opening day.</em>
          </h2>

          <ol className="grid grid-cols-1 gap-px bg-alabaster/15 md:grid-cols-4">
            {process.map((p, i) => (
              <li
                key={p.num}
                className="reveal flex flex-col bg-obsidian p-10 md:p-12"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-sans text-[11px] uppercase tracking-luxury text-bronze num-mono">
                  {p.num}
                </span>
                <h3 className="mt-10 font-serif text-2xl font-light leading-tight md:text-3xl">
                  {p.h}
                </h3>
                <p className="mt-5 font-serif text-base font-light leading-relaxed text-alabaster/70 md:text-lg">
                  {p.p}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Form */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 md:pb-40">
          <div className="mb-16 flex items-center gap-6 md:mb-20">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              06 / Inquire
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-5">
              <h2 className="reveal font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
                Begin a <em className="italic">conversation.</em>
              </h2>
              <p className="reveal mt-8 max-w-md font-serif text-lg font-light leading-relaxed text-alabaster/70">
                Share a few details and our team will respond within two
                business days.
              </p>
            </div>
            <div className="reveal col-span-12 md:col-span-7" style={{ transitionDelay: "120ms" }}>
              <FranchiseForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
