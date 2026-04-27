import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Introduction } from "@/components/site/Introduction";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Values } from "@/components/site/Values";
import { Leadership } from "@/components/site/Leadership";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

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
    <main className="bg-alabaster text-obsidian">
      <Navbar />
      <Hero />
      <Introduction />
      <Ecosystem />
      <Values />
      <Leadership />
      <Footer />
    </main>
  );
}
