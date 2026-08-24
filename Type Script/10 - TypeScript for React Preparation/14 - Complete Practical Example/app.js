"use strict";
// A practical example combining important TypeScript concepts.
let requestStatus = "idle";
async function getUsers() {
    requestStatus = "loading";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const users = await response.json();
        requestStatus = "success";
        return {
            status: "success",
            data: users,
        };
    }
    catch (error) {
        requestStatus = "error";
        if (error instanceof Error) {
            return {
                status: "error",
                message: error.message,
            };
        }
        return {
            status: "error",
            message: "Unknown error",
        };
    }
}
async function showUsers() {
    const response = await getUsers();
    if (response.status === "success") {
        response.data.forEach((user) => {
            console.log(user.name);
        });
    }
    else {
        console.log(response.message);
    }
    console.log(`Status: ${requestStatus}`);
}
showUsers();
