"use strict";
// Polymorphism allows different classes
// to respond to the same method in different ways.
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
function makeAnimalSound(animal) {
    animal.makeSound();
}
const dog = new Dog();
const cat = new Cat();
makeAnimalSound(dog);
makeAnimalSound(cat);
