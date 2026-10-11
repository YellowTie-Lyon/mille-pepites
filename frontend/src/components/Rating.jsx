import { Star } from "lucide-react";

export default function Rating({ rating, count = null, size = 16, testid }) {
  const pct = (rating / 5) * 100;
  const row = (filled) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        style={{ width: size, height: size }}
        className={filled ? "fill-current" : ""}
        strokeWidth={1.5}
      />
    ));
  return (
    <span className="inline-flex items-center gap-2" data-testid={testid}>
      <span
        className="relative inline-flex text-espresso/15"
        aria-label={`Note moyenne : ${String(rating).replace(".", ",")} sur 5`}
      >
        <span className="flex gap-0.5">{row(false)}</span>
        <span
          className="absolute inset-0 flex gap-0.5 overflow-hidden text-caramel"
          style={{ width: `${pct}%` }}
        >
          {row(true)}
        </span>
      </span>
      {count !== null && (
        <span className="text-xs font-semibold text-espresso/55">
          ({count})
        </span>
      )}
    </span>
  );
}
