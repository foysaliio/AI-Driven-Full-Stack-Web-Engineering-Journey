"use strict";
const getLastElement = (values) => {
    return values[values.length - 1];
};
console.log(getLastElement([10, 20, 30]));
console.log(getLastElement(["a", "b", "c"]));
