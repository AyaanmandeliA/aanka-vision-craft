/**
 * AANKA brand system — wordmark, brand mark, and signature pulse line.
 *
 * Geometry of the pulse line (per brand board):
 *   • A horizontal bronze line runs at cap-height across the whole word.
 *   • Just before the N, it drops vertically down to the baseline.
 *   • It runs along the baseline UNDER the N.
 *   • Just after the N, it rises vertically back up to cap-height.
 *   • Then continues right.
 * The N itself sits inside this rectangular "well" — its diagonal
 * crosses both horizontal segments, intersecting the line.
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
    // Just the N inside the pulse-line rectangle.
    // viewBox: 200 wide, 120 tall.  Line at top y=20, bottom y=100, N spans x=70..130.
    return (
      <svg
        viewBox="0 0 200 120"
        className={className}
        role="img"
        aria-label={`${title} mark`}
        fill="none"
      >
        {/* Pulse line — enters left, drops down before N, runs under, rises after N, exits right */}
        <path
          d="M0 20 H70 L70 100 H130 L130 20 H200"
          stroke={pulse}
          strokeWidth="2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
        {/* The N — serif diagonal sits inside the well */}
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
   * Wordmark layout — 5 letters, evenly spaced on a wide canvas.
   * viewBox 800 × 200.  Letters baseline at y=140, cap-height at y=40.
   * N is the 3rd letter, centered at x=400 (with width ~80).
   * Pulse line: y=40 across, drops at x=360, runs at y=140 under N, rises at x=440.
   */
  const lineTop = 40;
  const lineBottom = 140;
  const nLeft = 360;
  const nRight = 440;
  const letterPositions = [120, 240, 400, 560, 680]; // A A N K A

  return (
    <svg
      viewBox="0 0 800 200"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      {/* Pulse line — drawn first so letters can sit on top */}
      <path
        d={`M20 ${lineTop} H${nLeft} L${nLeft} ${lineBottom} H${nRight} L${nRight} ${lineTop} H780`}
        stroke={pulse}
        strokeWidth="2.2"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
      {/* Letters */}
      <g
        fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
        fontWeight="400"
        fontSize="128"
        fill={wordColor}
        textAnchor="middle"
      >
        {LETTERS.map((ch, i) => (
          <text key={i} x={letterPositions[i]} y={lineBottom}>
            {ch}
          </text>
        ))}
      </g>
    </svg>
  );
}

/**
 * Signature pulse line — the universal divider for the site.
 * Same geometry as the logo (line dips under a small N-well in the middle),
 * but stretched wide.  Use anywhere a horizontal rule would normally go.
 *
 * Width fills container.  Height is fixed (~32px default via className).
 *
 * Variants:
 *   "default" — bronze line on light/dark surfaces
 *   "muted"   — platinum line for subtle in-context dividers
 */
export function PulseLine({
  className,
  variant = "default",
  /** When true, omits the N-well dip and renders a perfectly straight line. */
  flat = false,
}: {
  className?: string;
  variant?: "default" | "muted";
  flat?: boolean;
}) {
  const color = variant === "muted" ? "var(--platinum)" : "var(--bronze)";

  // viewBox 600 × 40.  Line baseline at y=16.
  // Well sits between x=284..316, drops to y=34.
  const path = flat
    ? "M0 16 H600"
    : "M0 16 H284 L284 34 H316 L316 16 H600";

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
