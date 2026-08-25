"use strict";
// Generics create reusable type-safe code.
const getFirstItem = (items) => {
    return items[0];
};
const firstName = getFirstItem(["Foysal", "Rahim"]);
const firstNumber = getFirstItem([10, 20]);
console.log(firstName);
console.log(firstNumber);
const response = {
    success: true,
    data: {
        id: 1,
        name: "Foysal",
    },
};
console.log(response);
const update = {
    name: "Rahim",
};
const preview = {
    id: 1,
    name: "Foysal",
};
const newUser = {
    name: "Karim",
};
const users = {
    first: {
        id: 1,
        name: "Foysal",
    },
};
console.log(update);
console.log(preview);
console.log(newUser);
console.log(users);
