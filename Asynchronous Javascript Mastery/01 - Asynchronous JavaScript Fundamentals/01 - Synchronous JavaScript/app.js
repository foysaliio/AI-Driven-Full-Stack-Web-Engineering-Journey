// JavaScript normally executes synchronous code
// one line at a time from top to bottom.

console.log("Step 1: Start");

console.log("Step 2: Processing");

console.log("Step 3: Finish");

// Output:
// Step 1: Start
// Step 2: Processing
// Step 3: Finish

// Another example

function prepareFood() {
  console.log("Preparing food");
}

function serveFood() {
  console.log("Serving food");
}

console.log("Customer ordered");

prepareFood();
serveFood();
console.log("Order completed");

// Output:
// Customer ordered
// Preparing food
// Serving food
// Order completed

// JavaScript waits for the current function
// to finish before executing the next line.

function firstTask() {
  console.log("First task started");

  console.log("First task finished");
}

function secondTask() {
  console.log("Second task started");

  console.log("Second task finished");
}

firstTask();

secondTask();
