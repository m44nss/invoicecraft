import { money, calculate } from "./invoice.js";
import { createItem, getItems } from "./items.js";
const $ = selector => document.querySelector(selector);
const list = $("#items"), template = $("#row-template");
$("#date").value = new Date().toISOString().slice(0,10);
const due = new Date(); due.setDate(due.getDate()+14); $("#due").value = due.toISOString().slice(0,10);

function addItem(data) {
  const row = createItem(list, template, data);
  row.addEventListener("input", update);
  row.querySelector(".remove").addEventListener("click", () => {
    row.remove(); if (!list.children.length) addItem({}); update();
  });
  update();
}
function update() {
  const items = getItems(list), currency = $("#currency").value, taxRate = $("#tax").value;
  const totals = calculate(items, taxRate);
  [...list.children].forEach((row, i) => {
    const amount = Math.max(0, Number(items[i].qty)||0) * Math.max(0, Number(items[i].rate)||0);
    row.querySelector(".amount").textContent = money(amount,currency);
  });
  $("#p-from").textContent = $("#from").value.trim() || "Your Business";
  $("#p-email").textContent = $("#email").value.trim() || "your@email.com";
  $("#p-client").textContent = $("#client").value.trim() || "Your client";
  $("#p-number").textContent = $("#number").value.trim() || "INV-001";
  $("#p-date").textContent = "Date: " + ($("#date").value || "—");
  $("#p-due").textContent = "Due: " + ($("#due").value || "—");
  $("#subtotal").textContent = money(totals.subtotal,currency);
  $("#tax-label").textContent = `Tax (${Math.max(0,Number(taxRate)||0)}%)`;
  $("#tax-total").textContent = money(totals.tax,currency);
  $("#total").textContent = money(totals.total,currency);
  $("#p-notes").textContent = $("#notes").value.trim() || "Thank you for your business!";
  const body = $("#p-rows"); body.replaceChildren();
  items.forEach(item => {
    const tr = document.createElement("tr");
    [item.desc || "Item", String(Math.max(0,Number(item.qty)||0)), money(item.rate,currency), money((Number(item.qty)||0)*(Number(item.rate)||0),currency)].forEach(value => {
      const td = document.createElement("td"); td.textContent = value; tr.append(td);
    });
    body.append(tr);
  });
}
$("#add").addEventListener("click", () => addItem({}));
$("#print").addEventListener("click", () => window.print());
document.querySelectorAll(".editor input,.editor select,.editor textarea").forEach(el => {
  el.addEventListener("input",update); el.addEventListener("change",update);
});
addItem({desc:"Design service",qty:1,rate:250});
addItem({desc:"Consultation",qty:2,rate:50});
update();