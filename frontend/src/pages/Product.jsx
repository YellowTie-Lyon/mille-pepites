import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChefHat, Lock, Truck } from "lucide-react";
import Rating from "../components/Rating";
import QtyStepper from "../components/QtyStepper";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { useStore } from "../context/StoreContext";
import {
  badgeLabels,
  badgesOf,
  categories,
  getProduct,
  isPromo,
  priceOf,
  productPage,
  relatedOf,
} from "../mock/data";
import { fmt } from "../utils";

const REASSURE_ICONS = { ChefHat, Truck, Lock };

export default function Product() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { addItem, notify } = useStore();
  const [activeImg, setActiveImg] = useState(0);
  const [format, setFormat] = useState(product?.variations ? product.variations[1]?.id ?? null : null);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");

  if (!product) {
    return (
      <div className="container-site py-24 text-center">
        <h1 className="font-title text-3xl font-semibold">Ce cookie n'existe pas (encore).</h1>
        <Link to="/boutique/" className="mt-6 inline-flex h-12 items-center rounded-full bg-cookie px-7 text-sm font-extrabold text-creme">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  const badges = badgesOf(product);
  const out = product.stock_status === "outofstock";
  const variation = product.variations?.find((v) => v.id === format);
  const unitPrice = variation ? variation.price : priceOf(product);
  const cat = categories.find((c) => c.slug === product.categories[0]);
  const related = relatedOf(product);

  const handleAdd = () => {
    if (product.type === "grouped") return;
    addItem({
      key: variation ? `${product.slug}-${variation.format}` : product.slug,
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: unitPrice,
      meta: variation ? `Format : box de ${variation.format}` : null,
      notice: `« ${product.name} » ${productPage.addLabel.toLowerCase()}… et c'est déjà presque cuit ! Enfin, ajouté à ton panier.`,
    });
  };

  return (
    <div>
      <section data-section="produit-detail" className="pb-16 pt-10 mobile:pt-6">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: productPage.breadcrumb.home, href: "/" },
              { label: productPage.breadcrumb.shop, href: "/boutique/" },
              ...(cat ? [{ label: cat.name, href: `/categorie-produit/${cat.slug}/` }] : []),
              { label: product.name, href: `/produit/${product.slug}/` },
            ]}
          />

          <div className="mt-8 grid gap-12 tablet:gap-8 mobile:grid-cols-1 desktop:grid-cols-2">
            {/* Galerie */}
            <div data-testid="product-gallery">
              <div className="bite-tr-lg overflow-hidden rounded-blob bg-sable shadow-card">
                <img
                  src={product.gallery[activeImg]}
                  alt={`${product.name} — visuel ${activeImg + 1}`}
                  className="aspect-square w-full object-cover"
                  data-testid="product-gallery-main"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    aria-label={`Voir le visuel ${i + 1}`}
                    data-testid={`product-thumb-${i}`}
                    className={`overflow-hidden rounded-2xl border-2 transition-all ${
                      activeImg === i ? "border-cookie" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={g} alt="" className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Infos */}
            <div className="flex flex-col gap-4">
              {badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {badges.map((b) => (
                    <span
                      key={b}
                      className={`rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${
                        b === "promo"
                          ? "bg-brique text-creme"
                          : b === "rupture"
                            ? "bg-espresso text-creme"
                            : "bg-sable text-espresso"
                      }`}
                      data-testid={`product-badge-${b}`}
                    >
                      {badgeLabels[b]}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="font-title text-4xl font-semibold leading-tight tracking-tight mobile:text-3xl" data-testid="product-title">
                {product.name}
              </h1>

              <span className="flex items-center gap-3">
                <Rating rating={product.rating} size={18} testid="product-rating" />
                <button
                  type="button"
                  onClick={() => setTab("reviews")}
                  className="text-sm font-bold text-cookie underline decoration-caramel decoration-2 underline-offset-4"
                  data-testid="product-reviews-anchor"
                >
                  {product.review_count} {productPage.tabs.reviews.toLowerCase()}
                </button>
              </span>

              <p className="flex items-center gap-2 text-sm font-bold" data-testid="product-stock">
                <span className={`h-2 w-2 rounded-full ${out ? "bg-brique" : "bg-wc-success"}`} />
                <span className={out ? "text-brique" : "text-espresso/70"}>
                  {out ? productPage.outOfStock : productPage.inStock}
                </span>
              </p>

              <p className="text-[17px] leading-relaxed text-espresso/75">
                {product.short_description}
              </p>

              <p className="flex items-baseline gap-3" data-testid="product-price">
                {variation ? (
                  <>
                    <span className="text-xs font-bold uppercase tracking-wide text-espresso/50">
                      dès
                    </span>
                    <span className="font-title text-4xl font-semibold text-caramel">
                      {fmt(unitPrice)}
                    </span>
                  </>
                ) : isPromo(product) ? (
                  <>
                    <s className="text-xl text-espresso/40">{fmt(product.regular_price)}</s>
                    <span className="font-title text-4xl font-semibold text-caramel">
                      {fmt(product.sale_price)}
                    </span>
                  </>
                ) : (
                  <span className="font-title text-4xl font-semibold text-caramel">
                    {fmt(product.regular_price)}
                  </span>
                )}
              </p>

              {product.variations && (
                <div>
                  <p className="mp-label">{productPage.formatLabel}</p>
                  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={productPage.formatLabel}>
                    {product.variations.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        role="radio"
                        aria-checked={format === v.id}
                        onClick={() => setFormat(v.id)}
                        data-testid={`product-format-${v.format}`}
                        className={`flex h-12 items-center gap-2 rounded-full border-2 px-5 text-sm font-extrabold transition-all ${
                          format === v.id
                            ? "border-cookie bg-cookie text-creme"
                            : "border-espresso/15 bg-offwhite text-espresso hover:border-cookie"
                        }`}
                      >
                        Box de {v.format}
                        <span className={format === v.id ? "text-creme/80" : "text-caramel"}>
                          {fmt(v.price)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.type === "grouped" ? (
                <Link
                  to="/composer-ma-box/"
                  data-testid="product-compose-cta"
                  className="mt-2 flex h-14 w-fit items-center rounded-full bg-cookie px-9 text-[15px] font-extrabold text-creme shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
                >
                  {productPage.composeLabel}
                </Link>
              ) : (
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <QtyStepper value={qty} onChange={setQty} label={productPage.quantityLabel} />
                  <button
                    type="button"
                    onClick={handleAdd}
                    disabled={out || (product.variations && !variation)}
                    data-testid="product-add-to-cart"
                    className="flex h-14 flex-1 items-center justify-center rounded-full bg-cookie px-8 text-[15px] font-extrabold text-creme shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                  >
                    {out
                      ? productPage.outOfStock
                      : product.variations && !variation
                        ? productPage.chooseLabel
                        : productPage.addLabel}
                  </button>
                </div>
              )}

              <ul className="mt-4 grid grid-cols-3 gap-3 border-t border-espresso/10 pt-6" data-testid="product-reassurance">
                {productPage.reassurance.map((r) => {
                  const Icon = REASSURE_ICONS[r.icon];
                  return (
                    <li key={r.title} className="flex flex-col gap-1.5 text-center">
                      <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-sable text-cookie">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <p className="text-[13px] font-extrabold">{r.title}</p>
                      <p className="text-[11px] leading-snug text-espresso/55">{r.text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Onglets */}
      <section data-section="produit-onglets" className="bg-sable/60 py-14 mobile:py-10">
        <div className="container-site max-w-4xl">
          <div role="tablist" aria-label="Informations produit" className="flex flex-wrap gap-2 border-b border-espresso/10 pb-px" data-testid="product-tabs">
            {Object.entries(productPage.tabs).map(([key, label]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                data-testid={`product-tab-${key}`}
                className={`-mb-px flex h-11 items-center rounded-t-2xl px-6 text-sm font-extrabold transition-all ${
                  tab === key
                    ? "border-x border-t border-espresso/10 bg-offwhite text-espresso"
                    : "text-espresso/55 hover:text-espresso"
                }`}
              >
                {label}
                {key === "reviews" && ` (${product.review_count})`}
              </button>
            ))}
          </div>

          <div className="rounded-b-card rounded-tl-none bg-offwhite p-8 shadow-soft mobile:p-5" data-testid="product-tab-panel">
            {tab === "description" && (
              <div className="flex flex-col gap-4 leading-relaxed text-espresso/80">
                {product.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            {tab === "ingredients" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-title text-xl font-semibold">{productPage.ingredientsTitle}</h3>
                  <p className="mt-2 leading-relaxed text-espresso/80">{product.ingredients}</p>
                </div>
                <div className="grid gap-6 tablet:grid-cols-1 mobile:grid-cols-1 desktop:grid-cols-2">
                  <div className="rounded-card bg-sable/60 p-5">
                    <h3 className="font-title text-lg font-semibold">{productPage.allergenesTitle}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-espresso/80">
                      {product.attributes.allergenes}
                    </p>
                  </div>
                  <div className="rounded-card bg-sable/60 p-5">
                    <h3 className="font-title text-lg font-semibold">{productPage.poidsTitle}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-espresso/80">
                      {product.attributes.poids}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {tab === "reviews" && (
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4 rounded-card bg-sable/60 p-5">
                  <p className="font-title text-5xl font-semibold text-caramel" data-testid="product-reviews-average">
                    {String(product.rating).replace(".", ",")}
                  </p>
                  <div>
                    <Rating rating={product.rating} size={18} />
                    <p className="mt-1 text-sm font-bold text-espresso/60">
                      {product.review_count} {productPage.reviewsSummary}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-col gap-4">
                  {product.reviews.map((r, i) => (
                    <li key={i} className="rounded-card border border-espresso/10 p-5" data-testid="product-review-item">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <Rating rating={r.rating} size={14} />
                        <span className="text-xs text-espresso/50">{r.date}</span>
                      </div>
                      <p className="mt-2 leading-relaxed text-espresso/80">« {r.text} »</p>
                      <p className="mt-2 text-sm font-extrabold">{r.author}</p>
                    </li>
                  ))}
                </ul>
                {product.reviews.length === 0 && (
                  <p className="text-espresso/60">{productPage.noReviews}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Produits associés */}
      <section data-section="produit-associes" className="py-16 mobile:py-10">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow={productPage.relatedSub}
              title={productPage.relatedTitle}
            />
          </Reveal>
          <div className="mt-8 grid grid-cols-4 gap-6 tablet:grid-cols-2 mobile:grid-cols-2">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
