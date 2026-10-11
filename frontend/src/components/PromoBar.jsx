import { Pepite } from "./Bites";
import { site } from "../mock/data";

export default function PromoBar() {
  return (
    <div
      className="flex items-center justify-center gap-3 bg-espresso px-4 py-2 text-center"
      data-testid="promo-bar"
    >
      <Pepite className="hidden h-3 w-3 shrink-0 text-caramel mobile:block" />
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-creme/90">
        {site.promoBar}
      </p>
      <Pepite className="hidden h-3 w-3 shrink-0 text-caramel mobile:block" />
    </div>
  );
}
