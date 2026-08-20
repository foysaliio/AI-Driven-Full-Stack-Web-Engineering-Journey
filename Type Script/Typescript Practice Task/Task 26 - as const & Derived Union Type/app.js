"use strict";
const appConfig = {
    theme: "dark",
    version: 2,
};
console.log(appConfig.theme);
console.log(appConfig.version);
// Error: Cannot assign to 'theme' because it is a read-only property.
// appConfig.theme = "light";
const colors = ["red", "green", "blue"];
console.log(typeof colors);
const color1 = "red";
const color2 = "green";
const color3 = "blue";
console.log(color1);
console.log(color2);
console.log(color3);
