"use strict";
// Type assertion tells TypeScript how we want to treat a value.
let value = "Foysal";
let username = value;
console.log(username.toUpperCase());
// Another example
/**
let input = document.querySelector("#username") as HTMLInputElement;

input.value = "Foysal";

console.log(input.value);
**/
// Alternative syntax
let ageValue = 22;
let age = ageValue;
console.log(age);
