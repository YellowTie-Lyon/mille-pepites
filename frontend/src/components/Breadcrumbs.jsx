import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items, light = false }) {
  return (
    <nav aria-label="Fil d'Ariane" data-testid="breadcrumbs">
      <ol
        className={`flex flex-wrap items-center gap-1 text-[13px] ${
          light ? "text-creme/60" : "text-espresso/55"
        }`}
      >
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {last ? (
                <span className="font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="transition-colors hover:text-cookie"
                >
                  {item.label}
                </Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 opacity-50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
