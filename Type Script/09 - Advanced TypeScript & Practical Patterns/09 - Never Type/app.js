"use strict";
// never represents values that never occur.
// A function that always throws an error
// can have a never return type.
function throwError(message) {
    throw new Error(message);
}
// throwError("Something went wrong");
// Another example
function infiniteLoop() {
    while (true) {
        console.log("Running...");
    }
}
// infiniteLoop();
