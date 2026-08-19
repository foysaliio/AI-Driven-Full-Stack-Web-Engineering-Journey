"use strict";
// Interfaces can also describe function structures.
const greet = (name) => {
    return `Hello, ${name}`;
};
console.log(greet("Foysal"));
const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};
console.log(add(10, 20));
console.log(multiply(10, 20));
