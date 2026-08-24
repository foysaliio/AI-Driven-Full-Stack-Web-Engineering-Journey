"use strict";
// DOM elements can be typed using specific element types.
const usernameInput = document.querySelector("#username");
const form = document.querySelector("#user-form");
function handleSubmit(event) {
    event.preventDefault();
    console.log(usernameInput.value);
}
form.addEventListener("submit", handleSubmit);
