"use strict";
// API data should have known structures.
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const users = await response.json();
        return {
            status: "success",
            data: users,
        };
    }
    catch (error) {
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
    const response = await fetchUsers();
    if (response.status === "success") {
        response.data.forEach((user) => {
            console.log(user.name);
        });
        return;
    }
    console.log(response.message);
}
showUsers();
