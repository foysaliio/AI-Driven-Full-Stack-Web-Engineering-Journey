"use strict";
// API response structures should be typed.
const response = {
    success: true,
    data: {
        id: 1,
        name: "Foysal",
        email: "foysal77@gmail.com",
    },
};
console.log(response.data.name);
const usersResponse = {
    success: true,
    data: [
        {
            id: 1,
            name: "Foysal",
            email: "foysal77@gmail.com",
        },
        {
            id: 2,
            name: "Sadik",
            email: "sadik77@gmail.com",
        },
    ],
};
console.log(usersResponse.data);
