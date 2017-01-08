"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.ages = 0;
    this.heights = 0;
    this.fruits = 0;
    this.mangoCapacity = 0;
    this.health = true;
  }

  // Get current states here

  get age() {
    return this.ages;
  }
  set age(age) {
    this.ages = age;
  }

  get height() {
    return this.heights;
  }
  set height(height) {
    this.heights = height;
  }

  get fruit() {
    return this.fruits;
  }
  set fruit(fruit) {
    this.fruits = fruit;
  }

  get healthy() {
    return this.health;
  }
  set healthy(health) {
    this.health = health;
  }

  // Grow the tree
  grow() {
    this.ages++;
    if (this.heights < 4.8 && this.ages < 20) {
      this.heights += getRandomNumber();
    }
    if (this.heights > 4.8) {
      this.heights += 0;
    }
    if (this.ages == 20) {
      this.health = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this.fruits = Math.floor((Math.random() * 15));
    this.mangoCapacity += this.fruits;
  }

  // Get some fruits
  harvest() {
    this.mangoCapacity -= this.fruits;
    if (this.mangoCapacity > 0) {
      return this.mangoCapacity;
    }
    else {
      return 0;
    }
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.condition = "";
  }

  checkCondition(fruits) {
    let bad = Math.floor(Math.floor(fruits/2) - (Math.round(Math.random() * 4)));
    let good = 0;
    if (bad > 0) {
      good = fruits-bad;
    }
    else {
      bad = 0;
      good = fruits-bad;
    }

    return `(${good} good, ${bad} bad)`
  }

}

function getRandomNumber() {
  let number = Math.round((Math.random() * 4) + 1) / 10;
  return number;
}

var tree = new MangoTree();
let mango = new Mango();

console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  tree.produceMangoes();

  console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.fruit} ${mango.checkCondition(tree.fruit)}`);
} while (tree.healthy === true)

console.log(`The tree has met its end. :sad:`);
