// The Call Stack keeps track of
// which functions are currently executing.

function third() {
  console.log("Inside third");
}

function second() {
  console.log("Inside second");

  third();
}

function first() {
  console.log("Inside first");

  second();
}

first();

// Simplified Call Stack flow:
//
// first()
//
// first()
// second()
//
// first()
// second()
// third()
//
// third() finishes
//
// second() finishes
//
// first() finishes

// Another example

function calculateTotal(price, quantity) {
  return multiply(price, quantity);
}

function multiply(a, b) {
  return a * b;
}

const total = calculateTotal(500, 3);
console.log(total);
