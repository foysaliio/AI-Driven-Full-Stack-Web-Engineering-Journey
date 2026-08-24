"use strict";
// A type can describe data passed into a function.
const showUser = ({ name, age, isActive = false }) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Active: ${isActive}`);
};
showUser({
    name: "Foysal",
    age: 23,
});
showUser({
    name: "Sadik",
    age: 20,
    isActive: true,
});
