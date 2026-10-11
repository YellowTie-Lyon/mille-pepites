import Reveal from "../components/Reveal";
import { Pepite } from "../components/Bites";
import { legalPage } from "../mock/data";

export default function Legal() {
  const d = legalPage;
  return (
    <div className="pb-20">
      <section data-section="mentions-legales" className="pt-16 mobile:pt-10">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h1 className="font-title text-4xl font-semibold tracking-tight mobile:text-3xl">
              {d.heroTitle}
            </h1>
            <p className="mt-3 text-espresso/70">{d.intro}</p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-10">
            {d.sections.map((s, i) => (
              <Reveal key={s.id} delay={i * 40} className="scroll-mt-32">
                <h2 className="flex items-center gap-2.5 font-title text-2xl font-semibold" id={s.id}>
                  <Pepite className="h-3.5 w-3.5 shrink-0 text-caramel" />
                  {s.title}
                </h2>
                {s.blocks.map((b, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-espresso/75">
                    {b.text}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
