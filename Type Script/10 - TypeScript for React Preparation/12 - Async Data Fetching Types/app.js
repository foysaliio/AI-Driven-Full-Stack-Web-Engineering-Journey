"use strict";
// Async functions return Promises.
async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }
    const data = await response.json();
    return data;
}
async function showUser() {
    try {
        const user = await fetchUser();
        console.log(user.name);
        console.log(user.email);
    }
    catch (error) {
        console.log(error);
    }
}
showUser();
