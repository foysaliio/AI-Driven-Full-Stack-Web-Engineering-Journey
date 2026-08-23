// Composition means building a class
// using objects of other classes.

class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine;

  constructor() {
    this.engine = new Engine();
  }

  startCar(): void {
    this.engine.start();
    console.log("Car started");
  }
}

const car = new Car();

car.startCar();


// In real-world application design composition is a powerful concept.