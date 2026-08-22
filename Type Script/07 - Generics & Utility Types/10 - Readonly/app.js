"use strict";
// Readonly makes all properties readonly.
const user = {
    name: "Foysal",
    age: 22,
};
console.log(user);
// These will produce TypeScript errors:
// user.name = "Rahim";
// user.age = 25;
