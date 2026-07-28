"use strict";

// ----- a function that returns a Promise (same as previous topic) -----
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

// ----- using async/await instead of .then() -----
async function loadUser() {
  const user = await fetchUser(1); // pauses here until the Promise resolves
  console.log("User loaded:", user);
}
loadUser();

// ----- async functions always return a Promise -----
async function getMessage() {
  return "Hello from async function";
}
getMessage().then(function (message) {
  console.log(message);
});

// ----- handling errors with try...catch -----
async function loadInvalidUser() {
  try {
    const user = await fetchUser(-1); // this will reject
    console.log(user);
  } catch (error) {
    console.log("Caught error:", error);
  }
}
loadInvalidUser();

// ----- running multiple awaits in sequence -----
async function loadTwoUsers() {
  const firstUser = await fetchUser(1);
  console.log("First user:", firstUser);

  const secondUser = await fetchUser(2);
  console.log("Second user:", secondUser);
}
loadTwoUsers();

// ----- running multiple promises at the same time with Promise.all -----
async function loadUsersTogether() {
  const results = await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
  console.log("All users:", results);
}
loadUsersTogether();
