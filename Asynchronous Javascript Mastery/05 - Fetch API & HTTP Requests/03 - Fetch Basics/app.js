// fetch sends an HTTP request
// and returns a Promise.

const promise = fetch("https://jsonplaceholder.typicode.com/users/1");

console.log(promise);

// Promise style

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Async/await style

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const user = await response.json();

  console.log(user);
}

getUser();

// fetch does not directly return the final JSON data.
//
// fetch()
// ↓
// Promise<Response>
// ↓
// response.json()
// ↓
// Promise<JavaScript Data>


// Flow:

// fetch()
// ↓
// Response
// ↓
// response.json()
// ↓
// Actual Data
