// This example combines:
// synchronous code
// Promise microtasks
// queueMicrotask
// async/await
// timers

console.log("1 - Script Start");

setTimeout(() => {
  console.log("2 - Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("3 - Promise");
});

queueMicrotask(() => {
  console.log("4 - queueMicrotask");
});

async function run() {
  console.log("5 - Async Start");

  await Promise.resolve();

  console.log("6 - After Await");
}

run();

console.log("7 - Script End");

// Output:
//
// 1 - Script Start
// 5 - Async Start
// 7 - Script End
// 3 - Promise
// 4 - queueMicrotask
// 6 - After Await
// 2 - Timer

// Why?
//
// 1. Synchronous script runs first.
//
// 2. Promise.then schedules a microtask.
//
// 3. queueMicrotask schedules another microtask.
//
// 4. run() begins synchronously.
//
// 5. Code after await becomes a microtask continuation.
//
// 6. Synchronous script finishes.
//
// 7. Microtasks run in queued order.
//
// 8. Timer task runs afterward.
