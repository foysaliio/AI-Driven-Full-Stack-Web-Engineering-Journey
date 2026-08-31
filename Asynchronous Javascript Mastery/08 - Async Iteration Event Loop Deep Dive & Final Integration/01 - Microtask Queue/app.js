// Microtasks have higher priority than regular task callbacks.
//
// Promise callbacks and queueMicrotask callbacks
// are commonly scheduled as microtasks.

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise microtask");
});

console.log("End");

// Output:
//
// Start
// End
// Promise microtask

// Another example

console.log("A");

Promise.resolve()
  .then(() => {
    console.log("B");
  })
  .then(() => {
    console.log("C");
  });

console.log("D");

// Output:
//
// A
// D
// B
// C

// Multiple microtasks

console.log("Program started");

Promise.resolve().then(() => {
  console.log("Microtask 1");
});

Promise.resolve().then(() => {
  console.log("Microtask 2");
});

Promise.resolve().then(() => {
  console.log("Microtask 3");
});

console.log("Program finished");

// Output:
//
// Program started
// Program finished
// Microtask 1
// Microtask 2
// Microtask 3
