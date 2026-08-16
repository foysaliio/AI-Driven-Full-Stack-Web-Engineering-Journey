"use strict";
// Union types can be used inside arrays.
let values = ["Foysal", 23, "Bangladesh", 101];
console.log(values);
// Both string and number values are allowed.
values.push("Dhaka");
values.push(999);
// This will produce a TypeScript error:
// values.push(true);
console.log(values);
