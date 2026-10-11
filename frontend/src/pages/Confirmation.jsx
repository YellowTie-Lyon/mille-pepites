import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { confirmationPage } from "../mock/data";
import { fmt } from "../utils";

export default function Confirmation() {
  const d = confirmationPage;
  const { lastOrder } = useStore();

  if (!lastOrder) {
    return (
      <div data-section="confirmation-vide">
        <div className="container-site flex flex-col items-center gap-4 py-24 text-center mobile:py-16">
          <h1 className="font-title text-3xl font-semibold">{d.title}</h1>
          <p className="text-espresso/65">{d.fallback}</p>
          <Link
            to="/boutique/"
            data-testid="confirmation-fallback-cta"
            className="mt-2 flex h-12 items-center rounded-full bg-cookie px-8 text-sm font-extrabold text-creme transition-colors hover:bg-espresso"
          >
            {d.ctaShop}
          </Link>
        </div>
      </div>
    );
  }

  const o = lastOrder;
  return (
    <div data-section="confirmation">
      <section className="pb-16 pt-16 mobile:pt-10">
        <div className="container-site max-w-3xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-wc-success/10">
              <CheckCircle2 className="h-10 w-10 text-wc-success" strokeWidth={1.6} />
            </span>
            <h1 className="font-title text-4xl font-semibold tracking-tight mobile:text-3xl">
              {d.title}
            </h1>
            <p className="max-w-md leading-relaxed text-espresso/70">{d.subtitle}</p>
            <p className="rounded-full bg-sable px-5 py-2 text-sm font-extrabold" data-testid="confirmation-order-number">
              {d.orderNumberLabel} : {o.number}
            </p>
            <p className="text-sm font-bold text-cookie" data-testid="confirmation-email">
              {d.emailSent(o.email)}
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-card bg-offwhite shadow-soft" data-testid="confirmation-recap">
            <div className="grid grid-cols-[1fr_80px_110px] gap-3 border-b border-espresso/10 px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-espresso/50">
              {d.tableHead.map((h) => (
                <span key={h} className={h === d.tableHead[2] ? "text-right" : ""}>
                  {h}
                </span>
              ))}
            </div>
            <ul className="divide-y divide-espresso/10">
              {o.items.map((it, i) => (
                <li key={i} className="grid grid-cols-[1fr_80px_110px] items-center gap-3 px-6 py-4">
                  <div>
                    <p className="text-sm font-extrabold">{it.name}</p>
                    {it.meta && <p className="text-xs text-espresso/55">{it.meta}</p>}
                  </div>
                  <span className="text-sm">× {it.qty}</span>
                  <span className="text-right text-sm font-extrabold text-caramel">
                    {fmt(it.price * it.qty)}
                  </span>
                </li>
              ))}
            </ul>
            <dl className="flex flex-col gap-2 border-t border-espresso/10 px-6 py-5 text-[15px]">
              <div className="flex justify-between">
                <dt className="text-espresso/60">{d.totals.subtotal}</dt>
                <dd className="font-bold">{fmt(o.subtotal)}</dd>
              </div>
              {o.discount > 0 && (
                <div className="flex justify-between text-wc-success">
                  <dt>{d.totals.discount}</dt>
                  <dd className="font-bold">-{fmt(o.discount)}</dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-espresso/60">{d.totals.shipping}</dt>
                <dd className="font-bold">{o.shipping === 0 ? d.totals.free : fmt(o.shipping)}</dd>
              </div>
              <div className="mt-1 flex justify-between border-t border-espresso/10 pt-3">
                <dt className="font-title text-xl font-semibold">{d.totals.total}</dt>
                <dd className="font-title text-2xl font-semibold text-caramel" data-testid="confirmation-total">
                  {fmt(o.total)}
                </dd>
              </div>
            </dl>
            <div className="grid grid-cols-2 gap-4 border-t border-espresso/10 px-6 py-5 text-sm mobile:grid-cols-1">
              <p>
                <span className="font-extrabold">{d.methodLabel} : </span>
                {o.method}
              </p>
              <p>
                <span className="font-extrabold">{d.paymentLabel} : </span>
                {o.payment}
              </p>
              {o.gift && (
                <p className="col-span-2 mobile:col-span-1">
                  <span className="font-extrabold">{d.giftLabel} : </span>
                  « {o.gift} »
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/boutique/"
              data-testid="confirmation-cta-shop"
              className="flex h-12 items-center rounded-full bg-cookie px-8 text-sm font-extrabold text-creme transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
            >
              {d.ctaShop}
            </Link>
            <Link
              to="/mon-compte/"
              data-testid="confirmation-cta-account"
              className="flex h-12 items-center rounded-full border-2 border-espresso/15 px-8 text-sm font-extrabold transition-colors hover:border-cookie hover:text-cookie"
            >
              {d.ctaAccount}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
