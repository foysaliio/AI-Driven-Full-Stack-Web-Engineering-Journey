// A Promise represents the future result
// of an asynchronous operation.

// The result may become:
// fulfilled with a value
// or rejected with an error.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded successfully");
  }, 2000);
});

console.log(promise);

promise.then((result) => {
  console.log(result);
});

console.log("JavaScript continues running");


// Another example

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id: 101,
        name: "Foysal",
        email: "foysal@example.com",
      };

      resolve(user);
    }, 1500);
  });
}

const userPromise = getUser();

console.log(userPromise);

userPromise.then((user) => {
  console.log("User received:");

  console.log(user);

  console.log(`Welcome, ${user.name}`);
});


// A Promise itself is an object.

console.log(typeof Promise);

console.log(typeof userPromise);