// queueMicrotask schedules a function
// directly into the microtask queue.

console.log("Start");

queueMicrotask(() => {
  console.log("Microtask");
});

console.log("End");

// Output:
//
// Start
// End
// Microtask

// Compare queueMicrotask, Promise, and setTimeout.

console.log("A");

setTimeout(() => {
  console.log("Timer");
}, 0);

queueMicrotask(() => {
  console.log("queueMicrotask");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("B");

// Output:
//
// A
// B
// queueMicrotask
// Promise
// Timer

// The order between microtasks follows
// the order in which they were queued.

queueMicrotask(() => {
  console.log("Microtask 1");
});

Promise.resolve().then(() => {
  console.log("Microtask 2");
});

queueMicrotask(() => {
  console.log("Microtask 3");
});
