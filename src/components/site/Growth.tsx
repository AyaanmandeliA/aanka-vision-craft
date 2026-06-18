import { PulseLine } from "./AankaLogo";
export function Growth() {
  return (
    <section className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <div className="mb-12 flex items-center gap-6 md:mb-16">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            06 / Trajectory
          </span>
          <PulseLine variant="muted" className="h-4 flex-1" />
        </div>

        <div className="reveal grid grid-cols-12 items-end gap-x-6 gap-y-10 border-t border-obsidian/10 pt-10 md:pt-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <p className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              Portfolio growth
            </p>
            <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-obsidian md:text-5xl">
              Built in Dubai and Sharjah. Growing through trust.
            </h2>
          </div>

          <div className="col-span-12 grid gap-8 md:col-span-6 md:col-start-7 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
            <div className="max-w-[34rem] space-y-5">
              <p className="font-serif text-lg font-light leading-relaxed text-obsidian/75">
                Six brands. Two emirates. A family-built portfolio shaped by
                customers who return, teams who care and relationships that
                last.
              </p>
              <p className="font-serif text-lg font-light leading-relaxed text-obsidian/75">
                The next phase is selective: deeper UAE presence, thoughtful
                partnerships and continued investment in the people who make
                each experience worth repeating.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 md:w-28 md:grid-cols-1 md:gap-6">
              <div>
                <span className="block font-serif text-3xl font-light text-obsidian md:text-4xl">6</span>
                <span className="mt-1 block font-sans text-[10px] uppercase tracking-luxury text-obsidian/50">Brands</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-light text-obsidian md:text-4xl">2</span>
                <span className="mt-1 block font-sans text-[10px] uppercase tracking-luxury text-obsidian/50">Emirates</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-light text-obsidian md:text-4xl">GCC+</span>
                <span className="mt-1 block font-sans text-[10px] uppercase tracking-luxury text-obsidian/50">Franchise open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
