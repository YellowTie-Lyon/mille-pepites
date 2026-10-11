import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Pepite } from "../components/Bites";
import { useStore } from "../context/StoreContext";
import { composeBoxPage, getProduct, products, site } from "../mock/data";
import { fmt } from "../utils";

export default function ComposeBox() {
  const d = composeBoxPage;
  const { addItem, setDrawerOpen } = useStore();
  const [size, setSize] = useState(6);
  const [selection, setSelection] = useState({});

  const selectable = useMemo(
    () =>
      products.filter(
        (p) =>
          p.type === "simple" &&
          p.stock_status === "instock" &&
          p.categories.includes("cookies") &&
          !p.categories.includes("editions-limitees")
      ),
    []
  );

  const count = Object.values(selection).reduce((a, b) => a + b, 0);
  const format = d.formats.find((f) => f.size === size);
  const complete = count === size;
  const remaining = size - count;

  const change = (slug, delta) => {
    setSelection((prev) => {
      const next = { ...prev };
      const q = (next[slug] || 0) + delta;
      if (q <= 0) delete next[slug];
      else next[slug] = q;
      return next;
    });
  };

  const addBox = () => {
    if (!complete) return;
    const lines = Object.entries(selection)
      .map(([slug, q]) => `${q} × ${getProduct(slug).name}`)
      .join(", ");
    addItem({
      key: `compose-box-${size}`,
      slug: "compose-ta-box",
      name: d.title,
      image: getProduct("compose-ta-box").image,
      price: format.price,
      meta: `Box de ${size} — ${lines}`,
      notice: site.notices.boxAdded,
    });
    setSelection({});
  };

  return (
    <div className="pb-24">
      <section data-section="compose-box-header" className="pb-8 pt-12 mobile:pt-8">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Boutique", href: "/boutique/" },
              { label: d.title, href: "/composer-ma-box/" },
            ]}
          />
          <h1 className="mt-4 font-title text-4xl font-semibold tracking-tight mobile:text-3xl">
            {d.title}
          </h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-espresso/70">{d.intro}</p>
        </div>
      </section>

      <section data-section="compose-box" className="container-site grid gap-10 pb-16 mobile:grid-cols-1 desktop:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-10">
          {/* Format */}
          <div>
            <h2 className="font-title text-2xl font-semibold">{d.step1}</h2>
            <div className="mt-5 grid grid-cols-3 gap-4 tablet:grid-cols-3 mobile:grid-cols-1">
              {d.formats.map((f) => (
                <button
                  key={f.size}
                  type="button"
                  onClick={() => setSize(f.size)}
                  aria-pressed={size === f.size}
                  data-testid={`box-format-${f.size}`}
                  className={`flex flex-col items-center gap-1 rounded-card border-2 p-6 text-center transition-all duration-300 ${
                    size === f.size
                      ? "border-cookie bg-offwhite shadow-card"
                      : "border-espresso/12 bg-offwhite/60 hover:border-caramel"
                  }`}
                >
                  <span className="font-title text-3xl font-semibold">{f.label}</span>
                  <span className="text-xl font-extrabold text-caramel">{fmt(f.price)}</span>
                  <span className="text-xs font-bold uppercase tracking-wide text-espresso/50">
                    {f.note}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sélection */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-title text-2xl font-semibold">{d.step2}</h2>
              <p
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold transition-colors ${
                  complete ? "bg-wc-success/10 text-wc-success" : "bg-sable text-espresso/70"
                }`}
                data-testid="box-counter"
                aria-live="polite"
              >
                <Pepite className={`h-3 w-3 ${complete ? "text-wc-success" : "text-caramel"}`} />
                {d.counter(count, size)}
              </p>
            </div>
            <p className="mt-2 text-sm text-espresso/60">{d.pickHint}</p>

            <div className="mt-6 grid grid-cols-3 gap-5 tablet:grid-cols-2 mobile:grid-cols-2">
              {selectable.map((p) => {
                const q = selection[p.slug] || 0;
                return (
                  <div
                    key={p.slug}
                    className={`group relative overflow-hidden rounded-card border-2 bg-offwhite transition-all duration-300 ${
                      q > 0 ? "border-cookie shadow-card" : "border-transparent shadow-soft"
                    }`}
                  >
                    <div className="relative aspect-square overflow-hidden bg-sable">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className={`h-full w-full object-cover transition-transform duration-500 ${q > 0 ? "" : "group-hover:scale-105"}`}
                      />
                      {q > 0 && (
                        <span
                          className="absolute right-2 top-2 flex h-8 min-w-8 items-center justify-center rounded-full bg-cookie px-2 text-sm font-extrabold text-creme"
                          data-testid={`box-selection-count-${p.slug}`}
                        >
                          {q}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-2 p-3">
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-extrabold leading-tight">{p.name}</p>
                        <p className="text-xs text-espresso/55">{fmt(p.regular_price)}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1">
                        {q > 0 && (
                          <button
                            type="button"
                            onClick={() => change(p.slug, -1)}
                            aria-label={`Retirer un ${p.name}`}
                            data-testid={`box-remove-${p.slug}`}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-espresso/15 transition-colors hover:bg-sable"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => change(p.slug, +1)}
                          disabled={count >= size}
                          aria-label={`Ajouter un ${p.name}`}
                          data-testid={`box-add-${p.slug}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-cookie text-creme transition-all hover:bg-espresso disabled:opacity-30"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Récapitulatif collant (bureau) */}
        <aside className="hidden self-start rounded-card bg-offwhite p-6 shadow-card desktop:sticky desktop:top-28 desktop:block" data-testid="box-recap">
          <RecapContent
            d={d}
            format={format}
            selection={selection}
            count={count}
            complete={complete}
            addBox={addBox}
          />
        </aside>

        {/* Barre collante (mobile) */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-espresso/10 bg-creme px-4 py-3 shadow-lift tablet:block desktop:hidden" data-testid="box-recap-mobile">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-espresso/60">{d.counter(count, size)}</p>
              <p className="font-title text-xl font-semibold">{fmt(format.price)}</p>
            </div>
            <button
              type="button"
              onClick={addBox}
              disabled={!complete}
              data-testid="box-add-mobile"
              className="flex h-12 items-center rounded-full bg-cookie px-6 text-sm font-extrabold text-creme transition-all hover:bg-espresso disabled:opacity-40"
            >
              {d.addLabel}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function RecapContent({ d, format, selection, count, complete, addBox }) {
  const entries = Object.entries(selection);
  return (
    <>
      <h2 className="font-title text-2xl font-semibold">{d.recapTitle}</h2>
      <p className="mt-1 text-sm font-bold text-cookie">
        {format.label} · {fmt(format.price)}
      </p>
      {entries.length === 0 ? (
        <p className="mt-4 rounded-2xl bg-sable/60 p-4 text-sm leading-relaxed text-espresso/60">
          {d.recapEmpty}
        </p>
      ) : (
        <ul className="mt-4 flex flex-col gap-2" data-testid="box-recap-list">
          {entries.map(([slug, q]) => (
            <li key={slug} className="flex items-center justify-between gap-2 text-sm">
              <span className="text-espresso/75">
                <strong className="text-espresso">{q} ×</strong> {getProduct(slug).name}
              </span>
              <Pepite className="h-2.5 w-2.5 shrink-0 text-caramel" />
            </li>
          ))}
        </ul>
      )}
      <p
        className={`mt-4 text-[13px] font-bold ${complete ? "text-wc-success" : "text-espresso/55"}`}
        data-testid="box-recap-status"
      >
        {complete ? d.complete : d.incomplete(Math.max(0, format.size - count))}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-espresso/10 pt-4">
        <span className="font-bold text-espresso/60">{d.totalLabel}</span>
        <span className="font-title text-3xl font-semibold text-caramel" data-testid="box-recap-total">
          {fmt(format.price)}
        </span>
      </div>
      <button
        type="button"
        onClick={addBox}
        disabled={!complete}
        data-testid="box-add-desktop"
        className="mt-4 flex h-14 w-full items-center justify-center rounded-full bg-cookie text-[15px] font-extrabold text-creme shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso disabled:opacity-40 disabled:hover:translate-y-0"
      >
        {d.addLabel}
      </button>
    </>
  );
}
