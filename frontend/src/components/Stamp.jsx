export default function Stamp({
  text,
  variant = "light",
  size = "md",
  className = "",
}) {
  const palette =
    variant === "cream"
      ? "text-creme border-creme/70"
      : "text-cookie border-cookie/50";
  const dims =
    size === "lg"
      ? "h-24 w-24 text-[10px]"
      : size === "sm"
        ? "h-16 w-16 text-[8px]"
        : "h-20 w-20 text-[9px]";
  return (
    <span
      className={`inline-flex select-none items-center justify-center rounded-full border-[1.5px] ${palette} ${dims} text-center font-bold uppercase leading-tight tracking-[0.14em] -rotate-6 ${className}`}
      style={{ boxShadow: "inset 0 0 0 3px transparent" }}
    >
      <span className="flex h-[82%] w-[82%] items-center justify-center rounded-full border border-dashed border-current px-1">
        {text}
      </span>
    </span>
  );
}
