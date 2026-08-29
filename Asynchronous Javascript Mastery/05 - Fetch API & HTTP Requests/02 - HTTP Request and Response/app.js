// HTTP is the protocol commonly used
// for communication between clients and servers.

// A request can contain:
//
// Method
// URL
// Headers
// Body
//
// A response can contain:
//
// Status
// Headers
// Body

async function requestExample() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  console.log(`Status: ${response.status}`);

  console.log(`Success: ${response.ok}`);

  const data = await response.json();

  console.log(data);
}

requestExample();

// Common HTTP methods:
//
// GET    → Read data
// POST   → Create data
// PUT    → Replace data
// PATCH  → Update part of data
// DELETE → Delete data

// Example request structure

async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      title: "Async JavaScript",
      body: "Learning HTTP requests",
      userId: 1,
    }),
  });

  const data = await response.json();

  console.log(data);
}

createPost();
