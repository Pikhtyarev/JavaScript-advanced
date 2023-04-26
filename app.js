"use strict";

const block = document.querySelector(".block");

for (let i = 0; i < 20; i++) {
  const element = document.createElement("div");
  element.innerHTML = i;
  element.setAttribute("el-id", i);
  block.append(element);
}

function search(event) {
  const inputValue = event.target.value;

  for (const el of [...block.children]) {
    if (el.innerHTML.includes(inputValue)) {
      el.setAttribute("style", "background-color: blue");
      continue;
    }
    el.removeAttribute("style", "background-color: blue");
  }
}