"use strict";
// Async functions can have typed return values.
async function getUser() {
    return {
        id: 1,
        name: "Foysal",
    };
}
async function showUser() {
    const user = await getUser();
    console.log(user.id);
    console.log(user.name);
}
showUser();
