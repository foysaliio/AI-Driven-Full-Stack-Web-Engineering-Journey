"use strict";
// Narrowing safely identifies a specific type.
const formatValue = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
};
console.log(formatValue("TypeScript"));
console.log(formatValue(95.567));
const handleState = (state) => {
    if (state.status === "success") {
        console.log(state.data);
    }
    else if (state.status === "error") {
        console.log(state.message);
    }
    else {
        console.log("Loading...");
    }
};
// Type assertion
const input = document.querySelector("#username");
console.log(input?.value);
