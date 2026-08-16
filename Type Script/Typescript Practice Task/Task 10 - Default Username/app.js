"use strict";
const userName = (userName) => {
    if (typeof userName === "string") {
        return userName;
    }
    else {
        return "Guest";
    }
};
console.log(userName("Foysal"));
console.log(userName(undefined));
