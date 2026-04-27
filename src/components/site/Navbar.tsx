import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Businesses", to: "/businesses" as const },
  { label: "Partner", to: "/partner" as const },
  { label: "Media", to: "/media" as const },
  { label: "Locations", to: "/locations" as const },
  { label: "Careers", to: "/careers" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-obsidian text-alabaster">
      {/* Utility bar */}
      <div className="hidden border-b border-alabaster/10 md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-2 md:px-12">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/55">
            United Arab Emirates · EN
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+971507847968"
              className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-alabaster/65 transition-colors hover:text-bronze"
            >
              <Phone size={11} strokeWidth={1.4} />
              +971 50 784 7968
            </a>
            <a
              href="mailto:contact@aankagroup.com"
              className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-luxury text-alabaster/65 transition-colors hover:text-bronze"
            >
              <Mail size={11} strokeWidth={1.4} />
              contact@aankagroup.com
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <Link
          to="/"
          className="font-sans text-sm md:text-[15px] font-medium tracking-luxury text-alabaster"
        >
          AANKA&nbsp;&nbsp;GROUP
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative font-sans text-[11px] font-normal uppercase tracking-wider-2 text-alabaster/80 transition-colors hover:text-alabaster data-[status=active]:text-alabaster"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze transition-all duration-500 group-hover:w-full group-data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden text-alabaster"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-alabaster/10">
          <nav className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 font-sans text-[13px] uppercase tracking-wider-2 text-alabaster/85"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-6 border-t border-alabaster/10 pt-6">
              <a
                href="tel:+971507847968"
                className="block py-2 font-sans text-[11px] uppercase tracking-luxury text-alabaster/65"
              >
                +971 50 784 7968
              </a>
              <a
                href="mailto:contact@aankagroup.com"
                className="block py-2 font-sans text-[11px] uppercase tracking-luxury text-alabaster/65"
              >
                contact@aankagroup.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
