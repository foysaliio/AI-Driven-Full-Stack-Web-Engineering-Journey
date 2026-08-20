"use strict";
// keyof creates a union of an object's property names.
// UserKeys becomes:
// "name" | "age" | "email"
let key1 = "name";
let key2 = "age";
let key3 = "email";
console.log(key1);
console.log(key2);
console.log(key3);
// This will produce a TypeScript error:
// let key4: UserKeys = "address";
