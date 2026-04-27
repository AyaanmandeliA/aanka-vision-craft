const verticals = [
  {
    code: "I",
    name: "Food & Beverage",
    desc: "Restaurant concepts created to serve diverse tastes, moments, and dining experiences.",
  },
  {
    code: "II",
    name: "Wellness & Salons",
    desc: "Modern grooming and beauty brands built around comfort, expertise, and personal care.",
  },
  {
    code: "III",
    name: "Interiors & Design",
    desc: "Design-led solutions that bring together functionality, aesthetics, and thoughtful execution.",
  },
  {
    code: "IV",
    name: "Construction",
    desc: "A business vertical focused on building with reliability, intent, and long-term value.",
  },
];

export function Verticals() {
  return (
    <section className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 md:pb-32">
        <div className="mb-16 flex items-center gap-6 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            02b / Verticals
          </span>
          <span className="h-px flex-1 bg-platinum/60" />
        </div>

        <div className="reveal mb-20 grid grid-cols-12 gap-x-6 gap-y-10">
          <h2 className="col-span-12 font-serif text-3xl font-light leading-[1.15] tracking-tight md:col-span-7 md:text-5xl">
            A Growing Presence <br />
            Across <em className="italic">Industries</em>
          </h2>
          <p className="col-span-12 self-end font-serif text-lg font-light leading-relaxed text-obsidian/70 md:col-span-4 md:col-start-9">
            Aanka Group operates across distinct lifestyle categories, each shaped by a shared commitment to quality, relevance, and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-2 lg:grid-cols-4">
          {verticals.map((v, i) => (
            <article
              key={v.name}
              className="reveal flex flex-col bg-alabaster p-10 md:p-12"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-serif text-2xl italic text-bronze num-mono">{v.code}</span>
              <h3 className="mt-10 font-sans text-[13px] uppercase tracking-wider-2 text-obsidian">
                {v.name}
              </h3>
              <p className="mt-5 font-serif text-base font-light leading-relaxed text-obsidian/70 md:text-lg">
                {v.desc}
              </p>
              <span className="mt-10 block h-px w-10 bg-bronze" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
