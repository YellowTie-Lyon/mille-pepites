import { Pepite } from "./Bites";

export default function Marquee({ items, className = "" }) {
  const row = (hidden) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-12 pr-12"
    >
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-12 whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.22em]"
        >
          {item}
          <Pepite className="h-3.5 w-3.5 text-caramel" />
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden ${className}`} data-testid="marquee">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
