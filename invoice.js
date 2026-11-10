export function money(value, currency) {
  return new Intl.NumberFormat("en", { style: "currency", currency, maximumFractionDigits: 2 }).format(Number(value) || 0);
}
export function calculate(items, taxRate) {
  const subtotal = items.reduce((sum, item) => sum + Math.max(0, Number(item.qty) || 0) * Math.max(0, Number(item.rate) || 0), 0);
  const rate = Math.min(100, Math.max(0, Number(taxRate) || 0));
  const tax = subtotal * rate / 100;
  return { subtotal, tax, total: subtotal + tax };
}