interface DecoBackgroundProps {
  variant?: "arcs" | "radial" | "scroll" | "crescent" | "flourish";
  className?: string;
}

/**
 * Organic art-déco ornaments for section backgrounds.
 * No rectangles, no frames — only curves, arcs, radial fades, and flourishes.
 * Strokes use currentColor so parent controls tint; container opacity controls visibility.
 */
export function DecoBackground({
  variant = "arcs",
  className,
}: DecoBackgroundProps) {
  if (variant === "arcs") return <ArcsDrift className={className} />;
  if (variant === "radial") return <RadialFade className={className} />;
  if (variant === "scroll") return <ScrollWave className={className} />;
  if (variant === "crescent") return <Crescent className={className} />;
  if (variant === "flourish") return <Flourish className={className} />;
  return null;
}

/** Concentric arcs drifting across the viewport diagonally. */
function ArcsDrift({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="arcs-fade" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g stroke="url(#arcs-fade)" strokeWidth="1.3" fill="none" strokeLinecap="round">
        {Array.from({ length: 14 }).map((_, i) => {
          const r = 80 + i * 42;
          return (
            <path
              key={i}
              d={`M ${400 - r} 400 A ${r} ${r} 0 0 1 ${400 + r} 400`}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Soft radial starburst — sunrays fading to invisible on all sides. */
function RadialFade({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="radial-fade" cx="0.5" cy="0.5" r="0.5">
          <stop offset="20%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g stroke="url(#radial-fade)" strokeWidth="1.3" fill="none" strokeLinecap="round">
        <circle cx="400" cy="400" r="50" opacity="0.6" />
        <circle cx="400" cy="400" r="120" opacity="0.3" />
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 360) / 36;
          const rad = (angle * Math.PI) / 180;
          const x1 = (400 + Math.cos(rad) * 70).toFixed(2);
          const y1 = (400 + Math.sin(rad) * 70).toFixed(2);
          const x2 = (400 + Math.cos(rad) * 360).toFixed(2);
          const y2 = (400 + Math.sin(rad) * 360).toFixed(2);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

/** A long undulating double-line scroll — reads as a horizontal flourish. */
function ScrollWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 240"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="scroll-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="20%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="80%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="url(#scroll-fade)" strokeWidth="1.3" fill="none" strokeLinecap="round">
        <path d="M 0 120 Q 150 60 300 120 T 600 120 T 900 120 T 1200 120" />
        <path
          d="M 0 140 Q 150 80 300 140 T 600 140 T 900 140 T 1200 140"
          opacity="0.55"
        />
        {/* Central ornament */}
        <g transform="translate(600 120)">
          <circle r="5" fill="currentColor" />
          <circle r="18" opacity="0.6" />
          <path d="M -40 0 Q -24 -14 -8 0 Q -24 14 -40 0 Z" opacity="0.7" />
          <path d="M 40 0 Q 24 -14 8 0 Q 24 14 40 0 Z" opacity="0.7" />
        </g>
        {/* Tiny dots along the wave */}
        {[150, 450, 750, 1050].map((x, i) => (
          <circle key={i} cx={x} cy="130" r="2" fill="currentColor" opacity="0.5" />
        ))}
      </g>
    </svg>
  );
}

/** Thin crescent — a sliver of a very large circle. Reads organic, not geometric. */
function Crescent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="crescent-fade" cx="0.5" cy="0.5" r="0.5">
          <stop offset="40%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g stroke="url(#crescent-fade)" strokeWidth="1.3" fill="none" strokeLinecap="round">
        <circle cx="400" cy="400" r="320" />
        <circle cx="400" cy="400" r="300" opacity="0.5" />
        <circle cx="400" cy="400" r="260" opacity="0.3" />
        {/* a few radial accents */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = -30 + (i * 60) / 7;
          const rad = (angle * Math.PI) / 180;
          const x1 = (400 + Math.cos(rad) * 268).toFixed(2);
          const y1 = (400 + Math.sin(rad) * 268).toFixed(2);
          const x2 = (400 + Math.cos(rad) * 316).toFixed(2);
          const y2 = (400 + Math.sin(rad) * 316).toFixed(2);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.7" />;
        })}
      </g>
    </svg>
  );
}

/** Elegant botanical flourish — reads like a brush stroke with filigree. */
function Flourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="flourish-fade" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="30%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="url(#flourish-fade)" strokeWidth="1.3" fill="none" strokeLinecap="round">
        {/* main sweep */}
        <path d="M 20 200 C 160 60 280 340 420 180 S 580 220 600 160" />
        <path
          d="M 20 220 C 160 80 280 360 420 200 S 580 240 600 180"
          opacity="0.5"
        />
        {/* filigree curls along the sweep */}
        <path d="M 160 150 Q 180 110 200 150 Q 180 180 160 150 Z" opacity="0.6" />
        <path d="M 340 260 Q 360 220 380 260 Q 360 290 340 260 Z" opacity="0.6" />
        <circle cx="200" cy="150" r="2.5" fill="currentColor" />
        <circle cx="380" cy="260" r="2.5" fill="currentColor" />
        <circle cx="500" cy="190" r="2" fill="currentColor" opacity="0.7" />
      </g>
    </svg>
  );
}
