// A tuple is an array with a fixed number of elements
// where each position has a specific type.

let user: [string, number] = ["Foysal", 23];
console.log(user);
console.log(user[0]);
console.log(user[1]);

// The first value must be a string.
// The second value must be a number.

// This is valid:

let product: [string, number, boolean] = ["Laptop", 75000, true];
console.log(product);
console.log(product[0]);
console.log(product[1]);
console.log(product[2]);

// This will produce a TypeScript error:

// let invalidUser: [string, number] = [22, "Foysal"];
