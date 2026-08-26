// Understanding execution order is one of
// the most important async JavaScript skills.

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

// Output:
//
// 1
// 3
// 2

// More detailed example

console.log("A");

function firstTask() {
  console.log("B");

  setTimeout(() => {
    console.log("C");
  }, 0);

  console.log("D");
}

firstTask();

console.log("E");

// Output:
//
// A
// B
// D
// E
// C

// Practical example

console.log("Order received");

setTimeout(() => {
  console.log("Food prepared");
}, 2000);

console.log("Payment completed");

setTimeout(() => {
  console.log("Receipt generated");
}, 0);

console.log("Cashier ready for next customer");

// Output:
//
// Order received
// Payment completed
// Cashier ready for next customer
// Receipt generated
//
// Around 2 seconds later:
//
// Food prepared

// Try predicting the output before running this.

console.log("Start");

setTimeout(() => {
  console.log("Timer One");
}, 1000);

setTimeout(() => {
  console.log("Timer Two");
}, 0);

console.log("Middle");

function normalFunction() {
  console.log("Normal Function");
}

normalFunction();

console.log("End");

// Output:
//
// Start
// Middle
// Normal Function
// End
// Timer Two
// Timer One
