import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import { Leadership } from "@/components/site/Leadership";
import { FoundersNote } from "@/components/site/FoundersNote";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import zaikaInterior from "@/assets/brands/zaika-interior.jpg";
import deco from "@/assets/brands/deco.jpg";
import gents from "@/assets/brands/gents.webp";
import ladies from "@/assets/brands/ladies.jpg";
import khau from "@/assets/brands/khau-thali.jpg";
import hero from "@/assets/hero.jpg";
import { PulseLine } from "@/components/site/AankaLogo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Aanka Group" },
      {
        name: "description",
        content:
          "The vision, mission, and philosophy behind Aanka Group — a UAE-based holding building memorable lifestyle brands across hospitality, wellness, beauty, and design.",
      },
      { property: "og:title", content: "About — Aanka Group" },
      {
        property: "og:description",
        content:
          "Built with passion. Growing with purpose. The story of Aanka Group's portfolio across hospitality, wellness, beauty, and design.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
});

const tenets = [
  {
    h: "Our Vision",
    img: zaikaInterior,
    p: "To build a UAE lifestyle group whose brands shape how a generation eats, unwinds, grooms, and lives — and whose name is shorthand for a standard.",
  },
  {
    h: "Our Mission",
    img: deco,
    p: "To run customer-first businesses where craft, consistency, and warmth aren't features — they're the operating system.",
  },
  {
    h: "Our Philosophy",
    img: gents,
    p: "Hospitality is not a department. It's the whole product. Every space, every service, every detail is judged by what it feels like to be served.",
  },
];

const timeline = [
  {
    year: "I",
    t: "An entrepreneurial beginning",
    p: "A first investment of belief, capital, and curiosity — choosing to build, not just observe.",
  },
  {
    year: "II",
    t: "Our first customer-facing brand",
    p: "The opening of our first outlet — and the lessons that come from serving real guests, every single day.",
  },
  {
    year: "III",
    t: "Expansion into new categories",
    p: "From food into wellness, beauty, and design — a deliberate move from a single brand into a multi-vertical group.",
  },
  {
    year: "IV",
    t: "A growing footprint across Dubai and Sharjah",
    p: "Multiple destinations across two emirates, a maturing portfolio, and the quiet operating muscle that comes with running brands at scale.",
  },
  {
    year: "V",
    t: "The next chapter",
    p: "Selective franchising, regional expansion, and continued investment in talent, systems, and standards.",
  },
];

const differences = [
  {
    h: "Cross-Category Intelligence",
    p: "Running food, wellness, beauty, and design under one group creates an operating edge no single-vertical operator can develop. What we learn in a grooming studio raises the bar in a dining room. The categories are distinct. The lessons compound.",
  },
  {
    h: "The Founders Are Still in the Room",
    p: "Aanka is not a PE rollup or a management company with delegated standards. The same people who conceived each brand still make the calls — on hiring, on design, on pricing, on what we won't compromise. That proximity is the guarantee.",
  },
  {
    h: "Engineered to Scale",
    p: "From the first outlet, every concept is built with replication in mind — documented playbooks, portable supply chains, identities that hold in any market. We don't figure out how to scale after the brand succeeds. We design for it from the start.",
  },
  {
    h: "Patience as Strategy",
    p: "In a market that moves fast, restraint is the rarest advantage. We expand when the unit economics work, the team is ready, and the brand is genuinely prepared — not when the calendar says so. Every brand you see from us passed that test.",
  },
];

const stats = [
  { k: "Dubai", v: "Founded & headquartered" },
  { k: "Dubai & Sharjah", v: "Currently operating" },
  { k: "GCC & beyond", v: "Open for franchise" },
];

function AboutPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / About"
        title={
          <>
            A UAE lifestyle group, <em className="italic">built brand by brand.</em>
          </>
        }
        intro="Aanka Group is a founder-led portfolio of lifestyle brands across food, wellness, beauty, and design — built with a long view, operated to a single standard, and designed for guests who notice the difference."
        media={{
          src: leader1,
          alt: "Founders of Aanka Group",
          caption: "Founded in Dubai by Aanand Mandelia & Priyanka Agarwal",
          ratio: "portrait",
        }}
      />

      {/* Founder story — image + expanded narrative */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              01b / Origin
            </span>
            <PulseLine variant="muted" className="h-4 flex-1" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <figure className="reveal col-span-12 md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-obsidian">
                <img
                  src={leader2}
                  alt="A founder of Aanka Group"
                  loading="lazy"
                  className="img-scale h-full w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-obsidian/10" />
              </div>
              <figcaption className="mt-4 font-sans text-[10px] uppercase tracking-luxury text-obsidian/55">
                Built in the UAE — designed to travel.
              </figcaption>
            </figure>

            <div
              className="reveal col-span-12 md:col-span-6 md:col-start-7"
              style={{ transitionDelay: "120ms" }}
            >
              <h2 className="display-md text-obsidian">
                The decision to build, <br />
                not just <em className="italic">observe.</em>
              </h2>

              <div className="mt-10 measure space-y-6 body-lead text-obsidian/85">
                <p>
                  Aanka Group was founded on a straightforward conviction: that
                  enduring businesses are built with intention, not assembled
                  for scale.
                </p>
                <p>
                  From a first venture in food, the portfolio has expanded
                  across four lifestyle sectors — each brand conceived,
                  financed, and run by the same founding team. The standard
                  is not a document. It is a habit.
                </p>
              </div>

              <blockquote className="mt-12 border-l-2 border-bronze pl-6 measure">
                <p className="font-serif text-xl italic leading-relaxed text-obsidian/90 md:text-2xl">
                  "Every decision we make — who to hire, where to open, what
                  to charge — comes back to one question: will this make the
                  experience better or worse?"
                </p>
                <footer className="mt-5 font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  — Aanand Mandelia &amp; Priyanka Agarwal, Founders
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.v}
                className="reveal flex items-baseline gap-6 bg-alabaster p-8 md:p-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-serif text-4xl italic text-bronze num-mono md:text-5xl">
                  {s.k}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-luxury text-obsidian/65">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tenets — image-backed dark cards */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Foundations
            </span>
            <PulseLine className="h-4 flex-1 opacity-70" />
          </div>

          <h2 className="reveal mb-20 display-lg">
            What we stand <em className="italic">on.</em>
          </h2>

          <div className="grid grid-cols-1 gap-px bg-alabaster/15 md:grid-cols-3">
            {tenets.map((t, i) => (
              <div
                key={t.h}
                className="reveal flex flex-col bg-obsidian"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-obsidian">
                  <img
                    src={t.img}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="img-scale h-full w-full object-cover opacity-55 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-10 md:p-12">
                  <span className="font-sans text-[11px] uppercase tracking-luxury text-bronze">
                    {t.h}
                  </span>
                  <p className="mt-8 font-serif text-xl font-light leading-relaxed text-alabaster/85 md:text-2xl">
                    {t.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey — sticky heading + expanded timeline + band image */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              03 / Journey
            </span>
            <PulseLine variant="muted" className="h-4 flex-1" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-4">
              <h2 className="reveal sticky top-28 display-md text-obsidian">
                Our <em className="italic">journey,</em> in five chapters.
              </h2>
              <p className="reveal mt-8 measure-narrow font-serif text-base font-light leading-relaxed text-obsidian/70 md:text-lg">
                A story written one brand at a time — and one customer at a time.
              </p>
            </div>

            <ol className="col-span-12 md:col-span-7 md:col-start-6">
              {timeline.map((step, i) => (
                <li
                  key={step.t}
                  className="reveal grid grid-cols-12 gap-6 border-b border-platinum/60 py-10 first:border-t md:py-12"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className="col-span-2 font-serif text-3xl italic text-bronze num-mono md:col-span-2 md:text-4xl">
                    {step.year}
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-serif text-xl font-light leading-tight text-obsidian md:text-2xl">
                      {step.t}
                    </h3>
                    <p className="mt-3 max-w-xl font-serif text-base font-light leading-relaxed text-obsidian/70 md:text-lg">
                      {step.p}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </section>

      {/* Differentiators — full-width numbered list */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              04 / Difference
            </span>
            <PulseLine className="h-4 flex-1 opacity-70" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-8 pb-16 md:pb-20">
            <h2 className="reveal col-span-12 font-serif text-4xl font-light leading-[1.1] tracking-tight md:col-span-7 md:text-6xl lg:text-7xl">
              What makes <em className="italic">Aanka</em> different.
            </h2>
            <p
              className="reveal col-span-12 self-end font-serif text-base font-light leading-relaxed text-alabaster/60 md:col-span-4 md:col-start-9 md:text-lg"
              style={{ transitionDelay: "100ms" }}
            >
              Not just what we do — but how we think, how we operate,
              and what we refuse to compromise on.
            </p>
          </div>

          <ol className="border-t border-alabaster/10">
            {differences.map((item, i) => (
              <li
                key={item.h}
                className="reveal grid grid-cols-12 gap-x-6 gap-y-4 border-b border-alabaster/10 py-10 md:py-12"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="col-span-2 font-serif text-sm italic text-bronze num-mono md:col-span-1 md:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 font-serif text-2xl font-light leading-tight text-alabaster md:col-span-4 md:text-3xl lg:text-4xl">
                  {item.h}
                </h3>
                <p className="col-span-12 font-serif text-base font-light leading-relaxed text-alabaster/60 md:col-span-6 md:col-start-7 md:text-lg">
                  {item.p}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Leadership />

      <CtaBlock
        eyebrow="08 / Collaborate"
        heading={<>Build the next chapter <em className="italic">with us.</em></>}
        body="From partnerships to careers, Aanka Group welcomes conversations rooted in vision, ambition, and shared standards."
        buttonLabel="Get in Touch"
        to="/contact"
      />
    </>
  );
}

function DifferenceCard({
  index,
  item,
  compact = false,
}: {
  index: number;
  item: { h: string; p: string };
  compact?: boolean;
}) {
  return (
    <div
      className={`reveal flex flex-col bg-alabaster ${compact ? "p-8 md:p-10" : "p-10 md:p-14"}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mt-8 font-serif text-2xl font-light leading-tight text-obsidian md:text-3xl">
        {item.h}
      </h3>
      <p className="mt-5 max-w-md font-serif text-base font-light leading-relaxed text-obsidian/70 md:text-lg">
        {item.p}
      </p>
    </div>
  );
}

function ImageCell({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="reveal relative min-h-[280px] overflow-hidden bg-obsidian md:min-h-[360px]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="img-scale absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-obsidian/10" />
    </div>
  );
}
