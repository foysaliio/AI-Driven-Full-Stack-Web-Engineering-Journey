"use strict";
// A callback function is a function passed as an argument to another function.
const processNumber = (number, callback) => {
    return callback(number);
};
const double = (value) => {
    return value * 2;
};
const square = (value) => {
    return value * value;
};
console.log(processNumber(5, double));
console.log(processNumber(5, square));
// Another Example
const processNumber2 = (callback) => {
    return callback(50, 20);
};
const addition = (number1, number2) => {
    return number1 + number2;
};
const subtraction = (number1, number2) => {
    return number1 - number2;
};
console.log(processNumber2(addition));
console.log(processNumber2(subtraction));
