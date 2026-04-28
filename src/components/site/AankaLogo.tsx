/**
 * AANKA brand system — wordmark and signature N-line.
 *
 * The N-line is the brand mark: a thin horizontal line that becomes
 * the letter N in the centre, then continues horizontally.
 *
 * Path read left-to-right:
 *   1. Horizontal line at the baseline.
 *   2. Rises vertically (LEFT stem of the N).
 *   3. Diagonal down-right (middle stroke of the N).
 *   4. Rises vertically (RIGHT stem of the N).
 *   5. Continues horizontally at the baseline.
 *
 * The N is BUILT INTO the line — not a separate glyph behind it.
 *
 * Colour rules:
 *   • Line: Oxidized Bronze (#8C7A6B) by default;
 *           Brushed Platinum (#B8B8B0) for muted secondary dividers.
 *   • Wordmark text: Alabaster on dark, Obsidian on light.
 *   • No gradients, gold, glow, shadow, or rounded ends.
 */

type Variant = "primary" | "reversed" | "warm";

type LogoProps = {
  className?: string;
  variant?: Variant;
  /** Render only the AankaNLine brand mark. */
  markOnly?: boolean;
  title?: string;
};

/* ------------------------------------------------------------------ */
/* AankaNLine — the canonical brand mark                              */
/* ------------------------------------------------------------------ */

/**
 * viewBox 600 × 60.
 *   baseline y = 46    (horizontal rails)
 *   peak     y = 14    (top of the N)
 *   N occupies x = 274 → 326  (width 52, height 32)
 *
 * Single continuous stroke: ──│╲│──
 */
const N_LINE_PATH =
  "M0 46 L274 46 L274 14 L326 46 L326 14 L326 46 L600 46";

export function AankaNLine({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "muted" | "reversed";
}) {
  const color = variant === "muted" ? "var(--platinum)" : "var(--bronze)";

  return (
    <svg
      viewBox="0 0 600 60"
      preserveAspectRatio="none"
      className={className}
      role="presentation"
      aria-hidden="true"
      fill="none"
    >
      <path
        d={N_LINE_PATH}
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Backwards-compatible alias used by existing imports across the site. */
export const PulseLine = AankaNLine;

/* ------------------------------------------------------------------ */
/* AankaLogo — the full wordmark                                      */
/* ------------------------------------------------------------------ */

import wordmarkPrimary from "@/assets/aanka-wordmark-primary.png";
import wordmarkReversed from "@/assets/aanka-wordmark-reversed.png";

export function AankaLogo({
  className,
  variant = "primary",
  markOnly = false,
  title = "AANKA",
}: LogoProps) {
  if (markOnly) {
    return (
      <AankaNLine
        className={className}
        variant={variant === "reversed" ? "reversed" : "default"}
      />
    );
  }

  const src = variant === "reversed" ? wordmarkReversed : wordmarkPrimary;

  return (
    <img
      src={src}
      alt={title}
      className={className}
      draggable={false}
    />
  );
}

