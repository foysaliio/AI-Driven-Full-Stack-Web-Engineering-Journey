"use strict";
// A function type defines the structure of a function.
// The function must:
// accept two numbers
// return a number
let calculate;
calculate = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
console.log(calculate(10, 20));
// Another function with the same structure
calculate = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};
console.log(calculate(5, 7));
// Another function with the another structure
let studentData;
studentData = (name, roll, isActive) => {
    return `Hi! ${name}, your roll is: ${roll}, your are a ${isActive ? "Active" : "Inactive"} student`;
};
console.log(studentData("Foysal Hossien", 657735, true));
console.log(studentData("Rofiq al Hasan", 657740, false));
