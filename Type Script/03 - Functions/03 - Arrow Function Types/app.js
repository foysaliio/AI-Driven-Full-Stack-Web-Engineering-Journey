"use strict";
// Arrow functions can also have typed parameters and return types.
const addNumbers = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
console.log(addNumbers(10, 20));
// Short arrow function
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log(multiply(5, 4));
// String example
const greet = (name) => {
    return `Hello, ${name}`;
};
console.log(greet("Foysal"));
