import { Link } from "react-router-dom";
import { badgeLabels, badgesOf, priceOf } from "../mock/data";
import { fmt } from "../utils";
import { useStore } from "../context/StoreContext";
import Rating from "./Rating";
import { BiteCorner } from "./Bites";

const BADGE_STYLES = {
  promo: "bg-brique text-creme",
  rupture: "bg-espresso text-creme",
  edition: "bg-cookie text-creme",
  nouveau: "bg-caramel text-espresso",
  best: "bg-offwhite text-espresso shadow-soft",
};

export default function ProductCard({ product, compact = false }) {
  const { addItem } = useStore();
  const badges = badgesOf(product);
  const out = product.stock_status === "outofstock";
  const promo = !!product.sale_price;
  const variable = product.type === "variable";
  const grouped = product.type === "grouped";
  const price = priceOf(product);
  const catSlug = product.categories?.[0];
  const catNames = {
    cookies: "Cookie",
    box: "Box",
    "editions-limitees": "Édition limitée",
    cadeaux: "Cadeau",
  };

  const handleAdd = () => {
    addItem({
      key: product.slug,
      slug: product.slug,
      name: product.name,
      image: product.image,
      price,
      meta: null,
      notice: `« ${product.name} » a été ajouté à ton panier.`,
    });
  };

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-card bg-offwhite shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      data-testid={`product-card-${product.slug}`}
    >
      <div className="relative aspect-square overflow-hidden bg-sable">
        <Link
          to={`/produit/${product.slug}/`}
          className="absolute inset-0 z-10"
          aria-label={product.name}
          tabIndex={-1}
        />
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <BiteCorner bg="#FFFBF5" />
        {badges.length > 0 && (
          <div className="absolute left-3 top-3 z-20 flex flex-col items-start gap-1.5">
            {badges.map((b) => (
              <span
                key={b}
                className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${BADGE_STYLES[b]}`}
                data-testid={`product-badge-${b}`}
              >
                {badgeLabels[b]}
              </span>
            ))}
          </div>
        )}
        {out && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-creme/60" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4 mobile:p-3.5">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-caramel">
          {catNames[catSlug] || ""}
        </p>
        <h3 className="font-title text-lg font-semibold leading-tight">
          <Link
            to={`/produit/${product.slug}/`}
            className="transition-colors hover:text-cookie"
            data-testid={`product-card-link-${product.slug}`}
          >
            {product.name}
          </Link>
        </h3>
        {!compact && (
          <p className="line-clamp-1 text-[13px] text-espresso/60">
            {product.short_description}
          </p>
        )}
        <Rating rating={product.rating} count={product.review_count} size={13} />

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="flex flex-col leading-tight">
            {grouped ? (
              <>
                <span className="text-[10px] font-bold uppercase tracking-wide text-espresso/50">
                  dès
                </span>
                <span className="text-lg font-extrabold text-caramel" data-testid="product-price">
                  {fmt(price)}
                </span>
              </>
            ) : promo ? (
              <span className="flex items-baseline gap-1.5">
                <s className="text-sm text-espresso/40">{fmt(product.regular_price)}</s>
                <span className="text-lg font-extrabold text-caramel" data-testid="product-price">
                  {fmt(price)}
                </span>
              </span>
            ) : (
              <span className="text-lg font-extrabold text-caramel" data-testid="product-price">
                {fmt(price)}
              </span>
            )}
          </div>

          {out ? (
            <span
              className="flex h-11 items-center justify-center rounded-full bg-espresso/10 px-4 text-xs font-extrabold uppercase tracking-wide text-espresso/50"
              data-testid={`product-card-outofstock-${product.slug}`}
            >
              Rupture
            </span>
          ) : variable ? (
            <Link
              to={`/produit/${product.slug}/`}
              data-testid={`product-card-choose-${product.slug}`}
              className="flex h-11 items-center justify-center rounded-full border-2 border-espresso/12 px-4 text-xs font-extrabold text-espresso transition-all duration-300 hover:border-cookie hover:text-cookie"
            >
              Choisir le format
            </Link>
          ) : grouped ? (
            <Link
              to="/composer-ma-box/"
              data-testid={`product-card-compose-${product.slug}`}
              className="flex h-11 items-center justify-center rounded-full bg-cookie px-4 text-xs font-extrabold text-creme transition-all duration-300 hover:bg-espresso"
            >
              Composer
            </Link>
          ) : (
            <button
              type="button"
              onClick={handleAdd}
              data-testid={`product-card-add-${product.slug}`}
              className="flex h-11 items-center justify-center rounded-full bg-cookie px-5 text-xs font-extrabold uppercase tracking-wide text-creme transition-all duration-300 hover:bg-espresso active:scale-95"
            >
              Ajouter
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
