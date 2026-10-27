interface BottleSVGProps {
  className?: string;
}

export function BottleSVG({ className }: BottleSVGProps) {
  return (
    <svg
      viewBox="0 0 360 720"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Garrafa Jardim Botânico London Dry Gin No 5"
    >
      <defs>
        {/* Transparent glass with subtle blue-ish refraction */}
        <linearGradient id="glass-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c8d2e0" stopOpacity="0.55" />
          <stop offset="18%" stopColor="#e7edf5" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="82%" stopColor="#e7edf5" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#b2bccd" stopOpacity="0.55" />
        </linearGradient>

        <linearGradient id="glass-neck" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c8d2e0" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#b2bccd" stopOpacity="0.6" />
        </linearGradient>

        <linearGradient id="liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e7edf5" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#c8d2e0" stopOpacity="0.6" />
        </linearGradient>

        <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor="#0f0f0f" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>

        <linearGradient id="label-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3ecd9" />
          <stop offset="100%" stopColor="#e8dfc7" />
        </linearGradient>

        <linearGradient id="neck-label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3ecd9" />
          <stop offset="100%" stopColor="#e8dfc7" />
        </linearGradient>

        <radialGradient id="highlight-left" cx="0.3" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="highlight-right" cx="0.7" cy="0.3" r="0.3">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

        <filter id="soft-shadow">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Shadow under bottle */}
      <ellipse
        cx="180"
        cy="700"
        rx="110"
        ry="10"
        fill="#0d1d44"
        opacity="0.18"
        filter="url(#soft-shadow)"
      />

      {/* Cap */}
      <rect x="150" y="55" width="60" height="50" rx="3" fill="url(#cap)" />
      <rect x="148" y="100" width="64" height="6" rx="1" fill="#0a0a0a" />

      {/* Neck */}
      <path
        d="M 155 106 L 155 180 L 148 200 L 148 250"
        stroke="#9eaabd"
        strokeWidth="1"
        fill="url(#glass-neck)"
      />
      <path
        d="M 205 106 L 205 180 L 212 200 L 212 250"
        stroke="#9eaabd"
        strokeWidth="1"
        fill="url(#glass-neck)"
      />
      <rect x="155" y="106" width="50" height="74" fill="url(#glass-neck)" />

      {/* Neck label (small) */}
      <rect
        x="148"
        y="118"
        width="64"
        height="55"
        fill="url(#neck-label)"
        stroke="#1a3570"
        strokeWidth="0.3"
      />
      {/* Still illustration on neck label */}
      <g transform="translate(180, 145)" stroke="#1a3570" strokeWidth="0.8" fill="none">
        <rect x="-10" y="-10" width="8" height="18" />
        <rect x="2" y="-14" width="6" height="22" />
        <path d="M -6 -10 Q -2 -16 2 -14" />
        <circle cx="-8" cy="6" r="2.5" fill="#1a3570" />
        <circle cx="6" cy="4" r="1.5" />
      </g>

      {/* Shoulder transition */}
      <path
        d="M 148 250 Q 90 258 85 320 L 85 650 Q 85 685 125 690 L 235 690 Q 275 685 275 650 L 275 320 Q 270 258 212 250 Z"
        fill="url(#glass-body)"
        stroke="#9eaabd"
        strokeWidth="1"
      />

      {/* Liquid fill */}
      <path
        d="M 90 340 L 90 648 Q 90 680 125 684 L 235 684 Q 270 680 270 648 L 270 340 Q 180 350 90 340 Z"
        fill="url(#liquid)"
        opacity="0.5"
      />

      {/* Left highlight on glass */}
      <ellipse cx="105" cy="450" rx="10" ry="190" fill="url(#highlight-left)" />
      {/* Right highlight */}
      <ellipse cx="250" cy="420" rx="6" ry="150" fill="url(#highlight-right)" />

      {/* MAIN LABEL */}
      <rect
        x="105"
        y="370"
        width="150"
        height="250"
        rx="1"
        fill="url(#label-paper)"
        stroke="#1a3570"
        strokeWidth="0.4"
      />

      {/* Art déco outer frame */}
      <g stroke="#1a3570" strokeWidth="0.7" fill="none">
        {/* Outer rectangle */}
        <rect x="112" y="377" width="136" height="236" />
        {/* Corner ornaments */}
        <path d="M 112 395 L 120 395 L 120 377" />
        <path d="M 248 395 L 240 395 L 240 377" />
        <path d="M 112 595 L 120 595 L 120 613" />
        <path d="M 248 595 L 240 595 L 240 613" />
        {/* Inner line */}
        <rect x="118" y="383" width="124" height="224" strokeWidth="0.4" opacity="0.6" />
      </g>

      {/* "SÃO PAULO URBAN DISTILLERY presents" */}
      <text
        x="180"
        y="402"
        textAnchor="middle"
        fontSize="4.6"
        fill="#1a3570"
        letterSpacing="2"
        fontFamily="serif"
        fontWeight="500"
      >
        · SÃO · PAULO · URBAN · DISTILLERY ·
      </text>
      <text
        x="180"
        y="412"
        textAnchor="middle"
        fontSize="4"
        fill="#1a3570"
        letterSpacing="3"
        fontFamily="serif"
        fontStyle="italic"
        opacity="0.75"
      >
        presents
      </text>

      {/* Decorative divider */}
      <line x1="130" y1="418" x2="230" y2="418" stroke="#1a3570" strokeWidth="0.3" opacity="0.5" />

      {/* JARDIM — big art déco */}
      <text
        x="180"
        y="455"
        textAnchor="middle"
        fontSize="26"
        fill="#1a3570"
        letterSpacing="2"
        fontFamily="'Limelight', serif"
        fontWeight="400"
      >
        JARDIM
      </text>
      <text
        x="180"
        y="482"
        textAnchor="middle"
        fontSize="22"
        fill="#1a3570"
        letterSpacing="2"
        fontFamily="'Limelight', serif"
        fontWeight="400"
      >
        BOTÂNICO
      </text>

      {/* LONDON DRY GIN */}
      <text
        x="180"
        y="500"
        textAnchor="middle"
        fontSize="4.5"
        fill="#1a3570"
        letterSpacing="4"
        fontFamily="serif"
        fontWeight="500"
      >
        LONDON DRY GIN
      </text>

      {/* No 5 badge */}
      <g transform="translate(180, 530)">
        <circle r="14" fill="none" stroke="#1a3570" strokeWidth="0.6" />
        <circle r="11" fill="none" stroke="#1a3570" strokeWidth="0.3" />
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fontSize="12"
          fill="#1a3570"
          fontFamily="'Limelight', serif"
        >
          No5
        </text>
      </g>

      {/* Decorative line */}
      <line x1="135" y1="560" x2="225" y2="560" stroke="#1a3570" strokeWidth="0.3" opacity="0.4" />

      {/* Two bottom badges: 700ml / 43% */}
      <g transform="translate(140, 585)">
        <circle r="12" fill="none" stroke="#1a3570" strokeWidth="0.5" />
        <SunRays />
        <text x="0" y="-1" textAnchor="middle" fontSize="4.5" fill="#1a3570" fontFamily="serif" fontWeight="500">
          700
        </text>
        <text x="0" y="5" textAnchor="middle" fontSize="3.3" fill="#1a3570" fontFamily="serif" letterSpacing="1">
          ML
        </text>
      </g>
      <g transform="translate(220, 585)">
        <circle r="12" fill="none" stroke="#1a3570" strokeWidth="0.5" />
        <SunRays />
        <text x="0" y="-1" textAnchor="middle" fontSize="4.5" fill="#1a3570" fontFamily="serif" fontWeight="500">
          43%
        </text>
        <text x="0" y="5" textAnchor="middle" fontSize="3" fill="#1a3570" fontFamily="serif" letterSpacing="1">
          ABV
        </text>
      </g>

      {/* Base */}
      <ellipse cx="180" cy="690" rx="88" ry="6" fill="#9eaabd" opacity="0.5" />
    </svg>
  );
}

function SunRays() {
  return (
    <g stroke="#1a3570" strokeWidth="0.3" opacity="0.6">
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x1 = (Math.cos(rad) * 7).toFixed(3);
        const y1 = (Math.sin(rad) * 7).toFixed(3);
        const x2 = (Math.cos(rad) * 11).toFixed(3);
        const y2 = (Math.sin(rad) * 11).toFixed(3);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  );
}
