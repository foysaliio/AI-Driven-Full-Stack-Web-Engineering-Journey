"use strict";

// ----- creating a Promise -----
const myPromise = new Promise(function (resolve, reject) {
  const success = true;

  setTimeout(function () {
    if (success) {
      resolve("Task completed successfully");
    } else {
      reject("Task failed");
    }
  }, 1000);
});

// ----- using a Promise: .then() and .catch() -----
myPromise
  .then(function (result) {
    console.log("Success:", result);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

// ----- a Promise that fails -----
const failingPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Something went wrong");
  }, 1000);
});

failingPromise
  .then(function (result) {
    console.log(result); // this will be skipped
  })
  .catch(function (error) {
    console.log("Caught:", error);
  });

// ----- .finally(): runs no matter what -----
myPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Promise finished, success or fail");
  });

// ----- chaining multiple .then() calls -----
function getNumber() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(5);
    }, 500);
  });
}

getNumber()
  .then(function (number) {
    console.log("First result:", number);
    return number * 2; // passes value to the next .then()
  })
  .then(function (doubled) {
    console.log("Doubled result:", doubled);
    return doubled + 1;
  })
  .then(function (final) {
    console.log("Final result:", final);
  });

// ----- a practical function that returns a Promise -----
function fetchUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (id > 0) {
        resolve({ id: id, name: "Ahnaf" });
      } else {
        reject("Invalid user id");
      }
    }, 1000);
  });
}

fetchUser(1)
  .then(function (user) {
    console.log("User found:", user);
  })
  .catch(function (error) {
    console.log(error);
  });
