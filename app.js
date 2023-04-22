"use strict";

function createSelect(array) {
  const el = document.getElementById("block");
  el.innerHTML = `<select>
    ${array.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}
  </select>`
}

function getCategories() {
  fetch("https://dummyjson.com/products/categories")
  .then(response => response.json())
  .then(data => createSelect(data))
  .catch(console.error(`Ошибка: ${error}`))
}

getCategories();