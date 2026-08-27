// setTimeout executes a callback once after a delay.

const showMessage = () => {
  console.log("Timeout completed");
};

setTimeout(showMessage, 2000);

// Passing an anonymous callback

setTimeout(() => {
  console.log("Anonymous timer callback");
}, 1000);

// Passing data through closure

const username = "Foysal";

setTimeout(() => {
  console.log(`Welcome, ${username}`);
}, 1500);

// Passing arguments directly to setTimeout

const greet = (name, course) => {
  console.log(`Hello ${name}, welcome to ${course}`);
};

setTimeout(greet, 2000, "Foysal", "Asynchronous JavaScript");

// setInterval repeatedly executes a callback.

let count = 1;

const intervalId = setInterval(() => {
  console.log(`Interval execution: ${count}`);

  count++;

  if (count > 10) {
    clearInterval(intervalId);

    console.log("Interval finished");
  }
}, 1000);
