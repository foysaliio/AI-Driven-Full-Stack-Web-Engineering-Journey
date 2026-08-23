"use strict";
// Composition means building a class
// using objects of other classes.
class Engine {
    start() {
        console.log("Engine started");
    }
}
class Car {
    engine;
    constructor() {
        this.engine = new Engine();
    }
    startCar() {
        this.engine.start();
        console.log("Car started");
    }
}
const car = new Car();
car.startCar();
// In real-world application design composition is a powerful concept.
