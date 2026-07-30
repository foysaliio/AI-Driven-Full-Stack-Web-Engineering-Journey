"use strict";

// ----- defining a class -----
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I am ${this.name} and I am ${this.age} years old`;
  }
}

// ----- creating an object (instance) from a class -----
const person1 = new Person("Ahnaf", 23);
const person2 = new Person("Rahim", 30);

console.log(person1.greet());
console.log(person2.greet());

// ----- each instance has its own separate data -----
console.log(person1.name); // "Ahnaf"
console.log(person2.name); // "Rahim"

// ----- adding a method that uses object data -----
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rect1 = new Rectangle(5, 10);
console.log(rect1.getArea()); // 50

// ----- default values for properties -----
class Product {
  constructor(name, price = 0) {
    this.name = name;
    this.price = price;
  }

  showInfo() {
    return `${this.name} costs $${this.price}`;
  }
}

const product1 = new Product("Book", 15);
const product2 = new Product("Pen"); // uses default price

console.log(product1.showInfo());
console.log(product2.showInfo());

// ----- checking the type of an instance -----
console.log(person1 instanceof Person); // true
console.log(typeof person1);            // "object"
