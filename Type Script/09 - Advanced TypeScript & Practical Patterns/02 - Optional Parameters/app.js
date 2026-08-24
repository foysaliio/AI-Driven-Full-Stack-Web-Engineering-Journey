"use strict";
// Optional parameters are defined using ?.
const greetUser = (name, age) => {
    if (age) {
        return `Hello ${name}, you are ${age} years old.`;
    }
    return `Hello ${name}`;
};
console.log(greetUser("Foysal"));
console.log(greetUser("Foysal", 23));
// Another example
function createUser(name, email) {
    console.log(name);
    console.log(email);
}
createUser("Foysal");
createUser("Foysal", "foysal@example.com");
