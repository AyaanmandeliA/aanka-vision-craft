import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import { Leadership } from "@/components/site/Leadership";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Aanka Group" },
      {
        name: "description",
        content:
          "The vision, mission, and philosophy behind Aanka Group — a UAE-based holding building memorable lifestyle brands.",
      },
      { property: "og:title", content: "About — Aanka Group" },
      {
        property: "og:description",
        content:
          "Built with passion. Growing with purpose. The story of Aanka Group's portfolio across hospitality, wellness, beauty, and design.",
      },
    ],
  }),
});

const tenets = [
  {
    h: "Our Vision",
    p: "To build a portfolio of memorable lifestyle brands that shape how people dine, unwind, groom, and live.",
  },
  {
    h: "Our Mission",
    p: "To create customer-centric businesses across food, wellness, beauty, and design — guided by quality, consistency, and thoughtful growth.",
  },
  {
    h: "Our Philosophy",
    p: "Hospitality. Experience. Lifestyle. These three ideas continue to shape every brand, every space, and every customer touchpoint under Aanka Group.",
  },
];

const timeline = [
  { year: "I", t: "Beginning of the entrepreneurial journey" },
  { year: "II", t: "Launch of the first customer-facing brand and outlet" },
  { year: "III", t: "Expansion into multiple lifestyle categories" },
  { year: "IV", t: "Development of a growing portfolio across the UAE" },
  { year: "V", t: "Continued scale across brands, locations, and opportunities" },
];

const differences = [
  "A multi-brand mindset with customer experience at the core",
  "A portfolio that spans complementary lifestyle categories",
  "A practical approach to growth — built with intent, not randomness",
  "A focus on building brands that are memorable, relevant, and scalable",
];

function AboutPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / About"
        title={
          <>
            The Name Behind <em className="italic">Memorable</em>
            <br />
            Lifestyle Brands
          </>
        }
        intro="Aanka Group was built with a vision to create brands that people remember, return to, and trust. What began as an entrepreneurial journey has evolved into a growing multi-brand group spanning hospitality, wellness, beauty, and design."
      />

      {/* Founder story */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 gap-y-12 px-6 pb-28 md:px-12 md:pb-40">
          <h2 className="reveal col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-6 md:text-5xl">
            Built with <em className="italic">Passion.</em>
            <br />
            Growing with <em className="italic">Purpose.</em>
          </h2>
          <p className="reveal col-span-12 self-end font-serif text-lg font-light leading-relaxed text-obsidian/75 md:col-span-5 md:col-start-8">
            Driven by a shared ambition to build meaningful businesses, the founders of Aanka Group set out to create brands that combine relevance, experience, and long-term value. Their journey reflects an understanding of what modern customers seek — not just products or services, but spaces and experiences they genuinely connect with.
          </p>
        </div>
      </section>

      {/* Tenets */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-16 flex items-center gap-6 md:mb-24">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Foundations
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>

          <div className="grid grid-cols-1 gap-px bg-alabaster/15 md:grid-cols-3">
            {tenets.map((t, i) => (
              <div
                key={t.h}
                className="reveal flex flex-col bg-obsidian p-10 md:p-14"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-sans text-[11px] uppercase tracking-luxury text-bronze">
                  {t.h}
                </span>
                <p className="mt-10 font-serif text-xl font-light leading-relaxed text-alabaster/85 md:text-2xl">
                  {t.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-16 flex items-center gap-6 md:mb-24">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              03 / Journey
            </span>
            <span className="h-px flex-1 bg-platinum/60" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10 mb-20">
            <h2 className="col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-7 md:text-5xl">
              Our <em className="italic">Journey</em>
            </h2>
          </div>

          <ol className="space-y-px bg-platinum/60">
            {timeline.map((step, i) => (
              <li
                key={step.t}
                className="reveal grid grid-cols-12 gap-6 bg-alabaster py-8 md:py-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="col-span-2 font-serif text-2xl italic text-bronze num-mono md:col-span-1">
                  {step.year}
                </span>
                <p className="col-span-10 font-serif text-lg font-light leading-relaxed text-obsidian/85 md:col-span-9 md:text-xl">
                  {step.t}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-28 md:px-12 md:pb-40">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <h2 className="reveal col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-6 md:text-5xl">
              What Makes <em className="italic">Aanka</em> Different
            </h2>
            <ul className="col-span-12 grid grid-cols-1 gap-px bg-platinum/60 md:col-span-12 md:grid-cols-2">
              {differences.map((d, i) => (
                <li
                  key={d}
                  className="reveal bg-alabaster p-8 font-serif text-lg font-light leading-relaxed text-obsidian/80 md:p-10 md:text-xl"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="mb-4 block font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Leadership />

      <CtaBlock
        eyebrow="08 / Collaborate"
        heading={<>Build the Next Chapter <em className="italic">With Us</em></>}
        body="From partnerships to careers, Aanka Group welcomes conversations rooted in vision, ambition, and shared standards."
        buttonLabel="Get in Touch"
        to="/contact"
      />
    </>
  );
}
