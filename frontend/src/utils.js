export function fmt(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
