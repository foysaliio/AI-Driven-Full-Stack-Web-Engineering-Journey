"use strict";
// This example combines the major TypeScript concepts
// learned throughout the journey.
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        return {
            status: "success",
            data,
        };
    }
    catch (error) {
        return {
            status: "error",
            message: error instanceof Error ? error.message : "Unknown error",
        };
    }
}
function getPreview(user) {
    return {
        id: user.id,
        name: user.name,
        role: user.role,
    };
}
function handleState(state) {
    switch (state.status) {
        case "idle":
            console.log("Waiting...");
            break;
        case "loading":
            console.log("Loading...");
            break;
        case "success":
            state.data.forEach((user) => {
                console.log(getPreview(user));
            });
            break;
        case "error":
            console.log(state.message);
            break;
    }
}
console.log("TypeScript journey completed");
