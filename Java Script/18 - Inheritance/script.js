"use strict";

// ----- parent (base) class -----
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    return `${this.name} is eating`;
  }

  makeSound() {
    return `${this.name} makes a sound`;
  }
}

// ----- child class inherits from Animal using "extends" -----
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const myDog = new Dog("Rex");
console.log(myDog.eat());      // inherited from Animal
console.log(myDog.bark());     // defined in Dog itself

// ----- overriding a parent method -----
class Cat extends Animal {
  makeSound() {
    return `${this.name} says Meow`; // replaces Animal's makeSound
  }
}

const myCat = new Cat("Whiskers");
console.log(myCat.makeSound()); // uses Cat's own version

// ----- using super() to call the parent constructor -----
class Bird extends Animal {
  constructor(name, canFly) {
    super(name); // runs Animal's constructor first
    this.canFly = canFly;
  }

  describe() {
    return `${this.name} can fly: ${this.canFly}`;
  }
}

const myBird = new Bird("Tweety", true);
console.log(myBird.eat());       // still works, inherited from Animal
console.log(myBird.describe());

// ----- using super to call a parent's method -----
class Puppy extends Dog {
  makeSound() {
    return super.makeSound() + " (but it's just a puppy)";
  }
}

const myPuppy = new Puppy("Max");
console.log(myPuppy.makeSound());

// ----- checking inheritance with instanceof -----
console.log(myDog instanceof Dog);    // true
console.log(myDog instanceof Animal); // true, Dog inherits from Animal
