import { Link } from "@tanstack/react-router";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  /** Optional image displayed to the right of the headline on md+ */
  media?: {
    src: string;
    alt: string;
    caption?: string;
    /** "portrait" (4/5) or "landscape" (5/4). Defaults to portrait. */
    ratio?: "portrait" | "landscape";
  };
}

export function PageHeader({ eyebrow, title, intro, media }: PageHeaderProps) {
  const hasMedia = !!media;
  const ratioClass =
    media?.ratio === "landscape" ? "aspect-[5/4]" : "aspect-[4/5]";

  return (
    <section className="bg-alabaster text-obsidian">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-16 md:px-12 md:pt-36 md:pb-24">
        <div className="mb-12 flex items-center gap-6 md:mb-16">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
            {eyebrow}
          </span>
          <span className="h-px flex-1 bg-platinum/60" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div
            className={
              hasMedia
                ? "col-span-12 md:col-span-7"
                : "col-span-12"
            }
          >
            <h1 className="reveal display-lg text-obsidian">
              {title}
            </h1>
            {intro ? (
              <p
                className="reveal measure-wide mt-10 body-lead text-obsidian/75"
                style={{ transitionDelay: "120ms" }}
              >
                {intro}
              </p>
            ) : null}
          </div>

          {hasMedia ? (
            <figure
              className="reveal col-span-12 md:col-span-5"
              style={{ transitionDelay: "160ms" }}
            >
              <div className={`relative overflow-hidden bg-obsidian ${ratioClass}`}>
                <img
                  src={media!.src}
                  alt={media!.alt}
                  loading="eager"
                  className="img-scale h-full w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-obsidian/10" />
              </div>
              {media!.caption ? (
                <figcaption className="mt-4 font-sans text-[10px] uppercase tracking-luxury text-obsidian/55">
                  {media!.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}

interface CtaBlockProps {
  eyebrow?: string;
  heading: React.ReactNode;
  body: string;
  buttonLabel: string;
  to: "/" | "/partner" | "/contact" | "/careers" | "/businesses";
}

export function CtaBlock({ eyebrow, heading, body, buttonLabel, to }: CtaBlockProps) {
  return (
    <section className="bg-obsidian text-alabaster">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        {eyebrow ? (
          <div className="mb-12 flex items-center gap-6 md:mb-16">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze num-mono">
              {eyebrow}
            </span>
            <span className="h-px flex-1 bg-alabaster/15" />
          </div>
        ) : null}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <h2 className="reveal col-span-12 display-lg md:col-span-7">
            {heading}
          </h2>
          <div className="reveal col-span-12 self-end md:col-span-4 md:col-start-9" style={{ transitionDelay: "120ms" }}>
            <p className="font-serif text-lg font-light leading-relaxed text-alabaster/75">
              {body}
            </p>
            <Link
              to={to}
              className="group mt-10 inline-flex items-center gap-4 bg-alabaster px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-obsidian transition-colors duration-500 hover:bg-bronze hover:text-alabaster"
            >
              {buttonLabel}
              <span className="block h-px w-8 bg-obsidian transition-all duration-500 group-hover:w-12 group-hover:bg-alabaster" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
