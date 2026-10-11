import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cookie, Trash2, X } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { fmt } from "../utils";
import { site, cartPage } from "../mock/data";
import QtyStepper from "./QtyStepper";

export function FreeShippingProgress({ subtotal, compact = false }) {
  const goal = site.freeShippingThreshold;
  const reached = subtotal >= goal;
  const pct = Math.min(100, (subtotal / goal) * 100);
  return (
    <div className={compact ? "" : "rounded-card bg-sable/60 p-4"} data-testid="free-shipping-progress">
      <p className="mb-2 text-[13px] font-bold text-espresso">
        {reached
          ? cartPage.progress.after
          : cartPage.progress.before(fmt(goal - subtotal))}
      </p>
      <div className="h-2 overflow-hidden rounded-full bg-espresso/10">
        <div
          className="h-full rounded-full bg-caramel transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const {
    drawerOpen,
    setDrawerOpen,
    items,
    setQty,
    removeItem,
    subtotal,
    count,
  } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <div
      aria-hidden={!drawerOpen}
      className={`fixed inset-0 z-[70] ${drawerOpen ? "" : "pointer-events-none"}`}
      data-testid="cart-drawer-root"
    >
      <div
        onClick={() => setDrawerOpen(false)}
        className={`absolute inset-0 bg-espresso/50 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Mini-panier"
        data-testid="cart-drawer"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-creme shadow-lift transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-5">
          <p className="font-title text-2xl font-semibold">
            Ton panier
            {count > 0 && (
              <span className="ml-2 text-base text-caramel">({count})</span>
            )}
          </p>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Fermer le panier"
            data-testid="cart-drawer-close"
            className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-sable"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <Cookie className="h-12 w-12 text-sable" strokeWidth={1.2} />
            <p className="font-title text-xl font-semibold">{cartPage.empty.title}</p>
            <p className="text-sm text-espresso/60">{cartPage.empty.text}</p>
            <Link
              to="/boutique/"
              onClick={() => setDrawerOpen(false)}
              data-testid="cart-drawer-empty-cta"
              className="mt-2 flex h-12 items-center rounded-full bg-cookie px-7 text-sm font-extrabold text-creme transition-all hover:bg-espresso"
            >
              {cartPage.empty.cta}
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <FreeShippingProgress subtotal={subtotal} />
              <ul className="mt-4 flex flex-col gap-4">
                {items.map((it) => (
                  <li
                    key={it.key}
                    className="flex gap-3 rounded-card bg-offwhite p-3 shadow-soft"
                    data-testid="cart-drawer-item"
                  >
                    <img
                      src={it.image}
                      alt={it.name}
                      className="h-16 w-16 shrink-0 rounded-2xl object-cover"
                    />
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-bold leading-tight">{it.name}</p>
                        <button
                          type="button"
                          onClick={() => removeItem(it.key)}
                          aria-label={`${cartPage.removeLabel} ${it.name}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-espresso/40 transition-colors hover:text-brique"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      {it.meta && (
                        <p className="text-xs text-espresso/55">{it.meta}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <QtyStepper
                          value={it.qty}
                          onChange={(q) => setQty(it.key, q)}
                          label={`Quantité de ${it.name}`}
                          size="sm"
                        />
                        <p className="text-sm font-extrabold text-caramel">
                          {fmt(it.price * it.qty)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-espresso/10 px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-espresso/60">
                  {cartPage.totals.subtotal}
                </span>
                <span className="font-title text-2xl font-semibold" data-testid="cart-drawer-subtotal">
                  {fmt(subtotal)}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    navigate("/commande/");
                  }}
                  data-testid="cart-drawer-checkout"
                  className="flex h-12 items-center justify-center rounded-full bg-cookie px-6 text-sm font-extrabold text-creme transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
                >
                  {cartPage.submit}
                </button>
                <Link
                  to="/panier/"
                  onClick={() => setDrawerOpen(false)}
                  data-testid="cart-drawer-view"
                  className="flex h-12 items-center justify-center rounded-full border-2 border-espresso/15 py-3 text-sm font-extrabold text-espresso transition-colors hover:border-cookie hover:text-cookie"
                >
                  {cartPage.title}
                </Link>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
