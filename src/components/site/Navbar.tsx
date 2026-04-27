import { useState } from "react";
import { Menu, X } from "lucide-react";
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
          </nav>
        </div>
      )}
    </header>
  );
}
