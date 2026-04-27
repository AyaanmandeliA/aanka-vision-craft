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
    t: "A growing UAE-wide footprint",
    p: "Multiple destinations, a maturing portfolio, and the quiet operating muscle that comes with running brands at scale.",
  },
  {
    year: "V",
    t: "The next chapter",
    p: "Selective franchising, regional expansion, and continued investment in talent, systems, and standards.",
  },
];

const differences = [
  {
    h: "Founder-Operated, Not Franchised In",
    p: "Every brand under Aanka was built by us, financed by us, and is operated by us. The standard isn't outsourced — it lives in the room.",
  },
  {
    h: "One Operating Standard, Six Brands",
    p: "Different categories, different audiences, one set of non-negotiables: hospitality, hygiene, design, and the long view.",
  },
  {
    h: "Capital Discipline",
    p: "We open when the unit economics work, the team is trained, and the brand is ready — not when a deck says we should.",
  },
  {
    h: "Designed to Travel",
    p: "Concepts engineered for portability — playbooks, supply chains, and identities that hold up in any market we choose to enter.",
  },
];

const stats = [
  { k: "06", v: "Active brands" },
  { k: "04", v: "Lifestyle categories" },
  { k: "UAE", v: "Headquartered & growing" },
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
        intro="Aanka Group is a founder-led portfolio of six lifestyle brands across food, wellness, beauty, and design. We don't operate venues — we build brands designed for return, run with one shared standard of care."
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
                  className="img-scale h-full w-full object-cover grayscale"
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
                Built with <em className="italic">vision.</em>
                <br />
                Grown with <em className="italic">purpose.</em>
              </h2>

              <div className="mt-10 measure space-y-6 body-lead text-obsidian/85">
                <p>
                  Aanka Group started with a simple bet: that in a market crowded
                  with concepts, the businesses worth building are the ones people
                  quietly choose to return to.
                </p>
                <p>
                  From a first venture in food, the group has grown into a six-brand
                  portfolio across hospitality, wellness, beauty, and design — each
                  one founded, financed, and operated by us. No franchises bought
                  in. No shortcuts. Six brands. One standard.
                </p>
              </div>

              <blockquote className="mt-12 border-l-2 border-bronze pl-6 measure">
                <p className="font-serif text-xl italic leading-relaxed text-obsidian/90 md:text-2xl">
                  “We're not in the restaurant business or the salon business.
                  We're in the business of building brands worth returning to.”
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

        {/* Full-bleed band image */}
        <div className="reveal relative h-[40vh] min-h-[320px] w-full overflow-hidden bg-obsidian md:h-[55vh]">
          <img
            src={hero}
            alt="The Aanka Group landscape"
            loading="lazy"
            className="img-scale h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/35" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-12 md:pb-14">
            <p className="font-serif text-2xl font-light italic text-alabaster md:text-4xl lg:text-5xl">
              “Built with vision. Growing with purpose.”
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators — 2×2 image + text bento */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              04 / Difference
            </span>
            <PulseLine variant="muted" className="h-4 flex-1" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <h2 className="reveal col-span-12 display-lg md:col-span-7">
              What makes <em className="italic">Aanka</em> different.
            </h2>
            <p
              className="reveal col-span-12 self-end measure font-serif text-base font-light leading-relaxed text-obsidian/70 md:col-span-4 md:col-start-9 md:text-lg"
              style={{ transitionDelay: "100ms" }}
            >
              Four operating choices — visible in every brand, every fit-out,
              and every hire we make.
            </p>
          </div>

          {/* 2x2 bento — text, image, image, text */}
          <div className="mt-16 grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-2">
            <DifferenceCard index={1} item={differences[0]} />
            <ImageCell src={ladies} alt="Aanka brand interior detail" />
            <ImageCell src={khau} alt="Aanka hospitality detail" />
            <DifferenceCard index={2} item={differences[1]} />
          </div>

          {/* Slim follow-up row for the remaining two */}
          <div className="mt-px grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-2">
            <DifferenceCard index={3} item={differences[2]} compact />
            <DifferenceCard index={4} item={differences[3]} compact />
          </div>
        </div>
      </section>

      <FoundersNote />

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
