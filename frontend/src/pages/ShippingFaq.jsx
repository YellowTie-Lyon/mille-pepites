import { Link } from "react-router-dom";
import { MapPin, PackageCheck, Truck } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Faq from "../components/Faq";
import { shippingPage } from "../mock/data";

const ICONS = { Truck, MapPin, PackageCheck };

export default function ShippingFaq() {
  const d = shippingPage;
  return (
    <div>
      <section data-section="livraison-hero" className="pb-12 pt-16 mobile:pt-10">
        <div className="container-site max-w-3xl">
          <SectionHeading eyebrow={d.title} title={d.heroTitle} sub={d.intro} />
        </div>
      </section>

      <section data-section="livraison-cartes" className="pb-16">
        <div className="container-site grid grid-cols-3 gap-6 tablet:grid-cols-1 mobile:grid-cols-1">
          {d.cards.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <Reveal key={c.title} delay={i * 90} className="flex flex-col gap-3 rounded-card bg-offwhite p-7 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sable text-cookie">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h2 className="font-title text-xl font-semibold">{c.title}</h2>
                <p className="text-sm leading-relaxed text-espresso/70">{c.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section data-section="livraison-delais" className="pb-16">
        <div className="container-site max-w-4xl">
          <Reveal>
            <h2 className="font-title text-2xl font-semibold">{d.tableTitle}</h2>
            <div className="mt-5 overflow-x-auto rounded-card bg-offwhite shadow-soft" data-testid="shipping-table">
              <table className="w-full min-w-[520px] text-left text-[15px]">
                <thead>
                  <tr className="border-b border-espresso/10 text-xs font-extrabold uppercase tracking-wider text-espresso/50">
                    {d.tableHead.map((h) => (
                      <th key={h} className="px-6 pb-3 pt-5 font-extrabold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.tableRows.map((row) => (
                    <tr key={row[0]} className="border-b border-espresso/10 last:border-0">
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-6 py-4 ${j === 0 ? "font-extrabold" : "text-espresso/70"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-section="livraison-faq" className="bg-sable/70 py-16 mobile:py-10">
        <div className="container-site max-w-4xl">
          <Reveal>
            <h2 className="mb-8 font-title text-3xl font-semibold">{d.faqTitle}</h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {d.groups.map((g) => (
              <Reveal key={g.group} className="flex flex-col gap-3">
                <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-cookie">
                  {g.group}
                </h3>
                <Faq items={g.items} />
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link
              to={d.cta.href}
              data-testid="faq-page-cta"
              className="inline-flex h-12 items-center rounded-full bg-cookie px-8 text-sm font-extrabold text-creme transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
            >
              {d.cta.label}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
