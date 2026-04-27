import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-obsidian text-alabaster">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <a
          href="#top"
          className="font-sans text-sm md:text-[15px] font-medium tracking-luxury text-alabaster"
        >
          AANKA&nbsp;&nbsp;GROUP
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative font-sans text-[12px] font-normal uppercase tracking-wider-2 text-alabaster/85 transition-colors hover:text-alabaster"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-alabaster"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-alabaster/10">
          <nav className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-sans text-[13px] uppercase tracking-wider-2 text-alabaster/85"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
