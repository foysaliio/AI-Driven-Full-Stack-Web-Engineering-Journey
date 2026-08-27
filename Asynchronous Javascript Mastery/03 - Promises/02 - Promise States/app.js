// A Promise has three main states:
//
// 1. pending
// 2. fulfilled
// 3. rejected

const successPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation completed");
  }, 2000);
});

console.log(successPromise);
// Initially:
// Promise { <pending> }

successPromise.then((result) => {
  console.log(result);
  // The Promise is now fulfilled.
});

// Rejected Promise

const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Operation failed"));
  }, 1500);
});

failedPromise.catch((error) => {
  console.log(error.message);
});

// A Promise can settle only once.

const oneTimePromise = new Promise((resolve, reject) => {
  resolve("First result");

  resolve("Second result");

  reject(new Error("Too late"));
});

oneTimePromise.then((result) => {
  console.log(result);
});

// Output:
// First result
