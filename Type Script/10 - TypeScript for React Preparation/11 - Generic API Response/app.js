"use strict";
// Generics make API response types reusable.
const userResponse = {
    success: true,
    data: {
        id: 1,
        name: "Foysal",
    },
    message: "User loaded successfully",
};
const productResponse = {
    success: true,
    data: {
        id: 101,
        name: "Laptop",
        price: 75000,
    },
    message: "Product loaded successfully",
};
const usersResponse = {
    success: true,
    data: [
        {
            id: 1,
            name: "Foysal",
        },
        {
            id: 2,
            name: "Sadik",
        },
    ],
    message: "Users loaded successfully",
};
console.log(userResponse.data);
console.log(productResponse.data);
console.log(usersResponse.data);
