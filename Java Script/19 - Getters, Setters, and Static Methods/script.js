"use strict";

// ----- getter: lets you access a computed value like a property -----
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle1 = new Circle(5);
console.log(circle1.area); // accessed like a property, not called like a function

// ----- setter: lets you control what happens when a property is assigned -----
class BankAccount {
  constructor(balance) {
    this._balance = balance; // underscore is a common naming convention for internal values
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative");
      return;
    }
    this._balance = amount;
  }
}

const account = new BankAccount(100);
console.log(account.balance); // 100

account.balance = 200; // calls the setter
console.log(account.balance); // 200

account.balance = -50; // setter blocks this
console.log(account.balance); // still 200

// ----- static methods: belong to the class itself, not an instance -----
class MathHelper {
  static square(number) {
    return number * number;
  }

  static cube(number) {
    return number * number * number;
  }
}

console.log(MathHelper.square(4)); // called directly on the class
console.log(MathHelper.cube(3));
// const helper = new MathHelper(); helper.square(4); // this would NOT work

// ----- static property: shared across all instances -----
class Counter {
  static count = 0;

  constructor() {
    Counter.count++; // increments the shared static value
  }
}

new Counter();
new Counter();
new Counter();
console.log(Counter.count); // 3
