"use strict";
// Equality checks can also narrow union types.
function printValue(value) {
    if (value === "Foysal") {
        console.log("This is Foysal");
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value.toUpperCase());
    }
}
printValue("Foysal");
printValue(99.5);
printValue("Bangladesh");
// Another example
function checkStatus(status) {
    if (status === "success") {
        console.log("Operation successful");
    }
    else if (status === "error") {
        console.log("Something went wrong");
    }
    else {
        console.log("Loading...");
    }
}
checkStatus("success");
checkStatus("error");
checkStatus("loading");
