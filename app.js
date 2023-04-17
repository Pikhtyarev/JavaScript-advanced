"use strict";

class Enemy {
  health;
  constructor(health) {
    this.health = health;
  }

  getDamage(damage) {
    this.health -= damage;
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health);
  }

  getDamage(damage) {
    if (Math.random() > 0.5) {
      return this.health -= damage;
    } else return this.health;
  }
}

class Sword {
  #power;
  constructor(power) {
    this.#power = power;
  }

  giveDamage(enemy) {
    enemy.getDamage(this.#power);
  }
}

const orc = new Orc(100);

const mech = new Sword(50);
mech.giveDamage(orc);

console.log(orc);