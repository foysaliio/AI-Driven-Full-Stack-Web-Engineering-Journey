"use strict";
// Function parameters and return values can be typed.
const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
// Optional parameter
const greet = (name, age) => {
    if (age !== undefined) {
        return `${name} is ${age} years old`;
    }
    return `Hello ${name}`;
};
// Default parameter
const calculatePrice = (price, quantity = 1) => {
    return price * quantity;
};
const handleClick = (id) => {
    console.log(`Clicked user: ${id}`);
};
// Callback
const runAction = (action) => {
    action();
};
console.log(add(10, 20));
console.log(greet("Foysal", 22));
console.log(calculatePrice(500, 3));
handleClick(101);
runAction(() => {
    console.log("Action completed");
});
