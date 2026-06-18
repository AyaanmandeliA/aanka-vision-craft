import aanand from "@/assets/leader-1.jpg";
import priyanka from "@/assets/brands/founders/priyanka.webp";
import { PulseLine } from "./AankaLogo";

const leaders = [
  {
    img: aanand,
    name: "Aanand Mandelia",
    role: "Co-founder",
    bio: "A Chartered Accountant and entrepreneur whose career began in professional services before he chose to build businesses of his own. His approach combines financial discipline with the instincts of an operator who cares deeply about customers, teams and long-term trust.",
  },
  {
    img: priyanka,
    name: "Priyanka Agarwal",
    role: "Co-founder",
    bio: "A Chartered Accountant whose expertise in finance, operations and business management has helped shape Aanka Group from the inside. Her attention to detail, care for people and long-term perspective continue to guide the group's culture and customer experience.",
  },
];

export function Leadership() {
  return (
    <section className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
        <div className="mb-16 flex items-center gap-6 md:mb-24">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            05 / Leadership
          </span>
          <PulseLine variant="muted" className="h-4 flex-1" />
        </div>

        <div className="reveal mb-20 grid grid-cols-12 gap-6">
          <h2 className="col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-8 md:text-5xl lg:text-6xl">
            Leadership That <em className="italic">Stays Close</em>
          </h2>
          <p className="col-span-12 self-end font-serif text-lg font-light leading-relaxed text-obsidian/65 md:col-span-3 md:col-start-10">
            The founders shaping every chapter of Aanka Group with care, discipline and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2">
          {leaders.map((p, i) => (
            <article
              key={p.name}
              className="reveal group"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-obsidian">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="img-scale h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-obsidian/10" />
              </div>

              <div className="mt-8 flex items-baseline justify-between border-b border-platinum/60 pb-4">
                <h3 className="font-serif text-2xl font-light tracking-tight md:text-3xl">
                  {p.name}
                </h3>
                <span className="font-sans text-[11px] uppercase tracking-luxury text-bronze">
                  {p.role}
                </span>
              </div>

              <p className="mt-6 max-w-lg font-serif text-base font-light leading-relaxed text-obsidian/75 md:text-lg">
                {p.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
