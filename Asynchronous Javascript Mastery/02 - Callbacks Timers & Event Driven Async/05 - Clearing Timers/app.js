// setTimeout returns a timer ID.
// We can use that ID to cancel the timer.

const timeoutId = setTimeout(() => {
  console.log("This message should not appear");
}, 3000);

console.log(`Timer ID: ${timeoutId}`);

clearTimeout(timeoutId);

console.log("Timeout cancelled");

// Practical example

const scheduleLogout = () => {
  return setTimeout(() => {
    console.log("User logged out due to inactivity");
  }, 5000);
};

const logoutTimer = scheduleLogout();

// Imagine the user becomes active again.

setTimeout(() => {
  clearTimeout(logoutTimer);

  console.log("Logout cancelled because user is active");
}, 2000);

// Clearing an interval

let seconds = 0;

const timer = setInterval(() => {
  seconds++;
  console.log(`${seconds} second(s)`);

  if (seconds === 5) {
    clearInterval(timer);

    console.log("Timer stopped");
  }
}, 1000);
