import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";

export const Route = createFileRoute("/partner")({
  component: PartnerPage,
  head: () => ({
    meta: [
      { title: "Partner With Us — Aanka Group" },
      {
        name: "description",
        content:
          "Partner with Aanka Group on franchise, expansion, and strategic collaborations across hospitality, wellness, beauty, and design.",
      },
      { property: "og:title", content: "Partner With Us — Aanka Group" },
      {
        property: "og:description",
        content:
          "A growing portfolio across high-engagement lifestyle categories, built with clarity and intent.",
      },
    ],
  }),
});

const why = [
  "A growing portfolio across high-engagement lifestyle categories",
  "Experience-led brands with strong customer relevance",
  "A practical, growth-oriented business mindset",
  "A group structure designed to support expansion with clarity and intent",
];

const offer = [
  "Brand-backed partnership opportunities",
  "Operational guidance and structured support",
  "A shared vision for scale and long-term value creation",
];

function PartnerPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / Partner"
        title={
          <>
            Partner with a Group <br />
            <em className="italic">Built for Growth</em>
          </>
        }
        intro="Aanka Group welcomes partnerships that align with its vision of building customer-facing brands with clarity, ambition, and long-term value. Whether you are exploring franchise opportunities, strategic collaborations, or brand expansion, we are open to meaningful conversations."
      />

      {/* Why Partner */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-16 flex items-center gap-6 md:mb-24">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Why Partner
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <h2 className="reveal col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-7 md:text-5xl">
              Why Partner With <em className="italic">Aanka Group</em>
            </h2>
          </div>

          <ul className="mt-16 grid grid-cols-1 gap-px bg-alabaster/15 md:grid-cols-2">
            {why.map((w, i) => (
              <li
                key={w}
                className="reveal bg-obsidian p-10 md:p-12"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-serif text-2xl italic text-bronze num-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-8 font-serif text-lg font-light leading-relaxed text-alabaster/85 md:text-xl">
                  {w}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-16 flex items-center gap-6 md:mb-24">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              03 / What We Offer
            </span>
            <span className="h-px flex-1 bg-platinum/60" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <h2 className="reveal col-span-12 font-serif text-3xl font-light leading-[1.1] tracking-tight md:col-span-7 md:text-5xl">
              A Foundation for <em className="italic">Shared Growth</em>
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-3">
            {offer.map((o, i) => (
              <div
                key={o}
                className="reveal bg-alabaster p-10 md:p-12"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-serif text-2xl italic text-bronze num-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-8 font-serif text-lg font-light leading-relaxed text-obsidian/80 md:text-xl">
                  {o}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="04 / Enquire"
        heading={<>Begin a <em className="italic">Conversation</em></>}
        body="To explore partnership or franchise opportunities with Aanka Group, please connect with us through the enquiry form."
        buttonLabel="Send Enquiry"
        to="/contact"
      />
    </>
  );
}
