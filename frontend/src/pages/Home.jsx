import { useId } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChefHat,
  Instagram,
  MapPin,
  MousePointerClick,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import Rating from "../components/Rating";
import Stamp from "../components/Stamp";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import Faq from "../components/Faq";
import NewsletterForm from "../components/NewsletterForm";
import { BiteDivider, Pepite } from "../components/Bites";
import { CookieMark } from "../components/Logo";
import HeroCookie from "../components/HeroCookie";
import { home, getProduct, toppings } from "../mock/data";
import { fmt } from "../utils";

const ICONS = {
  Truck,
  MapPin,
  ShieldCheck,
  ChefHat,
  MousePointerClick,
  PackageCheck,
};

function ItalicLine({ line }) {
  return line.split("*").map((part, j) =>
    part ? (j % 2 ? <em key={j} className="font-light italic">{part}</em> : <span key={j}>{part}</span>) : null
  );
}

export default function Home() {
  const h = home;
  const edition = getProduct(h.edition.slug);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section
        data-section="hero"
        className="relative -mt-[76px] overflow-hidden pb-16 pt-[calc(76px+64px)] mobile:-mt-16 mobile:pb-12 mobile:pt-[calc(64px+40px)]"
      >
        <span
          aria-hidden="true"
          className="text-outline pointer-events-none absolute -top-2 right-4 hidden select-none font-title text-[150px] font-semibold italic leading-none desktop:block"
        >
          faits main
        </span>
        <div className="container-site relative grid items-center gap-12 tablet:gap-8 mobile:grid-cols-1 desktop:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p
              className="animate-popin flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-cookie"
              style={{ animationDelay: "80ms" }}
            >
              <Pepite className="h-3.5 w-3.5 text-caramel" />
              {h.hero.eyebrow}
            </p>
            <h1 className="mt-5 font-title text-[60px] font-semibold leading-[1.02] tracking-tight text-espresso tablet:text-5xl mobile:text-[40px]">
              {h.hero.titleLines.map((line, i) => (
                <span key={i} className="hero-line" style={{ "--d": `${180 + i * 140}ms` }}>
                  <span>
                    <ItalicLine line={line} />
                  </span>
                </span>
              ))}
            </h1>
            <p
              className="animate-popin mt-6 max-w-md text-[16px] leading-relaxed text-espresso/70"
              style={{ animationDelay: "620ms" }}
            >
              {h.hero.subtitle}
            </p>
            <div
              className="animate-popin mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "720ms" }}
            >
              <Link
                to={h.hero.primaryCta.href}
                data-testid="hero-cta-commander"
                className="group flex h-14 items-center gap-2 rounded-full bg-cookie px-9 text-[15px] font-extrabold text-creme shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
              >
                {h.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to={h.hero.secondaryCta.href}
                data-testid="hero-cta-box"
                className="flex h-14 items-center rounded-full border-2 border-espresso/15 bg-offwhite/60 px-8 text-[15px] font-extrabold text-espresso transition-all duration-300 hover:border-cookie hover:text-cookie"
              >
                {h.hero.secondaryCta.label}
              </Link>
            </div>
            <div
              className="animate-popin mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
              style={{ animationDelay: "820ms" }}
            >
              <span className="flex items-center gap-2" data-testid="hero-rating">
                <Rating rating={h.hero.rating.value} size={17} />
                <span className="text-sm font-bold text-espresso">
                  {String(h.hero.rating.value).replace(".", ",")}/5
                </span>
                <span className="text-sm text-espresso/55">
                  · {h.hero.rating.count.toLocaleString("fr-FR")} {h.hero.rating.label}
                </span>
              </span>
            </div>
            <ul className="animate-popin mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-espresso/10 pt-5" style={{ animationDelay: "900ms" }}>
              {h.hero.reassurance.map((r) => {
                const Icon = ICONS[r.icon];
                return (
                  <li key={r.label} className="flex items-center gap-2 text-[13px] font-bold text-espresso/70">
                    <Icon className="h-4 w-4 text-cookie" strokeWidth={1.8} />
                    {r.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative mobile:mt-2">
            <div aria-hidden="true" className="absolute -right-6 -top-10 h-64 w-64 rounded-full bg-sable" />
            <div aria-hidden="true" className="absolute -bottom-8 -left-10 h-40 w-40 rounded-full bg-sable/70" />
            <HeroCookie />
            <span className="absolute -bottom-10 -left-8 z-10 flex h-32 w-32 items-center justify-center rounded-full bg-offwhite shadow-card mobile:-bottom-8 mobile:-left-4 mobile:h-24 mobile:w-24">
              <RotatingStamp />
              <CookieMark className="relative h-10 w-10 mobile:h-7 mobile:w-7" />
            </span>
            <span className="absolute -bottom-4 right-2 z-10 h-28 w-28 overflow-hidden rounded-full border-8 border-offwhite shadow-card mobile:-bottom-2 mobile:h-20 mobile:w-20 mobile:border-4">
              <img
                src={h.hero.image}
                alt={h.hero.imageAlt}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="absolute -left-4 top-10 rounded-full bg-creme p-1 shadow-soft mobile:-left-2">
              <Stamp text={h.hero.stamps.top} />
            </span>
            <span className="absolute -right-3 bottom-14 rotate-6 rounded-full bg-creme p-1 shadow-soft mobile:-right-1">
              <Stamp text={h.hero.stamps.bottom} variant="light" />
            </span>
            <Pepite className="animate-float absolute right-8 top-6 h-5 w-5 text-caramel" />
            <Pepite className="animate-float absolute bottom-6 left-8 h-4 w-4 text-cookie" style={{ animationDelay: "1.2s" }} />
          </div>
        </div>
      </section>

      {/* ================= BANDEAU DÉFILANT ================= */}
      <section data-section="arguments-marquee" aria-label="Nos engagements">
        <Marquee
          items={h.marquee}
          className="bg-espresso py-4 text-creme/90"
        />
        <BiteDivider color="#E8D7BF" />
      </section>

      {/* ================= ÉDITION DU MOIS ================= */}
      <section data-section="edition-du-mois" className="bg-sable py-20 mobile:py-14">
        <div className="container-site grid items-center gap-12 mobile:grid-cols-1 desktop:grid-cols-2">
          <Reveal className="relative order-2 desktop:order-1">
            <div className="bite-tr-lg overflow-hidden rounded-blob shadow-card">
              <img
                src={edition.image}
                alt={edition.name}
                loading="lazy"
                className="aspect-[16/11] w-full object-cover"
              />
            </div>
            <span className="absolute -top-6 right-8 rounded-full bg-creme p-1 shadow-soft">
              <Stamp text={h.edition.stamp} />
            </span>
            <Pepite className="animate-float absolute -left-4 bottom-8 h-5 w-5 text-cookie" />
          </Reveal>
          <Reveal className="order-1 desktop:order-2" delay={120}>
            <SectionHeading eyebrow={h.edition.eyebrow} title={h.edition.title} />
            <p className="mt-4 max-w-lg leading-relaxed text-espresso/70">
              {h.edition.text}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-bold text-cookie">
              <Pepite className="h-3 w-3 text-brique" />
              {h.edition.priceNote}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <p className="font-title text-4xl font-semibold text-caramel">
                {fmt(edition.sale_price ?? edition.regular_price)}
              </p>
              <Link
                to={`/produit/${edition.slug}/`}
                data-testid="edition-cta"
                className="flex h-12 items-center rounded-full bg-cookie px-8 text-sm font-extrabold text-creme shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
              >
                {h.edition.cta}
              </Link>
              <Link
                to={`/produit/${edition.slug}/`}
                className="text-sm font-extrabold text-espresso underline decoration-caramel decoration-2 underline-offset-4 transition-colors hover:text-cookie"
              >
                {h.edition.link}
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="container-site mt-16">
          <BiteDivider color="#F6EEE3" flip />
        </div>
      </section>

      {/* ================= BEST-SELLERS ================= */}
      <section data-section="best-sellers" className="py-20 mobile:py-14">
        <div className="container-site">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={h.bestSellers.eyebrow}
              title={h.bestSellers.title}
              sub={h.bestSellers.sub}
            />
            <Link
              to={h.bestSellers.cta.href}
              data-testid="bestsellers-cta"
              className="group flex h-12 items-center gap-2 rounded-full border-2 border-espresso/15 px-6 text-sm font-extrabold transition-all hover:border-cookie hover:text-cookie"
            >
              {h.bestSellers.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="mt-10 grid grid-cols-4 gap-6 tablet:grid-cols-2 mobile:grid-cols-2">
            {h.bestSellers.slugs.map((slug, i) => (
              <Reveal key={slug} delay={i * 90}>
                <ProductCard product={getProduct(slug)} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NOS TOPPINGS ================= */}
      <section data-section="nos-toppings" className="pb-20 mobile:pb-14">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow={h.toppings.eyebrow}
              title={h.toppings.title}
              sub={h.toppings.sub}
              align="center"
            />
          </Reveal>
          <div
            className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
            data-testid="toppings-strip"
          >
            {toppingsGrid(h)}
          </div>
        </div>
      </section>

      {/* ================= FORMULES & BOX ================= */}
      <section data-section="formules-box" className="bg-sable py-20 mobile:py-14">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow={h.boxes.eyebrow}
              title={h.boxes.title}
              sub={h.boxes.sub}
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-4 gap-5 tablet:grid-cols-2 mobile:grid-cols-1">
            {h.boxes.items.map((box, i) => (
              <Reveal key={box.name} delay={i * 80}>
                <Link
                  to={box.href}
                  data-testid={`box-card-${i}`}
                  className="group flex h-full flex-col gap-2 rounded-card bg-offwhite p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  {box.tag && (
                    <span className="mb-1 w-fit rounded-full bg-brique px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-creme">
                      {box.tag}
                    </span>
                  )}
                  <p className="font-title text-2xl font-semibold">{box.name}</p>
                  <p className="text-lg font-extrabold text-caramel">{box.price}</p>
                  <p className="text-sm leading-relaxed text-espresso/65">{box.text}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-3 text-sm font-extrabold text-cookie">
                    Voir
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8" delay={120}>
            <div className="grid items-center gap-8 overflow-hidden rounded-card bg-espresso p-6 pr-10 text-creme tablet:grid-cols-1 mobile:grid-cols-1 desktop:grid-cols-[0.9fr_1.1fr]">
              <div className="bite-tr-lg overflow-hidden rounded-blob">
                <img
                  src={h.boxes.metal.image}
                  alt={h.boxes.metal.imageAlt}
                  loading="lazy"
                  className="aspect-[16/9] h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 py-4">
                <Stamp text={h.boxes.metal.stamp} variant="cream" size="sm" />
                <p className="font-title text-2xl font-semibold">{h.boxes.metal.name}</p>
                <p className="text-lg font-extrabold text-caramel">{h.boxes.metal.price}</p>
                <p className="max-w-md text-sm leading-relaxed text-creme/70">
                  {h.boxes.metal.text}
                </p>
                <Link
                  to={h.boxes.metal.href}
                  data-testid="metal-box-cta"
                  className="mt-2 flex h-12 w-fit items-center rounded-full bg-creme px-7 text-sm font-extrabold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel"
                >
                  Découvrir
                </Link>
              </div>
            </div>
          </Reveal>
          <BiteDivider color="#F6EEE3" />
        </div>
      </section>

      {/* ================= COMMENT ÇA MARCHE ================= */}
      <section data-section="comment-ca-marche" className="py-20 mobile:py-14">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow={h.steps.eyebrow}
              title={h.steps.title}
              align="center"
            />
          </Reveal>
          <ol className="mt-12 grid grid-cols-3 gap-8 tablet:grid-cols-1 mobile:grid-cols-1">
            {h.steps.items.map((step, i) => {
              const Icon = ICONS[step.icon];
              return (
                <Reveal as="li" key={step.n} delay={i * 120} className="relative flex flex-col items-center gap-3 text-center">
                  <span className="font-title text-6xl font-semibold text-caramel/30" aria-hidden="true">
                    {step.n}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sable text-cookie">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-title text-xl font-semibold">{step.title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-espresso/65">{step.text}</p>
                  {i < 2 && (
                    <span aria-hidden="true" className="absolute right-[-14%] top-16 hidden border-t-2 border-dashed border-espresso/15 desktop:block" style={{ width: "28%" }} />
                  )}
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ================= SAVOIR-FAIRE (section sombre) ================= */}
      <section data-section="savoir-faire" className="bg-espresso py-20 text-creme mobile:py-14">
        <div className="container-site grid items-center gap-12 mobile:grid-cols-1 desktop:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow={h.craft.eyebrow}
              title={h.craft.title}
              light
            />
            {h.craft.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 max-w-lg leading-relaxed text-creme/70">
                {p}
              </p>
            ))}
            <ul className="mt-6 flex flex-col gap-2.5">
              {h.craft.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-[15px] font-semibold text-creme/90">
                  <Pepite className="h-3.5 w-3.5 shrink-0 text-caramel" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to={h.craft.cta.href}
              data-testid="craft-cta"
              className="mt-8 flex h-12 w-fit items-center rounded-full bg-caramel px-8 text-sm font-extrabold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-creme"
            >
              {h.craft.cta.label}
            </Link>
          </Reveal>
          <Reveal className="relative" delay={140}>
            <div className="bite-tr-lg overflow-hidden rounded-blob shadow-card">
              <img
                src={h.craft.image}
                alt={h.craft.imageAlt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover mobile:aspect-[16/10]"
              />
            </div>
            <span className="absolute -left-4 bottom-10 rounded-full bg-espresso p-1 shadow-soft">
              <Stamp text={h.craft.stamp} variant="cream" />
            </span>
          </Reveal>
        </div>
        <div className="container-site mt-16">
          <BiteDivider color="#F6EEE3" flip />
        </div>
      </section>

      {/* ================= AVIS CLIENTS ================= */}
      <section data-section="avis-clients" className="py-20 mobile:py-14">
        <div className="container-site">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow={h.reviews.eyebrow} title={h.reviews.title} />
            <span className="flex items-center gap-2" data-testid="reviews-average">
              <Rating rating={h.reviews.rating} size={18} />
              <span className="text-sm font-bold">
                {String(h.reviews.rating).replace(".", ",")}/5 · {h.reviews.count.toLocaleString("fr-FR")} {h.hero.rating.label}
              </span>
            </span>
          </Reveal>
          <div className="mt-10 grid grid-cols-3 gap-6 tablet:grid-cols-1 mobile:grid-cols-1">
            {h.reviews.items.map((r, i) => (
              <Reveal key={r.author} delay={i * 100} className="flex h-full flex-col gap-4 rounded-card bg-offwhite p-7 shadow-soft">
                <Rating rating={r.stars} size={16} />
                <blockquote className="flex-1 text-[15px] leading-relaxed text-espresso/80">
                  « {r.text} »
                </blockquote>
                <footer className="flex flex-col gap-0.5">
                  <cite className="text-sm font-extrabold not-italic">{r.author}</cite>
                  <span className="text-xs text-espresso/55">{r.product}</span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CADEAUX & ENTREPRISES ================= */}
      <section data-section="cadeaux-entreprises" className="bg-cookie py-20 text-creme mobile:py-14">
        <div className="container-site grid items-center gap-12 mobile:grid-cols-1 desktop:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow={h.gifts.eyebrow}
              title={h.gifts.title}
              sub={h.gifts.text}
              light
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={h.gifts.primaryCta.href}
                data-testid="gifts-cta-primary"
                className="flex h-12 items-center rounded-full bg-creme px-7 text-sm font-extrabold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso hover:text-creme"
              >
                {h.gifts.primaryCta.label}
              </Link>
              <Link
                to={h.gifts.secondaryCta.href}
                data-testid="gifts-cta-secondary"
                className="flex h-12 items-center rounded-full border-2 border-creme/40 px-7 text-sm font-extrabold text-creme transition-all duration-300 hover:border-creme"
              >
                {h.gifts.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="bite-tr-lg overflow-hidden rounded-blob shadow-card">
              <img
                src={h.gifts.image}
                alt={h.gifts.imageAlt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="container-site mt-16">
          <BiteDivider color="#F6EEE3" />
        </div>
      </section>

      {/* ================= INSTAGRAM ================= */}
      <section data-section="instagram" className="py-20 mobile:py-14">
        <div className="container-site">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow={h.instagram.eyebrow} title={h.instagram.title} />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 items-center gap-2 text-sm font-extrabold text-cookie transition-colors hover:text-espresso"
              data-testid="instagram-link"
            >
              <Instagram className="h-4 w-4" />
              {h.instagram.handle}
            </a>
          </Reveal>
          <div className="mt-8 grid grid-cols-6 gap-4 tablet:grid-cols-3 mobile:grid-cols-3">
            {h.instagram.images.map((img, i) => (
              <Reveal key={img.src} delay={i * 60} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-espresso/0 opacity-0 transition-all duration-300 group-hover:bg-espresso/35 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-creme" />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ COURTE ================= */}
      <section data-section="faq-courte" className="pb-20 mobile:pb-14">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow={h.faqShort.eyebrow}
              title={h.faqShort.title}
              align="center"
            />
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <Faq items={h.faqShort.items} />
            <p className="mt-6 text-center">
              <Link
                to={h.faqShort.cta.href}
                data-testid="faq-short-cta"
                className="text-sm font-extrabold text-cookie underline decoration-caramel decoration-2 underline-offset-4 transition-colors hover:text-espresso"
              >
                {h.faqShort.cta.label}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section data-section="newsletter" className="bg-espresso py-20 text-creme mobile:py-14">
        <div className="container-site flex max-w-2xl flex-col items-center gap-6 text-center">
          <Reveal>
            <SectionHeading
              eyebrow={h.newsletter.eyebrow}
              title={h.newsletter.title}
              sub={h.newsletter.text}
              align="center"
              light
            />
            <div className="mx-auto mt-8 w-full max-w-md">
              <NewsletterForm data={h.newsletter} dark idPrefix="home" />
              <p className="mt-3 text-xs text-creme/50">{h.newsletter.note}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function RotatingStamp() {
  const id = useId();
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className="animate-spin-slow absolute inset-0 h-full w-full"
    >
      <defs>
        <path
          id={id}
          d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
          fill="none"
        />
      </defs>
      <text
        className="fill-espresso"
        style={{ fontSize: "10.5px", fontWeight: 800, letterSpacing: "2.4px" }}
      >
        <textPath href={`#${id}`}>
          CUIT À LA COMMANDE · FAIT MAIN EN FRANCE ·
        </textPath>
      </text>
    </svg>
  );
}

function toppingsGrid(h) {
  return toppings.map((t, i) => (
    <Reveal
      key={t.slug}
      delay={i * 80}
      className="w-[290px] shrink-0 snap-start tablet:w-[260px] mobile:w-[250px]"
    >
      <Link
        to={`/boutique/?tag=${t.slug}`}
        data-testid={`topping-card-${t.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-card bg-offwhite shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-sable">
          <img
            src={t.image}
            alt={`Cookies ${t.name}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <Pepite className="absolute right-3 top-3 h-4 w-4 text-creme drop-shadow" />
        </div>
        <div className="flex flex-col gap-1 p-5">
          <h3 className="font-title text-xl font-semibold transition-colors group-hover:text-cookie">
            {t.name}
          </h3>
          <p className="text-[13px] leading-relaxed text-espresso/60">{t.text}</p>
        </div>
      </Link>
    </Reveal>
  ));
}
