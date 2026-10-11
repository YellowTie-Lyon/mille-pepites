import { useState } from "react";
import { Check } from "lucide-react";

export default function NewsletterForm({
  data,
  dark = false,
  idPrefix = "nl",
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Merci de saisir une adresse e-mail valide.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <p
        className="flex items-center gap-2 text-sm font-semibold text-wc-success"
        data-testid={`${idPrefix}-newsletter-success`}
      >
        <Check className="h-5 w-5 shrink-0" />
        {data.success}
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2" noValidate>
      <div className="flex gap-2">
        <label htmlFor={`${idPrefix}-email`} className="sr-only">
          {data.placeholder}
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          required
          data-testid={`${idPrefix}-newsletter-email`}
          placeholder={data.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={
            dark
              ? "h-12 w-full rounded-full border border-creme/25 bg-creme/10 px-5 text-[15px] text-creme placeholder:text-creme/45 transition-colors focus:border-caramel focus:outline-none"
              : "h-12 w-full rounded-full border border-espresso/20 bg-offwhite px-5 text-[15px] text-espresso placeholder:text-espresso/40 transition-colors focus:border-cookie focus:outline-none"
          }
        />
        <button
          type="submit"
          data-testid={`${idPrefix}-newsletter-submit`}
          className="h-12 shrink-0 rounded-full bg-caramel px-6 text-sm font-extrabold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso hover:text-creme"
        >
          {data.button}
        </button>
      </div>
      {error && (
        <p className="text-xs font-semibold text-brique" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
