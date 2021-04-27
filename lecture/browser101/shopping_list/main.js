"use strict";

const items = document.querySelector(".items");
const footerInput = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__btn");

function onAdd() {
  const inputValue = footerInput.value;
  if (footerInput.value === "") {
    footerInput.focus();
    return;
  }

  const item = createItem(inputValue);
  items.append(item);

  item.scrollIntoView({ block: "center" });

  footerInput.value = "";
}

let id = 0; // UUID
function createItem(inputValue) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <span class="item__name">${inputValue}</span>
    <button class="item__delete" >
      <i class="fas fa-trash-alt" data-id=${id}></i>
    </button>
  `;
  id++;
  return itemRow;
}

footerInput.focus();

addEventListener("click", () => {
  footerInput.focus();
});

addBtn.addEventListener("click", () => {
  onAdd();
});

footerInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") onAdd();
});

items.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
