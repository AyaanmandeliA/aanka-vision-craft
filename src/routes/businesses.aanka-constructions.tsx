import { createFileRoute } from "@tanstack/react-router";
import { BrandPageShell } from "@/components/site/BrandPageShell";
import { getBrandBySlug } from "@/components/site/brand-data";

const brand = getBrandBySlug("aanka-constructions")!;

export const Route = createFileRoute("/businesses/aanka-constructions")({
  component: () => <BrandPageShell brand={brand} />,
  head: () => ({
    meta: [
      { title: `${brand.name} — Aanka Group` },
      { name: "description", content: brand.longDesc },
      { property: "og:title", content: `${brand.name} — Aanka Group` },
      { property: "og:description", content: brand.desc },
      { property: "og:image", content: brand.img },
      { name: "twitter:image", content: brand.img },
    ],
  }),
});
