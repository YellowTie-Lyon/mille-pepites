import { useState } from "react";
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { contactPage } from "../mock/data";

export default function Contact() {
  const d = contactPage;
  const [sent, setSent] = useState(false);

  return (
    <div className="pb-20">
      <section data-section="contact" className="pt-16 mobile:pt-10">
        <div className="container-site max-w-5xl">
          <SectionHeading eyebrow={d.title} title={d.heroTitle} sub={d.intro} />

          <div className="mt-12 grid items-start gap-10 mobile:grid-cols-1 desktop:grid-cols-[1fr_340px]">
            <Reveal className="rounded-card bg-offwhite p-8 shadow-soft mobile:p-5">
              {sent ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center" data-testid="contact-form-success">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-wc-success/10">
                    <Check className="h-8 w-8 text-wc-success" />
                  </span>
                  <p className="font-title text-2xl font-semibold">{d.form.success}</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="flex flex-col gap-4"
                  data-testid="contact-form"
                >
                  <h2 className="font-title text-2xl font-semibold">{d.form.title}</h2>
                  <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1">
                    <div>
                      <label htmlFor="c-name" className="mp-label">
                        {d.form.fields.name} <span className="text-brique">*</span>
                      </label>
                      <input id="c-name" required data-testid="contact-name" className="mp-field" />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="mp-label">
                        {d.form.fields.email} <span className="text-brique">*</span>
                      </label>
                      <input id="c-email" type="email" required data-testid="contact-email" className="mp-field" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-subject" className="mp-label">
                      {d.form.fields.subject}
                    </label>
                    <select id="c-subject" data-testid="contact-subject" className="mp-field">
                      {d.form.subjects.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-message" className="mp-label">
                      {d.form.fields.message} <span className="text-brique">*</span>
                    </label>
                    <textarea id="c-message" rows={5} required data-testid="contact-message" className="mp-field" />
                  </div>
                  <button
                    type="submit"
                    data-testid="contact-submit"
                    className="flex h-12 w-fit items-center rounded-full bg-cookie px-8 text-sm font-extrabold text-creme transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
                  >
                    {d.form.submit}
                  </button>
                </form>
              )}
            </Reveal>

            <Reveal delay={120} className="flex flex-col gap-6 rounded-card bg-espresso p-8 text-creme">
              <h2 className="font-title text-2xl font-semibold">{d.info.title}</h2>
              <ul className="flex flex-col gap-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                  <span>
                    {d.info.address.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-caramel" />
                  <a href={`mailto:${d.info.email}`} className="transition-colors hover:text-caramel">
                    {d.info.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-caramel" />
                  <a href={`tel:${d.info.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-caramel">
                    {d.info.phone}
                  </a>
                </li>
              </ul>
              <div className="rounded-2xl bg-creme/10 p-5">
                <p className="flex items-center gap-2 font-extrabold">
                  <Clock className="h-4 w-4 text-caramel" />
                  {d.info.hoursTitle}
                </p>
                <table className="mt-3 w-full text-sm" data-testid="contact-hours">
                  <tbody>
                    {d.info.hours.map((h) => (
                      <tr key={h.day}>
                        <td className="py-1.5 pr-4 text-creme/70">{h.day}</td>
                        <td className="py-1.5 text-right font-bold">{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
