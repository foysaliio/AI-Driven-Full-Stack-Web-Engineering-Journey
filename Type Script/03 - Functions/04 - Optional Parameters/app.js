"use strict";
// The ? symbol makes a function parameter optional.
const greet = (name, age) => {
    console.log(`Hello, ${name}`);
    if (age !== undefined) {
        console.log(`Age: ${age}`);
    }
};
greet("Foysal");
greet("Foysal", 23);
// This is also valid
greet("Rahim", 25);
