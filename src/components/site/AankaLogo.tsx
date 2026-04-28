/**
 * AANKA brand system — wordmark, brand mark, and signature pulse line.
 *
 * Geometry of the pulse line (per the brand board):
 *   • Bronze line enters from the LEFT at the BASELINE under A · A.
 *   • Rises vertically at the N's left stem.
 *   • Runs across the TOP (cap-height) over the N only.
 *   • Drops vertically at the N's right stem.
 *   • Continues at the BASELINE under K · A and exits right.
 *
 * The N sits inside an inverted "U" — the line goes UP and OVER the N,
 * then back DOWN to baseline on the other side. Both ends of the line
 * are at the same baseline level; only the N is "lifted".
 */

type LogoProps = {
  className?: string;
  variant?: "primary" | "reversed" | "warm";
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
    return (
      <svg
        viewBox="0 0 200 120"
        className={className}
        role="img"
        aria-label={`${title} mark`}
        fill="none"
      >
        <path
          d="M0 100 H70 L70 20 H130 L130 100 H200"
          stroke={pulse}
          strokeWidth="2.4"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
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
   * Wordmark — viewBox 800 × 200.
   * Letters baseline y=140, cap-height y=40.
   * Line: baseline under A·A, rises at N's left stem, across cap-height
   * over N, drops at N's right stem, baseline under K·A.
   */
  const lineLow = 140;
  const lineHigh = 40;
  const nLeft = 365;
  const nRight = 432;
  const letterPositions = [120, 240, 400, 560, 680];

  return (
    <svg
      viewBox="0 0 800 200"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      <path
        d={`M20 ${lineLow} H${nLeft} L${nLeft} ${lineHigh} H${nRight} L${nRight} ${lineLow} H780`}
        stroke={pulse}
        strokeWidth="2.4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
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
 * Signature pulse line — universal divider matching the logo geometry.
 * Horizontal baseline with a single inverted-U "lift" in the middle
 * (where the N sits in the wordmark). Both ends of the line are at
 * the same baseline level.
 */
export function PulseLine({
  className,
  variant = "default",
  flat = false,
}: {
  className?: string;
  variant?: "default" | "muted";
  flat?: boolean;
}) {
  const color = variant === "muted" ? "var(--platinum)" : "var(--bronze)";

  // viewBox 600 × 40. Baseline y=28, lifted top y=12. Lift between x=288..312.
  const path = flat
    ? "M0 28 H600"
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
