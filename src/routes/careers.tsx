import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import ladiesHero from "@/assets/brands/cel/salon.jpg";
import khaugalli from "@/assets/brands/khau/storefront.jpg";
import { PulseLine } from "@/components/site/AankaLogo";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — Aanka Group" },
      {
        name: "description",
        content:
          "Build your future with Aanka Group across hospitality, wellness, beauty, design, and construction in the UAE.",
      },
      { property: "og:title", content: "Careers — Aanka Group" },
      {
        property: "og:description",
        content:
          "A growing multi-brand group creating opportunities for ambitious people across lifestyle categories.",
      },
      { property: "og:image", content: ladiesHero },
      { name: "twitter:image", content: ladiesHero },
    ],
  }),
});

const reasons = [
  {
    h: "Be part of a growing multi-brand group",
    p: "Work alongside teams shaping a portfolio of lifestyle brands under one shared standard — and learn how a multi-vertical group actually runs, day to day.",
    img: zaikaHero,
  },
  {
    h: "Work across exciting lifestyle categories",
    p: "From food and wellness to interiors and design, every day touches a different discipline — and every project sharpens a different skill.",
    img: decoHero,
  },
  {
    h: "Grow with a business that values progress",
    p: "Ambition is met with structure, mentorship, and meaningful responsibility. We promote from within and invest in the people who invest in the work.",
    img: gentsHero,
  },
  {
    h: "An environment shaped by people",
    p: "Our culture values experience, craftsmanship, and the long view — colleagues who care about the detail, and leaders who notice it.",
    img: ladiesHero,
  },
];

function CareersPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / Careers"
        title={
          <>
            Build your future <br />
            <em className="italic">with Aanka Group.</em>
          </>
        }
        intro="As Aanka Group continues to grow across industries, we continue to create opportunities for people who want to be part of a dynamic, evolving business journey — across food, wellness, beauty, design, and construction."
        media={{
          src: ladiesHero,
          alt: "Aanka Group — Cutting Edge Ladies",
          caption: "Built in the UAE — staffed by people who care.",
          ratio: "portrait",
        }}
      />

      {/* Why Join */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Why Join
            </span>
            <PulseLine className="h-4 flex-1 opacity-70" />
          </div>

          <h2 className="reveal mb-16 font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Why join <em className="italic">us.</em>
          </h2>

          <ol className="border-t border-alabaster/10">
            {reasons.map((r, i) => (
              <li
                key={r.h}
                className="reveal grid grid-cols-12 gap-x-6 border-b border-alabaster/10 py-10 md:py-12"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="col-span-2 font-serif text-sm italic text-bronze num-mono md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 font-serif text-2xl font-light leading-tight md:col-span-4 md:text-3xl">
                  {r.h}
                </h3>
                <p className="col-span-12 mt-4 font-serif text-base font-light leading-relaxed text-alabaster/65 md:col-span-6 md:col-start-7 md:mt-0 md:text-lg">
                  {r.p}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Apply — image + form */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              03 / Apply
            </span>
            <PulseLine variant="muted" className="h-4 flex-1" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <figure className="reveal col-span-12 md:col-span-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-obsidian">
                <img
                  src={khaugalli}
                  alt="Aanka Group craftsmanship"
                  loading="lazy"
                  className="img-scale h-full w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-obsidian/10" />
              </div>
              <figcaption className="mt-4 font-sans text-[10px] uppercase tracking-luxury text-obsidian/55">
                Built in the UAE. Growing across the GCC.
              </figcaption>
            </figure>

            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <h2 className="reveal font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
                Submit your <em className="italic">profile.</em>
              </h2>
              <p
                className="reveal mt-8 max-w-xl font-serif text-lg font-light leading-relaxed text-obsidian/75"
                style={{ transitionDelay: "100ms" }}
              >
                Apply for current opportunities, or share your profile for future
                openings across our brands. We review every application personally.
              </p>

              <form className="mt-12 grid grid-cols-12 gap-6">
                <Field label="Full Name" name="name" className="md:col-span-6" />
                <Field label="Email" name="email" type="email" className="md:col-span-6" />
                <Field label="Phone" name="phone" type="tel" className="md:col-span-6" />
                <Field label="Area of Interest" name="role" className="md:col-span-6" />

                <label className="reveal col-span-12 block">
                  <span className="block font-sans text-[10px] uppercase tracking-luxury text-bronze">
                    Tell us about yourself
                  </span>
                  <textarea
                    rows={5}
                    name="message"
                    className="mt-3 w-full border-0 border-b border-platinum/60 bg-transparent py-3 font-serif text-lg font-light text-obsidian placeholder:text-obsidian/35 focus:border-obsidian focus:outline-none"
                    placeholder="Brief introduction, current role, link to portfolio or CV"
                  />
                </label>

                <div className="col-span-12 mt-4">
                  <button
                    type="button"
                    className="group inline-flex items-center gap-4 bg-obsidian px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-alabaster transition-colors duration-500 hover:bg-bronze"
                  >
                    Submit Application
                    <span className="block h-px w-8 bg-alabaster transition-all duration-500 group-hover:w-12" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="04 / Connect"
        heading={<>Questions before <em className="italic">applying?</em></>}
        body="Speak with the Aanka Group team for clarity on roles, opportunities, or future openings across our brands."
        buttonLabel="Contact Us"
        to="/contact"
      />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`reveal col-span-12 block ${className}`}>
      <span className="block font-sans text-[10px] uppercase tracking-luxury text-bronze">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="mt-3 w-full border-0 border-b border-platinum/60 bg-transparent py-3 font-serif text-lg font-light text-obsidian placeholder:text-obsidian/35 focus:border-obsidian focus:outline-none"
      />
    </label>
  );
}
