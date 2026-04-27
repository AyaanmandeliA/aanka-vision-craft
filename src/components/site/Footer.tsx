import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-obsidian text-alabaster">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 md:px-12 md:pt-32">
        {/* Large statement */}
        <div className="reveal grid grid-cols-12 gap-6 pb-20">
          <h2 className="col-span-12 font-serif text-4xl font-light leading-[1.05] tracking-tight md:col-span-9 md:text-6xl lg:text-7xl">
            Built with <em className="italic text-bronze">Vision.</em>
            <br />
            Growing with <em className="italic text-bronze">Purpose.</em>
          </h2>
          <a
            href="mailto:contact@aankagroup.com"
            className="col-span-12 self-end md:col-span-3 md:text-right"
          >
            <span className="font-sans text-[11px] uppercase tracking-luxury text-alabaster/60">
              Get in touch
            </span>
            <span className="mt-2 block font-serif text-xl text-alabaster transition-colors hover:text-bronze">
              contact@aankagroup.com →
            </span>
          </a>
        </div>

        <div className="hairline opacity-15" />

        <div className="grid grid-cols-12 gap-6 py-14">
          <div className="col-span-12 md:col-span-4">
            <div className="font-sans text-sm font-medium tracking-luxury">
              AANKA&nbsp;&nbsp;GROUP
            </div>
            <p className="mt-4 max-w-xs font-serif text-sm font-light leading-relaxed text-alabaster/55">
              A house of brands across hospitality, wellness, beauty, and design.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
              Contact
            </div>
            <a
              href="tel:+971507847968"
              className="mt-4 block font-serif text-base font-light text-alabaster/85 hover:text-alabaster"
            >
              +971 50 784 7968
            </a>
            <a
              href="mailto:contact@aankagroup.com"
              className="mt-2 block font-serif text-base font-light text-alabaster/85 hover:text-alabaster"
            >
              contact@aankagroup.com
            </a>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
              Headquarters
            </div>
            <p className="mt-4 font-serif text-base font-light text-alabaster/85">
              United Arab Emirates
            </p>
          </div>

          <div className="col-span-12 md:col-span-2 md:text-right">
            <div className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
              Follow
            </div>
            <div className="mt-4 flex items-center gap-4 md:justify-end">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-alabaster/75 transition-colors hover:text-bronze"
              >
                <Linkedin size={18} strokeWidth={1.25} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-alabaster/75 transition-colors hover:text-bronze"
              >
                <Instagram size={18} strokeWidth={1.25} />
              </a>
            </div>
          </div>
        </div>

        <div className="hairline opacity-15" />

        <div className="flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center">
          <p className="font-sans text-[11px] uppercase tracking-wider-2 text-alabaster/45">
            © 2024 Aanka Group. Built with Vision. Growing with Purpose.
          </p>
          <p className="font-sans text-[11px] uppercase tracking-wider-2 text-alabaster/45 num-mono">
            UAE — MMXXIV
          </p>
        </div>
      </div>
    </footer>
  );
}
