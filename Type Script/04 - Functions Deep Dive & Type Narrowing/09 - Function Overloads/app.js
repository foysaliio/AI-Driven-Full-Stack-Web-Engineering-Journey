"use strict";
// Function overloads allow a function to have multiple valid call signatures.
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value * 2;
}
console.log(formatValue("foysal"));
console.log(formatValue(10));
function combine(value1, value2) {
    if (typeof value1 === "string" && typeof value2 === "string") {
        return value1 + value2;
    }
    if (typeof value1 === "number" && typeof value2 === "number") {
        return value1 + value2;
    }
    throw new Error("Both values must have the same type");
}
console.log(combine("Hello ", "Foysal"));
console.log(combine(10, 20));
