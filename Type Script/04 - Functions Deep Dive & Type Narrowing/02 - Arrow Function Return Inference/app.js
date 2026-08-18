"use strict";
// TypeScript can automatically infer the return type of an arrow function.
const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
console.log(add(10, 30));
console.log(add(2, 3));
// TypeScript infers:
// add -> (firstNumber: number, secondNumber: number) => number
const greet = (name) => {
    return `Hello ${name}`;
};
console.log(greet("Foysal"));
console.log(greet("Hossien"));
// TypeScript infers:
// greet -> (name: string) => string
