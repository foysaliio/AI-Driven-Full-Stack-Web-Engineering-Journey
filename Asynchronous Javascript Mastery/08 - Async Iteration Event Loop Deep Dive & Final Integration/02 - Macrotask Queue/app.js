// Timer callbacks are scheduled as regular tasks.
//
// These are often informally called macrotasks.

console.log("Start");

setTimeout(() => {
  console.log("Timer task");
}, 0);

console.log("End");

// Output:
//
// Start
// End
// Timer task

// Multiple timer tasks

console.log("A");

setTimeout(() => {
  console.log("Timer 1");
}, 0);

setTimeout(() => {
  console.log("Timer 2");
}, 0);

console.log("B");

// Output:
//
// A
// B
// Timer 1
// Timer 2

// A timer callback cannot interrupt
// currently running synchronous JavaScript.

setTimeout(() => {
  console.log("Timer callback");
}, 0);

for (let i = 0; i < 3; i++) {
  console.log(`Sync: ${i}`);
}

// Output:
//
// Sync: 0
// Sync: 1
// Sync: 2
// Timer callback
