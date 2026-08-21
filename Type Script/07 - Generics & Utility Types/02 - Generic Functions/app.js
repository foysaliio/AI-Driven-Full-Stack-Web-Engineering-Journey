"use strict";
// Generic functions can work with different types
// while keeping the relationship between input and output.
const identity = (value) => {
    return value;
};
const stringValue = identity("TypeScript");
const numberValue = identity(100);
const booleanValue = identity(true);
console.log(stringValue);
console.log(numberValue);
console.log(booleanValue);
// Generic function with arrays
const getFirstItem = (value) => {
    return value[0];
};
const firstName = getFirstItem(["Foysal", "Rahim", "Karim"]);
const firstNumber = getFirstItem([10, 20, 30]);
console.log(firstName);
console.log(firstNumber);
