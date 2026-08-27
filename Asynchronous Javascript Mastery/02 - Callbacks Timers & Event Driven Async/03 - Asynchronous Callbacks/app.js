// An asynchronous callback executes later
// after an asynchronous operation becomes ready.

console.log("Start");

setTimeout(() => {
  console.log("Async callback executed");
}, 2000);

console.log("End");

// Output:
//
// Start
// End
// Async callback executed

// Compare synchronous and asynchronous callbacks.

function syncCallback(callback) {
  console.log("Before synchronous callback");

  callback();

  console.log("After synchronous callback");
}

syncCallback(() => {
  console.log("Synchronous callback");
});

// Async version

function asyncCallback(callback) {
  console.log("Before asynchronous operation");

  setTimeout(() => {
    callback();
  }, 1000);

  console.log("Function finished");
}

asyncCallback(() => {
  console.log("Asynchronous callback");
});

// Output:
//
// Before asynchronous operation
// Function finished
// Asynchronous callback
