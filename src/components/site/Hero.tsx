import { useReveal } from "@/hooks/use-reveal";
import { useParallax } from "@/hooks/use-parallax";
import heroImg from "@/assets/hero.jpg";
import { Link } from "@tanstack/react-router";

export function Hero() {
  useReveal();
  const parallaxRef = useParallax<HTMLImageElement>(0.18);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden bg-obsidian text-alabaster"
    >
      <img
        ref={parallaxRef}
        src={heroImg}
        alt="Aanka Group — moody luxury interior"
        width={1920}
        height={1280}
        className="absolute inset-0 h-[120%] w-full -translate-y-[10%] object-cover opacity-55"
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#141414_88%)]" />
      <div className="absolute inset-0 bg-obsidian/25" />

      {/* Top corner marks */}
      <div className="pointer-events-none absolute left-6 top-6 hidden font-sans text-[10px] uppercase tracking-luxury text-alabaster/55 md:block">
        Est. UAE
      </div>
      <div className="pointer-events-none absolute right-6 top-6 hidden font-sans text-[10px] uppercase tracking-luxury text-alabaster/55 md:block">
        Hospitality · Wellness · Beauty · Design
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="reveal mb-8 font-sans text-[11px] uppercase tracking-luxury text-bronze">
          — A Family of Lifestyle Brands
        </p>

        <h1 className="reveal font-serif text-4xl font-light leading-[1.08] tracking-tight text-alabaster sm:text-5xl md:text-6xl lg:text-7xl">
          Hospitality, Wellness <br className="hidden sm:block" />
          &amp; <em className="italic text-alabaster">Design,</em> the
          <br className="hidden sm:block" />
          <em className="italic text-alabaster">Aanka</em> way.
        </h1>

        <p
          className="reveal mx-auto mt-10 max-w-xl font-serif text-lg font-light leading-relaxed text-alabaster/80"
          style={{ transitionDelay: "120ms" }}
        >
          Aanka Group is a UAE-based house of lifestyle brands — built around
          the people we serve, the places we create, and the long view we keep.
        </p>

        <div
          className="reveal mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          style={{ transitionDelay: "240ms" }}
        >
          <Link
            to="/businesses"
            className="group inline-flex items-center gap-4 bg-alabaster px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-obsidian transition-colors duration-500 hover:bg-bronze hover:text-alabaster"
          >
            Explore Our Brands
            <span className="block h-px w-8 bg-obsidian transition-all duration-500 group-hover:w-12 group-hover:bg-alabaster" />
          </Link>
          <Link
            to="/partner"
            className="group inline-flex items-center gap-4 border border-alabaster/60 px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-alabaster transition-colors duration-500 hover:border-bronze hover:text-bronze"
          >
            Franchise With Us
            <span className="block h-px w-8 bg-alabaster transition-all duration-500 group-hover:w-12 group-hover:bg-bronze" />
          </Link>
        </div>
      </div>

      {/* Bottom hairline marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-alabaster/15">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 font-sans text-[10px] uppercase tracking-luxury text-alabaster/55 md:px-12">
          <span className="num-mono">01 — Aanka Group</span>
          <span className="hidden md:block">Scroll</span>
          <span className="num-mono">UAE · 2024</span>
        </div>
      </div>
    </section>
  );
}
