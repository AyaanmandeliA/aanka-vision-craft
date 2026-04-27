import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Hero } from "@/components/site/Hero";
import { Introduction } from "@/components/site/Introduction";
import { Verticals } from "@/components/site/Verticals";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Values } from "@/components/site/Values";
import { Growth } from "@/components/site/Growth";
import { CtaBlock } from "@/components/site/PageShell";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aanka Group — A House of Lifestyle Brands" },
      {
        name: "description",
        content:
          "Aanka Group is a UAE-based holding building memorable brands across food, wellness, beauty, and interior design.",
      },
      { property: "og:title", content: "Aanka Group — A House of Lifestyle Brands" },
      {
        property: "og:description",
        content:
          "Built with Vision. Growing with Purpose. Six brands across hospitality, wellness, beauty, and design.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <>
      <Hero />
      <Introduction />
      <Verticals />
      <Ecosystem />
      <Values />
      <Growth />
      <CtaBlock
        eyebrow="07 / Collaborate"
        heading={<>Looking to <em className="italic">Grow</em> With Us?</>}
        body="Whether you are exploring partnership opportunities, franchise possibilities, or business collaborations, Aanka Group welcomes conversations that align with its vision for growth."
        buttonLabel="Partner With Us"
        to="/partner"
      />
      {/* Hidden link to keep Link import used for type-safe route ref */}
      <Link to="/" className="sr-only" aria-hidden>home</Link>
    </>
  );
}
