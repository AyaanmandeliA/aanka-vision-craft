import aanand from "@/assets/leader-1.jpg";
import priyanka from "@/assets/brands/founders/priyanka.webp";
import { PulseLine } from "./AankaLogo";

export function FoundersNote() {
  return (
    <section className="bg-ivory text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-36">
        <div className="mb-16 flex items-center gap-6 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono whitespace-nowrap">
            01b / A Note from the Founders
          </span>
          <PulseLine variant="muted" className="h-4 flex-1" />
        </div>

        <div className="grid grid-cols-12 items-start gap-x-6 gap-y-12 md:gap-y-16">
          {/* Portraits */}
          <div className="reveal col-span-12 flex items-start gap-5 md:col-span-4 md:pt-20 lg:pt-24">
            <div className="relative aspect-[4/5] w-1/2 overflow-hidden bg-obsidian">
              <img
                src={aanand}
                alt="Aanand Mandelia"
                loading="lazy"
                className="img-scale h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/5] w-1/2 overflow-hidden bg-obsidian">
              <img
                src={priyanka}
                alt="Priyanka Agarwal"
                loading="lazy"
                className="img-scale h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Pull quote */}
          <blockquote className="reveal col-span-12 md:col-span-7 md:col-start-6">
            <p className="display-md text-obsidian">
              <span className="font-serif italic text-bronze">"</span>
              When we began our journey, our goal was never simply to build a
              collection of businesses. Our goal was to create meaningful
              experiences, build lasting relationships and earn the trust of
              every customer we served.
              <span className="font-serif italic text-bronze">"</span>
            </p>
            <div className="mt-8 max-w-3xl space-y-5 font-serif text-lg font-light leading-relaxed text-obsidian/75 md:text-xl">
              <p>
                Over the years, our businesses have grown across industries,
                but the principles that guide us remain unchanged. We believe
                in hard work, continuous improvement, genuine hospitality and
                treating every customer, employee and partner with respect.
              </p>
              <p>
                Every brand within Aanka Group reflects these values, and every
                milestone we achieve is made possible by the people who place
                their trust in us.
              </p>
              <p>Thank you for being a part of our journey.</p>
            </div>
            <footer className="mt-12 border-t border-platinum/60 pt-6">
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="font-serif text-lg font-light text-obsidian">
                  Aanand Mandelia &amp; Priyanka Agarwal
                </span>
                <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
                  Founders, Aanka Group
                </span>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
