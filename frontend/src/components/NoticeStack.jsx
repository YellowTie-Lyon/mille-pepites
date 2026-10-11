import { Link } from "react-router-dom";
import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";
import { useStore } from "../context/StoreContext";

const STYLES = {
  success: { border: "border-l-wc-success", icon: CheckCircle2, color: "text-wc-success" },
  info: { border: "border-l-wc-info", icon: Info, color: "text-wc-info" },
  error: { border: "border-l-brique", icon: AlertCircle, color: "text-brique" },
};

export default function NoticeStack() {
  const { notices, dismissNotice } = useStore();
  if (!notices.length) return null;
  return (
    <div
      aria-live="polite"
      className="fixed right-4 top-24 z-[80] flex w-[360px] max-w-[calc(100vw-2rem)] flex-col gap-3"
      data-testid="notices"
    >
      {notices.map((n) => {
        const s = STYLES[n.type] || STYLES.info;
        const Icon = s.icon;
        return (
          <div
            key={n.id}
            role="status"
            data-testid={`notice-${n.type}`}
            className={`animate-popin rounded-2xl border-l-4 border-espresso/10 bg-offwhite p-4 shadow-lift ${s.border}`}
          >
            <div className="flex items-start gap-3">
              <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${s.color}`} />
              <div className="flex-1">
                <p className="text-sm font-semibold leading-snug text-espresso">
                  {n.text}
                </p>
                {n.action && (
                  <Link
                    to={n.action.to}
                    onClick={() => dismissNotice(n.id)}
                    className="mt-1 inline-block text-sm font-extrabold text-cookie underline underline-offset-4 transition-colors hover:text-caramel"
                  >
                    {n.action.label}
                  </Link>
                )}
              </div>
              <button
                type="button"
                onClick={() => dismissNotice(n.id)}
                aria-label="Fermer la notification"
                className="-mr-1 -mt-1 flex h-9 w-9 items-center justify-center rounded-full text-espresso/40 transition-colors hover:bg-sable hover:text-espresso"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
