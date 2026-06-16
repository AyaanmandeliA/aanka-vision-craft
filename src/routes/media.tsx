import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { CtaBlock } from "@/components/site/PageShell";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import zaikaInterior from "@/assets/brands/zaika-interior.jpg";

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

function MediaPage() {
  useReveal();
  return (
    <>
      <InstagramGrid beholdFeedId="Fz47pNItzZqBsj1CtyEh" />

      <CtaBlock
        eyebrow="02 / Press"
        heading={<>For Press <em className="italic">Enquiries</em></>}
        body="For story features, interviews, or coverage requests across any Aanka Group brand, please reach out to our team."
        buttonLabel="Contact Us"
        to="/contact"
      />
    </>
  );
}
