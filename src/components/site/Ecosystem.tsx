import khauImg from "@/assets/brand-khaugalli.jpg";
import zaikaImg from "@/assets/brand-zaika.jpg";
import gentsImg from "@/assets/brand-gents.jpg";
import ladiesImg from "@/assets/brand-ladies.jpg";
import decoImg from "@/assets/brand-deco.jpg";
import constImg from "@/assets/brand-construction.jpg";

type Brand = {
  num: string;
  name: string;
  sector: string;
  desc: string;
  img: string;
  span: string; // bento spans
};

const brands: Brand[] = [
  {
    num: "01",
    name: "Khau Galli",
    sector: "Food",
    desc: "A vibrant food concept serving flavour, familiarity, and comfort.",
    img: khauImg,
    span: "lg:col-span-4 lg:row-span-2",
  },
  {
    num: "02",
    name: "House of Zaika",
    sector: "Fine Dining",
    desc: "A Mughlai dining experience rooted in richness, warmth, and memorable taste.",
    img: zaikaImg,
    span: "lg:col-span-4",
  },
  {
    num: "03",
    name: "Cutting Edge Gents",
    sector: "Grooming",
    desc: "A modern grooming destination designed for the contemporary gentleman.",
    img: gentsImg,
    span: "lg:col-span-4",
  },
  {
    num: "04",
    name: "Cutting Edge Ladies",
    sector: "Beauty",
    desc: "A beauty and self-care brand created for today's confident woman.",
    img: ladiesImg,
    span: "lg:col-span-4",
  },
  {
    num: "05",
    name: "Deco Vibes",
    sector: "Interior Design",
    desc: "Interior solutions shaped by design, detail, and functionality.",
    img: decoImg,
    span: "lg:col-span-4",
  },
  {
    num: "06",
    name: "Aanka Constructions",
    sector: "Construction",
    desc: "A construction business focused on dependable execution and long-term value.",
    img: constImg,
    span: "lg:col-span-4",
  },
];

export function Ecosystem() {
  return (
    <section id="brands" className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 pb-32 md:px-12 md:pb-40">
        <div className="mb-16 flex items-center gap-6 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            03 / The Ecosystem
          </span>
          <span className="h-px flex-1 bg-platinum/60" />
        </div>

        <div className="reveal mb-16 grid grid-cols-12 gap-6">
          <h2 className="col-span-12 font-serif text-3xl font-light leading-[1.15] tracking-tight md:col-span-8 md:text-5xl lg:text-6xl">
            A Growing Presence <br />
            Across <em className="italic">Industries</em>
          </h2>
          <p className="col-span-12 font-sans text-[14px] leading-relaxed text-obsidian/65 md:col-span-3 md:col-start-10">
            Six distinct ventures, one shared standard. Each brand operates
            with autonomy and the conviction of a single house.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12 lg:auto-rows-[260px]">
          {brands.map((b, i) => (
            <BrandCard key={b.name} brand={b} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand, delay }: { brand: Brand; delay: number }) {
  return (
    <article
      className={`reveal group relative overflow-hidden bg-obsidian ${brand.span}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-full min-h-[320px] w-full">
        <img
          src={brand.img}
          alt={brand.name}
          loading="lazy"
          width={1024}
          height={1280}
          className="img-scale absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-45"
        />
        {/* Permanent bottom gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        {/* Hover full overlay */}
        <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/55" />

        {/* Top meta */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-6 py-5">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/70 num-mono">
            {brand.num}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/70">
            {brand.sector}
          </span>
        </div>

        {/* Bottom title + description */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 md:px-8 md:pb-8">
          <h3 className="font-serif text-2xl font-light leading-tight text-alabaster md:text-3xl">
            {brand.name}
          </h3>
          <div className="mt-3 grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="max-w-md pt-1 font-serif text-[15px] font-light leading-relaxed text-alabaster/85">
                {brand.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-luxury text-bronze">
                Discover
                <span className="block h-px w-6 bg-bronze" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
