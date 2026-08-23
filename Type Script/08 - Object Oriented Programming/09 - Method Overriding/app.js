"use strict";
// A child class can provide its own implementation
// of a method inherited from the parent class.
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}
const dog = new Dog();
const cat = new Cat();
dog.makeSound();
cat.makeSound();
