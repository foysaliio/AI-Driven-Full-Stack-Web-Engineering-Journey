// setInterval repeatedly runs a callback
// after a given interval.

let count = 1;

const intervalId = setInterval(() => {
  console.log(`Count: ${count}`);

  count++;
}, 1000);

// Stop the interval after 5.5 seconds.

setTimeout(() => {
  clearInterval(intervalId);

  console.log("Interval stopped");
}, 5500);

// Another practical example

let remainingSeconds = 5;

const countdown = setInterval(() => {
  console.log(`${remainingSeconds} seconds remaining`);

  remainingSeconds--;

  if (remainingSeconds === 0) {
    clearInterval(countdown);

    console.log("Time is over");
  }
}, 1000);

// Simulating repeated server checks

let checkCount = 0;

const statusChecker = setInterval(() => {
  checkCount++;

  console.log(`Checking server status: ${checkCount}`);

  if (checkCount === 3) {
    clearInterval(statusChecker);

    console.log("Server checking stopped");
  }
}, 2000);
