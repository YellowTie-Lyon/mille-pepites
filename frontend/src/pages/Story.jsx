import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Stamp from "../components/Stamp";
import { Pepite } from "../components/Bites";
import { storyPage } from "../mock/data";

export default function Story() {
  const d = storyPage;
  return (
    <div>
      <section data-section="histoire-hero" className="pb-14 pt-16 mobile:pt-10">
        <div className="container-site max-w-3xl">
          <SectionHeading eyebrow={d.title} title={d.heroTitle} sub={d.intro} />
        </div>
      </section>

      <section data-section="histoire-galerie" className="pb-16">
        <div className="container-site grid grid-cols-4 gap-5 tablet:grid-cols-2 mobile:grid-cols-2">
          {d.gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 90} className={i === 0 ? "row-span-2" : ""}>
              <div className="bite-tr overflow-hidden rounded-card shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover ${i === 0 ? "aspect-[3/4]" : "aspect-square"}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-section="histoire-chapitres" className="bg-sable/70 py-20 mobile:py-12">
        <div className="container-site max-w-4xl">
          <div className="flex flex-col gap-12">
            {d.chapters.map((c, i) => (
              <Reveal key={c.title} delay={i * 60} className="grid gap-4 border-l-4 border-caramel pl-6 mobile:pl-4">
                <h2 className="font-title text-2xl font-semibold">{c.title}</h2>
                <p className="leading-relaxed text-espresso/75">{c.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-wrap gap-4">
            {d.stamps.map((s) => (
              <Stamp key={s} text={s} />
            ))}
          </Reveal>
        </div>
      </section>

      <section data-section="histoire-sourcing" className="py-20 mobile:py-12">
        <div className="container-site grid items-center gap-12 mobile:grid-cols-1 desktop:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow={d.sourcing.title} title={d.sourcing.text} />
            <ul className="mt-6 flex flex-col gap-3">
              {d.sourcing.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] font-semibold">
                  <Pepite className="h-3.5 w-3.5 shrink-0 text-caramel" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="flex flex-col gap-6" delay={120}>
            {d.craft.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="rounded-card bg-offwhite p-6 shadow-soft">
                <h3 className="font-title text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-espresso/70">{c.text}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <section data-section="histoire-cta" className="bg-espresso py-16 text-center text-creme">
        <div className="container-site flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="font-title text-3xl font-semibold">Envie de goûter tout ça ?</h2>
            <Link
              to={d.cta.href}
              data-testid="story-cta"
              className="mt-6 inline-flex h-14 items-center rounded-full bg-caramel px-9 text-[15px] font-extrabold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-creme"
            >
              {d.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
