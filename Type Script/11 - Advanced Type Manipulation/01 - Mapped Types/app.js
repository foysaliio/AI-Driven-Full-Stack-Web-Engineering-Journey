"use strict";
// Mapped types create a new type
// by transforming every property of an existing type.
const user = {
    name: "Foysal",
};
console.log(user);
const userFields = {
    name: true,
    age: true,
    email: false,
};
console.log(userFields);
