"use strict";
// Combining interfaces, unions, generics,
// type narrowing, and async TypeScript.
async function getUser() {
    return {
        status: "success",
        data: {
            id: 1,
            name: "Foysal",
        },
    };
}
async function showUser() {
    const response = await getUser();
    if (response.status === "success") {
        console.log(response.data.name);
    }
    else {
        console.log(response.message);
    }
}
showUser();
