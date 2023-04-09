"use strict";

let weatherMap = new Map([
  ["London", 10],
  ["Moscow", 15],
]);

// for (const [key, value] of weatherMap) {
//   let weatherMapNew = new Map([[value, key]]);
//   console.log(weatherMapNew);
// }

weatherMap = new Map([...weatherMap].map((el) => el.reverse()));
console.log(weatherMap);
