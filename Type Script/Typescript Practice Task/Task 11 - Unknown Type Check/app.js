"use strict";
const typeChecker = (value) => {
    if (typeof value === "string") {
        return value;
    }
};
console.log(typeChecker("Hello"));
console.log(typeChecker("Foysal"));
console.log(typeChecker(true));
console.log(typeChecker(1));
console.log(typeChecker({}));
console.log(typeChecker([]));
console.log(typeChecker(undefined));
console.log(typeChecker(null));
