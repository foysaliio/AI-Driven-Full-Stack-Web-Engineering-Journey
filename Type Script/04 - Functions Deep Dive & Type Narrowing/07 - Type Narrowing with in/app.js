"use strict";
// The "in" operator can narrow object types based on the existence of a property.
const printUserInfo = (user) => {
    console.log(`Name: ${user.name}`);
    if ("permissions" in user) {
        console.log(`Permissions: ${user.permissions.join(", ")}`);
    }
    else {
        console.log(`Email: ${user.email}`);
    }
};
const admin = {
    name: "Foysal Hossien",
    permissions: ["read", "write"],
};
const normalUser = {
    name: "Robin",
    email: "robin@gmail.com",
};
printUserInfo(admin);
printUserInfo(normalUser);
