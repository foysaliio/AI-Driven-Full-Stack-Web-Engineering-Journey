// Polymorphism allows different classes
// to respond to the same method in different ways.

class Animal {
  makeSound(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  override makeSound(): void {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  override makeSound(): void {
    console.log("Cat meows");
  }
}

function makeAnimalSound(animal: Animal): void {
  animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

makeAnimalSound(dog);
makeAnimalSound(cat);
