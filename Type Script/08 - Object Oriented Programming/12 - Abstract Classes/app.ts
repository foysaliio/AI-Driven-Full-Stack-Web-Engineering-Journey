// An abstract class cannot be instantiated directly.
// It is designed to be extended by other classes.

abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Cat meows");
  }
}

const dog = new Dog("Tommy");
const cat = new Cat("Mimi");

dog.makeSound();
dog.move();

cat.makeSound();
cat.move();

// This will produce a TypeScript error:

// const animal = new Animal("Animal");
