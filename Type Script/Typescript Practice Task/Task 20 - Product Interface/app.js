"use strict";
const phone = {
    title: "iPhone17",
    price: 24000,
    inStock: true,
};
const laptop = {
    title: "HP, Probook",
    price: 30000,
};
const productPrice = (item) => {
    return item.price;
};
console.log(productPrice(phone));
console.log(productPrice(laptop));
