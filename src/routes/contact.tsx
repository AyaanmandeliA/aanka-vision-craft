import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader } from "@/components/site/PageShell";
import { Phone, Mail, MessageCircle } from "lucide-react";

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
            Get in <em className="italic">Touch</em>
          </>
        }
        intro="Whether you are looking to connect for business enquiries, partnerships, careers, or general information, the Aanka Group team is happy to hear from you."
      />

      {/* Contact channels */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12 md:pb-32">
          <div className="grid grid-cols-1 gap-px bg-platinum/60 md:grid-cols-3">
            <ContactCard
              icon={<Phone size={18} strokeWidth={1.25} />}
              label="Call"
              value="+971 50 784 7968"
              href="tel:+971507847968"
            />
            <ContactCard
              icon={<Mail size={18} strokeWidth={1.25} />}
              label="Email"
              value="contact@aankagroup.com"
              href="mailto:contact@aankagroup.com"
            />
            <ContactCard
              icon={<MessageCircle size={18} strokeWidth={1.25} />}
              label="WhatsApp"
              value="Message Our Team"
              href="https://wa.me/971507847968"
            />
          </div>
        </div>
      </section>

      {/* Enquiry routing */}
      <section className="bg-obsidian text-alabaster">
        <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-16 flex items-center gap-6 md:mb-24">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              02 / Enquire
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-5">
              <h2 className="reveal font-serif text-3xl font-light leading-[1.1] tracking-tight md:text-5xl">
                Send Us a <em className="italic">Message</em>
              </h2>
              <p className="reveal mt-8 max-w-md font-serif text-lg font-light leading-relaxed text-alabaster/70">
                The contact page is simple, clean, and direct — making it easy for the right enquiry to reach the right team.
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
                    Career Enquiries
                  </dt>
                  <dd className="mt-2 font-serif text-lg font-light text-alabaster/85">
                    Apply through the careers page
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
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="reveal group flex flex-col bg-alabaster p-10 transition-colors duration-500 hover:bg-obsidian hover:text-alabaster md:p-14"
    >
      <span className="text-bronze">{icon}</span>
      <span className="mt-10 font-sans text-[10px] uppercase tracking-luxury text-bronze">
        {label}
      </span>
      <span className="mt-3 font-serif text-2xl font-light leading-tight md:text-3xl">
        {value}
      </span>
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
