import { useId } from "react";

export function CookieMark({ variant = "color", className = "h-10 w-10" }) {
  const id = useId();
  const body = variant === "cream" ? "#F6EEE3" : "#7A4A2A";
  const chipA = variant === "cream" ? "#7A4A2A" : "#4A2A16";
  const chipB = variant === "cream" ? "#C08552" : "#F6EEE3";
  return (
    <svg viewBox="0 0 56 56" className={className} role="img" aria-label="Logo Mille Pépites : un cookie croqué">
      <mask id={id}>
        <rect width="56" height="56" fill="#fff" />
        <circle cx="50" cy="6" r="13" fill="#000" />
      </mask>
      <circle cx="26" cy="30" r="20" fill={body} mask={`url(#${id})`} />
      <ellipse cx="19" cy="24" rx="3" ry="4" fill={chipA} transform="rotate(-20 19 24)" />
      <ellipse cx="31" cy="34" rx="3" ry="4" fill={chipB} transform="rotate(15 31 34)" />
      <ellipse cx="20" cy="38" rx="2.7" ry="3.6" fill={chipB} transform="rotate(30 20 38)" />
      <ellipse cx="33" cy="22" rx="2.5" ry="3.4" fill={chipA} transform="rotate(-35 33 22)" />
      <ellipse cx="27" cy="44" rx="2.4" ry="3.2" fill={chipA} transform="rotate(10 27 44)" />
    </svg>
  );
}

export default function Logo({ variant = "color", markClass = "h-11 w-11" }) {
  const cream = variant === "cream";
  return (
    <span className="flex items-center gap-3">
      <CookieMark variant={variant} className={markClass} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-title text-[22px] font-semibold tracking-tight ${
            cream ? "text-creme" : "text-espresso"
          }`}
        >
          Mille Pépites
        </span>
        <span
          className={`mt-1.5 text-[9px] font-bold uppercase tracking-[0.22em] ${
            cream ? "text-creme/60" : "text-espresso/55"
          }`}
        >
          Cookies faits main · France
        </span>
      </span>
    </span>
  );
}
