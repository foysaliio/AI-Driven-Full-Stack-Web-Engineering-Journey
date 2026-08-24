"use strict";
// Browser events have their own types.
const handleClick = (event) => {
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
};
document.addEventListener("click", handleClick);
// Keyboard event
const handleKeyDown = (event) => {
    console.log(event.key);
};
document.addEventListener("keydown", handleKeyDown);
