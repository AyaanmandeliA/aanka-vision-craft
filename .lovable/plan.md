## Goal
Two changes across the site:
1. **Fix the "sparse text + lots of empty cream space" problem** on every page by anchoring sections with imagery, expanding copy, tightening vertical padding, and breaking up monotone backgrounds.
2. **Surface the full Locations list** — current `location-data.ts` only has 6 generic entries (one per brand), most pointing at "Dubai, UAE" placeholders. Replace with the actual venue list (multiple Khau Galli outlets, Cutting Edge branches, etc.).

---

## Part 1 — Density & imagery pass (all pages)

### Shared changes
- Update `PageHeader` (in `PageShell.tsx`) to support an optional `media` prop (image + small caption). Existing text-only usages keep working unchanged. About, Businesses, Partner, Careers, Contact, Media, Locations all gain a hero image to the right of the H1, anchoring the top of every page.
- Reduce the repeated `py-40` blocks to `py-24 md:py-32` so short copy doesn't float in oceans of space.
- Enforce alternating backgrounds (alabaster → obsidian → alabaster) so no two consecutive sections share a surface.

### `/about`
- Hero gets a portrait image on the right (founder candid).
- "Built with Passion. Growing with Purpose." rebuilt as a 12-col image+text spread (image left, expanded 2-paragraph narrative + signed pull-quote right, plus a 3-stat row: brands · categories · UAE-wide).
- Foundations cards (Vision/Mission/Philosophy) gain a small monochrome texture image at the top of each, tighter padding, expanded body copy.
- Journey: 12-col layout with sticky heading left, expanded timeline right (each entry gets a 1–2 sentence description, not just a one-liner). Add one full-bleed band image between heading and list.
- Differentiators: convert to a 2×2 bento where 2 cells are images (zaika-interior + deco) and 2 cells are text. Add a slim follow-up row with the remaining differentiators.
- Insert existing `<FoundersNote />` component before `<Leadership />`.

### `/businesses`
- Replace the lone "A portfolio built across food, wellness, beauty, and design." line with a richer 3-column lead-in: short paragraph + 2 supporting stat callouts (number of brands, number of categories) + a single editorial image strip.
- Each vertical section: add a tall imagery column (col-span-4) alongside the heading/intro, so the eye always has something to land on.
- Closing line section: pair the closing pull-quote with a full-bleed banner image instead of leaving it on plain alabaster.

### `/partner`
- Hero gains a hospitality-toned image (zaika or khau-thali).
- "Pillars" section: each card gets a small icon-style image at top (reuse brand crops as texture).
- Territories list: add a side image (Dubai skyline / map detail) in col-span-4 so the long bullet list isn't naked text.
- Process section: insert a thin full-bleed image divider above the 4-step grid.

### `/careers`
- Hero gains a portrait/team image.
- "Why Join" cards: add a small textured image to each card (people / interiors / detail crops).
- "Apply" form section: pair the form with a left-side editorial image + caption ("Built in the UAE. Growing across the GCC.") instead of plain heading-only.

### `/contact`
- Hero gains an image (storefront / interior crop).
- Move the 3-card contact strip into a 2-column composition: cards left, supporting image right.
- The dark Enquire section: add a small caption block with office hours & physical address beside the form, plus a thin texture image at the section top.

### `/media`
- Hero gains an image.
- Categories strip: replace the 5 plain text cells with image-backed cells (small thumbnail per category).
- Editorial bento is already image-rich — only tightens spacing.

### `/locations`
- Hero gains an image (Dubai skyline crop).
- After the map: add a venue-count band ("X venues · Y emirates · Z brands") so the transition from map to cards has rhythm.
- Each venue card gets a small thumbnail (brand image) at the top — currently text-only.

### Assets used
All from existing `/src/assets/` and `/src/assets/brands/` — no new image files. Will reuse: `hero.jpg`, `leader-1.jpg`, `leader-2.jpg`, `brands/zaika.jpg`, `brands/zaika-interior.jpg`, `brands/zaika-2.jpg`, `brands/deco.jpg`, `brands/deco-2.jpg`, `brands/gents.webp`, `brands/gents-2.webp`, `brands/ladies.jpg`, `brands/ladies-2.jpg`, `brands/khau-galli.jpg`, `brands/khau-thali.jpg`.

---

## Part 2 — Real locations data

### Question for the user (asked below before I start)
I need the actual venue list to populate `/locations` properly. Right now `location-data.ts` only has placeholder entries.

---

## Files to change
- `src/components/site/PageShell.tsx` — add optional `media` slot to `PageHeader`.
- `src/routes/about.tsx` — full restructure per above.
- `src/routes/businesses.tsx` — image-paired vertical sections, richer lead-in.
- `src/routes/partner.tsx` — image accents, tightened spacing.
- `src/routes/careers.tsx` — image-paired sections.
- `src/routes/contact.tsx` — image accents.
- `src/routes/media.tsx` — minor density pass.
- `src/routes/locations.tsx` — thumbnails on venue cards, venue-count band.
- `src/components/site/location-data.ts` — replace with real venue list (after user provides addresses).

No new dependencies. No route changes.
