import { useReveal } from "@/hooks/use-reveal";
import { useParallax } from "@/hooks/use-parallax";
import heroImg from "@/assets/hero.jpg";
import { Link } from "@tanstack/react-router";
import { AankaLogo, PulseLine } from "./AankaLogo";

export function Hero() {
  useReveal();
  const parallaxRef = useParallax<HTMLImageElement>(0.18);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-obsidian text-alabaster"
    >
      <img
        ref={parallaxRef}
        src={heroImg}
        alt="Aanka Group — a UAE-based house of lifestyle brands"
        width={1920}
        height={1280}
        className="absolute inset-0 h-[120%] w-full -translate-y-[10%] object-cover opacity-50"
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#141414_92%)]" />
      <div className="absolute inset-0 bg-obsidian/30" />

      {/* Top corner marks */}
      <div className="pointer-events-none absolute left-6 top-6 hidden font-sans text-[10px] uppercase tracking-luxury text-alabaster/55 md:left-12 md:top-10 md:block">
        Est. UAE
      </div>
      <div className="pointer-events-none absolute right-6 top-6 hidden font-sans text-[10px] uppercase tracking-luxury text-alabaster/55 md:right-12 md:top-10 md:block">
        Hospitality · Wellness · Beauty · Design
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
        <p className="mb-8 font-sans text-[11px] uppercase tracking-luxury text-bronze">
          A UAE Lifestyle Group
        </p>

        {/* The AANKA wordmark — centerpiece of the hero */}
        <div className="mx-auto mb-8 w-full max-w-[580px]">
          <AankaLogo variant="reversed" className="mx-auto h-auto w-full" />
        </div>

        <PulseLine className="mx-auto mb-10 h-4 w-40 opacity-80" />

        <h1
          className="mx-auto max-w-[900px] font-serif text-4xl font-light leading-[1.08] text-alabaster md:text-6xl lg:text-7xl"
        >
          Built with <em className="italic">vision.</em>
          <br />
          Grown with <em className="italic">purpose.</em>
        </h1>

        <p
          className="measure mx-auto mt-8 font-serif text-lg font-light leading-relaxed text-alabaster/75 md:text-xl"
        >
          A curated portfolio of lifestyle brands across hospitality,
          wellness, beauty, and design — built in the UAE, designed to last,
          and run with one shared standard of care.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <Link
            to="/businesses"
            className="group inline-flex items-center gap-4 bg-alabaster px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-obsidian transition-colors duration-500 hover:bg-bronze hover:text-alabaster"
          >
            Explore the Portfolio
            <span className="block h-px w-8 bg-obsidian transition-all duration-500 group-hover:w-12 group-hover:bg-alabaster" />
          </Link>
        </div>
      </div>

      {/* Bottom pulse-line marquee */}
      <div className="absolute bottom-0 left-0 right-0">
        <PulseLine className="h-3 w-full opacity-70" />
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 font-sans text-[10px] uppercase tracking-luxury text-alabaster/55 md:px-12">
          <span className="num-mono">Aanka Group</span>
          <span className="hidden md:block">Built by Family · Driven by Excellence</span>
          <span className="num-mono">UAE · Est. 2014</span>
        </div>
      </div>
    </section>
  );
}
