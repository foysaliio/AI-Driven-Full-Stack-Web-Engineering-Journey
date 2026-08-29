// API stands for Application Programming Interface.
//
// In web development, an API often allows
// a frontend application to communicate with a server.

const apiUrl = "https://jsonplaceholder.typicode.com/users";

// The frontend can request data from this API.

async function loadUsers() {
  const response = await fetch(apiUrl);

  const users = await response.json();

  console.log(users);
  // console.log(response);
}

loadUsers();

// A simple mental model:
//
// Frontend
//    ↓
// HTTP Request
//    ↓
// API / Server
//    ↓
// Database or other logic
//    ↓
// HTTP Response
//    ↓
// Frontend

// Another example

async function loadSingleUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const user = await response.json();

  console.log(`Name: ${user.name}`);

  console.log(`Email: ${user.email}`);
}

loadSingleUser();
