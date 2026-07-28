"use strict";

// ----- JavaScript runs code line by line, top to bottom (synchronous) -----
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// ----- setTimeout: run code after a delay -----
console.log("Before timeout");
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);
console.log("After timeout (runs immediately, does not wait)");

// ----- this proves JavaScript does not "pause" and wait -----
console.log("A");
setTimeout(function () {
  console.log("B (delayed)");
}, 1000);
console.log("C");
// Output order will be: A, C, B (delayed)

// ----- setInterval: run code repeatedly -----
let count = 0;
const intervalId = setInterval(function () {
  count++;
  console.log(`Interval run: ${count}`);

  if (count === 3) {
    clearInterval(intervalId); // stop repeating after 3 times
  }
}, 1000);

// ----- clearTimeout: cancel a scheduled timeout -----
const timeoutId = setTimeout(function () {
  console.log("You will not see this message");
}, 3000);
clearTimeout(timeoutId); // cancels the above before it runs

// ----- callback function: a function passed into another function -----
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(function () {
    const data = { id: 1, name: "Sample Data" };
    callback(data); // called once the "fetch" is done
  }, 1500);
}

fetchData(function (result) {
  console.log("Data received:", result);
});
