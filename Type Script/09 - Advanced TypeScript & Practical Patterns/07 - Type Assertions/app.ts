// Type assertion tells TypeScript
// how we want to treat a value.

let value: unknown = "Foysal";

let username = value as string;

console.log(username.toUpperCase());

// Another example

// const input = document.querySelector("#username") as HTMLInputElement;

// input.value = "Foysal";

// Alternative syntax

let age = <number>22;

console.log(age);
