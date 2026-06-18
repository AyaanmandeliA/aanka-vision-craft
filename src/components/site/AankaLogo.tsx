import logoPrimary from "@/assets/aanka-logo-extracted-primary.png";
import logoReversed from "@/assets/aanka-logo-extracted-reversed.png";

/**
 * AANKA brand system — extracted wordmark + straight brand line.
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
/* AankaLogo — extracted wordmark from the supplied identity board     */
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

  const src = variant === "reversed" ? logoReversed : logoPrimary;

  return (
    <img
      src={src}
      alt={title}
      width={1662}
      height={360}
      className={className}
      decoding="async"
    />
  );
}
