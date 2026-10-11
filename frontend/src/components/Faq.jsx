import { ChevronDown } from "lucide-react";

export default function Faq({ items, light = false }) {
  return (
    <div
      className={`divide-y divide-espresso/10 rounded-card border border-espresso/10 bg-offwhite px-6 ${
        light ? "border-creme/15 bg-transparent divide-creme/10" : ""
      }`}
      data-testid="faq"
    >
      {items.map((item, i) => (
        <details key={i} className="group py-1">
          <summary className="flex items-center justify-between gap-4 py-4 text-left font-title text-lg font-semibold">
            <span>{item.q}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-caramel transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <p
            className={`pb-5 pr-8 text-[15px] leading-relaxed ${
              light ? "text-creme/70" : "text-espresso/70"
            }`}
          >
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
