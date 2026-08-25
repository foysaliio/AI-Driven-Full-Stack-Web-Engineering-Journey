"use strict";
// Awaited extracts the resolved value type
// from a Promise.
const user = {
    id: 1,
    name: "Foysal",
};
console.log(user);
// Another example
async function getProduct() {
    return {
        id: 101,
        name: "Laptop",
        price: 75000,
    };
}
const product = {
    id: 102,
    name: "Phone",
    price: 35000,
};
console.log(product);
