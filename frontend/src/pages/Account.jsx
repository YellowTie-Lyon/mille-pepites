import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardList, LogOut, MapPin, User, UserRound } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { accountPage, site } from "../mock/data";
import { fmt } from "../utils";

export default function Account() {
  const d = accountPage;
  const { user, setUser, notify } = useStore();
  const [mode, setMode] = useState("login");
  const [tab, setTab] = useState("dashboard");
  const [details, setDetails] = useState({
    firstName: d.demoUser.firstName,
    lastName: d.demoUser.lastName,
    email: d.demoUser.email,
  });

  const login = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") || d.demoUser.email;
    setUser({ ...d.demoUser, email });
    notify("success", site.notices.loginSuccess);
  };

  const logout = () => {
    setUser(null);
    setTab("dashboard");
    notify("info", site.notices.logoutSuccess);
  };

  if (!user) {
    return (
      <div data-section="mon-compte-connexion">
        <div className="container-site max-w-4xl py-16 mobile:py-10">
          <h1 className="text-center font-title text-4xl font-semibold tracking-tight mobile:text-3xl">
            {d.title}
          </h1>
          <div className="mt-10 grid gap-6 mobile:grid-cols-1 desktop:grid-cols-2">
            {mode === "login" ? (
              <form onSubmit={login} className="flex flex-col gap-4 rounded-card bg-offwhite p-8 shadow-soft" data-testid="account-login-form">
                <h2 className="flex items-center gap-2 font-title text-2xl font-semibold">
                  <User className="h-5 w-5 text-cookie" />
                  {d.login.title}
                </h2>
                <LabeledInput id="login-email" label={d.login.email} type="email" required />
                <LabeledInput id="login-password" label={d.login.password} type="password" required />
                <button
                  type="submit"
                  data-testid="account-login-submit"
                  className="mt-2 flex h-12 items-center justify-center rounded-full bg-cookie text-sm font-extrabold text-creme transition-all hover:bg-espresso"
                >
                  {d.login.submit}
                </button>
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="text-sm font-bold text-cookie underline decoration-caramel decoration-2 underline-offset-4"
                  data-testid="account-to-register"
                >
                  {d.login.toRegister}
                </button>
                <p className="text-xs leading-relaxed text-espresso/50">{d.login.note}</p>
              </form>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = new FormData(e.currentTarget).get("email");
                  setUser({ ...d.demoUser, email });
                  notify("success", site.notices.loginSuccess);
                }}
                className="flex flex-col gap-4 rounded-card bg-offwhite p-8 shadow-soft"
                data-testid="account-register-form"
              >
                <h2 className="flex items-center gap-2 font-title text-2xl font-semibold">
                  <UserRound className="h-5 w-5 text-cookie" />
                  {d.register.title}
                </h2>
                <LabeledInput id="reg-email" label={d.register.email} type="email" required />
                <LabeledInput id="reg-password" label={d.register.password} type="password" required />
                <button
                  type="submit"
                  data-testid="account-register-submit"
                  className="mt-2 flex h-12 items-center justify-center rounded-full bg-cookie text-sm font-extrabold text-creme transition-all hover:bg-espresso"
                >
                  {d.register.submit}
                </button>
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-sm font-bold text-cookie underline decoration-caramel decoration-2 underline-offset-4"
                  data-testid="account-to-login"
                >
                  {d.register.toLogin}
                </button>
              </form>
            )}
            <div className="flex flex-col justify-center gap-4 rounded-card bg-sable/60 p-8">
              <p className="font-title text-2xl font-semibold">{d.dashboard.recentTitle}</p>
              <p className="text-[15px] leading-relaxed text-espresso/70">{d.dashboard.text}</p>
              <ul className="flex flex-col gap-2 text-sm font-semibold text-espresso/75">
                {d.demoOrders.map((o) => (
                  <li key={o.number} className="flex items-center justify-between rounded-2xl bg-offwhite px-4 py-3 shadow-soft">
                    <span className="font-extrabold">{o.number}</span>
                    <span className="text-caramel">{fmt(o.total)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const TABS = [
    { id: "dashboard", label: d.tabs.dashboard, icon: UserRound },
    { id: "orders", label: d.tabs.orders, icon: ClipboardList },
    { id: "addresses", label: d.tabs.addresses, icon: MapPin },
    { id: "details", label: d.tabs.details, icon: User },
  ];

  return (
    <div data-section="mon-compte">
      <div className="container-site max-w-6xl py-16 mobile:py-10">
        <h1 className="font-title text-4xl font-semibold tracking-tight mobile:text-3xl">
          {d.dashboard.hello(user.firstName)}
        </h1>
        <div className="mt-8 grid items-start gap-8 mobile:grid-cols-1 desktop:grid-cols-[240px_1fr]">
          <nav aria-label="Mon compte" className="flex flex-col gap-1 rounded-card bg-offwhite p-4 shadow-soft mobile:flex-row mobile:overflow-x-auto" data-testid="account-nav">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                aria-pressed={tab === t.id}
                data-testid={`account-tab-${t.id}`}
                className={`flex min-h-11 shrink-0 items-center gap-2 rounded-2xl px-4 text-sm font-extrabold transition-all ${
                  tab === t.id ? "bg-cookie text-creme" : "text-espresso/70 hover:bg-sable"
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
            <button
              type="button"
              onClick={logout}
              data-testid="account-logout"
              className="flex min-h-11 shrink-0 items-center gap-2 rounded-2xl px-4 text-sm font-extrabold text-brique transition-colors hover:bg-brique/10"
            >
              <LogOut className="h-4 w-4" />
              {d.logout}
            </button>
          </nav>

          <div className="rounded-card bg-offwhite p-8 shadow-soft mobile:p-5" data-testid="account-panel">
            {tab === "dashboard" && (
              <div className="flex flex-col gap-4">
                <h2 className="font-title text-2xl font-semibold">{d.tabs.dashboard}</h2>
                <p className="text-[15px] text-espresso/70">{d.dashboard.text}</p>
                <div className="rounded-2xl bg-sable/60 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-espresso/50">
                    {d.dashboard.recentTitle}
                  </p>
                  <p className="mt-2 flex items-center justify-between font-extrabold" data-testid="account-recent-order">
                    <span>{d.demoOrders[0].number} · {d.demoOrders[0].date}</span>
                    <span className="text-caramel">{fmt(d.demoOrders[0].total)}</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setTab("orders")}
                  className="h-12 w-fit rounded-full bg-cookie px-7 text-sm font-extrabold text-creme transition-colors hover:bg-espresso"
                >
                  {d.dashboard.cta}
                </button>
              </div>
            )}

            {tab === "orders" && (
              <div className="overflow-x-auto">
                <h2 className="font-title text-2xl font-semibold">{d.tabs.orders}</h2>
                <table className="mt-5 w-full min-w-[560px] text-left text-sm" data-testid="account-orders-table">
                  <thead>
                    <tr className="border-b border-espresso/10 text-xs font-extrabold uppercase tracking-wider text-espresso/50">
                      {d.orders.head.map((h) => (
                        <th key={h} className="pb-3 pr-4 font-extrabold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {d.demoOrders.map((o) => (
                      <tr key={o.number} className="border-b border-espresso/10" data-testid="account-order-row">
                        <td className="py-4 pr-4 font-extrabold">{o.number}</td>
                        <td className="py-4 pr-4">{o.date}</td>
                        <td className="py-4 pr-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                              o.status === "Terminée"
                                ? "bg-wc-success/10 text-wc-success"
                                : "bg-caramel/20 text-espresso"
                            }`}
                          >
                            {o.status}
                          </span>
                        </td>
                        <td className="py-4 pr-4 font-extrabold text-caramel">{fmt(o.total)}</td>
                        <td className="py-4">
                          <button
                            type="button"
                            className="text-sm font-extrabold text-cookie underline decoration-2 underline-offset-4"
                            data-testid={`account-order-view-${o.number}`}
                          >
                            {d.orders.view}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab === "addresses" && (
              <div className="flex flex-col gap-4">
                <h2 className="font-title text-2xl font-semibold">{d.tabs.addresses}</h2>
                <div className="grid gap-4 tablet:grid-cols-1 mobile:grid-cols-1 desktop:grid-cols-2">
                  {[d.addresses.shipping, d.addresses.billing].map((title) => (
                    <div key={title} className="rounded-2xl border border-espresso/10 p-5" data-testid="account-address-card">
                      <p className="font-extrabold">{title}</p>
                      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-espresso/70">
                        {user.firstName} {user.lastName}
                        {"\n"}
                        {d.addresses.demo}
                      </p>
                      <button
                        type="button"
                        onClick={() => notify("info", site.notices.saved)}
                        className="mt-3 text-sm font-extrabold text-cookie underline decoration-2 underline-offset-4"
                      >
                        {d.addresses.edit}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "details" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  setUser({
                    firstName: fd.get("firstName") || user.firstName,
                    lastName: fd.get("lastName") || user.lastName,
                    email: fd.get("email") || user.email,
                  });
                  notify("success", site.notices.saved);
                }}
                className="flex max-w-md flex-col gap-4"
                data-testid="account-details-form"
              >
                <h2 className="font-title text-2xl font-semibold">{d.tabs.details}</h2>
                <LabeledInput id="det-first" name="firstName" label={d.details.firstName} value={user.firstName} />
                <LabeledInput id="det-last" name="lastName" label={d.details.lastName} value={user.lastName} />
                <LabeledInput id="det-email" name="email" label={d.details.email} type="email" value={user.email} />
                <LabeledInput id="det-password" name="password" label={d.details.password} type="password" />
                <button
                  type="submit"
                  data-testid="account-details-save"
                  className="h-12 rounded-full bg-cookie text-sm font-extrabold text-creme transition-colors hover:bg-espresso"
                >
                  {d.details.save}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LabeledInput({ id, name = id, label, type = "text", required = false, value }) {
  return (
    <div>
      <label htmlFor={id} className="mp-label">
        {label}
        {required && <span className="text-brique"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        defaultValue={value}
        data-testid={`account-input-${id}`}
        className="mp-field"
      />
    </div>
  );
}
