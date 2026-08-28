// A Promise is created using the Promise constructor.

const promise = new Promise((resolve, reject) => {
  console.log("Promise executor started");

  setTimeout(() => {
    resolve("Promise completed");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

// Important:
// The Promise executor runs immediately.

console.log("Before Promise");

const anotherPromise = new Promise((resolve, reject) => {
  console.log("Inside promise executor");

  resolve("Done");
});

console.log("After Promise");

anotherPromise.then((result) => {
  console.log(result);
});

// Output:
//
// Before Promise
// Inside Promise executor
// After Promise
// Done

// Practical example

const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve({
          allowed: true,
          message: "Access granted",
        });

        return;
      }

      reject(new Error("You must be at least 18 years old"));
    }, 1000);
  });
};

const checkAgeResult = checkAge(20);
const checkAgeResult1 = checkAge(15);

checkAgeResult
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

checkAgeResult1
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
