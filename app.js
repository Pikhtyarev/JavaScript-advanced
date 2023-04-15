"use strict";

class User {
  #login;
  #_password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  };

  set #password(pass) {
    this.#_password = pass.split("").reverse().join("");
  }

  get #password () {
    return this.#_password.split("").reverse().join("");
  }
  
  get getLogin () {
    return this.#login;
  }

  set checkPassword (isTruePassword) {
    if (isTruePassword == this.#password.split("").reverse().join("")) {
      console.log(true);
    } else console.log(false);
  }

  changePassword (previousPassword, newPassword) {
    if (this.#password == previousPassword) {
      console.log("Пароль изменен");
      this.#password = newPassword.split("").reverse().join("");
    } else console.log("Пароль введен неверно");
  }
}

const user1 = new User("ekseip", "123456");

console.log(user1);
console.log(user1.getLogin);
user1.changePassword("123456", "123");
user1.checkPassword = 123;
