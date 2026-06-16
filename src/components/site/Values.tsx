import { PulseLine } from "./AankaLogo";
const values = [
  {
    num: "I",
    title: "Built for Return",
    desc: "Every brand is designed from the guest's perspective out — space, service, and detail calibrated so the experience earns the next visit.",
  },
  {
    num: "II",
    title: "Ambition with Discipline",
    desc: "We grow when the brand, the team, and the unit economics are ready — never when the calendar says so.",
  },
  {
    num: "III",
    title: "Hospitality is the Product",
    desc: "From dining rooms to grooming chairs to interior projects, the way we treat people is the brand.",
  },
  {
    num: "IV",
    title: "A Group, Not a Collection",
    desc: "Each brand is distinct in identity but aligned in ambition — held together by shared people, shared expectations, and one non-negotiable bar.",
  },
];

export function Values() {
  return (
    <section className="bg-espresso text-alabaster">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-36">
        <div className="mb-16 flex items-center gap-6 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            04 / Principles
          </span>
          <PulseLine className="h-4 flex-1 opacity-70" />
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <h2 className="reveal col-span-12 mb-16 display-lg md:col-span-9">
            What defines <em className="italic">Aanka Group.</em>
          </h2>
          <p
            className="reveal col-span-12 measure-narrow self-end mb-16 font-serif text-base font-light leading-relaxed text-alabaster/65 md:col-span-3 md:col-start-10 md:text-lg"
            style={{ transitionDelay: "100ms" }}
          >
            The operating principles behind every brand we build — the same in every market.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-alabaster/15 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal flex flex-col bg-espresso p-10 md:p-12"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-serif text-3xl italic text-bronze num-mono md:text-4xl">
                {v.num}
              </span>
              <h3 className="mt-12 font-serif text-2xl font-light leading-tight text-alabaster md:text-[1.7rem]">
                {v.title}
              </h3>
              <p className="mt-6 measure-narrow font-serif text-base font-light leading-relaxed text-alabaster/75 md:text-lg">
                {v.desc}
              </p>
              <span className="mt-12 block h-px w-10 bg-bronze" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
