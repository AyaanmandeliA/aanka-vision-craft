/**
 * AANKA brand system — wordmark and signature N-line.
 *
 * The N-line is the brand mark: a thin horizontal line that becomes
 * the letter N in the centre, then continues horizontally.
 *
 *   1. Horizontal line enters from the left (at top / cap-height).
 *   2. Drops vertically — this is the LEFT stem of the N.
 *   3. Diagonal up-right — this is the middle stroke of the N (drawn
 *      visually as the N's diagonal going from bottom-left to top-right
 *      when read as the letter; the line itself moves down then up).
 *   4. Rises vertically — the RIGHT stem of the N.
 *   5. Continues horizontally to the right (at top / cap-height).
 *
 * The N is BUILT INTO the line — not a separate glyph behind it.
 *
 * Colour rules:
 *   • Line: Oxidized Bronze (#8C7A6B) by default; Brushed Platinum
 *     (#B8B8B0) for muted secondary dividers.
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
 * The N-line shape, rendered into a viewBox of 600 × 60.
 *
 * Geometry:
 *   • Top line:        y = 14
 *   • Bottom (N base): y = 46
 *   • N occupies:      x = 274 → 326   (width 52, height 32)
 *   • Left stem:       x = 274,  y 14 → 46  (vertical down)
 *   • Diagonal:        (274, 46) → (326, 14)  (up-right, mirrors N)
 *   • Right stem:      x = 326,  y 14 → 46  (vertical down)
 *
 * Wait — the left and right stems of an N go from baseline UP to top.
 * So the path (drawn left-to-right) reads:
 *   enter top → drop down LEFT stem → diagonal UP to top-right corner →
 *   drop down RIGHT stem → exit top.
 *
 * That produces the visual letter N integrated into a horizontal line.
 */
const N_LINE_PATH =
  "M0 14 H274 L274 46 L326 14 L326 46 L600 46 M326 14 H600";

// Cleaner version: the line enters at top, traces the N in one stroke,
// and the right horizontal also exits at top. We render it as a single
// continuous path that visually forms ──┐╲┌── (with the diagonal being
// the N's middle stroke).
const N_LINE_PATH_CLEAN =
  "M0 14 L274 14 L274 46 L326 14 L326 46 L600 46";

// On reflection, both ends should be at the SAME height (a horizontal
// line that "lifts" into an N in the middle and returns). A real N has
// stems from baseline to top, so:
//   left horizontal at TOP → down (left stem) → up-right diagonal →
//   down (right stem) → right horizontal at... top? bottom?
// The architectural read is: line enters at one level, the N protrudes
// downward, line exits at the same level. So both horizontals at top:
const N_LINE_PATH_FINAL =
  "M0 14 L274 14 L274 46 L326 14 L326 46 L600 14";

export function AankaNLine({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "muted" | "reversed";
}) {
  const color =
    variant === "muted"
      ? "var(--platinum)"
      : "var(--bronze)";

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
        d={N_LINE_PATH_FINAL}
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

const LETTERS = ["A", "A", "N", "K", "A"] as const;

export function AankaLogo({
  className,
  variant = "primary",
  markOnly = false,
  title = "AANKA",
}: LogoProps) {
  const wordColor =
    variant === "reversed"
      ? "var(--alabaster)"
      : variant === "warm"
        ? "var(--platinum)"
        : "var(--obsidian)";
  const lineColor = "var(--bronze)";

  if (markOnly) {
    return (
      <AankaNLine
        className={className}
        variant={variant === "reversed" ? "reversed" : "default"}
      />
    );
  }

  /**
   * Wordmark — viewBox 800 × 220.
   * Letters baseline y=170, cap-height y=50.
   * Letter slot centres: A(120) A(240) N(400) K(560) A(680).
   *
   * The N's stems live at x = 370 (left) and x = 430 (right).
   * The brand line:
   *   • enters left at TOP (y=50)
   *   • drops down at x=370 (N's left stem)        — y 50 → 170
   *   • diagonal up-right to (430, 50)             — N's middle stroke
   *   • drops down at x=430 (N's right stem)       — y 50 → 170
   *   • exits right at TOP (y=50)
   *
   * The N letter glyph itself is suppressed in the wordmark — the line
   * IS the N. The other four letters (A A K A) are typeset normally.
   */
  const top = 50;
  const bottom = 170;
  const nLeft = 370;
  const nRight = 430;
  const letterX = [120, 240, 400, 560, 680];

  // Path: ──┐╲┌──  with both horizontals at TOP, N protrudes DOWN.
  // Wait — re-reading spec: "rises vertically upward at the LEFT side
  // of the N". So the line enters LOW, RISES at N's left, diagonals
  // DOWN (mirroring N's middle), RISES again at N's right, exits LOW.
  // Both horizontals at BOTTOM, N protrudes UP. That matches the
  // architectural read of a real letter N (stems from base to top).
  const linePath =
    `M20 ${bottom} L${nLeft} ${bottom} ` +
    `L${nLeft} ${top} ` +
    `L${nRight} ${bottom} ` +
    `L${nRight} ${top} ` +
    `L${nRight} ${bottom} ` +
    `L780 ${bottom}`;

  return (
    <svg
      viewBox="0 0 800 220"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      <path
        d={linePath}
        stroke={lineColor}
        strokeWidth="2.2"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
      <g
        fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
        fontWeight="400"
        fontSize="140"
        fill={wordColor}
        textAnchor="middle"
      >
        {LETTERS.map((ch, i) =>
          ch === "N" ? null : (
            <text key={i} x={letterX[i]} y={bottom}>
              {ch}
            </text>
          ),
        )}
      </g>
    </svg>
  );
}
