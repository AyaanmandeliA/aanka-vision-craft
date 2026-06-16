/**
 * AANKA brand system — live SVG wordmark + straight brand line.
 *
 * Wordmark structure:
 *   A  A   N   K  A
 *   ‾‾‾‾‾  bronze rails wrap the N:
 *     bottom rail under "A A" → vertical → diagonal slash (white) → vertical → top rail above "K A"
 *
 *   ____|\|‾‾‾‾
 *
 * Colour rules:
 *   • Letters A A K A — Alabaster on dark, Obsidian on light.
 *   • Bronze rails + N stems — Oxidized Bronze (#8C7A6B).
 *   • Diagonal slash of N — Alabaster on dark, Obsidian on light. Slightly thicker stroke.
 *
 * PulseLine / AankaNLine = a thin straight horizontal divider line
 * (bronze on dark, platinum on light). No pulse, no notch, no zig-zag.
 */

type Variant = "primary" | "reversed";

type LogoProps = {
  className?: string;
  variant?: Variant;
  markOnly?: boolean;
  title?: string;
};

/* ------------------------------------------------------------------ */
/* AankaNLine / PulseLine — thin straight divider line                */
/* ------------------------------------------------------------------ */

export function AankaNLine({
  className,
  variant = "default",
}: {
  className?: string;
  /** "default" = bronze (dark bg), "muted"/"reversed" = platinum (light bg). */
  variant?: "default" | "muted" | "reversed";
}) {
  const color =
    variant === "muted" ? "var(--platinum)" : variant === "reversed" ? "var(--platinum)" : "var(--bronze)";

  return (
    <svg
      viewBox="0 0 600 2"
      preserveAspectRatio="none"
      className={className}
      role="presentation"
      aria-hidden="true"
      fill="none"
    >
      <line
        x1="0"
        y1="1"
        x2="600"
        y2="1"
        stroke={color}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Backwards-compatible alias used across the site. */
export const PulseLine = AankaNLine;

/* ------------------------------------------------------------------ */
/* AankaLogo — live SVG wordmark with integrated bronze N-rail        */
/* ------------------------------------------------------------------ */

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
        variant={variant === "reversed" ? "default" : "reversed"}
      />
    );
  }

  const letterColor =
    variant === "reversed" ? "var(--alabaster)" : "var(--obsidian)";
  const railColor = "var(--bronze)";
  const slashColor =
    variant === "reversed" ? "var(--alabaster)" : "var(--obsidian)";

  /**
   * viewBox 800 × 140.
   *   Letter baseline y = 102, cap-top y = 32  (cap-height ≈ 70)
   *   N is ~10% taller — top y = 24, bottom y = 110
   *   Bottom rail y = 118  (under A A)
   *   Top rail    y = 16   (above K A)
   *
   * Even visual spacing — letter centres at:
   *   A1 = 80,  A2 = 240,  N (centre) = 400,  K = 560,  A3 = 720
   *   N stems: x = 372 and x = 428 (≈ N visual width)
   */
  const baseline = 102;
  const nTop = 24;
  const nBottom = 110;
  const bottomRail = 118;
  const topRail = 16;
  const nLeft = 372;
  const nRight = 428;

  return (
    <svg
      viewBox="0 0 800 140"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      {/* Letters — A A   K A (the N slot is built from the rail + slash) */}
      <g
        fill={letterColor}
        style={{
          fontFamily:
            '"Cormorant Garamond", "Playfair Display", "Canela", Georgia, serif',
          fontWeight: 500,
          fontSize: "96px",
          letterSpacing: "0.02em",
        }}
        textAnchor="middle"
      >
        <text x="80" y={baseline}>A</text>
        <text x="240" y={baseline}>A</text>
        <text x="560" y={baseline}>K</text>
        <text x="720" y={baseline}>A</text>
      </g>

      {/* Bronze line: bottom rail under A A → up into left stem of N */}
      <path
        d={`M16 ${bottomRail} L${nLeft} ${bottomRail} L${nLeft} ${nTop}`}
        stroke={railColor}
        strokeWidth="1.6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
      {/* Bronze line: right stem of N → up into top rail above K A */}
      <path
        d={`M${nRight} ${nBottom} L${nRight} ${topRail} L784 ${topRail}`}
        stroke={railColor}
        strokeWidth="1.6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />

      {/* Diagonal slash of N — focal stroke (slightly thicker) */}
      <path
        d={`M${nLeft} ${nTop} L${nRight} ${nBottom}`}
        stroke={slashColor}
        strokeWidth="2.4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
