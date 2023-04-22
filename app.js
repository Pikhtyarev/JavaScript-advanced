"use strict";

function getData(url, errorMessage) {
  return fetch(url)
    .then(response => {
        if (!response.ok) {
          throw new Error(`${errorMessage}: ${response.status}`)
        }
        return response.json()
    })
}

getData("https://dummyjson.com/products", "OSHIBKA")
  .then(({ products }) => {
    return getData("https://dummyjson.com/products/" + products[0].id, "OSHIBKA 2")
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    const el = document.getElementById("block");
    el.innerHTML = error.message;
  });