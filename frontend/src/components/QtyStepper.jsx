import { Minus, Plus } from "lucide-react";

export default function QtyStepper({
  value,
  onChange,
  min = 1,
  label = "Quantité",
  size = "md",
}) {
  const btn =
    size === "sm"
      ? "h-9 w-9"
      : "h-11 w-11";
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-espresso/15 bg-offwhite p-1"
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        data-testid="qty-minus"
        aria-label="Diminuer la quantité"
        className={`flex ${btn} items-center justify-center rounded-full transition-colors hover:bg-sable disabled:opacity-30`}
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span
        className="w-9 text-center text-[15px] font-bold"
        aria-live="polite"
        data-testid="qty-value"
      >
        {value}
      </span>
      <button
        type="button"
        data-testid="qty-plus"
        aria-label="Augmenter la quantité"
        className={`flex ${btn} items-center justify-center rounded-full transition-colors hover:bg-sable`}
        onClick={() => onChange(value + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
