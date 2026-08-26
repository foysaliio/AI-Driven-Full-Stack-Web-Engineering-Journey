// Blocking code prevents JavaScript
// from moving to the next task until it finishes.

console.log("Application started");

function blockForTwoSeconds() {
  const startTime = Date.now();

  while (Date.now() - startTime < 2000) {
    // JavaScript is busy here.
  }

  console.log("Blocking task finished");
}

blockForTwoSeconds();

console.log("Application continued");

// Output:
//
// Application started
//
// waits around 2 seconds
//
// Blocking task finished
// Application continued

// Another example

function heavyCalculation() {
  let total = 0;

  for (let i = 0; i < 1000000000; i++) {
    total += i;
  }

  return total;
}

console.log("Calculation started");

const result = heavyCalculation();

console.log(`Result: ${result}`);

console.log("Calculation completed");
