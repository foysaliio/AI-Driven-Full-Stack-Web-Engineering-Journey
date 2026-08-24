"use strict";
// Type guards are checks that help TypeScript
// determine the specific type of a value.
function isString(value) {
    return typeof value === "string";
}
function printValue(value) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
    else {
        console.log("Value is not a string");
    }
}
printValue("Foysal");
printValue(100);
function isUser(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    return "name" in value && "age" in value;
}
const data = {
    name: "Foysal",
    age: 22,
};
if (isUser(data)) {
    console.log(data.name);
    console.log(data.age);
}
