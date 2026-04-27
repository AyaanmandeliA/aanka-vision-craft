import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { CtaBlock } from "@/components/site/PageShell";
import type { Brand } from "@/components/site/brand-data";

export function BrandPageShell({ brand }: { brand: Brand }) {
  useReveal();
  const parallaxRef = useParallax<HTMLImageElement>(0.12);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-obsidian text-alabaster">
        <img
          ref={parallaxRef}
          src={brand.img}
          alt={brand.name}
          className="absolute inset-0 h-[120%] w-full -translate-y-[10%] object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
        <div className="absolute inset-0 bg-obsidian/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-10 flex items-center gap-6">
            <Link
              to="/businesses"
              className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/55 transition-colors hover:text-bronze"
            >
              ← All Businesses
            </Link>
            <span className="h-px flex-1 bg-alabaster/15" />
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              {brand.num} / {brand.sector}
            </span>
          </div>

          <h1 className="reveal max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
            {brand.name}
          </h1>
          <p className="reveal mt-10 max-w-xl font-serif text-xl font-light leading-relaxed text-alabaster/80" style={{ transitionDelay: "120ms" }}>
            {brand.desc}
          </p>

          {brand.href ? (
            <a
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal mt-12 inline-flex items-center gap-4 border border-alabaster/40 px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-alabaster transition-colors duration-500 hover:border-bronze hover:text-bronze"
              style={{ transitionDelay: "240ms" }}
            >
              Visit Website
              <ArrowUpRight size={14} strokeWidth={1.25} />
            </a>
          ) : null}
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-36">
          <div className="mb-16 flex items-center gap-6">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / The Brand
            </span>
            <span className="h-px flex-1 bg-platinum/60" />
          </div>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <h2 className="reveal col-span-12 font-serif text-3xl font-light leading-[1.15] tracking-tight md:col-span-5 md:text-5xl">
              An Experience <em className="italic">Curated</em>
            </h2>
            <p className="reveal col-span-12 self-end font-serif text-lg font-light leading-relaxed text-obsidian/75 md:col-span-6 md:col-start-7 md:text-xl" style={{ transitionDelay: "100ms" }}>
              {brand.longDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {brand.gallery.length > 0 ? (
        <section className="bg-alabaster">
          <div className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 md:pb-36">
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              {brand.gallery.map((img, i) => {
                // First image full width, rest in two columns
                const span =
                  i === 0
                    ? "col-span-12"
                    : "col-span-12 md:col-span-6";
                const aspect = i === 0 ? "aspect-[16/8]" : "aspect-[4/3]";
                return (
                  <div
                    key={`${img}-${i}`}
                    className={`reveal relative overflow-hidden bg-obsidian ${span} ${aspect}`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="mask-reveal h-full w-full">
                      <img
                        src={img}
                        alt={`${brand.name} — image ${i + 1}`}
                        loading="lazy"
                        className="img-scale h-full w-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* Locations */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-36">
          <div className="mb-16 flex items-center gap-6">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              03 / Where to Find Us
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <h2 className="reveal col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-5 md:text-5xl">
              Locations
            </h2>
            <ul className="reveal col-span-12 md:col-span-6 md:col-start-7" style={{ transitionDelay: "100ms" }}>
              {brand.locations.map((loc, i) => (
                <li
                  key={loc}
                  className={`flex items-baseline justify-between gap-6 py-5 ${
                    i === 0 ? "border-y" : "border-b"
                  } border-alabaster/15`}
                >
                  <span className="font-serif text-xl font-light text-alabaster md:text-2xl">
                    {loc}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/55 num-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Franchise / next-step CTA */}
      {brand.franchisable ? (
        <section className="bg-alabaster text-obsidian">
          <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-36">
            <div className="grid grid-cols-12 gap-x-6 gap-y-10 border-t border-platinum/60 pt-16">
              <div className="col-span-12 md:col-span-7">
                <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
                  04 / Franchise Opportunity
                </span>
                <h2 className="reveal mt-6 font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
                  Bring <em className="italic">{brand.name}</em><br />
                  to your city.
                </h2>
                {brand.investmentRange ? (
                  <p className="mt-8 font-serif text-lg font-light text-obsidian/75">
                    Indicative investment range:{" "}
                    <span className="font-sans text-[11px] uppercase tracking-luxury text-bronze num-mono">
                      {brand.investmentRange}
                    </span>
                  </p>
                ) : null}
              </div>
              <div className="col-span-12 self-end md:col-span-4 md:col-start-9">
                <Link
                  to="/partner"
                  className="group inline-flex items-center gap-4 bg-obsidian px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-alabaster transition-colors duration-500 hover:bg-bronze"
                >
                  Franchise This Brand
                  <span className="block h-px w-8 bg-alabaster transition-all duration-500 group-hover:w-12" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <CtaBlock
          eyebrow="04 / Engage"
          heading={<>Work With <em className="italic">{brand.name}</em></>}
          body="To discuss a project, partnership, or collaboration with this brand, get in touch with the Aanka Group team."
          buttonLabel="Contact Us"
          to="/contact"
        />
      )}
    </>
  );
}
