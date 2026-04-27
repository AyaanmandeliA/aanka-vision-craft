import { PulseLine } from "./AankaLogo";
export function Growth() {
  return (
    <section className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
        <div className="mb-16 flex items-center gap-6 md:mb-24">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            06 / Trajectory
          </span>
          <PulseLine variant="muted" className="h-4 flex-1" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <h2 className="reveal col-span-12 font-serif text-4xl font-light leading-[1.05] tracking-tight md:col-span-9 md:text-6xl lg:text-7xl">
            Built with <em className="italic">Vision.</em>
            <br />
            Growing with <em className="italic">Purpose.</em>
          </h2>
          <p
            className="reveal col-span-12 self-end font-serif text-lg font-light leading-relaxed text-obsidian/75 md:col-span-5 md:col-start-8"
            style={{ transitionDelay: "120ms" }}
          >
            From its early beginnings to a growing portfolio of lifestyle brands, Aanka Group continues to evolve with a focus on relevance, experience, and scale. The group's journey reflects a commitment to building brands that are not only visible, but valued.
          </p>
        </div>
      </div>
    </section>
  );
}
