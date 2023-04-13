"use strict";

const user = {
  name: "Vasya",
  birthday: "4/13/2023",
};

// МОЕ РЕШЕНИЕ
let userBirthday = `${new Date(user.birthday).getFullYear()} ${new Date(
  user.birthday
).getMonth()} ${new Date(user.birthday).getDate()}`;
console.log(userBirthday);
const today = `${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`;
console.log(today);

function isBirhday() {
  if (userBirthday == today) return true;
  else return false;
}

console.log(isBirhday());

// РЕШЕНИЕ ПРЕПОДАВАТЕЛЯ
// function isBirhday(user) {
//   const birthdayDate = new Date(user.birthday);
//   const now = new Date();
//   if (birthdayDate.getMonth() !== now.getMonth()) {
//     return false;
//   }
//   if (birthdayDate.getDate() !== now.getDate()) {
//     return false;
//   }
//   return true;
// }
// console.log(isBirhday(user));
