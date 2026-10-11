import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { BiteDivider, Pepite } from "../components/Bites";
import { getProduct, giftsPage } from "../mock/data";

export default function Gifts() {
  const d = giftsPage;
  const product = getProduct(d.metalBox.productSlug);
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section data-section="cadeaux-hero" className="pb-14 pt-16 mobile:pt-10">
        <div className="container-site max-w-3xl">
          <SectionHeading eyebrow={d.title} title={d.heroTitle} sub={d.intro} />
        </div>
      </section>

      <section data-section="cadeaux-boite-metal" className="pb-20 mobile:pb-12">
        <div className="container-site grid items-center gap-12 mobile:grid-cols-1 desktop:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Option cadeau"
              title={d.metalBox.title}
              sub={d.metalBox.text}
            />
            <Link
              to={`/produit/${product.slug}/`}
              data-testid="gifts-metalbox-cta"
              className="mt-6 flex h-12 w-fit items-center rounded-full bg-cookie px-8 text-sm font-extrabold text-creme transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
            >
              {d.metalBox.cta}
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ProductCard product={product} />
          </Reveal>
        </div>
        <div className="mt-16">
          <BiteDivider color="#E8D7BF" />
        </div>
      </section>

      <section data-section="cadeaux-entreprises" className="bg-sable/70 py-20 mobile:py-12">
        <div className="container-site grid items-start gap-12 mobile:grid-cols-1 desktop:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Commandes en volume"
              title={d.business.title}
              sub={d.business.text}
            />
            <ul className="mt-6 flex flex-col gap-3">
              {d.business.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] font-semibold">
                  <Pepite className="h-3.5 w-3.5 shrink-0 text-caramel" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140} className="rounded-card bg-offwhite p-8 shadow-soft mobile:p-5">
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center" data-testid="gifts-form-success">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-wc-success/10">
                  <Check className="h-8 w-8 text-wc-success" />
                </span>
                <p className="font-title text-2xl font-semibold">{d.business.form.success}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-4"
                data-testid="gifts-form"
              >
                <h2 className="font-title text-2xl font-semibold">{d.business.form.title}</h2>
                <Field id="company" label={d.business.form.fields.company} required />
                <Field id="pro-email" label={d.business.form.fields.email} type="email" required />
                <Field id="people" label={d.business.form.fields.people} placeholder={d.business.form.placeholders.people} required />
                <Field id="date" label={d.business.form.fields.date} placeholder={d.business.form.placeholders.date} />
                <Field id="message" label={d.business.form.fields.message} textarea placeholder={d.business.form.placeholders.message} />
                <button
                  type="submit"
                  data-testid="gifts-form-submit"
                  className="mt-2 flex h-12 items-center justify-center rounded-full bg-cookie text-sm font-extrabold text-creme transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
                >
                  {d.business.form.submit}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({ id, label, type = "text", required = false, textarea = false, placeholder = "" }) {
  return (
    <div>
      <label htmlFor={id} className="mp-label">
        {label}
        {required && <span className="text-brique"> *</span>}
      </label>
      {textarea ? (
        <textarea id={id} required={required} rows={4} placeholder={placeholder} data-testid={`gifts-${id}`} className="mp-field" />
      ) : (
        <input id={id} type={type} required={required} placeholder={placeholder} data-testid={`gifts-${id}`} className="mp-field" />
      )}
    </div>
  );
}
