import { PulseLine } from "./AankaLogo";

export function Introduction() {
  return (
    <section id="about" className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 pt-28 pb-16 md:px-12 md:pt-36 md:pb-20">
        <div className="mb-16 flex items-center gap-6 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono whitespace-nowrap">
            02 / Introduction
          </span>
          <PulseLine variant="muted" className="h-4 flex-1" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <div className="reveal col-span-12 lg:col-span-7">
            <h2 className="display-lg text-obsidian">
              The name behind <br />
              brands you <em className="italic">return to.</em>
            </h2>
          </div>

          <div
            className="reveal col-span-12 lg:col-span-5 lg:col-start-8"
            style={{ transitionDelay: "150ms" }}
          >
            <p className="body-lead measure text-obsidian/85">
              Aanka Group was founded on a simple belief: when people are at
              the heart of every decision, meaningful growth follows.
            </p>
            <p className="mt-6 measure font-sans text-[14px] leading-relaxed text-obsidian/65">
              What began as an entrepreneurial vision has evolved into a
              portfolio of customer-focused brands across hospitality, beauty,
              wellness, interiors and construction. Each brand serves a
              different purpose, but all are united by integrity, quality,
              innovation and a commitment to delivering exceptional experiences.
            </p>
            <p className="mt-6 measure font-sans text-[14px] leading-relaxed text-obsidian/65">
              Today, Aanka Group continues to build businesses that create
              value, strengthen communities and earn the trust of customers,
              employees and partners alike.
            </p>

            <div className="mt-14 border-t border-platinum/60 pt-8">
              <dl className="grid grid-cols-3 gap-6">
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Founded
                </dt>
                <dd className="mt-3 font-serif text-2xl font-light leading-tight text-obsidian md:text-3xl">
                  Dubai, UAE
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Sectors
                </dt>
                <dd className="mt-3 font-serif text-2xl font-light leading-tight text-obsidian md:text-3xl">
                  Hospitality · Beauty · Wellness · Interiors · Construction
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Franchise
                </dt>
                <dd className="mt-3 font-serif text-2xl font-light leading-tight text-obsidian md:text-3xl">
                  GCC &amp; beyond
                </dd>
              </div>
            </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
