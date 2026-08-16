"use strict";
// An array can contain multiple objects with the same structure.
let users = [
    {
        fullName: "Foysal Hossien",
        age: 23,
        isActive: true,
    },
    {
        fullName: "Tuhin Rahman",
        age: 21,
        isActive: true,
    },
    {
        fullName: "Asif Iqbal",
        age: 33,
        isActive: true,
    },
];
console.log(users);
console.log(users[0]);
console.log(users[1].fullName);
console.log(users[2].age);
