// When a timer callback becomes ready,
// it waits in a task queue until
// JavaScript can execute it.

console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

console.log("End");

// Output:
//
// Start
// End
// Timer callback

// Even with 0 milliseconds,
// the callback does not run immediately.

function mainTask() {
  console.log("Main task started");

  setTimeout(() => {
    console.log("Queued callback executed");
  }, 0);
  console.log("Main task finished");
}

mainTask();

// Simplified flow:
//
// Call Stack:
//
// mainTask()
//
// Timer finishes:
//
// Callback Queue:
// [timer callback]
//
// mainTask must finish first.
//
// Then the callback can execute.
