export function Introduction() {
  return (
    <section id="about" className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
        <div className="mb-16 flex items-center gap-6 md:mb-24">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            02 / Introduction
          </span>
          <span className="h-px flex-1 bg-platinum/60" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <div className="reveal col-span-12 lg:col-span-7">
            <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-tight text-obsidian sm:text-4xl md:text-5xl lg:text-6xl">
              The name behind <br />
              brands you <em className="italic">return to.</em>
            </h2>
          </div>

          <div className="reveal col-span-12 lg:col-span-4 lg:col-start-9" style={{ transitionDelay: "150ms" }}>
            <p className="font-serif text-lg font-light leading-relaxed text-obsidian/80 md:text-xl">
              Founded in the UAE, Aanka Group is a family-led house of lifestyle
              brands across hospitality, wellness, beauty, and design — quietly
              built, openly hospitable.
            </p>
            <p className="mt-6 font-sans text-[14px] leading-relaxed text-obsidian/65">
              Each venture is shaped around the same belief: that great brands
              are made of small, repeatable acts of care, served with intent and
              the long view.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-platinum/60 pt-8">
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Brands
                </dt>
                <dd className="mt-2 font-serif text-3xl font-light text-obsidian num-mono">06</dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Sectors
                </dt>
                <dd className="mt-2 font-serif text-3xl font-light text-obsidian num-mono">04</dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Footprint
                </dt>
                <dd className="mt-2 font-serif text-xl font-light leading-tight text-obsidian">UAE</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
