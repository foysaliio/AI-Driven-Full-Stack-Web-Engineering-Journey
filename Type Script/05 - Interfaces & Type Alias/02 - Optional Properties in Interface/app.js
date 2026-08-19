"use strict";
// Interface properties can be optional using ?.
let user1 = {
    name: "Foysal",
    age: 22,
};
let user2 = {
    name: "Rahim",
    age: 25,
    email: "rahim@example.com",
};
console.log(user1);
console.log(user2);
// email can be added later
user1.email = "foysal@example.com";
console.log(user1.email);
