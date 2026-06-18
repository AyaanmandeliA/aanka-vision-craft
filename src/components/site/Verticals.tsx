import { PulseLine } from "./AankaLogo";
const verticals = [
  {
    code: "I",
    name: "Hospitality",
    desc: "Hospitality brands created around flavour, familiarity and the feeling of being well looked after.",
  },
  {
    code: "II",
    name: "Wellness & Salons",
    desc: "Beauty and wellness spaces built around comfort, expertise and personal care.",
  },
  {
    code: "III",
    name: "Interiors",
    desc: "Interior solutions shaped with care, practical thinking and attention to how people live and work.",
  },
  {
    code: "IV",
    name: "Construction",
    desc: "Construction work grounded in reliability, quality and long-term relationships.",
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
          <PulseLine variant="muted" className="h-4 flex-1" />
        </div>

        <div className="reveal mb-20 grid grid-cols-12 gap-x-6 gap-y-10">
          <h2 className="col-span-12 font-serif text-3xl font-light leading-[1.15] tracking-tight md:col-span-7 md:text-5xl">
            Four Sectors. <br />
            One <em className="italic">Point of View.</em>
          </h2>
          <p className="col-span-12 self-end font-serif text-lg font-light leading-relaxed text-obsidian/70 md:col-span-4 md:col-start-9">
            Hospitality, beauty, wellness, interiors and construction — each
            chosen because it touches real people, real spaces and everyday
            experiences.
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
