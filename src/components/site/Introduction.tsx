import { PulseLine } from "./AankaLogo";

export function Introduction() {
  return (
    <section id="about" className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-36">
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
              Aanka Group is a UAE lifestyle group — six brands across food,
              wellness, beauty, and design, run by founders who believe great
              businesses are built one returning customer at a time.
            </p>
            <p className="mt-6 measure font-sans text-[14px] leading-relaxed text-obsidian/65">
              We don't operate restaurants and salons. We build experience-led
              brands — and a long-term platform to grow them across the GCC.
            </p>

            <div className="mt-14 pt-8 relative">
              <PulseLine className="absolute inset-x-0 top-0 h-4" />
              <dl className="grid grid-cols-3 gap-6">
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Brands
                </dt>
                <dd className="mt-3 font-serif text-4xl font-light text-obsidian num-mono md:text-5xl">
                  06
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Sectors
                </dt>
                <dd className="mt-3 font-serif text-4xl font-light text-obsidian num-mono md:text-5xl">
                  04
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Market
                </dt>
                <dd className="mt-3 font-serif text-2xl font-light leading-tight text-obsidian md:text-3xl">
                  UAE
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
