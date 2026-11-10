export function createItem(container, template, data = {}) {
  const fragment = template.content.cloneNode(true);
  const row = fragment.querySelector(".item");
  row.querySelector(".desc").value = data.desc ?? "";
  row.querySelector(".qty").value = data.qty ?? 1;
  row.querySelector(".rate").value = data.rate ?? 0;
  container.append(fragment);
  return container.lastElementChild;
}
export function getItems(container) {
  return [...container.querySelectorAll(".item")].map(row => ({
    desc: row.querySelector(".desc").value.trim(),
    qty: row.querySelector(".qty").value,
    rate: row.querySelector(".rate").value
  }));
}