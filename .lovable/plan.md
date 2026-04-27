## Direction

**Personality:** Warm modern luxury — hospitality-forward, softer copy, more lifestyle warmth than current cold-institutional tone. We'll keep the architectural grid but warm the palette slightly (deeper bronze accents, a softer ivory surface tier) and humanize copy across the site.

**Story-led founders:** Weave the founding narrative through Home and About (no separate Origin page). Founders appear as a quiet but recurring thread — a pull quote on Home, a chapter-style block on About, signed off with their names.

**Motion:** Subtle & cinematic — keep current fade-ins, add slow image parallax on hero/feature stills, a single brand-name marquee strip, and gentle masked image reveals. No custom cursor, no sticky-scroll storytelling.

---

## 1. Global refinements (warm modern luxury)

- **Palette tweak in `src/styles.css`**: keep Obsidian/Alabaster, warm the bronze, add an `ivory` surface tier and a `clay` accent for hover/active states. Soften pure black sections to a near-obsidian for less harshness.
- **Typography pass**: slightly looser line-height on serif headings, warmer italic usage in sub-eyebrows, and a new `tracking-warm` utility for body labels (less aggressive than current `tracking-luxury`).
- **Copy pass**: rewrite hero, intro, values, and CTAs from "institutional" to "hospitality-forward." Replace phrases like "House of Brands" with warmer language ("A family of lifestyle experiences"), and add a recurring founder voice ("— Aanand & Priyanka").
- **Navbar**: add a thin top utility bar (UAE • EN • +971…) above the main nav for a hospitality-group feel.

## 2. Home page upgrades (`src/routes/index.tsx`)

Reordered, warmer flow:

1. **Hero** — keep cinematic image, soften vignette, add slow parallax on the background image, refine CTAs.
2. **Founders' note** (NEW) — a short signed pull quote from Aanand & Priyanka, framed as an editorial block with two small portrait thumbnails. This is the "story woven in."
3. **Introduction** — rewritten warmer, with a stat strip (6 brands • 4 sectors • UAE-wide).
4. **Verticals** — keep, refine copy.
5. **Ecosystem bento** — add masked image reveal on scroll, refine hover state to feel softer.
6. **Brand marquee** (NEW) — a single slow-moving horizontal strip of brand wordmarks (Khau Galli, House of Zaika, etc.) as a subtle trust signal.
7. **Values** — keep, soften background.
8. **Instagram grid** (NEW) — 6-tile responsive grid pulling from the handle you provide (placeholder tiles until you share it).
9. **Growth + CTA** — keep, warmer copy.

## 3. Businesses / Portfolio depth

- **`/businesses` index**: refine into an editorial directory — large brand cards with hover image swaps, sector tags, and a "View brand" link that goes to a dedicated sub-page.
- **Per-brand pages** (NEW, 6 routes): `/businesses/khau-galli`, `/businesses/house-of-zaika`, `/businesses/cutting-edge-gents`, `/businesses/cutting-edge-ladies`, `/businesses/deco-vibes`, `/businesses/aanka-constructions`.
  - Each page: full-bleed brand hero, narrative paragraph, gallery of 3–5 stills (using assets already scraped), locations list, external website CTA, and a "Franchise this brand" link to `/partner`.
  - Driven by the existing `brand-data.ts`, extended with `gallery`, `locations`, `longDesc`, `slug` fields.
  - Per-route `head()` with unique title/description/og:image (the brand hero) for proper social sharing.

## 4. Partner page — franchise-focused (`/partner`)

Rebuilt entirely around franchising the existing brands:

- **Hero**: "Bring AANKA brands to your city." Warm, invitational.
- **Available brands for franchise**: card grid of the 3–4 franchisable brands (Khau Galli, House of Zaika, Cutting Edge Gents, Cutting Edge Ladies) with a teaser line each.
- **Why franchise with AANKA**: 4-pillar block (proven concepts, operational playbooks, brand support, UAE pedigree).
- **Territory availability**: simple table/list showing GCC + international interest by brand (placeholder data you can edit).
- **Process**: 4-step horizontal timeline (Inquiry → Discovery call → Proposal → Onboarding).
- **Franchise inquiry form**: name, email, phone, country, brand of interest (select), investment range (select), message. Form posts to a server function that emails contact@aankagroup.com (or stores submission — your call later).

## 5. Locations — static UAE map + cards (`/locations`)

- **Static styled map** of the UAE (SVG, hand-styled in Alabaster/Bronze on Obsidian — no third-party map library, keeps it on-brand and fast). Pins marked for each venue, labeled by brand.
- **Venue cards below**, grouped by emirate (Dubai, Abu Dhabi, Sharjah, etc.). Each card: brand name, address, phone, hours, "Get directions" link (opens Google Maps).
- Driven by a new `location-data.ts` so you can edit easily.

## 6. Contact (`/contact`)

- Refine into a warm, hospitality-style page: HQ address block, phone, email, an inline routed inquiry form (General / Press / Careers / Partnerships → routes to right inbox), and an Instagram + LinkedIn footer block.

## 7. Instagram grid

- New `<InstagramGrid />` component used on Home and Contact.
- For now: 6 styled placeholder tiles using existing brand imagery, labeled "@aankagroup" with a "Follow" CTA.
- Wired so when you share the handle + (optionally) an access token, we can swap to the real Instagram Graph API feed without touching layout. If no API access, we'll keep it as a curated manual grid driven by a small `instagram-data.ts`.

## 8. Motion polish

- Hero & per-brand hero: slow background parallax (transform on scroll, no library — pure CSS + a tiny hook).
- Ecosystem cards: masked image reveal (clip-path) as they enter viewport.
- Brand marquee: CSS-only infinite scroll, paused on hover.
- Keep all existing fade-ins; standardize easing to `cubic-bezier(0.22, 1, 0.36, 1)` for a more cinematic feel.

## 9. Asset handling

You said real assets are coming. I'll:
- Keep all current scraped brand imagery as the working set.
- Structure components so swapping images later is a one-line change in `brand-data.ts` / `location-data.ts`.
- Leave the founder portraits as-is; flag them for replacement when you upload finals.

---

## Technical notes

- New routes: `businesses.khau-galli.tsx`, `businesses.house-of-zaika.tsx`, `businesses.cutting-edge-gents.tsx`, `businesses.cutting-edge-ladies.tsx`, `businesses.deco-vibes.tsx`, `businesses.aanka-constructions.tsx` (TanStack flat dot-separated naming).
- New components: `FoundersNote.tsx`, `BrandMarquee.tsx`, `InstagramGrid.tsx`, `UaeMap.tsx`, `FranchiseForm.tsx`, `BrandPageShell.tsx`, `Parallax.tsx` (tiny hook).
- New data files: extend `brand-data.ts` (slug, longDesc, gallery, locations, franchisable flag, investment range), add `location-data.ts`, `instagram-data.ts`.
- Per-route `head()` updated with unique title/description and og:image pointing at the route's hero image.
- Franchise form: TanStack server function with input validation. Storage/email wiring stubbed with a TODO comment so you can pick destination (Lovable Cloud table vs. Resend email) in a follow-up.
- Strict typecheck and production build run before finishing.

## Out of scope (for this pass)

- Real Instagram Graph API integration (waiting on handle + token).
- Replacing founder portraits and brand photography (waiting on your uploads).
- Press/Media depth (you didn't prioritize it — keeping current minimal page).
- Careers depth (same).
- Multi-language (EN only for now; structure leaves room for AR later).
