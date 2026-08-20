"use strict";
// We can create our own type guard functions.
function isAdmin(user) {
    return "permissions" in user;
}
function printUser(user) {
    if (isAdmin(user)) {
        console.log(`Admin: ${user.name}`);
        console.log(`Permissions: ${user.permissions.join(", ")}`);
    }
    else {
        console.log(`User: ${user.name}`);
        console.log(`Email: ${user.email}`);
    }
}
const admin = {
    name: "Foysal",
    permissions: ["read", "write"],
};
const user = {
    name: "Rahim",
    email: "rahim@example.com",
};
printUser(admin);
printUser(user);
