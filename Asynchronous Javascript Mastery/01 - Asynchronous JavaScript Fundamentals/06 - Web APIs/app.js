// Web APIs are features provided by the browser.
// They are not the JavaScript Call Stack itself.

// Timer Web API

console.log("Timer started");

setTimeout(() => {
  console.log("Timer completed");
}, 2000);

console.log("JavaScript continued");

// DOM Event Web API

// const button = document.querySelector("#btn");
// button?.addEventListener("click", () => {
//   console.log("User clicked the button");
// });

// Fetch also uses browser networking capabilities.

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((user) => {
    console.log(user);
  });

console.log("Network request started");

// The browser can manage things like:
//
// Timer
// DOM Event
// Network Request
//
// while JavaScript continues executing other code.
