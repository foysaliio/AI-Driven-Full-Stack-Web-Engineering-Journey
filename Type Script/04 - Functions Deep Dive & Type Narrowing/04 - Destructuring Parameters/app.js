"use strict";
// Object destructuring can be used directly in function parameters.
const printUser = ({ name, age, isStudent, }) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Student: ${isStudent}`);
};
const user = {
    name: "Foysal",
    age: 22,
    isStudent: true,
};
printUser(user);
// Another example
const printProduct = ({ name, price, }) => {
    console.log(`Product: ${name}`);
    console.log(`Price: ${price}`);
};
printProduct({
    name: "Laptop",
    price: 75000,
});
