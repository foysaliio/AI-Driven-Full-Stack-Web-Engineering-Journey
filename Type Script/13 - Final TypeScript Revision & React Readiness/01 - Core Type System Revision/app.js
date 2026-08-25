"use strict";
// Type annotations explicitly define types.
let username = "Foysal";
let age = 22;
let isLearning = true;
// Type inference allows TypeScript
// to automatically determine a type.
let course = "TypeScript";
// Union types allow multiple possible types.
let userId = 101;
userId = "USER-101";
let currentStatus = "loading";
// unknown is safer than any.
let value = "TypeScript";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
console.log(username);
console.log(age);
console.log(isLearning);
console.log(course);
console.log(userId);
console.log(currentStatus);
