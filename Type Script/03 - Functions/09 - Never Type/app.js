"use strict";
// The never type represents a value that never occurs.
// Example: a function that always throws an error.
function throwError(message) {
    throw new Error(message);
}
// Example: a function that never finishes normally.
function infiniteLoop() {
    while (true) {
        console.log("Running...");
    }
}
