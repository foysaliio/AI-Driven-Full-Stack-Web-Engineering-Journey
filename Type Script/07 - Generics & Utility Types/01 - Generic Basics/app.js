"use strict";
// Generics allow us to create reusable and type-safe code.
// Without generics
const getValue = (value) => {
    return value;
};
console.log(getValue("Foysal"));
console.log(getValue(22));
console.log(getValue(true));
// With generics
const getValueGeneric = (value) => {
    return value;
};
const username = getValueGeneric("Foysal");
const age = getValueGeneric(22);
const isStudent = getValueGeneric(true);
console.log(username);
console.log(age);
console.log(isStudent);
