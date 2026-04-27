import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader } from "@/components/site/PageShell";
import { Phone, Mail, MessageCircle } from "lucide-react";
import zaikaInterior from "@/assets/brands/zaika-interior.jpg";
import deco from "@/assets/brands/deco.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Aanka Group" },
      {
        name: "description",
        content:
          "Get in touch with Aanka Group for business enquiries, partnerships, careers, or general information.",
      },
      { property: "og:title", content: "Contact — Aanka Group" },
      {
        property: "og:description",
        content:
          "Reach the Aanka Group team in the UAE — phone, email, WhatsApp, and enquiry form.",
      },
      { property: "og:image", content: zaikaInterior },
      { name: "twitter:image", content: zaikaInterior },
    ],
  }),
});

function ContactPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / Contact"
        title={
          <>
            Get in <em className="italic">touch.</em>
          </>
        }
        intro="Whether you are looking to connect for business enquiries, partnerships, careers, or general information, the Aanka Group team is happy to hear from you — usually within one business day."
        media={{
          src: zaikaInterior,
          alt: "Aanka Group hospitality",
          caption: "Headquartered in Dubai, UAE.",
          ratio: "portrait",
        }}
      />

      {/* Contact channels — cards + image */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-px md:gap-y-px">
            <div className="col-span-12 grid grid-cols-1 gap-px bg-platinum/60 md:col-span-8 md:grid-cols-1">
              <ContactCard
                icon={<Phone size={18} strokeWidth={1.25} />}
                label="Call"
                value="+971 50 784 7968"
                meta="Sun – Thu · 09:00 – 18:00 GST"
                href="tel:+971507847968"
              />
              <ContactCard
                icon={<Mail size={18} strokeWidth={1.25} />}
                label="Email"
                value="contact@aankagroup.com"
                meta="We reply within one business day"
                href="mailto:contact@aankagroup.com"
              />
              <ContactCard
                icon={<MessageCircle size={18} strokeWidth={1.25} />}
                label="WhatsApp"
                value="Message Our Team"
                meta="Fastest for time-sensitive enquiries"
                href="https://wa.me/971507847968"
              />
            </div>
            <div className="reveal col-span-12 md:col-span-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-obsidian md:aspect-auto md:h-full md:min-h-[420px]">
                <img
                  src={deco}
                  alt="Aanka Group studio"
                  loading="lazy"
                  className="img-scale h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/55 via-obsidian/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
                  <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/85">
                    Dubai · UAE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry routing */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Enquire
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-5">
              <h2 className="reveal font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
                Send us a <em className="italic">message.</em>
              </h2>
              <p className="reveal mt-8 max-w-md font-serif text-lg font-light leading-relaxed text-alabaster/70">
                Tell us a little about what you're looking for. We'll route your
                enquiry to the right person at Aanka Group.
              </p>

              <dl className="mt-14 space-y-8 border-t border-alabaster/15 pt-8">
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                    Business / Partnership
                  </dt>
                  <dd className="mt-2 font-serif text-lg font-light text-alabaster/85">
                    Use the enquiry type "Partnership"
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                    Franchise Enquiries
                  </dt>
                  <dd className="mt-2 font-serif text-lg font-light text-alabaster/85">
                    Visit the Partner page for details
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                    Career Enquiries
                  </dt>
                  <dd className="mt-2 font-serif text-lg font-light text-alabaster/85">
                    Apply through the careers page
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                    Office Hours
                  </dt>
                  <dd className="mt-2 font-serif text-lg font-light text-alabaster/85">
                    Sun – Thu · 09:00 – 18:00 GST
                  </dd>
                </div>
              </dl>
            </div>

            <form className="reveal col-span-12 grid grid-cols-12 gap-6 md:col-span-6 md:col-start-7" style={{ transitionDelay: "120ms" }}>
              <DarkField label="Full Name" name="name" className="md:col-span-6" />
              <DarkField label="Email" name="email" type="email" className="md:col-span-6" />
              <DarkField label="Phone" name="phone" type="tel" className="md:col-span-6" />
              <label className="col-span-12 block md:col-span-6">
                <span className="block font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Enquiry Type
                </span>
                <select
                  name="type"
                  className="mt-3 w-full appearance-none border-0 border-b border-alabaster/20 bg-transparent py-3 font-serif text-lg font-light text-alabaster focus:border-bronze focus:outline-none"
                  defaultValue="general"
                >
                  <option value="general" className="bg-obsidian">General</option>
                  <option value="partnership" className="bg-obsidian">Partnership</option>
                  <option value="franchise" className="bg-obsidian">Franchise</option>
                  <option value="press" className="bg-obsidian">Press</option>
                </select>
              </label>

              <label className="col-span-12 block">
                <span className="block font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Message
                </span>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us how we can help"
                  className="mt-3 w-full border-0 border-b border-alabaster/20 bg-transparent py-3 font-serif text-lg font-light text-alabaster placeholder:text-alabaster/35 focus:border-bronze focus:outline-none"
                />
              </label>

              <div className="col-span-12 mt-4">
                <button
                  type="button"
                  className="group inline-flex items-center gap-4 bg-alabaster px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-obsidian transition-colors duration-500 hover:bg-bronze hover:text-alabaster"
                >
                  Send Enquiry
                  <span className="block h-px w-8 bg-obsidian transition-all duration-500 group-hover:w-12 group-hover:bg-alabaster" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  meta,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  meta?: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="reveal group flex items-baseline justify-between gap-8 bg-alabaster p-10 transition-colors duration-500 hover:bg-obsidian hover:text-alabaster md:p-12"
    >
      <div className="flex items-baseline gap-6">
        <span className="text-bronze">{icon}</span>
        <div>
          <span className="block font-sans text-[10px] uppercase tracking-luxury text-bronze">
            {label}
          </span>
          <span className="mt-2 block font-serif text-2xl font-light leading-tight md:text-3xl">
            {value}
          </span>
        </div>
      </div>
      {meta ? (
        <span className="hidden max-w-[12rem] text-right font-sans text-[10px] uppercase tracking-warm text-obsidian/50 group-hover:text-alabaster/55 md:block">
          {meta}
        </span>
      ) : null}
    </a>
  );
}

function DarkField({
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
    <label className={`col-span-12 block ${className}`}>
      <span className="block font-sans text-[10px] uppercase tracking-luxury text-bronze">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="mt-3 w-full border-0 border-b border-alabaster/20 bg-transparent py-3 font-serif text-lg font-light text-alabaster placeholder:text-alabaster/35 focus:border-bronze focus:outline-none"
      />
    </label>
  );
}
