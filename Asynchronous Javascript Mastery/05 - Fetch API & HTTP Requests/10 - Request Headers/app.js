// Headers provide additional metadata
// about an HTTP request.

async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      title: "HTTP Headers",
      body: "Learning request metadata",
      userId: 1,
    }),
  });

  const data = await response.json();

  console.log(data);
}

createPost();

// Authentication headers are common
// in real applications.

async function getPrivateData(token) {
  const response = await fetch("https://example.com/api/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}

// Common headers:
//
// Content-Type: application/json
// Accept: application/json
// Authorization: Bearer <token>
