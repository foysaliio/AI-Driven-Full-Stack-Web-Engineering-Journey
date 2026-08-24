"use strict";
// Interfaces can define reusable object structures.
const user = {
    id: 1,
    name: "Foysal",
    email: "foysal77@gmail.com",
    isActive: true,
};
const printUser = (user) => {
    console.log(user.email);
    console.log(user.email);
};
printUser(user);
