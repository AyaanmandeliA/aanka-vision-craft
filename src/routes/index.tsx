import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { FoundersNote } from "@/components/site/FoundersNote";
import { Introduction } from "@/components/site/Introduction";
import { Verticals } from "@/components/site/Verticals";
import { Ecosystem } from "@/components/site/Ecosystem";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { Values } from "@/components/site/Values";
import { Growth } from "@/components/site/Growth";
import { CtaBlock } from "@/components/site/PageShell";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aanka Group — A UAE Lifestyle Group" },
      {
        name: "description",
        content:
          "Aanka Group is a UAE lifestyle group — a curated portfolio of brands across hospitality, wellness, beauty, and design. Built with vision. Grown with purpose.",
      },
      { property: "og:title", content: "Aanka Group — Built with Vision. Grown with Purpose." },
      {
        property: "og:description",
        content:
          "A curated portfolio of lifestyle brands across hospitality, wellness, beauty, and design — built in the UAE, designed to last.",
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
      
      <Growth />
      <CtaBlock
        eyebrow="09 / Collaborate"
        heading={<>Partner with<br /><em className="italic">AANKA Group</em></>}
        body="We welcome franchise, partnership, and collaboration opportunities with operators who share our long-term view and commitment to quality."
        buttonLabel="Start a Conversation"
        to="/partner"
      />
    </>
  );
}
