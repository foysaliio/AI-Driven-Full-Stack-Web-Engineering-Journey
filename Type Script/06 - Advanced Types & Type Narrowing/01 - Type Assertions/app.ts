// Type assertion tells TypeScript how we want to treat a value.

let value: unknown = "Foysal";

let username = value as string;

console.log(username.toUpperCase());

// Another example

let input = document.querySelector("#username") as HTMLInputElement;

input.value = "Foysal";

console.log(input.value);

// Alternative syntax

let ageValue: unknown = 22;

let age = <number>ageValue;

console.log(age);
