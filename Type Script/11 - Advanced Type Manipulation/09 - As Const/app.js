"use strict";
// as const keeps values as exact literal types
// and makes properties readonly.
const user = {
    role: "admin",
    active: true,
};
// TypeScript keeps:
// role as "admin"
// active as true
console.log(user.role);
console.log(user.active);
// This will produce a TypeScript error:
// user.role = "user";
// Practical array example
const statuses = ["idle", "loading", "success", "error"];
let currentStatus = "loading";
console.log(currentStatus);
// This will produce a TypeScript error:
// currentStatus = "completed";
