import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import { Leadership } from "@/components/site/Leadership";
import { FoundersNote } from "@/components/site/FoundersNote";
import aanand from "@/assets/brands/founders/aanand.webp";
import duoStudio from "@/assets/brands/founders/duo-studio.jpeg";
import zaikaCounter from "@/assets/brands/zaika/counter.webp";
import decoBedroom from "@/assets/brands/deco/bedroom.jpg";
import cemInterior from "@/assets/brands/cem/interior-1.jpg";
import duoStudio2 from "@/assets/brands/founders/duo-studio-2.jpeg";
import { PulseLine } from "@/components/site/AankaLogo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Aanka Group" },
      {
        name: "description",
        content:
          "The founders, values, and family-built story behind Aanka Group — a UAE business group built across hospitality, beauty, wellness, interiors and construction.",
      },
      { property: "og:title", content: "About — Aanka Group" },
      {
        property: "og:description",
        content:
          "Built with Passion. Growing with Trust. The story of a family-built portfolio of customer-focused brands.",
      },
      { property: "og:image", content: duoStudio2 },
      { name: "twitter:image", content: duoStudio2 },
    ],
  }),
});

const tenets = [
  {
    h: "Our Belief",
    img: zaikaCounter,
    p: "People come first. When customers, teams and partners are treated with care, meaningful growth follows.",
  },
  {
    h: "Our Promise",
    img: decoBedroom,
    p: "To build customer-focused brands where quality, consistency and warmth can be felt in every experience.",
  },
  {
    h: "Our Way",
    img: cemInterior,
    p: "Hospitality is a mindset. Every space, service and decision is judged by how it makes people feel.",
  },
];

const timeline = [
  {
    year: "I",
    t: "An entrepreneurial beginning",
    p: "A family decision to build something of our own through hard work, belief and close customer relationships.",
  },
  {
    year: "II",
    t: "Our first customer-facing brand",
    p: "The opening of our first outlet, and the lessons that only come from serving real customers every single day.",
  },
  {
    year: "III",
    t: "Expansion into new categories",
    p: "From hospitality into beauty, wellness, interiors and construction — growth shaped by opportunity, service and trust.",
  },
  {
    year: "IV",
    t: "A growing footprint across Dubai and Sharjah",
    p: "More destinations across two emirates, supported by teams who understand the value of consistency and care.",
  },
  {
    year: "V",
    t: "The next chapter",
    p: "Thoughtful partnerships, regional growth, and continued investment in people, standards and customer experience.",
  },
];

const differences = [
  {
    h: "Family Values. Professional Standards.",
    p: "At Aanka Group, we combine the personal commitment of a family business with the professionalism and ambition required to build lasting brands.",
  },
  {
    h: "Close to Every Business",
    p: "Our leadership remains closely involved in every brand, ensuring decisions are guided by long-term relationships, operational excellence and customer satisfaction.",
  },
  {
    h: "Built by Entrepreneurs",
    p: "Aanka Group was built through experience, risk, learning and persistence — not by acquiring disconnected businesses from a distance.",
  },
  {
    h: "Growth with Responsibility",
    p: "We grow when the team is ready, the customer promise is clear and the brand can uphold the trust people place in it.",
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
            A family-built group, <em className="italic">grown brand by brand.</em>
          </>
        }
        intro="Aanka Group is a family-built portfolio of customer-focused brands across hospitality, beauty, wellness, interiors and construction — shaped by hard work, service and long-term trust."
        media={{
          src: duoStudio,
          alt: "Aanand Mandelia & Priyanka Agarwal, Co-founders of Aanka Group",
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
                  src={duoStudio2}
                  alt="Aanand Mandelia & Priyanka Agarwal, Co-founders of Aanka Group"
                  loading="lazy"
                  className="img-scale h-full w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-obsidian/10" />
              </div>
              <figcaption className="mt-4 font-sans text-[10px] uppercase tracking-luxury text-obsidian/55">
                Built in the UAE — rooted in relationships.
              </figcaption>
            </figure>

            <div
              className="reveal col-span-12 md:col-span-6 md:col-start-7"
              style={{ transitionDelay: "120ms" }}
            >
              <h2 className="display-md text-obsidian">
                Built with care, <br />
                one relationship at a <em className="italic">time.</em>
              </h2>

              <div className="mt-10 measure space-y-6 body-lead text-obsidian/85">
                <p>
                  Aanka Group was founded on a simple belief: when people are
                  at the heart of every decision, meaningful growth follows.
                </p>
                <p>
                  What began as an entrepreneurial vision has evolved into a
                  diverse portfolio across hospitality, beauty, wellness,
                  interiors and construction. Each brand serves a different
                  purpose, but all are held together by integrity, quality,
                  innovation and exceptional customer experience.
                </p>
                <p>
                  Today, Aanka Group continues to build businesses that create
                  value, strengthen communities and earn the trust of customers,
                  employees and partners alike.
                </p>
              </div>

              <blockquote className="mt-12 border-l-2 border-bronze pl-6 measure">
                <p className="font-serif text-xl italic leading-relaxed text-obsidian/90 md:text-2xl">
                  "Every decision we make comes back to people — the customers
                  we serve, the teams we build, and the trust we hope to earn
                  every day."
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
              Not just what we do — but how closely we stay connected to the
              people, places and relationships behind every brand.
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
        body="From partnerships to careers, Aanka Group welcomes conversations rooted in trust, service and shared standards."
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
