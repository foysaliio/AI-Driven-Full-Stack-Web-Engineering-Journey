"use strict";
// A function type can be stored inside a type alias.
const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};
console.log(add(10, 20));
console.log(multiply(10, 20));
const greet = (name) => {
    return `Hello ${name}`;
};
console.log(greet("Foysal"));
