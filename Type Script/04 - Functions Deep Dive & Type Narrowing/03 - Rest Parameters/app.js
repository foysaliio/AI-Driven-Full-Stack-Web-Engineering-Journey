"use strict";
// Rest parameters collect multiple arguments into an array.
const calculateTotal = (...numbers) => {
    return numbers.reduce((accum, number) => {
        return accum + number;
    }, 0);
};
console.log(calculateTotal(10, 20, 30, 40, 50, 100));
console.log(calculateTotal(10, 40, 50, 90));
console.log(calculateTotal(10, 40, 50, 60, 90, 120, 350));
// Another example
const getNames = (...names) => {
    return names;
};
console.log(getNames("Foysal", "Robin", "Sadik", "Mim"));
