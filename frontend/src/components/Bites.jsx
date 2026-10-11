export function Pepite({ className = "h-3 w-3" }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <ellipse
        cx="6"
        cy="6"
        rx="3.4"
        ry="4.6"
        transform="rotate(22 6 6)"
        fill="currentColor"
      />
    </svg>
  );
}

/* Transition douce entre sections : courbe organique (écho du rond du cookie) */
export function CurveTop({ color = "#F6EEE3", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`curve-top -mt-14 h-14 w-full mobile:-mt-10 mobile:h-10 ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}

/* Coin croqué rond qui apparaît au survol (sur une image de carte) */
export function BiteCorner({ bg = "#FFFBF5", size = "h-16 w-16" }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute -top-1 -right-1 ${size} scale-0 rounded-full opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100`}
      style={{ backgroundColor: bg }}
    />
  );
}
