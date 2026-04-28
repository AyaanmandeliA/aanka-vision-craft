/**
 * AANKA brand system — live SVG wordmark and signature N-line.
 *
 * Logo structure (read left-to-right):
 *   A  A   [ N ]   K  A
 *   ‾‾‾‾  bronze   bronze
 *   ___________  ‾‾‾‾‾‾‾‾‾‾‾
 *   bottom rail   top rail
 *
 * The continuous bronze line:
 *   1. Bottom rail under the "A A".
 *   2. Rises vertically (left stem of N).
 *   3. Diagonal slash down-right — THIS STROKE IS WHITE / LIGHT.
 *   4. Rises vertically (right stem of N).
 *   5. Top rail above the "K A".
 *
 *   ____|\|‾‾‾‾    (slash = alabaster, everything else = bronze)
 *
 * Colour rules:
 *   • Wordmark letters: Oxidized Bronze (#8C7A6B) on dark, Obsidian on light.
 *   • Rails + N stems: Oxidized Bronze.
 *   • N diagonal slash: Alabaster on dark, Obsidian on light.
 *   • No gradients, gold, glow, shadow, or rounded ends.
 */

type Variant = "primary" | "reversed";

type LogoProps = {
  className?: string;
  variant?: Variant;
  /** Render only the AankaNLine brand mark. */
  markOnly?: boolean;
  title?: string;
};

/* ------------------------------------------------------------------ */
/* AankaNLine — the canonical brand mark (line + N, no letters)       */
/* ------------------------------------------------------------------ */

/**
 * Brand mark viewBox 600 × 60.
 *   bottom rail y = 46
 *   top rail    y = 14
 *   N occupies  x = 274 → 326
 *
 *   ____|\|‾‾‾‾
 */
export function AankaNLine({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "muted" | "reversed";
}) {
  const railColor =
    variant === "muted" ? "var(--platinum)" : "var(--bronze)";
  const slashColor =
    variant === "reversed" ? "var(--alabaster)" : "var(--obsidian)";

  return (
    <svg
      viewBox="0 0 600 60"
      preserveAspectRatio="none"
      className={className}
      role="presentation"
      aria-hidden="true"
      fill="none"
    >
      {/* Bottom rail → left stem of N */}
      <path
        d="M0 46 L274 46 L274 14"
        stroke={railColor}
        strokeWidth="1.4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
      {/* Right stem of N → top rail */}
      <path
        d="M326 46 L326 14 L600 14"
        stroke={railColor}
        strokeWidth="1.4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
      {/* Diagonal slash of N — the accent stroke */}
      <path
        d="M274 14 L326 46"
        stroke={slashColor}
        strokeWidth="1.6"
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
/* AankaLogo — live SVG wordmark with integrated N-line                */
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
        variant={variant === "reversed" ? "reversed" : "default"}
      />
    );
  }

  // Colour palette
  const letterColor =
    variant === "reversed" ? "var(--bronze)" : "var(--obsidian)";
  const railColor = "var(--bronze)";
  const slashColor =
    variant === "reversed" ? "var(--alabaster)" : "var(--obsidian)";

  /**
   * viewBox 800 × 140.
   *   Letter cap-height baseline = 100, top = 30   (height 70)
   *   N is 12% taller: top = 22, bottom = 108     (height 86)
   *   Bottom rail (under A A) y = 116
   *   Top rail (above K A)    y = 14
   *
   * Letter slots (centres):
   *   A1 = 90   A2 = 210   N (center) = 400   K = 590   A3 = 710
   *   N stems at x = 372 and x = 428
   */
  const baseline = 100;
  const capTop = 30;
  const nTop = 22;
  const nBottom = 108;
  const bottomRail = 116;
  const topRail = 14;
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
      {/* ===== Wordmark letters (live SVG text, editorial serif) ===== */}
      <g
        fill={letterColor}
        style={{
          fontFamily:
            '"Playfair Display", "Cormorant Garamond", "Canela", Georgia, serif',
          fontWeight: 500,
          fontSize: "92px",
          letterSpacing: "0.08em",
        }}
        textAnchor="middle"
      >
        <text x="90" y={baseline}>A</text>
        <text x="210" y={baseline}>A</text>
        {/* N slot is intentionally empty — replaced by the structural N below */}
        <text x="590" y={baseline}>K</text>
        <text x="710" y={baseline}>A</text>
      </g>

      {/* ===== Continuous bronze line: bottom rail → up → N stems → top rail ===== */}
      {/* Bottom rail under A A, rising into left stem of N */}
      <path
        d={`M20 ${bottomRail} L${nLeft} ${bottomRail} L${nLeft} ${nTop}`}
        stroke={railColor}
        strokeWidth="1.6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
      {/* Right stem of N rising into top rail above K A */}
      <path
        d={`M${nRight} ${nBottom} L${nRight} ${topRail} L780 ${topRail}`}
        stroke={railColor}
        strokeWidth="1.6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />

      {/* ===== Diagonal slash of N — the accent stroke (white on dark) ===== */}
      <path
        d={`M${nLeft} ${nTop} L${nRight} ${nBottom}`}
        stroke={slashColor}
        strokeWidth="2.2"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
