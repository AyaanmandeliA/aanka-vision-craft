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
          "Aanka Group is a family-built portfolio of brands across hospitality, beauty, wellness, interiors and construction. Built with Passion. Growing with Trust.",
      },
      { property: "og:title", content: "Aanka Group — Built with Passion. Growing with Trust." },
      {
        property: "og:description",
        content:
          "A family-built portfolio of customer-focused brands across hospitality, beauty, wellness, interiors and construction.",
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
        body="We welcome franchise, partnership, and collaboration opportunities with people who share our commitment to service, trust and long-term customer relationships."
        buttonLabel="Start a Conversation"
        to="/partner"
      />
    </>
  );
}
