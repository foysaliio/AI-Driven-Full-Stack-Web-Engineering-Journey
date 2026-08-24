// DOM elements can be typed using specific element types.

const usernameInput = document.querySelector("#username") as HTMLInputElement;

const form = document.querySelector("#user-form") as HTMLFormElement;

function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();

  console.log(usernameInput.value);
}

form.addEventListener("submit", handleSubmit);
