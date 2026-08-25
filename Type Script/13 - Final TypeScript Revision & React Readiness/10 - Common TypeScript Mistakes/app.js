"use strict";
// Avoid using any when the type is uncertain.
let unsafeValue = "Foysal";
// any disables useful type checking.
console.log(unsafeValue.toUpperCase());
// Prefer unknown when validation is required.
let safeValue = "TypeScript";
if (typeof safeValue === "string") {
    console.log(safeValue.toUpperCase());
}
const user = {
    name: "Foysal",
};
// Better: narrow the value.
if (user) {
    console.log(user.name);
}
// Avoid unnecessarily repeating inferred types.
const username = "Foysal";
const age = 22;
const statusSuccess = "success";
console.log(username);
console.log(age);
console.log(statusSuccess);
