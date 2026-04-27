import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Locations — Aanka Group" },
      {
        name: "description",
        content:
          "Discover the presence of Aanka Group brands across the UAE — Khau Galli, House of Zaika, Cutting Edge, Deco Vibes.",
      },
      { property: "og:title", content: "Locations — Aanka Group" },
      {
        property: "og:description",
        content:
          "Explore brand-wise and community-wise locations across the UAE.",
      },
    ],
  }),
});

const brandsLocations = [
  {
    brand: "Khau Galli",
    sector: "Food & Beverage",
    href: "https://thekhaugalli.com/",
    locations: ["DMCC, Dubai", "Selected destinations across the UAE"],
  },
  {
    brand: "House of Zaika",
    sector: "Fine Dining",
    href: "https://houseofzaika.com/",
    locations: ["Dubai, UAE"],
  },
  {
    brand: "Cutting Edge Gents",
    sector: "Wellness · Grooming",
    href: "https://cuttingedgemens.com/",
    locations: ["Multiple destinations across the UAE"],
  },
  {
    brand: "Cutting Edge Ladies",
    sector: "Beauty · Wellness",
    href: "https://cuttingedgeladies.com/",
    locations: ["Multiple destinations across the UAE"],
  },
  {
    brand: "Deco Vibes",
    sector: "Interior Design",
    href: "https://decovibesinterior.com/",
    locations: ["Dubai, UAE"],
  },
  {
    brand: "Aanka Constructions",
    sector: "Construction",
    locations: ["United Arab Emirates"],
  },
];

function LocationsPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / Presence"
        title={
          <>
            Discover Our <em className="italic">Presence</em>
          </>
        }
        intro="Aanka Group's brands continue to grow across key destinations in the UAE. Explore each brand's locations through a brand-wise and map-based format."
      />

      {/* Brand-wise listing */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 md:pb-32">
          <div className="mb-16 flex items-center gap-6 md:mb-20">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Brand-Wise
            </span>
            <span className="h-px flex-1 bg-platinum/60" />
          </div>

          <ul className="grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-2">
            {brandsLocations.map((b, i) => (
              <li
                key={b.brand}
                className="reveal bg-alabaster p-10 md:p-12"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-baseline justify-between gap-4 border-b border-platinum/60 pb-5">
                  <h3 className="font-serif text-2xl font-light tracking-tight md:text-3xl">
                    {b.brand}
                  </h3>
                  <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                    {b.sector}
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {b.locations.map((loc) => (
                    <li
                      key={loc}
                      className="flex items-start gap-3 font-serif text-lg font-light leading-relaxed text-obsidian/80"
                    >
                      <MapPin size={16} strokeWidth={1.25} className="mt-1 shrink-0 text-bronze" />
                      {loc}
                    </li>
                  ))}
                </ul>
                {b.href ? (
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-obsidian transition-colors hover:text-bronze"
                  >
                    Visit Brand
                    <ArrowUpRight size={14} strokeWidth={1.25} />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              03 / Map View
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>
          <div className="reveal grid grid-cols-12 gap-x-6 gap-y-10">
            <h2 className="col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-7 md:text-5xl">
              A Network <em className="italic">Across the UAE</em>
            </h2>
            <p className="col-span-12 self-end font-serif text-lg font-light leading-relaxed text-alabaster/75 md:col-span-4 md:col-start-9">
              An interactive map of all Aanka Group brand outlets is on its way. For now, please contact each brand directly for visit details.
            </p>
          </div>

          <div className="reveal mt-16 flex aspect-[16/8] w-full items-center justify-center border border-alabaster/15 bg-[radial-gradient(circle_at_50%_50%,rgba(184,184,176,0.08),transparent_70%)]">
            <div className="text-center">
              <MapPin size={28} strokeWidth={1} className="mx-auto text-bronze" />
              <p className="mt-6 font-sans text-[11px] uppercase tracking-luxury text-alabaster/55">
                Interactive Map · Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="04 / Visit"
        heading={<>Plan Your <em className="italic">Visit</em></>}
        body="Reach our team for directions, reservations, or appointment-based services across Aanka Group brands."
        buttonLabel="Contact Us"
        to="/contact"
      />

      <a
        href="tel:+971507847968"
        className="sr-only"
      >
        <Phone />
        Call
      </a>
    </>
  );
}
