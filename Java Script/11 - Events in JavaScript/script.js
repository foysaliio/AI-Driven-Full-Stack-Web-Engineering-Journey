"use strict";

const output = document.getElementById("output");

// ----- click event -----
const button = document.getElementById("clickBtn");
button.addEventListener("click", function () {
  output.textContent = "Button was clicked!";
});

// ----- the event object -----
button.addEventListener("click", function (event) {
  console.log(event.type);   // "click"
  console.log(event.target); // the exact element that was clicked
});

// ----- input event (fires every time the value changes) -----
const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("input", function (event) {
  output.textContent = `You typed: ${event.target.value}`;
});

// ----- keydown event -----
nameInput.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
});

// ----- mouseover / mouseout events -----
button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "lightblue";
});
button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "";
});

// ----- event delegation: one listener on the parent handles all children -----
const itemList = document.getElementById("itemList");
itemList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(`You clicked: ${event.target.textContent}`);
    event.target.style.textDecoration = "line-through";
  }
});

// ----- removing an event listener -----
function sayHello() {
  console.log("Hello!");
}
button.addEventListener("mousedown", sayHello);
// button.removeEventListener("mousedown", sayHello); // uncomment to stop listening
