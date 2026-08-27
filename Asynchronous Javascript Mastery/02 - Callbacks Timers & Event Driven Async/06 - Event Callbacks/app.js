// Event listeners use callbacks.
// The callback runs when the event happens.

const button = document.querySelector("#btn");

button?.addEventListener("click", () => {
  console.log("Button clicked");
});

console.log("JavaScript continues without waiting for the click");

// Event object

button?.addEventListener("click", (event) => {
  console.log(event.type);

  console.log(event.target);
});

// Input event

const input = document.querySelector("#username");

input?.addEventListener("input", (event) => {
  console.log(event.target.value);
});

// Form submit event

const form = document.querySelector("#user-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Form submitted");
});

// Reusable event callback

function handleButtonClick() {
  console.log("Reusable click handler executed");
}

button?.addEventListener("click", handleButtonClick);
