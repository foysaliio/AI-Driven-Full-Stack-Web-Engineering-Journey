"use strict";
const userData = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true,
};
console.log(`Name: ${userData.name}`);
console.log(`Age: ${userData.age}`);
console.log(`Email: ${userData.email}`);
console.log(`Skills: ${userData.skills.join(", ")}`);
console.log(`Active: ${userData.active}`);
// console.log(`${["HTML", "CSS", "TypeScript"]}`);
// Array: toString() → converts the elements into a comma-separated string → "HTML,CSS,TypeScript"
// console.log(`${{ name: "foysal", age: 30 }}`);
// Object: toString() → returns "[object Object]" by default.
