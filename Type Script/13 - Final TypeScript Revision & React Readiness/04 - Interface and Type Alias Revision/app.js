"use strict";
// Interfaces are useful for object structures.
const admin = {
    id: 1,
    name: "Foysal",
    email: "foysal@example.com",
    permissions: ["read", "write"],
};
const statusSuccess = "success";
const locationBD = [23.81, 90.41];
const formatName = (value) => {
    return value.toUpperCase();
};
console.log(admin);
console.log(statusSuccess);
console.log(locationBD);
console.log(formatName("Foysal"));
