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

/* Bord croqué : séparation entre deux sections, façon morsure */
export function BiteDivider({ color = "#F6EEE3", flip = false, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`bitten-edge w-full ${className}`}
      style={{
        "--edge-color": color,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
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
