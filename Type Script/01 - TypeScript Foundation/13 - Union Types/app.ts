// A union type allows a value to have more than one possible type.

// Example:

let id: string | number = 101;
console.log(id);

id = "user-101";
console.log(id);

let isActive: boolean | number = 1;

console.log(isActive);

isActive = true;

console.log(isActive);
// Both values are valid because id can be a string or a number.
