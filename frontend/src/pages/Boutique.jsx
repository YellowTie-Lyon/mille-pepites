import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, SearchX } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";
import Reveal from "../components/Reveal";
import { Pepite } from "../components/Bites";
import {
  categories,
  products,
  shop,
  site,
  toppings,
} from "../mock/data";
import { fmt } from "../utils";

function priceForSort(p) {
  if (p.type === "variable") {
    return Math.min(...p.variations.map((v) => v.price));
  }
  return p.sale_price ?? p.regular_price;
}

export default function Boutique() {
  const { slug: catParam } = useParams();
  const [params, setParams] = useSearchParams();
  const s = (params.get("s") || "").toLowerCase();
  const tag = params.get("tag") || "";
  const cat = catParam || params.get("cat") || "";
  const [sort, setSort] = useState(params.get("sort") || "popularity");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [s, tag, cat]);

  const activeCat = categories.find((c) => c.slug === cat);

  const filtered = useMemo(() => {
    let list = products.filter((p) => (cat ? p.categories.includes(cat) : true));
    if (tag) list = list.filter((p) => p.tags.includes(tag));
    if (s) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(s) ||
          p.short_description.toLowerCase().includes(s)
      );
    }
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => priceForSort(a) - priceForSort(b));
        break;
      case "price-desc":
        list = [...list].sort((a, b) => priceForSort(b) - priceForSort(a));
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "latest":
        list = [...list].sort((a, b) => b.id - a.id);
        break;
      default:
        list = [...list].sort((a, b) => b.review_count - a.review_count);
    }
    return list;
  }, [cat, tag, s, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / shop.perPage));
  const pageItems = filtered.slice(
    (page - 1) * shop.perPage,
    page * shop.perPage
  );

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { preventScrollReset: false });
  };

  const title = activeCat ? activeCat.name : s ? `Recherche : « ${params.get("s")} »` : shop.title;
  const description = activeCat
    ? activeCat.description
    : s
      ? `${filtered.length} résultat(s) pour ta recherche.`
      : shop.description;

  return (
    <div>
      <section data-section="boutique-header" className="pb-10 pt-12 mobile:pt-8">
        <div className="container-site">
          <Breadcrumbs
            items={[{ label: "Accueil", href: "/" }, { label: "Boutique", href: "/boutique/" }, ...(activeCat ? [{ label: activeCat.name, href: `/categorie-produit/${activeCat.slug}/` }] : [])]}
          />
          <h1 className="mt-4 font-title text-4xl font-semibold tracking-tight mobile:text-3xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-espresso/70">
            {description}
          </p>
        </div>
      </section>

      <section data-section="boutique-outils" className="border-y border-espresso/10 bg-offwhite/70">
        <div className="container-site flex flex-col gap-4 py-5 tablet:items-start">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label={shop.filters.categoriesTitle} data-testid="shop-filter-categories">
            <span className="mr-1 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-espresso/50">
              <Pepite className="h-2.5 w-2.5 text-caramel" />
              {shop.filters.categoriesTitle}
            </span>
            <FilterPill active={!cat} onClick={() => { setParam("cat", null); setParam("tag", tag); }} label={shop.filters.allLabel} testid="filter-cat-all" />
            {categories.map((c) => (
              <FilterPill
                key={c.slug}
                active={cat === c.slug}
                onClick={() => setParam("cat", c.slug)}
                label={c.name}
                testid={`filter-cat-${c.slug}`}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label={shop.filters.toppingsTitle} data-testid="shop-filter-toppings">
            <span className="mr-1 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-espresso/50">
              <Pepite className="h-2.5 w-2.5 text-caramel" />
              {shop.filters.toppingsTitle}
            </span>
            {toppings.map((t) => (
              <FilterPill
                key={t.slug}
                active={tag === t.slug}
                onClick={() => setParam("tag", tag === t.slug ? null : t.slug)}
                label={t.name}
                testid={`filter-tag-${t.slug}`}
              />
            ))}
          </div>
          <div className="flex w-full flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-bold text-espresso/60" data-testid="shop-results-count">
              {filtered.length} {shop.filters.count}
            </p>
            <label className="flex items-center gap-2 text-sm font-bold text-espresso/60">
              {shop.sortLabel}
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setParam("sort", e.target.value);
                }}
                data-testid="shop-sort"
                className="h-11 rounded-full border border-espresso/15 bg-offwhite px-4 text-sm font-bold text-espresso focus:border-cookie focus:outline-none"
              >
                {shop.sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section data-section="boutique-grille" className="py-12 mobile:py-8">
        <div className="container-site">
          {pageItems.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center" data-testid="shop-empty">
              <SearchX className="h-12 w-12 text-sable" strokeWidth={1.4} />
              <p className="font-title text-2xl font-semibold">{shop.filters.empty}</p>
              <button
                type="button"
                onClick={() => setParams(new URLSearchParams())}
                data-testid="shop-empty-reset"
                className="flex h-12 items-center rounded-full bg-cookie px-7 text-sm font-extrabold text-creme transition-colors hover:bg-espresso"
              >
                {shop.filters.emptyCta}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6 tablet:grid-cols-2 mobile:grid-cols-1">
              {pageItems.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}

          {pageCount > 1 && (
            <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2" data-testid="shop-pagination">
              <button
                type="button"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                aria-label={shop.pagination.prev}
                className="flex h-11 items-center gap-1 rounded-full border border-espresso/15 px-4 text-sm font-bold transition-colors hover:border-cookie hover:text-cookie disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
                {shop.pagination.prev}
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  aria-label={`Page ${n}`}
                  aria-current={page === n ? "page" : undefined}
                  data-testid={`shop-page-${n}`}
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold transition-all ${
                    page === n
                      ? "bg-cookie text-creme"
                      : "border border-espresso/15 text-espresso hover:border-cookie hover:text-cookie"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage(Math.min(pageCount, page + 1))}
                disabled={page === pageCount}
                aria-label={shop.pagination.next}
                className="flex h-11 items-center gap-1 rounded-full border border-espresso/15 px-4 text-sm font-bold transition-colors hover:border-cookie hover:text-cookie disabled:opacity-30"
              >
                {shop.pagination.next}
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </div>
      </section>
    </div>
  );
}

function FilterPill({ active, onClick, label, testid }) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testid}
      aria-pressed={active}
      className={`flex h-10 items-center rounded-full px-4 text-[13px] font-extrabold transition-all duration-300 ${
        active
          ? "bg-cookie text-creme shadow-soft"
          : "border border-espresso/15 bg-creme text-espresso/75 hover:border-cookie hover:text-cookie"
      }`}
    >
      {label}
    </button>
  );
}
