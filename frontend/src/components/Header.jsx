import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Cookie as CookieIcon,
  Gift,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  User,
  X,
} from "lucide-react";
import Logo from "./Logo";
import { categories, site, toppings } from "../mock/data";
import { useStore } from "../context/StoreContext";

const NAV_ICONS = { Cookie: CookieIcon, Boxes, Sparkles, Gift };

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { count, setDrawerOpen } = useStore();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;
  const closeMenu = () => detailsRef.current?.removeAttribute("open");

  const submitSearch = (e) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("s")?.trim();
    closeMenu();
    navigate(q ? `/boutique/?s=${encodeURIComponent(q)}` : "/boutique/");
  };

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href.split("?")[0].replace(/\/$/, ""));

  const navTestid = (label) =>
    `header-nav-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        solid ? "bg-creme shadow-soft" : "bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="container-site flex h-[76px] items-center justify-between gap-4 mobile:h-16">
        <Link
          to="/"
          aria-label="Mille Pépites — retour à l'accueil"
          data-testid="header-logo"
          onClick={closeMenu}
        >
          <Logo />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="flex items-center gap-1 tablet:hidden"
        >
          {site.nav.map((item) => {
            const Icon = NAV_ICONS[item.icon];
            const link = (
              <Link
                to={item.href}
                data-testid={navTestid(item.label)}
                className={`flex min-h-11 items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-bold transition-colors ${
                  isActive(item.href)
                    ? "bg-sable text-espresso"
                    : "text-espresso/80 hover:bg-espresso/5 hover:text-espresso"
                }`}
              >
                <Icon className="h-4 w-4 text-cookie" strokeWidth={1.8} />
                {item.label}
                {item.chip && (
                  <span className="rounded-full bg-cookie px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-creme">
                    {item.chip}
                  </span>
                )}
              </Link>
            );

            if (!item.mega)
              return (
                <div key={item.href} className="group relative">
                  {link}
                </div>
              );

            return (
              <div key={item.href} className="group relative" data-testid="header-mega">
                {link}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="grid w-[780px] grid-cols-[1fr_1.1fr_1.25fr] gap-7 rounded-card border border-espresso/10 bg-offwhite p-7 text-left shadow-lift">
                    <div>
                      <p className="px-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-espresso/45">
                        {site.mega.categoriesTitle}
                      </p>
                      <ul className="mt-3 flex flex-col gap-1">
                        {categories.map((c) => (
                          <li key={c.slug}>
                            <Link
                              to={`/categorie-produit/${c.slug}/`}
                              data-testid={`mega-category-${c.slug}`}
                              className="group/la flex min-h-11 items-center justify-between gap-2 rounded-2xl px-3 text-[15px] font-bold text-espresso transition-colors hover:bg-sable/70"
                            >
                              {c.name}
                              <ArrowRight className="h-3.5 w-3.5 text-caramel opacity-0 transition-all group-hover/la:translate-x-0.5 group-hover/la:opacity-100" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={site.mega.allCta.href}
                        className="mx-3 mt-2 flex min-h-11 items-center text-[13px] font-extrabold text-cookie underline decoration-caramel decoration-2 underline-offset-4"
                      >
                        {site.mega.allCta.label}
                      </Link>
                    </div>

                    <div>
                      <p className="px-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-espresso/45">
                        {site.mega.toppingsTitle}
                      </p>
                      <ul className="mt-3 flex flex-col gap-1">
                        {toppings.map((t) => (
                          <li key={t.slug}>
                            <Link
                              to={`/boutique/?tag=${t.slug}`}
                              data-testid={`mega-topping-${t.slug}`}
                              className="flex min-h-14 items-center gap-3 rounded-2xl px-3 transition-colors hover:bg-sable/70"
                            >
                              <img
                                src={t.image}
                                alt=""
                                className="h-10 w-10 rounded-xl object-cover"
                              />
                              <span className="flex flex-col">
                                <span className="text-[14px] font-bold text-espresso">
                                  {t.name}
                                </span>
                                <span className="text-xs text-espresso/55">
                                  Voir les cookies
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={site.mega.featured.href}
                      data-testid="mega-featured"
                      className="group/f flex flex-col overflow-hidden rounded-card bg-sable/70 transition-shadow hover:shadow-card"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={site.mega.featured.image}
                          alt={site.mega.featured.title}
                          className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover/f:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-1 p-5">
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cookie">
                          {site.mega.featured.eyebrow}
                        </span>
                        <span className="font-title text-xl font-semibold">
                          {site.mega.featured.title}
                        </span>
                        <span className="text-[13px] leading-snug text-espresso/65">
                          {site.mega.featured.text}
                        </span>
                        <span className="mt-2 flex items-center gap-1.5 text-[13px] font-extrabold text-cookie">
                          {site.mega.featured.cta}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/f:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <form
            onSubmit={submitSearch}
            role="search"
            className="mr-1 flex items-center overflow-hidden rounded-full border border-espresso/15 bg-offwhite transition-all duration-300 focus-within:border-cookie tablet:hidden"
            data-testid="header-search"
          >
            <label htmlFor="header-search-input" className="sr-only">
              {site.search.label}
            </label>
            <input
              id="header-search-input"
              name="s"
              type="search"
              placeholder={site.search.placeholder}
              className="h-10 w-36 bg-transparent px-4 text-sm text-espresso placeholder:text-espresso/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label={site.search.label}
              className="flex h-10 w-10 items-center justify-center text-espresso/60 transition-colors hover:text-cookie"
            >
              <Search className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </form>

          <Link
            to="/mon-compte/"
            aria-label="Mon compte"
            data-testid="header-account"
            className="flex h-11 w-11 items-center justify-center rounded-full text-espresso/75 transition-colors hover:bg-espresso/5 hover:text-espresso tablet:hidden"
          >
            <User className="h-5 w-5" />
          </Link>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label={`Ouvrir le panier, ${count} article(s)`}
            data-testid="header-cart-button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-espresso/75 transition-colors hover:bg-espresso/5 hover:text-espresso"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span
                key={count}
                data-testid="header-cart-count"
                className="animate-popin absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-cookie px-1 text-[10px] font-extrabold text-offwhite"
              >
                {count}
              </span>
            )}
          </button>

          <details
            ref={detailsRef}
            className="group relative hidden tablet:block"
            data-testid="mobile-menu"
          >
            <summary
              aria-label="Ouvrir le menu"
              data-testid="mobile-menu-toggle"
              className="flex h-11 w-11 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/5"
            >
              <Menu className="h-6 w-6 group-open:hidden" />
              <X className="hidden h-6 w-6 group-open:block" />
            </summary>
            <div className="absolute right-0 top-[calc(100%+10px)] z-50 flex max-h-[75vh] w-[300px] flex-col gap-0.5 overflow-y-auto rounded-card border border-espresso/10 bg-offwhite p-5 shadow-lift">
              <form
                onSubmit={submitSearch}
                role="search"
                className="mb-3 flex items-center overflow-hidden rounded-full border border-espresso/15 bg-creme"
              >
                <input
                  name="s"
                  type="search"
                  placeholder={site.search.placeholder}
                  aria-label={site.search.label}
                  data-testid="mobile-search-input"
                  className="h-11 w-full bg-transparent px-4 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label={site.search.label}
                  className="flex h-11 w-11 shrink-0 items-center justify-center text-espresso/60"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
              {site.nav.map((item) => {
                const Icon = NAV_ICONS[item.icon];
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className="flex min-h-11 items-center gap-2.5 rounded-2xl px-3 text-[15px] font-bold text-espresso transition-colors hover:bg-sable"
                    data-testid="mobile-nav-link"
                  >
                    <Icon className="h-4 w-4 text-cookie" strokeWidth={1.8} />
                    {item.label}
                  </Link>
                );
              })}
              <p className="mt-3 px-3 pt-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-espresso/40">
                {site.mega.categoriesTitle}
              </p>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to={`/categorie-produit/${c.slug}/`}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center rounded-2xl px-3 text-[15px] font-bold text-espresso transition-colors hover:bg-sable"
                >
                  {c.name}
                </Link>
              ))}
              <p className="mt-3 px-3 pt-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-espresso/40">
                {site.footer.columns[1].title}
              </p>
              {site.footer.columns[1].links.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center rounded-2xl px-3 text-[14px] font-semibold text-espresso/75 transition-colors hover:bg-sable"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
