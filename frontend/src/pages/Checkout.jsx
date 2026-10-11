import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreditCard, Gift, Landmark, Lock, Wallet } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { checkoutPage, site } from "../mock/data";
import { fmt } from "../utils";

const PAY_ICONS = { CreditCard, PayPal: Wallet, Wallet, Landmark };

export default function Checkout() {
  const d = checkoutPage;
  const navigate = useNavigate();
  const { items, subtotal, discount, promo, clearCart, setPromo, setLastOrder, notify } = useStore();
  const [method, setMethod] = useState("delivery");
  const [payment, setPayment] = useState("card");
  const [isGift, setIsGift] = useState(false);

  if (items.length === 0) {
    return (
      <div data-section="commande-vide">
        <div className="container-site flex flex-col items-center gap-4 py-24 text-center mobile:py-16">
          <h1 className="font-title text-3xl font-semibold">{d.title}</h1>
          <p className="text-espresso/65">{d.empty.text}</p>
          <Link
            to="/boutique/"
            data-testid="checkout-empty-cta"
            className="mt-2 flex h-12 items-center rounded-full bg-cookie px-8 text-sm font-extrabold text-creme transition-colors hover:bg-espresso"
          >
            {d.empty.cta}
          </Link>
        </div>
      </div>
    );
  }

  const afterDiscount = subtotal - discount;
  const chosen = d.methods.find((m) => m.id === method);
  const shipping =
    method === "pickup" ? 0 : afterDiscount >= site.freeShippingThreshold ? 0 : chosen.price;
  const total = afterDiscount + shipping;

  const placeOrder = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const number = `MP-${Math.floor(1040 + Math.random() * 60)}`;
    setLastOrder({
      number,
      email,
      method: chosen.label,
      payment: d.payments.find((p) => p.id === payment)?.label,
      gift: isGift ? new FormData(e.currentTarget).get("gift_note") : null,
      items: items.map((it) => ({ name: it.name, meta: it.meta, qty: it.qty, price: it.price })),
      subtotal,
      discount,
      shipping,
      total,
    });
    clearCart();
    setPromo(null);
    notify("success", `Commande ${number} confirmée — merci !`);
    navigate("/confirmation-de-commande/");
  };

  return (
    <div className="pb-20">
      <section data-section="commande" className="pb-10 pt-12 mobile:pt-8">
        <div className="container-site">
          <h1 className="font-title text-4xl font-semibold tracking-tight mobile:text-3xl">{d.title}</h1>
          <form onSubmit={placeOrder} className="mt-8 grid items-start gap-10 mobile:grid-cols-1 desktop:grid-cols-[1fr_380px]" data-testid="checkout-form">
            <div className="flex flex-col gap-8">
              {/* Coordonnées */}
              <fieldset className="rounded-card bg-offwhite p-6 shadow-soft">
                <legend className="px-1 font-title text-2xl font-semibold">{d.sections.contact}</legend>
                <div className="mt-2 grid grid-cols-2 gap-4 mobile:grid-cols-1">
                  <Field id="firstName" label={d.fields.firstName} required half />
                  <Field id="lastName" label={d.fields.lastName} required half />
                  <Field id="email" label={d.fields.email} type="email" required />
                  <Field id="phone" label={d.fields.phone} type="tel" />
                </div>
              </fieldset>

              {/* Adresse */}
              {method === "delivery" && (
                <fieldset className="rounded-card bg-offwhite p-6 shadow-soft">
                  <legend className="px-1 font-title text-2xl font-semibold">{d.sections.address}</legend>
                  <div className="mt-2 grid grid-cols-2 gap-4 mobile:grid-cols-1">
                    <Field id="country" label={d.fields.country} type="select" options={d.countries} required half />
                    <Field id="zip" label={d.fields.zip} required half />
                    <Field id="address" label={d.fields.address} required />
                    <Field id="address2" label={d.fields.address2} />
                    <Field id="city" label={d.fields.city} required half />
                  </div>
                </fieldset>
              )}

              {/* Mode de livraison */}
              <fieldset className="rounded-card bg-offwhite p-6 shadow-soft">
                <legend className="px-1 font-title text-2xl font-semibold">{d.sections.method}</legend>
                <div className="mt-2 grid grid-cols-2 gap-3 mobile:grid-cols-1">
                  {d.methods.map((m) => {
                    const free = m.id === "pickup" || subtotal >= site.freeShippingThreshold;
                    return (
                      <label
                        key={m.id}
                        className={`flex cursor-pointer flex-col gap-1 rounded-2xl border-2 p-5 transition-all ${
                          method === m.id ? "border-cookie bg-sable/50" : "border-espresso/12 hover:border-caramel"
                        }`}
                        data-testid={`shipping-${m.id}`}
                      >
                        <span className="flex items-center justify-between gap-2">
                          <span className="flex items-center gap-2 font-extrabold">
                            <input
                              type="radio"
                              name="shipping_method"
                              checked={method === m.id}
                              onChange={() => setMethod(m.id)}
                              className="h-4 w-4 accent-[#7A4A2A]"
                            />
                            {m.label}
                          </span>
                          <span className="font-extrabold text-caramel">
                            {m.id === "pickup" || free ? d.totals.free : fmt(m.price)}
                          </span>
                        </span>
                        <span className="pl-6 text-[13px] leading-snug text-espresso/60">{m.desc}</span>
                        {m.freeNote && m.id === "delivery" && (
                          <span className="pl-6 text-[11px] font-bold text-cookie">{m.freeNote}</span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* Message cadeau */}
              <fieldset className="rounded-card bg-offwhite p-6 shadow-soft">
                <legend className="px-1 flex items-center gap-2 font-title text-2xl font-semibold">
                  <Gift className="h-5 w-5 text-caramel" />
                  {d.sections.gift}
                </legend>
                <label className="mt-2 flex min-h-11 cursor-pointer items-center gap-3 text-[15px] font-semibold">
                  <input
                    type="checkbox"
                    checked={isGift}
                    onChange={(e) => setIsGift(e.target.checked)}
                    className="h-4 w-4 accent-[#7A4A2A]"
                    data-testid="checkout-gift-checkbox"
                  />
                  {d.gift.label}
                </label>
                {isGift && (
                  <div className="mt-3">
                    <label htmlFor="gift_note" className="mp-label">
                      {d.gift.textLabel}
                    </label>
                    <textarea
                      id="gift_note"
                      name="gift_note"
                      rows={3}
                      placeholder={d.gift.placeholder}
                      data-testid="checkout-gift-message"
                      className="mp-field"
                    />
                  </div>
                )}
              </fieldset>

              {/* Paiement */}
              <fieldset className="rounded-card bg-offwhite p-6 shadow-soft">
                <legend className="px-1 flex items-center gap-2 font-title text-2xl font-semibold">
                  <Lock className="h-5 w-5 text-caramel" />
                  {d.sections.payment}
                </legend>
                <div className="mt-2 flex flex-col gap-3">
                  {d.payments.map((p) => {
                    const Icon = PAY_ICONS[p.icon] || CreditCard;
                    return (
                      <label
                        key={p.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border-2 p-5 transition-all ${
                          payment === p.id ? "border-cookie bg-sable/50" : "border-espresso/12 hover:border-caramel"
                        }`}
                        data-testid={`payment-${p.id}`}
                      >
                        <input
                          type="radio"
                          name="payment_method"
                          checked={payment === p.id}
                          onChange={() => setPayment(p.id)}
                          className="h-4 w-4 accent-[#7A4A2A]"
                        />
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sable text-cookie">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <span className="flex flex-col">
                          <span className="font-extrabold">{p.label}</span>
                          <span className="text-[13px] text-espresso/60">{p.desc}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <label className="flex min-h-11 cursor-pointer items-center gap-3 text-sm font-semibold" data-testid="checkout-terms">
                <input type="checkbox" required className="h-4 w-4 accent-[#7A4A2A]" />
                {d.terms.before}
                <Link to={d.terms.href} className="text-cookie underline decoration-2 underline-offset-2">
                  {d.terms.linkLabel}
                </Link>
              </label>
            </div>

            {/* Récapitulatif collant */}
            <aside className="flex h-fit flex-col gap-4 rounded-card bg-offwhite p-6 shadow-card desktop:sticky desktop:top-28" data-testid="checkout-summary">
              <h2 className="font-title text-2xl font-semibold">{d.summaryTitle}</h2>
              <ul className="flex max-h-64 flex-col gap-3 overflow-y-auto pr-1">
                {items.map((it) => (
                  <li key={it.key} className="flex items-center gap-3" data-testid="checkout-summary-item">
                    <img src={it.image} alt="" className="h-12 w-12 rounded-xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">{it.name}</p>
                      <p className="text-xs text-espresso/55">
                        {it.meta ? `${it.meta} · ` : ""}× {it.qty}
                      </p>
                    </div>
                    <span className="text-sm font-extrabold text-caramel">{fmt(it.price * it.qty)}</span>
                  </li>
                ))}
              </ul>
              <dl className="flex flex-col gap-2.5 border-t border-espresso/10 pt-4 text-[15px]">
                <div className="flex justify-between">
                  <dt className="text-espresso/60">{d.totals.subtotal}</dt>
                  <dd className="font-bold">{fmt(subtotal)}</dd>
                </div>
                {promo && (
                  <div className="flex justify-between text-wc-success">
                    <dt>{d.totals.discount} · {promo.code}</dt>
                    <dd className="font-bold">-{fmt(discount)}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-espresso/60">{d.totals.shipping}</dt>
                  <dd className="font-bold">{shipping === 0 ? d.totals.free : fmt(shipping)}</dd>
                </div>
                <div className="mt-1 flex justify-between border-t border-espresso/10 pt-3">
                  <dt className="font-title text-xl font-semibold">{d.totals.total}</dt>
                  <dd className="font-title text-3xl font-semibold text-caramel" data-testid="checkout-total">
                    {fmt(total)}
                  </dd>
                </div>
              </dl>
              <button
                type="submit"
                data-testid="checkout-submit"
                className="mt-2 flex h-14 items-center justify-center rounded-full bg-cookie text-[15px] font-extrabold text-creme shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
              >
                {d.submit}
              </button>
              <p className="flex items-center justify-center gap-1.5 text-xs text-espresso/50">
                <Lock className="h-3.5 w-3.5" />
                Paiement sécurisé · SSL
              </p>
            </aside>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ id, label, type = "text", required = false, options = null, half = false }) {
  return (
    <div className={half ? "mobile:col-span-1" : "col-span-2 mobile:col-span-1"}>
      <label htmlFor={id} className="mp-label">
        {label}
        {required && <span className="text-brique"> *</span>}
      </label>
      {options ? (
        <select id={id} name={id} required={required} data-testid={`checkout-${id}`} className="mp-field">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          data-testid={`checkout-${id}`}
          className="mp-field"
        />
      )}
    </div>
  );
}
