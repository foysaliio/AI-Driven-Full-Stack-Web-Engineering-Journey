"use strict";
// Function parameter types define what type of value a function expects as an argument.
function greet(name) {
    console.log(`Hello, ${name}`);
}
greet("Foysal");
// Multiple parameters
function addNumbers(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
addNumbers(10, 20);
// This will produce a TypeScript error:
// greet(22);
// addNumbers("10", 20);
