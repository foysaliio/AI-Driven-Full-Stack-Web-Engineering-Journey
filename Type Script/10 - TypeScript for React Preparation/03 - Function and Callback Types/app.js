"use strict";
// Functions and callbacks can have explicit types.
const handleClick = () => {
    console.log("Button clicked");
};
handleClick();
const handleSelect = (id) => {
    console.log(`Selected ID: ${id}`);
};
handleSelect(101);
// Passing a callback to another function
// const ranAction = (action: ClickHandler): void => {
//   action(); // Another way
// };
const ranAction = (action) => {
    action();
};
ranAction(handleClick);
