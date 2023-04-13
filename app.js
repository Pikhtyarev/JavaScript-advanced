"use strict";

function pizzaTimer(ms) {
  const deadLine = new Date().getTime() + ms;
  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat("ru-RU", {
        minute: "numeric",
        second: "numeric",
      }).format(deadLine + 150 - new Date())
    );
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    console.log("PIZZA Done");
  }, ms);
}

pizzaTimer(5000);
