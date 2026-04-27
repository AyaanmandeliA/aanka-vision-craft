import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";

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
    ],
  }),
});

const reasons = [
  {
    h: "Be part of a growing multi-brand group",
    p: "Work alongside teams shaping six lifestyle brands under one shared standard.",
  },
  {
    h: "Work across exciting lifestyle categories",
    p: "From food and wellness to interiors and design, every day touches a different discipline.",
  },
  {
    h: "Grow with a business that values progress",
    p: "Ambition is met with structure, mentorship, and meaningful responsibility.",
  },
  {
    h: "An environment shaped by people",
    p: "Our culture values experience, craftsmanship, and the long view.",
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
            Build Your Future <br />
            <em className="italic">With Aanka Group</em>
          </>
        }
        intro="As Aanka Group continues to grow across industries, it also continues to create opportunities for people who want to be part of a dynamic and evolving business journey."
      />

      {/* Why Join */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-16 flex items-center gap-6 md:mb-24">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Why Join
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>

          <h2 className="reveal mb-16 font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Why Join <em className="italic">Us</em>
          </h2>

          <div className="grid grid-cols-1 gap-px bg-alabaster/15 md:grid-cols-2">
            {reasons.map((r, i) => (
              <div
                key={r.h}
                className="reveal flex flex-col bg-obsidian p-10 md:p-12"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-serif text-2xl italic text-bronze num-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-serif text-2xl font-light leading-tight text-alabaster md:text-3xl">
                  {r.h}
                </h3>
                <p className="mt-5 max-w-md font-serif text-base font-light leading-relaxed text-alabaster/70 md:text-lg">
                  {r.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-16 flex items-center gap-6 md:mb-24">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              03 / Apply
            </span>
            <span className="h-px flex-1 bg-platinum/60" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <h2 className="reveal col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-7 md:text-5xl">
              Submit Your <em className="italic">Profile</em>
            </h2>
            <p className="reveal col-span-12 self-end font-serif text-lg font-light leading-relaxed text-obsidian/75 md:col-span-4 md:col-start-9">
              Candidates can apply for current opportunities through the careers form, or submit their profile for future openings.
            </p>
          </div>

          <form className="mt-20 grid grid-cols-12 gap-6">
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
      </section>

      <CtaBlock
        eyebrow="04 / Connect"
        heading={<>Questions Before <em className="italic">Applying?</em></>}
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
