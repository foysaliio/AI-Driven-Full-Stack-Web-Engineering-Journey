"use strict";
// Promise can also be explicitly typed.
function getProduct() {
    return Promise.resolve({
        id: 101,
        name: "Laptop",
        price: 75000,
    });
}
async function showProduct() {
    const product = await getProduct();
    console.log(product.name);
    console.log(product.price);
}
showProduct();
// Array response
function getProducts() {
    return Promise.resolve([
        {
            id: 1,
            name: "Laptop",
            price: 75000,
        },
        {
            id: 2,
            name: "Phone",
            price: 35000,
        },
    ]);
}
async function showProducts() {
    const products = await getProducts();
    products.forEach((product) => {
        console.log(product.name);
    });
}
showProducts();
