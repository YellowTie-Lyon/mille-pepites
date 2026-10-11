import { Pepite } from "./Bites";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  light = false,
  className = "",
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && (
        <p
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] ${
            light ? "text-caramel" : "text-cookie"
          }`}
        >
          <Pepite className="h-3 w-3 text-caramel" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-title text-3xl font-semibold leading-[1.1] tracking-tight mobile:text-[28px] ${
          light ? "text-creme" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`text-[15px] leading-relaxed ${
            light ? "text-creme/70" : "text-espresso/70"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
