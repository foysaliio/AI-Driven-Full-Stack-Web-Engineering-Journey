"use strict";
// Interfaces can also use generics.
const userResponse = {
    success: true,
    data: {
        name: "Foysal",
        age: 22,
    },
    message: "User loaded successfully",
};
console.log(userResponse.data.name);
console.log(userResponse.data.age);
const usersResponse = {
    success: true,
    data: ["Foysal", "Rahim", "Karim"],
    total: 3,
};
console.log(usersResponse.data);
