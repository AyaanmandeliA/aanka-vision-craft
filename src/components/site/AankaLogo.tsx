/**
 * AANKA wordmark with the signature bronze "pulse line" that travels
 * across the top of the word, dips through the N, and exits to the right.
 * SVG is built to scale fluidly — set width via className.
 */
type Props = {
  className?: string;
  variant?: "primary" | "reversed" | "warm";
  /** Render only the brand-mark (the N + pulse), no AANKA wordmark. */
  markOnly?: boolean;
  title?: string;
};

export function AankaLogo({
  className,
  variant = "primary",
  markOnly = false,
  title = "AANKA",
}: Props) {
  const wordColor =
    variant === "reversed"
      ? "var(--alabaster)"
      : variant === "warm"
        ? "var(--platinum)"
        : "var(--obsidian)";
  const pulseColor = "var(--bronze)";

  if (markOnly) {
    return (
      <svg
        viewBox="0 0 200 120"
        className={className}
        role="img"
        aria-label={`${title} mark`}
        fill="none"
      >
        {/* pulse line: enters left, drops, then exits right */}
        <path
          d="M0 38 H72 L72 92 L128 28 L128 82 H200"
          stroke={pulseColor}
          strokeWidth="2.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* The N stroke (diagonal) drawn over to suggest the letter */}
        <path
          d="M72 92 L128 28"
          stroke={wordColor}
          strokeWidth="6"
          strokeLinecap="square"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 760 180"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      {/* Pulse line — runs across the top, dips through the N, exits right */}
      <path
        d="M20 60 H332 L332 150 L428 28 L428 122 H740"
        stroke={pulseColor}
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* AANKA wordmark — Playfair-like serif via system fallback */}
      <text
        x="50%"
        y="118"
        textAnchor="middle"
        fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
        fontWeight="400"
        fontSize="118"
        letterSpacing="22"
        fill={wordColor}
      >
        AANKA
      </text>
    </svg>
  );
}

/**
 * Standalone signature pulse line — for section dividers / nav hover / breaks.
 * Width fills container; height is fixed.
 */
export function PulseLine({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "muted";
}) {
  const color = variant === "muted" ? "var(--platinum)" : "var(--bronze)";
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
        d="M0 20 H276 L276 36 L292 6 L292 26 H600"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
