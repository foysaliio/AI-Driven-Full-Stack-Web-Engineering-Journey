"use strict";
// Default parameters provide a fallback value.
const greet = (name, country = "Bangladesh") => {
    return `${name} is from ${country}`;
};
console.log(greet("Foysal"));
console.log(greet("John", "USA"));
// Another example
const calculatePrice = (price, quantity = 1) => {
    return price * quantity;
};
console.log(calculatePrice(500));
console.log(calculatePrice(500, 3));
