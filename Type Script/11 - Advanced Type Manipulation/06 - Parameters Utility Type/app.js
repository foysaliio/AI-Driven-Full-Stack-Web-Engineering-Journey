"use strict";
// Parameters extracts function parameter types
// and returns them as a tuple.
const createUser = (name, age, active) => {
    console.log(name, age, active);
};
// Result:
// [string, number, boolean]
const userData = ["Foysal", 23, true];
createUser(...userData);
// Another example
const calculatePrice = (price, quantity) => {
    return price * quantity;
};
const value1 = [10, 30];
const value2 = [18, 23];
console.log(calculatePrice(...value1));
console.log(calculatePrice(...value2));
