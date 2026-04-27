import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";

export function FoundersNote() {
  return (
    <section className="bg-ivory text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-36">
        <div className="mb-16 flex items-center gap-6 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            01b / A Note from the Founders
          </span>
          <span className="h-px flex-1 bg-platinum/60" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-y-16">
          {/* Portraits */}
          <div className="reveal col-span-12 flex items-center gap-6 md:col-span-3">
            <div className="relative aspect-[4/5] w-1/2 overflow-hidden bg-obsidian">
              <img
                src={leader1}
                alt="Aanand Mandelia"
                loading="lazy"
                className="img-scale h-full w-full object-cover grayscale"
              />
            </div>
            <div className="relative aspect-[4/5] w-1/2 overflow-hidden bg-obsidian">
              <img
                src={leader2}
                alt="Priyanka Agarwal"
                loading="lazy"
                className="img-scale h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Pull quote */}
          <blockquote className="reveal col-span-12 md:col-span-8 md:col-start-5">
            <p className="font-serif text-2xl font-light leading-[1.35] tracking-tight text-obsidian md:text-3xl lg:text-4xl">
              <span className="font-serif italic text-bronze">“</span>
              Aanka Group began as a simple idea — that hospitality, in all its
              forms, is really about people. Every brand we've built since is an
              attempt to honour that: to create places that feel cared for, run
              with intention, and worth returning to.
              <span className="font-serif italic text-bronze">”</span>
            </p>
            <footer className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-platinum/60 pt-6">
              <span className="font-serif text-lg font-light text-obsidian">
                Aanand Mandelia &amp; Priyanka Agarwal
              </span>
              <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                Founders, Aanka Group
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
