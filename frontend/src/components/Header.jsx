import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Logo from "./Logo";
import { site } from "../mock/data";
import { useStore } from "../context/StoreContext";

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

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        solid ? "bg-creme shadow-soft" : "bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-4 mobile:h-16">
        <Link to="/" aria-label="Mille Pépites — retour à l'accueil" data-testid="header-logo" onClick={closeMenu}>
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="flex items-center gap-7 tablet:hidden">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.split("?")[0].replace(/\/$/, ""));
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative py-2 text-[14px] font-bold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-caramel after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  active ? "text-cookie after:scale-x-100" : "text-espresso/80 hover:text-espresso"
                }`}
              >
                {item.label}
              </Link>
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

          <details ref={detailsRef} className="group relative hidden tablet:block" data-testid="mobile-menu">
            <summary
              aria-label="Ouvrir le menu"
              data-testid="mobile-menu-toggle"
              className="flex h-11 w-11 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/5"
            >
              <Menu className="h-6 w-6 group-open:hidden" />
              <X className="hidden h-6 w-6 group-open:block" />
            </summary>
            <div className="absolute right-0 top-[calc(100%+10px)] z-50 flex w-[290px] flex-col gap-1 rounded-card border border-espresso/10 bg-offwhite p-5 shadow-lift">
              <form onSubmit={submitSearch} role="search" className="mb-3 flex items-center overflow-hidden rounded-full border border-espresso/15 bg-creme">
                <input
                  name="s"
                  type="search"
                  placeholder={site.search.placeholder}
                  aria-label={site.search.label}
                  data-testid="mobile-search-input"
                  className="h-11 w-full bg-transparent px-4 text-sm focus:outline-none"
                />
                <button type="submit" aria-label={site.search.label} className="flex h-11 w-11 shrink-0 items-center justify-center text-espresso/60">
                  <Search className="h-4 w-4" />
                </button>
              </form>
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center rounded-2xl px-3 text-[15px] font-bold text-espresso transition-colors hover:bg-sable"
                  data-testid="mobile-nav-link"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/mon-compte/"
                onClick={closeMenu}
                className="mt-2 flex min-h-11 items-center gap-2 rounded-2xl border border-espresso/10 px-3 text-[15px] font-bold text-espresso"
              >
                <User className="h-4 w-4" /> Mon compte
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
