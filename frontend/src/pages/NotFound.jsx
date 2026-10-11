import { Link } from "react-router-dom";
import { CookieMark } from "../components/Logo";
import { notFoundPage } from "../mock/data";

export default function NotFound() {
  const d = notFoundPage;
  return (
    <div data-section="page-404">
      <div className="container-site flex flex-col items-center gap-6 py-24 text-center mobile:py-16">
        <span className="relative flex h-28 w-28 items-center justify-center rounded-full bg-sable/60">
          <CookieMark className="h-20 w-20" />
        </span>
        <h1 className="max-w-lg font-title text-4xl font-semibold leading-tight tracking-tight mobile:text-3xl">
          {d.title}
        </h1>
        <p className="max-w-md text-espresso/70">{d.text}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            data-testid="notfound-cta-home"
            className="flex h-12 items-center rounded-full bg-cookie px-8 text-sm font-extrabold text-creme transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
          >
            {d.cta}
          </Link>
          <Link
            to="/boutique/"
            data-testid="notfound-cta-shop"
            className="flex h-12 items-center rounded-full border-2 border-espresso/15 px-8 text-sm font-extrabold transition-colors hover:border-cookie hover:text-cookie"
          >
            {d.cta2}
          </Link>
        </div>
      </div>
    </div>
  );
}
