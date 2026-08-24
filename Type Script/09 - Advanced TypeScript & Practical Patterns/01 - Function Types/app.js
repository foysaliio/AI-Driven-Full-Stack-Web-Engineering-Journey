"use strict";
// Function types define the types of function parameters and return values.
const add = (a, b) => {
    return a + b;
};
const greet = (name) => {
    return `Hello, ${name}`;
};
console.log(add(10, 20));
console.log(greet("Foysal"));
// Function type
let calculate;
calculate = add;
console.log(calculate);
console.log(calculate(5, 10));
// Another example
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 4));
