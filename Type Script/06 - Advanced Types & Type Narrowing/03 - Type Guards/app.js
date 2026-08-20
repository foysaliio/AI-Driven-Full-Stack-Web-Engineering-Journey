"use strict";
// Type guards help TypeScript determine the type of a value.
function printValue(value) {
    if (typeof value === "string") {
        console.log(`String: ${value.toUpperCase()}`);
    }
    else {
        console.log(`Number: ${value.toFixed(2)}`);
    }
}
printValue("Foysal");
printValue(95.5);
// Array type guard
function printItems(items) {
    if (Array.isArray(items)) {
        console.log(items.join(", "));
    }
    else {
        console.log(items.toUpperCase());
    }
}
printItems(["HTML", "CSS", "TypeScript"]);
printItems("React");
