import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { FoundersNote } from "@/components/site/FoundersNote";
import { Introduction } from "@/components/site/Introduction";
import { Verticals } from "@/components/site/Verticals";
import { Ecosystem } from "@/components/site/Ecosystem";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { Values } from "@/components/site/Values";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import { Growth } from "@/components/site/Growth";
import { CtaBlock } from "@/components/site/PageShell";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aanka Group — A Family of Lifestyle Brands in the UAE" },
      {
        name: "description",
        content:
          "Aanka Group is a UAE-based, family-led house of brands across hospitality, wellness, beauty, and design — quietly built, openly hospitable.",
      },
      { property: "og:title", content: "Aanka Group — A Family of Lifestyle Brands" },
      {
        property: "og:description",
        content:
          "Six brands across hospitality, wellness, beauty, and design — built with vision, growing with purpose.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <FoundersNote />
      <Introduction />
      <Verticals />
      <Ecosystem />
      <BrandMarquee />
      <Values />
      <InstagramGrid />
      <Growth />
      <CtaBlock
        eyebrow="09 / Collaborate"
        heading={<>Looking to <em className="italic">grow</em> with us?</>}
        body="Whether you're exploring a franchise, a partnership, or a creative collaboration, we welcome conversations that share our long view."
        buttonLabel="Partner With Us"
        to="/partner"
      />
    </>
  );
}
