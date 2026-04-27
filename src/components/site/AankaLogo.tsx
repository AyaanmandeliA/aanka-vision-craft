/**
 * AANKA brand system — wordmark, brand mark, and signature pulse line.
 *
 * Geometry of the pulse line (per the brand board):
 *   • Bronze line enters from the LEFT at the BASELINE of the letters.
 *   • Runs along the baseline under A · A.
 *   • Rises vertically just before the N (at the N's left stem).
 *   • Runs across the TOP (cap-height) over the N.
 *   • Drops vertically just after the N (at the N's right stem).
 *   • Continues along the cap-height over K · A and exits right.
 *
 * The N sits inside an inverted "U" carved out of the line — the line
 * goes UP and OVER the N rather than down and under it.
 *
 * The same shape is reused as the universal divider across the site.
 */

type LogoProps = {
  className?: string;
  variant?: "primary" | "reversed" | "warm";
  /** Render only the brand mark (the N inside the pulse rectangle). */
  markOnly?: boolean;
  title?: string;
};

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
  const pulse = "var(--bronze)";

  if (markOnly) {
    // Just the N inside the inverted-U pulse-line "step".
    // viewBox 200 × 120.  Baseline y=100, cap-height y=20.  N spans x=70..130.
    return (
      <svg
        viewBox="0 0 200 120"
        className={className}
        role="img"
        aria-label={`${title} mark`}
        fill="none"
      >
        {/* Pulse line — enters left at baseline, rises before N, runs at cap-height over N, drops after, exits right at cap-height */}
        <path
          d="M0 100 H70 L70 20 H200"
          stroke={pulse}
          strokeWidth="2.4"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
        {/* The N */}
        <text
          x="100"
          y="92"
          textAnchor="middle"
          fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
          fontWeight="400"
          fontSize="92"
          fill={wordColor}
        >
          N
        </text>
      </svg>
    );
  }

  /**
   * Wordmark layout — 5 serif glyphs evenly spaced.
   * viewBox 800 × 200.  Letters baseline y=140, cap-height y=40.
   * N is the 3rd letter, centered around x=400 with stems at ~370 and ~430.
   * Pulse line: baseline (y=140) under A·A, rises at x=370,
   *   runs at cap-height (y=40) over N, drops at x=430, continues over K·A.
   */
  const lineLow = 140;
  const lineHigh = 40;
  const nLeft = 365;
  const nRight = 432;
  const letterPositions = [120, 240, 400, 560, 680]; // A A N K A

  return (
    <svg
      viewBox="0 0 800 200"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      {/* Pulse line */}
      <path
        d={`M20 ${lineLow} H${nLeft} L${nLeft} ${lineHigh} H${nRight} L${nRight} ${lineLow} H${nRight} M${nRight} ${lineHigh} H780`}
        stroke={pulse}
        strokeWidth="2.4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
      {/* Letters — drawn AFTER the line so the N stems sit on top of the verticals */}
      <g
        fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
        fontWeight="400"
        fontSize="128"
        fill={wordColor}
        textAnchor="middle"
      >
        {LETTERS.map((ch, i) => (
          <text key={i} x={letterPositions[i]} y={lineLow}>
            {ch}
          </text>
        ))}
      </g>
    </svg>
  );
}

/**
 * Signature pulse line — universal divider for the site.
 * Same "step" geometry as the logo: a horizontal line with a single
 * inverted-U well in the middle (where the N would sit).
 *
 * Width fills container.  Height fixed via className (e.g. h-3, h-4).
 *
 * Variants:
 *   "default" — bronze line (use on light or dark surfaces)
 *   "muted"   — platinum line for subtle in-context dividers
 */
export function PulseLine({
  className,
  variant = "default",
  /** When true, omits the inverted-U well and renders a plain straight line. */
  flat = false,
}: {
  className?: string;
  variant?: "default" | "muted";
  flat?: boolean;
}) {
  const color = variant === "muted" ? "var(--platinum)" : "var(--bronze)";

  // viewBox 600 × 40.  Lower line at y=28, upper at y=12.
  // Well sits between x=288..312.
  const path = flat
    ? "M0 20 H600"
    : "M0 28 H288 L288 12 H312 L312 28 H600";

  return (
    <svg
      viewBox="0 0 600 40"
      preserveAspectRatio="none"
      className={className}
      role="presentation"
      aria-hidden="true"
      fill="none"
    >
      <path
        d={path}
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
