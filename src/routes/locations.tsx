import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import { UaeMap } from "@/components/site/UaeMap";
import { mapPins, venues, type Venue } from "@/components/site/location-data";
import { MapPin, ArrowUpRight, Phone, Clock } from "lucide-react";
import hero from "@/assets/brands/founders/duo-casual.png";
import { PulseLine } from "@/components/site/AankaLogo";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Locations — Aanka Group Across the UAE" },
      {
        name: "description",
        content:
          "A map of Aanka Group venues across the UAE — Khau Galli, House of Zaika, Cutting Edge, Deco Vibes, and Aanka Constructions.",
      },
      { property: "og:title", content: "Locations — Aanka Group" },
      {
        property: "og:description",
        content:
          "Find Aanka Group brands across Dubai, Abu Dhabi, Sharjah, and beyond.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
});

function LocationsPage() {
  useReveal();

  // Group venues by brand, preserving order of first appearance
  const brandOrder = Array.from(new Set(venues.map((v) => v.brand)));
  const byBrand = venues.reduce<Record<string, Venue[]>>((acc, v) => {
    (acc[v.brand] ||= []).push(v);
    return acc;
  }, {});

  return (
    <>
      <PageHeader
        eyebrow="01 / Presence"
        title={
          <>
            A network <em className="italic">across the UAE.</em>
          </>
        }
        intro="From DMCC to the wider Emirates, Aanka Group brands continue to grow across destinations that matter. Explore our presence on the map, then drop into the venue nearest to you."
        media={{
          src: hero,
          alt: "The UAE — home to Aanka Group",
          caption: "Headquartered in Dubai · Growing across the UAE",
          ratio: "portrait",
        }}
      />

      {/* Map */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 pb-20 md:px-12 md:pb-24">
          <div className="mb-12 flex items-center gap-6">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Map
            </span>
            <PulseLine className="h-4 flex-1 opacity-70" />
          </div>

          <div className="reveal border border-alabaster/10">
            <UaeMap pins={mapPins} />
          </div>

          <p className="mt-6 font-sans text-[11px] uppercase tracking-warm text-alabaster/50">
            Hover or focus a pin to reveal the brand and area.
          </p>
        </div>
      </section>

      {/* Brand listings — one card per brand, branches listed inside */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-32">
          <div className="pt-20 md:pt-24">
            <div className="mb-12 flex items-center gap-6 md:mb-16">
              <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
                03 / Dubai & Sharjah
              </span>
              <PulseLine variant="muted" className="h-4 flex-1" />
            </div>

            <div className="grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-2">
              {brandOrder.map((brandName, i) => {
                const branches = byBrand[brandName];
                const first = branches[0];
                return (
                  <div
                    key={brandName}
                    className="reveal flex flex-col bg-alabaster"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    {/* Single brand image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-obsidian">
                      <img
                        src={first.img}
                        alt={brandName}
                        loading="lazy"
                        className="img-scale h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-10 md:p-12">
                      {/* Brand name */}
                      <h3 className="border-b border-platinum/60 pb-5 font-serif text-2xl font-light tracking-tight md:text-3xl">
                        {brandName}
                      </h3>

                      {/* All branches */}
                      <ul className="mt-6 divide-y divide-platinum/40">
                        {branches.map((v) => (
                          <li key={`${v.area}`} className="py-5">
                            <div className="flex items-baseline justify-between gap-4 mb-3">
                              <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                                {v.area}
                              </span>
                              {v.hours && (
                                <span className="font-sans text-[10px] uppercase tracking-warm text-obsidian/45">
                                  {v.hours}
                                </span>
                              )}
                            </div>
                            <div className="flex items-start gap-3 font-serif text-base font-light text-obsidian/75">
                              <MapPin size={14} strokeWidth={1.25} className="mt-0.5 shrink-0 text-bronze" />
                              <span>{v.address}</span>
                            </div>
                            <div className="mt-3 flex items-center justify-between gap-4">
                              {v.phone && (
                                <a
                                  href={`tel:${v.phone.replace(/\s/g, "")}`}
                                  className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-obsidian/55 transition-colors hover:text-obsidian"
                                >
                                  <Phone size={12} strokeWidth={1.25} />
                                  {v.phone}
                                </a>
                              )}
                              <a
                                href={v.mapsHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-auto inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-obsidian transition-colors hover:text-bronze"
                              >
                                Directions
                                <ArrowUpRight size={12} strokeWidth={1.25} />
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="Visit"
        heading={<>Plan your <em className="italic">visit.</ em></>}
        body="Reach our team for directions, reservations, or appointment-based services across Aanka Group brands."
        buttonLabel="Contact Us"
        to="/contact"
      />
    </>
  );
}
