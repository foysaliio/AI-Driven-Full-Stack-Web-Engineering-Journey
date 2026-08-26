// The Event Loop checks whether
// the Call Stack is empty.
//
// When the stack is empty,
// ready callbacks can be moved
// from the queue to the Call Stack.

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Third");

// Output:
//
// First
// Third
// Second

// Another example

function synchronousTask() {
  console.log("Synchronous task");
}

function asynchronousTask() {
  setTimeout(() => {
    console.log("Asynchronous task");
  }, 0);
}

console.log("Program started");

asynchronousTask();
synchronousTask();

console.log("Program finished");

// Output:
//
// Program started
// Synchronous task
// Program finished
// Asynchronous task
