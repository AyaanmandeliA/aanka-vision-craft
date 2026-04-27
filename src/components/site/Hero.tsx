import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden bg-obsidian text-alabaster"
    >
      <img
        src={heroImg}
        alt="Aanka Group — moody luxury interior"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#141414_85%)]" />
      <div className="absolute inset-0 bg-obsidian/30" />

      {/* Top corner marks */}
      <div className="pointer-events-none absolute left-6 top-6 hidden font-sans text-[10px] uppercase tracking-luxury text-alabaster/50 md:block">
        Est. UAE
      </div>
      <div className="pointer-events-none absolute right-6 top-6 hidden font-sans text-[10px] uppercase tracking-luxury text-alabaster/50 md:block">
        Holding · Hospitality · Wellness · Design
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="reveal mb-8 font-sans text-[11px] uppercase tracking-luxury text-bronze">
          — A House of Brands
        </p>

        <h1 className="reveal font-serif text-4xl font-light leading-[1.1] tracking-tight text-alabaster sm:text-5xl md:text-6xl lg:text-7xl">
          Creating Experiences <br className="hidden sm:block" />
          Across <em className="italic text-alabaster/95">Food, Wellness</em>
          <br className="hidden sm:block" />
          &amp; <em className="italic text-alabaster/95">Interior Design</em>
        </h1>

        <p
          className="reveal mx-auto mt-10 max-w-md font-sans text-[11px] uppercase tracking-luxury text-alabaster/70"
          style={{ transitionDelay: "120ms" }}
        >
          Built with Vision · Growing with Purpose
        </p>

        <div
          className="reveal mt-14 flex items-center justify-center"
          style={{ transitionDelay: "240ms" }}
        >
          <a
            href="#brands"
            className="group inline-flex items-center gap-4 bg-alabaster px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-obsidian transition-colors duration-500 hover:bg-bronze hover:text-alabaster"
          >
            Explore Our Brands
            <span className="block h-px w-8 bg-obsidian transition-all duration-500 group-hover:w-12 group-hover:bg-alabaster" />
          </a>
        </div>
      </div>

      {/* Bottom hairline marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-alabaster/15">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 font-sans text-[10px] uppercase tracking-luxury text-alabaster/55 md:px-12">
          <span className="num-mono">01 — Aanka Group</span>
          <span className="hidden md:block">Scroll</span>
          <span className="num-mono">2024</span>
        </div>
      </div>
    </section>
  );
}
