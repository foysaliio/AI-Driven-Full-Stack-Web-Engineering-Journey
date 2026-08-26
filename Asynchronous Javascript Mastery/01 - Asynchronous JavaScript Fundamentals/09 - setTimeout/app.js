// setTimeout schedules a function
// to run after at least a given delay.

console.log("Application started");

setTimeout(() => {
  console.log("Executed after about 2 seconds");
}, 2000);

console.log("Application continued");

// Passing data to a timeout callback

function greetUser(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(greetUser, 1000, "Foysal");

// Storing the timer ID

const timerId = setTimeout(() => {
  console.log("This message may not appear");
}, 3000);

console.log(`Timer ID: ${timerId}`);

// Canceling the timer

clearTimeout(timerId);

console.log("Timer cancelled");

// Practical example

function showNotification(message) {
  console.log(`Notification: ${message}`);
}

function scheduleNotification(message, delay) {
  return setTimeout(() => {
    showNotification(message);
  }, delay);
}

const notificationTimer = scheduleNotification("Your download is ready", 2000);

// We could cancel it if needed:
//
// clearTimeout(notificationTimer);
