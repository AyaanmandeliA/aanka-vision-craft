## Goal
On the home page "The Family" section, the 6 brand cards currently use a bento layout where each card has a different `span` (column/row span), so tiles render at different sizes. Make every card the same size with consistent spacing.

## Change (single file: `src/components/site/Ecosystem.tsx`)

1. Replace the bento grid container:
   - From: `grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12 lg:auto-rows-[260px]`
   - To: `grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3` (uniform 1 / 2 / 3 columns, equal gap on both axes)

2. Stop applying the per-brand `brand.span` class on `<BrandCard>` so all cards inherit the same grid cell size.

3. Give every card a fixed aspect ratio so tiles are visually identical:
   - Replace `min-h-[320px]` on the inner wrapper with `aspect-[4/5]` (and remove the `h-full` dependency on parent row height).

4. Leave `brand-data.ts` untouched — the `span` field stays in the data but is simply no longer consumed here (no other component reads it from this section).

## Result
- 6 equally-sized cards in a clean 3 × 2 grid on desktop, 2 × 3 on tablet, 1-column stack on mobile.
- Uniform gap horizontally and vertically.
- No other section, copy, image, or layout is touched.
