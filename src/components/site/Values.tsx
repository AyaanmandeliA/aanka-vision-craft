const values = [
  {
    num: "I",
    title: "Experience-Led Thinking",
    desc: "Every brand is shaped around what people value, remember, and return for.",
  },
  {
    num: "II",
    title: "Purposeful Growth",
    desc: "Each venture adds to a larger vision built with clarity and long-term intent.",
  },
  {
    num: "III",
    title: "Customer-Centric Brands",
    desc: "From service to space to dining, the focus remains on creating meaningful experiences.",
  },
  {
    num: "IV",
    title: "Multi-Sector Strength",
    desc: "Aanka Group brings together different industries under one shared standard of quality and execution.",
  },
];

export function Values() {
  return (
    <section className="bg-espresso text-alabaster">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
        <div className="mb-16 flex items-center gap-6 md:mb-24">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            04 / Principles
          </span>
          <span className="h-px flex-1 bg-alabaster/15" />
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <h2 className="reveal col-span-12 mb-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-8 md:text-5xl lg:text-6xl">
            What Defines <em className="italic">Aanka Group</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-alabaster/15 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal flex flex-col bg-espresso p-8 md:p-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-serif text-2xl italic text-bronze num-mono">{v.num}</span>
              <h3 className="mt-10 font-sans text-[13px] uppercase tracking-wider-2 text-alabaster">
                {v.title}
              </h3>
              <p className="mt-5 font-serif text-[15px] font-light leading-relaxed text-alabaster/70">
                {v.desc}
              </p>
              <span className="mt-10 block h-px w-10 bg-bronze" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
