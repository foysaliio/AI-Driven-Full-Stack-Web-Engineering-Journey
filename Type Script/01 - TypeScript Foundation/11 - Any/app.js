"use strict";
// The any type disables most TypeScript type checking.
// It can hold values of any type.
let value = 10;
value = "Hello";
value = true;
value = [];
console.log(value);
let country = "Bangladesh";
country = true;
country = 147570;
country = [
    "Dhaka,",
    139,
    false,
    { isDirty: false, countryProblem: "Traffic problem" },
];
country = null;
country = [];
// Avoid using any unless it is actually necessary.
