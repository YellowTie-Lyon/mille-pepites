import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "./Logo";
import { CurveTop } from "./Bites";
import NewsletterForm from "./NewsletterForm";
import { site } from "../mock/data";

const SOCIAL_ICONS = { Instagram, Facebook, Youtube };

export default function Footer() {
  const { footer } = site;
  return (
    <footer data-testid="site-footer" className="relative">
      <CurveTop color="#2E1B12" className="-mb-px" />
      <div className="bg-espresso text-creme/70">
        <div className="container-site grid gap-12 pb-14 pt-16 tablet:grid-cols-2 mobile:grid-cols-1 desktop:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          <div className="flex flex-col gap-5">
            <Link to="/" aria-label="Mille Pépites — accueil" data-testid="footer-logo">
              <Logo variant="cream" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">{footer.blurb}</p>
            <div className="flex gap-2">
              {footer.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    data-testid="footer-social-link"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-creme/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-caramel hover:bg-caramel hover:text-espresso"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <p className="font-title text-lg font-semibold text-creme">
                {col.title}
              </p>
              {col.links.map((l) => (
                <Link
                  key={l.label + l.href}
                  to={l.href}
                  className="flex min-h-9 items-center text-sm transition-colors hover:text-caramel"
                  data-testid="footer-link"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-4">
            <p className="font-title text-lg font-semibold text-creme">
              {footer.newsletter.title}
            </p>
            <p className="text-sm leading-relaxed">{footer.newsletter.text}</p>
            <NewsletterForm data={footer.newsletter} dark idPrefix="footer" />
          </div>
        </div>

        <div className="border-t border-creme/12">
          <div className="container-site flex flex-col gap-4 py-6 tablet:items-center mobile:items-start desktop:flex-row desktop:justify-between">
            <p className="text-xs">{footer.copyright}</p>
            <div className="flex flex-wrap gap-2">
              {footer.payments.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-creme/20 px-3 py-1 text-[11px] font-bold tracking-wide"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
