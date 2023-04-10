"use strict";

function randomFrom1to20(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomFrom1to20(1, 20));
