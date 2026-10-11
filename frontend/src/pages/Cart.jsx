import { useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, Tag, Trash2, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import QtyStepper from "../components/QtyStepper";
import { FreeShippingProgress } from "../components/CartDrawer";
import { useStore } from "../context/StoreContext";
import { cartPage, products, site } from "../mock/data";
import { fmt } from "../utils";

export default function Cart() {
  const d = cartPage;
  const {
    items,
    setQty,
    removeItem,
    subtotal,
    discount,
    promo,
    setPromo,
    notify,
  } = useStore();
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const afterDiscount = subtotal - discount;
  const shipping = afterDiscount >= site.freeShippingThreshold ? 0 : site.shippingPrice;

  const applyCode = (e) => {
    e.preventDefault();
    const clean = code.trim().toUpperCase();
    if (clean === site.promoCode.code) {
      setPromo({ code: clean, rate: site.promoCode.rate });
      setCodeError("");
      notify("success", d.promo.success);
    } else {
      setCodeError(d.promo.error);
      notify("error", d.promo.error);
    }
  };

  if (items.length === 0) {
    return (
      <div data-section="panier-vide">
        <div className="container-site flex flex-col items-center gap-5 py-24 text-center mobile:py-16">
          <Cookie className="h-14 w-14 text-sable" strokeWidth={1.2} />
          <h1 className="font-title text-3xl font-semibold">{d.empty.title}</h1>
          <p className="max-w-sm text-espresso/65">{d.empty.text}</p>
          <Link
            to="/boutique/"
            data-testid="cart-empty-cta"
            className="mt-2 flex h-12 items-center rounded-full bg-cookie px-8 text-sm font-extrabold text-creme transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
          >
            {d.empty.cta}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <section data-section="panier" className="pb-10 pt-12 mobile:pt-8">
        <div className="container-site">
          <h1 className="font-title text-4xl font-semibold tracking-tight mobile:text-3xl">
            {d.title}
            <span className="ml-3 text-xl text-caramel">({items.length})</span>
          </h1>

          <div className="mt-8 grid gap-10 mobile:grid-cols-1 desktop:grid-cols-[1fr_360px]">
            {/* Articles */}
            <div className="flex flex-col gap-6">
              <FreeShippingProgress subtotal={afterDiscount} />

              <div className="overflow-hidden rounded-card bg-offwhite shadow-soft" data-testid="cart-table">
                <div className="hidden grid-cols-[1fr_90px_160px_100px_44px] gap-3 border-b border-espresso/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-espresso/50 tablet:grid">
                  {d.tableHead.map((h) => (
                    <span key={h} className={h === d.tableHead[3] ? "text-right" : ""}>
                      {h}
                    </span>
                  ))}
                  <span />
                </div>
                <ul className="divide-y divide-espresso/10">
                  {items.map((it) => (
                    <li
                      key={it.key}
                      className="grid grid-cols-[88px_1fr] items-center gap-4 p-5 tablet:grid-cols-[1fr_90px_160px_100px_44px]"
                      data-testid="cart-item"
                    >
                      <div className="flex items-center gap-4 tablet:contents">
                        <img
                          src={it.image}
                          alt={it.name}
                          className="h-[88px] w-[88px] rounded-2xl object-cover"
                        />
                        <div>
                          <Link
                            to={`/produit/${it.slug}/`}
                            className="font-title text-lg font-semibold leading-tight transition-colors hover:text-cookie"
                          >
                            {it.name}
                          </Link>
                          {it.meta && (
                            <p className="mt-1 line-clamp-2 text-xs leading-snug text-espresso/55">{it.meta}</p>
                          )}
                        </div>
                      </div>
                      <span className="hidden text-sm font-bold tablet:block">{fmt(it.price)}</span>
                      <div className="col-span-2 flex items-center justify-between gap-3 tablet:col-span-1 tablet:justify-center">
                        <QtyStepper
                          value={it.qty}
                          onChange={(q) => setQty(it.key, q)}
                          label={`Quantité de ${it.name}`}
                          size="sm"
                        />
                        <span className="text-sm font-extrabold text-caramel tablet:hidden">
                          {fmt(it.price * it.qty)}
                        </span>
                      </div>
                      <span className="hidden text-right text-sm font-extrabold text-caramel tablet:block" data-testid="cart-line-total">
                        {fmt(it.price * it.qty)}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeItem(it.key)}
                        aria-label={`${d.removeLabel} ${it.name}`}
                        data-testid={`cart-remove-${it.slug}`}
                        className="col-span-2 flex h-11 w-full items-center justify-center gap-1.5 rounded-full text-xs font-bold text-espresso/45 transition-colors hover:text-brique tablet:col-span-1 tablet:w-11 tablet:rounded-full"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="tablet:hidden">{d.removeLabel}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code promo */}
              <div className="rounded-card bg-offwhite p-6 shadow-soft" data-testid="cart-promo">
                <p className="flex items-center gap-2 font-title text-lg font-semibold">
                  <Tag className="h-4 w-4 text-caramel" />
                  {d.promo.title}
                </p>
                {promo ? (
                  <p className="mt-3 flex items-center gap-2 text-sm font-bold text-wc-success" data-testid="cart-promo-active">
                    {d.promo.activeLabel} : {promo.code} (-10 %)
                    <button
                      type="button"
                      onClick={() => setPromo(null)}
                      aria-label="Retirer le code promo"
                      className="flex h-8 w-8 items-center justify-center rounded-full text-espresso/40 hover:text-brique"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </p>
                ) : (
                  <form onSubmit={applyCode} className="mt-3 flex flex-wrap gap-2">
                    <label htmlFor="cart-promo-input" className="sr-only">
                      {d.promo.title}
                    </label>
                    <input
                      id="cart-promo-input"
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder={d.promo.placeholder}
                      data-testid="cart-promo-input"
                      className="mp-field h-12 flex-1 rounded-full"
                    />
                    <button
                      type="submit"
                      data-testid="cart-promo-apply"
                      className="h-12 rounded-full border-2 border-espresso/15 px-6 text-sm font-extrabold transition-colors hover:border-cookie hover:text-cookie"
                    >
                      {d.promo.apply}
                    </button>
                    {codeError && (
                      <p className="w-full text-sm font-semibold text-brique" role="alert">
                        {codeError}
                      </p>
                    )}
                  </form>
                )}
              </div>

              {/* Suggestions */}
              <div className="pt-2">
                <SectionHeading title={d.suggestions} />
                <div className="mt-6 grid grid-cols-4 gap-5 tablet:grid-cols-2 mobile:grid-cols-2">
                  {products
                    .filter((p) => !items.some((it) => it.slug === p.slug) && p.stock_status === "instock")
                    .slice(0, 4)
                    .map((p) => (
                      <ProductCard key={p.id} product={p} compact />
                    ))}
                </div>
              </div>
            </div>

            {/* Totaux */}
            <aside className="h-fit rounded-card bg-offwhite p-6 shadow-card desktop:sticky desktop:top-28" data-testid="cart-totals">
              <h2 className="font-title text-2xl font-semibold">{d.title}</h2>
              <dl className="mt-5 flex flex-col gap-3 text-[15px]">
                <div className="flex justify-between">
                  <dt className="text-espresso/60">{d.totals.subtotal}</dt>
                  <dd className="font-bold">{fmt(subtotal)}</dd>
                </div>
                {promo && (
                  <div className="flex justify-between text-wc-success" data-testid="cart-discount">
                    <dt>
                      {d.totals.discount} · {promo.code}
                    </dt>
                    <dd className="font-bold">-{fmt(discount)}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-espresso/60">{d.totals.shipping} {d.totals.estimated}</dt>
                  <dd className="font-bold" data-testid="cart-shipping">
                    {shipping === 0 ? d.totals.free : fmt(shipping)}
                  </dd>
                </div>
                <div className="mt-2 flex justify-between border-t border-espresso/10 pt-4">
                  <dt className="font-title text-xl font-semibold">{d.totals.total}</dt>
                  <dd className="font-title text-3xl font-semibold text-caramel" data-testid="cart-total">
                    {fmt(afterDiscount + shipping)}
                  </dd>
                </div>
              </dl>
              <p className="mt-2 text-xs text-espresso/50">
                Frais calculés à la commande — livraison offerte dès {fmt(site.freeShippingThreshold)}.
              </p>
              <Link
                to="/commande/"
                data-testid="cart-checkout-cta"
                className="mt-5 flex h-14 items-center justify-center rounded-full bg-cookie text-[15px] font-extrabold text-creme shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
              >
                {d.submit}
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
