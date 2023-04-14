"use strict";

const product = { id: 1, name: "Bread", count: 1 };

// МОЕ РЕШЕНИЕ

// const Cart = function (id, name, count) {
//   this.id = id;
//   this.name = name;
//   this.count = count;
// };

// Cart.prototype.addCountProduct = function (count) {
//   this.count += count;
// };

// Cart.prototype.removeCountProduct = function (count) {
//   this.count -= count;
//   if (this.count == 0 || this.count < 0) {
//     this.count = "Товаров нет";
//   }
// };

// const product2 = new Cart(2, "Nosok", 2);
// product2.removeCountProduct(1);
// product2.addCountProduct(10);

// console.log(product2);

//РЕШЕНИЕ ПРЕПОДАВАТЕЛЯ

const Cart = function () {
  this.products = [];
};

Cart.prototype.addProduct = function (product) {
  if (this.products.find((product) => product.id === product.id)) {
    return;
  }
  this.products.push(product);
};

Cart.prototype.increaseAmount = function (id) {
  this.products = this.products.map((product) => {
    if (product.id == id) {
      product.count++;
      return product;
    }
    return product;
  });
};

Cart.prototype.decreaseAmount = function (id) {
  this.products = this.products
    .map((product) => {
      if (product.id == id) {
        product.count--;
        return product;
      }
      return product;
    })
    .filter((product) => product.count > 0);
};

const cart = new Cart();
cart.addProduct(product);
cart.increaseAmount(1);
cart.decreaseAmount(1);
console.log(cart);
