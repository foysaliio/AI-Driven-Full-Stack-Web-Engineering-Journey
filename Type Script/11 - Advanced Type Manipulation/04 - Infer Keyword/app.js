"use strict";
// infer allows TypeScript to capture a type
// from inside another type.
const username = "Foysal";
const age = 22;
const isActive = true;
console.log(username);
console.log(age);
console.log(isActive);
function getUser() {
    return {
        name: "Foysal",
        age: 22,
    };
}
const user = {
    name: "Sadik",
    age: 24,
};
console.log(user);
