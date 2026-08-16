"use strict";
const loginStatus = (username, password) => {
    if (username === "foysaliio" && password === "foysal123") {
        return "Login successful";
    }
    else {
        return "Invalid credentials";
    }
};
console.log(loginStatus("foysaliio", "foysal123"));
console.log(loginStatus("foysaliio", "123"));
console.log(loginStatus("foyiio", "foysal123"));
