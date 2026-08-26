// JavaScript itself has a Call Stack,
// but the runtime environment provides
// additional features for asynchronous operations.

// Browser Runtime:
//
// JavaScript Engine
// └── Call Stack
//
// Browser
// ├── Timers
// ├── DOM Events
// ├── Fetch / Network
// └── Other Web APIs
//
// Queues
// └── Callback Queue
//
// Event Loop
// └── Coordinates the Call Stack and queues

console.log("Javascript started");

setTimeout(() => {
  console.log("Timer callback");
}, 1000);

console.log("Javascript continued");

// In this example:
//
// 1. console.log runs in JavaScript.
//
// 2. setTimeout asks the browser timer system
//    to handle the timer.
//
// 3. JavaScript continues immediately.
//
// 4. After the timer finishes,
//    the callback becomes ready.
//
// 5. The Event Loop eventually allows
//    the callback to enter the Call Stack.

