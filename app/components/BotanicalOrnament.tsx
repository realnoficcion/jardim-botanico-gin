interface IconProps {
  className?: string;
}

export function DecoOrnament({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 240 30"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round">
        <line x1="0" y1="15" x2="80" y2="15" />
        <line x1="160" y1="15" x2="240" y2="15" />
        <g transform="translate(120, 15)">
          <circle r="2.5" fill="currentColor" />
          <path d="M -20 0 L -8 -6 L -8 6 Z" fill="currentColor" />
          <path d="M 20 0 L 8 -6 L 8 6 Z" fill="currentColor" />
          <circle cx="-30" cy="0" r="1.5" fill="currentColor" />
          <circle cx="30" cy="0" r="1.5" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
}

export function SunburstBadge({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.8" fill="none">
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="25" opacity="0.5" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x1 = (50 + Math.cos(rad) * 32).toFixed(3);
          const y1 = (50 + Math.sin(rad) * 32).toFixed(3);
          const x2 = (50 + Math.cos(rad) * 44).toFixed(3);
          const y2 = (50 + Math.sin(rad) * 44).toFixed(3);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

export function DecoCornerFrame({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <path d="M 0 20 L 0 0 L 20 0" />
        <path d="M 0 10 L 10 10 L 10 0" opacity="0.5" />
      </g>
    </svg>
  );
}

/* Simple botanical icons kept for category pages */
export function JuniperIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <line x1="30" y1="10" x2="30" y2="52" />
        <path d="M 30 20 Q 20 18 15 24" />
        <path d="M 30 28 Q 18 26 12 34" />
        <path d="M 30 36 Q 20 36 15 44" />
        <path d="M 30 20 Q 40 18 45 24" />
        <path d="M 30 28 Q 42 26 48 34" />
        <path d="M 30 36 Q 40 36 45 44" />
        <circle cx="18" cy="30" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="42" cy="38" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="30" cy="44" r="2.5" fill="currentColor" opacity="0.7" />
        <circle cx="40" cy="22" r="2.5" fill="currentColor" opacity="0.7" />
      </g>
    </svg>
  );
}

export function CitrusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <circle cx="30" cy="30" r="18" />
        <circle cx="30" cy="30" r="14" opacity="0.6" />
        <line x1="30" y1="12" x2="30" y2="48" />
        <line x1="12" y1="30" x2="48" y2="30" />
        <line x1="17" y1="17" x2="43" y2="43" opacity="0.5" />
        <line x1="43" y1="17" x2="17" y2="43" opacity="0.5" />
        <circle cx="30" cy="30" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M 30 8 Q 10 20 10 40 Q 10 52 30 52 Q 50 52 50 40 Q 50 20 30 8 Z" />
        <line x1="30" y1="8" x2="30" y2="52" />
        <path d="M 30 20 Q 20 24 18 32" opacity="0.6" />
        <path d="M 30 20 Q 40 24 42 32" opacity="0.6" />
        <path d="M 30 32 Q 20 36 18 44" opacity="0.6" />
        <path d="M 30 32 Q 40 36 42 44" opacity="0.6" />
      </g>
    </svg>
  );
}

export function SpiceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M 30 8 Q 24 18 24 30 Q 24 44 30 52 Q 36 44 36 30 Q 36 18 30 8 Z" />
        <line x1="30" y1="8" x2="30" y2="52" />
        <path d="M 24 20 Q 20 24 18 30" opacity="0.6" />
        <path d="M 36 20 Q 40 24 42 30" opacity="0.6" />
        <circle cx="30" cy="20" r="1.5" fill="currentColor" />
        <circle cx="30" cy="30" r="1.5" fill="currentColor" />
        <circle cx="30" cy="40" r="1.5" fill="currentColor" />
      </g>
    </svg>
  );
}

export function FlowerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.4" />
        <ellipse cx="30" cy="16" rx="4" ry="8" />
        <ellipse cx="30" cy="44" rx="4" ry="8" />
        <ellipse cx="16" cy="30" rx="8" ry="4" />
        <ellipse cx="44" cy="30" rx="8" ry="4" />
        <ellipse cx="20" cy="20" rx="6" ry="3" transform="rotate(-45 20 20)" />
        <ellipse cx="40" cy="20" rx="6" ry="3" transform="rotate(45 40 20)" />
        <ellipse cx="20" cy="40" rx="6" ry="3" transform="rotate(45 20 40)" />
        <ellipse cx="40" cy="40" rx="6" ry="3" transform="rotate(-45 40 40)" />
      </g>
    </svg>
  );
}

export function RootIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M 30 8 L 30 32" />
        <path d="M 30 32 Q 20 38 14 48" />
        <path d="M 30 32 Q 40 38 46 48" />
        <path d="M 30 32 Q 30 42 28 52" />
        <path d="M 30 32 Q 24 40 22 50" />
        <path d="M 30 32 Q 36 40 38 50" />
        <circle cx="30" cy="12" r="4" fill="currentColor" opacity="0.5" />
        <path d="M 26 12 Q 30 6 34 12" />
      </g>
    </svg>
  );
}

export function StillIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <rect x="18" y="20" width="14" height="30" />
        <rect x="34" y="12" width="10" height="38" />
        <path d="M 18 20 Q 25 10 32 20" />
        <circle cx="12" cy="40" r="4" fill="currentColor" opacity="0.6" />
        <line x1="18" y1="40" x2="16" y2="40" />
      </g>
    </svg>
  );
}
