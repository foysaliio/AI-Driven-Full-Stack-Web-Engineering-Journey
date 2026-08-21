"use strict";
// A function can use more than one generic type.
const pair = (value1, value2) => {
    return [value1, value2];
};
const userData = pair("Foysal", 22);
console.log(userData);
const productData = pair("Laptop", 75000);
console.log(productData);
const mixedData = pair(true, "Active");
console.log(mixedData);
// Another example
const merge = (firstValue, secondValue) => {
    return {
        ...firstValue,
        ...secondValue,
    };
};
const user = merge({
    name: "Foysal",
}, {
    age: 23,
});
console.log(user);
