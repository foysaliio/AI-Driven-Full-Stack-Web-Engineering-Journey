"use strict";
// An interface can define the structure of objects
// that are stored inside an array.
let users = [
    {
        name: "Foysal",
        age: 22,
    },
    {
        name: "Rahim",
        age: 25,
    },
    {
        name: "Karim",
        age: 28,
    },
];
console.log(users);
console.log(users[0].name);
console.log(users[1].age);
// Adding another valid user
users.push({
    name: "Hasan",
    age: 30,
});
console.log(users);
