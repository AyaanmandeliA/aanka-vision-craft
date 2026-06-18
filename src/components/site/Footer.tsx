import { Linkedin, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AankaLogo, PulseLine } from "./AankaLogo";

export function Footer() {
  return (
    <footer className="bg-obsidian text-alabaster">
      <div className="mx-auto max-w-[1440px] px-6 pt-16 md:px-12 md:pt-20">
        {/* Large statement */}
        <div className="reveal grid grid-cols-12 gap-6 pb-10 md:pb-14">
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Built with <em className="italic text-bronze">Passion.</em>
              <br />
              Growing with <em className="italic text-bronze">Trust.</em>
            </h2>
            <Link
              to="/contact"
              className="mt-6 inline-block md:mt-8"
            >
              <span className="font-sans text-[11px] uppercase tracking-luxury text-alabaster/60">
                Get in touch
              </span>
              <span className="mt-1 block font-serif text-xl text-alabaster transition-colors hover:text-bronze">
                contact@aankagroup.com →
              </span>
            </Link>
          </div>
        </div>

        <PulseLine className="h-4 w-full opacity-80" />

        <div className="grid grid-cols-12 gap-6 py-10 md:py-12">
          <div className="col-span-12 md:col-span-4">
            <Link to="/" className="font-sans text-sm font-medium tracking-luxury">
              AANKA&nbsp;&nbsp;GROUP
            </Link>
            <p className="mt-4 max-w-xs font-serif text-sm font-light leading-relaxed text-alabaster/55">
              Built with Passion. Growing with Trust.
              A family-built portfolio of brands dedicated to delivering exceptional
              experiences across hospitality, beauty, wellness, interiors and construction.
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
              Explore
            </div>
            <nav className="mt-4 flex flex-col gap-2 font-serif text-base font-light text-alabaster/85">
              <Link to="/about" className="hover:text-alabaster">About</Link>
              <Link to="/businesses" className="hover:text-alabaster">Businesses</Link>
              <Link to="/careers" className="hover:text-alabaster">Careers</Link>
              <Link to="/partner" className="hover:text-alabaster">Partner With Us</Link>
            </nav>
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

        <PulseLine className="h-4 w-full opacity-80" />

        <div className="flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center">
          <p className="font-sans text-[11px] uppercase tracking-wider-2 text-alabaster/45">
            © 2024 Aanka Group. Built with Passion. Growing with Trust.
          </p>
          <p className="font-sans text-[11px] uppercase tracking-wider-2 text-alabaster/45 num-mono">
            UAE — MMXXIV
          </p>
        </div>
      </div>
    </footer>
  );
}
