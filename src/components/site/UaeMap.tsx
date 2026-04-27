import { useMemo, useState } from "react";

/**
 * Hand-styled UAE map. Pure SVG — no third-party map library.
 * Pins are positioned with normalized 0–100 coordinates that roughly match
 * the seven emirates layout. Hover a pin to reveal the venue label.
 */

export type MapPinData = {
  id: string;
  brand: string;
  area: string;
  /** 0–100 percentage from left */
  x: number;
  /** 0–100 percentage from top */
  y: number;
};

interface UaeMapProps {
  pins: MapPinData[];
}

export function UaeMap({ pins }: UaeMapProps) {
  const [active, setActive] = useState<string | null>(null);

  // Approximate UAE outline — stylised, not geographically exact.
  // Intentionally simplified for an editorial feel.
  const outline = useMemo(
    () =>
      "M 14 52 L 8 60 L 6 68 L 10 74 L 18 78 L 28 80 L 38 78 L 46 76 L 52 74 " +
      "L 60 72 L 70 70 L 78 66 L 86 58 L 94 52 L 96 44 L 92 36 L 86 30 L 78 26 " +
      "L 70 24 L 60 22 L 52 24 L 46 28 L 40 32 L 34 36 L 28 40 L 22 44 L 18 48 Z",
    [],
  );

  return (
    <div className="relative w-full overflow-hidden bg-obsidian">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="block h-auto w-full aspect-[16/10]"
        aria-label="Map of Aanka Group locations across the UAE"
      >
        {/* Subtle grid */}
        <defs>
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgba(184,184,176,0.06)" strokeWidth="0.15" />
          </pattern>
          <radialGradient id="glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(184,184,176,0.08)" />
            <stop offset="100%" stopColor="rgba(20,20,20,0)" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill="url(#grid)" />
        <rect width="100" height="100" fill="url(#glow)" />

        {/* UAE stylised landmass */}
        <path
          d={outline}
          fill="rgba(244,242,237,0.04)"
          stroke="rgba(140,122,107,0.55)"
          strokeWidth="0.35"
          strokeLinejoin="round"
        />

        {/* Decorative compass mark */}
        <g transform="translate(88, 12)" opacity="0.5">
          <circle r="2.2" fill="none" stroke="rgba(244,242,237,0.4)" strokeWidth="0.15" />
          <line x1="0" y1="-2.2" x2="0" y2="2.2" stroke="rgba(244,242,237,0.4)" strokeWidth="0.15" />
          <line x1="-2.2" y1="0" x2="2.2" y2="0" stroke="rgba(244,242,237,0.4)" strokeWidth="0.15" />
          <text y="-3" textAnchor="middle" fill="rgba(244,242,237,0.5)" fontSize="1.5" fontFamily="Inter, sans-serif" letterSpacing="0.3">
            N
          </text>
        </g>

        {/* Pins */}
        {pins.map((p) => {
          const isActive = active === p.id;
          return (
            <g
              key={p.id}
              transform={`translate(${p.x}, ${p.y})`}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(p.id)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              className="cursor-pointer focus:outline-none"
            >
              {/* Outer halo */}
              <circle
                r={isActive ? 2.4 : 1.6}
                fill="rgba(140,122,107,0.18)"
                style={{ transition: "r 400ms var(--ease-cinematic)" }}
              />
              {/* Inner dot */}
              <circle r={0.7} fill="#B8B8B0" />
              <circle r={0.35} fill="#F4F2ED" />

              {/* Label */}
              {isActive ? (
                <g transform="translate(2.4, -1.2)">
                  <rect
                    x="0"
                    y="-2.6"
                    width={Math.max(p.brand.length, p.area.length) * 1.0 + 2}
                    height="5"
                    fill="rgba(244,242,237,0.95)"
                  />
                  <text x="1" y="-0.6" fill="#141414" fontSize="1.4" fontFamily="Inter, sans-serif" fontWeight="500">
                    {p.brand}
                  </text>
                  <text x="1" y="1.4" fill="#8C7A6B" fontSize="1.1" fontFamily="Inter, sans-serif" letterSpacing="0.15">
                    {p.area.toUpperCase()}
                  </text>
                </g>
              ) : null}
            </g>
          );
        })}

        {/* Emirate labels (subtle) */}
        <g fill="rgba(244,242,237,0.35)" fontFamily="Inter, sans-serif" fontSize="1.3" letterSpacing="0.3">
          <text x="36" y="62">DUBAI</text>
          <text x="22" y="50">ABU DHABI</text>
          <text x="48" y="46">SHARJAH</text>
          <text x="58" y="38">RAS AL KHAIMAH</text>
          <text x="66" y="52">FUJAIRAH</text>
        </g>
      </svg>
    </div>
  );
}
