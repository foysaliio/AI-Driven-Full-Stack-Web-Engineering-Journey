"use strict";
// Errors should be narrowed before accessing specific properties.
function handleError(error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log("Unknown error");
    }
}
try {
    throw new Error("Something went wrong");
}
catch (error) {
    handleError(error);
}
// Another example
try {
    throw "Server unavailable";
}
catch (error) {
    if (typeof error === "string") {
        console.log(error.toUpperCase());
    }
}
