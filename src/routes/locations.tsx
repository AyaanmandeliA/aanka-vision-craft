import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import { UaeMap } from "@/components/site/UaeMap";
import { mapPins, venues, type Venue } from "@/components/site/location-data";
import { MapPin, ArrowUpRight, Phone, Clock } from "lucide-react";

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
    ],
  }),
});

function LocationsPage() {
  useReveal();

  // Group venues by emirate, preserving the order they first appear.
  const byEmirate = venues.reduce<Record<string, Venue[]>>((acc, v) => {
    (acc[v.emirate] ||= []).push(v);
    return acc;
  }, {});
  const emirateOrder = Array.from(new Set(venues.map((v) => v.emirate)));

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
      />

      {/* Map */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 pb-20 md:px-12 md:pb-28">
          <div className="mb-12 flex items-center gap-6">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Map
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
            <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/55">
              {venues.length} Venues
            </span>
          </div>

          <div className="reveal border border-alabaster/10">
            <UaeMap pins={mapPins} />
          </div>

          <p className="mt-6 font-sans text-[11px] uppercase tracking-warm text-alabaster/50">
            Hover or focus a pin to reveal the brand and area.
          </p>
        </div>
      </section>

      {/* Venue cards by emirate */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 md:pb-32">
          {emirateOrder.map((emirate, eIdx) => (
            <div key={emirate} className={eIdx > 0 ? "mt-20 md:mt-28" : ""}>
              <div className="mb-12 flex items-center gap-6 md:mb-16">
                <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
                  {String(eIdx + 3).padStart(2, "0")} / {emirate}
                </span>
                <span className="h-px flex-1 bg-platinum/60" />
              </div>

              <ul className="grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-2">
                {byEmirate[emirate].map((v, i) => (
                  <li
                    key={`${v.brand}-${v.area}-${i}`}
                    className="reveal flex flex-col bg-alabaster p-10 md:p-12"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-baseline justify-between gap-4 border-b border-platinum/60 pb-5">
                      <h3 className="font-serif text-2xl font-light tracking-tight md:text-3xl">
                        {v.brand}
                      </h3>
                      <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                        {v.area}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-4 font-serif text-base font-light leading-relaxed text-obsidian/80 md:text-lg">
                      <li className="flex items-start gap-3">
                        <MapPin size={16} strokeWidth={1.25} className="mt-1 shrink-0 text-bronze" />
                        {v.address}
                      </li>
                      {v.phone ? (
                        <li className="flex items-start gap-3">
                          <Phone size={16} strokeWidth={1.25} className="mt-1 shrink-0 text-bronze" />
                          <a href={`tel:${v.phone.replace(/\s/g, "")}`} className="hover:text-obsidian">
                            {v.phone}
                          </a>
                        </li>
                      ) : null}
                      {v.hours ? (
                        <li className="flex items-start gap-3">
                          <Clock size={16} strokeWidth={1.25} className="mt-1 shrink-0 text-bronze" />
                          {v.hours}
                        </li>
                      ) : null}
                    </ul>

                    <a
                      href={v.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-obsidian transition-colors hover:text-bronze"
                    >
                      Get Directions
                      <ArrowUpRight size={14} strokeWidth={1.25} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBlock
        eyebrow="Visit"
        heading={<>Plan your <em className="italic">visit.</em></>}
        body="Reach our team for directions, reservations, or appointment-based services across Aanka Group brands."
        buttonLabel="Contact Us"
        to="/contact"
      />
    </>
  );
}
