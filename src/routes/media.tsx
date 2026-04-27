import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader, CtaBlock } from "@/components/site/PageShell";
import zaikaInterior from "@/assets/brands/zaika-interior.jpg";
import deco from "@/assets/brands/deco-2.jpg";
import gents from "@/assets/brands/gents-2.webp";
import ladies from "@/assets/brands/ladies-2.jpg";
import khau from "@/assets/brands/khau-thali.jpg";
import zaika2 from "@/assets/brands/zaika-2.jpg";

export const Route = createFileRoute("/media")({
  component: MediaPage,
  head: () => ({
    meta: [
      { title: "Media & News — Aanka Group" },
      {
        name: "description",
        content:
          "Launches, milestones, events, and brand highlights from across the Aanka Group portfolio.",
      },
      { property: "og:title", content: "Media & News — Aanka Group" },
      {
        property: "og:description",
        content:
          "Moments that shape the Aanka journey — from store openings to brand launches across the UAE.",
      },
      { property: "og:image", content: zaikaInterior },
      { name: "twitter:image", content: zaikaInterior },
    ],
  }),
});

const items = [
  {
    img: zaikaInterior,
    cat: "Brand Launch",
    title: "House of Zaika opens its doors",
    date: "Recently",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    img: deco,
    cat: "Project Milestone",
    title: "Deco Vibes delivers signature interiors",
    date: "Ongoing",
    span: "md:col-span-4",
  },
  {
    img: gents,
    cat: "Outlet Opening",
    title: "Cutting Edge Gents expands grooming footprint",
    date: "Featured",
    span: "md:col-span-4",
  },
  {
    img: ladies,
    cat: "Press Mention",
    title: "Cutting Edge Ladies in conversation",
    date: "Editorial",
    span: "md:col-span-6",
  },
  {
    img: khau,
    cat: "Event",
    title: "Khau Galli celebrates community moments",
    date: "Recurring",
    span: "md:col-span-6",
  },
  {
    img: zaika2,
    cat: "Spotlight",
    title: "Influencer evenings at House of Zaika",
    date: "Ongoing",
    span: "md:col-span-12",
  },
];

const categories = [
  { label: "Store and outlet openings", img: gents },
  { label: "Brand launches and milestones", img: zaikaInterior },
  { label: "Influencer visits and special events", img: zaika2 },
  { label: "Press mentions and editorial features", img: ladies },
  { label: "Key moments across the portfolio", img: khau },
];

function MediaPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="01 / Media"
        title={
          <>
            Moments that shape <br />
            the <em className="italic">Aanka journey.</em>
          </>
        }
        intro="From launches and milestones to events and brand highlights, this section captures the moments that continue to shape the Aanka Group story across the UAE."
        media={{
          src: deco,
          alt: "Aanka Group editorial moment",
          caption: "Press · Launches · Milestones",
          ratio: "portrait",
        }}
      />

      {/* Categories — image-backed cells */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-20 md:px-12 md:pb-24">
          <ul className="grid grid-cols-2 gap-px bg-platinum/60 md:grid-cols-5">
            {categories.map((c, i) => (
              <li
                key={c.label}
                className="reveal relative aspect-[4/5] overflow-hidden bg-obsidian md:aspect-[3/4]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img
                  src={c.img}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="img-scale absolute inset-0 h-full w-full object-cover opacity-70 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                  <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-serif text-base font-light leading-tight text-alabaster md:text-lg">
                    {c.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Editorial grid */}
      <section className="bg-alabaster text-obsidian">
        <div className="mx-auto max-w-[1440px] px-6 pb-32 md:px-12 md:pb-40">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4 md:auto-rows-[280px]">
            {items.map((it, i) => (
              <article
                key={it.title}
                className={`reveal group relative overflow-hidden bg-obsidian ${it.span}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="img-scale absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-5">
                  <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/75 num-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-luxury text-alabaster/75">
                    {it.cat}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 md:px-8 md:pb-8">
                  <h3 className="font-serif text-2xl font-light leading-tight text-alabaster md:text-3xl">
                    {it.title}
                  </h3>
                  <p className="mt-3 font-sans text-[10px] uppercase tracking-luxury text-alabaster/65">
                    {it.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="03 / Press"
        heading={<>For Press <em className="italic">Enquiries</em></>}
        body="For story features, interviews, or coverage requests across any Aanka Group brand, please reach out to our team."
        buttonLabel="Contact Us"
        to="/contact"
      />
    </>
  );
}
