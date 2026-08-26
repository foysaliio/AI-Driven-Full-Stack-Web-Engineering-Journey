// Asynchronous JavaScript allows certain tasks
// to continue outside the normal synchronous flow.

console.log("Start");

setTimeout(() => {
  console.log("Asynce task completed");
}, 2000);

console.log("End");

// Output:
//
// Start
// End
//
// waits around 2 seconds
//
// Async task completed

// Another example

console.log("Oder received");

setTimeout(() => {
  console.log("Food preparation completed");
}, 3000);

console.log("Cashier can take another order");

// Another asynchronous example using an event

// const button = document.querySelector("#btn");
// button?.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// console.log("Javascript does not wait for the click");
